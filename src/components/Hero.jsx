import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ onOpenBrief }) {
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
    <section className="relative min-h-[105vh] flex flex-col items-center justify-between pt-28 pb-20 px-4 sm:px-6 text-center bg-[#f5f5f7] text-zinc-900 overflow-hidden">
      
      {/* Continuous Full-Height Background Waves Animation in Clean Neutral Grey */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -inset-x-20 -top-20 -bottom-20 flex flex-col justify-between space-y-4 transform -skew-y-12 scale-125 opacity-70">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-full h-16 rounded-full bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent shadow-[0_0_35px_rgba(0,0,0,0.08)] border-t border-zinc-300/60 transition-all duration-700"
              style={{
                transform: `translateX(${i % 2 === 0 ? '-60px' : '60px'})`,
                animation: `waveMove 6s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.25}s`
              }}
            />
          ))}
        </div>
        {/* Soft Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7]/30 via-transparent to-[#f5f5f7]/80" />
      </div>

      {/* Top Header Mock Blur */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none backdrop-blur-2xl bg-gradient-to-b from-white/95 via-zinc-100/80 to-transparent border-b border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-5 pt-6">
        
        {/* Animated Headline with Clean Grey/Zinc Neutral Tone */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight uppercase leading-[1.08] min-h-[120px] flex flex-col items-center justify-center">
          <span className={`transition-opacity duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {currentPhrase.prefix}
            <span className="text-zinc-900 font-bold underline decoration-zinc-400 decoration-2 underline-offset-8">
              {currentPhrase.highlight}
            </span>
            {currentPhrase.suffix}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed text-zinc-600">
          We engineer bespoke digital platforms, deterministic AI pipelines, and high-conversion software architectures for ambitious global founders.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6">
          <button
            type="button"
            onClick={onOpenBrief}
            className="inline-flex items-center space-x-1 text-sm font-medium text-zinc-900 hover:underline cursor-pointer group"
          >
            <span>Explore Practices</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={onOpenBrief}
            className="inline-flex items-center space-x-1 text-sm font-medium text-zinc-900 hover:underline cursor-pointer group"
          >
            <span>Inspect AI Solutions</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Digital Direction & Architecture Container Box */}
      <div className="relative z-20 w-full max-w-5xl mx-auto mt-12">
        <div className="rounded-[32px] p-5 sm:p-7 border bg-white/80 border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl overflow-hidden">
          <div className="mb-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-700 font-bold">
              Digital Direction & Architecture
            </h3>
          </div>

          {/* Image Container Box */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
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