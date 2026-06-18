'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate an API endpoint delivery response delay
    setTimeout(() => {
      if (formData.name && formData.email) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 1200);
  };

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-20 px-6 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-100 uppercase">LET'S BUILD SOMETHING</h2>
      <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
        Drop your details below to get a breakdown of project workflows, availability timelines, and finalized quotes.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest block mb-1.5">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0d0e12] border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Murali R"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest block mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0d0e12] border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="hello@bymurali.com"
            />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest block mb-1.5">Project Scope / Details</label>
          <textarea
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#0d0e12] border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            placeholder="Describe your editing, video asset, or structural brand goals..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-neutral-100 hover:bg-neutral-200 disabled:bg-neutral-800 text-neutral-950 font-bold text-xs py-3.5 rounded-lg tracking-widest transition-all uppercase"
        >
          {status === 'loading' ? 'TRANSMITTING MESSAGE...' : 'SEND INQUIRY PROTOCOL'}
        </button>

        {status === 'success' && (
          <p className="text-xs text-center text-emerald-400 font-mono mt-3">✓ Message received. Dispatching response shortly.</p>
        )}
        {status === 'error' && (
          <p className="text-xs text-center text-rose-500 font-mono mt-3">❌ Processing failure. Please verify form contents.</p>
        )}
      </form>
    </section>
  );
}
