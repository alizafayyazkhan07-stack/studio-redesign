import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Core Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AISolutions from './components/AISolutions';
import IntelligenceShowcase from './components/IntelligenceShowcase';
import PerformanceComparison from './components/PerformanceComparison';
import About from './components/About';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import ProjectBriefModal from './components/ProjectBriefModal';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  // Smooth Lenis inertial scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenBrief = () => {
    setIsBriefOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900 relative overflow-x-hidden">
      
      {/* Navbar without arrow icon & custom cursor removed */}
      <Navbar onOpenBrief={handleOpenBrief} />

      {/* Main Page Flow (Pure White / Light Grey Apple Aesthetic with Carousel) */}
      <main>
        <Hero onOpenBrief={handleOpenBrief} />
        <AISolutions onOpenBrief={handleOpenBrief} />
        <Services onOpenBrief={handleOpenBrief} />
        <IntelligenceShowcase />
        <PerformanceComparison />
        <About />
        <ContactBanner onOpenBrief={handleOpenBrief} />
      </main>

      <Footer onOpenBrief={handleOpenBrief} />

      <ProjectBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        isDark={false}
      />
    </div>
  );
}