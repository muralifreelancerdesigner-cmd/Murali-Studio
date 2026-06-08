'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

type ProjectItem = {
  type: 'image' | 'video';
  src: string;
  category: string;
  ratio?: string;
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const allItems = useMemo(() => {
    const items: ProjectItem[] = [];
    
    for (let i = 1; i <= 52; i++) {
      items.push({ type: 'image', src: `/project-files/01-chettinad/chettinad-${i}.jpg`, category: 'Chettinad' });
    }
    for (let i = 1; i <= 5; i++) {
      items.push({ 
        type: 'video', 
        src: `/project-files/02-adchettinad/adchettinad-${i}.mp4`, 
        category: 'Chettinad Ads',
        ratio: i === 5 ? 'aspect-video' : 'aspect-[9/16]' 
      });
    }
    for (let i = 1; i <= 4; i++) {
      items.push({ type: 'video', src: `/project-files/03-teakhome/teakhome-${i}.mp4`, category: 'Teak Home', ratio: 'aspect-[9/16]' });
    }
    for (let i = 1; i <= 2; i++) {
      items.push({ type: 'video', src: `/project-files/04-broadcast/broadcast-${i}.mp4`, category: 'Broadcast', ratio: 'aspect-video' });
    }
    for (let i = 1; i <= 18; i++) {
      items.push({ type: 'image', src: `/project-files/05-independent/independent-${i}.jpg`, category: 'Independent' });
    }
    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allItems;
    return allItems.filter(item => item.category === activeCategory);
  }, [activeCategory, allItems]);

  const categories = ['All', 'Chettinad', 'Chettinad Ads', 'Teak Home', 'Broadcast', 'Independent'];

  return (
    <section id="projects" className="py-32 bg-white text-zinc-900 relative">
      <div className="relative z-10 mx-auto max-w-7xl px-8 flex flex-col items-center text-center">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-teal-700 mb-4 font-bold">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900">
            Selected Work<span className="text-teal-600">.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat ? 'bg-teal-700 text-white shadow-xl shadow-teal-700/30 scale-105' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={`${item.src}-${idx}`} 
              className={`relative break-inside-avoid mb-6 overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200/50 group cursor-pointer hover:shadow-2xl transition-all duration-500 ${item.ratio || 'h-auto'}`}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'image' ? (
                <Image src={item.src} alt={item.category} width={800} height={1200} className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              ) : (
                <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    preload="metadata" 
                    muted 
                    playsInline 
                    loop 
                    autoPlay
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 backdrop-blur-md" onClick={() => setSelectedItem(null)}>
          <button className="absolute top-8 right-8 text-white z-[110]"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img src={selectedItem.src} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" alt="Preview" />
            ) : (
              <video controls autoPlay className="max-w-full max-h-[85vh] rounded-lg shadow-2xl">
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}