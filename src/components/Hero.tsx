'use client';

import React from 'react';
import { PROFILE_INFO } from '../data/constants';

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-20 px-6 flex flex-col items-center text-center z-10">
      {/* Decorative Status Notification Tag */}
      <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full uppercase mb-6 animate-pulse">
        Available for Remote Visual Ops & Development
      </span>

      {/* Main Professional Identification Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.15] max-w-3xl">
        Crafting Visual Stories. <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
          Building Digital Assets.
        </span>
      </h1>

      {/* Profile Explicit Context Injection */}
      <p className="text-base sm:text-lg text-neutral-400 mt-6 max-w-2xl leading-relaxed">
        I am <strong className="text-neutral-200 font-semibold">{PROFILE_INFO.name}</strong>, a senior <span className="text-emerald-400">{PROFILE_INFO.title}</span> based in {PROFILE_INFO.location}. With over a decade of hands-on experience, I bridge the gap between high-end digital design and multi-platform interactive application loops.
      </p>

      {/* Action Trigger Elements Panel */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs px-8 py-3.5 rounded-lg tracking-widest transition-all uppercase shadow-lg shadow-emerald-500/10"
        >
          Initiate Project Brief
        </a>
        <a
          href="#portfolio"
          className="bg-[#12131a] hover:bg-[#161822] text-neutral-300 font-semibold text-xs px-8 py-3.5 rounded-lg tracking-widest transition-all uppercase border border-neutral-800 hover:border-neutral-700"
        >
          Review Showcases
        </a>
      </div>

      {/* Fast Tech Stack Vector Anchors */}
      <div className="mt-20 w-full border-t border-neutral-900 pt-10">
        <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-4">Core Structural Toolchain</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-neutral-400">
          {PROFILE_INFO.skills.tools.slice(0, 4).map((tool, i) => (
            <span key={i} className="hover:text-neutral-200 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
