import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary text-text-white min-h-screen overflow-hidden">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Main Sections */}
      <div className="flex flex-col">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="expertise">
          <Expertise />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      {/* 3. Footer */}
      <Footer />
    </main>
  );
}