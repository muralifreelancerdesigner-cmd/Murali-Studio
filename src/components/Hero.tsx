'use client';

import React from 'react';
import { PROFILE_INFO } from '../data/constants';

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto pt-40 pb-24 px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Structural left design layout block text block */}
      <div className="lg:col-span-8 text-left space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-cyan-400 animate-ping rounded-full" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase bg-cyan-500/5 border border-cyan-500/20 px-3 py-1 rounded">
            System Live // 12+ Yrs Operational Experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
          {PROFILE_INFO?.name || "MURALI R."} <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 bg-clip-text text-transparent glow-text-cyan">
            {PROFILE_INFO?.title?.split('&')[0] || "VISUAL ENGINEER"}
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 font-medium max-w-2xl leading-relaxed">
          Bridging structural application logic with high-end cinematic post-production. Serving specialized digital assets for leading television broadcast systems, lifestyle brands, and healthcare institutions.
        </p>

        {/* Tactical UI Action Button Cluster */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-950 font-mono font-bold text-xs px-8 py-4 rounded-none tracking-widest transition-all uppercase glow-cyan"
          >
            [ Execute Work Review ]
          </a>
          <a
            href="#contact"
            className="bg-gray-900/80 hover:bg-gray-800 text-gray-300 font-mono font-bold text-xs px-8 py-4 rounded-none tracking-widest transition-all uppercase border border-gray-800 hover:border-cyan-500/40"
          >
            Establish Contact
          </a>
        </div>
      </div>

      {/* Structural Right Metric Block Panel */}
      <div className="lg:col-span-4 bg-slate-900/20 backdrop-blur-md border border-gray-900 p-6 rounded-none space-y-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-cyan-400">
        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">// Engine Telemetry</div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
              <span>Motion Graphics & Compositing</span>
              <span className="text-cyan-400">95%</span>
            </div>
            <div className="w-full h-1 bg-gray-900"><div className="w-[95%] h-full bg-cyan-400" /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
              <span>Multi-Platform App Dev</span>
              <span className="text-purple-400">90%</span>
            </div>
            <div className="w-full h-1 bg-gray-900"><div className="w-[90%] h-full bg-purple-500" /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
              <span>3D Model Architecture</span>
              <span className="text-teal-400">85%</span>
            </div>
            <div className="w-full h-1 bg-gray-900"><div className="w-[85%] h-full bg-teal-400" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
