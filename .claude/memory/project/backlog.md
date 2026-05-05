---
name: Portfolio backlog
description: Non-redesign pending work in sathwick-portfolio — content to add, lint debt, deprecated deps. Redesign work lives in redesign-backlog.md.
type: project
originSessionId: b47fa79c-86b2-4bad-b550-3b247471558b
---
**Scope split:**
- **This file** — maintenance, content additions, and non-design debt.
- **`redesign-backlog.md`** — all per-page and design-system redesign items.

Update this file when items are added/completed. Don't duplicate entries between the two files.

## Content additions

- **Real projects to add to Projects section.** Only the React Cognito Auth library is real work; 5 placeholder projects (Podcastr, LiveDoc, CarePulse, Horizon, Imaginify) were removed because user said they were "added for the sake of adding." As new projects become ready, append entries to `myProjects` in `src/constants/projects.js`. `Projects.jsx` hides prev/next nav when there's only one project — buttons auto-reappear once count > 1.
- **Resume PDF refresh cadence.** `public/pdfs/resume.pdf` has no last-updated tracking. Should refresh in sync with role/project changes.

## Code debt (non-blocking)

- **~40 ESLint errors** in untouched files — unused React 17-style imports, unescaped apostrophes, missing prop-types on 3D components (`Developer`, `DemoComputer`, `Button`). Run `npm run lint` to see current state. Fix in a dedicated chore commit OR sweep during the redesign pass when those files are being touched anyway.
- **Deprecated dep warnings**: `three-mesh-bvh@0.7.8` flagged for three.js version incompatibility. Bump to `0.8.0` when it comes up — nothing's broken currently.

## Items absorbed by redesign-backlog.md

These were originally standalone items but are now subsumed into specific redesign tasks. Cross-references kept so nothing falls through:

- Contact form robustness → `redesign-backlog.md` item #13
- Globe enhancement → `redesign-backlog.md` item #12
- `About` chunk size (566KB) → `redesign-backlog.md` item #6 (performance)
