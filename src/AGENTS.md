# src — Application/frontend source

## Purpose

Owns the main application UI/runtime source for this project.

## Ownership

- `data.js` — product truth, `featuredSlugs`, download/CTA URLs
- `main.jsx` — home chapters, detail routes, header/footer
- `styles.css` — void-black full-bleed chapter layout

## Local Contracts

- Preserve the current frontend stack and component architecture.
- Home is exactly four full-bleed chapters from `featuredSlugs` (Cascade V3, Voice Anywhere, Voice, Synapse Notes). No catalogue grid on the public home surface.
- Keep lime accent `#C8FF00`. Cascade `download` stays `null` (no empty `/releases` download link).
- Do not introduce new frameworks without approval.

## Work Guidance

- Read this file after the root `AGENTS.md` before editing this subtree.
- Prefer extending existing modules/files over creating parallel duplicate systems.
- Update this `AGENTS.md` only when durable ownership, contracts, or verification guidance changes.

## Verification

- Frontend/build check from root package manifest when behavior changes.

## Child DOX Index

None.
