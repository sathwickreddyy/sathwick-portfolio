---
name: Redesign backlog — per-page + cross-cutting
description: Exhaustive enhancement list for sathwick-portfolio, structured so user can pick one item per sitting and work it end-to-end with references
type: project
originSessionId: b47fa79c-86b2-4bad-b550-3b247471558b
---
**How to use this file:** when Sathwick is ready to redesign, he'll pick ONE item below, gather references for just that item, and we'll run the brainstorming → frontend-design flow on it alone. Each item is scoped for one focused sitting (~1–3 hours). **Do not attempt multiple items in one session** — scope creep is the enemy here.

Before starting any item, re-read the file that item touches (code has likely moved on) and confirm with Sathwick what's changed since this backlog was written.

**Legend:**
- ⭐ = high impact on "does this feel like a senior engineer's portfolio"
- ⚡ = quick win (scoped under ~1 hour)
- 🧠 = needs brainstorming + reference gathering before touching code
- 📚 = needs Sathwick to provide content/copy, not just design decisions

---

## P0 — Cross-cutting foundations (do these first; they set constraints for every page)

### 1. Design system: color, type, spacing tokens ⭐🧠

**Current:** Tailwind config has a custom `black.*` and `white.*` palette and `generalsans` font family. No accent color, no semantic tokens (primary/secondary/muted), no spacing scale choices beyond Tailwind defaults. Everything reads as "dark neutral with no personality."

**Scope:**
- Pick an accent/brand palette (1 primary, 1 secondary, success/error/warn).
- Pick a type pairing — display font + body font. General Sans is fine for body; the display font is the decision.
- Define a spacing rhythm (section padding, gutter, component padding).
- Extend `tailwind.config.js` with semantic tokens (`bg-surface`, `bg-surface-raised`, `text-primary`, `text-muted`, `border-subtle`) rather than raw hex.
- Delete the unused `text-gray_gradient`, `arrow-gradient`, `customBlack` if they don't survive the pass.

**Gather before starting:** 2–3 reference portfolios showing the aesthetic target (minimal-mono, brutalist-editorial, glassy-dark, etc.). Screenshot the hero + one interior section from each.

**Success check:** every color and font-size in every section references a semantic token — no `text-[#afb0b6]` or `bg-neutral-950` literals.

---

### 2. Typography hierarchy + microtypography ⚡

**Current:** `.head-text` is `sm:text-4xl text-3xl font-semibold` + gradient. Body is default Tailwind sizing. No letter-spacing tuning, no font-variant-numeric, no balanced line wrapping. Some sections use `text-justify` which looks unprofessional on the web.

**Scope:**
- Define H1/H2/H3/H4/body/caption scale in Tailwind.
- Remove `text-justify` across the repo (5+ occurrences).
- Add `text-balance` to headings, `text-pretty` to body paragraphs.
- Tune letter-spacing for display text (`tracking-tight` on headings).
- Enable `font-variant-numeric: tabular-nums` for dates/numbers so year columns align.

**Gather before starting:** nothing extra — apply after #1 is settled.

---

### 3. Motion/interaction language 🧠

**Current:** Framer Motion used ad-hoc (hero slide-ins, Experience scroll-in), GSAP used once (DemoComputer spin), no shared easing/duration tokens, no reduced-motion support.

**Scope:**
- Define `duration` and `ease` tokens (e.g., `fast: 150ms`, `base: 250ms`, `slow: 400ms` + `ease-out-expo`).
- Centralize Framer variants in `src/utilities/motion.js` so sections import from one place.
- Respect `prefers-reduced-motion` everywhere.
- Decide motion vocabulary: fade+slide? scale? blur-in? Pick one and stick to it.

**Gather before starting:** 2–3 reference sites with motion you like. Describe *what moves* and *when* (on scroll, on hover, on load).

---

### 4. SEO, OG, meta, favicons ⚡📚

**Current:** `<title>` is "Sathwick's Portfolio", no description, no OG image, no Twitter card, no JSON-LD. Favicon is `sr-logo.png` (not sized variants).

**Scope:**
- Meta description, keywords, author.
- OG image (1200×630) — a branded card, not a raw photo.
- `<link rel="canonical">`.
- JSON-LD `Person` schema (name, role, sameAs linking LinkedIn/GitHub).
- Proper favicon set (16, 32, 180 for apple-touch).
- Update `<html lang>` confirmed correct (`en`).

