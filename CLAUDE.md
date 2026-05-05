# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Claude autonomy (project-specific)

**Standing authorization:** After completing any bug fix, feature, or discrete refactor in this repo and verifying it (build/lint/smoke test), Claude may commit the work without asking for per-commit approval. This overrides the global "only commit when I ask" rule for *this repository only*.

- Split into atomic commits, one logical unit each; conventional-commit format `type(scope): short description`.
- Stage only files that belong to the current unit — never `git add -A` or `git add .`.
- Each commit ends with the `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` footer.
- Do NOT push. Do NOT create PRs. Do NOT run destructive operations (force-push, reset --hard, branch deletion). Those still need explicit permission.
- If the units are tightly coupled (e.g., file rename + import update), combine into one commit — don't split for the sake of splitting.

## Commands

```bash
npm run dev         # Vite dev server (default http://localhost:5173/sathwick-portfolio/)
npm run build       # Production build → dist/
npm run preview     # Serve the production build locally
npm run lint        # ESLint flat config (eslint.config.js), ignores dist/
npm run deploy      # gh-pages -d dist (predeploy runs build); pushes to gh-pages branch
```

No test runner is configured — there are no unit or e2e tests in this project.

EmailJS (contact form) reads `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY` from Vite env. Create `.env` locally for dev; CI pulls the same names from GitHub Actions secrets.

### Docker (local prod preview)

```bash
docker compose up -d --build     # build + run nginx serving dist/ at http://localhost:5173/sathwick-portfolio/
docker compose logs -f web       # tail nginx logs
docker compose down              # stop + remove
```

This is a **prod-mode preview**, not dev — no HMR. The multi-stage `Dockerfile` runs `npm ci && npm run build` in a `node:20-alpine` builder and copies `dist/` into an `nginx:1.27-alpine` runner. `nginx.conf` serves the app under `/sathwick-portfolio/` and 302-redirects `/` to the base path so `localhost:5173` doesn't 404.

**EmailJS inside Docker**: Vite inlines env vars at *build* time, so they must be passed as Docker build args, not runtime env. `docker-compose.yml` uses `${VITE_APP_EMAILJS_*:-}` so a missing `.env` won't break the build — the contact form just won't work. To enable it: create `.env` at the repo root with the three keys, then `docker compose up -d --build` (compose auto-reads `.env`).

## Deployment

Two paths, both produce the same result:
- **CI (default)**: push to `main` triggers `.github/workflows/deployToGithubPages.yml`, which builds with EmailJS secrets and publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v3` (`force_orphan: true`).
- **Manual**: `npm run deploy` uses the `gh-pages` npm package to do the same push from your machine. Does *not* inject EmailJS secrets — build before deploying only if those env vars are set locally.

## Architecture

Single-page React 18 + Vite app deployed to GitHub Pages. Composition is top-down in `src/App.jsx`: `Navbar` + `PortfolioHero` render eagerly; `About`, `Experience`, `Projects`, `Clients`, `Contact`, `Footer` are `React.lazy`-loaded under a single `<Suspense>`. The whole tree is wrapped in a Redux `<Provider>`.

### GitHub Pages base path (critical gotcha)

`vite.config.js` sets `base: "/sathwick-portfolio/"`. Vite rewrites `import` URLs automatically, but **string-literal asset paths do not get rewritten**. Every asset reference in `src/constants/*.js` is hard-coded with the `/sathwick-portfolio/` prefix (e.g., `PROFILE_PIC = "/sathwick-portfolio/assets/grid1_1.png"`, GLB/texture paths in `constants/components.js`). If you rename the repo, fork it, or change the base, you must update both `vite.config.js` and every constants file. New assets must follow the same convention.

### State management

Redux Toolkit store at `src/utilities/redux/applicationStore.jsx` with two thin slices:
- `hire` (`hireSlice.jsx`) — tracks hire-button click state.
- `resume` (`viewResume.jsx`) — boolean toggle for swapping the "View Resume" grid tile between a preview image and an inline `<iframe>` PDF viewer (`utilities/PDFViewer.jsx`). The toggle is driven from both `Navbar` (Resume link) and `About`'s `GridColSpan4`.

Local component state handles ephemeral UI (nav sidebar open/close, project carousel index, contact form, copy-to-clipboard confirmations).

### 3D rendering (React Three Fiber)

Two `<Canvas>` scenes live in user-facing code:
- `sections/Experience.jsx` → `components/Developer.jsx` (GLB rig with four FBX animations: `idle`/`salute`/`clapping`/`victory`). Hovering a work-experience card swaps `animationName`, which runs fadeIn/fadeOut via `useAnimations`.
- `sections/Projects.jsx` → `components/DemoComputer.jsx` (GLB monitor with a video texture that plays the selected project's demo MP4; GSAP spins it in on mount).

A third scene, `sections/hero/ThreeFiberHero.jsx` (HackerRoom + Cube + Rings + AmazonLogo + Target), is fully implemented but **not imported anywhere**. `App.jsx` uses the simpler `PortfolioHero.jsx` (static image + Framer Motion + `react-type-animation`). Treat `ThreeFiberHero` as dormant — don't assume it's live.

All 3D asset paths (GLB, FBX, textures) are centralized in `src/constants/components.js`. The responsive positioning/scaling for the dormant hero scene is computed by `calculateSizes(isSmall, isMobile, isTablet)` in `src/constants/index.js` using `react-responsive` media query hooks.

### Directory conventions

- `src/sections/` — full-page sections referenced by anchor IDs (`#home`, `#about`, `#experience`, `#projects`, `#contact`, `#resume`). The hero lives under `src/sections/hero/`.
- `src/components/` — reusable UI + 3D mesh components.
- `src/constants/` — one file per section/domain; holds all copy, labels, image paths, and config. **Add new strings and asset URLs here rather than inline in JSX.**
- `src/utilities/` — cross-cutting helpers (`PDFViewer`, `ShowResume`) and the Redux store/slices under `src/utilities/redux/`.
- `public/` — static assets served at the base path: `assets/` (images/SVGs), `models/` (`.glb`, `animations/*.fbx`), `textures/` (images + project MP4s), `pdfs/resume.pdf`.

### Styling

Tailwind CSS with a custom dark palette (`black.100`–`black.600`, `white.500`–`white.800`) and the `generalsans` font family defined in `tailwind.config.js`. Repeated component patterns are extracted as `@apply` utilities in `src/index.css` under `@layer utilities` (e.g., `.c-space`, `.grid-container`, `.head-text`, `.nav-ul`, `.field-input`) — prefer these over duplicating long class lists.
