'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="NODAYSIDLE home">
          <span className="brand__mark" aria-hidden="true" />
          <span>NODAYSIDLE</span>
        </Link>
        <p className="site-header__descriptor">Independent software workshop</p>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href="/#catalogue" aria-current={pathname === '/' ? 'page' : undefined}>
                Catalogue
              </a>
            </li>
            <li>
              <a
                href="/philosophy"
                aria-current={pathname?.startsWith('/philosophy') ? 'page' : undefined}
              >
                Philosophy
              </a>
            </li>
            <li>
              <a href="/#source">Contact</a>
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

export function SiteFooter() {
  const pathname = usePathname();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <Link className="brand" href="/">
            <span className="brand__mark" aria-hidden="true" />
            <span>NODAYSIDLE</span>
          </Link>
          <p>Focused software, built in public and finished for daily use.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li>
              <a href="/#catalogue" aria-current={pathname === '/' ? 'page' : undefined}>
                Catalogue
              </a>
            </li>
            <li>
              <a
                href="/philosophy"
                aria-current={pathname?.startsWith('/philosophy') ? 'page' : undefined}
              >
                Philosophy
              </a>
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
