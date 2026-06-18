'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#090a0f] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Soft Decorative Emerald Glow Grid Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(transparent_1px,#090a0f_1px)] bg-[size:4px_4px] opacity-[0.02]" />

      <div className="relative z-20 space-y-6 max-w-md">
        <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)]">
          Error 404
        </span>
        
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
          LOST IN SPACE<span className="text-[var(--color-accent)]">.</span>
        </h1>
        
        <p className="text-[var(--color-muted)] text-sm font-medium max-w-xs mx-auto leading-relaxed">
          The project workspace or asset link you are looking for does not exist or has been relocated.
        </p>

        <div className="pt-4">
          <Link href="/" className="btn-primary !text-[11px] !px-8 !py-3.5">
            Return To Studio
          </Link>
        </div>
      </div>
    </main>
  );
}