**Gather before starting:** OG image needs to be designed after #1 (so colors/type match). This item runs AFTER #1.

---

### 5. Accessibility sweep ⚡

**Current:** Lots of small issues — `alt=""` not used for decorative images, heading order broken in places (Footer uses `<h2>`), form inputs have labels but no `aria-describedby` for errors, 3D canvases have no a11y alternative, no skip-to-content link, focus styles are browser default.

**Scope:**
- Add skip-to-content link.
- Audit and fix heading order across all sections.
- Add visible `:focus-visible` styles matching the brand.
- Decorative images → `alt=""`.
- 3D canvas → add `aria-label` or hidden text describing the scene.
- Form → inline error handling with `aria-describedby` (ties into the Contact item #8 below).
- Run axe or Lighthouse accessibility audit and fix findings.

**Gather before starting:** nothing — follow WCAG AA.

---

### 6. Performance pass ⚡

**Current:** `About` chunk is 566KB gzipped to 175KB, `extends` chunk 682KB (175KB gzipped), three-mesh-bvh has a deprecation warning, no image preload hints, no `<link rel="preconnect">` for unpkg.com (used by react-globe.gl).

**Scope:**
- `vite.config.js` `manualChunks` — split three.js, @react-three/drei, react-globe.gl into vendor chunks.
- Lazy-load `react-globe.gl` specifically (it's only in the About section's GridColSpan3).
- Preload the hero profile image via `<link rel="preload">`.
- Convert PNG assets to WebP/AVIF where possible (the `public/assets/` folder has 40+ PNGs).
- Add `<link rel="preconnect" href="https://unpkg.com">` for the globe textures.
- Audit FBX/GLB sizes; compress with Draco or meshopt if any exceed 2MB.

**Gather before starting:** run `ls -lh public/models/ public/assets/` to see what's oversized.

---

## P1 — Per-page enhancements

### 7. Hero redesign (PortfolioHero) ⭐🧠📚

**Current:** `src/sections/hero/PortfolioHero.jsx` renders a static photo on the right, name + typewriter + bio on the left, a "Let's work together" CTA, and social icons. Fine but generic. The more ambitious `ThreeFiberHero.jsx` (HackerRoom GLB scene) exists but isn't imported.

**Scope decisions (pick one direction per below):**
- **Photo vs 3D vs typographic hero** — keep photo, revive the HackerRoom scene, or go type-first with no imagery?
- **Bio length** — current `HERO_CONTENT` is ~80 words. Shorten? Break into bullets?
- **CTA treatment** — one primary CTA or multiple (Resume / Contact / Latest project)?
- **Typewriter copy** — currently cycles 5 role variants. Replace with a single confident tagline?

**Gather before starting:** 3–5 hero references showing the direction you want. Note whether you like them for *imagery*, *layout*, or *copy voice*.

**Success check:** a stranger lands on the hero and can tell what you do + what you want them to do within 3 seconds.

---

### 8. About section restructure ⭐🧠

**Current:** `src/sections/About.jsx` — 5-card bento grid:
  - G1: profile photo + short bio
  - G2: tech-stack illustration + description (mostly a wall of text)
  - G3: interactive 3D globe with Night/Day toggle + "I work remotely" copy
  - G4: resume preview with View/Download/Go-back states (dispatches Redux)
  - G5: email + phone with copy-to-clipboard

The bento is visually busy but mostly read-only. Copy in G2 is 4 dense sentences; no visual tech-stack icons grid.

**Scope:**
- Decide whether to keep the bento or go linear.
- G2 tech-stack tile: replace paragraph with an actual visible tech-stack icon grid (AWS, Java, Python, React, etc.) organized by category.
- G3 globe: see separate Globe item #12 below — decide whether to redesign inline or extract.
- G4 resume: hit rate on "View Resume" inline iframe is probably low; consider replacing with a "Download PDF" + a stats/achievements tile instead.
- G5 contact: looks like a support card; consider removing since there's a full Contact section at the bottom.

**Gather before starting:** references of About pages from senior engineer portfolios. Note whether they use bento, linear scroll, or timeline.

---

### 9. Experience section timeline ⭐🧠

**Current:** 3D `Developer` avatar plays different animations (idle/salute/clapping/victory) on hover — visually clever but doesn't convey information. Right column is a vertical list: logo + name + position + duration + title (dense paragraph).

**Scope:**
- Decision: keep the 3D avatar gimmick or replace with something more informative (timeline, achievement cards, tech-stack-per-role)?
- If keeping avatar: add purpose (e.g., each role has a different backdrop, or the avatar holds a company logo).
- Rewrite role descriptions — current ones are ATS resume bullets crammed into one paragraph. Break into 2–3 punchy achievements per role.
- Consider adding visible impact metrics (the Amazon role mentions "$100K+ monthly savings" — make this a number that jumps out visually).
- Consider a "What I'm proud of" micro-callout per role.

**Gather before starting:** 3 references showing how senior engineers narrate career in portfolios (card timeline, horizontal scroller, "my story" essay, etc.).

📚 Copy work: role descriptions need rewriting regardless of layout.

---

### 10. Projects section redesign ⭐🧠📚

**Current:** only one real project (React Cognito Auth lib) — prev/next nav auto-hides. Layout is a split card (text + 3D computer with video texture). The 3D computer is heavy (101KB chunk, needs GLB + video load) for a single project.

**Scope:**
- Decide whether the 3D computer makes sense for one project, or whether to replace with a clean video/screenshot.
- Design for scaling — what happens when there are 3, 5, 10 projects? Carousel? Grid? Filterable by tech?
- Add metrics per project (downloads, stars, users, savings) — the cognito library already says "hundreds of weekly downloads, thousands of monthly auths" in its copy, but this should be a visual stat, not a sentence.
- Decide whether to link to GitHub + npm + live demo consistently across projects.
- Handle case of projects that aren't OSS (enterprise work at MS/Amazon can't link out).

