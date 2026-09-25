# Shivtej Ghorpade — Experimental Portfolio

This repository contains the static React/Vite portfolio for Shivtej Ghorpade. It is configured for both **GitHub Pages** and **Vercel** deployment. The project uses Wouter for client-side routes and local public assets so it can be uploaded to GitHub without depending on the Manus runtime.

## GitHub Pages

Create a GitHub repository, upload this folder, and push the `main` branch. The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the client with the repository base path, creates the `404.html` SPA fallback, and publishes the `dist/public` folder to GitHub Pages.

In the repository settings, open **Pages** and set the source to **GitHub Actions**. After the first successful workflow run, GitHub will show the published Pages URL in the workflow summary. Internal routes such as `/projects`, `/about`, and `/contact` remain compatible with the repository subpath.

## Vercel

Import the repository into Vercel. Use `pnpm install --frozen-lockfile` as the install command and `pnpm build:client` as the build command. Set the output directory to `dist/public`. The included `vercel.json` provides the SPA fallback for direct route access.

## Local development

```bash
pnpm install
pnpm dev
```

To validate the production client locally:

```bash
pnpm check
pnpm build:client
pnpm preview
```

The custom cursor has been removed. The site uses the browser’s native pointer behavior for a simpler, more portable deployment.
