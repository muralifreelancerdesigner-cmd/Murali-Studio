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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // கோப்புகளை மெமரி செய்ய useMemo பயன்படுத்தப்படுகிறது (Performance)
  const allItems = useMemo(() => {
    const items: ProjectItem[] = [];
    
    // 01-chettinad: 52 images
    for (let i = 1; i <= 52; i++) {
      items.push({ type: 'image', src: `/project-files/01-chettinad/chettinad-${i}.jpg`, category: 'Chettinad' });
    }
    // 02-adchettinad: 5 videos (4 Vertical, 1 Horizontal)
    for (let i = 1; i <= 5; i++) {
      items.push({ 
        type: 'video', 
        src: `/project-files/02-adchettinad/adchettinad-${i}.mp4`, 
        category: 'Chettinad Ads',
        ratio: i === 5 ? 'aspect-video' : 'aspect-[9/16]' 
      });
    }
    // 03-teakhome: 4 videos (Vertical)
    for (let i = 1; i <= 4; i++) {
      items.push({ type: 'video', src: `/project-files/03-teakhome/teakhome-${i}.mp4`, category: 'Teak Home', ratio: 'aspect-[9/16]' });
    }
    // 04-broadcast: 2 videos (Horizontal)
    for (let i = 1; i <= 2; i++) {
      items.push({ type: 'video', src: `/project-files/04-broadcast/broadcast-${i}.mp4`, category: 'Broadcast', ratio: 'aspect-video' });
    }
    // 05-independent: 18 images
    for (let i = 1; i <= 18; i++) {
      items.push({ type: 'image', src: `/project-files/05-independent/independent-${i}.jpg`, category: 'Independent' });
    }
    return items;
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allItems;
    return allItems.filter(item => item.category === activeCategory);
  }, [activeCategory, allItems]);

  const categories = ['All', 'Chettinad', 'Chettinad Ads', 'Teak Home', 'Broadcast', 'Independent'];

  // கிரிட் லேஅவுட் சிதையாமல் இருக்க கிளாஸ் மேலாண்மை
  const getCardClass = (item: ProjectItem) => {
    const base = "relative break-inside-avoid mb-6 overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200/50 group cursor-pointer hover:shadow-2xl transition-all duration-500";
    
    if (item.ratio === 'aspect-[9/16]') return `${base} aspect-[9/16]`;
    if (item.ratio === 'aspect-video') return `${base} aspect-video`;
    
    return `${base} h-auto`; // Images will take their own height
  };

  return (
    <section id="projects" className="py-32 bg-white text-zinc-900 relative">
      <div className="relative z-10 mx-auto max-w-7xl px-8 flex flex-col items-center text-center">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-teal-700 mb-4 font-bold">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900">
            Selected Work<span className="text-teal-600">.</span>
          </h2>
        </div>

        {/* Category Filter UI */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-teal-700 text-white shadow-xl shadow-teal-700/30 scale-105' 
                  : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Official Channel Link for Teak Home */}
        {activeCategory === 'Teak Home' && (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-2 duration-700 flex justify-center">
            <a 
              href="https://www.youtube.com/@teakhome-teakwoodfurniturestor/shorts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-teal-500/30 hover:bg-white transition-all group shadow-sm"
            >
              <svg className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 group-hover:text-teal-700">View Official YouTube Channel</span>
            </a>
          </div>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Masonry Collage Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className={getCardClass(item)}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.category}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out min-h-[150px] bg-zinc-100"
                />
              ) : (
                <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center min-h-[200px]">
                  <video 
                    src={item.src} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform pointer-events-none">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full View Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-10 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-teal-400 transition-colors z-[110]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img src={selectedItem.src} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" alt="Preview" />
            ) : (
              <video src={selectedItem.src} controls autoPlay className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}