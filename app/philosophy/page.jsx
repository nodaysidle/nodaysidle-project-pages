import Link from 'next/link';

export const metadata = {
  title: 'Philosophy — NODAYSIDLE',
  description:
    'How NODAYSIDLE thinks about building software: narrow by design, local where possible, release as the proof.',
};

const principles = [
  {
    num: '01',
    title: 'Narrow by design',
    body: 'One workflow, one clear promise, no platform-sized feature creep. A good tool does one thing exceptionally well. We resist the gravity of feature lists and keep each product honest about what it is.',
  },
  {
    num: '02',
    title: 'Local where possible',
    body: 'Fewer dependencies, less telemetry, control kept close to the user. Your data stays on your device. Cloud features are opt-in enhancements, not lock-in mechanisms. When something can run on your Mac, it should.',
  },
  {
    num: '03',
    title: 'Release is the proof',
    body: 'Public source, installable artifacts, a clean path from idea to shipped tool. The NODAYSIDLE bar is not "it compiles" — it is "you can download it and use it today." No demos. No roadmaps. Just working software.',
  },
];

export default function PhilosophyPage() {
  return (
    <main id="main-content" className="philosophy-page">
      <div className="breadcrumb">
        <Link href="/">← Catalogue</Link>
      </div>

      <section className="philo-hero" aria-labelledby="philo-title">
        <div className="page-shell">
          <p className="kicker">Studio standard</p>
          <h1 id="philo-title" className="philo-title">
            Built like it has to survive daily use.
          </h1>
          <p className="philo-lede">
            Not a demo collection. A working catalogue of opinionated software
            with release proof attached. These are the three commitments behind
            every NODAYSIDLE tool.
          </p>
        </div>
      </section>

      <section className="principles" aria-label="Principles">
        <div className="page-shell">
          {principles.map((p) => (
            <article className="principle-panel" key={p.num}>
              <span className="principle-number" aria-hidden="true">
                {p.num}
              </span>
              <div>
                <h2 className="principle-heading">{p.title}</h2>
                <p className="principle-body">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-strip" aria-labelledby="philo-cta-title">
        <div className="page-shell cta-strip__inner">
          <p className="cta-strip__label">Open for exacting work</p>
          <div>
            <h2 id="philo-cta-title">
              Bring the workflow that should already exist as software.
            </h2>
            <p>
              NODAYSIDLE can turn it into a focused product surface with clear
              architecture, useful constraints, and a release path from day one.
            </p>
            <div className="button-group">
              <a
                className="button button--primary"
                href="mailto:nodaysidle@proton.me"
              >
                Start a conversation
              </a>
              <Link className="button button--quiet" href="/">
                Back to the catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
