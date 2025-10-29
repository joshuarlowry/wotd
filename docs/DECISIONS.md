# Decisions

This document records the key decisions for the WOTD (Word of the Day) project. It complements the ADRs in `docs/adr/` by providing a concise summary of what we chose and why.

## Product scope

- The application displays a daily vocabulary word per grade level.
- Each word includes pronunciation, definition, and an example sentence.
- The UI must look great on tablets, laptops, and classroom displays.

## Technology stack

- Framework: Next.js (TypeScript, App Router)
  - Rationale: First-class support on Vercel, serverless API routes, fast dev experience, excellent DX with Cursor.
- Styling: Tailwind CSS
  - Rationale: Rapid iteration, responsive, utility-first ergonomics.
- Hosting/CI/CD: Vercel
  - Rationale: Zero-config previews, edge caching, easy environment management.
- Database (optional/when needed): Supabase (managed Postgres + storage)
  - Rationale: Managed database, easy auth/storage if needed, generous developer experience.

## Data strategy

- Phase 1: Static curated dataset (checked into the repo) for speed and simplicity.
- Phase 2: Supabase database when we need editorial control, content expansion, and analytics.

### Proposed Supabase schema (future)

- Table: `words`
  - `id` (uuid)
  - `word` (text, unique per locale)
  - `grade_level` (text or enum: e.g., k, 1, 2, ..., 8)
  - `part_of_speech` (text)
  - `pronunciation` (text)
  - `phonetic` (text, optional)
  - `definition` (text)
  - `example_sentence` (text)
  - `audio_url` (text, optional)
  - `date_assigned` (date, nullable; used for curated schedules)
  - `created_at` (timestamp with time zone, default now)

## Word-of-the-day selection strategy

- Initial (no DB): Deterministic selection based on date and grade level.
  - Example: `index = (ordinal(date) + gradeSeed) % words.length`.
  - Pros: No backend required, same result across clients for a given day.
  - Cons: No editorial control, repeats if word list is short.
- With DB: Support a "schedule" table that maps `(date, grade)` to `word_id` for curated choices. Fallback to deterministic if a date isn’t scheduled.

## Accessibility and UX

- Large, high-contrast typography suitable for classroom displays.
- Screen reader-friendly semantics and labels.
- Keyboard navigability and focus styles by default.

## Internationalization (i18n)

- Out of scope for the initial release; structured to be added later.

## Privacy and analytics

- No tracking for initial release.
- If analytics are added later, use privacy-preserving defaults and ensure clear disclosures.

## Testing

- Unit tests for selection logic and data validation (e.g., with Vitest/Jest).
- Lightweight e2e smoke tests (e.g., Playwright) once UI is implemented.

## Built with Cursor, deployed to Vercel

- Primary development environment: Cursor.
- Primary deployment target: Vercel.
