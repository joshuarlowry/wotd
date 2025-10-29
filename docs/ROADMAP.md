# Roadmap

This roadmap outlines key milestones to deliver WOTD.

## Phase 0 — Foundations (You are here)

- Capture project goals and decisions
- Document architecture and delivery approach

## Phase 1 — Dataset and selection logic

- Curate an initial word list per grade level (static JSON)
- Implement deterministic WOTD selection logic
- Validate data fields (definition, pronunciation, example sentence)

## Phase 2 — App skeleton

- Create a Next.js (TypeScript, App Router) project
- Implement a responsive UI shell and typography scale for displays
- Add Tailwind CSS and basic design system tokens

## Phase 3 — API and rendering

- Add `/api/wotd?grade=...` route
- Render WOTD page with grade selector and accessible presentation
- Add basic caching strategy

## Phase 4 — Polish and accessibility

- Improve contrast, focus states, and keyboard interactions
- Add basic error states and loading skeletons
- Add minimal tests (unit + e2e smoke)

## Phase 5 — Deploy

- Connect repo to Vercel
- Configure environment variables if needed
- Ship initial public preview

## Phase 6 — Supabase integration (optional)

- Migrate dataset to Supabase (Postgres)
- Introduce curated scheduling for WOTD
- Add lightweight admin flow (auth optional)

## Phase 7 — Enhancements (optional)

- Audio pronunciation support and CDN storage
- Internationalization
- Offline-first improvements and prefetching
