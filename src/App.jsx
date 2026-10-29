import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AISolutions from './components/AISolutions';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectBriefModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  const handleOpenBrief = () => {
    setIsBriefOpen(true);
  };

  const handleCloseBrief = () => {
    setIsBriefOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      {/* 5.5s Silent Intro Animation */}
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}

      {/* Project Brief Modal */}
      <ProjectModal isOpen={isBriefOpen} onClose={handleCloseBrief} />

      {/* Navigation Header */}
      <Navbar onOpenBrief={handleOpenBrief} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBrief={handleOpenBrief} />

        {/* 2. Deterministic AI Section (Before Services) */}
        <AISolutions onOpenBrief={handleOpenBrief} />

        {/* 3. 9 Core Studio Services */}
        <Services onOpenBrief={handleOpenBrief} />

        {/* 4. About Section */}
        {typeof About !== 'undefined' && <About onOpenBrief={handleOpenBrief} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}