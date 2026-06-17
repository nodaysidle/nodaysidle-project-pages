import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'batchrenameprov2',
    name: 'BatchRename Pro',
    repoName: 'batchrename-pro',
    tag: 'Local-first file operations',
    repo: 'https://github.com/nodaysidle/batchrename-pro',
    release: 'https://github.com/nodaysidle/batchrename-pro/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/batchrename-pro/releases/download/v0.1.0/BatchRename-Pro-0.1.0-aarch64.dmg',
    className: 'page-batch',
    eyebrow: 'Tauri 2 · Rust · React 19 · SQLite',
    headline: 'Bulk rename hundreds of files without scripts, cloud, or regret.',
    summary: 'BatchRename Pro is a compact macOS desktop app for regex, template, and sequence-based file renaming. Every apply is previewed, backed up, and undoable through local SQLite job history.',
    proof: ['v0.1.0 GitHub release live', '7.1MB macOS DMG', '10/10 Rust tests', 'Strict codesign + DMG verification passed'],
    features: [
      ['Preview before impact', 'Transform names in memory first, detect conflicts, and only write when the output is safe.'],
      ['Undo everything', 'Backup-before-write workflow with searchable job history and full rollback.'],
      ['Power-user transforms', 'Regex, template tokens, zero-padded numbering, and case transforms in one desktop flow.']
    ],
    styleNote: 'Slate-blue glass utility aesthetic: terminal confidence, not SaaS subscription noise.',
    artifact: 'DMG SHA256 ef6e33a03881430c329fd9fd888cf4010142598010a89b535cf0eb2c3948309b · 7,139,735 bytes · GitHub Release v0.1.0.'
  },
  {
    id: 'nodaysidle-whispering',
    name: 'NoDaysIdle Whispering',
    repoName: 'nodaysidle-whispering',
    tag: 'Private macOS dictation',
    repo: 'https://github.com/nodaysidle/nodaysidle-whispering',
    release: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/download/v0.1.0/NoDaysIdle-Whispering-0.1.0-aarch64.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-whisper',
    eyebrow: 'Tauri 2 · Rust · React · whisper.cpp',
    headline: 'A warm, local dictation desk for words that should stay on your Mac.',
    summary: 'Whispering is a macOS dictation utility built around local Whisper transcription, push-to-talk capture, and a searchable transcript vault. It is designed for private writing, notes, and voice capture without remote AI APIs.',
    proof: ['v0.1.0 GitHub release live', '60.3MB macOS app ZIP', 'ci:verify passed: Vite, audit, Rust tests', 'Signed .app verified locally'],
    features: [
      ['On-device transcription', 'whisper.cpp through Rust/Tauri keeps speech processing local.'],
      ['Transcript vault', 'Keep captured text searchable, pinnable, archivable, and ready to copy.'],
      ['Fast capture posture', 'Push-to-talk and VAD controls turn voice into a focused utility, not a toy recorder.']
    ],
    styleNote: 'Amber studio-meter aesthetic: warm charcoal, gold waveform light, muted rose recording states.',
    artifact: 'ZIP SHA256 781430b35c35bb872d377abc4aab31aed930feea174f733dbe4c04607170308d · 60,276,327 bytes · GitHub Release v0.1.0.'
  },
  {
    id: 'scribeflowpro',
    name: 'ScribeFlowPro',
    repoName: 'scribeflowpro',
    tag: 'Offline meeting transcription',
    repo: 'https://github.com/nodaysidle/scribeflowpro',
    release: 'https://github.com/nodaysidle/scribeflowpro/releases/tag/v1.0.0',
    download: 'https://github.com/nodaysidle/scribeflowpro/releases/download/v1.0.0/ScribeFlowPro-1.0.0.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-scribe',
    eyebrow: 'SwiftPM · SwiftUI · MLX · Whisper · Qwen',
    headline: 'Record a meeting, transcribe it locally, and leave with the summary.',
    summary: 'ScribeFlowPro is a native macOS app for offline meeting recording, local Whisper transcription, and local Qwen summarization. It ships with a verified MLX runtime path, packaged resources, and an installed-app launch smoke.',
    proof: ['v1.0.0 GitHub release live', '9.6MB macOS app ZIP verified', '5 Swift tests passed', 'Real local Whisper + Qwen smoke passed'],
    features: [
      ['Offline transcription', 'MLX Whisper runs locally so meeting audio stays on the Mac.'],
      ['Local summaries', 'Qwen produces meeting summaries through the bundled production runtime path.'],
      ['Release-grade package', 'Swift build, signed app package, install smoke, GitHub release, and ZIP checksum were verified.']
    ],
    styleNote: 'Midnight transcript studio: dark graphite, Volt recorder glow, crisp meeting-card typography, local-AI confidence.',
    artifact: 'ZIP SHA256 beffaccfe10ab571f0d6237c56fd1b0e88adebeccb98029e51a479bfc24ee279 · 9,614,350 bytes · GitHub Release v1.0.0.'
  },
  {
    id: 'nodaysidian',
    name: 'Nodaysidian',
    repoName: 'nodaysidian',
    tag: 'Native knowledge graph',
    repo: 'https://github.com/nodaysidle/nodaysidian',
    release: 'https://github.com/nodaysidle/nodaysidian/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/nodaysidian/releases/download/v0.1.0/Nodaysidian.dmg',
    downloadLabel: 'Download macOS DMG',
    className: 'page-obsidian',
    eyebrow: 'SwiftUI · Core Data · NaturalLanguage · macOS 15+',
    headline: 'Obsidian-style thinking rebuilt as a native Mac knowledge graph.',
    summary: 'Nodaysidian writes Markdown notes, imports Obsidian vaults, maps wiki-links, discovers semantic connections on-device, and gives notes a visual graph plus whiteboard mode — all without cloud accounts.',
    proof: ['v0.1.0 GitHub release live', '873KB macOS DMG verified', '4 Swift tests passed', 'Ad-hoc signed app launch smoke passed'],
    features: [
      ['Vault import', 'Read Markdown, strip front matter, preserve titles, and turn wiki-links into graph edges.'],
      ['Semantic auto-links', 'Apple NaturalLanguage embeddings suggest related notes without remote providers.'],
      ['Graph plus canvas', 'Force-directed graph navigation and Excalidraw-inspired whiteboarding in one native workspace.']
    ],
    styleNote: 'Iridescent obsidian: volcanic glass black with teal-purple edges and copper note highlights.',
    artifact: 'DMG SHA256 6a998de0b3aac3e6bf32bbb58a7826562d5b2efbe5aff805d8e17e57ebb95ce4 · 873,742 bytes · GitHub Release v0.1.0 · ad-hoc signed, not notarized.'
  },
  {
    id: 'nodaysnotes',
    name: 'NODAYSNOTES',
    repoName: 'nodaysnotes',
    tag: 'Plain-text native notes',
    repo: 'https://github.com/nodaysidle/nodaysnotes',
    release: 'https://github.com/nodaysidle/nodaysnotes/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/nodaysnotes/releases/download/v0.1.0/NODAYSNOTES_0.1.0_aarch64.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-notes',
    eyebrow: 'SwiftUI · Swift Package Manager · Markdown files',
    headline: 'Plain Markdown notes with native Mac speed and no vendor lock-in.',
    summary: 'NODAYSNOTES is a local-first macOS notes app for fast capture, daily notes, wiki-style links, tags, search, backlinks, and notebooks — stored as user-controlled .md files on disk.',
    proof: ['v0.1.0 GitHub release live', 'Native SwiftUI interface', 'Markdown files on disk', 'Package script installs to /Applications'],
    features: [
      ['Files you own', 'Notes remain plain Markdown in a chosen local directory.'],
      ['Knowledge basics', 'Wiki-links, backlinks, tags, search, daily notes, and notebooks.'],
      ['Native packaging', 'SwiftPM build and scriptable app packaging with ad-hoc signing.']
    ],
    styleNote: 'Editorial paper desk: warm cream, ink, blue pencil marks, visible notebook grids.',
    artifact: 'ZIP SHA256 69afee3d92890b2f08e611e26daae7d86c78d827cc41741d47cc33ce6eba3f71 · 531,803 bytes · GitHub Release v0.1.0.'
  },
  {
    id: 'focusblur',
    name: 'FocusBlur',
    repoName: 'focusblur',
    tag: 'Noise-cancelling for your screen',
    repo: 'https://gitlab.com/NODAYSIDLE/focusblur',
    download: 'https://gitlab.com/NODAYSIDLE/focusblur/-/archive/main/focusblur-main.zip',
    downloadLabel: 'Download source ZIP',
    className: 'page-focus',
    eyebrow: 'Swift · AppKit · Menu Bar · Accessibility API',
    headline: 'Keep the active window sharp. Let the rest of the screen fade away.',
    summary: 'FocusBlur is a native macOS menu bar app that tracks the active window and softens background windows with live frosted-glass blur. It reduces visual noise without screen recording permission.',
    proof: ['macOS 14+ menu bar utility', 'No Screen Recording permission required', 'Global shortcut ⌃⌥B', 'Multi-display overlays'],
    features: [
      ['Active-window clarity', 'Overlay windows follow focus and cut a clear window-shaped opening.'],
      ['Menu bar only', 'A background utility with no dock clutter, shortcut toggle, and preferences.'],
      ['Adjustable focus', 'Blur intensity, grayscale, tint, exclusions, launch at login, and shake-to-toggle.']
    ],
    styleNote: 'Frosted daylight interface: glass blur, pale cyan, soft violet shadows, crisp active rectangle.',
    artifact: 'Permission note: requires Accessibility, not Screen Recording.'
  },
  {
    id: 'nodaysidle-flowstate',
    name: 'FlowState',
    repoName: 'nodaysidle-flowstate',
    tag: 'Adaptive focus state',
    repo: 'https://github.com/nodaysidle/nodaysidle-flowstate',
    release: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/tag/v1.0.1',
    download: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/download/v1.0.1/FlowState-1.0.1.dmg',
    downloadLabel: 'Download macOS DMG',
    className: 'page-flowstate',
    eyebrow: 'SwiftPM · SwiftUI · AppKit · Accessibility API',
    headline: 'A smarter Pomodoro that watches focus state, not the clock.',
    summary: 'FlowState is a native macOS menu bar utility that scores keyboard and mouse activity locally, gently dims when focus drops, and suggests breaks from live trend data instead of fixed timers.',
    proof: ['v1.0.1 GitHub release live', '559KB macOS DMG verified', '7 Swift tests passed', 'Polished UI/UX pass + app launch smoke passed'],
    features: [
      ['Activity-based scoring', 'Keyboard and mouse patterns produce a local focus score without cloud telemetry.'],
      ['Adaptive break nudges', 'Session history and live activity trend decide when a break is useful.'],
      ['Release-grade menu bar app', 'Template icon rendering, display-aware tint cleanup, signed app bundle, DMG checksum, and launch smoke were verified.']
    ],
    styleNote: 'Quiet focus instrument: native macOS material, calm focus hierarchy, warm screen nudge, compact menu-bar posture.',
    artifact: 'DMG SHA256 156993e518a9f21fffac53de7c8fc47afe9ebe427425ce63b1acf3eb7131cbe1 · 558,921 bytes · GitHub Release v1.0.1 · ad-hoc signed, not notarized.'
  },
  {
    id: 'sunder',
    name: 'Sunder',
    repoName: 'sunder',
    tag: 'Local AI research graph',
    repo: 'https://github.com/nodaysidle/sunder',
    release: 'https://github.com/nodaysidle/sunder/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/sunder/releases/download/v0.1.0/Sunder_0.1.0_aarch64.dmg',
    downloadLabel: 'Download macOS DMG',
    className: 'page-sunder',
    eyebrow: 'Tauri 2 · Rust · React 19 · SQLite · ONNX',
    headline: 'Split a vault open and map the latent research hiding inside.',
    summary: 'Sunder is a local-first macOS research hub for Markdown notes with a CodeMirror editor, hybrid FTS5 plus semantic search, ONNX-powered note discovery, and a D3 knowledge graph — all on-device, zero cloud.',
    proof: ['v0.1.0 GitHub release live', '30.7MB public macOS DMG verified', 'release:check passed end-to-end', 'Ad-hoc codesign + DMG checksum valid'],
    features: [
      ['Hybrid retrieval', 'SQLite FTS5 and local embeddings combine keyword precision with semantic discovery.'],
      ['Graph-first research', 'D3-force reveals connected notes, clusters, and latent links without sending a vault to cloud AI.'],
      ['Installable Mac release', 'Tauri build, resources, signing, DMG integrity, and launch smoke were all verified.']
    ],
    styleNote: 'Shattered prism aesthetic: crystalline fractures, cyan-magenta split light, severe research-cartography energy.',
    artifact: 'DMG SHA256 0a8ddc4859dbc78d43783e8a72f761525785397f0aed75b0acfd5534a2756ea0 · 30,713,907 bytes · GitHub Release v0.1.0 · ad-hoc signed, not notarized.'
  },
  {
    id: 'synapse-notes',
    name: 'Synapse Notes',
    repoName: 'synapse-notes',
    tag: 'Voice-first AI notes',
    repo: 'https://github.com/nodaysidle/synapse-notes',
    release: 'https://github.com/nodaysidle/synapse-notes/releases/tag/v0.1.0',
    download: 'https://github.com/nodaysidle/synapse-notes/releases/download/v0.1.0/Synapse-Notes-0.1.0-debug.apk',
    downloadLabel: 'Download Android APK',
    className: 'page-synapse',
    eyebrow: 'React · Capacitor Android · Supabase · Gemini · Imagen · Three.js',
    headline: 'Speak a thought. Watch it become a searchable neural note.',
    summary: 'Synapse Notes records voice, transcribes with Gemini, generates AI images, embeds notes for semantic search, and connects ideas inside a Three.js knowledge graph. It is already running on two of NDI’s phones.',
    proof: ['v0.1.0 GitHub release live', '4.4MB Android APK verified', 'TypeScript + Vite build passed', 'Capacitor Android sync + Gradle assembleDebug passed'],
    features: [
      ['Voice capture flow', 'Record thoughts, process audio, and turn speech into structured notes with minimal friction.'],
      ['AI enrichment', 'Gemini transcription, Imagen generation, embeddings, and semantic search work as one pipeline.'],
      ['Knowledge graph', 'Three.js graph view links note keywords, related thoughts, and generated context visually.']
    ],
    styleNote: 'Neural web aesthetic: plum bio-organic gradients, amber synaptic points, dendrite-dot texture.',
    artifact: 'APK SHA256 b83ae21646873a00e3b2527a4846962f40aeda4f77a43bc2124fce7756d56b50 · 4,405,823 bytes · GitHub Release v0.1.0 · debug APK release asset.'
  },
  {
    id: 'nodaysidle-control-room',
    name: 'NODAYSIDLE Control Room',
    repoName: 'nodaysidle-control-room',
    tag: 'Native agent operations console',
    repo: 'https://github.com/nodaysidle/nodaysidle-control-room',
    release: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/tag/v0.1.1',
    download: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/download/v0.1.1/NODAYSIDLE-Control-Room-0.1.1-macOS-aarch64.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-control-room',
    eyebrow: 'SwiftPM · SwiftUI · AppKit · Menu Bar',
    headline: 'Local AI-ops. One Mac control room.',
    summary: 'NODAYSIDLE Control Room is a premium native macOS menu bar app for agent sessions, repo dirt, bridge health, and proof receipts — read-only, local, and fast.',
    proof: ['v0.1.1 GitHub release live', '353KB macOS app ZIP verified', '5 Swift tests passed', 'Installed /Applications launch smoke passed'],
    features: [
      ['Agent process radar', 'Read-only scanning surfaces Hermes, Codex, CodexPro, tunnels, Vite/Vercel, and local server processes without destructive controls.'],
      ['Repo and bridge command center', 'Watched NODAYSIDLE repos show branch, dirty state, remote, last commit, and known local bridge health.'],
      ['Premium native packaging', 'SwiftPM source, custom SVG logo, generated .icns, ad-hoc signed .app, /Applications install, launch smoke, and screenshot proof are verified.']
    ],
    styleNote: 'Graphite command-room aesthetic: matte black panels, Volt signal states, tight monospaced telemetry, native Mac utility restraint.',
    artifact: 'ZIP SHA256 440c6b9c8d20f5918defe293c224562ef65657e9e907c64ad43f0304ada2e5cc · 353,285 bytes · GitHub Release v0.1.1 · ad-hoc signed, not notarized.'
  },
  {
    id: 'orbit-browser',
    name: 'Orbit Browser',
    repoName: 'orbit-browser',
    tag: 'Native macOS browser',
    repo: 'https://github.com/nodaysidle/orbit-browser',
    release: 'https://github.com/nodaysidle/orbit-browser/releases/tag/v1.0.5',
    download: 'https://github.com/nodaysidle/orbit-browser/releases/download/v1.0.5/Orbit-1.0.5-aarch64.dmg',
    downloadLabel: 'Download macOS DMG',
    className: 'page-orbit',
    eyebrow: 'Tauri 2 · Rust · Vanilla JS · WKWebView · SQLite',
    headline: 'A minimal native browser: no Electron, no telemetry, full web.',
    summary: 'Orbit Browser is a focused macOS browser with per-tab WKWebViews, local SQLite history/bookmarks/settings, domain blocking, Reader Mode, per-origin zoom memory, clean-link copying, and keyboard-first chrome.',
    proof: ['v1.0.5 GitHub release live', '8.4MB macOS DMG verified', 'Ad-hoc signed, not notarized', 'Native WKWebView child-webview architecture'],
    features: [
      ['Native tab engine', 'Tauri child WKWebViews keep browsing native to macOS instead of shipping an Electron runtime.'],
      ['Local browser memory', 'Tabs, history, bookmarks, settings, sessions, zoom, and blocking live locally in SQLite/resources.'],
      ['Operator chrome', 'Reader Mode, clean-link copying, keyboard shortcuts, and minimal dark browser UI are the core posture.']
    ],
    styleNote: 'Deep-field orbit aesthetic: black-space canvas, cyan trajectory rings, nebula violet, sparse star points.',
    artifact: 'DMG SHA256 bfd5465ed8cdc441805caa652e59d70a54abe7bf2a0cd818665d932075c0a6d7 · 8,387,910 bytes · GitHub Release v1.0.5 · ad-hoc signed, not notarized.'
  }
];

