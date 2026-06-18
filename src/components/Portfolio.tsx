'use client';

import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolio';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const getGoogleDriveId = (url: string) => {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//);
    return match ? match[1] : null;
  };

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="portfolio" className="w-full max-w-6xl mx-auto py-24 px-6 border-t border-neutral-900/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">
            Asset Showcases
          </span>
          <h2 className="text-3xl font-black text-white mt-4 uppercase tracking-tight">Production Indexes</h2>
        </div>
        
        <div className="flex bg-[#0b0c10] border border-neutral-800 p-1 rounded-lg self-start font-mono text-xs">
          {(['all', 'image', 'video'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-md font-bold uppercase transition-all ${
                filter === type ? 'bg-neutral-800 text-emerald-400' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {type === 'all' ? 'All Assets' : type === 'image' ? 'Designs' : 'Motion'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const driveId = getGoogleDriveId(item.src);
          return (
            <div key={item.id} className="group bg-[#0b0c10]/30 border border-neutral-900 rounded-none overflow-hidden flex flex-col justify-between hover:border-neutral-800 transition-colors">
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                {driveId ? (
                  item.type === 'image' ? (
                    <img
                      src={`https://google.com{driveId}&sz=s1200`}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <iframe
                      src={`https://google.com{driveId}/preview`}
                      className="w-full h-full border-0 absolute top-0 left-0 pointer-events-auto"
                      allowFullScreen
                      title={item.title}
                    />
                  )
                ) : (
                  <div className="text-neutral-600 text-xs font-mono">Stream Unreadable</div>
                )}
              </div>

              <div className="p-4 border-t border-neutral-900/60 flex items-center justify-between bg-[#08090d]/60">
                <div>
                  <h3 className="text-xs font-bold text-neutral-200 tracking-wide truncate max-w-[160px]">{item.title}</h3>
                  <p className="text-[10px] font-medium text-neutral-500 mt-0.5">{item.category}</p>
                </div>
                <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded uppercase">
                  {item.type}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
