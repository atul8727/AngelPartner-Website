import './globals.css';
import { site } from '@/data/websiteData';

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  icons: { icon: '/logo/favicon.png' },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    siteName: site.name,
    images: [{ url: '/logo/logo-color.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
};

export const viewport = {
  themeColor: '#1E3A2B',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: site.name,
  url: site.url,
  description: site.description,
  logo: `${site.url}/logo/logo-color.png`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory font-sans text-ink antialiased overflow-x-hidden selection:bg-gold/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
