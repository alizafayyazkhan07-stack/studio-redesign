import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import KineticHeroVisual from './KineticHeroVisual';

export default function Hero({ isDark }) {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 1. Kinetic Background Layer (Guaranteed Visible) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <KineticHeroVisual isDark={isDark} />
      </div>

      {/* 2. Top Beacon Pill Badge */}
      <div className="relative z-10 flex justify-center mb-8">
        <div
          className={`inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${
            isDark
              ? 'bg-zinc-950/80 border-purple-500/30 text-zinc-300 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
              : 'bg-white/90 border-purple-200 text-zinc-700 shadow-sm backdrop-blur-md'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          <span className="text-zinc-400">Available For Q4 Direction</span>
        </div>
      </div>

      {/* 3. Main Luxury Typography */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-7 pointer-events-auto">
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.03] uppercase drop-shadow-2xl transition-colors ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Digital Direction, <br />
          Architecture &{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
            AI Engineering.
          </span>
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal transition-colors ${
            isDark ? 'text-zinc-300/90' : 'text-zinc-600'
          }`}
        >
          We engineer bespoke digital platforms, deterministic AI pipelines, and high-conversion software architectures for ambitious global founders and companies.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <a
            href="#services"
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] transition-all flex items-center space-x-2 cursor-pointer"
          >
            <span>Explore Practices</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#ai-solutions"
            className={`px-8 py-4 rounded-full text-xs sm:text-sm font-semibold border backdrop-blur-md transition-all cursor-pointer ${
              isDark
                ? 'border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/60 text-zinc-300 hover:text-white'
                : 'border-zinc-300 hover:border-purple-300 bg-white/80 text-zinc-800 hover:text-zinc-950 shadow-sm'
            }`}
          >
            Inspect AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}