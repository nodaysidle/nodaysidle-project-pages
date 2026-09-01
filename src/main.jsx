import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  featuredSlugs,
  formatChecksum,
  getCatalogueEntries,
  getProject,
  getProjectsByCategory,
  operatingLanes,
  projects,
  storyChapters,
} from './data';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-header__inner">
        <a className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand__mark" aria-hidden="true" />
          <span>NODAYSIDLE</span>
        </a>
        <p className="site-header__descriptor">Software systems, native tools, and structured execution.</p>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="/#story">Story</a></li>
            <li><a href="/#applications">Applications</a></li>
            <li><a href="/#catalogue">Catalogue</a></li>
            <li><a href="https://github.com/nodaysidle" rel="noopener noreferrer">GitHub ↗</a></li>
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
          <p>A curated public surface for software, systems, and products that reflect the actual NODAYSIDLE worldview.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li><a href="/#story">Story</a></li>
            <li><a href="/#applications">Applications</a></li>
            <li><a href="https://github.com/nodaysidle" rel="noopener noreferrer">GitHub ↗</a></li>
          </ul>
        </nav>
        <div className="site-footer__meta">
          <span>Curated public edition</span>
          <span>© {new Date().getFullYear()} NODAYSIDLE</span>
        </div>
      </div>
    </footer>
  );
}

function StoryChapter({ chapter }) {
  return (
    <article className="story-chapter">
      <span className="story-chapter__index">{chapter.label}</span>
      <div>
        <h3>{chapter.title}</h3>
        <p>{chapter.body}</p>
      </div>
    </article>
  );
}

function FlagshipCard({ project, index }) {
  return (
    <article className="flagship-card" aria-labelledby={`flagship-${project.slug}`} style={{ '--project-accent': project.accent }}>
      <div className="flagship-card__top">
        <span className="flagship-card__index">{indexLabel(index)}</span>
        <span className="flagship-card__type">{project.type}</span>
      </div>
      <h3 id={`flagship-${project.slug}`} className="flagship-card__title">
        <a href={`/${project.slug}`}>{project.name}</a>
      </h3>
      <p className="flagship-card__headline">{project.headline}</p>
      <p className="flagship-card__summary">{project.story}</p>
      <dl className="flagship-card__meta">
        <div><dt>Platform</dt><dd>{project.platform}</dd></div>
        <div><dt>Status</dt><dd>{project.status}</dd></div>
        <div><dt>Boundary</dt><dd>{project.dataBoundary}</dd></div>
        <div><dt>Stack</dt><dd>{project.stack.slice(0, 3).join(' · ')}</dd></div>
      </dl>
      <div className="flagship-card__actions">
        <a href={`/${project.slug}`}>Open dossier</a>
        <a href={project.repo} rel="noopener noreferrer">Repository</a>
      </div>
    </article>
  );
}

function LaneBlock({ lane }) {
  const items = getProjectsByCategory(lane.key);
  return (
    <article className="lane-block">
      <header>
        <p className="kicker">{String(items.length).padStart(2, '0')} public</p>
        <h3>{lane.title}</h3>
      </header>
      <p>{lane.text}</p>
      <ul>
        {items.map((item) => (
          <li key={item.slug}><a href={`/${item.slug}`}>{item.name}</a></li>
        ))}
      </ul>
    </article>
  );
}

function CatalogueRow({ project, index }) {
  return (
    <article className="catalogue-row" aria-labelledby={`catalogue-${project.slug}`}>
      <span className="catalogue-row__index">{indexLabel(index)}</span>
      <div className="catalogue-row__main">
        <h3 id={`catalogue-${project.slug}`}><a href={`/${project.slug}`}>{project.name}</a></h3>
        <p>{project.summary}</p>
      </div>
      <div className="catalogue-row__meta">
        <span>{project.platform}</span>
        <span>{project.category.replace('-', ' ')}</span>
        <span>{project.status}</span>
      </div>
    </article>
  );
}

