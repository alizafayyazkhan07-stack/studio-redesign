import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Code2, 
  Cpu, 
  Database, 
  Bot, 
  ShoppingBag, 
  Cloud, 
  BarChart3, 
  Palette,
  CheckCircle2
} from 'lucide-react';

export default function ServicesCarousel({ onOpenBrief }) {
  const scrollRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: "01",
      tag: "REVENUE ACCELERATION",
      title: "DIGITAL MARKETING & GROWTH",
      desc: "Growth built on research, search, and measured omnichannel conversion funnels.",
      icon: <Layers className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Full-Funnel Acquisition Strategy", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80" },
        { name: "Search & Performance Media", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
        { name: "Conversion Rate Optimization (CRO)", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
        { name: "Retention & Lifecycle Campaigns", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "02",
      tag: "FLAGSHIP ENGINEERING",
      title: "WEBSITE DESIGN & DEVELOPMENT",
      desc: "Websites designed with care and engineered for high-performance across every device.",
      icon: <Code2 className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Bespoke Design Systems", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80" },
        { name: "Responsive React / Next.js Platforms", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" },
        { name: "Sub-Second Speed & Web Vitals Optimization", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80" },
        { name: "Headless CMS Integration", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "03",
      tag: "PREDICTIVE SYSTEMS",
      title: "AI & MACHINE LEARNING INTEGRATION",
      desc: "Turn business data into accurate prediction models and dynamic real-time insights.",
      icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Custom Predictive Modeling", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80" },
        { name: "Production ML Pipelines", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80" },
        { name: "Real-Time Inference APIs", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
        { name: "Evaluation & Monitoring Dashboards", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "04",
      tag: "DETERMINISTIC AI",
      title: "LLM, RAG & KNOWLEDGE-BASED AI",
      desc: "Deterministic AI systems answering directly from verified company documents and source files.",
      icon: <Database className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Enterprise Vector Databases", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80" },
        { name: "Hybrid Search & Semantic RAG", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80" },
        { name: "Grounded Document Q&A Interfaces", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80" },
        { name: "Citation & Truth Verification Layer", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "05",
      tag: "AUTONOMOUS OPERATIONS",
      title: "AI AGENTS & BUSINESS AUTOMATION",
      desc: "Orchestrated autonomous agents that lift routine workloads with human approval built-in.",
      icon: <Bot className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Multi-Agent Orchestrators", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80" },
        { name: "Human-in-the-Loop Approval Workflows", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80" },
        { name: "Automated Ticket & Report Routing", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80" },
        { name: "Tamper-Evident Audit Logs", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "06",
      tag: "CONVERSION COMMERCE",
      title: "E-COMMERCE & INTELLIGENT WEB SOLUTIONS",
      desc: "Storefronts and transactional flows engineered to make discovery and checkout effortless.",
      icon: <ShoppingBag className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Custom Headless Storefronts", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=80" },
        { name: "Frictionless Single-Click Checkout", image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=600&auto=format&fit=crop&q=80" },
        { name: "Real-Time Stock & ERP Sync", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80" },
        { name: "AI Personalization Engines", image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "07",
      tag: "CLOUD INFRASTRUCTURE",
      title: "BACKEND, CLOUD & INTEGRATIONS",
      desc: "Reliable API gateways, cloud microservices, and distributed databases for heavy traffic.",
      icon: <Cloud className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Scalable API Gateways & Microservices", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80" },
        { name: "Fault-Tolerant Distributed DBs", image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?w=600&auto=format&fit=crop&q=80" },
        { name: "Automated Backup & Failover Networks", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
        { name: "Real-Time Latency Monitoring", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "08",
      tag: "REVENUE INTELLIGENCE",
      title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
      desc: "Clean data pipelines and telemetry converting raw interactions into decisive leadership charts.",
      icon: <BarChart3 className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "ETL & Automated Data Cleansing", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80" },
        { name: "Executive PowerBI & DAX Portals", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
        { name: "Predictive Demand & Cohort Forecasts", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
        { name: "Live Revenue & Conversion Metrics", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80" }
      ]
    },
    {
      id: "09",
      tag: "CREATIVE IDENTITY",
      title: "BRANDING, UI/UX & CREATIVE EXPERIENCES",
      desc: "Memorable design systems, typography grids, and bespoke interactive user interfaces.",
      icon: <Palette className="w-5 h-5 text-zinc-800" />,
      deliverables: [
        { name: "Interactive Design Systems & Figma Kits", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80" },
        { name: "Premium Typography & Geometry Guides", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80" },
        { name: "Micro-Interactions & Motion Choreography", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
        { name: "Complete Brand Voice Guidelines", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80" }
      ]
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-semibold">
              EXPERTISE & PRACTICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              09 Core Capabilities
            </h2>
            <p className="text-zinc-600 text-sm mt-1 max-w-xl">
              Each practice delivers dedicated digital architecture. Click any practice to expand and inspect its scope and visual deliverables.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => {
            const isExpanded = expandedCard === service.id;

            return (
              <div
                key={service.id}
                className={`flex-shrink-0 snap-start bg-white border border-zinc-200/90 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between ${
                  isExpanded ? 'w-[340px] sm:w-[480px]' : 'w-[320px] sm:w-[360px]'
                }`}
              >
                {/* Main Card Body (No top image, clean minimalist header) */}
                <div className="p-6 sm:p-7">
                  
                  {/* Tag and ID */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-zinc-400">
                      {service.id}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-semibold uppercase">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center mb-5">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Expanded Deliverables Section with Images */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-zinc-100 space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                          Scope & Deliverables
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {service.deliverables.length} Deliverables
                        </span>
                      </div>

                      {/* Deliverables Grid with Images */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {service.deliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className="group/item rounded-xl border border-zinc-100 bg-zinc-50/70 p-2.5 hover:bg-zinc-100 transition-colors"
                          >
                            <div className="w-full h-24 rounded-lg overflow-hidden mb-2 bg-zinc-200">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                              <span className="text-xs font-medium text-zinc-800 leading-tight">
                                {item.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Brief CTA */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={onOpenBrief}
                          className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all cursor-pointer"
                        >
                          <span>Brief This Discipline</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Button */}
                <div className="px-6 py-4 bg-zinc-50/80 border-t border-zinc-100 rounded-b-[28px] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-black transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Scope" : "Inspect Scope & Deliverables"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBrief}
                    className="p-1.5 rounded-full hover:bg-zinc-200/70 text-zinc-700 transition-colors cursor-pointer"
                    title="Start Brief"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}