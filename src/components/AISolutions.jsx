import React, { useState } from 'react';
import {
  FileText,
  Cpu,
  Search,
  Database,
  CheckCircle,
  Play,
  ArrowRight,
} from 'lucide-react';

export default function AISolutions({ isDark }) {
  const prompts = [
    {
      id: 1,
      label: '"Enterprise customer retention policy"',
      query: 'Enterprise customer retention policy',
      latency: '0.12s',
      sources: [
        {
          file: 'Enterprise_Handbook_2026.pdf (p. 42)',
          similarity: '0.942',
          text: '"Enterprise accounts with annual contract values over $50k are eligible for priority SLA escalation and designated customer success pods within 15 minutes."',
        },
        {
          file: 'Ops_Runbook_v3.md',
          similarity: '0.887',
          text: '"Retention reviews must be initiated 90 days prior to contract renewal with multi-stakeholder health check interviews."',
        },
      ],
      output:
        'Based on Enterprise_Handbook_2026 and Ops_Runbook_v3, customer retention is governed by a 90-day pre-renewal review cadence paired with dedicated 15-minute priority SLA escalation pods for qualifying enterprise tiers.',
    },
    {
      id: 2,
      label: '"Postgres connection pool scaling rules"',
      query: 'Postgres connection pool scaling rules',
      latency: '0.09s',
      sources: [
        {
          file: 'Cloud_Architecture_SOP.pdf (p. 18)',
          similarity: '0.961',
          text: '"Max client connections capped at 250 with PgBouncer transaction-level pooling; worker replicas scale horizontally when latency exceeds 45ms."',
        },
      ],
      output:
        'Database connection limits are strictly enforced via PgBouncer transaction-mode pooling with automated horizontal replica scale triggers at >45ms latency thresholds.',
    },
    {
      id: 3,
      label: '"Q3 sales revenue attribution model"',
      query: 'Q3 sales revenue attribution model',
      latency: '0.14s',
      sources: [
        {
          file: 'Attribution_Framework_2026.md',
          similarity: '0.915',
          text: '"Multi-touch W-shaped attribution applies 30% first touch, 40% demo booking, and 30% contract execution for accurate enterprise channel modeling."',
        },
      ],
      output:
        'Revenue credit is assigned via a balanced W-shaped weighting model allocating primary emphasis (40%) to qualified demo completion.',
    },
  ];

  const [activePrompt, setActivePrompt] = useState(prompts[0]);

  const steps = [
    {
      step: '01',
      title: 'ENTERPRISE INGESTION',
      desc: 'Connect internal knowledge: PDFs, Notion docs, Confluence, Postgres records, and live APIs.',
      tag: 'Connectors',
      status: 'ACTIVE',
      icon: FileText,
    },
    {
      step: '02',
      title: 'INTELLIGENT CHUNKING',
      desc: 'Documents are parsed into semantic context windows and transformed into high-dimension dense vectors.',
      tag: 'Embeddings',
      icon: Cpu,
    },
    {
      step: '03',
      title: 'HYBRID VECTOR RETRIEVAL',
      desc: 'Dense semantic similarity paired with sparse keyword search (BM25) for 99.8% contextual recall.',
      tag: 'Vector DB',
      icon: Search,
    },
    {
      step: '04',
      title: 'RE-RANKING & GROUNDING',
      desc: 'Context is filtered, verified against security permissions, and injected into the LLM system prompt.',
      tag: 'Guardrails',
      icon: Database,
    },
    {
      step: '05',
      title: 'CITATION-AWARE OUTPUT',
      desc: 'Accurate responses generated with strict source links back to original paragraphs without hallucination.',
      tag: 'Deterministic AI',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="ai-solutions" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            INTELLIGENCE, <br />
            <span className="text-purple-600 dark:text-purple-400">ENGINEERED.</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Turn unstructured enterprise knowledge into verified, citation-backed answers with zero hallucinations. Explore our deterministic RAG workflow.
          </p>
        </div>

        <a
          href="#contact"
          className={`inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold border transition-all ${
            isDark
              ? 'border-zinc-800 hover:border-purple-800 bg-zinc-950 text-zinc-300'
              : 'border-zinc-300 hover:border-purple-300 bg-white text-zinc-800 shadow-sm'
          }`}
        >
          <span>Deploy RAG for Your Business</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Interactive Prompt Bar */}
      <div
        className={`p-4 rounded-3xl border mb-10 flex flex-wrap items-center justify-between gap-3 ${
          isDark ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 pl-2">Test Prompt:</span>
          {prompts.map((p) => {
            const isSelected = activePrompt.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePrompt(p)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-white font-semibold shadow-md'
                    : isDark
                      ? 'bg-zinc-900 text-zinc-400 hover:text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <button className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md cursor-pointer">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Trace Pipeline</span>
        </button>
      </div>

      {/* 5-Step Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          const isFirst = idx === 0;

          return (
            <div
              key={st.step}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                isFirst
                  ? isDark
                    ? 'bg-purple-950/20 border-purple-800/80'
                    : 'bg-purple-50/50 border-purple-300'
                  : isDark
                    ? 'bg-zinc-950/60 border-zinc-800/80'
                    : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-500">{st.step}</span>
                  <div
                    className={`p-2 rounded-xl ${
                      isFirst
                        ? 'bg-purple-600 text-white'
                        : isDark
                          ? 'bg-zinc-900 text-zinc-400'
                          : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xs font-black tracking-tight uppercase mb-2">{st.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>{st.tag}</span>
                {st.status && <span className="text-purple-400 font-bold">● {st.status}</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Pipeline Monitor Box */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border ${
          isDark ? 'bg-zinc-950/90 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-zinc-100 dark:border-zinc-900 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-bold text-zinc-400">PIPELINE MONITOR</span>
            <span className="text-zinc-500">| Active query: {activePrompt.label}</span>
          </div>
          <span className="text-purple-500 font-semibold">Vector Index: HNSW-Cosine (1536-dim)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Retrieved Context Fragments */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
              RETRIEVED CONTEXT FRAGMENTS
            </div>

            {activePrompt.sources.map((src, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border font-mono text-xs ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between text-purple-400 text-[11px] mb-2 font-semibold">
                  <span>Source: {src.file}</span>
                  <span className="text-zinc-500">Similarity: {src.similarity}</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {src.text}
                </p>
              </div>
            ))}
          </div>

          {/* Deterministic Output Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-purple-500/30 bg-purple-500/5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-purple-400 font-bold flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>Deterministic Grounded Output</span>
                </span>
                <span className="text-zinc-500">{activePrompt.latency} latency</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                {activePrompt.output}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-500">Hallucination check: 0.00%</span>
              <span className="text-purple-400 font-bold">Strict Sources Linked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}