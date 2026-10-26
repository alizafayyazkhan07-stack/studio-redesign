import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X, Volume2, VolumeX } from 'lucide-react';

export default function Navbar({
  isDark,
  onToggleTheme,
  onOpenBrief,
  soundEnabled,
  onToggleSound,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'AI Solutions', href: '#ai-solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 border-purple-500/15 bg-[#09090b]/80 text-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative py-2 transition-all duration-200 ${
                  isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-purple-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Center Logo */}
        <a href="#home" className="flex flex-col items-center select-none group text-center">
          <span className="text-xl font-black tracking-widest uppercase leading-none text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
            STUDIO
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-purple-400 font-bold uppercase mt-1">
            BY ANAS SHARIFF
          </span>
        </a>

        {/* Right Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            data-cursor="SOUND"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-500/20 bg-purple-950/30 text-purple-300 hover:border-purple-500/50 hover:bg-purple-900/40 transition-all cursor-pointer"
            aria-label="Toggle sound feedback"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            data-cursor="THEME"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-500/20 bg-purple-950/30 text-amber-400 hover:border-purple-500/50 hover:bg-purple-900/40 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-purple-300" />}
          </button>

          {/* Start Project CTA */}
          <button
            type="button"
            onClick={onOpenBrief}
            data-cursor="START"
            className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.45)] hover:shadow-[0_0_25px_rgba(147,51,234,0.65)] transition-all cursor-pointer"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onToggleSound}
            className="w-8 h-8 rounded-full border border-purple-500/30 bg-purple-950/40 flex items-center justify-center text-xs text-purple-300"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
          </button>
          <button
            onClick={onToggleTheme}
            className="w-8 h-8 rounded-full border border-purple-500/30 bg-purple-950/40 flex items-center justify-center text-xs"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-purple-300" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-500/20 bg-[#09090b]/95 backdrop-blur-2xl px-6 py-6 space-y-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              className="block py-1 text-zinc-300 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBrief();
            }}
            className="w-full text-center py-3 rounded-full text-xs font-bold text-white bg-purple-600 shadow-md shadow-purple-600/30 cursor-pointer"
          >
            Start Project ↗
          </button>
        </div>
      )}
    </header>
  );
}