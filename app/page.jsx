import Link from 'next/link';
import {
  formatChecksum,
  getCatalogueEntries,
  getFeaturedProject,
  projects,
} from './data';

function Arrow() {
  return <span aria-hidden="true"> ↗</span>;
}

export default function HomePage() {
  const entries = getCatalogueEntries(projects);
  const featured = getFeaturedProject(projects);

  const total = entries.length;
  const macCount = entries.filter((p) => p.platform === 'macOS').length;
  const androidCount = entries.filter((p) => p.platform === 'Android').length;
  const allStacks = new Set(entries.flatMap((p) => p.stack));
  const langCount = allStacks.size;

  return (
    <main id="main-content" className="site-shell">
      {/* ── 0. Top Nav ────────────────────────────────────────── */}
      <header className="topbar" aria-label="Site navigation">
        <Link className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand-mark" aria-hidden="true" />
          NODAYSIDLE
        </Link>
        <nav>
          <a href="#catalogue">Catalogue</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/nodaysidle"
            rel="noopener noreferrer"
          >
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      {/* ── 1. Catalogue Hero ─────────────────────────────────── */}
      <section className="catalogue-hero" aria-labelledby="hero-title">
        <div className="hero-left">
          <p className="kicker">Independent software atelier / Edition 02</p>
          <h1 id="hero-title">A catalogue of finished software.</h1>
          <p className="lede">
            NODAYSIDLE builds focused, native tools — each with one clear job, a
            public repository, and a release you can install today. No demos. No
            roadmaps. Just working software.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#catalogue">
              Browse the catalogue
            </a>
            <a
              className="button"
              href="https://github.com/nodaysidle"
              rel="noopener noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>

        <aside className="hero-right" aria-label="Studio output">
          <div className="studio-card">
            <p className="kicker">Studio output</p>
            <h2>{total} releases</h2>
            <p>
              {macCount} macOS apps · {androidCount} Android builds · {langCount} languages
            </p>
          </div>
        </aside>
      </section>

      {/* ── 2. Studio Heading Strip ───────────────────────────── */}
      <section className="studio-heading" id="catalogue">
        <p className="kicker">
          Studio output / {total} release{total !== 1 ? 's' : ''}
        </p>
        <h2>Small software. Serious finish.</h2>
        <p>
          {macCount} macOS app{macCount !== 1 ? 's' : ''},{' '}
          {androidCount} Android build{androidCount !== 1 ? 's' : ''},{' '}
          {langCount} language{langCount !== 1 ? 's' : ''} across{' '}
          {total} shipped project{total !== 1 ? 's' : ''}.
        </p>
      </section>

      {/* ── 3. Full Product Catalogue ─────────────────────────── */}
      <nav className="catalogue" aria-label="Product catalogue">
        {entries.map((project, i) => (
            <Link
              href={`/${project.slug}`}
              className="catalogue-row"
              key={project.slug}
            >
              <span className="catalogue-row__num">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <div className="catalogue-row__primary">
                <span className="catalogue-row__name">{project.name}</span>
                <span className="catalogue-row__type">{project.type}</span>
                <p className="catalogue-row__summary">{project.summary}</p>
              </div>
              <span className="catalogue-row__meta">
                {project.platform} · {project.status}
              </span>
            </Link>
          ))}
      </nav>

      {/* ── 4. Featured Deep-Dive ─────────────────────────────── */}
      <section className="featured-panel" aria-labelledby="featured-title">
        <div className="featured-info">
          <p className="kicker">Featured project</p>
          <h2 id="featured-title">{featured.name}</h2>
          <p className="lede">{featured.headline}</p>
          <p className="lede">{featured.summary}</p>
          <dl className="featured-proof">
            <div>
              <dt>Artifact</dt>
              <dd>{featured.artifact}</dd>
            </div>
            <div>
              <dt>Checksum</dt>
              <dd>{formatChecksum(featured.checksum)}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{featured.platform}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{featured.status}</dd>
            </div>
          </dl>
          <div className="featured-actions">
            {featured.download && (
              <a
                className="button primary"
                href={featured.download}
                rel="noopener noreferrer"
              >
                Download <Arrow />
              </a>
            )}
            <a
              className="button"
              href={featured.repo}
              rel="noopener noreferrer"
            >
              Repository <Arrow />
            </a>
          </div>
        </div>

      </section>

      {/* ── 5. Philosophy Strip ───────────────────────────────── */}
      <section className="philosophy-strip" id="philosophy">
        <p className="kicker">Studio standard</p>
        <h2>Built like it has to survive daily use.</h2>
        <ol className="philosophy-list">
          <li>
            <div>
              <strong>Narrow by design</strong>
              <p>
                One workflow, one clear promise, no platform-sized feature creep.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Local where possible</strong>
              <p>
                Fewer dependencies, less telemetry, control kept close to the user.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Release is the proof</strong>
              <p>
                Public source, installable artifacts, clean path from idea to
                shipped tool.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ── 6. Contact CTA ────────────────────────────────────── */}
      <section className="contact-cta" id="contact">
        <div>
          <p className="kicker">Open for exacting work</p>
          <h2>Bring the workflow that should already exist as software.</h2>
          <p>
            If you have a focused product surface in mind — a macOS utility, a
            local AI tool, a privacy-first app — NODAYSIDLE can turn it from
            idea into an installable release with a clean repository and
            verifiable artifact trail.
          </p>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="mailto:nodaysidle@proton.me">
            Start a conversation <Arrow />
          </a>
          <a
            className="button"
            href="https://github.com/nodaysidle"
            rel="noopener noreferrer"
          >
            Inspect the work <Arrow />
          </a>
        </div>
      </section>

      {/* ── 7. Footer ─────────────────────────────────────────── */}
      <footer className="site-footer">
        NODAYSIDLE / macOS-quality software / nodaysidle@proton.me
      </footer>
    </main>
  );
}
