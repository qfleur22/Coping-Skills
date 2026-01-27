import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/Header';
import { ProgressBar } from '@/components/shared/ProgressBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coping Skills',
  description: 'Interactive coping skills flowchart',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <ProgressBar />
      </body>
    </html>
  );
}

