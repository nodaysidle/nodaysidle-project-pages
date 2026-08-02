import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return { title: 'Not Found — NODAYSIDLE' };
  const description = project.headline || project.summary;
  return {
    title: `${project.name} — NODAYSIDLE`,
    description,
    openGraph: {
      title: `${project.name} — NODAYSIDLE`,
      description,
      type: 'website',
      ...(project.screenshotPath
        ? { images: [{ url: project.screenshotPath, width: 1440, height: 1000 }] }
        : {}),
    },
  };
}

const maturityConfig = {
  shipped: { label: 'Shipped', className: 'badge--stable' },
  in_development: { label: 'In development', className: 'badge--development' },
  fork: { label: 'Fork', className: 'badge--fork' },
};

function versionOf(project) {
  const match = /^v[0-9.]+/.exec(project.status);
  return match ? match[0] : project.status;
}

function formatBytes(bytes) {
  if (typeof bytes !== 'number' || !Number.isFinite(bytes) || bytes <= 0) return null;
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  const text = value >= 100 ? Math.round(value).toString() : value.toFixed(1);
  return `${text} ${units[unitIndex]}`;
}

function downloadLabel(project) {
  if (!project.artifact || !project.artifact.includes('.')) return 'Download';
  const ext = project.artifact.split('.').pop();
  return ext ? `Download ${ext.toUpperCase()}` : 'Download';
}

function buildCaveats(project) {
  const caveats = [];
  if (project.maturity === 'in_development') {
    caveats.push(
      `Early-stage release — current status "${project.status}". Some documented features may not be fully implemented yet; treat this as a work in progress, not a finished product.`
    );
  }
  if (typeof project.status === 'string' && project.status.toLowerCase().includes('prototype')) {
    caveats.push(
      `Prototype build — "${project.status}". A debug, side-load-only build for testing; not Play-signed or production-hardened.`
    );
  }
  if (typeof project.dataBoundary === 'string') {
    const boundary = project.dataBoundary.toLowerCase();
    if (boundary.includes('gateway')) {
      caveats.push(
        `Gateway-dependent companion — not a standalone app. It requires a running nodaysgent gateway and tunnel (${project.dataBoundary}) to function.`
      );
    } else if (boundary.includes('cloud')) {
      caveats.push(
        `Explicit cloud boundary — ${project.dataBoundary}. Content is processed outside the device; review before use with sensitive data.`
      );
    }
  }
  return caveats;
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const maturity = maturityConfig[project.maturity] ?? maturityConfig.shipped;
  const caveats = buildCaveats(project);
  const byteLabel = formatBytes(project.byteSize);

  return (
    <main id="main-content" className="detail-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">← Catalogue</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{project.name}</span>
      </nav>

      <section className="detail-hero" aria-labelledby="project-title">
        <p className="kicker">{project.type}</p>
        <h1 id="project-title" className="detail-title">
          {project.name}
        </h1>
        <p className="detail-tagline">{project.headline}</p>
        <p className="detail-tagline">{project.summary}</p>
        <div className="detail-maturity-row">
          <span className={`badge ${maturity.className}`}>{maturity.label}</span>
          <span className="badge">{versionOf(project)}</span>
          <span className="kicker">{project.platform}</span>
        </div>
      </section>

      <nav className="detail-actions" aria-label="Project actions">
        {project.download ? (
          <a
            className="detail-action detail-action--current"
            href={project.download}
            rel="noopener noreferrer"
          >
            {downloadLabel(project)}
          </a>
        ) : (
          <span className="detail-action">No direct download</span>
        )}
        <a
          className="detail-action"
          href={project.repo}
          rel="noopener noreferrer"
        >
          Repository
        </a>
        <a
          className="detail-action"
          href={project.release}
          rel="noopener noreferrer"
        >
          Release
        </a>
      </nav>

      {project.screenshotPath && (
        <figure
          className="detail-figure"
          style={{
            width: 'min(calc(100% - (var(--pad) * 2)), var(--page))',
            margin: '0 auto',
            paddingTop: '0.5rem',
          }}
        >
          <img
            src={project.screenshotPath}
            alt={project.screenshotAlt || `${project.name} product screenshot`}
            width={1440}
            height={1000}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: 'auto',
              border: '1px solid var(--line-rule)',
            }}
          />
          <figcaption
            style={{
              marginTop: '0.5rem',
              color: 'var(--ink-dim)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.56rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Verified UI capture
          </figcaption>
        </figure>
      )}

      <dl className="detail-table">
        <div className="detail-item">
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
        <div className="detail-item">
          <dt>Version</dt>
          <dd>{versionOf(project)}</dd>
        </div>
        <div className="detail-item">
          <dt>Maturity</dt>
          <dd>{maturity.label}</dd>
        </div>
        <div className="detail-item">
          <dt>Platform</dt>
          <dd>{project.platform}</dd>
        </div>
        <div className="detail-item">
          <dt>Artifact</dt>
          <dd>{project.artifact}</dd>
        </div>
        <div className="detail-item">
          <dt>Size</dt>
          <dd>
            {byteLabel
              ? `${byteLabel} · ${project.byteSize.toLocaleString('en-US')} bytes`
              : project.byteSize}
          </dd>
        </div>
        <div className="detail-item">
          <dt>Checksum (SHA-256)</dt>
          <dd>{project.checksum || '—'}</dd>
        </div>
        <div className="detail-item">
          <dt>Privacy boundary</dt>
          <dd>{project.dataBoundary}</dd>
        </div>
        <div className="detail-item">
          <dt>Updated</dt>
          <dd>{project.updated}</dd>
        </div>
      </dl>

      {caveats.length > 0 && (
        <section className="detail-section" aria-labelledby="caveats-title">
          <p className="kicker">Honest status</p>
          <h2 id="caveats-title">Read before you rely on it</h2>
          <ul className="detail-caveats">
            {caveats.map((caveat) => (
              <li key={caveat}>{caveat}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="detail-section" aria-labelledby="capabilities-title">
        <p className="kicker">What it does</p>
        <h2 id="capabilities-title">Capabilities</h2>
        {project.features && project.features.length > 0 ? (
          <ul className="feature-bullets">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="detail-empty">Feature list coming soon.</p>
        )}
      </section>

      <section className="detail-section" aria-labelledby="stack-title">
        <p className="kicker">Stack</p>
        <h2 id="stack-title">Implementation surface</h2>
        <div className="tech-tags">
          {project.stack.map((item) => (
            <span className="tech-tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
