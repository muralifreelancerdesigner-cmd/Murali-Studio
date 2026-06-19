'use client';

import React from 'react';

// Static profile definition directly accessible by the rendering layer
const HERO_DATA = {
  name: "MURALI R.",
  title: "Editor & Visual Designer",
  location: "Chennai, India"
};

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-20 px-6 flex flex-col items-center text-center z-10">
      <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full uppercase mb-6 inline-block animate-pulse">
        Available for Remote Visual Ops & Development
      </span>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.15] max-w-3xl block uppercase">
        {HERO_DATA.name}
      </h1>
      
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-300 tracking-tight mt-2 block">
        {HERO_DATA.title}
      </h2>

      <p className="text-base sm:text-lg text-neutral-400 mt-6 max-w-2xl leading-relaxed block">
        Crafting high-impact cinematic stories and tailored brand identities for ambitious global systems. Based in {HERO_DATA.location} with over 12+ years of industry experience.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#portfolio"
          className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs px-8 py-3.5 rounded-full tracking-widest transition-all uppercase shadow-lg shadow-emerald-500/10"
        >
          Explore Work
        </a>
        <a
          href="#contact"
          className="bg-[#12131a] hover:bg-[#161822] text-neutral-300 font-semibold text-xs px-8 py-3.5 rounded-full tracking-widest transition-all uppercase border border-neutral-800 hover:border-neutral-700"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
