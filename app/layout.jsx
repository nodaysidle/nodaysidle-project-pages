import './globals.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';

export const metadata = {
  title: 'NODAYSIDLE — A catalogue of finished software',
  description:
    'Independent software atelier. A catalogue of focused, release-ready tools — native where it matters, local-first by default.',
  metadataBase: new URL('https://nodaysidle-project-pages.vercel.app'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'NODAYSIDLE — A catalogue of finished software',
    description:
      'Independent software atelier. A catalogue of focused, release-ready tools — native where it matters, local-first by default.',
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
  themeColor: '#0A0A0F',
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
