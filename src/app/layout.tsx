import LocalSchema from '@/components/LocalSchema';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[var(--color-background)]">
        <LocalSchema /> {/* <-- Embedded invisibly for global search index crawling engines */}
        {children}
      </body>
    </html>
  );
}
