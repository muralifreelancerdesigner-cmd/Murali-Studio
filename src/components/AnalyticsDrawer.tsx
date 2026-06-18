'use client';

import React, { useState, useEffect } from 'react';

interface AnalyticEvent {
  id: string;
  action: string;
  category: string;
  timestamp: string;
}

export default function AnalyticsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<AnalyticEvent[]>([]);

  // Simulate picking up active user portfolio interaction logs
  useEffect(() => {
    const mockEvents: AnalyticEvent[] = [
      { id: '1', action: 'Viewed Video: Cinematic Brand Story', category: 'Portfolio Engagement', timestamp: '2 mins ago' },
      { id: '2', action: 'Opened Price Calculator', category: 'Conversion Funnel', timestamp: '15 mins ago' },
      { id: '3', action: 'Clicked Get In Touch Button', category: 'Lead Generation', timestamp: '1 hr ago' },
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <>
      {/* Floating System Status Badge */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-[#0d0e12]/80 backdrop-blur-md border border-neutral-800 text-xs text-neutral-400 px-3 py-1.5 rounded-full hover:border-[#00f2fe] transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        SYSTEM STATUS
      </button>

      {/* Analytics Slide-over Drawer Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0b0c10] border-l border-neutral-900 z-50 shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-900">
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider">WORKSPACE ANALYTICS</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-neutral-200 text-xs transition-colors"
            >
              ✕ CLOSE
            </button>
          </div>

          {/* Event Stream Tracker List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {events.map((event) => (
              <div key={event.id} className="p-3 bg-[#12131a] border border-neutral-900 rounded-lg">
                <p className="text-xs font-medium text-emerald-400 mb-0.5">{event.category}</p>
                <p className="text-xs text-neutral-300 font-mono">{event.action}</p>
                <span className="text-[10px] text-neutral-500 block mt-1">{event.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Backdrop overlay layer */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300"
        />
      )}
    </>
  );
}
