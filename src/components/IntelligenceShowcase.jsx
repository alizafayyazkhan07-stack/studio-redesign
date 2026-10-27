import React, { useState } from 'react';
import { ArrowUpRight, Terminal, Cpu, Database, Shield, CheckCircle2 } from 'lucide-react';

export default function IntelligenceShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: '01',
      title: 'ENTERPRISE INGESTION',
      desc: 'Connect internal knowledge: PDFs, Notion docs, Confluence, Postgres records, and live APIs.',
      status: 'ACTIVE',
      icon: Database,
      detailSnippet: {
        source: 'Enterprise_Handbook_2026.pdf (p. 42)',
        similarity: '0.942',
        text: 'Enterprise accounts with annual contract values over $50k are eligible for priority SLA escalation and designated customer success pods within 15 minutes.',
      }
    },
    {
      step: '02',
      title: 'INTELLIGENT CHUNKING',
      desc: 'Documents are parsed into semantic context windows and transformed into high-dimension dense vectors.',
      status: 'EMBEDDINGS',
      icon: Cpu,
      detailSnippet: {
        source: 'Ops_Runbook_v3.md',
        similarity: '0.887',
        text: 'Retention reviews must be initiated 90 days prior to contract renewal with multi-stakeholder health check interviews.',
      }
    },
    {
      step: '03',
      title: 'HYBRID VECTOR RETRIEVAL',
      desc: 'Dense semantic similarity paired with sparse keyword search (BM25) for 99.8% contextual recall.',
      status: 'VECTOR DB',
      icon: Terminal,
      detailSnippet: {
        source: 'HNSW-Cosine Indexing',
        similarity: '0.915',
        text: 'Hybrid retrieval combines exact keyword matching with dense embedding vector similarity across postgres pgvector tables.',
      }
    },
    {
      step: '04',
      title: 'RE-RANKING & GROUNDING',
      desc: 'Context is filtered, verified against security permissions, and injected into the LLM system prompt.',
      status: 'GUARDRAILS',
      icon: Shield,
      detailSnippet: {
        source: 'Cross-Encoder Rerank',
        similarity: '0.963',
        text: 'Only top candidate paragraphs passing cross-encoder relevance scores are passed into the LLM context window.',
      }
    },
    {
      step: '05',
      title: 'CITATION-AWARE OUTPUT',
      desc: 'Accurate responses generated with strict source links back to original paragraphs without hallucination.',
      status: 'DETERMINISTIC AI',
      icon: CheckCircle2,
      detailSnippet: {
        source: 'Verified Grounded Output',
        similarity: '0.00s latency',
        text: 'Based on verified documentation, customer retention is governed by a 90-day pre-renewal review cadence with zero hallucination.',
      }
    }
  ];

  const current = pipelineSteps[activeStep];

  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto bg-[#f5f5f7] text-zinc-900 transition-colors duration-500">
      
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-sm inline-block">
          Deterministic RAG Pipeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight">
          Intelligence, Engineered.
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          Turn unstructured enterprise knowledge into verified, citation-backed answers with zero hallucinations. Explore our deterministic RAG workflow.
        </p>
      </div>

      {/* Interactive Pipeline Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Steps Navigation */}
        <div className="lg:col-span-5 space-y-3">
          {pipelineSteps.map((item, idx) => {
            const IconComp = item.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                  isActive
                    ? 'bg-white border-zinc-300 shadow-xl shadow-zinc-200/60 translate-x-1'
                    : 'bg-white/60 border-zinc-200 hover:bg-white hover:border-zinc-300 text-zinc-600'
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-zinc-100 border-zinc-300 text-zinc-900' : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                      {item.step} // {item.status}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold uppercase tracking-tight ${isActive ? 'text-zinc-950' : 'text-zinc-800'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Live Interactive Pipeline Simulator Console */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-2xl shadow-zinc-200/80">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                Pipeline Monitor // Step {current.step}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600">
              {current.status}
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-1">
                Active Execution Phase
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900">
                {current.title}
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Live Telemetry Output Box */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
                <span>Source: {current.detailSnippet.source}</span>
                <span className="text-zinc-700 font-semibold">Similarity: {current.detailSnippet.similarity}</span>
              </div>
              <p className="text-zinc-800 font-sans text-sm italic leading-relaxed">
                "{current.detailSnippet.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Vector Index: HNSW-Cosine (1536-dim)
              </span>
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                <span>Deploy RAG for Your Business</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}