'use client';
import { useState } from 'react';
import Image from 'next/image';
import PortfolioModal from './PortfolioModal';

const categories = ["All", "Video Editing", "VFX", "Graphic Design"];

const portfolioItems = [
  { id: "dQw4w9WgXcQ", src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070", type: "video", category: "Video Editing" },
  { id: "1", src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071", type: "image", category: "Graphic Design" },
  { id: "2", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", type: "image", category: "VFX" },
  { id: "y6120QOlsfU", src: "https://images.unsplash.com/photo-1492691523569-44352756130c?q=80&w=2070", type: "video", category: "Video Editing" },
  { id: "3", src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1976", type: "image", category: "Graphic Design" },
  { id: "4", src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1964", type: "image", category: "VFX" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);


  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--bg-darken)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 border ${
                filter === cat 
                  ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_30px_rgba(157,78,221,0.3)]" 
                  : "border-white/10 text-slate-400 hover:border-purple-500/50 hover:text-white bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={`${item.src}-${idx}`} 
              className="relative break-inside-avoid overflow-hidden rounded-[24px] border border-white/5 bg-[var(--surface-premium)] group cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(10,5,24,0.8)]"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden">
                {/* Gradient Overlay reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darken)] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                
                {/* Media rendering */}
                {item.type === 'image' ? (
                  <Image 
                    src={item.src} 
                    alt={item.category} 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Video block with an elegant glass play icon overlay */
                  <div className="relative w-full aspect-video bg-slate-950">
                    <img 
                      src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} 
                      alt={item.category}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform scale-100 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-8 h-8 text-purple-400 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Info Badge on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold mb-2">{item.category}</p>
                <h3 className="text-white font-bold text-xl leading-tight">View Media Project</h3>
              </div>
            </div>
          ))}
        </div>

        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}