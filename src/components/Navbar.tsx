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
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-[var(--bg-darken)]/90 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <a href="#home" className="text-white font-black text-xl tracking-tighter hover:text-[var(--accent-neon)] transition-colors">
          RM<span className="text-[var(--accent-neon)]">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {[
            { name: 'Home', link: '#home' },
            { name: 'Services', link: '#services' },
            { name: 'Projects', link: '#projects' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] transition-colors duration-300 hover:text-white font-bold"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-6 !py-2.5 !text-[11px] !tracking-[0.22em]">
            Hire Me
          </a>
        </div>
        <button 
          type="button" 
          aria-label="Toggle menu" 
          className="md:hidden text-white hover:text-[var(--accent-neon)] transition-all active:scale-90"
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
      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--surface-premium)]/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center gap-8 py-12 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {['Home', 'Services', 'Projects'].map((name) => (
            <a key={name} href={`#${name.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] font-black hover:text-white transition-colors">
              {name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary !px-6 !py-2.5 !text-[11px] !tracking-[0.22em]">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}