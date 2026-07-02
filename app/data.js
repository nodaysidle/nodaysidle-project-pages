export const projects = [
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
    accent: '#ff6b6b',
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
    accent: '#7dd3fc',
  },
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
    accent: '#78c7ea',
  },
  {
    slug: 'sunder',
    name: 'Sunder',
    type: 'Local AI research graph',
    platform: 'macOS',
    stack: ['Tauri 2', 'Rust', 'React 19', 'SQLite', 'ONNX'],
    status: 'v0.1.0 live',
    artifact: 'Sunder_0.1.0_aarch64.dmg',
    release: 'https://github.com/nodaysidle/sunder/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/sunder',
    download: 'https://github.com/nodaysidle/sunder/releases/download/v0.1.0/Sunder_0.1.0_aarch64.dmg',
    checksum: '0a8ddc4859dbc78d43783e8a72f761525785397f0aed75b0acfd5534a2756ea0',
    headline: 'Split a vault open and map the latent research hiding inside.',
    summary: 'A local-first research hub with CodeMirror editing, hybrid FTS5 plus semantic search, ONNX note discovery, and a D3 knowledge graph.',
    proof: ['30.7MB public macOS DMG', 'release:check passed', 'DMG checksum valid'],
    accent: '#43c7a7',
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
    accent: '#55d0bd',
  },
  {
    slug: 'nodaysidle-whispering',
    name: 'NoDaysIdle Whispering',
    type: 'Private macOS dictation',
    platform: 'macOS',
    stack: ['Tauri 2', 'Rust', 'React', 'whisper.cpp'],
    status: 'v0.1.0 live',
    artifact: 'NoDaysIdle-Whispering-0.1.0-aarch64.zip',
    release: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidle-whispering',
    download: 'https://github.com/nodaysidle/nodaysidle-whispering/releases/download/v0.1.0/NoDaysIdle-Whispering-0.1.0-aarch64.zip',
    checksum: '781430b35c35bb872d377abc4aab31aed930feea174f733dbe4c04607170308d',
    headline: 'A warm, local dictation desk for words that should stay on your Mac.',
    summary: 'Local Whisper transcription, push-to-talk capture, and a searchable transcript vault for private writing and voice capture.',
    proof: ['60.3MB macOS app ZIP', 'ci:verify passed', 'Signed .app verified locally'],
    accent: '#d49b42',
  },
  {
    slug: 'synapse-notes',
    name: 'Synapse Notes',
    type: 'Voice-first AI notes',
    platform: 'Android',
    stack: ['React', 'Capacitor', 'Supabase', 'Gemini', 'Three.js'],
    status: 'v0.1.0 live',
    artifact: 'Synapse-Notes-0.1.0-debug.apk',
    release: 'https://github.com/nodaysidle/synapse-notes/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/synapse-notes',
    download: 'https://github.com/nodaysidle/synapse-notes/releases/download/v0.1.0/Synapse-Notes-0.1.0-debug.apk',
    checksum: 'b83ae21646873a00e3b2527a4846962f40aeda4f77a43bc2124fce7756d56b50',
    headline: 'Speak a thought. Watch it become a searchable neural note.',
    summary: 'Voice capture, Gemini transcription, Imagen generation, embeddings, semantic search, and a Three.js knowledge graph.',
    proof: ['4.4MB Android APK', 'Vite build passed', 'Gradle assembleDebug passed'],
    accent: '#d5b765',
  },
];

export const stack = [
  'Next.js App Router', 'React 19', 'TypeScript-ready JS modules', 'SwiftUI', 'Tauri 2', 'Rust',
  'SQLite / FTS5', 'MLX / Whisper', 'Deepgram', 'ONNX', 'Capacitor Android', 'Vercel', 'GitHub Releases'
];

export const workflows = [
  {
    name: 'Eldio orchestrator',
    route: 'GPT-5.5 / Hermes',
    detail: 'Final verifier, repo operator, release-proof gatekeeper, and deployment owner.'
  },
  {
    name: 'coding-specialist',
    route: 'OpenCode Go / Kimi K2.7 Code',
    detail: 'Bounded implementation helper for repository edits after scope is explicit.'
  },
  {
    name: 'glm-architect',
    route: 'OpenCode Go / GLM-5.2',
    detail: 'Long-context architecture and content planning critic.'
  },
  {
    name: 'qwen-vision-reviewer',
    route: 'OpenCode Go / Qwen 3.7 Plus',
    detail: 'Screenshot and responsive UI review when visual proof exists.'
  },
  {
    name: 'cold-auditor / minimax-reviewer',
    route: 'GPT-5.5 or MiniMax M3',
    detail: 'Independent final-readiness review before the operator calls done.'
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function formatChecksum(hash) {
  return `${hash.slice(0, 12)}…${hash.slice(-10)}`;
}
