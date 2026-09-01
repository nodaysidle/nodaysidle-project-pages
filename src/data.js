/**
 * Public NODAYSIDLE showcase data
 * Curated for the current public-facing story surface.
 */

/** @typedef {'voice-input' | 'notes-knowledge' | 'native-utilities' | 'workflow-systems' | 'browser-tools'} Category */
/** @typedef {'public' | 'private'} Visibility */

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
 * @property {string} accent
 * @property {Category} category
 * @property {Visibility} visibility
 * @property {string} story
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'nodaysidle-cascade-v3',
    name: 'NODAYSIDLE Cascade V3',
    type: 'Contract-driven software planning app',
    platform: 'macOS',
    stack: ['Tauri', 'Rust', 'TypeScript'],
    status: 'active public system',
    artifact: 'Source repository',
    release: 'https://github.com/nodaysidle/nodaysidle-cascade-v3/releases',
    repo: 'https://github.com/nodaysidle/nodaysidle-cascade-v3',
    download: null,
    checksum: null,
    headline: 'Turn one software idea into five agent-ready markdown contracts.',
    summary: 'A compiler-like planning surface for structured software execution. One idea in, one disciplined delivery packet out.',
    proof: ['Public repository', 'Structured contract output', 'Flagship workflow system'],
    features: [
      'Transforms a product idea into a fixed contract cascade',
      'Keeps structure ahead of improvisation',
      'Produces agent-ready markdown deliverables',
      'Designed for deterministic planning and handoff',
      'Fits multi-agent software execution workflows',
      'Represents the NODAYSIDLE planning worldview directly',
    ],
    maturity: 'shipped',
    dataBoundary: 'local-first workflow with model-assisted meaning extraction',
    updated: '2026-09-01',
    screenshotPath: '/screenshots/cascade-v3.png',
    screenshotAlt: 'NODAYSIDLE Cascade V3 application screenshot',
    screenshotSource: null,
    accent: '#C8FF00',
    category: 'workflow-systems',
    visibility: 'public',
    story: 'This is the planning engine behind the broader NODAYSIDLE approach: structure first, contracts before code, and outputs designed for real execution rather than vague ideation.',
  },
  {
    slug: 'nodaysidle-vois',
    name: 'NODAYSIDLE Voice',
    type: 'Hotkey-first dictation app',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI', 'AppKit'],
    status: 'active public product',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/nodaysidle-vois/releases',
    repo: 'https://github.com/nodaysidle/nodaysidle-vois',
    download: 'https://github.com/nodaysidle/nodaysidle-vois/releases',
    checksum: null,
    headline: 'Native hotkey-first dictation for macOS.',
    summary: 'A practical voice input tool built around fast capture, clean insertion, and a workflow that respects focus.',
    proof: ['Public repository', 'Release-backed product lane', 'Native Swift implementation'],
    features: [
      'Hotkey-first dictation workflow',
      'Built for fast text capture into real daily work',
      'Native macOS product feel rather than browser-style tooling',
      'Supports the broader NODAYSIDLE voice/input product lane',
      'Structured around low-friction interaction',
      'Designed as a practical tool, not a demo layer',
    ],
    maturity: 'shipped',
    dataBoundary: 'depends on configured speech path',
    updated: '2026-09-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#C8FF00',
    category: 'voice-input',
    visibility: 'public',
    story: 'Voice is one of the clearest recurring themes in NODAYSIDLE. This product represents input systems built for actual work, not novelty interaction.',
  },
  {
    slug: 'synapse-notes',
    name: 'Synapse Notes',
    type: 'Voice-first note system',
    platform: 'Android',
    stack: ['TypeScript', 'React', 'Supabase'],
    status: 'active public product',
    artifact: 'Android release',
    release: 'https://github.com/nodaysidle/synapse-notes/releases',
    repo: 'https://github.com/nodaysidle/synapse-notes',
    download: 'https://github.com/nodaysidle/synapse-notes/releases',
    checksum: null,
    headline: 'Voice-first notes with transcription, semantic search, and visual knowledge exploration.',
    summary: 'A note system where capture starts with speech and grows into searchable, structured memory rather than disposable fragments.',
    proof: ['Public repository', 'Voice-first product direction', 'Knowledge-system flagship'],
    features: [
      'Voice-first note capture',
      'Transcription and semantic memory framing',
      'Graph-oriented exploration of stored ideas',
      'A stronger knowledge-product thesis than a plain notes app',
      'Combines capture, retrieval, and visual structure',
      'Extends the NODAYSIDLE memory and knowledge lane',
    ],
    maturity: 'shipped',
    dataBoundary: 'hybrid app workflow',
    updated: '2026-09-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#79F2C0',
    category: 'notes-knowledge',
    visibility: 'public',
    story: 'NODAYSIDLE is not just about utilities. It is also about memory, structure, and building systems that keep ideas discoverable after the moment of capture.',
  },
  {
    slug: 'nodaysidle-cistilka',
    name: 'Cistilka',
    type: 'Disk space analyzer',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI'],
    status: 'active public product',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/nodaysidle-cistilka/releases',
    repo: 'https://github.com/nodaysidle/nodaysidle-cistilka',
    download: 'https://github.com/nodaysidle/nodaysidle-cistilka/releases',
    checksum: null,
    headline: 'Native macOS disk space analyzer focused on safe cleanup.',
    summary: 'A practical utility that makes disk usage legible and cleanup decisions safer without bloated system-junk theatrics.',
    proof: ['Public repository', 'Strong utility positioning', 'Native-first product'],
    features: [
      'Clear disk usage visibility',
      'Safe-cleanup framing instead of risky deletion theater',
      'Represents the NODAYSIDLE utility lane cleanly',
      'Native product fit for macOS users',
      'Focused scope instead of bundled nonsense',
      'Strong example of function before flash',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-09-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#FFB86A',
    category: 'native-utilities',
    visibility: 'public',
    story: 'This is the utility philosophy in plain form: solve a real local problem clearly, cleanly, and without unnecessary noise.',
  },
  {
    slug: 'pocket-drafts',
    name: 'Pocket Drafts',
    type: 'Private capture utility',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI', 'SwiftData'],
    status: 'active public product',
    artifact: 'Source repository',
    release: 'https://github.com/nodaysidle/pocket-drafts/releases',
    repo: 'https://github.com/nodaysidle/pocket-drafts',
    download: 'https://github.com/nodaysidle/pocket-drafts/releases',
    checksum: null,
    headline: 'Fast, private note capture from the macOS menu bar.',
    summary: 'A smaller expression of the same capture-first instinct: get the thought down quickly, locally, and without friction.',
    proof: ['Public repository', 'Menu bar workflow', 'Local-first capture utility'],
    features: [
      'Fast private note capture',
      'Menu bar workflow',
      'Local-first storage',
      'Minimal interface overhead',
      'Small but sharp utility shape',
      'Fits the NODAYSIDLE capture family',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-09-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#C8FF00',
    category: 'notes-knowledge',
    visibility: 'public',
    story: 'Not every product has to be broad. Some NODAYSIDLE tools exist to remove one point of friction from everyday work and do it well.',
  },
  {
    slug: 'nodaysrecording',
    name: 'NODAYSRECORDING',
    type: 'Screen recording tool',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI'],
    status: 'active public product',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/nodaysrecording/releases',
    repo: 'https://github.com/nodaysidle/nodaysrecording',
    download: 'https://github.com/nodaysidle/nodaysrecording/releases',
    checksum: null,
    headline: 'Local-first macOS screen recorder for polished demos and tutorials.',
    summary: 'A utility for communicating software clearly through recorded proof, not just screenshots and claims.',
    proof: ['Public repository', 'Demo-oriented utility', 'Native macOS release surface'],
    features: [
      'Local-first screen recording',
      'Useful for demos and product proof',
      'Supports public-facing communication around software',
      'Simple workflow over cluttered production suites',
      'Fits the utility layer of the ecosystem',
      'Designed around practical output quality',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-09-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#7DD3FC',
    category: 'native-utilities',
    visibility: 'public',
    story: 'Software needs proof. Recording tools matter because they make products explainable, demonstrable, and easier to trust.',
  },
  {
    slug: 'orbit-browser',
    name: 'Orbit Browser',
    type: 'Focused browser experiment',
    platform: 'macOS',
    stack: ['Tauri', 'Rust', 'WKWebView'],
    status: 'public product line',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/orbit-browser/releases/tag/v1.0.6',
    repo: 'https://github.com/nodaysidle/orbit-browser',
    download: 'https://github.com/nodaysidle/orbit-browser/releases/download/v1.0.6/Orbit_1.0.6_aarch64.dmg',
    checksum: '748014773343585c19398e381dd82051d89195a20eb2bcd2892b68a5836a59e3',
    headline: 'Focused macOS browser built for quiet, distraction-light browsing.',
    summary: 'A browser experiment that reflects the same recurring NODAYSIDLE preference for less noise, more intent, and native control.',
    proof: ['Public release', 'Native browser experimentation', 'Focused browsing direction'],
    features: [
      'Quiet browsing orientation',
      'Native-first approach rather than heavy Electron stack',
      'Keyboard and focus-oriented behavior',
      'Cleaner reading and navigation intent',
      'Represents a smaller but meaningful product branch',
      'Shows range without breaking the overall worldview',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-25',
    screenshotPath: '/screenshots/orbit-browser.png',
    screenshotAlt: 'Orbit Browser dark UI screenshot',
    screenshotSource: null,
    accent: '#78C7EA',
    category: 'browser-tools',
    visibility: 'public',
    story: 'Even the browser work points in the same direction: focused software, tighter boundaries, and tools that reduce noise rather than amplify it.',
  },
  {
    slug: 'cliprail',
    name: 'ClipRail',
    type: 'Clipboard history utility',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI'],
    status: 'public utility',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/cliprail/releases/tag/v1.2.0',
    repo: 'https://github.com/nodaysidle/cliprail',
    download: 'https://github.com/nodaysidle/cliprail/releases/download/v1.2.0/ClipRail-v1.2.0-macos.zip',
    checksum: null,
    headline: 'Local text-only clipboard history for the macOS menu bar.',
    summary: 'A small utility with a very clear job: preserve useful copied text without turning the clipboard into surveillance software.',
    proof: ['Public release', 'Zero network utility', 'Minimal menu bar workflow'],
    features: [
      'Text-only clipboard history',
      'Local-first behavior',
      'Searchable lightweight recall',
      'Small sharp utility footprint',
      'Privacy-aware by design',
      'Fits the NODAYSIDLE utility family cleanly',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-07-01',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#C8FF00',
    category: 'native-utilities',
    visibility: 'public',
    story: 'The ecosystem is not only about ambitious systems. It is also about useful low-friction tools that earn their place through daily reliability.',
  },
  {
    slug: 'nodaysidian',
    name: 'Nodaysidian',
    type: 'Knowledge graph for Markdown notes',
    platform: 'macOS',
    stack: ['Swift', 'SwiftUI', 'Core Data'],
    status: 'public knowledge tool',
    artifact: 'macOS release',
    release: 'https://github.com/nodaysidle/nodaysidian/releases/tag/v0.1.0',
    repo: 'https://github.com/nodaysidle/nodaysidian',
    download: 'https://github.com/nodaysidle/nodaysidian/releases/download/v0.1.0/Nodaysidian.dmg',
    checksum: null,
    headline: 'Native macOS knowledge graph for Markdown notes.',
    summary: 'A local-first graph surface for notes that extends the same memory and structure interest seen across your broader work.',
    proof: ['Public repository', 'Native knowledge graph direction', 'Markdown-centric workflow'],
    features: [
      'Knowledge graph exploration',
      'Markdown-first note structure',
      'Local semantic linking direction',
      'Graph and note workspace interaction',
      'A stronger native knowledge-system thesis',
      'Keeps memory and structure local',
    ],
    maturity: 'shipped',
    dataBoundary: 'local',
    updated: '2026-06-22',
    screenshotPath: null,
    screenshotAlt: null,
    screenshotSource: null,
    accent: '#C8FF00',
    category: 'notes-knowledge',
    visibility: 'public',
    story: 'This is another expression of the same idea: information should stay explorable, structurally meaningful, and under the user’s control.',
  },
];

export const featuredSlugs = [
  'nodaysidle-cascade-v3',
  'nodaysidle-vois',
  'synapse-notes',
  'nodaysidle-cistilka',
  'pocket-drafts',
  'nodaysrecording',
];

export const storyChapters = [
  {
    slug: 'identity',
    label: '01',
    title: 'NODAYSIDLE is not a portfolio brand first.',
    body: 'It is a software identity built around practical tools, native applications, voice systems, notes and knowledge products, and controlled AI-assisted execution. The page should read like an operating philosophy with products inside it, not a gallery of random repositories.',
  },
  {
    slug: 'workflow',
    label: '02',
    title: 'Structure comes before improvisation.',
    body: 'The work leans toward deterministic outputs, architectural consistency, contract-driven planning, and toolchains that reduce drift. That is why compiler-like planning systems and disciplined execution workflows matter alongside the applications themselves.',
  },
  {
    slug: 'products',
    label: '03',
    title: 'The products are different, but the worldview is consistent.',
    body: 'Voice input, capture tools, utilities, knowledge systems, browser experiments, and workflow engines all point toward the same preference: local control, practical UX, reduced noise, and software that earns trust through function.',
  },
  {
    slug: 'direction',
    label: '04',
    title: 'This is an ecosystem, not a feed.',
    body: 'Some projects are active flagships. Some stay visible as secondary proof. Others move private when they weaken clarity. The public surface should be curated, sharp, and honest about what the real strengths are now.',
  },
];

export const operatingLanes = [
  {
    title: 'Voice and input',
    key: 'voice-input',
    text: 'Speech, dictation, and low-friction text input systems designed for actual use rather than novelty demos.',
  },
  {
    title: 'Notes and knowledge',
    key: 'notes-knowledge',
    text: 'Capture-first tools that turn raw thought into searchable, structured memory and explorable context.',
  },
  {
    title: 'Native utilities',
    key: 'native-utilities',
    text: 'Small and mid-sized macOS products with clear jobs, clean boundaries, and practical everyday value.',
  },
  {
    title: 'Workflow systems',
    key: 'workflow-systems',
    text: 'Compiler-like planning and agent-facing systems that make execution more deterministic and less chaotic.',
  },
  {
    title: 'Focused browsing',
    key: 'browser-tools',
    text: 'Experiments in calmer, more intentional software surfaces where noise is reduced rather than expanded.',
  },
];

export function getCatalogueEntries(items) {
  return items.filter((item) => item.visibility === 'public');
}

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category && project.visibility === 'public');
}

export function formatChecksum(hash) {
  if (!hash || typeof hash !== 'string') return '—';
  return `${hash.slice(0, 12)}…${hash.slice(-10)}`;
}