function routeProject() {
  const slug = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  return projects.find((project) => project.id === slug || project.repoName.toLowerCase() === slug.toLowerCase());
}

function parseArtifact(project) {
  const text = project.artifact || '';
  const typeMatch = text.match(/^(DMG|ZIP|APK|Permission note|Source)/i);
  const checksumMatch = text.match(/SHA256\s+([a-f0-9]{64})/i);
  const sizeMatch = text.match(/([0-9][0-9,]+)\s+bytes/i);
  const versionMatch = text.match(/(?:Release|release)\s+v?([0-9][\w.-]*)/i) || text.match(/v([0-9][\w.-]*)/i);
  const type = typeMatch
    ? typeMatch[1].replace('Permission note', 'Source ZIP')
    : (project.downloadLabel || 'Build').replace(/^Download\s+/i, '');
  const platform = /android|apk|capacitor/i.test(`${project.eyebrow} ${project.artifact} ${project.downloadLabel}`)
    ? 'Android'
    : /source zip|permission note|gitlab/i.test(`${project.downloadLabel} ${project.artifact} ${project.repo}`)
      ? 'Source'
      : 'macOS';
  const releaseState = project.downloadAvailable === false
    ? 'Download unavailable'
    : project.release
      ? 'Verified release'
      : 'Source archive';

  return {
    type: type.toUpperCase(),
    platform,
    version: versionMatch ? `v${versionMatch[1].replace(/^v/, '')}` : 'Source',
    size: sizeMatch ? `${Number(sizeMatch[1].replace(/,/g, '')).toLocaleString()} bytes` : 'Not published',
    checksum: checksumMatch ? checksumMatch[1] : null,
    releaseState,
    canDownload: project.downloadAvailable !== false,
  };
}

