'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnalyticsDrawer from '@/components/AnalyticsDrawer';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Portfolio from '@/components/Portfolio';
import PriceCalculator from '@/components/PriceCalculator';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Global scroll restoration management for high-end web experiences
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--color-background)] overflow-hidden selection:bg-[var(--color-accent-soft)] selection:text-[var(--color-accent)]">
      {/* Structural Layer Fixed Ambient Noise / Lighting Overlays */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(transparent_1px,var(--color-background)_1px)] bg-[size:4px_4px] opacity-[0.02]" />
      
      {/* Navigation Layer */}
      <Navbar />
      <AnalyticsDrawer /> {/* Injected smoothly into global layout runtime stack */}

      {/* Presentation Content Cascade */}
      <article className="relative z-10 space-y-0">
        <Hero />
        <Expertise />
        <Portfolio />
        <PriceCalculator /> {/* Embedded seamlessly into the presentation grid */}
        <Timeline />
        <Contact />
      </article>

      {/* Structural Termination Base */}
      <Footer />
    </main>
  );
}
