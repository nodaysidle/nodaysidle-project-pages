import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  featuredSlugs,
  formatChecksum,
  getCatalogueEntries,
  getProject,
  projects,
} from './data';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function hasScreenshot(project) {
  return Boolean(project.screenshotPath);
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand__mark" aria-hidden="true" />
          <span>NODAYSIDLE</span>
        </a>
        <p className="site-header__descriptor">Independent software workshop</p>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href="/#catalogue">Catalogue</a>
            </li>
            <li>
              <a href="/#source">Source</a>
            </li>
            <li>
              <a
                href="https://github.com/nodaysidle"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <a className="brand" href="/">
            <span className="brand__mark" aria-hidden="true" />
            <span>NODAYSIDLE</span>
          </a>
          <p>Focused software, built in public and finished for daily use.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li>
              <a href="/#catalogue">Catalogue</a>
            </li>
            <li>
              <a
                href="https://github.com/nodaysidle"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
        <div className="site-footer__meta">
          <span>Edition 02 / 2026</span>
          <span>© {new Date().getFullYear()} NODAYSIDLE</span>
        </div>
      </div>
    </footer>
  );
}

function FeaturedCard({ project, index }) {
  return (
    <article className="featured-project" aria-labelledby={`featured-${project.slug}-title`}>
      <header className="featured-project__header">
        <span className="featured-project__index" aria-hidden="true">
          {indexLabel(index)}
        </span>
        <div>
          <p className="featured-project__type">{project.type}</p>
          <h3 id={`featured-${project.slug}-title`} className="featured-project__name">
            <a href={`/${project.slug}`}>{project.name}</a>
          </h3>
        </div>
      </header>

      <p className="featured-project__job">{project.headline}</p>

      <dl className="featured-project__meta">
        <div>
          <dt>Platform</dt>
          <dd>{project.platform}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{project.stack.slice(0, 3).join(' · ')}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
        <div>
          <dt>Boundary</dt>
          <dd>{project.dataBoundary}</dd>
        </div>
      </dl>

      {hasScreenshot(project) ? (
        <figure className="featured-project__media">
          <img
            src={project.screenshotPath}
            alt={project.screenshotAlt || `${project.name} product screenshot`}
            loading="lazy"
            decoding="async"
            width={1440}
            height={1000}
          />
        </figure>
      ) : (
        <div className="featured-project__proof">
          <p className="featured-project__proof-title">Release proof</p>
          {project.proof.length > 0 ? (
            <ul>
              {project.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Public repository with tagged release.</p>
          )}
        </div>
      )}

      <footer className="featured-project__actions">
        <a href={project.repo} rel="noopener noreferrer">
          Repository
        </a>
        <a href={project.release} rel="noopener noreferrer">
          Release
        </a>
        {project.download && (
          <a href={project.download} rel="noopener noreferrer">
            Download
          </a>
        )}
      </footer>
    </article>
  );
}

function ProjectRecord({ project, index }) {
  return (
    <article className="project-record" aria-labelledby={`record-${project.slug}-title`}>
      <span className="project-record__index" aria-hidden="true">
        {indexLabel(index)}
      </span>
      <div className="project-record__body">
        <header>
          <h3 id={`record-${project.slug}-title`} className="project-record__name">
            <a href={`/${project.slug}`}>{project.name}</a>
          </h3>
          <p className="project-record__type">{project.type}</p>
        </header>
        <p className="project-record__job">{project.headline}</p>
        <dl className="project-record__meta">
          <div>
            <dt>Platform</dt>
            <dd>{project.platform}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.slice(0, 3).join(' · ')}</dd>
          </div>
          <div>
            <dt>Release</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Updated</dt>
            <dd>{project.updated}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function Footprint({ projects }) {
  const macOSCount = projects.filter((p) => p.platform === 'macOS').length;
  const androidCount = projects.filter((p) => p.platform === 'Android').length;
  const productionCount = projects.filter(
    (p) => p.status.includes('live') || /^v[1-9]/.test(p.status),
  ).length;
  const earlyCount = projects.length - productionCount;

  return (
    <dl className="footprint">
      <div>
        <dt>Selected</dt>
        <dd>{projects.length}</dd>
      </div>
      <div>
        <dt>macOS</dt>
        <dd>{macOSCount}</dd>
      </div>
      <div>
        <dt>Android</dt>
        <dd>{androidCount}</dd>
      </div>
      <div>
        <dt>Production-ready</dt>
        <dd>{productionCount}</dd>
      </div>
      <div>
        <dt>Early / experimental</dt>
        <dd>{earlyCount}</dd>
      </div>
    </dl>
  );
}

function HomePage() {
  const entries = getCatalogueEntries(projects);
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="home-page">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero__primary">
            <p className="kicker">Independent software workshop</p>
            <h1 id="hero-title">NODAYSIDLE</h1>
            <p className="home-hero__statement">
              10 selected public projects for macOS and Android. Real, local-first where applicable,
              release-verified tools. One clear job per product.
            </p>
            <div className="home-hero__cta">
              <a
                className="button button--primary"
                href="https://github.com/nodaysidle"
                rel="noopener noreferrer"
              >
                Inspect the work on GitHub
              </a>
              <a className="button button--quiet" href="#featured">
                Browse {entries.length} selected projects
              </a>
            </div>
          </div>
          <aside className="home-hero__secondary" aria-label="Selected release index">
            <ol className="home-hero__index">
              {entries.map((project, index) => (
                <li key={project.slug}>
                  <a href={`/${project.slug}`}>
                    <span className="home-hero__index-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="home-hero__index-name">{project.name}</span>
                    <span className="home-hero__index-status">{project.status}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section id="featured" className="featured-section" aria-labelledby="featured-title">
          <div className="page-shell">
            <header className="featured-section__header">
              <p className="kicker">Featured</p>
              <h2 id="featured-title">Four releases in focus</h2>
            </header>
            <div className="featured-grid">
              {featured.map((project, index) => (
                <FeaturedCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="catalogue" className="catalogue-section" aria-labelledby="catalogue-title">
          <div className="page-shell">
            <header className="catalogue-section__header">
              <p className="kicker">Complete index</p>
              <h2 id="catalogue-title">All {entries.length} projects</h2>
            </header>
            <div className="project-records">
              {entries.map((project, index) => (
                <ProjectRecord key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="page-shell">
            <header className="principles-section__header">
              <p className="kicker">Operating principles</p>
              <h2 id="principles-title">How these tools are built</h2>
            </header>
            <ul className="principles-list">
              <li>
                <strong>Local-first where applicable.</strong> Data stays on the device unless
                the tool explicitly crosses a cloud boundary.
              </li>
              <li>
                <strong>Verification before claims.</strong> Every release links to a public
                repository, tag, and artifact.
              </li>
              <li>
                <strong>Cross-platform execution.</strong> macOS utilities and Android apps
                share the same finish standard.
              </li>
              <li>
                <strong>Finished tools over demos.</strong> No motivational filler; every
                project ships or is actively released.
              </li>
            </ul>
          </div>
        </section>

        <section className="footprint-section" aria-labelledby="footprint-title">
          <div className="page-shell">
            <header className="footprint-section__header">
              <p className="kicker">Technical footprint</p>
              <h2 id="footprint-title">Selected by the data</h2>
            </header>
            <Footprint projects={entries} />
          </div>
        </section>

        <section className="github-cta" id="source" aria-labelledby="github-cta-title">
          <div className="page-shell">
            <h2 id="github-cta-title">Inspect the source</h2>
            <p>
              Each project is developed in public. Read the code, verify the release tags,
              and download the artifacts from GitHub.
            </p>
            <a
              className="button button--primary"
              href="https://github.com/nodaysidle"
              rel="noopener noreferrer"
            >
              Open github.com/nodaysidle
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const maturityConfig = {
  shipped: { label: 'Shipped', className: 'badge--stable' },
  in_development: { label: 'In development', className: 'badge--development' },
  fork: { label: 'Fork', className: 'badge--fork' },
};

function ProjectDetailPage({ project }) {
  const maturity = maturityConfig[project.maturity] ?? maturityConfig.shipped;

  React.useEffect(() => {
    document.title = `${project.name} — NODAYSIDLE`;
  }, [project.name]);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="detail-page">
        <div className="breadcrumb">
          <a href="/">← Catalogue</a>
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
            <dt>Data boundary</dt>
            <dd>{project.dataBoundary}</dd>
          </div>
          {project.checksum && (
            <div className="detail-item">
              <dt>Checksum</dt>
              <dd>{formatChecksum(project.checksum)}</dd>
            </div>
          )}
        </dl>

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

        {project.proof.length > 0 && (
          <section className="detail-section" aria-labelledby="proof-title">
            <p className="kicker">Release proof</p>
            <h2 id="proof-title">Verified</h2>
            <ul className="feature-bullets">
              {project.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

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
      <SiteFooter />
    </>
  );
}

function NotFoundPage() {
  React.useEffect(() => {
    document.title = 'Not Found — NODAYSIDLE';
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found-page">
        <div className="page-shell">
          <h1>Page not found</h1>
          <p>
            That path does not match a known project. Return to the catalogue to browse
            all releases.
          </p>
          <a className="button button--primary" href="/">
            Back to catalogue
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function App() {
  const slug = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const project = slug ? getProject(slug) : null;

  React.useEffect(() => {
    if (!slug) document.title = 'NODAYSIDLE — Working software. Verified releases.';
  }, [slug]);

  if (slug && !project) {
    return <NotFoundPage />;
  }

  if (project) {
    return <ProjectDetailPage project={project} />;
  }

  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
