import React from 'react';
import { CheckCircle2, Terminal, Sparkles } from 'lucide-react';

export default function About({ isDark }) {
  const principles = [
    {
      num: '01',
      title: 'DEEP PROBLEM DIAGNOSTICS',
      desc: 'We do not build without understanding. Every line of code and visual decision begins with your core business objective and customer journey.',
    },
    {
      num: '02',
      title: 'INTENTIONAL AESTHETIC RESTRAINT',
      desc: 'We reject generic templates and decorative noise. Typography, negative space, and disciplined color hierarchies command real executive authority.',
    },
    {
      num: '03',
      title: 'PRODUCTION-GRADE ENGINEERING',
      desc: 'Lightning-fast load speeds, accessible semantics, reliable database structures, and maintainable TypeScript code built to scale.',
    },
    {
      num: '04',
      title: 'INTELLIGENT AUTOMATION',
      desc: 'We embed practical AI and deterministic workflows into business operations to reduce friction and amplify human talent.',
    },
  ];

  const deliveryPhases = [
    {
      phase: '01',
      title: 'UNDERSTAND THE PROBLEM',
      desc: 'We conduct rigorous discovery to clarify business objectives, user friction points, and key metrics before touching design tools.',
      badge: 'Phase 1 Done',
    },
    {
      phase: '02',
      title: 'FORMULATE DIGITAL STRATEGY',
      desc: 'Identify the exact technological architecture, conversion funnel, and data requirements required for long-term dominance.',
      badge: 'Phase 2 Done',
    },
    {
      phase: '03',
      title: 'DESIGN INTUITIVE EXPERIENCES',
      desc: 'Craft disciplined typographic hierarchies, tactile micro-interactions, and responsive layouts that elevate your brand perception.',
      badge: 'Phase 3 Done',
    },
    {
      phase: '04',
      title: 'BUILD RELIABLE SYSTEMS',
      desc: 'Implement production-grade code, serverless cloud hosting, accessible semantics, and deterministic AI capabilities.',
      badge: 'Phase 4 Done',
    },
    {
      phase: '05',
      title: 'LAUNCH & CONTINUOUSLY IMPROVE',
      desc: 'Deploy with zero downtime, configure real-time analytics dashboards, and iterate based on verified conversion signals.',
      badge: 'Phase 5 Done',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            BEHIND THE <span className="text-purple-600 dark:text-purple-400">STUDIO.</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Studio brings together thoughtful design, modern engineering, and practical artificial intelligence to build meaningful digital experiences.
          </p>
        </div>

        <div className="text-left md:text-right">
          <div className="text-base font-bold tracking-tight">ANAS SHARIFF</div>
          <div className="text-xs text-purple-500 font-mono font-semibold">Creative Technologist & Studio Founder</div>
        </div>
      </div>

      {/* 2. Philosophy Box & 4 Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Left: Philosophy & Commitment Card */}
        <div
          className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border flex flex-col justify-between ${
            isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
          }`}
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-purple-500 font-bold block mb-4">
              PHILOSOPHY & COMMITMENT
            </span>
            <blockquote className="text-xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-6">
              "Great digital experiences are neither accidental nor overly complex. They are the natural result of disciplined craft, clarity of purpose, and technological precision."
            </blockquote>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Founded by Anas Shariff, Studio operates at the intersection of high-end visual design and rigorous software engineering. Rather than treating artificial intelligence as a marketing gimmick or relying on generic website templates, we engineer bespoke digital solutions that solve tangible operational and commercial challenges for founders, companies, and organizations globally.
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-4 text-xs font-medium">
            <span className="inline-flex items-center space-x-1.5 text-purple-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero Fabricated Metrics</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 text-purple-500">
              <Terminal className="w-4 h-4" />
              <span>Clean Scalable Code</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 text-purple-300">
              <Sparkles className="w-4 h-4" />
              <span>Practical AI Integration</span>
            </span>
          </div>
        </div>

        {/* Right: 4 Principles Stack */}
        <div className="lg:col-span-5 space-y-4">
          {principles.map((pr) => (
            <div
              key={pr.num}
              className={`p-6 rounded-3xl border transition-all ${
                isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="text-xs font-mono text-purple-500 font-bold mb-1">{pr.num}</div>
              <h3 className="text-xs sm:text-sm font-bold tracking-tight uppercase mb-2">{pr.title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HOW WE DELIVER PROJECTS */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase mb-8">
          HOW WE DELIVER PROJECTS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {deliveryPhases.map((phase) => (
            <div
              key={phase.phase}
              className={`p-6 rounded-3xl border flex flex-col justify-between ${
                isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div>
                <div className="text-lg font-mono font-black text-purple-500 mb-3">{phase.phase}</div>
                <h4 className="text-xs font-black tracking-tight uppercase mb-2 leading-snug">
                  {phase.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {phase.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center space-x-1.5 text-[11px] font-mono text-purple-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{phase.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}