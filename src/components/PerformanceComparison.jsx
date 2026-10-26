import React, { useState, useRef } from 'react';
import { SlidersHorizontal, Check, X } from 'lucide-react';

export default function PerformanceComparison({ isDark }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleMouseMove = (e) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block mb-2">
          Diagnostic Benchmark
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          Standard Web Stack vs. <span className="text-purple-500">Studio Engine</span>
        </h2>
        <p className={`text-xs sm:text-sm mt-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Drag the interactive slider to evaluate latency, code bloat, and conversion impact.
        </p>
      </div>

      <div
        ref={containerRef}
        data-cursor="DRAG"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`relative w-full max-w-4xl mx-auto h-[440px] sm:h-[380px] rounded-3xl overflow-hidden border select-none cursor-ew-resize shadow-2xl ${
          isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
        }`}
      >
        {/* RIGHT LAYER: Studio Engine (Green/Purple High-Tech) */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 text-white">
          <div className="flex justify-end">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/50 text-purple-300 font-bold">
              ✦ STUDIO ENGINE (OPTIMIZED)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl ml-auto text-right">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">24ms</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">TTFB Edge Latency</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-purple-400">100/100</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Core Web Vitals</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">0.00s</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Cumulative Layout Shift</div>
            </div>
          </div>
          <div className="space-y-1.5 max-w-md ml-auto text-xs text-zinc-300">
            <div className="flex items-center justify-end space-x-2">
              <span>Bespoke 3D Kinetic Shaders (60 FPS)</span>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-center justify-end space-x-2">
              <span>Deterministic Lead Capture & RAG Pipelines</span>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* LEFT LAYER: Legacy Monolith (Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden p-6 sm:p-10 flex flex-col justify-between bg-zinc-900 border-r border-zinc-700 text-zinc-400 z-10 transition-[width] duration-75"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-[800px] flex flex-col justify-between h-full">
            <div className="flex justify-start">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 font-bold">
                ✕ LEGACY TEMPLATE / MONOLITH
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl text-left">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-red-400">3.8s</div>
                <div className="text-xs text-zinc-500 font-mono mt-1">First Contentful Paint</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">42/100</div>
                <div className="text-xs text-zinc-500 font-mono mt-1">Mobile Performance</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-zinc-500">4.2MB</div>
                <div className="text-xs text-zinc-500 font-mono mt-1">Bloated JS Bundles</div>
              </div>
            </div>
            <div className="space-y-1.5 max-w-md text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <X className="w-4 h-4 text-red-400" />
                <span>Plugin conflicts & fragile layout shifts</span>
              </div>
              <div className="flex items-center space-x-2">
                <X className="w-4 h-4 text-red-400" />
                <span>Uncached server rendering delays</span>
              </div>
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-zinc-900 shadow-2xl flex items-center justify-center border border-zinc-300">
            <SlidersHorizontal className="w-4 h-4 text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
}