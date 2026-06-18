'use client';

import React, { useState, useEffect } from 'react';

type ServiceType = 'video' | 'design' | 'full';

export default function PriceCalculator() {
  const [service, setService] = useState<ServiceType>('video');
  const [duration, setDuration] = useState<number>(1);
  const [addons, setAddons] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addonOptions = [
    { id: '4k', name: '4K Cinematic Delivery', price: 150 },
    { id: 'fast', name: 'Express 48hr Turnaround', price: 250 },
    { id: 'sub', name: 'Custom Dynamic Subtitles', price: 100 },
  ];

  useEffect(() => {
    let base = service === 'video' ? 300 : service === 'design' ? 200 : 600;
    let rate = service === 'video' ? 100 : service === 'design' ? 150 : 200;
    let addonSum = addonOptions.filter(o => addons.includes(o.id)).reduce((a, b) => a + b.price, 0);
    setTotalPrice(base + (duration * rate) + addonSum);
  }, [service, duration, addons]);

  return (
    <section id="calculator" className="w-full max-w-6xl mx-auto py-24 px-6 border-t border-neutral-900/60">
      <div className="mb-16 text-center">
        <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">
          Budget Control
        </span>
        <h2 className="text-3xl font-black text-white mt-4 uppercase tracking-tight">Scope Configurator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0b0c10]/30 border border-neutral-900 p-8 rounded-none">
        <div className="md:col-span-7 space-y-6">
          <div>
            <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase block mb-3">// Mode Select</label>
            <div className="grid grid-cols-3 gap-2">
              {(['video', 'design', 'full'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setService(type)}
                  className={`py-2 text-xs font-mono font-bold border transition-all ${
                    service === type ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500 hover:border-neutral-700'
                  }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase block mb-2">// Scale Units: {duration}</label>
            <input
              type="range" min="1" max="15" value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase block">// Add-ons</label>
            {addonOptions.map((o) => (
              <div
                key={o.id} onClick={() => setAddons(p => p.includes(o.id) ? p.filter(x => x !== o.id) : [...p, o.id])}
                className={`p-3 border cursor-pointer flex items-center justify-between font-mono text-xs transition-colors ${
                  addons.includes(o.id) ? 'bg-emerald-500/5 border-emerald-500/40 text-neutral-200' : 'bg-neutral-900/20 border-neutral-900 text-neutral-500 hover:border-neutral-800'
                }`}
              >
                <span>{o.name}</span>
                <span>+${o.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 bg-neutral-950/60 border border-neutral-900 p-8 flex flex-col justify-between text-center">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">Projected Value</span>
            <div className="mt-12 font-mono text-5xl font-black text-neutral-100">${totalPrice}</div>
          </div>
          <a href="#contact" className="w-full mt-12 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-mono font-bold text-xs py-3.5 tracking-widest transition-colors block text-center uppercase">
            Lock Profile Quote
          </a>
        </div>
      </div>
    </section>
  );
}
