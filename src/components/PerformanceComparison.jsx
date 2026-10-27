import React, { useState } from 'react';
import { Sliders, CheckCircle2, X } from 'lucide-react';

export default function PerformanceComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto bg-[#f5f5f7] text-zinc-900">
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-sm inline-block">
          Diagnostic Benchmark
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight">
          Standard Web Stack vs. Studio Engine
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          Compare legacy monolithic templates against our optimized high-performance studio architecture.
        </p>
      </div>

      {/* Comparison Box */}
      <div className="relative rounded-[32px] bg-zinc-950 text-white p-8 sm:p-12 overflow-hidden border border-zinc-800 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Legacy Monolith */}
          <div className="space-y-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold inline-block">
              Legacy Template / Monolith
            </span>
            <div className="space-y-4">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-red-400">3.8s</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">First Contentful Paint</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-amber-400">42/100</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">Mobile Performance Score</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-zinc-300">4.2MB</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">Bloated JS Bundles</p>
              </div>
            </div>
          </div>

          {/* Studio Engine Optimized */}
          <div className="space-y-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold inline-block">
              Studio Engine (Optimized)
            </span>
            <div className="space-y-4">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-emerald-400">24ms</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">TTFB Edge Latency</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-white">100/100</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">Core Web Vitals</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-zinc-200">0.00s</span>
                <p className="text-xs text-zinc-400 mt-1 uppercase font-mono">Cumulative Layout Shift</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}