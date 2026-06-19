import React from 'react';
import MouseGlow from '../components/MouseGlow';

// 🌟 Ensure this exact line is at the very top!
import './globals.css'; 

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
      <body className="antialiased bg-[#030712] text-gray-100 min-h-screen relative overflow-x-hidden">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
