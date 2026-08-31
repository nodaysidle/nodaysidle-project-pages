# NODAYSIDLE Project Pages

Public showcase site for NODAYSIDLE software releases, project pages, and source repositories.

Visitors can use this site to:
- browse NODAYSIDLE applications
- open product-specific showcase pages
- navigate to public source repositories
- access release downloads when available

![Platform](https://img.shields.io/badge/platform-Web-black?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)

Live site: [nodaysidle-project-pages.vercel.app](https://nodaysidle-project-pages.vercel.app)

## Overview

NODAYSIDLE Project Pages is a React + Vite static site that acts as the public showcase layer for NODAYSIDLE software. Each project route presents product framing, visual identity, proof notes, and release access in one place.

## Projects presented

- BatchRename Pro — `/batchrenameprov2`
- NoDaysIdle Whispering — `/nodaysidle-whispering`
- ScribeFlow Pro — `/scribeflowpro`
- Nodaysidian — `/nodaysidian`
- NODAYSNOTES — `/nodaysnotes`
- FocusBlur — `/focusblur`
- Sunder — `/sunder`
- Synapse Notes — `/synapse-notes`
- Orbit Browser — `/orbit-browser`
- NODAYSIDLE Control Room — `/nodaysidle-control-room`

## Technology

| Area | Technology |
|------|------------|
| Framework | React 19 |
| Build | Vite 8 |
| Styling | Plain CSS with per-project design tokens |
| Deployment | Vercel (static) |
| Routing | SPA route rewrites via `vercel.json` |

## Development

```bash
npm install
npm run dev
```

Dev server at `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

Output in `dist/`. Preview with `npm run preview` at `http://127.0.0.1:4173`.

## Project Structure

```text
src/main.jsx       React components, routing, and project data
src/styles.css     Global styles and per-project visual systems
public/downloads/  Local app ZIP downloads served by Vercel
vercel.json        Route rewrites for direct project URLs
```

## Deployment

Deployed on Vercel. Every project route is rewritten to `index.html`; the app selects the matching project from `window.location.pathname`.

## Status

Active — web showcase site. Content updated as new releases ship.

## Contributing

This repository is not currently accepting external contributions.
