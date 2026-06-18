'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-transparent text-[var(--color-text)] py-24 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Bottom Ambient Layer Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between relative z-10">
        <div className="space-y-3">
          <p className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Ready to start your next project?
          </p>
          <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed max-w-md">
            Let's build a memorable, high-end visual system together.
          </p>
        </div>

        {/* Repurposed with global premium styling system tokens */}
        <a 
          href="#contact" 
          className="btn-primary self-start md:self-auto !py-4 !px-8 !text-[10px]"
        >
          Let's connect
        </a>
      </div>

      {/* Decorative Separator Line using custom alpha border variables */}
      <div className="mt-20 border-t border-white/5 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] font-bold relative z-10">
        <p className="transition-colors hover:text-white duration-300">
          © {currentYear} R. Murali. All rights reserved.
        </p>
        
        <nav className="flex flex-wrap items-center gap-8">
          {[
            { name: 'Instagram', url: '#' },
            { name: 'LinkedIn', url: '#' },
            { name: 'Behance', url: '#' }
          ].map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              className="hover:text-[var(--color-accent)] transition-colors duration-300 relative group py-1"
            >
              {social.name}
              {/* Premium kinetic underline effect on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