function artifactBytes(meta) {
  const match = meta.size.match(/^([0-9,]+)\s+bytes$/);
  return match ? Number(match[1].replace(/,/g, '')) : 0;
}

function projectSearchText(project, meta) {
  return [
    project.name,
    project.repoName,
    project.tag,
    project.eyebrow,
    project.summary,
    project.artifact,
    meta.platform,
    meta.type,
    meta.releaseState,
  ].join(' ').toLowerCase();
}

function signingNote(project) {
  const artifact = project.artifact || '';
  if (/not notarized/i.test(artifact)) {
    return 'Ad-hoc signed. macOS Gatekeeper may require explicit approval on first launch.';
  }
  if (/debug APK/i.test(artifact)) {
    return 'Debug APK release asset. Install only when you understand the Android sideloading path.';
  }
  if (/Permission note/i.test(artifact)) {
    return 'Source/permission utility. Follow repository instructions before granting macOS permissions.';
  }
  if (/signed/i.test(project.proof.join(' '))) {
    return 'Signed release artifact. Verify the checksum before install when possible.';
  }
  return 'Release metadata is shown exactly as verified from the linked source.';
}

function productClass(project) {
  return `product-accent accent-${project.id}`;
}

const markPaths = {
  batchrenameprov2: (
    <>
      <path d="M8 14.5 24 5l16 9.5v19L24 43 8 33.5Z" />
      <path d="M24 5v18.5m0 19.5V23.5m0 0L8 14.5m16 9 16-9" />
      <path d="m15 29 9-5.5 9 5.5M15 34l9-5.5 9 5.5" />
    </>
  ),
  'nodaysidle-whispering': (
    <>
      <path d="M8 24h3m26 0h3M14 18v12m5-18v24m5-28v32m5-28v32m5-22v16" />
      <path d="M5 24c4-12 34-12 38 0-4 12-34 12-38 0Z" />
    </>
  ),
  scribeflowpro: (
    <>
      <circle cx="24" cy="24" r="17" />
      <path d="M16 24h3m5-9v18m5-14v10m-14-4v6m21-13v12" />
      <path d="M12 38c8-5 16-5 24 0" />
    </>
  ),
  nodaysidian: (
    <>
      <path d="m24 5 17 10v18L24 43 7 33V15Z" />
      <path d="m24 5v38M7 15l17 10 17-10M7 33l17-8 17 8" />
      <path d="M15 20h18M15 28h18" />
    </>
  ),
  nodaysnotes: (
    <>
      <path d="M10 38c17-3 27-14 28-30-17 1-29 11-30 28Z" />
      <path d="M14 34c8-9 16-15 24-20" />
      <path d="M17 20h10M15 26h7" />
    </>
  ),
  focusblur: (
    <>
      <rect x="10" y="12" width="28" height="24" rx="5" />
      <path d="M5 17h6M5 31h6m26-14h6m-6 14h6M15 24h18" />
      <path d="M19 20h10v8H19Z" />
    </>
  ),
  'nodaysidle-flowstate': (
    <>
      <path d="M8 31c4-15 12-23 24-23 7 0 11 4 11 10 0 11-16 10-16 19 0 3 2 5 5 6" />
      <path d="M9 33c8 5 17 5 27 0M18 22h12" />
      <circle cx="34" cy="18" r="3" />
    </>
  ),
  sunder: (
    <>
      <path d="M24 5 7 20l7 23 10-12 10 12 7-23Z" />
      <path d="M24 5v26M7 20h34M14 43l10-23 10 23" />
    </>
  ),
  'synapse-notes': (
    <>
      <circle cx="14" cy="16" r="4" />
      <circle cx="34" cy="14" r="4" />
      <circle cx="23" cy="34" r="5" />
      <path d="M18 17c5 2 8 2 12-1M16 20l5 10m10-13-6 13m3 5c4 1 7 0 10-4" />
    </>
  ),
  'nodaysidle-control-room': (
    <>
      <rect x="9" y="10" width="30" height="28" rx="6" />
      <path d="M15 19h18M15 25h10M15 31h14" />
      <path d="M35 14l5-5M38 20h5M35 26l5 5" />
      <circle cx="13" cy="19" r="1.5" />
      <circle cx="13" cy="25" r="1.5" />
      <circle cx="13" cy="31" r="1.5" />
    </>
  ),
  'orbit-browser': (
    <>
      <circle cx="24" cy="24" r="7" />
      <path d="M7 26c5-13 21-21 32-13 8 6 4 18-7 25-13 8-27 4-25-12Z" />
      <path d="M13 12c10-6 24-2 27 8 3 11-8 23-22 23" />
      <circle cx="39" cy="11" r="3" />
    </>
  ),
};

