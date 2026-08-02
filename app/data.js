/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} type
 * @property {'macOS' | 'Android'} platform
 * @property {string[]} stack
 * @property {string} status
 * @property {string} artifact
 * @property {number} byteSize
 * @property {string} release
 * @property {string} repo
 * @property {string | null} download
 * @property {string | null} checksum
 * @property {string} headline
 * @property {string} summary
 * @property {string[]} proof
 * @property {string[]} features
 * @property {'shipped' | 'in_development' | 'fork'} maturity
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
    byteSize: 8391419,
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
    accent: '#8D97A2',
  },
  {
    slug: 'nodaysidle-control-room',
    name: 'NODAYSIDLE Control Room',
    type: 'Native agent operations console',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'AppKit', 'Menu Bar'],
    status: 'v0.1.2 live',
    artifact: 'NODAYSIDLE-Control-Room-0.1.2.dmg',
    byteSize: 600815,
    release: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/tag/v0.1.2-dmg.20260727',
    repo: 'https://github.com/nodaysidle/nodaysidle-control-room',
    download: 'https://github.com/nodaysidle/nodaysidle-control-room/releases/download/v0.1.2-dmg.20260727/NODAYSIDLE-Control-Room-0.1.2.dmg',
    checksum: '88fa0478f4ad3892edb878db1d80dfc4a860f54be7e6139ef66af5aef12fbbad',
    headline: 'Local AI-ops. One Mac control room.',
    summary: 'A native menu bar command surface for agent sessions, repo dirt, bridge health, and proof receipts.',
    proof: ['600KB macOS DMG', '16 Swift tests + CI passed', '/Applications launch smoke passed'],
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
    accent: '#D7DCE2',
  },
  {
    slug: 'scribeflowpro',
    name: 'ScribeFlowPro',
    type: 'Offline meeting transcription',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'MLX', 'Whisper', 'Qwen'],
    status: 'v1.0.0 live',
    artifact: 'ScribeFlowPro-1.0.0.dmg',
    byteSize: 10826475,
    release: 'https://github.com/nodaysidle/scribeflowpro/releases/tag/v1.0.0-dmg.20260727',
    repo: 'https://github.com/nodaysidle/scribeflowpro',
    download: 'https://github.com/nodaysidle/scribeflowpro/releases/download/v1.0.0-dmg.20260727/ScribeFlowPro-1.0.0.dmg',
    checksum: '291e82cb553f56e1ba1936dd8e464e088769951e6f74aa05788f7abfea949f86',
    headline: 'Record a meeting, transcribe it locally, and leave with the summary.',
    summary: 'Native macOS recording, local Whisper transcription, and local Qwen summarization through a verified MLX runtime path.',
    proof: ['10.8MB macOS DMG', '5 Swift tests passed', 'Real local Whisper + Qwen smoke'],
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
    accent: '#20262D',
  },
  {
    slug: 'werkstatt-infinite',
    name: 'Werkstatt Infinite',
    type: 'Drawing and notebook app',
    platform: 'Android',
    stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt DI', 'Room'],
    status: 'v1.0',
    artifact: 'werkstatt-infinite-v1.0.apk',
    byteSize: 1453981,
    release: 'https://github.com/nodaysidle/werkstatt-infinite/releases/tag/v1.0',
    repo: 'https://github.com/nodaysidle/werkstatt-infinite',
    download: 'https://github.com/nodaysidle/werkstatt-infinite/releases/download/v1.0/werkstatt-infinite-v1.0.apk',
    checksum: 'a3a5728758627fe344d8e36f13a0612fdd4ffa9b67e9d52d45d810e13105ec1f',
    headline: 'Premium Android drawing and notebook app.',
    summary: 'An expressive drawing canvas with multiple brush types, pressure-aware strokes, pinch-to-zoom, undo/redo, and a gallery system. Local-first, Jetpack Compose, feature-complete.',
    proof: ['1.5MB Android APK', 'SHA256 verified 2026-08-02'],
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
    accent: '#8D97A2',
  },
  {
    slug: 'nodaysidle-flowstate',
    name: 'FlowState',
    type: 'Focus-state menu bar utility',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'AppKit', 'Core Animation'],
    status: 'v1.0.1',
    artifact: 'FlowState-1.0.1.dmg',
    byteSize: 558921,
    release: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/tag/v1.0.1',
    repo: 'https://github.com/nodaysidle/nodaysidle-flowstate',
    download: 'https://github.com/nodaysidle/nodaysidle-flowstate/releases/download/v1.0.1/FlowState-1.0.1.dmg',
    checksum: '156993e518a9f21fffac53de7c8fc47afe9ebe427425ce63b1acf3eb7131cbe1',
    headline: "A smarter Pomodoro for developers who don't like timers.",
    summary: 'Adaptive focus detection via keyboard and mouse activity monitoring. Learns your work patterns, dims the screen when focus drops, and suggests breaks based on session trends — all on-device.',
    proof: ['559KB macOS DMG', 'SHA256 verified 2026-08-02'],
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
    accent: '#D7DCE2',
  },
  {
    slug: 'cliprail',
    name: 'ClipRail',
    type: 'Clipboard history menu bar app',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI'],
    status: 'v1.2.0',
    artifact: 'ClipRail-1.2.0.dmg',
    byteSize: 199149,
    release: 'https://github.com/nodaysidle/cliprail/releases/tag/v1.2.0-dmg.20260727',
    repo: 'https://github.com/nodaysidle/cliprail',
    download: 'https://github.com/nodaysidle/cliprail/releases/download/v1.2.0-dmg.20260727/ClipRail-1.2.0.dmg',
    checksum: 'a83120148c67d7a33fb191ae2a373f237c80313b4e584471db29aae464115c0d',
    headline: 'Menu bar clipboard history. Local, text-only, searchable.',
    summary: 'Keeps your last 10 plain-text clips one click away in the macOS menu bar. Pin up to 3 favorites, search live, and never worry about network access — there is none.',
    proof: ['199KB macOS DMG', 'Swift 6 + SwiftUI', 'Zero network access'],
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
    accent: '#20262D',
  },
  {
    slug: 'shareguard',
    name: 'ShareGuard',
    type: 'Local pre-share privacy scanner',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'Local scanning', 'Redaction'],
    status: 'v0.1.0 live',
    artifact: 'ShareGuard-0.1.0.dmg',
    byteSize: 1372251,
    release: 'https://github.com/nodaysidle/nodaysidle-shareguard/releases/tag/v0.1.0-dmg.20260727',
    repo: 'https://github.com/nodaysidle/nodaysidle-shareguard',
    download: 'https://github.com/nodaysidle/nodaysidle-shareguard/releases/download/v0.1.0-dmg.20260727/ShareGuard-0.1.0.dmg',
    checksum: '590bd3e066ecd30fa998c38755647264affb571680de6b494055b620a84ce8fd',
    headline: 'Catch secrets before a folder leaves your Mac.',
    summary: 'A local-first macOS scanner for drag-and-drop pre-share checks, redacted findings, and release-safe review before files move outward.',
    proof: ['1.4MB macOS DMG', '18 Swift tests passed', 'Round-trip release + codesign verified'],
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
    accent: '#8D97A2',
  },
  {
    slug: 'nodaysidle-voice-anywhere-v2',
    name: 'Voice Anywhere v2',
    type: 'Android accessibility dictation overlay',
    platform: 'Android',
    stack: ['Kotlin', 'Android Accessibility Services', 'FUTO STT'],
    status: 'v0.2.0',
    artifact: 'voice-anywhere-v2-v0.2.0-release.apk',
    byteSize: 494003,
    release: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2/releases/tag/v0.2.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2',
    download: 'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2/releases/download/v0.2.0/voice-anywhere-v2-v0.2.0-release.apk',
    checksum: '7f9b6340f07f4fe12f0b6cac36bcca07dd4b3e7e1273f3218b8afcf403993a41',
    headline: 'Speak into any Android app, anywhere.',
    summary: 'A floating mic overlay that uses Android Accessibility Services to detect the focused input field and insert dictated text at the cursor. Works fully offline by default, tested on Pixel 8a with Android 16.',
    proof: ['494KB Android APK', 'SHA256 verified 2026-08-02'],
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
    accent: '#D7DCE2',
  },
  {
    slug: 'nodaysidian',
    name: 'Nodaysidian',
    type: 'Knowledge graph for Markdown notes',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'Core Data', 'NaturalLanguage'],
    status: 'v0.1.0',
    artifact: 'Nodaysidian.dmg',
    byteSize: 873742,
    release: 'https://github.com/nodaysidle/nodaysidian/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidian',
    download: 'https://github.com/nodaysidle/nodaysidian/releases/download/v0.1.0/Nodaysidian.dmg',
    checksum: '6a998de0b3aac3e6bf32bbb58a7826562d5b2efbe5aff805d8e17e57ebb95ce4',
    headline: 'A native macOS knowledge graph for your Markdown notes.',
    summary: 'Import Obsidian vaults, discover semantic connections between notes via on-device embeddings, and explore your knowledge as an interactive graph. Local-first, SwiftUI, no cloud.',
    proof: ['874KB macOS DMG', 'SHA256 verified 2026-08-02'],
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
    accent: '#20262D',
  },
  {
    slug: 'cloudscribe',
    name: 'CloudScribe',
    type: 'Cloud speech-to-text menu bar app',
    platform: 'macOS',
    stack: ['SwiftPM', 'SwiftUI', 'Deepgram nova-3', 'Keychain'],
    status: 'v0.1.0 live',
    artifact: 'CloudScribe-v0.1.0-macos.zip',
    byteSize: 527577,
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
    accent: '#8D97A2',
  },
  {
    slug: 'batchrename-pro',
    name: 'BatchRename Pro',
    type: 'Batch file renaming utility',
    platform: 'macOS',
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite'],
    status: 'v0.1.0',
    artifact: 'BatchRename-Pro-0.1.0-aarch64.dmg',
    byteSize: 7139735,
    release: 'https://github.com/nodaysidle/batchrename-pro/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/batchrename-pro',
    download: 'https://github.com/nodaysidle/batchrename-pro/releases/download/v0.1.0/BatchRename-Pro-0.1.0-aarch64.dmg',
    checksum: 'ef6e33a03881430c329fd9fd888cf4010142598010a89b535cf0eb2c3948309b',
    headline: 'Rename files in batches, safely, with live preview and full undo.',
    summary: 'Local-first Tauri desktop app for batch renaming via regex patterns, template tokens, and sequential numbering — with live preview, conflict blocking, backup, and undo. No cloud, no scripts.',
    proof: ['7.1MB macOS DMG', 'SHA256 verified 2026-08-02', 'Ad-hoc signed, not notarized'],
    features: [
      'Regex patterns, template tokens ({date}, {number}, {original}, {ext}), and sequential numbering with zero-padding',
      'Live preview — see results before anything touches disk',
      'Conflict blocking — detects name collisions before applying',
      'Undo — every operation creates a backup; rollback from SQLite-backed job history',
      'Drag-and-drop file/folder input',
      'Honest status: format conversion and metadata editing tabs are disabled until fully implemented',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#D7DCE2',
  },
  {
    slug: 'nodaysidle-cistilka',
    name: 'Cistilka',
    type: 'Disk space analyzer',
    platform: 'macOS',
    stack: ['Swift 6', 'Swift Package Manager', 'OAuth', 'SFTP'],
    status: 'v0.1.0',
    artifact: 'Cistilka-0.1.0.dmg',
    byteSize: 7967417,
    release: 'https://github.com/nodaysidle/nodaysidle-cistilka/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-cistilka',
    download: 'https://github.com/nodaysidle/nodaysidle-cistilka/releases/download/v0.1.0/Cistilka-0.1.0.dmg',
    checksum: 'b6bf849952aa108f6bb8db5fb6135819fd33412817abaa9721a81fb571607608',
    headline: 'Find what is eating your storage, then clean up safely.',
    summary: 'Native macOS disk-space analyzer in the style of WizTree: a dense size tree, file-type totals, and Trash-first cleanup. Built for local disks first; cloud and SSH are optional extras.',
    proof: ['8.0MB macOS DMG', 'SHA256 verified 2026-08-02', 'Trash-first local cleanup'],
    features: [
      'Dense tree with size, file counts, and % of parent',
      'File-type totals for hunting .mov, .dmg, and friends',
      'Move to Trash — never silent permanent delete for local files',
      'Scans large trees without freezing the UI',
      'Full Disk Access coach when scans look incomplete',
      'Optional Google Drive/OneDrive (OAuth + PKCE) and SFTP scanning',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#20262D',
  },
  {
    slug: 'nodaysidle-lumiere',
    name: 'Lumiere',
    type: 'Screenshot polish and annotation',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'AppKit', 'Core Image', 'Vision', 'Core ML', 'SwiftData'],
    status: 'v0.1.0',
    artifact: 'Lumiere-v0.1.0-macos.dmg',
    byteSize: 922413,
    release: 'https://github.com/nodaysidle/nodaysidle-lumiere/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-lumiere',
    download: 'https://github.com/nodaysidle/nodaysidle-lumiere/releases/download/v0.1.0/Lumiere-v0.1.0-macos.dmg',
    checksum: '7a029096a6759c9ae972c83f6c829bbb35643cfaa70f9760f81bd1599b18c02b',
    headline: 'Turn clipboard screenshots into clean, annotated exports — locally.',
    summary: 'Native macOS app that watches for copied images, applies local cleanup and perspective correction, annotates with vector tools, and exports PNG/JPEG/HEIC. No network, no accounts, no telemetry.',
    proof: ['922KB macOS DMG', 'SHA256 verified 2026-08-02', 'Not Developer ID signed or notarized'],
    features: [
      'Auto-capture — clipboard monitoring detects screenshots and copied images',
      'Shadow styling — directional shadow depth on screenshots',
      'Perspective correction — document edge detection with Vision',
      'Vector annotations — arrow, rectangle, text, callout, and blur tools',
      'Floating glass toolbar with cursor-proximity reveal',
      'Export PNG (lossless), JPEG, and HEIC — all on-device',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#8D97A2',
  },
  {
    slug: 'nodaysidle-whispering',
    name: 'NoDaysIdle Whispering',
    type: 'Local-first dictation',
    platform: 'macOS',
    stack: ['Tauri 2', 'Rust', 'whisper.cpp', 'React', 'TypeScript'],
    status: 'v0.1.0',
    artifact: 'NoDaysIdle-Whispering-0.1.0.dmg',
    byteSize: 62544485,
    release: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/tag/v0.1.0-dmg.20260727',
    repo: 'https://github.com/nodaysidle/nodaysidle-whispering',
    download: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/download/v0.1.0-dmg.20260727/NoDaysIdle-Whispering-0.1.0.dmg',
    checksum: '99c7e134b3d8af3495e4596578f9d7ebed0081553b16b55044dd2aaa453faa02',
    headline: 'Push-to-talk dictation that transcribes entirely on your Mac.',
    summary: 'Local-first macOS dictation with a Tauri shell, Rust whisper.cpp backend, and a searchable transcript vault. Speech never leaves the machine; bundled Whisper model, global hotkey, native text insertion.',
    proof: ['62.5MB macOS DMG', 'SHA256 verified 2026-08-02', 'Bundled Whisper model, ad-hoc signed'],
    features: [
      'Local-first transcription — speech stays on your machine',
      'Bundled Whisper model (ggml-base.en-q5_1.bin) in the app bundle',
      'Global push-to-talk hotkey configurable from settings',
      'Transcript vault — save, search, pin, archive, copy, clear',
      'Native text insertion via final paste and backend insertion modes',
      'VAD toggle and automatic or chosen language detection',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#D7DCE2',
  },
  {
    slug: 'nodaysnotes',
    name: 'NODAYSNOTES',
    type: 'Markdown notes',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'Swift Package Manager'],
    status: 'v0.1.0',
    artifact: 'NODAYSNOTES_0.1.0_aarch64.zip',
    byteSize: 531803,
    release: 'https://github.com/nodaysidle/nodaysnotes/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysnotes',
    download: 'https://github.com/nodaysidle/nodaysnotes/releases/download/v0.1.0/NODAYSNOTES_0.1.0_aarch64.zip',
    checksum: '69afee3d92890b2f08e611e26daae7d86c78d827cc41741d47cc33ce6eba3f71',
    headline: 'Plain Markdown files, fast capture, no lock-in.',
    summary: 'Native macOS Markdown notes stored as plain .md files in a folder you control — wiki links, daily notes, search, backlinks, and tags. No proprietary format, no cloud dependency.',
    proof: ['532KB macOS ZIP', 'SHA256 verified 2026-08-02', 'Swift 6 + SwiftUI'],
    features: [
      'Local-first Markdown notes stored as plain files on disk',
      'Wiki-style [[links]] with Cmd-click navigation',
      'Daily note command from the app menu',
      'Search, backlinks, and tags',
      'Notebook-oriented structure',
      'Ad-hoc signed, distributable zipped .app via GitHub Releases',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#20262D',
  },
  {
    slug: 'nodaysrecording',
    name: 'NoDays Record',
    type: 'Screen recorder',
    platform: 'macOS',
    stack: ['Swift 6', 'SwiftUI', 'ScreenCaptureKit', 'Swift Package Manager'],
    status: 'v0.1.0 early release',
    artifact: 'NoDaysRecord-0.1.0.dmg',
    byteSize: 2010874,
    release: 'https://github.com/nodaysidle/nodaysrecording/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysrecording',
    download: 'https://github.com/nodaysidle/nodaysrecording/releases/download/v0.1.0/NoDaysRecord-0.1.0.dmg',
    checksum: '5a7ffec30a99e7ec7bfb179726ff390b70c16b1972f95314ff1455ff9262182c',
    headline: 'A local-first macOS screen recorder for demos and tutorials.',
    summary: 'Records a display, window, or region with microphone and system audio, saves .mov files to a local library, and offers a focused editing surface. Early release: several editor/export features are documented rather than complete.',
    proof: ['2.0MB macOS DMG', 'SHA256 verified 2026-08-02', 'Ad-hoc signed, not notarized'],
    features: [
      'Capture an entire display, a visible window, or a selected area',
      'Microphone audio and system audio via ScreenCaptureKit',
      'Countdown, pause/resume, and the global ⌘⇧R shortcut',
      'Real .mov recordings saved to a local library (H.264 QuickTime-compatible)',
      'Built-in editor with local playback, seeking, zoom/background/cursor/caption settings',
      'Honest status: face-cam compositing disabled; pen/shape/text/highlight tools not implemented; no final rendered export pipeline yet',
    ],
    maturity: 'in_development',
    dataBoundary: 'local',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#8D97A2',
  },
  {
    slug: 'nodaystypst',
    name: 'nodaystypst',
    type: 'Predictive typing menu bar app',
    platform: 'macOS',
    stack: ['Swift 6', 'AppKit', 'OpenRouter', 'Gemma 4', 'Keychain'],
    status: 'v0.1.0',
    artifact: 'Nodaystypst-0.1.0-macOS-arm64.dmg',
    byteSize: 5457891,
    release: 'https://github.com/nodaysidle/nodaystypst/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaystypst',
    download: 'https://github.com/nodaysidle/nodaystypst/releases/download/v0.1.0/Nodaystypst-0.1.0-macOS-arm64.dmg',
    checksum: '09423e04581fbb1659326c11ca4483cb636dddd06facac925605c639b643daed',
    headline: 'Cloud-powered predictive typing, quiet at the caret.',
    summary: 'Watches the text field you are writing in, sends a short bounded context to OpenRouter, and shows a subtle 2–4-word completion beside the caret; Tab accepts. The local profile holds only encrypted aggregate counters keyed in Keychain.',
    proof: ['5.5MB macOS DMG', 'SHA256 verified 2026-08-02', 'OpenRouter inference, no local model'],
    features: [
      'Subtle 2–4-word ghost completion at the caret; Tab accepts, typing dismisses',
      'Supported surfaces: Orion Browser, Antinote, Bear, ChatGPT, Ghostty, TextEdit, Notes, Safari, Obsidian',
      'Question-mark suffix suppresses prediction (never answers questions as chat)',
      'Secure fields blocked before content capture or prediction',
      'Encrypted aggregate learning profile (AES-GCM, random key in Keychain), clearable at any time',
      'Cloud boundary explicit: OpenRouter requests only; bounded context; no documents or typing history stored',
    ],
    maturity: 'shipped',
    dataBoundary: 'cloud (OpenRouter)',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#D7DCE2',
  },
  {
    slug: 'synapse-notes',
    name: 'Synapse Notes',
    type: 'Voice-first notes',
    platform: 'Android',
    stack: ['React', 'TypeScript', 'Capacitor', 'Supabase', 'Three.js'],
    status: 'v0.2.0 debug prototype',
    artifact: 'debug.apk',
    byteSize: 4525603,
    release: 'https://github.com/nodaysidle/synapse-notes/releases/tag/v0.2.0',
    repo: 'https://github.com/nodaysidle/synapse-notes',
    download: 'https://github.com/nodaysidle/synapse-notes/releases/download/v0.2.0/debug.apk',
    checksum: '09ddaa652cd8940b9fb7752a29deb7382933bbf4924169e76acc3d567c3c767d',
    headline: 'Voice-first notes with transcription, visuals, and a 3D knowledge graph.',
    summary: 'Record a voice note, transcribe it via AI, generate a visual companion, embed the transcript for semantic search, and explore related notes in a 3D graph. Prototype: debug APK, Supabase backend required, not Play-signed or production-hardened.',
    proof: ['4.5MB Android debug APK', 'SHA256 verified 2026-08-02', 'Not Play Store signed'],
    features: [
      'Voice recording with waveform feedback',
      'AI transcription through Supabase Edge Functions',
      'AI image generation for note visuals',
      'Semantic search backed by pgvector embeddings',
      '3D graph view powered by Three.js',
      'Prototype status: debug APK for testing and side-loading; Supabase credentials and provider keys required',
    ],
    maturity: 'in_development',
    dataBoundary: 'cloud (Supabase)',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#20262D',
  },
  {
    slug: 'twentyone',
    name: 'twentyone',
    type: 'Android remote controller for nodaysgent',
    platform: 'Android',
    stack: ['Expo', 'React Native', 'Cloudflare tunnel', 'Secure Store'],
    status: 'v0.1.0',
    artifact: 'app-release.apk',
    byteSize: 85986903,
    release: 'https://github.com/nodaysidle/twentyone/releases/tag/twentyone-v0.1.0',
    repo: 'https://github.com/nodaysidle/twentyone',
    download: 'https://github.com/nodaysidle/twentyone/releases/download/twentyone-v0.1.0/app-release.apk',
    checksum: 'c184b14726aa787ca5350de73477f3de795e676e100fdbc0703fbe58244a749a',
    headline: 'Chat with your local Mac gateway from Android.',
    summary: 'Android companion for the private nodaysgent gateway: QR pairing with the desktop, chat, an approvals inbox for sensitive tool requests, and slash commands over a Cloudflare tunnel. Requires a running nodaysgent gateway; not a standalone app.',
    proof: ['86MB Android APK', 'SHA256 verified 2026-08-02', 'Requires nodaysgent gateway + Cloudflare tunnel'],
    features: [
      'QR pairing — scan the desktop Remote Setup QR; device confirmed via /devices/confirm',
      'Cloudflare tunnel transport — public HTTPS URL, no USB/LAN onboarding',
      'Chat — send prompts to the gateway with mobile-safe sanitization',
      'Approvals inbox — badge-counted tab for sensitive gateway tool prompts',
      'Slash commands — /status, /eldio, and extensible handlers via the Eldio bridge',
      'Gateway dependency explicit: nodaysgent must be running (default 127.0.0.1:3110) with a public tunnel',
    ],
    maturity: 'shipped',
    dataBoundary: 'cloud (nodaysgent gateway via Cloudflare tunnel)',
    updated: '2026-08-02',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#8D97A2',
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
  if (projects.length !== 19) {
    throw new Error(`Expected exactly 19 projects, got ${projects.length}`);
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
  const allowedMaturity = ['shipped', 'in_development', 'fork'];

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
    if (typeof project.byteSize !== 'number' || !Number.isFinite(project.byteSize) || project.byteSize <= 0) {
      throw new Error(`Project ${project.slug} must have a positive byteSize number`);
    }
    if (!allowedMaturity.includes(project.maturity)) {
      throw new Error(
        `Project ${project.slug} must have maturity in [${allowedMaturity.join(', ')}], got ${project.maturity}`
      );
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
