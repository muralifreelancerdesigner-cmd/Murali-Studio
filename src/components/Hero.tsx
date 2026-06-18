'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: "40%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });
      gsap.from(".stat-box", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-background)] px-6 pt-32 pb-20">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[var(--color-accent-soft)] blur-[160px] pointer-events-none opacity-40 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[140px] pointer-events-none opacity-30" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex-1 flex flex-col justify-center items-center">
        <div className="overflow-hidden">
          <span className="reveal-text inline-block px-4 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Creative Portfolio
          </span>
        </div>

        {/* Clean Fixed Typography Stack */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-[1.05] overflow-hidden max-w-4xl">
          <span className="reveal-text block">
            MURALI R<span className="text-[var(--color-accent)]">.</span>
          </span>
          <span className="reveal-text block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 font-medium text-3xl md:text-5xl mt-4 tracking-normal">
            Editor & Visual Designer
          </span>
        </h1>

        <p className="reveal-text max-w-2xl mx-auto text-[var(--color-muted)] text-sm md:text-base font-normal leading-relaxed tracking-wide">
          Crafting high-impact cinematic stories and tailored brand identities for ambitious global systems.
        </p>

        {/* Unified Button Row Architecture */}
        <div className="reveal-text flex flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <a href="#projects" className="btn-primary !text-[11px] !px-8 !py-3.5 min-w-[160px]">
            Explore Work
          </a>
          <a href="#contact" className="btn-secondary !text-[11px] !px-8 !py-3.5 min-w-[160px]">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Re-engineered Metric Grid */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          { metric: "12+", title: "Years of Design" },
          { metric: "120+", title: "Projects Shipped" },
          { metric: "40+", title: "Clients Worldwide" }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="stat-box glass-card !bg-[var(--color-surface)]/40 border border-white/5 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[var(--color-accent)]/30 group"
          >
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
              {item.metric}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)] font-bold mt-3 block">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}