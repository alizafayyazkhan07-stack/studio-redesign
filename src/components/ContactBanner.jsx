import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactBanner({ isDark, onOpenBrief }) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div
        className={`relative rounded-[36px] overflow-hidden p-8 sm:p-14 border transition-all ${
          isDark
            ? 'bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 border-purple-500/30 shadow-[0_20px_70px_rgba(124,58,237,0.15)]'
            : 'bg-gradient-to-br from-purple-100/70 via-white to-purple-50 border-purple-200 shadow-xl'
        }`}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-widest border border-purple-500/30 bg-purple-950/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMISSION DIRECTION · Q4 PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            CREATING YOUR NEXT DIGITAL{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              MASTERPIECE.
            </span>
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            Have an ambitious digital product, web architecture, or AI pipeline in mind? Submit your scope parameters and receive an architectural diagnosis within 24 hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBrief}
              data-cursor="START"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.55)] hover:shadow-[0_0_40px_rgba(147,51,234,0.75)] transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Initiate Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Guaranteed 24-hr Founder Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}