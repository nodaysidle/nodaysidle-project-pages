import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  featuredSlugs,
  formatChecksum,
  getFeaturedProjects,
  getProject,
} from './data';

function SiteHeader({ activeSlug }) {
  const navItems = getFeaturedProjects();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-header__inner">
        <a className="brand" href="/#top" aria-label="NODAYSIDLE home">
          NODAYSIDLE
        </a>
        <nav aria-label="Products">
          <ul className="nav-links">
            {navItems.map((project) => (
              <li key={project.slug}>
                <a
                  href={`/#${project.slug}`}
                  className={activeSlug === project.slug ? 'is-active' : undefined}
                >
                  {project.navLabel}
                </a>
              </li>
            ))}
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
        <a className="brand" href="/#top">NODAYSIDLE</a>
        <a href="https://github.com/nodaysidle" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </footer>
  );
}

function ProductChapter({ project, index }) {
  return (
    <section
      id={project.slug}
      className="product-chapter"
      aria-labelledby={`chapter-${project.slug}`}
      style={{ '--chapter-delay': `${index * 40}ms` }}
    >
      <div className="product-chapter__inner">
        <p className="product-chapter__kicker">{project.kicker}</p>
        <h2 id={`chapter-${project.slug}`} className="product-chapter__headline">
          {project.headline}
        </h2>
        <p className="product-chapter__body">{project.loop}</p>
        <div className="product-chapter__cta">
          <a
            className={index % 2 === 0 ? 'cta cta--solid' : 'cta cta--ghost'}
            href={project.ctaHref}
            rel="noopener noreferrer"
          >
            {project.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const chapters = getFeaturedProjects();

  React.useEffect(() => {
    document.title = 'NODAYSIDLE';
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="home-page">
        <section id="top" className="brand-chapter" aria-label="NODAYSIDLE">
          <h1 className="brand-chapter__wordmark">NODAYSIDLE</h1>
          <p className="brand-chapter__hint">Scroll</p>
        </section>

        {chapters.map((project, index) => (
          <ProductChapter key={project.slug} project={project} index={index} />
        ))}
      </main>
      <SiteFooter />
    </>
  );
}

const maturityConfig = {
  shipped: { label: 'Public release', className: 'badge--stable' },
};

function ProjectDetailPage({ project }) {
  const maturity = maturityConfig[project.maturity] ?? maturityConfig.shipped;
  const isFeatured = featuredSlugs.includes(project.slug);

  React.useEffect(() => {
    document.title = `${project.name} — NODAYSIDLE`;
  }, [project.name]);

  if (!isFeatured) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SiteHeader activeSlug={project.slug} />
      <main id="main-content" className="detail-page">
        <div className="breadcrumb">
          <a href="/">← Back</a>
        </div>

        <section className="detail-hero" style={{ '--project-accent': project.accent }}>
          <p className="product-chapter__kicker">{project.kicker ?? project.type}</p>
          <h1 id="project-title" className="detail-title">{project.name}</h1>
          <p className="detail-tagline">{project.headline}</p>
          <p className="detail-loop">{project.loop ?? project.summary}</p>
          <div className="detail-cta-row">
            {project.ctaHref ? (
              <a className="cta cta--solid" href={project.ctaHref} rel="noopener noreferrer">
                {project.ctaLabel ?? 'Open'}
              </a>
            ) : null}
            <a className="cta cta--ghost" href={project.repo} rel="noopener noreferrer">
              Repository
            </a>
          </div>
          <span className={`badge ${maturity.className}`}>{maturity.label}</span>
        </section>

        <dl className="detail-table">
          <div className="detail-item"><dt>Status</dt><dd>{project.status}</dd></div>
          <div className="detail-item"><dt>Platform</dt><dd>{project.platform}</dd></div>
          <div className="detail-item"><dt>Artifact</dt><dd>{project.artifact}</dd></div>
          <div className="detail-item"><dt>Updated</dt><dd>{project.updated}</dd></div>
          {project.checksum ? (
            <div className="detail-item"><dt>Checksum</dt><dd>{formatChecksum(project.checksum)}</dd></div>
          ) : null}
        </dl>

        <section className="detail-section">
          <h2>What it does</h2>
          <ul className="feature-bullets">
            {project.features.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Stack</h2>
          <div className="tech-tags">
            {project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
          </div>
        </section>

        <nav className="detail-actions" aria-label="Project actions">
          <a className="detail-action" href={project.repo} rel="noopener noreferrer">Repository</a>
          {project.download ? (
            <a className="detail-action detail-action--current" href={project.download} rel="noopener noreferrer">
              Download
            </a>
          ) : (
            <span className="detail-action">Source only</span>
          )}
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
        <h1>Not found</h1>
        <p>This path is not part of the public NODAYSIDLE surface.</p>
        <a className="cta cta--solid" href="/">Home</a>
      </main>
      <SiteFooter />
    </>
  );
}

function App() {
  const slug = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const project = slug ? getProject(slug) : null;

  if (slug && !project) return <NotFoundPage />;
  if (project) return <ProjectDetailPage project={project} />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
