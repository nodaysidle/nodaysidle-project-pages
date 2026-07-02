import './globals.css';

export const metadata = {
  title: 'NODAYSIDLE — Portfolio / Project Showcase',
  description: 'Personal portfolio and verified project showcase for NODAYSIDLE software, agents, workflows, and installable releases.',
  metadataBase: new URL('https://nodaysidle-project-pages.vercel.app'),
  openGraph: {
    title: 'NODAYSIDLE — Portfolio / Project Showcase',
    description: 'Dense portfolio and project showcase for NODAYSIDLE: identity, shipped apps, technical stack, agents, workflows, and contact.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
