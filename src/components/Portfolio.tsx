'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioItems } from '../data/portfolio';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  // Helper function to pull unique alphanumeric IDs out of Google Drive URLs
  const getGoogleDriveId = (url: string) => {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//);
    return match ? match[1] : null;
  };

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-100 uppercase">SELECTED WORK</h2>
          <p className="text-sm text-neutral-400 mt-2">A comprehensive collection of multimedia design and motion productions.</p>
        </div>
        
        {/* Interactive Filtering Tabs */}
        <div className="flex bg-[#0d0e12] border border-neutral-800 p-1 rounded-lg self-start">
          {(['all', 'image', 'video'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all ${
                filter === type
                  ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {type === 'all' ? 'All Pieces' : type === 'image' ? 'Designs' : 'Motion'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout Canvas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const driveId = getGoogleDriveId(item.src);

          return (
            <div key={item.id} className="group bg-[#0d0e12] border border-neutral-900 rounded-xl overflow-hidden flex flex-col justify-between">
              <div className="relative w-full aspect-video bg-neutral-950 flex items-center justify-center overflow-hidden">
                {item.type === 'image' && driveId ? (
                  /* High fidelity optimized thumbnail parsing logic */
                  <Image
                    src={`https://google.com{driveId}&sz=s1200`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized={true} // Bypasses NextJS content-length requirements for external CDN assets
                  />
                ) : item.type === 'video' && driveId ? (
                  /* Video preview stream frame layer */
                  <iframe
                    src={`https://google.com{driveId}/preview`}
                    className="w-full h-full border-0 absolute top-0 left-0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  />
                ) : (
                  <div className="text-neutral-600 text-xs font-mono">Asset Source Unreadable</div>
                )}
              </div>

              {/* Information Strip info metadata footer bar */}
              <div className="p-4 border-t border-neutral-950 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-neutral-200 tracking-wide truncate max-w-[180px]">{item.title}</h3>
                  <p className="text-[10px] font-medium text-neutral-500 mt-0.5">{item.category}</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider font-bold text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 uppercase">
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
