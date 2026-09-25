# Deploying Shivtej Portfolio

This repository is a static React + Vite portfolio. It can be deployed from GitHub to Vercel without the Manus development server.

## Local validation

```bash
pnpm install
pnpm check
pnpm build:client
pnpm preview
```

The client build is emitted to `dist/public`.

## GitHub

Create or open a repository, then push the project directory including `pnpm-lock.yaml`, `vercel.json`, `.github/workflows/ci.yml`, and `client/public/assets/`. The GitHub Actions workflow runs on pushes and pull requests to `main` or `master`; it installs with the locked pnpm version, runs TypeScript checking, and builds the client.

GitHub Pages is not the preferred host for this app because client-side Wouter routes require a history fallback. If GitHub Pages is required, configure a Pages SPA fallback or use hash routing before publishing.

## Vercel

Import the GitHub repository in Vercel with these settings:

| Setting | Value |
|---|---|
| Framework preset | Vite (or Other) |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:client` |
| Output directory | `dist/public` |
| Root directory | repository root |

`vercel.json` already includes the SPA rewrite so `/projects`, `/about`, `/contact`, and project detail routes resolve to the React entrypoint. Local portfolio images and Credly artwork live under `client/public/assets/`, so the external deployment does not depend on Manus storage URLs.

## Notes

The Manus deployment remains the native hosted version. The external configuration is intentionally client-only: it does not deploy `server/index.ts`, Manus debug tooling, or Manus-only environment secrets. Analytics configured through Manus environment placeholders may not be active on Vercel unless equivalent Vercel environment variables are supplied.