**Gather before starting:** 3 references. Critical: bring projects of similar maturity (1–3 real projects, not 15), since layouts for "rich portfolios" don't translate down.

📚 Need real project content queued: at minimum 2 more projects Sathwick wants to showcase, with copy + links + screenshots or videos.

---

### 11. Work Experience "Clients" / Testimonials section 🧠

**Current:** `src/sections/Clients.jsx` pulls 4 quote cards from `constants/clients.js`. Currently NOT linked from nav (no anchor in `navLinks`). Titled "Hear from my Peers."

**Scope:**
- Decide if this section stays. Pros: social proof from Amazon colleagues. Cons: quotes read like generic LinkedIn recommendations, not the "here's what it was like to work with him" voice.
- If staying: shorter quotes (pick the 2 most distinctive lines from each, not the whole paragraph).
- Add to nav OR move visual weight down so it reads as supplementary.
- Consider LinkedIn testimonial export with proper visual attribution + profile link.

**Gather before starting:** nothing — this is primarily a content decision, not design.

---

### 12. Globe section dedicated redesign ⭐🧠

**Current:** `react-globe.gl` sphere at About > GridColSpan3, single "I'm Here" label at Bangalore, Night/Day toggle, hard-coded "I work remotely" copy. Feels decorative rather than informative.

**Scope:**
- Decide purpose: is this "I'm from India," "I work globally," "here's my journey across companies," or "my open-source users are here"?
- Candidate ideas:
  - Arcs from Bangalore to NYC (Morgan Stanley), Seattle (Amazon), Redwood (Oracle) — tells career story
  - Real-time "3pm in my timezone" indicator
  - If npm library users are trackable, show dots where real users live
  - Auto-rotate with pause-on-hover instead of toggle
  - Swap default earth textures for something branded (stylized geography)
- If the globe can't earn its screen real estate, **cut it** — a globe that's purely decorative on a senior engineer portfolio reads as template-y.

**Gather before starting:** 2 references of globes used meaningfully in portfolios/products. If you can't find any, that's a signal that cutting it is the right call.

---

### 13. Contact section polish + robustness 🧠

**Current:** EmailJS form with inline aria-live status (recently fixed from alert()). Terminal background image behind the form on lg+. Copy is generic "Let's Talk."

**Scope:**
- Client-side validation — required field inline errors, email format, message min length.
- Honeypot field to reduce spam.
- Rate-limit client-side (one submission per 30s).
- Loading spinner in-button instead of just disabled state.
- Consider preferred-contact-method selector (Email / LinkedIn / Schedule a call).
- Rewrite copy for intent specificity (who is this for — recruiters? collab? both?).

**Gather before starting:** nothing specific — this item is mostly engineering polish. Already in `memory/project/backlog.md` as the deferred contact-form item; merging that bullet here.

