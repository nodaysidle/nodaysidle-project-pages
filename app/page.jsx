import Link from 'next/link';
import { formatChecksum, projects, stack, workflows } from './data';

const macProjects = projects.filter((project) => project.platform === 'macOS').length;
const androidProjects = projects.filter((project) => project.platform === 'Android').length;

const metrics = [
  [String(projects.length), 'selected releases'],
  [String(macProjects), 'macOS project artifacts'],
  [String(androidProjects), 'Android build'],
  ['0', 'cloud-first dependencies in shipped Mac apps'],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  const featured = projects[0];

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Site navigation">
        <Link className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand-mark">NDI</span>
          <span>NODAYSIDLE</span>
        </Link>
        <nav>
          <a href="#identity">Identity</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#agents">Agents</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="experience-hero" aria-labelledby="hero-title">
        <div className="hero-left" id="identity">
          <p className="eyebrow">Personal portfolio / project showcase</p>
          <h1 id="hero-title">Alan Pfeifer builds local-first software under NODAYSIDLE.</h1>
          <p className="lede">
            A dense operating portfolio: native Mac utilities, local AI workflows, Android experiments,
            agent control surfaces, and release-grade project pages with real artifacts behind the links.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button primary" href="https://github.com/nodaysidle" rel="noopener noreferrer">GitHub <Arrow /></a>
            <a className="button" href="mailto:nodaysidle@proton.me">Contact</a>
          </div>
          <div className="metric-grid" aria-label="Portfolio metrics">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-right" aria-label="Featured project dossier">
          <p className="eyebrow">Featured dossier</p>
          <h2>{featured.name}</h2>
          <p>{featured.headline}</p>
          <dl className="release-spec">
            <div><dt>Status</dt><dd>{featured.status}</dd></div>
            <div><dt>Platform</dt><dd>{featured.platform}</dd></div>
            <div><dt>Artifact</dt><dd>{featured.artifact}</dd></div>
            <div><dt>SHA256</dt><dd>{formatChecksum(featured.checksum)}</dd></div>
          </dl>
          <Link className="inline-link" href={`/${featured.slug}`}>Open project dossier <Arrow /></Link>
        </aside>
      </section>

      <section className="section-head" id="projects">
        <p className="eyebrow">Selected projects</p>
        <h2>Shipped work, release proof, and project pages.</h2>
      </section>

      <section className="project-grid" aria-label="Selected NODAYSIDLE projects">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug} style={{ '--accent': project.accent }}>
            <div className="card-topline">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{project.platform}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="project-type">{project.type}</p>
            <p>{project.summary}</p>
            <ul>
              {project.proof.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="card-links">
              <Link href={`/${project.slug}`}>Dossier</Link>
              <a href={project.repo} rel="noopener noreferrer">Repo</a>
              <a href={project.release} rel="noopener noreferrer">Release</a>
            </div>
          </article>
        ))}
      </section>

      <section className="split-section" id="stack">
        <div>
          <p className="eyebrow">Technical stack</p>
          <h2>Pragmatic local-first engineering, not one framework cosplay.</h2>
          <p>
            NODAYSIDLE uses the stack each product deserves: native SwiftUI when the Mac surface matters,
            Tauri/Rust when a web UI needs native reach, SQLite when state must remain local, and Next.js/Vercel
            for fast public project surfaces.
          </p>
        </div>
        <div className="stack-cloud" aria-label="Technologies used">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-head" id="agents">
        <p className="eyebrow">Active agents / workflows</p>
        <h2>Operator-led agent workflow with named specialists and proof gates.</h2>
      </section>

      <section className="workflow-grid" aria-label="Active agents and workflows">
        {workflows.map((workflow) => (
          <article key={workflow.name}>
            <span>{workflow.route}</span>
            <h3>{workflow.name}</h3>
            <p>{workflow.detail}</p>
          </article>
        ))}
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Bring a concrete project, messy workflow, or local-first app idea.</h2>
          <p>
            Best fit: macOS utilities, local AI tools, agent control systems, installable prototypes,
            and product pages that need proof instead of vague marketing.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:nodaysidle@proton.me">Email NODAYSIDLE</a>
          <a className="button" href="https://github.com/nodaysidle" rel="noopener noreferrer">github.com/nodaysidle</a>
        </div>
      </section>
    </main>
  );
}
