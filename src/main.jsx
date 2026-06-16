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

function productClass(project) {
  return `product-accent accent-${project.id}`;
}

function Home() {
  const counts = projects.reduce((acc, project) => {
    const meta = parseArtifact(project);
    acc[meta.platform] = (acc[meta.platform] || 0) + 1;
    return acc;
  }, {});

  return (
    <main className="catalog-shell">
      <nav className="catalog-nav" aria-label="Catalog navigation">
        <a href="/" className="brand-mark" aria-label="NODAYSIDLE product catalog home">
          <span className="brand-sigil">NDI</span>
          <span>NODAYSIDLE</span>
        </a>
        <a href="#products" className="nav-pill">Products</a>
      </nav>

      <section className="catalog-hero" aria-labelledby="catalog-title">
        <div>
          <p className="kicker">Verified software catalog</p>
          <h1 id="catalog-title">NODAYSIDLE apps, releases, and source artifacts.</h1>
          <p className="hero-lede">A sharp product index for NODAYSIDLE utilities: what each app does, where it runs, and which artifact is actually available. No moodboards. No fake release claims.</p>
        </div>
        <dl className="catalog-stats" aria-label="Catalog summary">
          <div><dt>Products</dt><dd>{projects.length}</dd></div>
          <div><dt>macOS</dt><dd>{counts.macOS || 0}</dd></div>
          <div><dt>Android</dt><dd>{counts.Android || 0}</dd></div>
          <div><dt>Source</dt><dd>{counts.Source || 0}</dd></div>
        </dl>
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
        {projects.map((project) => {
          const meta = parseArtifact(project);
          return (
            <article className={`product-card ${productClass(project)}`} key={project.id}>
              <a className="product-card-main" href={`/${project.id}`} aria-label={`Open ${project.name} product page`}>
                <div className="product-icon" aria-hidden="true">{project.name.split(/\s|-/).map((word) => word[0]).join('').slice(0, 3)}</div>
                <div className="product-copy">
                  <p>{project.repoName}</p>
                  <h2>{project.name}</h2>
                  <span>{project.tag}</span>
                </div>
              </a>
              <dl className="card-meta">
                <div><dt>Platform</dt><dd>{meta.platform}</dd></div>
                <div><dt>Artifact</dt><dd>{meta.type} · {meta.version}</dd></div>
                <div><dt>Size</dt><dd>{meta.size}</dd></div>
                <div className={meta.canDownload ? 'status-ok' : 'status-bad'}><dt>Status</dt><dd>{meta.releaseState}</dd></div>
              </dl>
              {meta.checksum && <p className="checksum"><span>SHA256</span>{meta.checksum.slice(0, 12)}…{meta.checksum.slice(-8)}</p>}
              {project.linkIssue && <p className="link-issue">{project.linkIssue}</p>}
              <div className="card-actions">
                {meta.canDownload ? (
                  <a className="primary small" href={project.download}>Download {meta.type}</a>
                ) : (
                  <span className="primary small disabled" aria-disabled="true">Download unavailable</span>
                )}
                <a className="secondary small" href={`/${project.id}`}>Details</a>
              </div>
            </article>
          );
        })}
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
          <span className="brand-sigil">NDI</span>
          <span>NODAYSIDLE</span>
        </a>
        <div className="nav-links">
          <a href="/">Catalog</a>
          <a href={project.repo}>Repository</a>
          {project.release && meta.canDownload && <a href={project.release}>Release</a>}
        </div>
      </nav>

      <section className="detail-hero" aria-labelledby="product-title">
        <div className="device-card" aria-label={`${project.name} product summary`}>
          <div className="device-topline"><span></span><span></span><span></span></div>
          <div className="device-body">
            <p>{project.repoName}</p>
            <strong>{project.name}</strong>
            <span>{meta.platform} · {meta.type} · {meta.version}</span>
          </div>
          <div className="device-footer">
            <span>{meta.releaseState}</span>
            <span>{meta.size}</span>
          </div>
        </div>

        <div className="detail-copy">
          <p className="kicker">{project.eyebrow}</p>
          <h1 id="product-title">{project.name}</h1>
          <p className="summary">{project.summary}</p>
          <div className="detail-badges" aria-label="Product metadata">
            <span>{project.tag}</span>
            <span>{meta.platform}</span>
            <span>{meta.type}</span>
            <span className={meta.canDownload ? 'status-ok' : 'status-bad'}>{meta.releaseState}</span>
          </div>
          <div className="actions">
            {meta.canDownload ? (
              <a className="primary" href={project.download}>Download {meta.type}</a>
            ) : (
              <span className="primary disabled" aria-disabled="true">Download unavailable</span>
            )}
            <a className="secondary" href={project.repo}>View repository</a>
            {project.release && meta.canDownload && <a className="secondary" href={project.release}>Release page</a>}
          </div>
          {project.linkIssue && <p className="release-warning">{project.linkIssue}</p>}
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
          <dl>
            <div><dt>Type</dt><dd>{meta.type}</dd></div>
            <div><dt>Platform</dt><dd>{meta.platform}</dd></div>
            <div><dt>Version</dt><dd>{meta.version}</dd></div>
            <div><dt>Size</dt><dd>{meta.size}</dd></div>
            <div><dt>Status</dt><dd>{meta.releaseState}</dd></div>
            {meta.checksum && <div className="hash-row"><dt>SHA256</dt><dd>{meta.checksum}</dd></div>}
          </dl>
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
