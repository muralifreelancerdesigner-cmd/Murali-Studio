'use client';
import { useState } from 'react';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const email = "murali.triggerview@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) {
      alert("Please fill in both Subject and Message.");
      return;
    }
    // Open default mail client with pre-filled fields
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-transparent text-white py-32 px-6 md:px-20 border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        
        <div className="max-w-2xl space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent-neon)] font-black">Let's collaborate</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
              Start something memorable with a refined digital presence.
            </h2>
          </div>

          <div className="glass-card p-10 shadow-sm">
            <h3 className="text-xl font-bold text-white mb-6">Email Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.25em] mb-2">To</label>
                <input
                  type="email"
                  defaultValue={email}
                  readOnly
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/40 outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.25em] mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Inquiry"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:bg-white/10 focus:border-[var(--accent-neon)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.25em] mb-2">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:bg-white/10 focus:border-[var(--accent-neon)] transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-5 !text-[11px]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:pl-12 lg:border-l border-white/10">
          <div className="space-y-6">
            <h4 className="text-[var(--accent-neon)] font-bold uppercase tracking-[0.3em] text-[10px]">Contact Details</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-[var(--text-muted)] text-[10px] uppercase mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-lg font-bold text-white hover:text-[var(--accent-neon)] transition-colors break-all">
                  {email}
                </a>
              </div>
              <div className="group">
                <p className="text-[var(--text-muted)] text-[10px] uppercase mb-1">Phone</p>
                <a href="tel:+919344517533" className="text-lg font-bold text-white hover:text-[var(--accent-neon)] transition-colors">
                  +91 93445 17533
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[var(--accent-neon)] font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">Services</h4>
              <ul className="space-y-4 text-sm text-[var(--text-muted)] font-medium">
                <li className="hover:text-white transition-colors"><a href="#services">Design & Branding</a></li>
                <li className="hover:text-white transition-colors"><a href="#services">Video Production</a></li>
                <li className="hover:text-white transition-colors"><a href="#services">App Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[var(--accent-neon)] font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">Social</h4>
              <ul className="space-y-4 text-sm text-[var(--text-muted)] font-medium">
                <li className="hover:text-white transition-colors"><a href="#">Instagram</a></li>
                <li className="hover:text-white transition-colors"><a href="#">LinkedIn</a></li>
                <li className="hover:text-white transition-colors"><a href="#">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}