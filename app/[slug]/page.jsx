import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatChecksum, getProject, projects } from '../data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — NODAYSIDLE`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — NODAYSIDLE`,
      description: project.summary,
      type: 'website',
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="site-shell detail-shell" style={{ '--accent': project.accent }}>
      <header className="topbar" aria-label="Project navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">NDI</span>
          <span>NODAYSIDLE</span>
        </Link>
        <nav>
          <Link href="/#projects">Projects</Link>
          <a href={project.repo} rel="noopener noreferrer">Repository</a>
          <a href={project.release} rel="noopener noreferrer">Release</a>
        </nav>
      </header>

      <section className="detail-hero-card" aria-labelledby="project-title">
        <div>
          <Link className="back-link" href="/">← Back to portfolio</Link>
          <p className="eyebrow">{project.type}</p>
          <h1 id="project-title">{project.name}</h1>
          <p className="lede">{project.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={project.download} rel="noopener noreferrer">Download artifact ↗</a>
            <a className="button" href={project.repo} rel="noopener noreferrer">Source repository</a>
          </div>
        </div>
        <aside className="artifact-card">
          <p className="eyebrow">Release proof</p>
          <dl className="release-spec big">
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Platform</dt><dd>{project.platform}</dd></div>
            <div><dt>Artifact</dt><dd>{project.artifact}</dd></div>
            <div><dt>Checksum</dt><dd>{formatChecksum(project.checksum)}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="detail-grid">
        <article>
          <p className="eyebrow">Why it matters</p>
          <h2>{project.headline}</h2>
          <ul>
            {project.proof.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article>
          <p className="eyebrow">Stack</p>
          <h2>Implementation surface</h2>
          <div className="stack-cloud compact">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </article>
        <article className="wide">
          <p className="eyebrow">Integrity note</p>
          <h2>Real project, real artifact trail.</h2>
          <p>
            This page links to the public repository, release page, and downloadable artifact. The short checksum
            shown here is included to keep the portfolio grounded in release evidence instead of thumbnail-only claims.
          </p>
        </article>
      </section>
    </main>
  );
}