---

### 14. Footer redesign ⚡

**Current:** 3-column layout: Terms/Privacy (links go nowhere), social icons, copyright. The Terms/Privacy links are broken — they're `<p>` tags with no href.

**Scope:**
- Either wire up Terms/Privacy (they exist?) or remove them.
- Add built-with credits, latest-updated date, repo link.
- Consider a mini "What I'm working on now" or current status line (inspired by nownownow.com).
- Fix the heading hierarchy — currently has an `<h2>` in footer, which breaks page structure.

**Gather before starting:** nothing — quick unit.

---

### 15. Navigation + scroll UX ⚡🧠

**Current:** Top-fixed nav with anchor links + hamburger on mobile. Resume link opens the inline iframe. Uses smooth-scroll via CSS `scroll-behavior: smooth`. No active-section indicator, no scroll progress bar, no keyboard shortcuts.

**Scope:**
- Active-section highlight in nav as user scrolls.
- Scroll progress bar at top.
- Maybe a command palette (Cmd+K) that lists sections — would read as "advanced."
- Mobile nav animation polish (currently `max-h-0 → max-h-screen` transition).
- Decide if the owner name in nav ("Sathwick Reddy - A Senior Software Developer") is too long — might want "Sathwick Reddy" only with the title moving to the hero.

**Gather before starting:** 2 references showing nav treatment you like. Note whether you want minimal (just links) or rich (progress bar, shortcuts, meta info).

---

### 16. Resume viewer experience 🧠

**Current:** Inline iframe of the PDF inside the About > G4 tile. Download button. PDF is `public/pdfs/resume.pdf`. On mobile, the iframe is cramped.

**Scope:**
- Decide: inline PDF viewer vs modal/drawer vs dedicated /resume route vs download-only.
- If keeping inline: use pdf.js with proper controls (page nav, zoom, fit-to-width).
- Consider a "read online" HTML version of the resume that matches the portfolio aesthetic (would be distinctive — most portfolios just link a PDF).
- Add resume-last-updated timestamp so recruiters can trust freshness.

**Gather before starting:** references of how senior engineers surface resumes. Note the split between "here's my PDF" vs "here's my resume as a styled page."

---

## P2 — New sections worth considering (ask before building)

### 17. Writing / blog section 🧠📚

**Current:** No blog. Sathwick's CLAUDE.md mentions system-design-learning project — if he writes elsewhere (Medium, Dev.to, personal Substack), a portfolio link-out + excerpt card would add depth.

**Scope:** decide whether to host posts here (MDX) or link out. If link out, show 3 most recent as cards.

📚 Requires real writing to exist. Skip unless he actually writes.

---

### 18. Skills / tech visualization ⚡🧠

**Current:** Tech stack is buried in About G2 as a paragraph.

**Scope:** a proper skills section with categorization (Languages, Frameworks, Cloud, AI, Data) — either as a grid of icons with hover-reveal confidence levels, or a tag cloud sized by proficiency, or grouped cards. Distinct from About's tech-stack tile so doesn't feel redundant — this is deeper, that is a summary.

---

### 19. Gen AI / agent work showcase 🧠📚

**Current:** Mentioned in hero + Morgan Stanley role, but no dedicated surface. Given Sathwick's emphasis on "pioneering Gen AI solutions and autonomous agent development," this deserves its own section — especially if he has demo videos or live agent interfaces to show.

**Scope:** a section that lets Gen AI work be first-class, not a bullet in a role description. Could be 2–3 agent demos with short explainer videos, architecture diagrams, or a live "talk to my agent" widget.

📚 Requires Sathwick to decide what's shareable given MS confidentiality.

---

## Out of scope for redesign (tracked elsewhere)

- Pre-existing lint backlog (40 unused-React-import style errors) — `memory/project/backlog.md`
- Future real project additions to `myProjects` — `memory/project/backlog.md`

---

## Workflow reminder

Per user preference (`memory/feedback/working-style.md`):
1. User picks **one** item from above.
2. User brings references specific to that item.
3. Claude invokes the **brainstorming** skill for clarifying questions + 2-3 approaches.
4. Claude invokes the **frontend-design** skill, starting with a Dribbble-style live component gallery per his global CLAUDE.md rule.
5. Ship it with atomic commits per the project autonomy rule.
6. Move to next item in a future session — don't chain items in one sitting.
