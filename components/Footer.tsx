'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#F2F2F2] text-zinc-900 py-20 px-6 md:px-20 border-t border-zinc-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        <div className="space-y-3">
          <p className="text-2xl font-black tracking-tight text-zinc-900">Ready to start your next project?</p>
          <p className="text-sm text-zinc-600 font-medium">Let's build a memorable visual system together.</p>
        </div>

        <a href="#contact" className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-teal-700 transition-all shadow-lg shadow-black/10">
          Let's connect
        </a>
      </div>

      <div className="mt-16 border-t border-zinc-300 pt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
        <p>© {currentYear} R. Murali. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-8">
          <a href="#" className="hover:text-teal-700 transition-colors">Instagram</a>
          <a href="#" className="hover:text-teal-700 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-teal-700 transition-colors">Behance</a>
        </nav>
      </div>
    </footer>
  );
}