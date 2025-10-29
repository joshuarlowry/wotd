# Architecture

This document describes the high-level architecture for WOTD.

## System overview

- Client: Next.js (TypeScript, App Router) renders the UI and fetches the word of the day.
- API: Next.js Route Handler (serverless function) provides `/api/wotd?grade=...`.
- Data: Starts as a static curated dataset (e.g., JSON files in the repo). Can migrate to Supabase (Postgres) when we need editorial control.
- Hosting: Vercel for deployments, previews, and edge caching.

## Components

- UI
  - Responsive layout with large, high-contrast typography suitable for classroom displays
  - Accessible by default (labels, roles, keyboard focus)
- API Route: `GET /api/wotd?grade=k|1|2|...`
  - Returns a JSON payload for the word of the day for the given grade
  - Includes fields: `word`, `gradeLevel`, `pronunciation`, `definition`, `exampleSentence`, optionally `partOfSpeech`, `phonetic`, `audioUrl`
- Data access
  - Phase 1: Read-only from a static dataset (bundled with the app)
  - Phase 2: Read/write from Supabase (managed Postgres + storage)

## Word model (logical)

- `id: string`
- `word: string`
- `gradeLevel: string` (k, 1, 2, ...)
- `partOfSpeech?: string`
- `pronunciation?: string`
- `phonetic?: string`
- `definition: string`
- `exampleSentence: string`
- `audioUrl?: string`

## Selection logic

Initially we use a deterministic algorithm so that the same grade and date produce the same word without a backend.

```ts
function getWordOfTheDay(words: Word[], grade: string, date: Date): Word {
  const ordinal = Math.floor((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - Date.UTC(1970, 0, 1)) / 86400000);
  const gradeSeed = (() => {
    // Simple grade seed: map known grade strings to small integers
    const map: Record<string, number> = { k: 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8 };
    return map[grade] ?? 0;
  })();
  const index = Math.abs((ordinal + gradeSeed) % words.length);
  return words[index];
}
```

When using Supabase, we can introduce a `schedule` table that maps `(date, grade)` to a `word_id` for editorial control. The API route can:

1. Check if a curated schedule entry exists for the given date/grade.
2. Return the scheduled word if present.
3. Otherwise fall back to deterministic selection.

## API response shape (example)

```json
{
  "word": "cautious",
  "gradeLevel": "3",
  "pronunciation": "KAW-shuhs",
  "definition": "Careful to avoid potential problems or dangers.",
  "exampleSentence": "Be cautious when crossing the street.",
  "partOfSpeech": "adjective",
  "phonetic": "/ˈkɔːʃəs/",
  "audioUrl": null
}
```

## Caching

- The API route can be deployed to the Edge with daily caching (e.g., cache key includes date and grade).
- Use `stale-while-revalidate` to smooth out traffic spikes around midnight transitions.

## Future: Supabase schema (sketch)

- Table `words` as described in `DECISIONS.md`.
- Optional table `schedule` with columns `(date, grade_level, word_id)` and a composite unique index.

## Observability

- Minimal logging for API errors.
- No analytics in the initial release.
