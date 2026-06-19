import React from 'react';
import './globals.css'; // 🌟 CRUCIAL: This links all your Tailwind styles!
import MouseGlow from '@/components/MouseGlow';

export const metadata = {
  title: 'Murali R. | Portfolio',
  description: 'Professional Multimedia Editor & Visual Designer Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#030712] text-gray-100">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
