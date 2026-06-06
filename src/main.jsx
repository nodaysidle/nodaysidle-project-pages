import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'batchrenameprov2',
    name: 'BatchRename Pro',
    repoName: 'batchrenameprov2',
    tag: 'Local-first file operations',
    repo: 'https://gitlab.com/NODAYSIDLE/batchrenameprov2',
    release: 'https://gitlab.com/NODAYSIDLE/batchrenameprov2/-/releases/v0.1.0',
    download: 'https://gitlab.com/api/v4/projects/81352534/packages/generic/batchrename-pro/0.1.0/BatchRename-Pro-0.1.0-aarch64.dmg',
    className: 'page-batch',
    eyebrow: 'Tauri 2 · Rust · React 19 · SQLite',
    headline: 'Bulk rename hundreds of files without scripts, cloud, or regret.',
    summary: 'BatchRename Pro is a compact macOS desktop app for regex, template, and sequence-based file renaming. Every apply is previewed, backed up, and undoable through local SQLite job history.',
    proof: ['v0.1.0 release live', '6.9MB macOS DMG', '10/10 Rust tests', 'Strict codesign + DMG verification passed'],
    features: [
      ['Preview before impact', 'Transform names in memory first, detect conflicts, and only write when the output is safe.'],
      ['Undo everything', 'Backup-before-write workflow with searchable job history and full rollback.'],
      ['Power-user transforms', 'Regex, template tokens, zero-padded numbering, and case transforms in one desktop flow.']
    ],
    styleNote: 'Slate-blue glass utility aesthetic: terminal confidence, not SaaS subscription noise.',
    artifact: 'SHA256 5b158f4f8c27004d6db414eda4b90e71302fd447e9080ba003a7b942c9287d44'
  },
  {
    id: 'nodaysidle-whispering',
    name: 'NoDaysIdle Whispering',
    repoName: 'nodaysidle-whispering',
    tag: 'Private macOS dictation',
    repo: 'https://gitlab.com/NODAYSIDLE/nodaysidle-whispering',
    download: '/downloads/NoDaysIdle-Whispering-local.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-whisper',
    eyebrow: 'Tauri 2 · Rust · React · whisper.cpp',
    headline: 'A warm, local dictation desk for words that should stay on your Mac.',
    summary: 'Whispering is a macOS dictation utility built around local Whisper transcription, push-to-talk capture, and a searchable transcript vault. It is designed for private writing, notes, and voice capture without remote AI APIs.',
    proof: ['Packaged 57MB macOS app ZIP', 'ci:verify passed: Vite, audit, Rust tests', 'Signed .app verified locally', '9/10 UI polish pass shipped'],
    features: [
      ['On-device transcription', 'whisper.cpp through Rust/Tauri keeps speech processing local.'],
      ['Transcript vault', 'Keep captured text searchable, pinnable, archivable, and ready to copy.'],
      ['Fast capture posture', 'Push-to-talk and VAD controls turn voice into a focused utility, not a toy recorder.']
    ],
    styleNote: 'Amber studio-meter aesthetic: warm charcoal, gold waveform light, muted rose recording states.',
    artifact: 'ZIP SHA256 0f36b95c44695b805d148c806c77f2dc6cb552e526362af74ef5dac128cbe97c · commit 97c64ade3c6c4a71e5f38eac001a0b058c3bcd52'
  },
  {
    id: 'scribeflowpro',
    name: 'ScribeFlowPro',
    repoName: 'scribeflowpro',
    tag: 'Offline meeting transcription',
    repo: 'https://gitlab.com/nodaysidle1/scribeflowpro',
    release: 'https://gitlab.com/nodaysidle1/scribeflowpro/-/releases/v1.0.0',
    download: '/downloads/ScribeFlowPro-1.0.0.zip',
    downloadLabel: 'Download macOS app ZIP',
    className: 'page-scribe',
    eyebrow: 'SwiftPM · SwiftUI · MLX · Whisper · Qwen',
    headline: 'Record a meeting, transcribe it locally, and leave with the summary.',
    summary: 'ScribeFlowPro is a native macOS app for offline meeting recording, local Whisper transcription, and local Qwen summarization. It ships with a verified MLX runtime path, packaged resources, and an installed-app launch smoke.',
    proof: ['v1.0.0 GitLab release live', '9.2MB macOS app ZIP verified', '5 Swift tests passed', 'Real local Whisper + Qwen smoke passed'],
    features: [
      ['Offline transcription', 'MLX Whisper runs locally so meeting audio stays on the Mac.'],
      ['Local summaries', 'Qwen produces meeting summaries through the bundled production runtime path.'],
      ['Release-grade package', 'Swift build, signed app package, install smoke, GitLab release, and ZIP checksum were verified.']
    ],
    styleNote: 'Midnight transcript studio: dark graphite, Volt recorder glow, crisp meeting-card typography, local-AI confidence.',
    artifact: 'ZIP SHA256 3ab7ee9d56c0bc0acf6377126c9c2578fcabc172d511fed7adb096a4e5b23ac9 · 9,613,161 bytes · source commit dab5d62fb3844b582c6fc25b6eacb8fbc95a06be.'
  },
  {
    id: 'nodaysidian',
    name: 'Nodaysidian',
    repoName: 'nodaysidian',
    tag: 'Native knowledge graph',
    repo: 'https://gitlab.com/NODAYSIDLE/nodaysidian',
    download: 'https://gitlab.com/NODAYSIDLE/nodaysidian/-/archive/main/nodaysidian-main.zip',
    downloadLabel: 'Download source ZIP',
    className: 'page-obsidian',
    eyebrow: 'SwiftUI · Core Data · NaturalLanguage · macOS 15+',
    headline: 'Obsidian-style thinking rebuilt as a native Mac knowledge graph.',
    summary: 'Nodaysidian writes Markdown notes, imports Obsidian vaults, maps wiki-links, discovers semantic connections on-device, and gives notes a visual graph plus whiteboard mode — all without cloud accounts.',
    proof: ['Source ZIP available', 'Native SwiftUI app', 'On-device semantic links', 'Interactive graph + whiteboard'],
    features: [
      ['Vault import', 'Read Markdown, strip front matter, preserve titles, and turn wiki-links into graph edges.'],
      ['Semantic auto-links', 'Apple NaturalLanguage embeddings suggest related notes without remote providers.'],
      ['Graph plus canvas', 'Force-directed graph navigation and Excalidraw-inspired whiteboarding in one native workspace.']
    ],
    styleNote: 'Iridescent obsidian: volcanic glass black with teal-purple edges and copper note highlights.',
    artifact: 'Distribution: source archive download from GitLab main branch.'
  },
  {
    id: 'nodaysnotes',
    name: 'NODAYSNOTES',
    repoName: 'NODAYSNOTES',
    tag: 'Plain-text native notes',
    repo: 'https://gitlab.com/NODAYSIDLE/NODAYSNOTES',
    download: 'https://gitlab.com/NODAYSIDLE/NODAYSNOTES/-/archive/main/NODAYSNOTES-main.zip',
    downloadLabel: 'Download source ZIP',
    className: 'page-notes',
    eyebrow: 'SwiftUI · Swift Package Manager · Markdown files',
    headline: 'Plain Markdown notes with native Mac speed and no vendor lock-in.',
    summary: 'NODAYSNOTES is a local-first macOS notes app for fast capture, daily notes, wiki-style links, tags, search, backlinks, and notebooks — stored as user-controlled .md files on disk.',
    proof: ['v0.1.0 stable tag documented', 'Native SwiftUI interface', 'Markdown files on disk', 'Package script installs to /Applications'],
    features: [
      ['Files you own', 'Notes remain plain Markdown in a chosen local directory.'],
      ['Knowledge basics', 'Wiki-links, backlinks, tags, search, daily notes, and notebooks.'],
      ['Native packaging', 'SwiftPM build and scriptable app packaging with ad-hoc signing.']
    ],
    styleNote: 'Editorial paper desk: warm cream, ink, blue pencil marks, visible notebook grids.',
    artifact: 'Distribution: source archive download from GitLab main branch.'
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
    id: 'sunder',
    name: 'Sunder',
    repoName: 'sunder',
    tag: 'Local AI research graph',
    repo: 'https://gitlab.com/NODAYSIDLE/sunder',
    release: 'https://gitlab.com/NODAYSIDLE/sunder/-/releases/v0.1.0',
    download: 'https://gitlab.com/-/project/80136120/uploads/2f078902423564732d88520e04aeec0a/Sunder_0.1.0_aarch64.dmg',
    downloadLabel: 'Download macOS DMG',
    className: 'page-sunder',
    eyebrow: 'Tauri 2 · Rust · React 19 · SQLite · ONNX',
    headline: 'Split a vault open and map the latent research hiding inside.',
    summary: 'Sunder is a local-first macOS research hub for Markdown notes with a CodeMirror editor, hybrid FTS5 plus semantic search, ONNX-powered note discovery, and a D3 knowledge graph — all on-device, zero cloud.',
    proof: ['v0.1.0 GitLab release live', '30.6MB public macOS DMG verified', 'release:check passed end-to-end', 'Ad-hoc codesign + DMG checksum valid'],
    features: [
      ['Hybrid retrieval', 'SQLite FTS5 and local embeddings combine keyword precision with semantic discovery.'],
      ['Graph-first research', 'D3-force reveals connected notes, clusters, and latent links without sending a vault to cloud AI.'],
      ['Installable Mac release', 'Tauri build, resources, signing, DMG integrity, and launch smoke were all verified.']
    ],
    styleNote: 'Shattered prism aesthetic: crystalline fractures, cyan-magenta split light, severe research-cartography energy.',
    artifact: 'DMG SHA256 c90235e8a1581549c7bb0aa09b1471d4a9c3317a6caed36d1fba65e6345c9478 · 30,645,844 bytes · ad-hoc signed, not notarized.'
  },
  {
    id: 'synapse-notes',
    name: 'Synapse Notes',
    repoName: 'synapse-notes',
    tag: 'Voice-first AI notes',
    repo: 'https://gitlab.com/NODAYSIDLE/synapse-notes',
    download: 'https://gitlab.com/NODAYSIDLE/synapse-notes/-/archive/main/synapse-notes-main.zip',
    downloadLabel: 'Download source ZIP',
    className: 'page-synapse',
    eyebrow: 'React · Capacitor Android · Supabase · Gemini · Imagen · Three.js',
    headline: 'Speak a thought. Watch it become a searchable neural note.',
    summary: 'Synapse Notes records voice, transcribes with Gemini, generates AI images, embeds notes for semantic search, and connects ideas inside a Three.js knowledge graph. It is already running on two of NDI’s phones.',
    proof: ['Android app operational on 2 phones', 'Capacitor Android project present', 'Supabase functions and pgvector migrations present', 'Source ZIP download verified'],
    features: [
      ['Voice capture flow', 'Record thoughts, process audio, and turn speech into structured notes with minimal friction.'],
      ['AI enrichment', 'Gemini transcription, Imagen generation, embeddings, and semantic search work as one pipeline.'],
      ['Knowledge graph', 'Three.js graph view links note keywords, related thoughts, and generated context visually.']
    ],
    styleNote: 'Neural web aesthetic: plum bio-organic gradients, amber synaptic points, dendrite-dot texture.',
    artifact: 'Distribution: GitLab source ZIP. No public APK/DMG release is published yet; local debug APK is not treated as release-grade.'
  },
  {
    id: 'orbit-browser',
    name: 'Orbit Browser',
    repoName: 'orbit-browser',
    tag: 'Native macOS browser',
    repo: 'https://gitlab.com/NODAYSIDLE/orbit-browser',
    download: 'https://gitlab.com/NODAYSIDLE/orbit-browser/-/archive/main/orbit-browser-main.zip',
    downloadLabel: 'Download source ZIP',
    className: 'page-orbit',
    eyebrow: 'Tauri 2 · Rust · Vanilla JS · WKWebView · SQLite',
    headline: 'A minimal native browser: no Electron, no telemetry, full web.',
    summary: 'Orbit Browser is a focused macOS browser with per-tab WKWebViews, local SQLite history/bookmarks/settings, domain blocking, Reader Mode, per-origin zoom, clean-link copying, and keyboard-first chrome.',
    proof: ['Native WKWebView child-webview architecture', 'Local-first SQLite persistence', 'Source ZIP download verified', 'macOS app bundle observed locally'],
    features: [
      ['Native tab engine', 'Tauri child WKWebViews keep browsing native to macOS instead of shipping an Electron runtime.'],
      ['Local browser memory', 'Tabs, history, bookmarks, settings, sessions, zoom, and blocking live locally in SQLite/resources.'],
      ['Operator chrome', 'Reader Mode, clean-link copying, keyboard shortcuts, and minimal dark browser UI are the core posture.']
    ],
    styleNote: 'Deep-field orbit aesthetic: black-space canvas, cyan trajectory rings, nebula violet, sparse star points.',
    artifact: 'Distribution: GitLab source ZIP. No public DMG release/tag yet; local Orbit.app exists but is not a release artifact.'
  }
];

