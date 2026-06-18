'use client';

import React, { useState, useEffect } from 'react';

type ServiceType = 'video' | 'design' | 'full';

interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export default function PriceCalculator() {
  const [service, setService] = useState<ServiceType>('video');
  const [duration, setDuration] = useState<number>(1); // Duration in minutes for video or pages for design
  const [addons, setAddons] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addonOptions: AddonOption[] = [
    { id: '4k', name: '4K Cinematic Delivery', price: 150, description: 'Highest fidelity master rendering' },
    { id: 'fast', name: 'Express 48hr Turnaround', price: 250, description: 'Priority processing queue placement' },
    { id: 'sub', name: 'Custom Dynamic Subtitles', price: 100, description: 'Hand-timed, engaging social captions' },
    { id: 'source', name: 'Raw Source Project Files', price: 300, description: 'Full access to layers and timelines' },
  ];

  useEffect(() => {
    let basePrice = 0;
    let multiplierPrice = 0;

    if (service === 'video') {
      basePrice = 300; // Base pricing for setup/ingest
      multiplierPrice = duration * 100; // $100 per minute of edited content
    } else if (service === 'design') {
      basePrice = 200;
      multiplierPrice = duration * 150; // $150 per core layout asset
    } else {
      basePrice = 600; // Combined bundle base configuration
      multiplierPrice = duration * 200;
    }

    const addonsPrice = addonOptions
      .filter((item) => addons.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    setTotalPrice(basePrice + multiplierPrice + addonsPrice);
  }, [service, duration, addons]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-6 bg-[#0c0d12] border border-neutral-900 rounded-2xl shadow-xl my-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-neutral-100 tracking-tight">PROJECT ESTIMATE CALCULATOR</h2>
        <p className="text-sm text-neutral-400 mt-2">Configure your requirements to get an instant pricing baseline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Configuration Column */}
        <div className="space-y-6">
          <div>
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-3">Service Focus</label>
            <div className="grid grid-cols-3 gap-2">
              {(['video', 'design', 'full'] as ServiceType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setService(type)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium border tracking-wide transition-all ${
                    service === type
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-md'
                      : 'bg-[#12131a] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {type === 'video' ? '🎬 Video' : type === 'design' ? '🎨 Design' : '💎 Bundle'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
              {service === 'video' ? 'Video Duration' : service === 'design' ? 'Asset Deliverables' : 'Scope Units'}: <span className="text-emerald-400 font-mono font-bold ml-1">{duration}</span>
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
              <span>1 unit</span>
              <span>15 units</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-3">Optional Project Add-ons</label>
            <div className="space-y-2.5">
              {addonOptions.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between ${
                    addons.includes(addon.id)
                      ? 'bg-emerald-500/5 border-emerald-500/40 text-neutral-200'
                      : 'bg-[#12131a]/50 border-neutral-900 text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-semibold">{addon.name}</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{addon.description}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-[#141620] px-2 py-1 rounded border border-neutral-800">
                    +${addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Price Display Box Column */}
        <div className="flex flex-col justify-between bg-[#111218] border border-neutral-900 rounded-xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <div>
            <span className="text-[11px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">
              Estimated Total
            </span>
            <div className="mt-8 font-mono text-5xl font-extrabold text-neutral-100 tracking-tight">
              ${totalPrice}
            </div>
            <p className="text-xs text-neutral-500 mt-3 max-w-[240px] mx-auto leading-relaxed">
              *Calculated configuration pricing serves as a development baseline. Final figures depend on project complexity.
            </p>
          </div>

          <button
            type="button"
            className="w-full mt-10 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs py-3.5 rounded-lg tracking-wider transition-all shadow-lg hover:shadow-emerald-500/10 uppercase"
          >
            Lock in this Package Quote
          </button>
        </div>
      </div>
    </section>
  );
}
