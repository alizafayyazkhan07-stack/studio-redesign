import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBrief }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="text-lg font-bold tracking-tighter uppercase text-zinc-900">
            STUDIO
          </span>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-semibold border-l border-zinc-300 pl-2">
            BY ANAS SHARIFF
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide text-zinc-600">
          <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#ai-solutions" className="hover:text-zinc-900 transition-colors">AI Solutions</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </nav>

        {/* Right Actions (Arrow removed) */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={onOpenBrief}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-md cursor-pointer"
          >
            <span>Start Project</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full inset-x-0 bg-white/95 backdrop-blur-2xl border-b border-zinc-200 p-6 shadow-xl md:hidden flex flex-col space-y-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-zinc-800">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-zinc-800">Services</a>
          <a href="#ai-solutions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-zinc-800">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-zinc-800">Contact</a>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenBrief(); }}
            className="w-full py-3 rounded-xl bg-zinc-900 text-white text-xs font-semibold text-center cursor-pointer"
          >
            Start Project
          </button>
        </div>
      )}
    </header>
  );
}