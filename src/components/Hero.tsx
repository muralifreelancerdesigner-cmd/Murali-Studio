'use client';

import React from 'react';

const HERO_DATA = {
  name: "MURALI R.",
  title: "Editor & Visual Designer",
  location: "Chennai, India"
};

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-20 px-6 flex flex-col items-center text-center z-10">
      {/* Dynamic Status Tag */}
      <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full uppercase mb-6 inline-block animate-pulse">
        Available for Remote Visual Ops & Development
      </span>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.15] max-w-3xl block uppercase">
        {HERO_DATA.name}
      </h1>
      
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight mt-2 block uppercase">
        {HERO_DATA.title}
      </h2>

      <p className="text-base sm:text-lg text-neutral-400 mt-6 max-w-2xl leading-relaxed block">
        Crafting high-impact cinematic stories and tailored brand identities for ambitious global systems. Based in {HERO_DATA.location} with over 12+ years of industry experience.
      </p>

      {/* Action Trigger Elements Panel */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#portfolio"
          className="bg-cyan-400 hover:bg-cyan-500 text-neutral-950 font-mono font-bold text-xs px-8 py-3.5 rounded-none tracking-widest transition-all uppercase shadow-lg shadow-cyan-500/10"
        >
          [ Explore Work ]
        </a>
        <a
          href="#contact"
          className="bg-[#12131a] hover:bg-[#161822] text-neutral-300 font-mono font-semibold text-xs px-8 py-3.5 rounded-none tracking-widest transition-all uppercase border border-neutral-800 hover:border-cyan-500/40"
        >
          Get In Touch
        </a>
      </div>

      {/* 🌐 NEW ELEMENT: Premium Dummy Social Media Verification Matrix */}
      <div className="mt-16 w-full max-w-xl border border-neutral-900 bg-neutral-950/40 p-4 rounded-none text-left font-mono">
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">// Verified Communication Nodes</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Dummy LinkedIn Card */}
          <div className="p-3 bg-neutral-900/40 border border-neutral-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
            <div>
              <span className="text-[11px] font-bold text-neutral-200">LN // ://linkedin.com</span>
              <p className="text-[9px] text-neutral-500 mt-0.5">Professional Network Portfolio</p>
            </div>
            <span className="text-[8px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/20 uppercase tracking-widest">OFFLINE</span>
          </div>

          {/* Dummy X / Instagram Card */}
          <div className="p-3 bg-neutral-900/40 border border-neutral-800 flex items-center justify-between group hover:border-purple-500/40 transition-colors">
            <div>
              <span className="text-[11px] font-bold text-neutral-200">X_IG // @muralistudio</span>
              <p className="text-[9px] text-neutral-500 mt-0.5">Motion Graphics & Design Feed</p>
            </div>
            <span className="text-[8px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20 uppercase tracking-widest">OFFLINE</span>
          </div>

        </div>
      </div>
    </section>
  );
}
