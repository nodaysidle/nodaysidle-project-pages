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

const maturityConfig = {
  shipped: { label: 'Shipped', className: 'badge--stable' },
  in_development: { label: 'In development', className: 'badge--development' },
  fork: { label: 'Fork', className: 'badge--fork' },
};

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const maturity = maturityConfig[project.maturity] ?? maturityConfig.shipped;

  return (
    <main id="main-content" className="detail-page">
      <div className="breadcrumb">
        <Link href="/">← Catalogue</Link>
      </div>

      <section className="detail-hero" aria-labelledby="project-title">
        <p className="kicker">{project.type}</p>
        <h1 id="project-title" className="detail-title">
          {project.name}
        </h1>
        <p className="detail-tagline">{project.summary}</p>
        <div className="detail-maturity-row">
          <span className={`badge ${maturity.className}`}>{maturity.label}</span>
          <span className="kicker">{project.platform}</span>
        </div>
      </section>

      {project.checksum && (
        <dl className="detail-table">
          <div className="detail-item">
            <dt>Status</dt>
            <dd>{project.status}</dd>
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
            <dt>Checksum</dt>
            <dd>{formatChecksum(project.checksum)}</dd>
          </div>
        </dl>
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

      <nav className="detail-actions" aria-label="Project actions">
        {project.download ? (
          <a
            className="detail-action detail-action--current"
            href={project.download}
            rel="noopener noreferrer"
          >
            Download
          </a>
        ) : (
          <span className="detail-action">Source only</span>
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
          Release page
        </a>
      </nav>
    </main>
  );
}
