import React, { useState } from 'react';
import { Bot, Cpu, Sparkles, CheckCircle2, ArrowRight, Database, Terminal, Workflow } from 'lucide-react';

export default function AISolutions({ isDark }) {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'autonomous-agents',
      title: 'Autonomous AI Workflows',
      short: 'Agent Swarms',
      tag: 'Task Orchestration',
      description: 'End-to-end multi-agent pipelines executing complex business workflows without human bottlenecks.',
      icon: Workflow,
      specs: [
        'Deterministic multi-step task execution',
        'Custom tool & internal API calling',
        'Automatic error recovery & fallback branches',
        'Zero-latency stream evaluation',
      ],
      metrics: '85% Faster Pipeline Completion',
    },
    {
      id: 'rag-systems',
      title: 'Enterprise Knowledge RAG',
      short: 'Vector Data',
      tag: 'Neural Search',
      description: 'High-precision retrieval systems querying company documents, contracts, and codebases in real time.',
      icon: Database,
      specs: [
        'Hybrid dense & sparse semantic retrieval',
        'Context-window compression algorithms',
        'Strict role-based document access boundaries',
        'Sub-100ms vector index latency',
      ],
      metrics: '99.4% Factual Precision Rate',
    },
    {
      id: 'custom-models',
      title: 'Tailored LLM Tuning & Interfaces',
      short: 'Fine-Tuning',
      tag: 'Proprietary Tech',
      description: 'Fine-tuned small language models engineered specifically for your domain terminology and security policies.',
      icon: Cpu,
      specs: [
        'Private localized model deployment',
        'Full brand voice alignment & guardrails',
        'Zero client data training leakage',
        'Lightweight serverless inference costs',
      ],
      metrics: '4x Lower Operational Token Spend',
    },
  ];

  return (
    <section id="ai-solutions" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border transition-colors duration-300 ${
            isDark
              ? 'bg-blue-950/40 border-blue-800/60 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Gen Capabilities</span>
        </div>
        <h2
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Intelligent AI architecture built for production.
        </h2>
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl transition-colors duration-300 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          We go beyond generic wrappers to develop resilient, enterprise-grade AI infrastructure.
        </p>
      </div>

      {/* Main Tabbed Grid Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Capability Selector Tabs */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-zinc-900 border-blue-500/60 shadow-[0_4px_24px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/50'
                      : 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : isDark
                      ? 'bg-zinc-950/50 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700'
                      : 'bg-zinc-50 border-zinc-200/80 hover:bg-white hover:border-zinc-300'
                }`}
              >
                <div
                  className={`p-3 rounded-xl border mt-0.5 ${
                    isSelected
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : isDark
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-base font-bold transition-colors ${
                        isSelected
                          ? isDark ? 'text-white' : 'text-zinc-950'
                          : isDark ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        isSelected
                          ? 'border-blue-500/40 text-blue-500'
                          : isDark
                            ? 'border-zinc-800 text-zinc-500'
                            : 'border-zinc-200 text-zinc-500'
                      }`}
                    >
                      {item.short}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs leading-relaxed line-clamp-2 ${
                      isDark ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Deep-Dive Preview Window */}
        <div
          className={`lg:col-span-7 rounded-3xl p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden ${
            isDark
              ? 'bg-zinc-950/80 border-zinc-800 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
              : 'bg-white border-zinc-200 shadow-xl'
          }`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-850">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-500 font-semibold">
                Feature Specification
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-mono border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}
              >
                Production Ready
              </span>
            </div>

            {/* Spec Details */}
            <h3 className={`mt-6 text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              {capabilities[activeTab].title}
            </h3>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {capabilities[activeTab].description}
            </p>

            {/* Checkpoints */}
            <div className="mt-8 space-y-3">
              {capabilities[activeTab].specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            {/* Benchmark Metric Pill */}
            <div
              className={`mt-10 p-4 rounded-2xl border flex items-center justify-between ${
                isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}
            >
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500">Benchmark Metric</span>
                <p className={`text-base font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {capabilities[activeTab].metrics}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors"
              >
                <span>Request Architecture Doc</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}