import React, { useRef, useState } from 'react';
import {
  TrendingUp,
  Layout,
  Cpu,
  BrainCircuit,
  Bot,
  ShoppingBag,
  Cloud,
  BarChart3,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Info,
  Check,
  Target,
} from 'lucide-react';

export default function Services({ isDark, onOpenBrief }) {
  const scrollRef = useRef(null);
  const [activeModalService, setActiveModalService] = useState(null);
  const [selectedDeliverable, setSelectedDeliverable] = useState(null);

  // Ordered strictly as requested: AI first, Digital Marketing last, with high-level Lucide icons
  const servicesData = [
    {
      id: 3,
      icon: Cpu,
      title: 'AI & Machine Learning Integration',
      category: 'Predictive Systems',
      shortDesc: 'Turn conventional websites into intelligent, learning-driven applications.',
      deliverablesCount: '15 Deliverables',
      commissionBtn: 'COMMISSION AI SCOPE',
      impactText:
        'Bridge the divide between experimental AI and dependable business software. We integrate real-time inference APIs, custom classification models, and predictive algorithms into user interfaces to automate decisions and personalize customer journeys.',
      deliverables: [
        {
          name: 'AI-Powered Website Features',
          description: 'In-browser machine learning features that adapt website interfaces in real time.',
          features: ['Client-side machine learning inference with zero latency lag', 'Smart form auto-completion and predictive input validation'],
          techStack: ['TensorFlow.js', 'Vercel AI SDK', 'React Hooks'],
          outcome: 'Engaging, modern digital interfaces that adapt to user behavior in real time.',
        },
        {
          name: 'Custom AI Chatbots & Virtual Assistants',
          description: 'Tailored conversational agents trained on your products, company policies, and FAQs.',
          features: ['Streaming token responses via WebSockets', 'Context-aware session memory with automated summarization'],
          techStack: ['OpenAI Assistants API', 'LangChain', 'WebSocket'],
          outcome: '24/7 client engagement that qualifies inbound inquiries without human intervention.',
        },
      ],
    },
    {
      id: 2,
      icon: Layout,
      title: 'Website Design & Development',
      category: 'Flagship Engineering',
      shortDesc: 'Design and build modern, responsive, high-performance web platforms.',
      deliverablesCount: '15 Deliverables',
      commissionBtn: 'COMMISSION WEBSITE SCOPE',
      impactText:
        'We craft bespoke web platforms that unify tactile visual luxury with bulletproof engineering. Powered by React, Vite, and clean micro-interactions, our platforms deliver sub-second response times and effortless cross-device performance.',
      deliverables: [
        {
          name: 'Business & Corporate Websites',
          description: 'Enterprise digital headquarters designed to project authority and convert institutional prospects.',
          features: ['Bespoke visual architecture with tailored grid layouts', 'Multi-page informational hierarchy'],
          techStack: ['React 19', 'Next.js', 'Tailwind CSS'],
          outcome: 'Institutional-grade credibility and reliable client trust.',
        },
      ],
    },
    {
      id: 4,
      icon: BrainCircuit,
      title: 'LLM, RAG & Knowledge-Based AI',
      category: 'Deterministic AI',
      shortDesc: 'Build AI assistants that answer questions using your verified business documentation.',
      deliverablesCount: '15 Deliverables',
      commissionBtn: 'COMMISSION LLM SCOPE',
      impactText:
        'Eliminate AI hallucinations by grounding Large Language Models in your company’s private documentation, product databases, and legal records.',
      deliverables: [
        {
          name: 'Retrieval-Augmented Generation (RAG) Systems',
          description: 'Enterprise question-answering systems that ground LLMs directly in your company documentation.',
          features: ['Dense vector embeddings matched against user queries', 'Verifiable source footnotes linked to raw document pages'],
          techStack: ['LangChain', 'LlamaIndex', 'Pinecone', 'OpenAI'],
          outcome: 'Elimination of hallucinations with 100% auditable source citations.',
        },
      ],
    },
    {
      id: 5,
      icon: Bot,
      title: 'AI Agents & Business Automation',
      category: 'Autonomous Operations',
      shortDesc: 'Automate repetitive tasks, connect APIs, and coordinate autonomous workflows.',
      deliverablesCount: '11 Deliverables',
      commissionBtn: 'COMMISSION AGENTS SCOPE',
      impactText:
        'Deploy autonomous software agents equipped with tools, CRM connectors, and human-in-the-loop oversight.',
      deliverables: [
        {
          name: 'AI Agents & Tool-Using Assistants',
          description: 'Autonomous LLM agents that execute external code, query databases, and call third-party APIs.',
          features: ['Deterministic tool-calling protocols verifying argument validity', 'Loop control mechanisms preventing infinite execution'],
          techStack: ['LangGraph', 'CrewAI', 'OpenAI Function Calling'],
          outcome: 'Autonomous execution of multi-step digital workflows.',
        },
      ],
    },
    {
      id: 6,
      icon: ShoppingBag,
      title: 'E-Commerce & Intelligent Web Solutions',
      category: 'Conversion Commerce',
      shortDesc: 'Build high-converting storefronts with intelligent product discovery.',
      deliverablesCount: '12 Deliverables',
      commissionBtn: 'COMMISSION E-COMMERCE SCOPE',
      impactText:
        'Architecting high-converting digital storefronts that blend frictionless checkout UX with AI-assisted product discovery.',
      deliverables: [
        {
          name: 'Custom E-commerce Development',
          description: 'Bespoke storefronts engineered with responsive grids and instant page transitions.',
          features: ['Custom UI components designed for brand differentiation', 'Sub-second page navigation powered by edge pre-rendering'],
          techStack: ['React', 'Next.js', 'Tailwind CSS'],
          outcome: 'Luxury brand presentation with zero boilerplate template feel.',
        },
      ],
    },
    {
      id: 7,
      icon: Cloud,
      title: 'Backend, Cloud & Integrations',
      category: 'Cloud Infrastructure',
      shortDesc: 'Connect, deploy, and maintain resilient digital backends and cloud systems.',
      deliverablesCount: '12 Deliverables',
      commissionBtn: 'COMMISSION BACKEND SCOPE',
      impactText:
        'Engineered for sub-second global latency, fault resilience, and zero maintenance drag.',
      deliverables: [
        {
          name: 'REST API Development & Integration',
          description: 'High-throughput, type-safe API backends built with clean documentation.',
          features: ['OpenAPI / Swagger documentation generated automatically', 'Strict input validation using Pydantic or Zod schemas'],
          techStack: ['FastAPI', 'Node.js Express', 'Swagger'],
          outcome: 'Clean, reliable communication between frontends and backend services.',
        },
      ],
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'DATA ANALYTICS & BUSINESS INTELLIGENCE',
      category: 'Revenue Intelligence',
      shortDesc: 'Transform business data into actionable insights.',
      deliverablesCount: '10 Deliverables',
      commissionBtn: 'COMMISSION DATA SCOPE',
      impactText:
        'Consolidate fragmented business metrics into unified, real-time executive dashboards.',
      deliverables: [
        {
          name: 'Python & SQL Data Analysis',
          description: 'Advanced querying, cohort analysis, and statistical processing transforming raw operational data.',
          features: ['Complex SQL window functions, CTEs, and relational joins', 'Python Pandas & NumPy exploratory data analysis pipelines'],
          techStack: ['Python', 'Pandas', 'PostgreSQL'],
          outcome: 'Rigorous data extraction and deep statistical insights.',
        },
      ],
    },
    {
      id: 9,
      icon: Palette,
      title: 'BRANDING, UI/UX & CREATIVE EXPERIENCES',
      category: 'Creative Identity',
      shortDesc: 'Create a consistent identity and distinctive digital presence.',
      deliverablesCount: '10 Deliverables',
      commissionBtn: 'COMMISSION BRANDING SCOPE',
      impactText:
        'Command immediate market authority with an unmistakable visual signature.',
      deliverables: [
        {
          name: 'Brand Identity & Logo Design',
          description: 'Distinctive visual identities including primary and secondary logo marks.',
          features: ['Vector logo design optimized for favicon scale up to billboard sizing', 'Curated color token matrices with balanced dark/light mode counterparts'],
          techStack: ['Figma', 'Adobe Illustrator'],
          outcome: 'A memorable visual presence that establishes market authority.',
        },
      ],
    },
    {
      id: 1,
      icon: TrendingUp,
      title: 'Digital Marketing & Growth',
      category: 'Revenue Acceleration',
      shortDesc: 'Grow visibility, generate high-intent leads, and maximize marketing conversion rates.',
      deliverablesCount: '13 Deliverables',
      commissionBtn: 'COMMISSION DIGITAL SCOPE',
      impactText:
        'We construct data-engineered acquisition funnels and technical SEO architectures designed to capture high-intent commercial demand.',
      deliverables: [
        {
          name: 'Digital Marketing Strategy',
          description: 'A comprehensive full-funnel commercial growth blueprint.',
          features: ['Omnichannel attribution and conversion path modeling', 'Competitor market-share gap analysis'],
          techStack: ['Google Tag Manager', 'PostHog', 'Mixpanel'],
          outcome: 'Predictable user acquisition pipelines with documented CAC targets.',
        },
      ],
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenScope = (service) => {
    setActiveModalService(service);
    setSelectedDeliverable(service.deliverables[0] || null);
  };

  const handleCloseScope = () => {
    setActiveModalService(null);
    setSelectedDeliverable(null);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Header & Apple-Style Carousel Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span
            className={`text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border transition-colors inline-block ${
              isDark
                ? 'bg-zinc-900/80 border-zinc-800 text-purple-300'
                : 'bg-white border-zinc-200 text-purple-700 shadow-sm'
            }`}
          >
            Core Practices & Deliverables
          </span>
          <h2
            className={`text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Comprehensive Practice <br />
            <span className={isDark ? 'text-zinc-400 font-normal' : 'text-zinc-500 font-normal'}>
              & Deliverables.
            </span>
          </h2>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => scroll('left')}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              isDark 
                ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200' 
                : 'border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 shadow-sm'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              isDark 
                ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200' 
                : 'border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 shadow-sm'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. Horizontal Apple-Style Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-none focus:outline-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {servicesData.map((service) => {
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => handleOpenScope(service)}
              className={`flex-shrink-0 w-[320px] sm:w-[380px] rounded-[32px] p-8 snap-start border flex flex-col justify-between transition-all duration-300 cursor-pointer hover:-translate-y-1.5 shadow-xl ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800/80 hover:border-purple-500/50 shadow-purple-950/20'
                  : 'bg-white/90 border-zinc-200 hover:border-purple-400/60 shadow-zinc-300/50'
              }`}
            >
              {/* Top Card Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${
                    isDark ? 'bg-purple-950/40 border-purple-800/50 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${
                    isDark ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                  }`}>
                    {service.deliverablesCount}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight uppercase leading-snug">
                    {service.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400 group-hover:text-purple-400 transition-colors">
                  Inspect Scope & Deliverables
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-zinc-800 text-zinc-300 group-hover:bg-purple-600 group-hover:text-white'
                      : 'bg-zinc-100 text-zinc-600 group-hover:bg-purple-600 group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Cross-Functional Banner */}
      <div
        className={`mt-16 rounded-[28px] p-8 sm:p-10 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm ${
          isDark
            ? 'bg-zinc-950/80 border-zinc-800/90 text-white'
            : 'bg-white border-zinc-200 text-zinc-950'
        }`}
      >
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Full-Spectrum Capability</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-2">
            NEED A HYBRID CROSS-FUNCTIONAL SCOPE ACROSS MULTIPLE DISCIPLINES?
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            We design integrated retainers combining development, AI engineering, and digital growth.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenBrief}
          className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all flex-shrink-0 cursor-pointer"
        >
          <span>COMMISSION CUSTOM TECHNICAL SCOPE</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4. Detailed Scope Modal with Deep Backdrop Blur */}
      {activeModalService && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl overflow-y-auto overscroll-contain animate-fade-in"
        >
          <div
            data-lenis-prevent
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl p-6 sm:p-10 border transition-all shadow-[0_20px_70px_rgba(0,0,0,0.9)] ${
              isDark
                ? 'bg-[#0b0c10]/95 border-zinc-800 text-zinc-100 shadow-purple-950/20'
                : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-400/20'
            }`}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseScope}
              className="absolute top-6 right-6 p-2 rounded-full border border-zinc-700/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Service Header */}
            <div className="flex items-center space-x-4 mb-5 pr-10">
              <div
                className={`p-3.5 rounded-2xl border ${
                  isDark
                    ? 'bg-purple-950/40 border-purple-900 text-purple-400'
                    : 'bg-purple-50 border-purple-100 text-purple-600'
                }`}
              >
                {React.createElement(activeModalService.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                    {activeModalService.title}
                  </h3>
                  <span
                    className={`text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold border ${
                      isDark
                        ? 'bg-purple-950/60 border-purple-800/60 text-purple-300'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    {activeModalService.category}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {activeModalService.shortDesc}
                </p>
              </div>
            </div>

            {/* Strategic Approach & Impact Box */}
            <div
              className={`p-5 sm:p-7 rounded-2xl border my-5 ${
                isDark
                  ? 'bg-purple-950/20 border-purple-900/60 text-zinc-300'
                  : 'bg-purple-50/50 border-purple-100 text-zinc-800'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1.5">
                STRATEGIC APPROACH & IMPACT
              </span>
              <p className="text-sm sm:text-base leading-relaxed">{activeModalService.impactText}</p>
            </div>

            {/* Deliverables Explorer: Left List + Right Detailed Inspector */}
            <div className="my-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Interactive Deliverables Scope ({activeModalService.deliverables.length})</span>
                </span>
                <span className="text-xs text-purple-400 font-medium">
                  Click any deliverable to view full technical specification
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left: Scrollable Deliverables Pills */}
                <div
                  data-lenis-prevent
                  className="lg:col-span-6 grid grid-cols-1 gap-2.5 max-h-[460px] overflow-y-auto overscroll-contain pr-2"
                >
                  {activeModalService.deliverables.map((item, idx) => {
                    const isSelected = selectedDeliverable?.name === item.name;

                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedDeliverable(item)}
                        className={`flex items-start text-left space-x-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-purple-600/20 border-purple-500 text-white shadow-md'
                              : 'bg-purple-50 border-purple-500 text-purple-950 shadow-sm'
                            : isDark
                              ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-300 hover:bg-white'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isSelected ? 'text-purple-400' : 'text-purple-600'
                          }`}
                        />
                        <div className="flex-1">
                          <span className="text-xs font-semibold block leading-snug">{item.name}</span>
                          <span className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Technical Inspector / Specification Panel */}
                <div className="lg:col-span-6">
                  {selectedDeliverable ? (
                    <div
                      data-lenis-prevent
                      className={`max-h-[460px] overflow-y-auto overscroll-contain flex flex-col justify-between p-6 rounded-2xl border transition-all ${
                        isDark
                          ? 'bg-gradient-to-br from-zinc-900/90 to-zinc-950 border-zinc-800 text-zinc-200'
                          : 'bg-zinc-50/90 border-zinc-200 text-zinc-800'
                      }`}
                    >
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
                          <Info className="w-3.5 h-3.5" />
                          <span>Deliverable Specification</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                          {selectedDeliverable.name}
                        </h4>

                        {/* Extended Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {selectedDeliverable.description}
                        </p>

                        {/* Key Capabilities */}
                        {selectedDeliverable.features && selectedDeliverable.features.length > 0 && (
                          <div className="mb-5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-2.5">
                              Key Capabilities & Implementation
                            </span>
                            <div className="space-y-2">
                              {selectedDeliverable.features.map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-start space-x-2">
                                  <Check className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5" />
                                  <span className={`text-xs leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                    {feat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Implementation Stack */}
                        <div className="mb-5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-2">
                            Production Architecture & Tools
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedDeliverable.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                                  isDark
                                    ? 'bg-zinc-800/80 border-zinc-700 text-purple-300'
                                    : 'bg-white border-zinc-300 text-purple-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Deliverable Outcome */}
                        <div className="pt-3 border-t border-zinc-800/60 dark:border-zinc-800">
                          <div className="flex items-center space-x-1.5 text-purple-400 text-[10px] font-mono uppercase tracking-wider font-bold mb-1">
                            <Target className="w-3.5 h-3.5" />
                            <span>Strategic Commercial Outcome</span>
                          </div>
                          <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                            {selectedDeliverable.outcome}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>Milestone Phase: Configured</span>
                        <span className="text-purple-400 font-bold">Production Ready</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Bottom Commission Bar */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                Ready to implement {activeModalService.title}? We deliver production milestones weekly.
              </span>
              <button
                type="button"
                onClick={() => {
                  handleCloseScope();
                  onOpenBrief();
                }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
              >
                <span>{activeModalService.commissionBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}