function routeProject() {
  const slug = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  return projects.find((project) => project.id === slug || project.repoName.toLowerCase() === slug.toLowerCase());
}

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <p className="kicker">NODAYSIDLE project pages</p>
        <h1>Nine separate repo presentations. Nine separate visual systems.</h1>
        <p>Each page is a standalone product presentation built from GitLab repo facts, with a project-matched visual system and an explicit download CTA: release artifacts when verified, source ZIPs when not.</p>
      </section>
      <section className="project-grid" aria-label="Project pages">
        {projects.map((project) => (
          <article className={`project-tile ${project.className}`} key={project.id}>
            <a className="tile-main" href={`/${project.id}`}>
              <span>{project.tag}</span>
              <strong>{project.name}</strong>
              <small>{project.styleNote}</small>
            </a>
            <a className="tile-download" href={project.download}>{project.downloadLabel || 'Download build'}</a>
          </article>
        ))}
      </section>
    </main>
  );
}

function ProjectPage({ project }) {
  return (
    <main className={`project-page ${project.className}`}>
      <nav className="topbar">
        <a href="/" className="brand">NODAYSIDLE</a>
        <div>
          <a href={project.repo}>GitLab</a>
          {project.release && <a href={project.release}>Release</a>}
        </div>
      </nav>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="kicker">{project.eyebrow}</p>
          <h1>{project.headline}</h1>
          <p className="summary">{project.summary}</p>
          <div className="actions">
            <a className="primary" href={project.download}>{project.downloadLabel || 'Download build'}</a>
            <a className="secondary" href={project.repo}>View repository</a>
          </div>
        </div>
        <div className="product-object" aria-label={`${project.name} visual identity`}>
          <div className="orb one"></div>
          <div className="orb two"></div>
          <div className="screen-card">
            <span>{project.repoName}</span>
            <strong>{project.name}</strong>
            <small>{project.tag}</small>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Proof points">
        {project.proof.map((item) => <div key={item}>{item}</div>)}
      </section>

      <section className="content-grid">
        <div className="features">
          {project.features.map(([title, body]) => (
            <article key={title}>
              <span className="feature-index">0{project.features.findIndex((f) => f[0] === title) + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <aside className="brief">
          <h2>Presentation direction</h2>
          <p>{project.styleNote}</p>
          <h3>Artifact note</h3>
          <code>{project.artifact}</code>
        </aside>
      </section>
    </main>
  );
}

function App() {
  const project = routeProject();
  return project ? <ProjectPage project={project} /> : <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