function BrandGlyph() {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <path d="M7 34V10l8 3v24Z" />
      <path d="M18 36V12l8 5v24Z" />
      <path d="M29 32V8l8 3v24Z" />
    </svg>
  );
}

function ProjectMark({ project }) {
  return (
    <svg className="mark-svg" viewBox="0 0 48 48" aria-hidden="true">
      {markPaths[project.id]}
    </svg>
  );
}

function projectVersion(meta) {
  return meta.version === 'Source' ? 'Source' : meta.version;
}

function artifactFileName(project) {
  if (!project.download) return project.repoName;
  try {
    const pathname = new URL(project.download).pathname;
    const fileName = pathname.split('/').filter(Boolean).pop();
    return fileName ? decodeURIComponent(fileName) : project.repoName;
  } catch {
    return project.repoName;
  }
}

function ArtifactSpec({ project, meta, includeProduct = false }) {
  return (
    <dl className="artifact-spec">
      {includeProduct && <div><dt>Product</dt><dd>{project.name}</dd></div>}
      <div><dt>Type</dt><dd>{meta.type}</dd></div>
      <div><dt>Platform</dt><dd>{meta.platform}</dd></div>
      <div><dt>Version</dt><dd>{projectVersion(meta)}</dd></div>
      <div><dt>Size</dt><dd>{meta.size}</dd></div>
      <div><dt>Status</dt><dd>{meta.releaseState}</dd></div>
      {meta.checksum && <div className="hash-row"><dt>SHA256</dt><dd>{meta.checksum}</dd></div>}
    </dl>
  );
}

