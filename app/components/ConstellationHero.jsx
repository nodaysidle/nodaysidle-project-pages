'use client';

import { getCatalogueEntries, projects } from '../data';

// Deterministic 19-point layout on a 0–100 viewBox: a golden-angle spiral biased
// toward the right of the hero so the headline copy stays clear. The layout is
// index-based, not content-derived, so it is stable across renders and carries
// no product visuals — every catalogue entry gets a node, nothing more.
const NODE_COUNT = 19;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const NODE_POSITIONS = Array.from({ length: NODE_COUNT }, (_, i) => {
  const t = i / NODE_COUNT;
  const radius = 12 + t * 28;
  const angle = i * GOLDEN_ANGLE;
  return {
    x: Number((66 + Math.cos(angle) * radius).toFixed(2)),
    y: Number((50 + Math.sin(angle) * radius * 0.84).toFixed(2)),
  };
});

// Etched threads: the spiral chain as a single polyline, plus a few long chords
// that close the figure and keep the field connected.
const CHAIN = NODE_POSITIONS.map((p) => `${p.x},${p.y}`).join(' ');

const CHORDS = [
  [18, 0],
  [0, 6],
  [2, 12],
  [4, 15],
  [7, 17],
  [9, 3],
  [11, 16],
  [14, 5],
];

// Silver / Steel only — no graphite nodes (they would disappear on the void).
const NODE_COLORS = ['#D7DCE2', '#8D97A2'];

export default function ConstellationHero() {
  const entries = getCatalogueEntries(projects);

  return (
    <div className="constellation" aria-hidden="true">
      <svg
        className="constellation__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        {/* faint etched threads */}
        <g className="constellation__edges">
          <polyline className="constellation__edge" points={CHAIN} />
          {CHORDS.map(([a, b], i) => {
            const pa = NODE_POSITIONS[a];
            const pb = NODE_POSITIONS[b];
            if (!pa || !pb) return null;
            return (
              <line
                key={i}
                x1={pa.x}
                y1={pa.y}
                x2={pb.x}
                y2={pb.y}
                className="constellation__edge"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            );
          })}
        </g>

        {/* silver / steel nodes */}
        <g className="constellation__nodes">
          {entries.map((p, i) => {
            const pos = NODE_POSITIONS[i % NODE_POSITIONS.length];
            if (!pos) return null;
            const lead = i === 0;
            return (
              <g key={p.slug} transform={`translate(${pos.x} ${pos.y})`}>
                <g
                  className={`constellation__node${lead ? ' constellation__node--lead' : ''}`}
                  style={{
                    '--node-accent': NODE_COLORS[i % NODE_COLORS.length],
                    animationDelay: `${i * 0.45}s`,
                  }}
                >
                  <circle className="constellation__halo" r={lead ? 3.1 : 2.3} />
                  <circle className="constellation__core" r={lead ? 1.25 : 0.9} />
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
