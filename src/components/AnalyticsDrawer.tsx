'use client';
import { useState, useEffect } from 'react';

export default function AnalyticsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [pingTime, setPingTime] = useState('00ms');

  // Interactive trick to simulate real-time API latency values securely
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        const fakeLatency = Math.floor(Math.random() * 25) + 12;
        setPingTime(`${fakeLatency}ms`);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <>
      {/* Discreet floating control trigger at the bottom edge of the layout viewport */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="fixed bottom-6 left-6 z-40 flex h-9 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 text-[9px] font-bold uppercase tracking-widest text-[var(--color-muted)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:text-white active:scale-95 shadow-xl"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        System Status
      </button>

      {/* Slide-out Panel Overlay System */}
      <div className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[440px] border-r border-white/5 bg-[#090a0f]/95 backdrop-blur-2xl p-8 text-[var(--color-text)] transition-transform duration-500 ease-out shadow-[50px_0_100px_rgba(0,0,0,0.9)] flex flex-col justify-between ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="space-y-12">
          {/* Header Bar Block */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--color-accent)] font-bold block mb-1">Telemetry</span>
              <h3 className="text-xl font-black text-white tracking-tight">Studio Matrix Console</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="h-8 w-8 rounded-full border border-zinc-800 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Interactive Metric Monitoring Rows */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase text-[var(--color-muted)] tracking-widest border-b border-zinc-900 pb-2">Live Availability</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card !bg-zinc-950/20 p-4 border border-zinc-900">
                <p className="text-[9px] text-[var(--color-muted)] uppercase tracking-wider">Current Pipeline</p>
                <p className="text-base font-bold text-white mt-1">2 Active Slots</p>
              </div>
              <div className="glass-card !bg-zinc-950/20 p-4 border border-zinc-900">
                <p className="text-[9px] text-[var(--color-muted)] uppercase tracking-wider">Next Opening</p>
                <p className="text-base font-bold text-emerald-400 mt-1">July 2026</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-[10px] font-bold uppercase text-[var(--color-muted)] tracking-widest border-b border-zinc-900 pb-2">Operational Nodes</h4>
              
              <div className="flex items-center justify-between text-xs py-1">
                <span className="text-zinc-400 font-medium">Global Delivery API Edge</span>
                <span className="font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-[10px] uppercase font-bold">Optimal</span>
              </div>
              
              <div className="flex items-center justify-between text-xs py-1">
                <span className="text-zinc-400 font-medium">Vercel Serverless Core Handshake</span>
                <span className="font-mono text-zinc-300 font-bold">{pingTime}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1">
                <span className="text-zinc-400 font-medium">Media CDN Thresholds</span>
                <span className="font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-[10px] uppercase font-bold">99.98%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Console Footprint Layer */}
        <div className="border-t border-zinc-900 pt-6 text-[9px] uppercase tracking-[0.25em] text-[var(--color-muted)] font-mono flex items-center justify-between">
          <span>Env: Production-v4.2</span>
          <span>Loc: Node-Murali</span>
        </div>
      </div>

      {/* Dark Ambient Backdrop Shadow Mask Layer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        />
      )}
    </>
  );
}
