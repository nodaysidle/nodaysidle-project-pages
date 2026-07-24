import Link from 'next/link';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function hasScreenshot(project) {
  return Boolean(project.screenshotPath);
}

export function FeaturedCard({ project, index }) {
  return (
    <article className="featured-project" aria-labelledby={`featured-${project.slug}-title`}>
      <header className="featured-project__header">
        <span className="featured-project__index" aria-hidden="true">
          {indexLabel(index)}
        </span>
        <div>
          <p className="featured-project__type">{project.type}</p>
          <h3 id={`featured-${project.slug}-title`} className="featured-project__name">
            <Link href={`/${project.slug}`}>{project.name}</Link>
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

export function ProjectRecord({ project, index }) {
  return (
    <article className="project-record" aria-labelledby={`record-${project.slug}-title`}>
      <span className="project-record__index" aria-hidden="true">
        {indexLabel(index)}
      </span>
      <div className="project-record__body">
        <header>
          <h3 id={`record-${project.slug}-title`} className="project-record__name">
            <Link href={`/${project.slug}`}>{project.name}</Link>
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

export function Footprint({ projects }) {
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
