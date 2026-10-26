import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Services', href: '#services' },
    { name: 'AI Solutions', href: '#ai-solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
          isDark
            ? scrolled
              ? 'bg-zinc-950/85 backdrop-blur-xl border border-zinc-800 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-zinc-900/60 backdrop-blur-lg border border-zinc-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : scrolled
              ? 'bg-white/85 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              : 'bg-white/95 backdrop-blur-md border border-zinc-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
        }`}
      >
        {/* Left: Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-colors duration-200 ${
                link.active
                  ? isDark ? 'text-white font-semibold' : 'text-zinc-950 font-semibold'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              )}
            </a>
          ))}
        </div>
        {/* Center: Official Studio HD Logo */}
        <div className="flex items-center justify-center">
          <a href="#home" className="flex items-center group">
          <img
              src="/brand/logo.png"
             alt="Studio by Anas Shariff"
             style={{
             mixBlendMode: isDark ? 'screen' : 'normal',
            filter: isDark ? 'invert(1) brightness(1.2)' : 'none',
       }}
            className="h-9 sm:h-11 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
       />
       </a>
       </div>
        {/* Right: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all duration-200 ${
              isDark
                ? 'bg-zinc-800/80 border-zinc-700 text-amber-400 hover:bg-zinc-700'
                : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm ${
              isDark
                ? 'text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 hover:border-zinc-500'
                : 'text-white bg-zinc-950 hover:bg-zinc-800'
            }`}
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>

        {/* Mobile Actions: Toggle + Hamburger */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className={`p-1.5 rounded-full border ${
              isDark ? 'bg-zinc-800 border-zinc-700 text-amber-400' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-lg ${
              isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-zinc-700 hover:bg-zinc-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl p-5 shadow-2xl flex flex-col space-y-4 md:hidden border transition-all duration-200 ${
            isDark
              ? 'bg-zinc-950/95 backdrop-blur-xl border-zinc-800'
              : 'bg-white/95 backdrop-blur-xl border-zinc-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-center space-x-1.5 w-full py-2.5 text-xs font-semibold rounded-full ${
              isDark ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
            }`}
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}