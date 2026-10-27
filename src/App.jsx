import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Core Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import IntelligenceShowcase from './components/IntelligenceShowcase';
import AISolutions from './components/AISolutions';
import About from './components/About';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import ProjectBriefModal from './components/ProjectBriefModal';

// Extensions
import CustomCursor from './components/CustomCursor';
import PerformanceComparison from './components/PerformanceComparison';
import { useSoundEffects } from './utils/useSoundEffects';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('studio_theme') !== 'light';
  });

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  const { playTactilePop, playGlassChime, playSuccessBell } = useSoundEffects(soundEnabled);

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

  const handleToggleTheme = () => {
    playTactilePop();
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('studio_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const handleOpenBrief = () => {
    playGlassChime();
    setIsBriefOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-zinc-500/30 selection:text-zinc-200 relative overflow-x-hidden ${
        isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#f5f5f7] text-zinc-900'
      }`}
    >
      <CustomCursor isDark={isDark} />
      {/* ScrollIndicator and StudioEdge successfully removed */}

      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenBrief={handleOpenBrief}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          playTactilePop();
          setSoundEnabled((prev) => !prev);
        }}
      />

      {/* Main Page Flow */}
      <main>
        <Hero isDark={isDark} onOpenBrief={handleOpenBrief} />
        
        <AISolutions isDark={isDark} />
        <Services isDark={isDark} onOpenBrief={handleOpenBrief} />
        <IntelligenceShowcase isDark={isDark} />

        <PerformanceComparison isDark={isDark} />
        <About isDark={isDark} />
        <ContactBanner isDark={isDark} onOpenBrief={handleOpenBrief} />
      </main>

      <Footer isDark={isDark} onOpenBrief={handleOpenBrief} />

      <ProjectBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        isDark={isDark}
        onSuccessSound={playSuccessBell}
      />
    </div>
  );
}