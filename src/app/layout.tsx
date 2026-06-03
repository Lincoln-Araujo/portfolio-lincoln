import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lincoln Araujo | Frontend Engineer specializing in UX & Interface Architecture',
  description:
    'Personal portfolio of Lincoln Araujo, a Frontend Engineer specializing in UX, interface architecture, accessibility, and thoughtful digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}