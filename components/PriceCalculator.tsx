'use client';
import { useState, useEffect } from 'react';

export default function PriceCalculator() {
  // Calculator States
  const [projectType, setProjectType] = useState<'video' | 'branding' | 'full'>('video');
  const [videoLength, setVideoLength] = useState<number>(1); // In minutes
  const [include4K, setInclude4K] = useState<boolean>(false);
  const [includeMotionGraphics, setIncludeMotionGraphics] = useState<boolean>(true);
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Dynamic Price Engine Calculation Matrix
  useEffect(() => {
    let basePrice = 0;
    
    if (projectType === 'video') {
      basePrice = 500 + (videoLength * 200); // $500 flat base + $200 per minute
      if (include4K) basePrice += 300;
      if (includeMotionGraphics) basePrice += 400;
    } else if (projectType === 'branding') {
      basePrice = 1200; // Flat Premium Brand Identity Package
    } else {
      basePrice = 2200 + (videoLength * 150); // Combined Full Visual Overhaul Ecosystem
      if (include4K) basePrice += 200;
      if (includeMotionGraphics) basePrice += 300;
    }

    if (rushDelivery) basePrice *= 1.35; // 35% premium fee for emergency fast-track timelines

    setTotalPrice(Math.round(basePrice));
  }, [projectType, videoLength, include4K, includeMotionGraphics, rushDelivery]);

  return (
    <section id="pricing" className="py-32 bg-transparent text-[var(--color-text)] border-t border-zinc-900 relative">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-accent)] font-bold block">
            Investment
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Project Estimate Engine<span className="text-[var(--color-accent)]">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-[var(--color-muted)] font-medium">
            Select your parameters below to calculate a transparent real-time scope configuration budget estimate.
          </p>
        </div>

        {/* Master Calculator Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          
          {/* Controls Input Panel */}
          <div className="glass-card p-8 md:p-10 space-y-8">
            
            {/* Project Type Picker */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em]">1. Select Core Service Ecosystem</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'video', name: 'Video Production' },
                  { id: 'branding', name: 'Branding & Identity' },
                  { id: 'full', name: 'Full Creative Overhaul' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`px-4 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 border text-center ${
                      projectType === type.id
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent)]'
                        : 'bg-zinc-950/40 text-[var(--color-muted)] border-zinc-800 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional Parameters Display */}
            {projectType !== 'branding' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em]">2. Expected Video Runtime Length</label>
                  <span className="text-sm font-bold font-mono text-[var(--color-accent)]">{videoLength} {videoLength === 1 ? 'Minute' : 'Minutes'}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={videoLength}
                  onChange={(e) => setVideoLength(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            )}

            {/* Add-ons Checklist Grid */}
            <div className="space-y-4">
              <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em]">3. Visual Delivery Add-ons</label>
              <div className="space-y-3">
                {projectType !== 'branding' && (
                  <>
                    <label className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/20 cursor-pointer select-none group hover:border-zinc-800 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={include4K} 
                        onChange={(e) => setInclude4K(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500" 
                      />
                      <div className="text-left">
                        <p className="text-xs font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">High-Definition Master Delivery (4K UHD)</p>
                        <p className="text-[11px] text-[var(--color-muted)] mt-0.5">Maximum fidelity export files ready for web and theatrical display channels.</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/20 cursor-pointer select-none group hover:border-zinc-800 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={includeMotionGraphics} 
                        onChange={(e) => setIncludeMotionGraphics(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500" 
                      />
                      <div className="text-left">
                        <p className="text-xs font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">Custom Motion Graphics & VFX</p>
                        <p className="text-[11px] text-[var(--color-muted)] mt-0.5">Bespsoke UI tracker animations, vector supers, and tailored intro/outro branding plates.</p>
                      </div>
                    </label>
                  </>
                )}

                <label className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/20 cursor-pointer select-none group hover:border-zinc-800 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={rushDelivery} 
                    onChange={(e) => setRushDelivery(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500" 
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">Priority Express Production (Fast-Track)</p>
                    <p className="text-[11px] text-[var(--color-muted)] mt-0.5">Cuts editing baseline turnaround speed parameters directly in half to hit hard deadline criteria.</p>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Pricing Output Display Card */}
          <div className="glass-card p-8 bg-[#12141c]/40 border border-white/5 rounded-[24px] flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/5 blur-[50px] pointer-events-none" />
            
            <div className="w-full space-y-6 pt-6">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[var(--color-accent)] font-bold px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                Configured Summary
              </span>
              <p className="text-xs text-[var(--color-muted)] font-medium max-w-xs mx-auto">
                Estimated pricing snapshot for your custom production profile parameter options:
              </p>
            </div>

            <div className="my-10 space-y-2">
              <p className="text-5xl md:text-6xl font-black tracking-tighter text-white font-mono">
                ${totalPrice.toLocaleString()}
              </p>
              <p className="text-[9px] uppercase tracking-widest text-[var(--color-muted)] font-bold">USD Baseline Rate</p>
            </div>

            <div className="w-full space-y-4 pb-4">
              <a 
                href={`#contact?subject=Calculator%20Quote:%20${projectType}`}
                className="btn-primary w-full py-4 text-center !text-[11px] font-bold"
              >
                Book Project Scope
              </a>
              <p className="text-[10px] text-zinc-500 font-medium">
                *Estimates generated are subject to asset complexity criteria reviews.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
