'use client';
import { useState } from 'react';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const email = "murali.triggerview@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict front-end structural field verification checks
    if (!subject.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    try {
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      setStatus('success');
      
      // Clear out fields upon successful processing
      setSubject('');
      setMessage('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-transparent text-white py-32 px-6 md:px-20 border-t border-zinc-900 relative">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Side Content & Interactive Form Wrapper Container */}
        <div className="max-w-2xl space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-accent)] font-bold block mb-4">
              Let's collaborate
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Start something memorable with a refined digital presence.
            </h2>
          </div>

          <div className="glass-card p-10 bg-[#12141c]/40 border border-white/5 rounded-[24px]">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Send a Direct Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-2">Recipient</label>
                <input type="email" value={email} readOnly className="w-full rounded-xl border border-zinc-900 bg-zinc-950/40 px-4 py-3 text-zinc-600 outline-none cursor-not-allowed text-sm" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-2">Subject</label>
                <input 
                  type="text" 
                  value={subject} 
                  onChange={(e) => { setSubject(e.target.value); setStatus('idle'); }} 
                  placeholder="Project Identity Design Inquiry" 
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-white outline-none focus:border-[var(--color-accent)] focus:bg-zinc-950/60 transition-all text-sm" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-2">Message</label>
                <textarea 
                  rows={4} 
                  value={message} 
                  onChange={(e) => { setMessage(e.target.value); setStatus('idle'); }} 
                  placeholder="Describe your production timeline goals here..." 
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-white outline-none focus:border-[var(--color-accent)] focus:bg-zinc-950/60 transition-all text-sm resize-none" 
                />
              </div>

              {/* Dynamic Form Response Messages */}
              {status === 'error' && (
                <p className="text-xs font-semibold text-rose-400 bg-rose-500/5 border border-rose-500/20 px-4 py-2 rounded-xl animate-fade-in">
                  ⚠️ Please fill out both the Subject and Message windows before executing.
                </p>
              )}
              {status === 'success' && (
                <p className="text-xs font-semibold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-4 py-2 rounded-xl animate-fade-in">
                  ✓ Form processed successfully! Opening default email client client launcher...
                </p>
              )}

              <button type="submit" className="btn-primary w-full py-4 !text-[11px] font-bold">
                Launch Message Handler
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Direct Metadata Column Links */}
        <div className="flex flex-col gap-12 lg:pl-12 lg:border-l border-zinc-900 justify-center">
          <div className="space-y-6">
            <h4 className="text-[var(--color-accent)] font-bold uppercase tracking-[0.3em] text-[10px]">Contact Details</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[var(--color-muted)] text-[9px] uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-lg font-black text-white hover:text-[var(--color-accent)] transition-colors break-all">{email}</a>
              </div>
              <div>
                <p className="text-[var(--color-muted)] text-[9px] uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+919344517533" className="text-lg font-black text-white hover:text-[var(--color-accent)] transition-colors">+91 93445 17533</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-zinc-900/60">
            <div>
              <h4 className="text-[var(--color-accent)] font-bold mb-4 uppercase tracking-[0.3em] text-[10px]">Services</h4>
              <ul className="space-y-3 text-xs text-[var(--color-muted)] font-medium">
                <li><a href="#services" className="hover:text-white transition-colors">Design & Branding</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">App Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[var(--color-accent)] font-bold mb-4 uppercase tracking-[0.3em] text-[10px]">Social System</h4>
              <ul className="space-y-3 text-xs text-[var(--color-muted)] font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
