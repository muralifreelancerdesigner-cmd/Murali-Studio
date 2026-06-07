'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || isMenuOpen);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 backdrop-blur-md transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <a href="#home" className="text-zinc-900 font-bold text-xl tracking-tighter hover:text-teal-700 transition-colors">
          RM<span className="text-teal-600">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {[
            { name: 'Home', link: '#home' },
            { name: 'Services', link: '#services' },
            { name: 'Projects', link: '#projects' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition-colors duration-300 hover:text-teal-700 font-bold"
            >
              {item.name}
            </a>
          ))}

          <a href="#contact" className="bg-teal-700 text-white px-8 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:bg-teal-800 hover:scale-105 transition-all active:scale-95 shadow-xl shadow-teal-700/30">
            Hire Me
          </a>
        </div>

        <button 
          type="button" 
          aria-label="Toggle menu" 
          className="md:hidden text-zinc-900 hover:text-teal-700 transition-all active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-zinc-200 flex flex-col items-center gap-8 py-12 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {['Home', 'Services', 'Projects'].map((name) => (
            <a key={name} href={`#${name.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black hover:text-teal-700 transition-colors">
              {name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-teal-700 text-white px-10 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-lg shadow-teal-700/20">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}