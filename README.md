# NODAYSIDLE Project Pages

Personal portfolio and public project showcase for NODAYSIDLE software releases, active agent workflows, and the NODAYSIDLE technical stack.

Live site: https://nodaysidle-project-pages.vercel.app

## What it is

A polished Next.js App Router showcase for verified NODAYSIDLE software releases. The site presents a living release index, grounded project details, direct public artifacts, technical boundaries, and source links in the DARKVOID CHALKMETAL system.

## Projects presented

The catalogue derives its count and routes from `app/data.js` and currently contains 19 verified downloadable apps:

- Orbit Browser — `/orbit-browser`
- NODAYSIDLE Control Room — `/nodaysidle-control-room`
- ScribeFlowPro — `/scribeflowpro`
- Werkstatt Infinite — `/werkstatt-infinite`
- FlowState — `/nodaysidle-flowstate`
- ClipRail — `/cliprail`
- ShareGuard — `/shareguard`
- Voice Anywhere v2 — `/nodaysidle-voice-anywhere-v2`
- Nodaysidian — `/nodaysidian`
- CloudScribe — `/cloudscribe`
- BatchRename Pro — `/batchrename-pro`
- Cistilka — `/nodaysidle-cistilka`
- Lumiere — `/nodaysidle-lumiere`
- NoDaysIdle Whispering — `/nodaysidle-whispering`
- NODAYSNOTES — `/nodaysnotes`
- NoDays Record — `/nodaysrecording`
- nodaystypst — `/nodaystypst`
- Synapse Notes — `/synapse-notes`
- twentyone — `/twentyone`

## Tech stack

- Next.js App Router
- React 19
- Plain CSS with responsive DARKVOID CHALKMETAL presentation
- Static export via `next.config.mjs`
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Dev server:

```text
http://127.0.0.1:3000
```

## Build

```bash
npm run build
```

Output:

```text
out/
```

## Production smoke

```bash
npm run build
npx serve out -l 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Deployment

If Vercel CLI is authenticated and the project is linked:

```bash
npm run deploy
```

This repo currently prepares Vercel's Build Output API from the Next static export because the linked Vercel project was previously configured as `vite`.

Equivalent manual commands:

```bash
npm run vercel:prepare
vercel deploy --prebuilt --prod
```

If not linked:

```bash
vercel link
npm run deploy
```

## Repository notes

- `node_modules/`, `out/`, `dist/`, `.next/`, `.vercel/`, and environment files should stay ignored.
- Source account: https://github.com/nodaysidle
- The project intentionally keeps release CTAs pointed at public GitHub Release artifacts where available.
