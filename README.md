# wotd

Word of the day for various grade levels.

## Overview

WOTD is a simple, kid-friendly app that displays a daily vocabulary word by grade level. Each word includes pronunciation, a definition, and an example sentence. The experience is designed to look great on tablets, laptops, and classroom displays.

## Goals

- Provide a daily word for each grade level (e.g., K–8 initially; flexible).
- Show pronunciation, definition, and a usage sentence for each word.
- Present a clean, accessible UI that reads well at a distance.
- Make it easy to deploy and operate with minimal overhead.

## Key decisions (summary)

- Framework: Next.js (TypeScript, App Router) for a fast, ergonomic UI and API routes.
- Styling: Tailwind CSS for rapid iteration and responsive layouts.
- Hosting: Vercel for frictionless CI/CD, preview deployments, and edge caching.
- Data: Start with a curated static dataset; adopt Supabase (managed Postgres + storage) as needed.
- WOTD selection: Deterministic algorithm initially (no backend required); support scheduled curation once a database is added.
- Accessibility: Large, high-contrast typography and screen-reader friendly markup.

Details and rationale for these choices live in the docs (see links below).

## Documentation

- Decisions: `docs/DECISIONS.md`
- Architecture: `docs/ARCHITECTURE.md`
- Roadmap: `docs/ROADMAP.md`
- ADRs: `docs/adr/`

## Tech stack (initial)

- Next.js (TypeScript, App Router)
- Tailwind CSS
- Vercel (deployment)
- Supabase (optional, when we need a managed database or storage)

## Getting started (local)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   App will be available at `http://localhost:3000`.
3. Production build locally:
   ```bash
   npm run build && npm run start
   ```

## Deploy to Vercel

You have two easy options. No environment variables are required for this initial version.

### A) Git integration (recommended)
- Push this branch to your GitHub repository.
- In the Vercel dashboard, click "Import Project" and select the repo.
- Framework preset: `Next.js` (defaults are fine: `next build`, output handled automatically).
- Click Deploy. Every push creates a preview; the default branch is production.

### B) CLI deploy
- Install the CLI and log in:
  ```bash
  npm i -g vercel
  vercel login
  ```
- Link the project (create or select a Vercel project):
  ```bash
  vercel link
  ```
- Deploy to production:
  ```bash
  vercel deploy --prod
  ```

Non-interactive (CI-friendly):
- Create a Vercel token in your account settings and export it:
  ```bash
  export VERCEL_TOKEN=YOUR_TOKEN
  ```
- Optionally set `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if already created.
- Link and deploy non-interactively:
  ```bash
  npx vercel link --project wotd --yes --token "$VERCEL_TOKEN"
  npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
  ```

## Status

Initial app scaffolded with Next.js and ready for Vercel deployment.
