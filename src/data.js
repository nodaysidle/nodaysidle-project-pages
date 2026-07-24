/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} type
 * @property {'macOS' | 'Android'} platform
 * @property {string[]} stack
 * @property {string} status
 * @property {string} artifact
 * @property {string} release
 * @property {string} repo
 * @property {string | null} download
 * @property {string | null} checksum
 * @property {string} headline
 * @property {string} summary
 * @property {string[]} proof
 * @property {string[]} features
 * @property {'shipped'} maturity
 * @property {string} dataBoundary
 * @property {string} updated
 * @property {string | null} screenshotPath
 * @property {string | null} screenshotAlt
 * @property {string | null} screenshotSource
 * @property {string} [accent]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'orbit-browser',
    name: 'Orbit Browser',
    type: 'Native macOS browser',
    platform: 'macOS',
    stack: ['Tauri 2', 'Rust', 'Vanilla JS', 'WKWebView', 'SQLite'],
    status: 'v1.0.6 live',
    artifact: 'Orbit_1.0.6_aarch64.dmg',
    release: 'https://github.com/nodaysidle/orbit-browser/releases/tag/v1.0.6',
    repo: 'https://github.com/nodaysidle/orbit-browser',
    download: 'https://github.com/nodaysidle/orbit-browser/releases/download/v1.0.6/Orbit_1.0.6_aarch64.dmg',
    checksum: '748014773343585c19398e381dd82051d89195a20eb2bcd2892b68a5836a59e3',
    headline: 'A minimal native browser: no Electron, no telemetry, full web.',
    summary: 'Per-tab WKWebViews, SQLite browser memory, domain blocking, Reader Mode, clean-link copying, and keyboard-first chrome.',
    proof: ['8.4MB macOS DMG', 'Native WKWebView architecture', 'Ad-hoc signed'],
    features: [
      'Native tabs — each tab managed as its own WKWebView by Rust',
      'Local-first data — bookmarks, history, settings in bundled SQLite',
      'Domain blocking via built-in adblock pattern list',
      'Full keyboard shortcut set for tabs, navigation, find-in-page',
      'Per-origin zoom memory persisted per site',
      'Smart clean link copying (strips utm_*, fbclid, gclid, etc.)',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-25',
    screenshotPath: '/screenshots/orbit-browser.png',
    screenshotAlt: 'Orbit Browser dark UI screenshot',
    screenshotSource: '/Volumes/omarchyuser/projekti/orbit-browser/artifacts/premium-visual-qa/orbit-dark-1440x1000.png',
    accent: '#78c7ea',
  },
  {
    slug: 'nodaysidle-control-room',
    name: 'NODAYSIDLE Control Room',
    type: 'Native agent operations console',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'AppKit', 'Menu Bar'],
    status: 'v0.1.2 live',
    artifact: 'NODAYSIDLE-Control-Room-0.1.2-macOS-aarch64.zip',
    release: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/tag/v0.1.2',
    repo: 'https://github.com/nodaysidle/nodaysidle-control-room',
    download: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/download/v0.1.2/NODAYSIDLE-Control-Room-0.1.2-macOS-aarch64.zip',
    checksum: '059c652e280962327c929a2c442f428b6aaff3631ac52964ec3aa680ca3d910b',
    headline: 'Local AI-ops. One Mac control room.',
    summary: 'A native menu bar command surface for agent sessions, repo dirt, bridge health, and proof receipts.',
    proof: ['353KB macOS app ZIP', '16 Swift tests + CI passed', '/Applications launch smoke passed'],
    features: [
      'Monitors local process state (agent runtimes, tunnels, dev servers)',
      'Watches NODAYSIDLE repositories and reports dirty state',
      'Detects local bridges and likely service ports',
      'Surfaces recent receipt files',
      'Safe copy, open, and refresh actions only',
      'JSON config file for custom watched repos and receipt roots',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-25',
    screenshotPath: '/screenshots/control-room.png',
    screenshotAlt: 'NODAYSIDLE Control Room menu bar UI screenshot',
    screenshotSource: '/Volumes/omarchyuser/NODAYSIDLESCREENSHOTS/control-room/control-room-self-render-1280x820.png',
    accent: '#c8ff00',
  },
  {
    slug: 'scribeflowpro',
    name: 'ScribeFlowPro',
    type: 'Offline meeting transcription',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'MLX', 'Whisper', 'Qwen'],
    status: 'v1.0.0 live',
    artifact: 'ScribeFlowPro-1.0.0.zip',
    release: 'https://github.com/nodaysidle/scribeflowpro/releases/tag/v1.0.0',
    repo: 'https://github.com/nodaysidle/scribeflowpro',
    download: 'https://github.com/nodaysidle/scribeflowpro/releases/download/v1.0.0/ScribeFlowPro-1.0.0.zip',
    checksum: 'beffaccfe10ab571f0d6237c56fd1b0e88adebeccb98029e51a479bfc24ee279',
    headline: 'Record a meeting, transcribe it locally, and leave with the summary.',
    summary: 'Native macOS recording, local Whisper transcription, and local Qwen summarization through a verified MLX runtime path.',
    proof: ['9.6MB macOS app ZIP', '5 Swift tests passed', 'Real local Whisper + Qwen smoke'],
    features: [
      'Live microphone recording and audio/video file import',
      'Local Whisper transcription from installed mlx-community models',
      'Local MLX LLM summarization from installed mlx-community models',
      'Local meeting library with transcript and detail view (SwiftData)',
      'One-command local MLX runtime setup via bundled script',
      'Model path detection under ~/Models/',
    ],
    maturity: 'shipped',
    dataBoundary: 'local/offline',
    updated: '2026-06-10',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#55d0bd',
  },
  {
    slug: 'werkstatt-infinite',
    name: 'Werkstatt Infinite',
    type: 'Drawing and notebook app',
    platform: 'Android',
    stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt DI', 'Room'],
    status: 'v1.0',
    artifact: 'werkstatt-infinite-v1.0.apk',
    release: 'https://github.com/nodaysidle/werkstatt-infinite/releases/tag/v1.0',
    repo: 'https://github.com/nodaysidle/werkstatt-infinite',
    download: 'https://github.com/nodaysidle/werkstatt-infinite/releases/download/v1.0/werkstatt-infinite-v1.0.apk',
    checksum: null,
    headline: 'Premium Android drawing and notebook app.',
    summary: 'An expressive drawing canvas with multiple brush types, pressure-aware strokes, pinch-to-zoom, undo/redo, and a gallery system. Local-first, Jetpack Compose, feature-complete.',
    proof: [],
    features: [
      '8 brush types with distinct rendering (Pen, Fine, Ballpoint, Pencil, Marker, Watercolor, Ink, Brush)',
      'Pressure-aware strokes from Android pointer pressure',
      'Pinch-to-zoom and two-finger pan (0.5×–5× zoom)',
      'Full stroke-level undo/redo history',
      'Spatial-index-backed eraser',
      'Color wheel + 6 preset palettes (Bold, Pastel, Earth, Neon, Skin, Vintage)',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-07-10',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#c8ff00',
  },
  {
    slug: 'nodaysidle-flowstate',
    name: 'FlowState',
    type: 'Focus-state menu bar utility',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'AppKit', 'Core Animation'],
    status: 'v1.0.1',
    artifact: 'FlowState-1.0.1.dmg',
    release: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/tag/v1.0.1',
    repo: 'https://github.com/nodaysidle/nodaysidle-flowstate',
    download: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/download/v1.0.1/FlowState-1.0.1.dmg',
    checksum: null,
    headline: "A smarter Pomodoro for developers who don't like timers.",
    summary: 'Adaptive focus detection via keyboard and mouse activity monitoring. Learns your work patterns, dims the screen when focus drops, and suggests breaks based on session trends — all on-device.',
    proof: [],
    features: [
      'Activity-based focus detection via keyboard/mouse monitoring',
      'Smart screen dimming when focus drops (subtle visual cue)',
      'Adaptive break suggestions using session patterns and focus trends',
      'Liquid-fill menu bar icon visualizing current focus level',
      'Configurable settings (idle thresholds, tint intensity, break preferences)',
      'Privacy-first — all processing on-device, no data leaves the Mac',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-10',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#c8ff00',
  },
  {
    slug: 'cliprail',
    name: 'ClipRail',
    type: 'Clipboard history menu bar app',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI'],
    status: 'v1.2.0',
    artifact: 'ClipRail-v1.2.0-macos.zip',
    release: 'https://github.com/nodaysidle/cliprail/releases/tag/v1.2.0',
    repo: 'https://github.com/nodaysidle/cliprail',
    download: 'https://github.com/nodaysidle/cliprail/releases/download/v1.2.0/ClipRail-v1.2.0-macos.zip',
    checksum: null,
    headline: 'Menu bar clipboard history. Local, text-only, searchable.',
    summary: 'Keeps your last 10 plain-text clips one click away in the macOS menu bar. Pin up to 3 favorites, search live, and never worry about network access — there is none.',
    proof: ['168KB macOS ZIP', 'Swift 6 + SwiftUI', 'Zero network access'],
    features: [
      'History of last 10 unpinned plain-text clips (newest first)',
      'Up to 3 pinned clips that survive Clear',
      'Live case-insensitive search in the popover header',
      'Delete individual pinned or unpinned rows',
      'Pause/Resume capture (no backfill on resume)',
      '60-second dedupe — re-copying same text bumps existing row',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-07-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#c8ff00',
  },
  {
    slug: 'shareguard',
    name: 'ShareGuard',
    type: 'Local pre-share privacy scanner',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'Local scanning', 'Redaction'],
    status: 'v0.1.0 live',
    artifact: 'ShareGuard-v0.1.0-macos.zip',
    release: 'https://github.com/nodaysidle/nodaysidle-shareguard/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-shareguard',
    download: 'https://github.com/nodaysidle/nodaysidle-shareguard/releases/download/v0.1.0/ShareGuard-v0.1.0-macos.zip',
    checksum: 'a14e01aa0aa077173d447abe8f2492507d5660e38c881daf0bad86d4d3038088',
    headline: 'Catch secrets before a folder leaves your Mac.',
    summary: 'A local-first macOS scanner for drag-and-drop pre-share checks, redacted findings, and release-safe review before files move outward.',
    proof: ['1.1MB macOS app ZIP', '18 Swift tests passed', 'Round-trip release ZIP + codesign verified'],
    features: [
      'Drag-and-drop recursive file/folder scanning',
      'Secret hints (token-like strings, private-key headers, .env values)',
      'Personal data hints (emails, phone-like strings, local paths, risky URLs)',
      'Suspicious filename detection (id_rsa, .pem, .p12, .mobileprovision, .env)',
      'Manual-review media flagging for PDFs and images',
      'Redacted findings with masked excerpts, zero network calls',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-07-04',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#ff6b6b',
  },
  {
    slug: 'nodaysidle-voice-anywhere-v2',
    name: 'Voice Anywhere v2',
    type: 'Android accessibility dictation overlay',
    platform: 'Android',
    stack: ['Kotlin', 'Android Accessibility Services', 'FUTO STT'],
    status: 'v0.2.0',
    artifact: 'voice-anywhere-v2-v0.2.0-release.apk',
    release: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2/releases/tag/v0.2.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2',
    download: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2/releases/download/v0.2.0/voice-anywhere-v2-v0.2.0-release.apk',
    checksum: null,
    headline: 'Speak into any Android app, anywhere.',
    summary: 'A floating mic overlay that uses Android Accessibility Services to detect the focused input field and insert dictated text at the cursor. Works fully offline by default, tested on Pixel 8a with Android 16.',
    proof: [],
    features: [
      'Floating pill overlay — draggable, snaps to screen edge, persists position',
      'Cursor-aware insertion — appends at cursor, not end of field',
      'Smart hint detection — never confuses placeholder text with real content',
      'Three insertion modes (SET/PST/CPY) with live visual feedback',
      'No-field guard — shows NO FIELD instead of useless dictation',
      'Opt-in local transcript history with copy, retry, delete',
    ],
    maturity: 'shipped',
    dataBoundary: 'local/offline by default',
    updated: '2026-07-10',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#c8ff00',
  },
  {
    slug: 'nodaysidian',
    name: 'Nodaysidian',
    type: 'Knowledge graph for Markdown notes',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'Core Data', 'NaturalLanguage'],
    status: 'v0.1.0',
    artifact: 'Nodaysidian.dmg',
    release: 'https://github.com/nodaysidle/nodaysidian/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidian',
    download: 'https://github.com/nodaysidle/nodaysidian/releases/download/v0.1.0/Nodaysidian.dmg',
    checksum: null,
    headline: 'A native macOS knowledge graph for your Markdown notes.',
    summary: 'Import Obsidian vaults, discover semantic connections between notes via on-device embeddings, and explore your knowledge as an interactive graph. Local-first, SwiftUI, no cloud.',
    proof: [],
    features: [
      'Markdown note workspace — create, edit, save, delete, search notes',
      'Obsidian vault import — maps [[wiki-links]] into graph edges',
      'Semantic auto-links via local NLEmbedding and cosine similarity',
      'Ripeness scoring — ranks notes by age, content depth, connection density',
      'Interactive graph canvas — pan, zoom, drag nodes, double-click notes',
      'Whiteboard mode — canvases with select, rectangle, ellipse, arrow, text, pencil',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-22',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#c8ff00',
  },
  {
    slug: 'cloudscribe',
    name: 'CloudScribe',
    type: 'Cloud speech-to-text menu bar app',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'Deepgram nova-3', 'Keychain'],
    status: 'v0.1.0 live',
    artifact: 'CloudScribe-v0.1.0-macos.zip',
    release: 'https://github.com/nodaysidle/nodaysidle-cloudscribe/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-cloudscribe',
    download: 'https://github.com/nodaysidle/nodaysidle-cloudscribe/releases/download/v0.1.0/CloudScribe-v0.1.0-macos.zip',
    checksum: 'b4900ef216fb5a8f44d354ba31b9c9a545133fe9145bf13ec38bdacf30d07d33',
    headline: 'Menu bar dictation through Deepgram, with the cloud boundary visible.',
    summary: 'A macOS menu bar dictation app with Keychain API-key storage, Deepgram nova-3 transcription, transcript history, and explicit cloud-use proof.',
    proof: ['528KB macOS app ZIP', '31 Swift tests passed', 'Live Deepgram smoke + codesign verified'],
    features: [
      'Live dictation from menu bar or floating pill with streaming interim text',
      'Audio file import (WAV, MP3, M4A, OGG, FLAC, AAC, WebM)',
      'Draggable always-on-top floating pill with live status',
      'Global hotkey (⌥⇧Space), configurable in Settings',
      'Auto-paste copies final transcript into frontmost app',
      'Optional local transcript history and OpenRouter text polish',
    ],
    maturity: 'shipped',
    dataBoundary: 'cloud',
    updated: '2026-07-04',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#7dd3fc',
  },
];