function HomePage() {
  const entries = getCatalogueEntries(projects);
  const featured = featuredSlugs.map((slug) => getProject(slug)).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="home-page">
        <section className="hero-story">
          <div className="page-shell hero-story__grid">
            <div className="hero-story__lead">
              <p className="kicker">Independent developer from Slovenia</p>
              <h1>NODAYSIDLE is a software story told through tools.</h1>
              <p className="hero-story__statement">
                Native applications, local-first utilities, voice systems, knowledge tools, and compiler-like workflow products. Not a generic portfolio. A curated public surface for how the work actually fits together.
              </p>
              <div className="hero-story__actions">
                <a className="button button--primary" href="#applications">Read the applications</a>
                <a className="button button--quiet" href="https://github.com/nodaysidle" rel="noopener noreferrer">Open GitHub</a>
              </div>
            </div>
            <aside className="hero-story__aside" aria-label="NODAYSIDLE profile notes">
              <div className="hero-note">
                <span>Base</span>
                <strong>Slovenia / EU</strong>
              </div>
              <div className="hero-note">
                <span>Focus</span>
                <strong>Native software · AI workflows · practical systems</strong>
              </div>
              <div className="hero-note">
                <span>Method</span>
                <strong>Structured execution over improvisation</strong>
              </div>
              <div className="hero-note">
                <span>Public set</span>
                <strong>{entries.length} curated repositories and applications</strong>
              </div>
            </aside>
          </div>
        </section>

        <section id="story" className="story-section">
          <div className="page-shell">
            <header className="section-intro">
              <p className="kicker">Story</p>
              <h2>What the public page should actually communicate.</h2>
              <p>
                The point is not to list everything. The point is to make the operating logic visible: why these products exist, why some are public, why some are hidden, and how they together define the NODAYSIDLE identity.
              </p>
            </header>
            <div className="story-grid">
              {storyChapters.map((chapter) => <StoryChapter key={chapter.slug} chapter={chapter} />)}
            </div>
          </div>
        </section>

        <section id="applications" className="applications-section">
          <div className="page-shell">
            <header className="section-intro section-intro--tight">
              <p className="kicker">Applications in the story</p>
              <h2>Flagship projects that define the current public surface.</h2>
            </header>
            <div className="flagship-grid">
              {featured.map((project, index) => <FlagshipCard key={project.slug} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="lanes-section">
          <div className="page-shell lanes-section__grid">
            <div className="section-intro section-intro--sticky">
              <p className="kicker">Operating lanes</p>
              <h2>The ecosystem is broad, but not random.</h2>
              <p>These lanes show how the public products cluster without collapsing into a generic portfolio wall.</p>
            </div>
            <div className="lane-stack">
              {operatingLanes.map((lane) => <LaneBlock key={lane.key} lane={lane} />)}
            </div>
          </div>
        </section>

        <section id="catalogue" className="catalogue-section catalogue-section--story">
          <div className="page-shell">
            <header className="section-intro section-intro--tight">
              <p className="kicker">Curated catalogue</p>
              <h2>The public set, after cleanup.</h2>
              <p>Archived, private, redundant, or weaker public-facing projects do not define the front layer anymore. What remains here is the edited showroom.</p>
            </header>
            <div className="catalogue-stack">
              {entries.map((project, index) => <CatalogueRow key={project.slug} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="closing-section" id="source">
          <div className="page-shell closing-section__grid">
            <div>
              <p className="kicker">Source and proof</p>
              <h2>Public narrative here. Technical authority on GitHub.</h2>
            </div>
            <div>
              <p>
                This site frames the story. GitHub keeps the repositories, releases, and code-level proof. Together they show what NODAYSIDLE builds, how it is shaped, and why the public surface is curated the way it is.
              </p>
              <a className="button button--primary" href="https://github.com/nodaysidle" rel="noopener noreferrer">Inspect github.com/nodaysidle</a>
            </div>
          </div>
        </section>
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

  React.useEffect(() => {
    document.title = `${project.name} — NODAYSIDLE`;
  }, [project.name]);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="detail-page detail-page--story">
        <div className="breadcrumb">
          <a href="/">← Back to story</a>
        </div>

        <section className="detail-hero detail-hero--story" style={{ '--project-accent': project.accent }}>
          <div>
            <p className="kicker">{project.type}</p>
            <h1 id="project-title" className="detail-title">{project.name}</h1>
            <p className="detail-tagline">{project.summary}</p>
          </div>
          <div className="detail-hero__storybox">
            <span className={`badge ${maturity.className}`}>{maturity.label}</span>
            <p>{project.story}</p>
          </div>
        </section>

        <dl className="detail-table">
          <div className="detail-item"><dt>Status</dt><dd>{project.status}</dd></div>
          <div className="detail-item"><dt>Platform</dt><dd>{project.platform}</dd></div>
          <div className="detail-item"><dt>Boundary</dt><dd>{project.dataBoundary}</dd></div>
          <div className="detail-item"><dt>Updated</dt><dd>{project.updated}</dd></div>
          <div className="detail-item"><dt>Artifact</dt><dd>{project.artifact}</dd></div>
          {project.checksum && <div className="detail-item"><dt>Checksum</dt><dd>{formatChecksum(project.checksum)}</dd></div>}
        </dl>

        <section className="detail-section">
          <p className="kicker">Why it matters</p>
          <h2>Role in the ecosystem</h2>
          <p className="detail-narrative">{project.story}</p>
        </section>

        <section className="detail-section">
          <p className="kicker">Capabilities</p>
          <h2>What it does</h2>
          <ul className="feature-bullets">
            {project.features.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="detail-section">
          <p className="kicker">Stack</p>
          <h2>Implementation surface</h2>
          <div className="tech-tags">
            {project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
          </div>
        </section>

        <section className="detail-section">
          <p className="kicker">Proof</p>
          <h2>Public evidence</h2>
          <ul className="feature-bullets">
            {project.proof.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <nav className="detail-actions" aria-label="Project actions">
          <a className="detail-action detail-action--current" href={project.repo} rel="noopener noreferrer">Repository</a>
          <a className="detail-action" href={project.release} rel="noopener noreferrer">Release</a>
          {project.download ? <a className="detail-action" href={project.download} rel="noopener noreferrer">Download</a> : <span className="detail-action">Source only</span>}
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
          <p>This path does not match a current public NODAYSIDLE project dossier.</p>
          <a className="button button--primary" href="/">Back to story</a>
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
    if (!slug) document.title = 'NODAYSIDLE — Software story, systems, and applications.';
  }, [slug]);

  if (slug && !project) return <NotFoundPage />;
  if (project) return <ProjectDetailPage project={project} />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
