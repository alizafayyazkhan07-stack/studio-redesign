import React from 'react';
import { ArrowRight, Code, Cpu, Database, Globe, Layers, Server, Shield, Sparkles, Terminal } from 'lucide-react';

export default function Services({ onOpenBrief }) {
  const servicesList = [
    {
      number: "01",
      tag: "PREDICTIVE SYSTEMS",
      title: "AI & Machine Learning Integration",
      desc: "Turn conventional websites into intelligent, learning-driven applications.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "02",
      tag: "FLAGSHIP ENGINEERING",
      title: "Website Design & Development",
      desc: "Design and build modern, responsive, high-performance web platforms.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "03",
      tag: "DETERMINISTIC AI",
      title: "LLM, RAG & Knowledge-Based AI",
      desc: "Build AI assistants that answer questions using your verified business documentation.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "04",
      tag: "AUTONOMOUS OPERATIONS",
      title: "AI Agents & Business Automation",
      desc: "Automate repetitive tasks, connect APIs, and coordinate autonomous workflows.",
      icon: Terminal,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "05",
      tag: "CONVERSION COMMERCE",
      title: "E-Commerce & Intelligent Web Solutions",
      desc: "Build high-converting storefronts with intelligent product discovery.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "06",
      tag: "CLOUD INFRASTRUCTURE",
      title: "Backend, Cloud & Integrations",
      desc: "Connect, deploy, and maintain resilient digital backends and cloud systems.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "07",
      tag: "REVENUE INTELLIGENCE",
      title: "Data Analytics & Business Intelligence",
      desc: "Transform business data into actionable insights.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "08",
      tag: "CREATIVE IDENTITY",
      title: "Branding, UI/UX & Creative Experiences",
      desc: "Create a consistent identity and distinctive digital presence.",
      icon: Sparkles,
      image: "src/assets/watermarked_img_1383520183123621340.png"
    },
    {
      number: "09",
      tag: "REVENUE ACCELERATION",
      title: "Digital Marketing & Growth",
      desc: "Grow visibility, generate high-intent leads, and maximize marketing conversion rates.",
      icon: Shield,
      image: "src/assets/watermarked_img_4005815292894050755.png"
    }
  ];

  return (
    <section id="services" className="py-28 max-w-full bg-[#f5f5f7] text-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-sm inline-block">
          Core Practices & Deliverables
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight">
          Comprehensive Practice & Deliverables.
        </h2>
      </div>

      {/* Clean Horizontal Scrolling Container */}
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 sm:px-6">
        <div className="flex gap-6 pb-6 pt-2 w-max snap-x snap-mandatory">
          {servicesList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="w-[340px] sm:w-[400px] shrink-0 snap-start bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Box */}
                <div className="h-48 w-full bg-zinc-100 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Box */}
                <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        {item.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <div className="inline-block p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <button
                      type="button"
                      onClick={onOpenBrief}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer"
                    >
                      <span>Inspect Scope & Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Cross-Functional Scope Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold inline-block">
              Full-Spectrum Capability
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-900">
              Need a hybrid cross-functional scope across multiple disciplines?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We design integrated retainers combining development, AI engineering, and digital growth.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBrief}
            className="px-6 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-md shrink-0 cursor-pointer"
          >
            Commission Custom Technical Scope
          </button>
        </div>
      </div>

    </section>
  );
}