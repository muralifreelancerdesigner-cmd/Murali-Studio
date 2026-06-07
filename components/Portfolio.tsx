'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { projectsData } from './constants';

// Collage Span Logic: இது கட்டங்களின் அளவை தீர்மானிக்கும் (Bento Layout)
const getGridSpan = (title: string, index: number): string => {
  const t = title.toLowerCase();
  
  // Landscape items (Wide)
  const isLandscape = (t.startsWith('broadcast') || 
                      t === 'chettinad video 5' ||
                      ['chettinad 1', 'chettinad 17', 'independent 17'].includes(t));

  // Portrait items (Tall)
  const isPortrait = (t.startsWith('teakhome') || 
                     (t.startsWith('chettinad video') && t !== 'chettinad video 5') ||
                     ['chettinad 2', 'chettinad 6', 'independent 2'].includes(t)) 
                     && !isLandscape;

  // Bento Collage Logic: Staggered featured items
  if ([0, 5, 12, 19, 28, 35, 44, 51].includes(index)) return "md:col-span-2 md:row-span-2";
  
  // நீளமான கட்டங்கள்
  if (isLandscape) return "md:col-span-2 row-span-1";
  
  // உயரமான கட்டங்கள்
  if (isPortrait) return "col-span-1 md:row-span-2";

  return "col-span-1 row-span-1";
};

// Aspect Ratio Helper to prevent black bars inside frames
const getRatioClass = (title: string, type: string) => {
    const t = title.toLowerCase();
    
    // 16:9 for Landscape items
    if (t.startsWith('broadcast') || t === 'chettinad video 5' || ['chettinad 1', 'chettinad 17', 'independent 17'].includes(t)) {
        return 'aspect-video';
    }
    
    // 9:16 for Portrait items
    if (t.startsWith('teakhome') || t.startsWith('chettinad video') || ['chettinad 2', 'chettinad 6'].includes(t)) {
        return 'aspect-[9/16]';
    }
        
    if (t.includes('independent 2')) return 'aspect-[4/5]';
    return 'aspect-square';
}

// Helper to map titles to the new folder structure in /public/project-files/
// Helper to map titles to folders that actually contain images (thumbnails)
const getImagePath = (title: string, index: number) => {
  const t = title.toLowerCase().trim();
  
  // Handle Independent projects (routed to folder 04 - 18 images max)
  if (t.startsWith('independent')) {
    const numMatch = t.match(/\d+/);
    const num = numMatch ? parseInt(numMatch[0]) : 1;
    const safeNum = ((num - 1) % 18) + 1; 
    return `/project-files/04-independent/independent-${safeNum}.jpg`;
  }

  // Handle ALL other projects (Chettinad, Video, Teakhome, Broadcast)
  // These pull thumbnails from the 01-chettinad folder (52 images max)
  // This prevents 404s since the other folders are "Videos Only"
  const numMatch = t.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : (index + 1);
  const safeNum = ((num - 1) % 52) + 1;
  
  return `/project-files/01-chettinad/chettinad-${safeNum}.jpg`;
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<(typeof projectsData)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-white text-zinc-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 mb-28">
        <p className="text-[10px] uppercase tracking-[0.5em] text-teal-700 mb-4 font-bold">Portfolio</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900">
          Selected Work<span className="text-teal-600">.</span>
        </h2>
      </div>

      {/* Columns-based Masonry - No wasted space */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grid-flow-dense">
          {projectsData.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedItem(item)}
              className={`project-card group relative overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200/50 active:scale-[0.98] will-change-transform ${getGridSpan(item.title, idx)}`}
            >
              {/* Gradient overlay to soften loading borders */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Container with forced Aspect Ratio */}
              <div className={`relative w-full h-full min-h-[150px] overflow-hidden bg-zinc-200 ${getRatioClass(item.title, item.type)}`}>
                <Image
                  src={getImagePath(item.title, idx)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-1000 ease-out"
                  priority={idx < 4 || item.title === "Chettinad 2" || item.title === "Chettinad 3"} // Fixes LCP warning for specific images
                />
              </div>

              {/* Hover shadow */}
              {/* Content overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[10] flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/20 border border-teal-400/50 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-teal-100 font-bold mb-3">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                    {item.type}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal - Full View */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 p-4 backdrop-blur-md" 
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[60]"
            onClick={() => setSelectedItem(null)}
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-2xl overflow-hidden ring-1 ring-white/10" 
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' && selectedItem.link.startsWith('/') ? (
              <video 
                src={selectedItem.link} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            ) : (
              <iframe 
                src={`${selectedItem.link.replace('/view', '/preview')}?autoplay=1`} 
                className="w-full h-full" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}