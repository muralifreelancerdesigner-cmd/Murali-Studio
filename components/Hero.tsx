'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

/**
 * Note: In React 19, 'ref' is a standard prop. 
 * If this component were to receive a ref from a parent, 
 * we no longer need forwardRef.
 */

const stats = [
  { label: 'Years of design', value: '12+' },
  { label: 'Projects shipped', value: '120+' },
  { label: 'Clients worldwide', value: '40+' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered animation for a more premium entry
      gsap.from(".animate-item", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-[120px] pb-24 md:pt-[140px] bg-[#F2F2F2]"
    >
      <div ref={containerRef} className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center gap-10">
        <span className="animate-item inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-6 py-2 text-[10px] uppercase tracking-[0.5em] text-teal-800 backdrop-blur-sm font-black">
          Visual Portfolio
        </span>

        <div className="space-y-6">
          <h1 className="animate-item max-w-5xl text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.85]">
            Murali R<span className="text-teal-600">.</span><br/>
            <span className="text-zinc-400/80">Editor & Designer</span>
          </h1>

          <p className="animate-item max-w-2xl text-zinc-600 text-base md:text-lg leading-relaxed mx-auto font-medium">
            Professional video editor and graphic designer crafting cinematic stories and high-impact visual identities.
          </p>
        </div>

        <div className="animate-item flex flex-col items-center justify-center gap-4 sm:flex-row pt-2">
          <a href="#projects" className="bg-teal-700 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/20">
            Explore work
          </a>
          <a href="#contact" className="border border-zinc-300 text-zinc-900 px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-100 transition-all">
            Book a call
          </a>
        </div>

        <div className="animate-item grid w-full gap-6 sm:grid-cols-3 mt-16">
          {stats.map((item, index) => (
            <div key={index} className="bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-3 font-bold">{item.label}</p>
              <p className="text-4xl md:text-5xl font-black text-teal-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}