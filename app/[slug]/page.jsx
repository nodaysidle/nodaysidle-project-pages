import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatChecksum, getProject, projects } from '../data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return { title: 'Not Found — NODAYSIDLE' };
  return {
    title: `${project.name} — NODAYSIDLE`,
    description: project.headline || project.summary,
    openGraph: {
      title: `${project.name} — NODAYSIDLE`,
      description: project.headline || project.summary,
      type: 'website',
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const maturityLabel = {
    shipped: 'Shipped',
    in_development: 'In development',
    fork: 'Fork',
  };

  return (
    <main id="main-content" className="site-shell detail-shell">
      {/* ── Top Nav (Pass 3.5 flat header) ─────────────────────── */}
      <header className="topbar" aria-label="Project navigation">
        <Link className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand-mark" aria-hidden="true" />
          NODAYSIDLE
        </Link>
        <nav>
          <Link href="/#catalogue">Catalogue</Link>
          <a href={project.repo} rel="noopener noreferrer">
            Repository
          </a>
          <a href={project.release} rel="noopener noreferrer">
            Release
          </a>
        </nav>
      </header>

      {/* ── Back link ─────────────────────────────────────────── */}
      <Link className="back-link" href="/">
        ← Back to catalogue
      </Link>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="detail-hero" aria-labelledby="project-title">
        <div className="detail-hero__main">
          <p className="kicker">{project.type}</p>
          <h1 id="project-title">{project.name}</h1>
          <p className="lede">{project.summary}</p>
          <div className="hero-actions">
            <span className={`maturity-badge maturity-badge--${project.maturity || 'shipped'}`}>
              {maturityLabel[project.maturity] || 'Shipped'}
            </span>
            {project.maturity === 'shipped' && project.download ? (
              <a
                className="button primary"
                href={project.download}
                rel="noopener noreferrer"
              >
                Download ↗
              </a>
            ) : project.maturity === 'shipped' ? (
              <span className="button primary" style={{ opacity: 0.6 }}>
                Build from source
              </span>
            ) : null}
            <a
              className="button"
              href={project.repo}
              rel="noopener noreferrer"
            >
              View source ↗
            </a>
          </div>
        </div>

        {/* Release proof sidebar — only when checksum exists */}
        {project.checksum && (
          <aside className="detail-hero__proof">
            <p className="kicker">Release proof</p>
            <h2>{project.name}</h2>
            {project.download === null ? (
              <p className="detail-hero__proof-note">Build from source</p>
            ) : (
              <dl className="release-grid">
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                <div>
                  <dt>Platform</dt>
                  <dd>{project.platform}</dd>
                </div>
                <div>
                  <dt>Artifact</dt>
                  <dd>{project.artifact}</dd>
                </div>
                <div>
                  <dt>Checksum</dt>
                  <dd>{formatChecksum(project.checksum)}</dd>
                </div>
              </dl>
            )}
          </aside>
        )}
      </section>

      {/* ── Detail sections ───────────────────────────────────── */}
      <section className="detail-sections">
        {/* What it does */}
        <article className="detail-card wide">
          <p className="kicker">What it does</p>
          <h2>Capabilities</h2>
          {project.features && project.features.length > 0 ? (
            <ul>
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Features coming soon.</p>
          )}
        </article>

        {/* Stack */}
        <article className="detail-card">
          <p className="kicker">Stack</p>
          <h2>Implementation surface</h2>
          <div className="stack-pills">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        {/* Release trail — only when checksum exists */}
        {project.checksum && (
          <article className="detail-card">
            <p className="kicker">Release trail</p>
            <h2>Verifiable artifact</h2>
            <dl className="release-grid">
              <div>
                <dt>Artifact</dt>
                <dd>{project.artifact}</dd>
              </div>
              <div>
                <dt>Checksum</dt>
                <dd>{formatChecksum(project.checksum)}</dd>
              </div>
            </dl>
          </article>
        )}
      </section>
    </main>
  );
}
