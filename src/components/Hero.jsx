import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ isDark, onOpenBrief }) {
  const phrases = [
    { prefix: "WE BUILD ", highlight: "CREATIVE", suffix: " EXPERIENCES" },
    { prefix: "WE BUILD ", highlight: "DIGITAL ", suffix: "EXPERIENCES" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = phrases[currentIndex];

  return (
    <section className={`relative min-h-[96vh] flex flex-col items-center justify-between pt-24 pb-16 px-4 sm:px-6 text-center transition-colors duration-500 overflow-hidden ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#f5f5f7] text-zinc-900'
    }`}>
      
      {/* High-Visibility Dark / Light Architectural Wave Lines Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 flex flex-col justify-around -space-y-12 transform -skew-y-12 scale-150 opacity-75 dark:opacity-60">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`w-full h-20 rounded-full transition-all duration-700 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-purple-600/30 to-transparent shadow-[0_0_40px_rgba(147,51,234,0.25)] border-t border-purple-500/20' 
                  : 'bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent shadow-[0_0_30px_rgba(0,0,0,0.1)] border-t border-zinc-300/60'
              }`}
              style={{
                transform: `translateX(${i % 2 === 0 ? '-50px' : '50px'})`,
                animation: `waveMove 7s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
        {/* Soft Theme Gradient Mask */}
        <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#09090b]/40 via-transparent to-[#09090b]' : 'from-[#f5f5f7]/40 via-transparent to-[#f5f5f7]'}`} />
      </div>

      {/* Top Header with Soft Theme-Matched Shadow & Blur */}
      <div className={`absolute top-0 inset-x-0 h-28 pointer-events-none backdrop-blur-2xl transition-colors duration-500 z-10 ${
        isDark 
          ? 'bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-transparent border-b border-zinc-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
          : 'bg-gradient-to-b from-white/95 via-zinc-100/80 to-transparent border-b border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
      }`} />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-5 pt-6">
        
        {/* Animated Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight uppercase leading-[1.08] min-h-[120px] flex flex-col items-center justify-center">
          <span className={`transition-opacity duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {currentPhrase.prefix}
            <span className="text-purple-500 dark:text-purple-400 font-semibold drop-shadow-md">
              {currentPhrase.highlight}
            </span>
            {currentPhrase.suffix}
          </span>
        </h1>

        {/* Description */}
        <p className={`max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed ${
          isDark ? 'text-zinc-300' : 'text-zinc-700'
        }`}>
          We engineer bespoke digital platforms, deterministic AI pipelines, and high-conversion software architectures for ambitious global founders.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6">
          <button
            type="button"
            onClick={onOpenBrief}
            className="inline-flex items-center space-x-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer group"
          >
            <span>Explore Practices</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={onOpenBrief}
            className="inline-flex items-center space-x-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer group"
          >
            <span>Inspect AI Solutions</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Digital Direction & Architecture Container Box */}
      <div className="relative z-20 w-full max-w-5xl mx-auto mt-12">
        <div className={`rounded-[32px] p-5 sm:p-7 border transition-all shadow-2xl backdrop-blur-2xl overflow-hidden ${
          isDark 
            ? 'bg-zinc-900/75 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
            : 'bg-white/80 border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
        }`}>
          <div className="mb-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
              Digital Direction & Architecture
            </h3>
          </div>

          {/* Image Container Box */}
          <div className={`w-full rounded-2xl overflow-hidden shadow-2xl border ${
            isDark ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200/80 bg-white'
          }`}>
            <img 
              src="src/assets/pexels-a-darmel-8133870.jpg" 
              alt="Digital Direction & Architecture Mockup" 
              className="w-full h-[320px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}