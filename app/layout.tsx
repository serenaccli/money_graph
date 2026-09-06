import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './complex.css';
import './pages-fix.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MoneyGraph — Follow the dollar',
  description: 'See where your income really goes and who ultimately gets it.',
  openGraph: {
    title: 'MoneyGraph — Follow the dollar',
    description: 'See where your income really goes and who ultimately gets it.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyGraph — Follow the dollar',
    description: 'See where your income really goes and who ultimately gets it.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
