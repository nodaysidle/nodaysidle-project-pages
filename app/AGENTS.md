# app — Next.js application source

## Purpose

Owns the production Next.js App Router portfolio/project showcase.

## Ownership

- `layout.jsx`
- `page.jsx`
- `[slug]/page.jsx`
- `data.js`
- `globals.css`

## Local Contracts

- Keep the first screen as an actual portfolio/project experience, not a generic marketing explainer.
- Preserve sections for identity, selected projects, technical stack, active agents/workflows, and contact.
- Keep public project claims grounded in real repositories, releases, artifacts, checksums, or verified proof notes.
- No TypeScript requirement in this app; current build path uses JavaScript App Router files plus `next.config.mjs`.

## Verification

From the repo root:

```bash
npm run build
```

For production smoke after build:

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

Then verify `/` and at least one project route such as `/nodaysidle-control-room/`.
