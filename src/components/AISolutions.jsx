import React from 'react';
import { Cpu, ArrowRight, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

export default function AISolutions({ onOpenBrief }) {
  const cards = [
    {
      title: "Deterministic Knowledge RAG",
      desc: "Connect enterprise documents with zero-hallucination vector pipelines and strict source grounding.",
      badge: "AI CORE",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" // Professional server/data vector architecture
    },
    {
      title: "Autonomous Agent Workflows",
      desc: "Automate complex multi-step processes, API coordination, and intelligent operations seamlessly.",
      badge: "AUTOMATION",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop" // Clean high-tech code matrix
    },
    {
      title: "High-Conversion E-Commerce AI",
      desc: "Intelligent product discovery, personalized recommendations, and dynamic checkout flows.",
      badge: "COMMERCE",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop" // Modern digital analytics dashboard
    },
    {
      title: "Neural UI/UX Interactions",
      desc: "Adaptive layouts and physics-based fluid typography responsive to user intent.",
      badge: "INTERFACE",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop" // Sleek workspace development setup
    }
  ];

  return (
    <section id="ai-solutions" className="py-28 max-w-full bg-[#f5f5f7] text-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-sm inline-block">
          AI & Intelligent Solutions
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight">
          Deterministic AI Engineered for Scale.
        </h2>
      </div>

      {/* Smooth Horizontal Scrolling Container */}
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 sm:px-6">
        <div className="flex gap-6 pb-6 pt-2 w-max snap-x snap-mandatory">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] shrink-0 snap-start bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Real Tech / Workspace Image Preview */}
                <div className="h-56 w-full overflow-hidden relative bg-zinc-900">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-900 font-bold shadow-sm">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="mb-4 inline-block p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100">
                    <button
                      type="button"
                      onClick={onOpenBrief}
                      className="text-xs font-bold text-zinc-900 hover:text-zinc-600 inline-flex items-center space-x-1.5 cursor-pointer transition-colors"
                    >
                      <span>Deploy Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}