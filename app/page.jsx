import Link from 'next/link';
import { featuredSlugs, getCatalogueEntries, projects } from './data';
import { FeaturedCard, Footprint } from './components/ProjectShowcase';
import CatalogueIndex from './components/CatalogueIndex';
import ConstellationHero from './components/ConstellationHero';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function versionOf(project) {
  const match = /^v[0-9.]+/.exec(project.status);
  return match ? match[0] : project.status;
}

export default function HomePage() {
  const entries = getCatalogueEntries(projects);
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);
  const macOSCount = entries.filter((p) => p.platform === 'macOS').length;
  const androidCount = entries.length - macOSCount;

  return (
    <main id="main-content" className="catalogue-page">
      <section className="catalogue-hero" aria-labelledby="hero-title">
        <ConstellationHero />
        <div className="catalogue-hero__inner page-shell">
          <div className="catalogue-hero__copy">
            <p className="kicker">Independent software workshop</p>
            <h1 id="hero-title">
              NODAYSIDLE <em>release index</em>
            </h1>
            <p className="catalogue-hero__lede">
              {entries.length} verified public projects for macOS and Android.
              Real, local-first where applicable, release-verified tools. One
              clear job per product.
            </p>
            <div className="button-group">
              <a
                className="button button--primary"
                href="https://github.com/nodaysidle"
                rel="noopener noreferrer"
              >
                Inspect the work on GitHub
              </a>
              <a className="button button--quiet" href="#catalogue">
                Browse all {entries.length} projects
              </a>
            </div>
          </div>

          <aside className="release-index" aria-label="All verified releases">
            <div className="release-index__head">
              <span>Releases</span>
              <span>{entries.length}</span>
            </div>
            <ol>
              {entries.map((project, index) => (
                <li key={project.slug}>
                  <Link href={`/${project.slug}`}>
                    <span className="release-index__number">{indexLabel(index)}</span>
                    <span className="release-index__name">{project.name}</span>
                    <span className="release-index__version">{versionOf(project)}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="release-index__foot">
              <span>{macOSCount} macOS</span>
              <span>{androidCount} Android</span>
            </div>
          </aside>
        </div>
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
        </div>
        <CatalogueIndex entries={entries} />
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
  );
}
