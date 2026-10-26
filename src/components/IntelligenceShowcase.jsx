import React from 'react';
import { ArrowUpRight, Cpu, Terminal, Sparkles } from 'lucide-react';

export default function IntelligenceShowcase({ isDark }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading & Bento Info */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase">
              USE <span className="text-purple-600 dark:text-purple-400">INTELLIGENCE</span> ANYWHERE NEEDED.
            </h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              We design adaptable technology stacks that operate seamlessly across desktop, mobile apps, enterprise cloud environments, and autonomous AI pipelines.
            </p>
          </div>

          {/* Bento Sub-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Card 1: Modular Content */}
            <div
              className={`sm:col-span-7 p-6 rounded-3xl border transition-all ${
                isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-500 font-semibold mb-2">
                <Terminal className="w-4 h-4" />
                <span>Editor CMS & Portals</span>
              </div>
              <h3 className="font-bold text-base mb-1">Modular Content Infrastructure</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Headless CMS pipelines for managing articles, portfolios, team assets, and real-time product inventories.
              </p>
            </div>

            {/* Card 2: Purple Sub-50ms Badge */}
            <div className="sm:col-span-5 p-6 rounded-3xl bg-purple-600 text-white flex flex-col justify-between shadow-lg shadow-purple-600/20">
              <div className="flex items-center justify-between">
                <Cpu className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 font-bold">
                  ENGINEERED
                </span>
              </div>
              <div className="mt-6">
                <div className="text-2xl font-black tracking-tight">SUB-50MS</div>
                <div className="text-xs text-purple-200">Global Edge Response</div>
              </div>
            </div>

            {/* Card 3: Autonomous AI Workflows */}
            <div
              className={`sm:col-span-12 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-purple-500 font-semibold uppercase">
                    Autonomous AI Workflows
                  </div>
                  <div className="text-xs sm:text-sm font-bold">
                    Self-optimizing pipelines and lead intake engines
                  </div>
                </div>
              </div>
              <a
                href="#services"
                data-cursor="EXPLORE"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-purple-600 dark:text-white hover:opacity-90 self-start sm:self-auto cursor-pointer transition-all"
              >
                <span>Explore Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Studio Labs Animated Video Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl bg-zinc-950 h-[460px] group">
            {/* Seamless AutoPlay Looping Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/studio-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-purple-900/10 pointer-events-none" />

            {/* Bottom Overlay Info Pill */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between bg-black/65 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 text-white shadow-xl pointer-events-none">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold">
                    Collaborative Workspace
                  </span>
                </div>
                <div className="text-sm sm:text-base font-black tracking-tight uppercase">
                  STUDIO LABS
                </div>
                <div className="text-xs text-zinc-300 font-mono">
                  Bangalore · Global Deployment
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white text-zinc-950 font-extrabold shadow-sm">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}