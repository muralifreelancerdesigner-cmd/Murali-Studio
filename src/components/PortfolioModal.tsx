' run devuse client';
import { useEffect } from 'react';

interface ModalItem {
  id: string;
  type: string;
  category: string;
  src: string;
}

interface PortfolioModalProps {
  item: ModalItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  // Prevent page scroll behind the modal when active
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
      {/* Dark Backdrop Glass Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Main Glassmorphic Modal Window Container */}
      <div className="relative w-full max-w-4xl rounded-[28px] border border-white/5 bg-[#12141c]/90 text-[var(--color-text)] overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-300">
        
        {/* Absolute Floating Close Window Button Trigger */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-white transition-all hover:bg-zinc-900 hover:border-emerald-500/40 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media Asset Render Core View Block */}
        <div className="relative w-full aspect-video bg-zinc-950">
          {item.type === 'video' ? (
            <iframe
              className="w-full h-full"
              src={`https://youtube.com/embed/${item.id}?autoplay=1&rel=0`}
              title="Cinematic Project Playback View"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={item.src}
              alt={item.category}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Meta Details Text Block footer bar */}
        <div className="p-8 border-t border-zinc-900 bg-zinc-950/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold block">
              {item.category}
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">
              {item.type === 'video' ? 'Cinematic Video Project Production' : 'Premium Brand System Layout'}
            </h3>
          </div>
          
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary !py-3.5 !px-6 !text-[10px]"
          >
            Inquire About This Style
          </a>
        </div>

      </div>
    </div>
  );
}