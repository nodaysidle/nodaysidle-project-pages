# NODAYSIDLE Project Pages

Public showcase for NODAYSIDLE — four flagship products as full-bleed void-black chapters.

Live site: [https://nodaysidle-project-pages.vercel.app](https://nodaysidle-project-pages.vercel.app)

![Platform](https://img.shields.io/badge/platform-Web-black?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)

## Flagship chapters (home)

Home is a SpaceX-style scroll of four chapters — not a catalogue grid. Nav is only these four names.

| Chapter | Platform | CTA |
|---------|----------|-----|
| **Cascade V3** | macOS 13+ · Tauri 2 | GitHub (source; `download: null`, no DMG) |
| **Voice Anywhere** 0.4.0 | Android 12+ | Download APK |
| **NODAYSIDLE Voice** 0.2.0 | macOS 14+ · Apple silicon | Download DMG |
| **Synapse Notes** 0.4.3 | Android · Capacitor | Download APK |

`featuredSlugs` order: `nodaysidle-cascade-v3` → `nodaysidle-voice-anywhere-v2` → `nodaysidle-vois` → `synapse-notes`.

## Technology

| Area | Technology |
|------|------------|
| Framework | React 19 |
| Build | Vite 8 |
| Styling | Plain CSS |
| Deployment | Vercel (static) |
| Routing | SPA rewrites via `vercel.json` |

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

Output in `dist/`. Preview with `npm run preview`.

## Project structure

```text
src/data.js     Product truth, featuredSlugs, download URLs
src/main.jsx    Home chapters, detail routes, header/footer
src/styles.css  Void-black full-bleed chapter layout
vercel.json     SPA route rewrites
```

## Status

Active — public web showcase. Content updated as flagship releases ship.

## Contributing

This repository is not currently accepting external contributions.
