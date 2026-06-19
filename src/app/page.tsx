import React from 'react';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Timeline from '@/components/Timeline';
import Portfolio from '@/components/Portfolio';
import PriceCalculator from '@/components/PriceCalculator';
import Contact from '@/components/Contact';
import AnalyticsDrawer from '@/components/AnalyticsDrawer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06070a] text-neutral-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Visual background atmospheric accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/5 to-transparent blur-3xl pointer-events-none z-0" />
      
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <Expertise />
      </ScrollReveal>

      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>

      <ScrollReveal>
        <PriceCalculator />
      </ScrollReveal>

      {/* <ScrollReveal>
        <Timeline />
      </ScrollReveal> */}

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      {/* Floating System status controller drawer */}
      <AnalyticsDrawer />
    </main>
  );
}
