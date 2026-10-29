import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBrief }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'AI Solutions', href: '#ai-solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Accelerated self-contained CSS animation keyframes */}
      <style>{`
        @keyframes orbIntroFast {
          0% {
            opacity: 0;
            transform: scale(0.2) translate(35px, 25px);
            filter: drop-shadow(0 0 0px rgba(37,99,235,0));
          }
          25% {
            opacity: 1;
            transform: scale(1.5) translate(20px, 10px);
            filter: drop-shadow(0 0 20px rgba(37,99,235,1));
          }
          60% {
            transform: scale(1.1) translate(6px, -2px);
            filter: drop-shadow(0 0 14px rgba(37,99,235,0.9));
          }
          85% {
            transform: scale(0.95) translate(0px, -1px);
            filter: drop-shadow(0 0 10px rgba(37,99,235,0.8));
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0px, 0px);
            filter: drop-shadow(0 0 8px rgba(37,99,235,0.85));
          }
        }

        @keyframes lettersRevealFast {
          0% {
            opacity: 0;
            letter-spacing: -0.08em;
            filter: blur(6px);
            transform: translateY(3px);
          }
          40% {
            opacity: 0.4;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            letter-spacing: -0.02em;
            filter: blur(0px);
            transform: translateY(0px);
          }
        }

        @keyframes subRevealFast {
          0%, 50% {
            opacity: 0;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        /* Accelerated animation timings: 0.85s / 0.8s / 0.95s */
        .studio-orb-anim {
          animation: orbIntroFast 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center;
        }

        .studio-text-anim {
          animation: lettersRevealFast 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .studio-sub-anim {
          animation: subRevealFast 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-white/65 backdrop-blur-xl border-b border-black/[0.05]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Animated Logo Container */}
          <a href="#hero" className="flex flex-col select-none py-1 group">
            <div className="relative inline-flex items-center">
              
              {/* STUDIO Bold Letters */}
              <span className="text-xl sm:text-2xl font-black text-[#111111] leading-none tracking-tight studio-text-anim flex items-center">
                STUD
                <span className="relative inline-block">
                  I
                  {/* Glowing Blue Dot locked on the 'I' */}
                  <span
                    className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1b64f2] studio-orb-anim"
                    style={{
                      top: '-6px',
                      left: '50%',
                      marginLeft: '-4px'
                    }}
                  />
                </span>
                O
              </span>
            </div>

            {/* BY ANAS SHARIFF Subtitle */}
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.28em] text-[#6e6e73] font-semibold mt-1 uppercase studio-sub-anim">
              BY ANAS SHARIFF
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#515154] hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Start Project Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBrief}
              type="button"
              className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-black transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl bg-black/[0.04] text-[#111111] hover:bg-black/[0.08] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Glass Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#1d1d1f] py-2 border-b border-black/[0.03] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrief();
                }}
                type="button"
                className="w-full py-3.5 rounded-2xl bg-[#111111] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-98"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Top spacer to preserve layout height */}
      <div className="h-18 sm:h-20" />
    </>
  );
}