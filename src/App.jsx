import React, { useState, useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('studio_theme') !== 'light';
  });

  // Initialize Lenis Smooth Scroll
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
    setIsDark((prev) => {
      const nextTheme = !prev;
      localStorage.setItem('studio_theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/20 selection:text-blue-300 relative overflow-x-hidden ${
        isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
      }`}
    >
      {/* Ambient background glow for Dark Mode */}
      {isDark && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />
      )}

      {/* Floating Navbar */}
      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

      {/* Main Experience */}
      <main>
        <Hero isDark={isDark} />
        <Services isDark={isDark} />
      </main>

      {/* Mobbin Minimalist Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}