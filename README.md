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

## Deployment

This project is intended to deploy on Vercel. When the application code is added, connect the repository to Vercel and use default build settings. Environment variables and secrets (if any) will be configured in the Vercel dashboard.

## Status

Initial planning and documentation. Implementation to follow.
