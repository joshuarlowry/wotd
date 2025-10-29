# ADR 0001: Initial architecture and stack

- Status: Accepted
- Date: 2025-10-29

## Context

We are building a Word of the Day (WOTD) app that shows a daily vocabulary word per grade level with pronunciation, a definition, and an example sentence. The UI must be accessible and look great on tablets, laptops, and classroom displays. The app will be developed with Cursor and deployed to Vercel. Supabase may be used if/when we need a managed database or storage.

## Decision

- Use Next.js with TypeScript and the App Router for the web app and serverless API routes.
- Use Tailwind CSS for styling.
- Deploy to Vercel (CI/CD, previews, edge caching).
- Start with a static curated dataset to power WOTD selection; integrate Supabase later for editorial control and content growth.
- Implement a deterministic WOTD selection algorithm initially; add a curated schedule (via DB) when needed.

## Consequences

- We can ship an initial version quickly with minimal infrastructure.
- The deterministic approach has limited editorial control until a database-backed schedule is introduced.
- Vercel provides an excellent developer and deployment experience but implies a serverless-first architecture.
- Tailwind accelerates layout/typography iteration for large, readable displays.

## Alternatives considered

- Create a custom Node/Express backend: more control but unnecessary complexity for v1.
- Use a different framework (e.g., SvelteKit, Remix): both viable; Next.js aligns best with Vercel.
- Adopt a database from day one: more setup, slower initial iteration without clear need.