export const featuredSlugs = [
  'orbit-browser',
  'nodaysidle-control-room',
  'scribeflowpro',
  'werkstatt-infinite',
];

/**
 * @param {Project[]} projects
 * @returns {Project[]}
 */
export function getCatalogueEntries(projects) {
  return projects.filter((p) => p.slug !== 'nodaysidle-project-pages');
}

/**
 * @param {Project[]} projects
 * @returns {Project | undefined}
 */
export function getFeaturedProject(projects) {
  return projects.find((p) => p.slug === featuredSlugs[0]);
}

/**
 * @param {string} slug
 * @returns {Project | undefined}
 */
export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

/**
 * @param {string | null | undefined} hash
 * @returns {string}
 */
export function formatChecksum(hash) {
  if (!hash || typeof hash !== 'string') return '—';
  return `${hash.slice(0, 12)}\u2026${hash.slice(-10)}`;
}

export function validateProjects() {
  if (projects.length !== 10) {
    throw new Error(`Expected exactly 10 projects, got ${projects.length}`);
  }

  const slugs = projects.map((p) => p.slug);
  const uniqueSlugs = new Set(slugs);
  if (uniqueSlugs.size !== slugs.length) {
    throw new Error('Project slugs must be unique');
  }

  if (featuredSlugs.length !== 4) {
    throw new Error(`Expected exactly 4 featured slugs, got ${featuredSlugs.length}`);
  }

  for (const slug of featuredSlugs) {
    if (!projects.some((p) => p.slug === slug)) {
      throw new Error(`Featured slug not found in projects: ${slug}`);
    }
  }

  const requiredStringFields = [
    'slug',
    'name',
    'type',
    'platform',
    'status',
    'artifact',
    'release',
    'repo',
    'headline',
    'summary',
    'dataBoundary',
    'updated',
  ];
  const requiredArrayFields = ['stack', 'proof', 'features'];

  for (const project of projects) {
    for (const field of requiredStringFields) {
      if (typeof project[field] !== 'string' || project[field].length === 0) {
        throw new Error(`Project ${project.slug} missing required string field: ${field}`);
      }
    }
    for (const field of requiredArrayFields) {
      if (!Array.isArray(project[field])) {
        throw new Error(`Project ${project.slug} missing required array field: ${field}`);
      }
    }
    if (project.maturity !== 'shipped') {
      throw new Error(`Project ${project.slug} must have maturity='shipped', got ${project.maturity}`);
    }
    if (
      !project.repo.startsWith('https://github.com/nodaysidle/') ||
      !project.release.startsWith('https://github.com/nodaysidle/')
    ) {
      throw new Error(`Project ${project.slug} must use public GitHub repo and release URLs`);
    }
  }
}

validateProjects();
