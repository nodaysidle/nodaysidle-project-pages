import Link from 'next/link';
import { getCatalogueEntries, projects } from './data';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function formatMetaLine(project) {
  return [project.platform, ...project.stack.slice(0, 2)].join(' · ');
}

export default function HomePage() {
  const entries = getCatalogueEntries(projects);

  const total = entries.length;
  const allStacks = new Set(entries.flatMap((p) => p.stack));
  const langCount = allStacks.size;
  const featureCount = entries.reduce(
    (sum, p) => sum + (p.features?.length ?? 0),
    0,
  );

  return (
    <main id="main-content" className="catalogue-page">
      <section className="catalogue-hero" aria-labelledby="hero-title">
        <div className="page-shell catalogue-hero__inner">
          <div className="catalogue-hero__copy">
            <p className="kicker">Independent software atelier / Edition 02</p>
            <h1 id="hero-title">
              A catalogue of <em>finished</em> software.
            </h1>
            <p className="catalogue-hero__lede">
              NODAYSIDLE builds focused, native tools — each with one clear job,
              a public repository, and a release you can install today. No demos.
              No roadmaps. Just working software.
            </p>
            <p className="catalogue-hero__meta">
              {total} entries · {langCount} technologies · {featureCount} shipped features
            </p>
            <div className="button-group">
              <a className="button button--primary" href="#catalogue">
                Browse the catalogue
              </a>
              <a className="button button--quiet" href="#philosophy">
                Read the philosophy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="catalogue"
        className="section-strip"
        aria-labelledby="catalogue-title"
      >
        <div className="page-shell section-strip__inner">
          <p className="kicker">
            Catalogue / {String(total).padStart(2, '0')} entries
          </p>
          <div>
            <h2 id="catalogue-title">Small software. Serious finish.</h2>
            <p>
              Each entry has one clear job, a public repository, and a product
              surface designed to respect the machine it runs on. {langCount}{' '}
              distinct technologies across {featureCount} shipped features.
            </p>
          </div>
        </div>
      </section>

      <nav className="project-index" aria-label="Product catalogue">
        <div className="project-index__head page-shell">
          <span className="project-index__col project-index__col--num">#</span>
          <span className="project-index__col project-index__col--name">Project</span>
          <span className="project-index__col project-index__col--meta">Stack</span>
          <span className="project-index__col project-index__col--status">Release</span>
        </div>
        {entries.map((project, index) => (
          <Link href={`/${project.slug}`} className="project-row" key={project.slug}>
            <span className="project-row__num">{indexLabel(index)}</span>
            <div className="project-row__primary">
              <span className="project-row__name">{project.name}</span>
              <p className="project-row__purpose">
                {project.headline || project.summary}
              </p>
            </div>
            <span className="project-row__meta">{formatMetaLine(project)}</span>
            <span className="project-row__status">{project.status}</span>
          </Link>
        ))}
      </nav>

      <section
        className="philosophy-strip"
        id="philosophy"
        aria-labelledby="philosophy-title"
      >
        <div className="page-shell philosophy-strip__inner">
          <div>
            <p className="kicker">Studio standard</p>
            <h2 id="philosophy-title">
              Built like it has to survive daily use.
            </h2>
            <p className="philosophy-strip__intro">
              Not a demo collection. A working catalogue of opinionated software
              with release proof attached.
            </p>
          </div>
          <ol className="philosophy-list">
            <li>
              <span className="philosophy-list__num">01</span>
              <div>
                <h3>Narrow by design</h3>
                <p>
                  One workflow, one clear promise, no platform-sized feature creep.
                </p>
              </div>
            </li>
            <li>
              <span className="philosophy-list__num">02</span>
              <div>
                <h3>Local where possible</h3>
                <p>
                  Fewer dependencies, less telemetry, control kept close to the
                  user.
                </p>
              </div>
            </li>
            <li>
              <span className="philosophy-list__num">03</span>
              <div>
                <h3>Release is the proof</h3>
                <p>
                  Public source, installable artifacts, clean path from idea to
                  shipped tool.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-strip" id="contact" aria-labelledby="cta-title">
        <div className="page-shell cta-strip__inner">
          <p className="cta-strip__label">Open for exacting work</p>
          <div>
            <h2 id="cta-title">
              Bring the workflow that should already exist as software.
            </h2>
            <p>
              NODAYSIDLE can turn it into a focused product surface with clear
              architecture, useful constraints, and a release path from day one.
            </p>
            <div className="button-group">
              <a className="button button--primary" href="mailto:nodaysidle@proton.me">
                Start a conversation
              </a>
              <a
                className="button button--quiet"
                href="https://github.com/nodaysidle"
                rel="noopener noreferrer"
              >
                Inspect the work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
