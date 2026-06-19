'use client';

import React from 'react';

// Static timeline history definition directly accessible by the rendering layer
const INLINE_TIMELINE_HISTORY = [
  {
    year: "2025",
    role: "Graphic Designer & Video Editor",
    company: "Chettinad Hospital and Research Institute",
    location: "Chennai, India",
    details: [
      "Conceptualized high-converting social media campaigns and digital event collaterals.",
      "Produced and edited engaging short-form promotional videos optimized for healthcare marketing channels."
    ]
  },
  {
    year: "2022 - 2024",
    role: "Graphic Designer & Video Editor",
    company: "Teak Home",
    location: "Coimbatore, India",
    details: [
      "Engineered daily high-performing print catalogues, social graphics, and marketing materials.",
      "Scripted and finalized product showcase video campaigns across YouTube, Instagram, and Facebook."
    ]
  },
  {
    year: "2016 - 2022",
    role: "Video Editor & Designer",
    company: "Local Broadcast Channels",
    location: "Coimbatore, India",
    details: [
      "Designed and finalized high-impact commercial television advertisement videos for regional broadcast.",
      "Developed and optimized long-form digital content assets to accelerate subscriber growth metrics."
    ]
  },
  {
    year: "2013 - 2016",
    role: "Application Developer",
    company: "Pamz3d Designs India Pvt Ltd",
    location: "Coimbatore, India",
    details: [
      "Programmed and developed interactive cross-platform applications designed to visualize advanced 3D architectural models."
    ]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="w-full max-w-6xl mx-auto py-24 px-6 border-t border-neutral-900/60">
      <div className="mb-16">
        <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">
          Milestone Logs
        </span>
        <h2 className="text-3xl font-black text-white mt-4 uppercase tracking-tight">Career Timeline</h2>
      </div>

      <div className="relative border-l border-neutral-800/80 ml-4 md:ml-32 space-y-12">
        {INLINE_TIMELINE_HISTORY.map((item, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-800 border border-neutral-700 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors duration-300 uppercase tracking-wide">
                  {item.role}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {item.company} — <span className="text-neutral-500 font-mono text-[10px]">{item.location}</span>
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 bg-neutral-900/60 border border-neutral-800 px-2.5 py-1 rounded md:self-start">
                {item.year}
              </span>
            </div>

            <ul className="mt-4 space-y-2 list-none text-xs text-neutral-400 leading-relaxed font-medium">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500/60 mt-0.5">▪</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
