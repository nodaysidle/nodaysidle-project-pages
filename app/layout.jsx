import './globals.css';
import './workshop.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import { projects } from './data';

const catalogueSize = projects.length;

const catalogueDescription = `NODAYSIDLE is an independent software workshop shipping a ${catalogueSize}-project release-verified catalogue for macOS and Android. Local-first where applicable, every release links to a public repository, tagged release, artifact, and verified checksum.`;

export const metadata = {
  title: 'NODAYSIDLE — Working software. Verified releases.',
  description: catalogueDescription,
  metadataBase: new URL('https://nodaysidle-project-pages.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'NODAYSIDLE — Working software. Verified releases.',
    description: catalogueDescription,
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
  themeColor: '#080A0D',
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
