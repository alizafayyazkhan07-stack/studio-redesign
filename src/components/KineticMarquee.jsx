import React from 'react';
import { Sparkles, Cpu, Layers, Terminal, Zap } from 'lucide-react';

export default function KineticMarquee({ isDark }) {
  const marqueeItems = [
    { text: 'DETERMINISTIC AI PIPELINES', icon: Sparkles },
    { text: 'SUB-50MS GLOBAL EDGE LATENCY', icon: Cpu },
    { text: 'BESPOKE DIGITAL DIRECTION', icon: Layers },
    { text: 'HEADLESS ARCHITECTURE', icon: Terminal },
    { text: 'AUTONOMOUS LEAD ENGINES', icon: Zap },
  ];

  return (
    <div className={`relative w-full overflow-hidden py-4 border-y ${
      isDark ? 'bg-zinc-950/80 border-purple-500/20' : 'bg-purple-50/60 border-purple-200'
    }`}>
      {/* Side Fade Masks */}
      <div className={`absolute top-0 bottom-0 left-0 w-24 pointer-events-none z-10 ${
        isDark ? 'bg-gradient-to-r from-[#09090b] to-transparent' : 'bg-gradient-to-r from-[#fafafa] to-transparent'
      }`} />
      <div className={`absolute top-0 bottom-0 right-0 w-24 pointer-events-none z-10 ${
        isDark ? 'bg-gradient-to-l from-[#09090b] to-transparent' : 'bg-gradient-to-l from-[#fafafa] to-transparent'
      }`} />

      {/* Marquee Runner */}
      <div className="flex w-max animate-marquee space-x-10 hover:[animation-play-state:paused] cursor-grab">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-mono uppercase tracking-widest">
              <Icon className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
              <span className={`font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>
                {item.text}
              </span>
              <span className="text-purple-500/50">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}