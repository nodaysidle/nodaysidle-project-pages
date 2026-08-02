'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

function indexLabel(index) {
  return String(index + 1).padStart(2, '0');
}

function formatMetaLine(project) {
  return [project.platform, ...project.stack.slice(0, 2)].join(' · ');
}

const PLATFORM_FILTERS = ['All', 'macOS', 'Android', 'Cross-platform'];

export default function CatalogueIndex({ entries }) {
  const [platform, setPlatform] = useState('All');

  const filtered = useMemo(() => {
    if (platform === 'All') return entries;
    return entries.filter((p) => p.platform === platform);
  }, [entries, platform]);

  return (
    <nav className="project-index" aria-label="Product catalogue">
      <div className="project-index__filters page-shell">
        <span className="project-index__filters-label">Filter</span>
        <div className="chip-group" role="group" aria-label="Filter by platform">
          {PLATFORM_FILTERS.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`chip${platform === opt ? ' chip--active' : ''}`}
              aria-pressed={platform === opt}
              onClick={() => setPlatform(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <span className="project-index__count">
          {filtered.length} / {entries.length}
        </span>
      </div>

      <div className="project-index__head page-shell">
        <span className="project-index__col project-index__col--num">#</span>
        <span className="project-index__col project-index__col--name">Project</span>
        <span className="project-index__col project-index__col--meta">Stack</span>
        <span className="project-index__col project-index__col--status">Release</span>
      </div>

      {entries.map((project, index) => {
        const visible = platform === 'All' || project.platform === platform;
        return (
          <Link
            href={`/${project.slug}`}
            className="project-row"
            key={project.slug}
            hidden={!visible}
          >
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
        );
      })}
    </nav>
  );
}
