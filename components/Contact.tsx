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
    <section id="contact" className="bg-[#F2F2F2] text-zinc-900 py-32 px-6 md:px-20 border-t border-zinc-200">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        
        <div>
          <div className="max-w-2xl space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-teal-800 font-black">Let's collaborate</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
                Start something memorable with a refined digital presence.
              </h2>
            </div>

            <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Email form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.25em] mb-2">To</label>
                  <input
                    type="email"
                    defaultValue={email}
                    readOnly
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-400 outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.25em] mb-2">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:bg-white focus:border-teal-600 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.25em] mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:bg-white focus:border-teal-600 transition-all shadow-inner resize-none"
                  />
                </div>
                <button type="submit" className="bg-teal-700 text-white w-full py-5 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-teal-800 transition-all active:scale-[0.95] shadow-xl shadow-teal-700/30">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:pl-12 lg:border-l border-zinc-300">
          <div className="space-y-6">
            <h4 className="text-teal-800 font-bold uppercase tracking-[0.3em] text-[10px]">Contact Details</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-zinc-500 text-[10px] uppercase mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-lg font-bold text-zinc-900 hover:text-teal-700 transition-colors break-all">
                  {email}
                </a>
              </div>
              <div className="group">
                <p className="text-zinc-500 text-[10px] uppercase mb-1">Phone</p>
                <a href="tel:+919344517533" className="text-lg font-bold text-zinc-900 hover:text-teal-700 transition-colors">
                  +91 93445 17533
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-teal-800 font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">Services</h4>
              <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                <li className="hover:text-teal-700 transition-colors"><a href="#services">Design & Branding</a></li>
                <li className="hover:text-teal-700 transition-colors"><a href="#services">Video Production</a></li>
                <li className="hover:text-teal-700 transition-colors"><a href="#services">App Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-teal-800 font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">Social</h4>
              <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                <li className="hover:text-teal-700 transition-colors"><a href="#">Instagram</a></li>
                <li className="hover:text-teal-700 transition-colors"><a href="#">LinkedIn</a></li>
                <li className="hover:text-teal-700 transition-colors"><a href="#">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}