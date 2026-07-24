import './globals.css';
import './workshop.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';

export const metadata = {
  title: 'NODAYSIDLE — Working software. Verified releases.',
  description:
    'NODAYSIDLE is an independent software workshop shipping 10 selected public projects for macOS and Android. Local-first where applicable, release-verified, and built for daily use.',
  metadataBase: new URL('https://nodaysidle-project-pages.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'NODAYSIDLE — Working software. Verified releases.',
    description:
      'NODAYSIDLE is an independent software workshop shipping 10 selected public projects for macOS and Android. Local-first where applicable, release-verified, and built for daily use.',
    type: 'website',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport = {
  themeColor: '#0B0D0C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