function ActionLinks({ project, meta, compact = false, includeDetails = true }) {
  return (
    <div className={compact ? 'card-actions' : 'actions'}>
      {meta.canDownload ? (
        <a className={compact ? 'primary small' : 'primary'} href={project.download}>
          {compact ? 'Download' : `Download ${meta.type}`}
        </a>
      ) : (
        <span className={compact ? 'primary small disabled' : 'primary disabled'} aria-disabled="true">
          Download unavailable
        </span>
      )}
      {includeDetails && <a className={compact ? 'secondary small' : 'secondary'} href={`/${project.id}`}>Details</a>}
      {!compact && <a className="secondary" href={project.repo}>Repository</a>}
      {!compact && project.release && meta.canDownload && <a className="secondary" href={project.release}>Release</a>}
    </div>
  );
}

function Home() {
  const [query, setQuery] = React.useState('');
  const [platform, setPlatform] = React.useState('All');
  const [sort, setSort] = React.useState('recommended');
  const counts = projects.reduce((acc, project) => {
    const meta = parseArtifact(project);
    acc[meta.platform] = (acc[meta.platform] || 0) + 1;
    return acc;
  }, {});
  const catalog = React.useMemo(() => projects.map((project) => ({
    project,
    meta: parseArtifact(project),
  })), []);
  const filtered = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return catalog
      .filter(({ project, meta }) => {
        const platformMatch = platform === 'All' || meta.platform === platform;
        const queryMatch = !normalizedQuery || projectSearchText(project, meta).includes(normalizedQuery);
        return platformMatch && queryMatch;
      })
      .slice()
      .sort((a, b) => {
        if (sort === 'name') return a.project.name.localeCompare(b.project.name);
        if (sort === 'size') return artifactBytes(b.meta) - artifactBytes(a.meta);
        const downloadDelta = Number(b.meta.canDownload) - Number(a.meta.canDownload);
        if (downloadDelta) return downloadDelta;
        const releaseDelta = Number(Boolean(b.project.release)) - Number(Boolean(a.project.release));
        if (releaseDelta) return releaseDelta;
        return a.project.name.localeCompare(b.project.name);
      });
  }, [catalog, platform, query, sort]);
  const platforms = ['All', 'macOS', 'Android', 'Source'];
  const featured = projects.find((project) => project.id === 'nodaysidle-control-room') || projects[0];
  const featuredMeta = parseArtifact(featured);
  const verifiedDownloads = catalog.filter(({ project, meta }) => project.release && meta.canDownload).length;

  return (
    <main className="catalog-shell">
      <nav className="catalog-nav" aria-label="Catalog navigation">
        <a href="/" className="brand-mark" aria-label="NODAYSIDLE product catalog home">
          <span className="brand-sigil"><BrandGlyph /></span>
          <span>NODAYSIDLE</span>
        </a>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#releases">Releases</a>
          <a href="https://github.com/nodaysidle">GitHub</a>
        </div>
      </nav>

      <section className="catalog-hero" aria-labelledby="catalog-title">
        <div className="hero-copy">
          <p className="kicker">Private release foundry</p>
          <h1 id="catalog-title">Finished apps, not portfolio thumbnails.</h1>
          <p className="hero-lede">A buyer-facing catalog of NODAYSIDLE releases: installable artifacts, local-first product stories, source proof, and direct downloads kept in the open.</p>
          <div className="hero-proof" aria-label="Catalog proof summary">
            <span>{projects.length} product dossiers</span>
            <span>{verifiedDownloads} release artifacts</span>
            <span>{counts.macOS || 0} Mac-native builds</span>
          </div>
          <div className="hero-statement" aria-label="Foundry promise">
            <strong>Built to be opened.</strong>
            <span>Every card leads to a real app page with artifact state, platform fit, proof notes, and the original release/source trail.</span>
          </div>
        </div>
        <aside className={`featured-release ${productClass(featured)}`} aria-label="Featured verified release">
          <div className="featured-top">
            <div className="product-icon large"><ProjectMark project={featured} /></div>
            <div>
              <p className="kicker">Current spotlight</p>
              <h2>{featured.name}</h2>
            </div>
          </div>
          <p>{featured.summary}</p>
          <dl className="featured-meta">
            <div><dt>Version</dt><dd>{projectVersion(featuredMeta)}</dd></div>
            <div><dt>Artifact</dt><dd>{featuredMeta.type}</dd></div>
            <div><dt>Size</dt><dd>{featuredMeta.size}</dd></div>
          </dl>
          <ActionLinks project={featured} meta={featuredMeta} />
        </aside>
      </section>

      <section className="catalog-controls" aria-label="Catalog controls">
        <label className="search-field">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search projects"
          />
        </label>
        <div className="filter-group" aria-label="Platform filters">
          {platforms.map((item) => (
            <button
              type="button"
              key={item}
              className={platform === item ? 'filter-chip active' : 'filter-chip'}
              onClick={() => {
                setPlatform(item);
                setQuery('');
              }}
              aria-pressed={platform === item}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="sort-field">
          <span>Sort</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort projects">
            <option value="recommended">Release readiness</option>
            <option value="name">Name</option>
            <option value="size">Artifact size</option>
          </select>
        </label>
      </section>

      <section id="releases" className="trust-ribbon" aria-label="Catalog trust policy">
        <span>{filtered.length} shown</span>
        <span>Download links checked</span>
        <span>Checksums shown where published</span>
      </section>

      <section className="catalog-table-head" aria-label="Catalog columns">
        <span>Product</span>
        <span>Category</span>
        <span>Platform</span>
        <span>Artifact</span>
        <span>Status</span>
        <span>Action</span>
      </section>

      <section id="products" className="product-grid" aria-label="NODAYSIDLE products">
        {filtered.map(({ project, meta }) => {
          return (
            <article className={`product-card ${productClass(project)}`} key={project.id}>
              <a className="product-card-main" href={`/${project.id}`} aria-label={`Open ${project.name} product page`}>
                <div className="product-icon" aria-hidden="true"><ProjectMark project={project} /></div>
                <div className="product-copy">
                  <p>{project.repoName}</p>
                  <h2>{project.name}</h2>
                </div>
              </a>
              <p className="product-category">{project.tag}</p>
              <p className="product-narrative">{project.headline}</p>
              <dl className="card-meta" aria-label={`${project.name} release dossier`}>
                <div className="meta-artifact"><dt>Build</dt><dd>{meta.type} · {projectVersion(meta)}<span>{meta.platform} · {meta.size}</span></dd></div>
                <div className={meta.canDownload ? 'meta-status status-ok' : 'meta-status status-bad'}><dt>Proof</dt><dd>{meta.releaseState}</dd></div>
              </dl>
              {project.linkIssue && <p className="link-issue">{project.linkIssue}</p>}
              <ActionLinks project={project} meta={meta} compact />
            </article>
          );
        })}
        {filtered.length === 0 && (
          <article className="empty-state">
            <p className="kicker">No matching artifacts</p>
            <h2>No product matches that filter.</h2>
            <p>Clear the search or switch platform filters to return to the full catalog.</p>
          </article>
        )}
      </section>
    </main>
  );
}

function ProjectPage({ project }) {
  const meta = parseArtifact(project);
  React.useEffect(() => {
    document.title = `${project.name} — NODAYSIDLE Catalog`;
  }, [project.name]);

  return (
    <main className={`catalog-shell detail-shell ${productClass(project)}`}>
      <nav className="catalog-nav" aria-label="Product navigation">
        <a href="/" className="brand-mark">
          <span className="brand-sigil"><BrandGlyph /></span>
          <span>NODAYSIDLE</span>
        </a>
        <div className="nav-links">
          <a href="/">Catalog</a>
          <a href={project.repo}>Repository</a>
          {project.release && meta.canDownload && <a href={project.release}>Release</a>}
        </div>
      </nav>

      <section className="detail-hero" aria-labelledby="product-title">
        <div className="detail-copy">
          <a className="back-link" href="/">Back to catalog</a>
          <div className="detail-title-row">
            <div className="device-mark"><ProjectMark project={project} /></div>
            <div>
              <p className="kicker">{project.eyebrow}</p>
              <h1 id="product-title">{project.name}</h1>
            </div>
          </div>
          <p className="summary">{project.summary}</p>
          <div className="detail-value-card" aria-label="Product value">
            <span>Why it matters</span>
            <strong>{project.headline}</strong>
          </div>
          <div className="detail-badges" aria-label="Product metadata">
            <span>{project.tag}</span>
            <span>{meta.platform}</span>
            <span>{meta.type}</span>
            <span className={meta.canDownload ? 'status-ok' : 'status-bad'}>{meta.releaseState}</span>
          </div>
          <ActionLinks project={project} meta={meta} includeDetails={false} />
          {project.linkIssue && <p className="release-warning">{project.linkIssue}</p>}
        </div>

        <aside className="artifact-panel hero-artifact" aria-label="Release artifact">
          <div className="artifact-heading">
            <p className="kicker">Release artifact</p>
            <strong>{meta.type} package</strong>
            <span>{artifactFileName(project)}</span>
          </div>
          <ArtifactSpec project={project} meta={meta} />
        </aside>
      </section>

      <section className="download-trust" aria-label="Download trust summary">
        <div>
          <span>Release status</span>
          <strong>{meta.releaseState}</strong>
        </div>
        <div>
          <span>Install note</span>
          <strong>{signingNote(project)}</strong>
        </div>
        <div>
          <span>Artifact size</span>
          <strong>{meta.size}</strong>
        </div>
      </section>

      <section className="proof-strip" aria-label="Proof points">
        {project.proof.map((item) => <div key={item}>{item}</div>)}
      </section>

      <section className="detail-grid">
        <div className="features" aria-label="Product features">
          {project.features.map(([title, body], index) => (
            <article key={title}>
              <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <aside className="artifact-panel" aria-label="Artifact metadata">
          <h2>Artifact proof</h2>
          <ArtifactSpec project={project} meta={meta} includeProduct />
          <p>{project.artifact}</p>
        </aside>
      </section>
    </main>
  );
}

function App() {
  const project = routeProject();
  React.useEffect(() => {
    if (!project) document.title = 'NODAYSIDLE Product Catalog';
  }, [project]);
  return project ? <ProjectPage project={project} /> : <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
