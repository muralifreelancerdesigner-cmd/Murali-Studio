import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Murali R | Premium Portfolio',
  description: 'Creative Editor & Visual Designer Portfolio Showcase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnecting Google Fonts for optimal performance optimization */}
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased selection:bg-[var(--color-accent-soft)] selection:text-[var(--color-accent)] bg-[var(--color-background)]">
        {children}
      </body>
    </html>
  );
}
