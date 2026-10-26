import React from 'react';
import { ArrowUpRight, Sparkles, Play, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Hero({ isDark }) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-32 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* 1. Status Pill */}
      <div
        className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 mb-8 backdrop-blur-md ${
          isDark
            ? 'bg-zinc-900/70 border-zinc-800 text-zinc-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
            : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="tracking-wide">Available for Select Projects</span>
        <span className="text-zinc-500">•</span>
        <span className="text-blue-500 font-mono text-[11px] font-semibold">2026 Studio Direction</span>
      </div>

      {/* 2. Main Title (Fixed gradient clip) */}
      <h1
        className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        Engineering modern digital products with{' '}
        <span
          className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 text-transparent"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          architectural precision.
        </span>
      </h1>

      {/* 3. Subtitle */}
      <p
        className={`mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed transition-colors duration-300 ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}
      >
        Studio by Anas Shariff designs high-conversion web platforms, responsive design systems, and bespoke digital experiences built to scale.
      </p>

      {/* 4. Action Buttons (Constrained width) */}
      <div className="mt-10 flex flex-row items-center justify-center gap-4">
        <a
          href="#services"
          className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
        >
          <span>Explore Services</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href="#showreel"
          className={`inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
            isDark
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
              : 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 shadow-sm'
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current opacity-80" />
          <span>Watch Reel</span>
        </a>
      </div>

      {/* 5. 3D Canvas / Interaction Viewport */}
      <div className="w-full max-w-4xl mt-14 sm:mt-16 rounded-2xl p-2 sm:p-3 border backdrop-blur-xl transition-all duration-300 relative group overflow-hidden">
        <div
          className={`relative rounded-xl w-full h-64 sm:h-80 flex flex-col items-center justify-center border border-dashed transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border-zinc-800 text-zinc-400'
              : 'bg-gradient-to-b from-zinc-100/80 to-zinc-50 border-zinc-300 text-zinc-600'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-3 px-4">
            <div
              className={`p-3 rounded-xl border ${
                isDark ? 'bg-zinc-800/80 border-zinc-700 text-blue-400' : 'bg-white border-zinc-200 text-blue-600 shadow-sm'
              }`}
            >
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-sm font-medium tracking-wide">
              Interactive 3D / Reel Canvas Viewport
            </p>
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                isDark ? 'bg-zinc-950/70 border-zinc-800 text-zinc-500' : 'bg-white/80 border-zinc-200 text-zinc-500'
              }`}
            >
              Ready for Tanzil integration (canvas hook)
            </span>
          </div>
        </div>
      </div>

      {/* 6. Metrics Strip */}
      <div className="w-full max-w-4xl mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-zinc-800/80">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1.5 text-blue-500 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">Speed</span>
          </div>
          <p className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            &lt; 0.6s
          </p>
          <span className="text-xs text-zinc-500 mt-1">Average Load Benchmark</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1.5 text-indigo-500 mb-1">
            <Layers className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">Scale</span>
          </div>
          <p className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            100%
          </p>
          <span className="text-xs text-zinc-500 mt-1">Component Modular Design</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1.5 text-emerald-500 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">Quality</span>
          </div>
          <p className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Enterprise
          </p>
          <span className="text-xs text-zinc-500 mt-1">Standards & Web Compliance</span>
        </div>
      </div>
    </section>
  );
}