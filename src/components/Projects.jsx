import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects({ isDark }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Architecture', 'AI Platforms', 'Creative 3D'];

  const projects = [
    {
      id: 1,
      title: 'Aura Intelligence Platform',
      category: 'AI Platforms',
      year: '2026',
      description: 'Autonomous multi-agent orchestration dashboard with deterministic token tracing and private fine-tuned model evaluation.',
      tags: ['React', 'Tailwind CSS', 'FastAPI', 'Vector RAG'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-blue-600/30 via-indigo-600/20 to-transparent',
    },
    {
      id: 2,
      title: 'Nexus Financial Ecosystem',
      category: 'Web Architecture',
      year: '2026',
      description: 'Sub-second real-time ledger interface designed for institutional portfolio managers handling global asset settlements.',
      tags: ['TypeScript', 'Vite', 'Headless UI', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-emerald-600/30 via-teal-600/20 to-transparent',
    },
    {
      id: 3,
      title: 'Kroma Sensory Spatial Lab',
      category: 'Creative 3D',
      year: '2025',
      description: 'Interactive WebGL spatial gallery showcasing kinetic typography, fluid shaders, and cursor-reactive audio nodes.',
      tags: ['Three.js', 'GLSL', 'Lenis', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-purple-600/30 via-pink-600/20 to-transparent',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-28 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div
            className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border transition-colors ${
              isDark
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Selected Direction</span>
          </div>
          <h2
            className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Featured systems & works.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? isDark
                    ? 'bg-white text-zinc-950 font-semibold shadow-md'
                    : 'bg-zinc-950 text-white font-semibold shadow-md'
                  : isDark
                    ? 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
              isDark
                ? 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)]'
                : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]'
            }`}
          >
            {/* Visual Canvas Thumbnail */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
              />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span
                  className={`text-[10px] font-mono uppercase px-3 py-1 rounded-full backdrop-blur-md border ${
                    isDark
                      ? 'bg-zinc-950/80 border-zinc-700/80 text-zinc-200'
                      : 'bg-white/90 border-zinc-200 text-zinc-800'
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className={`text-2xl font-bold tracking-tight mb-2 flex items-center justify-between ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}