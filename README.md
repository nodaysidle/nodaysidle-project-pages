# NODAYSIDLE Project Pages

Public project showcase for NODAYSIDLE software releases and source repositories.

Live site: https://nodaysidle-project-pages.vercel.app

## What it is

NODAYSIDLE Project Pages is a React + Vite static site that presents nine NODAYSIDLE projects. Each project has its own route, visual system, product summary, proof notes, and download CTA.

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

## Tech stack

- React 19
- Vite 8
- Plain CSS with per-project design tokens
- Vercel static deployment
- SPA route rewrites via `vercel.json`

## Local development

```bash
npm install
npm run dev
```

Dev server:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

Output:

```text
dist/
```

## Preview production build

```bash
npm run preview
```

Preview server:

```text
http://127.0.0.1:4173
```

## Project structure

```text
src/main.jsx       React components, routing, and project data
src/styles.css     Global styles and per-project visual systems
public/downloads/  Local app ZIP downloads served by Vercel
vercel.json        Route rewrites for direct project URLs
```

## Deployment

The site is deployed on Vercel. Every project route is rewritten to `index.html`, and the app selects the matching project from `window.location.pathname`.

## Repository notes

- `node_modules/`, `dist/`, `.vercel/`, and environment files are intentionally ignored.
- `public/downloads/` contains verified local ZIP downloads used by the live site.
- Source and public artifacts are prepared for migration to `https://github.com/nodaysidle/nodaysidle-project-pages`.
