'use client';

import React from 'react';
import { TIMELINE_HISTORY } from '../data/constants';

export default function Timeline() {
  return (
    <section id="timeline" className="w-full max-w-4xl mx-auto py-20 px-6 border-t border-neutral-900">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 uppercase">PROFESSIONAL JOURNEY</h2>
        <p className="text-sm text-neutral-400 mt-2">Over a decade of industry experience in production and engineering.</p>
      </div>

      <div className="relative border-l border-neutral-800 ml-4 md:ml-32 space-y-12">
        {TIMELINE_HISTORY.map((item, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            {/* Timeline node bullet point anchor */}
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-emerald-500 transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors duration-300">
                  {item.role}
                </h3>
                <p className="text-xs text-neutral-400 font-medium mt-0.5">
                  {item.company} — <span className="text-neutral-500 font-mono text-[11px]">{item.location}</span>
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-neutral-500 bg-[#12131a] border border-neutral-800 px-2.5 py-1 rounded md:self-start">
                {item.year}
              </span>
            </div>

            {/* Core responsibilities inner bullet loops */}
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs text-neutral-400 leading-relaxed marker:text-neutral-700">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
