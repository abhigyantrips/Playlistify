import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
