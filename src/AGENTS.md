# src — Application/frontend source

## Purpose

Owns the main application UI/runtime source for this project.

## Ownership

- `data.js` — product truth, `featuredSlugs`, download/CTA URLs, per-product accents
- `main.jsx` — home chapters, detail routes, header/footer
- `styles.css` — void-black full-bleed scroll-snap chapter layout

## Local Contracts

- Preserve the current frontend stack and component architecture.
- Home is exactly five full-bleed scroll-snap chapters from `featuredSlugs` (Cascade V3, Voice Anywhere, Voice, Synapse Notes, Excalidays). No catalogue grid on the public home surface.
- Sticky nav lists those five product names only.
- Each chapter uses its own accent from `project.accent` — not a single fleet lime. No AI purple/pink gradients.
- Cascade ships an Apple Silicon aarch64 DMG CTA plus secondary GitHub link. Honesty: ad-hoc signed, not notarized, not Intel/Windows/Linux.
- Synapse CTA label is **Download debug APK** (not store/signed). Excalidays is Phase 0/1 only.
- Do not introduce new frameworks without approval.

## Work Guidance

- Read this file after the root `AGENTS.md` before editing this subtree.
- Prefer extending existing modules/files over creating parallel duplicate systems.
- Update this `AGENTS.md` only when durable ownership, contracts, or verification guidance changes.

## Verification

- Frontend/build check from root package manifest when behavior changes.
- HEAD-check featured download URLs before claiming CTAs work.

## Child DOX Index

None.
