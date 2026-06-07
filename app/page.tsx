import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary text-text-white min-h-screen overflow-hidden">
      <div className="flex flex-col">
        <Hero />
        <Expertise />
        <Portfolio />
        <Contact />
      </div>
      
      {/* 3. Footer */}
      <Footer />
    </main>
  );
}