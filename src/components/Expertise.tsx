'use client';

import React from 'react';
import { PROFILE_INFO } from '@/data/constants';


export default function Expertise() {
  return (
    <section id="expertise" className="w-full max-w-6xl mx-auto py-24 px-6 border-t border-neutral-900/60">
      <div className="mb-16">
        <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">
          Capabilities Matrix
        </span>
        <h2 className="text-3xl font-black text-white mt-4 uppercase tracking-tight">Technical Core</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Design */}
        <div className="bg-[#0b0c10]/40 border border-neutral-900 p-8 hover:border-emerald-500/30 transition-all duration-300 relative group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="text-2xl mb-4">🎨</div>
          <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-wide">Visual Graphics</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400 font-medium">
            {PROFILE_INFO.skills.design.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full" /> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Video */}
        <div className="bg-[#0b0c10]/40 border border-neutral-900 p-8 hover:border-teal-400/30 transition-all duration-300 relative group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="text-2xl mb-4">🎬</div>
          <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-wide">Motion & Post</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400 font-medium">
            {PROFILE_INFO.skills.video.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full" /> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Toolchain */}
        <div className="bg-[#0b0c10]/40 border border-neutral-900 p-8 hover:border-blue-500/30 transition-all duration-300 relative group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="text-2xl mb-4">⚙️</div>
          <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-wide">Systems Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {PROFILE_INFO.skills.tools.map((tool, idx) => (
              <span key={idx} className="text-[11px] font-mono font-semibold text-neutral-300 bg-neutral-900/60 border border-neutral-800 px-2.5 py-1 rounded">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
