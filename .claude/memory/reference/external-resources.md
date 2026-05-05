---
name: External resources for sathwick-portfolio
description: Where to find live site, published artifacts, and external systems relevant to this project
type: reference
originSessionId: b47fa79c-86b2-4bad-b550-3b247471558b
---
- **Live site:** https://sathwickreddyy.github.io/sathwick-portfolio/ — deployed from `gh-pages` branch via the `.github/workflows/deployToGithubPages.yml` action on push to `main`.
- **Published library (a real project):** https://www.npmjs.com/package/@sathwickreddyy/cognito-auth-library — the React Cognito Auth library referenced in the Projects section.
- **GitHub profile:** https://github.com/sathwickreddyy
- **LinkedIn:** https://www.linkedin.com/in/sathwickreddy/
- **EmailJS secrets** live in GitHub Actions repo secrets under the names `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`. For local Docker, the same names go in a root `.env` (not committed).
