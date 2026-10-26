import React, { useState } from 'react';
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
  X,
} from 'lucide-react';

export default function Services({ isDark }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const servicesData = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Digital Marketing & Growth',
      category: 'Revenue Acceleration',
      shortDesc: 'Grow visibility, generate high-intent leads, and maximize marketing conversion rates.',
      deliverablesCount: '13 Deliverables',
      commissionBtn: 'COMMISSION DIGITAL SCOPE',
      impactText:
        'We construct data-engineered acquisition funnels and technical SEO architectures designed to capture high-intent commercial demand. Every campaign is monitored for verifiable return on ad spend and sustained organic prominence.',
      deliverables: [
        'Digital Marketing Strategy',
        'Search Engine Optimization (SEO)',
        'Technical, On-Page & Off-Page SEO',
        'Local SEO & Google Business Profile',
        'Google Ads & Meta Ads Management',
        'Social Media Marketing & Management',
        'Content Marketing & Strategy',
        'Email Marketing & Automation',
        'Lead Generation & Sales Funnels',
        'Conversion Rate Optimization (CRO)',
        'Landing Page Optimization',
        'Marketing Analytics & Reporting',
        'Brand Positioning & Online Reputation',
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
        'Business & Corporate Websites',
        'Premium Portfolio & Personal Websites',
        'Landing Pages & Campaign Websites',
        'Custom React & Modern Web Development',
        'Full-Stack Web Applications',
        'UI/UX Design & Figma Prototyping',
        'E-commerce & Online Stores',
        'SaaS Platforms & Web Applications',
        'Admin Panels & Analytics Dashboards',
        'Booking, Appointment & CRM Systems',
        'Custom APIs & Third-Party Integrations',
        'CMS & Dynamic Websites',
        'Website Redesign & Modernization',
        'Performance, Accessibility & SEO Optimization',
        'Website Maintenance & Support',
      ],
    },
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
        'AI-Powered Website Features',
        'Custom AI Chatbots & Virtual Assistants',
        'LLM API Integration',
        'OpenAI, Gemini and Other Model Integrations',
        'Machine Learning Model Integration',
        'Predictive Analytics & Forecasting',
        'Personalized Recommendations',
        'AI-Powered Search',
        'Intelligent Form & Document Processing',
        'Natural Language Processing (NLP)',
        'AI Content Assistance',
        'Customer Support Automation',
        'AI-Powered Product Discovery',
        'AI-Based Classification & Data Extraction',
        'Model Deployment & Inference APIs',
      ],
    },
    {
      id: 4,
      icon: BrainCircuit,
      title: 'LLM, RAG & Knowledge-Based AI',
      category: 'Deterministic AI',
      shortDesc: 'Build AI assistants that answer questions using your verified business documentation.',
      deliverablesCount: '15 Deliverables',
      commissionBtn: 'COMMISSION LLM, SCOPE',
      impactText:
        'Eliminate AI hallucinations by grounding Large Language Models in your company’s private documentation, product databases, and legal records. We build hybrid dense-sparse vector pipelines with verified source citations and strict enterprise guardrails.',
      deliverables: [
        'Retrieval-Augmented Generation (RAG) Systems',
        'Website Knowledge-Base Chatbots',
        'PDF, Document & File Question-Answering',
        'Company Knowledge Assistants',
        'Product Catalogue & Documentation Chatbots',
        'LLM-Powered Customer Support',
        'Semantic & Hybrid Search',
        'Text Embeddings & Vector Search',
        'Vector Database Integration',
        'Document Ingestion & Chunking Pipelines',
        'Retrieval, Reranking & Context Management',
        'Source-Cited AI Responses',
        'Private Knowledge Retrieval Workflows',
        'RAG Evaluation & Response Quality Testing',
        'Knowledge Base Management Interfaces',
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
        'Deploy autonomous software agents equipped with tools, CRM connectors, and human-in-the-loop oversight. Our agent systems perform complex multi-step research, qualify inbound prospects, and sync enterprise systems without manual overhead.',
      deliverables: [
        'AI Agents & Tool-Using Assistants',
        'Multi-Step AI Workflows',
        'Lead Qualification & Routing',
        'Automated Customer Support',
        'CRM & Helpdesk Integration',
        'Email and Business Process Automation',
        'AI-Powered Research & Reporting',
        'API-Based Workflow Automation',
        'Human Approval & Escalation Workflows',
        'Agent Evaluation & Monitoring',
        'Business System Integrations',
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
        'Architecting high-converting digital storefronts that blend frictionless checkout UX with AI-assisted product discovery. We build scalable inventory backends, multi-currency payment pipelines, and conversational shopping assistants.',
      deliverables: [
        'Custom E-commerce Development',
        'Product Catalogue & Inventory Systems',
        'Secure Payment Gateway Integration',
        'Order & Customer Management',
        'AI Product Recommendation Systems',
        'Conversational Product Search',
        'AI Shopping Assistants',
        'Automated Product Descriptions',
        'Intelligent Customer Support',
        'Order Status Chatbots',
        'Sales Analytics & Reporting',
        'Admin Dashboards & Business Automation',
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
        'Engineered for sub-second global latency, fault resilience, and zero maintenance drag. We configure serverless cloud runtimes, relational schemas (PostgreSQL), role-based auth, and automated continuous delivery pipelines.',
      deliverables: [
        'REST API Development & Integration',
        'Backend Architecture',
        'PostgreSQL, MySQL & Database Design',
        'Supabase & Firebase Integration',
        'Authentication & Authorization',
        'Cloudflare Pages & Workers Deployment',
        'Serverless Application Architecture',
        'Third-Party API Integrations',
        'Payment, Email & Notification Services',
        'CI/CD & Deployment Automation',
        'Performance Monitoring & Maintenance',
        'Security, Backup & Reliability Improvements',
      ],
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      category: 'Decision Science',
      shortDesc: 'Actionable executive dashboards, automated data pipelines, and BI reporting.',
      deliverablesCount: '12 Deliverables',
      commissionBtn: 'COMMISSION DATA SCOPE',
      impactText:
        'Transform scattered organizational metrics into real-time decision dashboards. We structure normalized data lakes, automated ETL pipelines, and executive KPI reporting systems.',
      deliverables: [
        'Executive & Operational BI Dashboards',
        'Power BI & Custom Visual Reports',
        'Automated ETL & Data Cleansing Pipelines',
        'KPI Metric Formulations (DAX / SQL)',
        'Customer Retention & Churn Analytics',
        'Sales Funnel & Revenue Attribution',
        'Inventory & Supply Chain Visualizers',
        'Scheduled Automated Data Refreshes',
        'Role-Based Dashboard Access Control',
        'Data Governance & Quality Assurance',
        'Predictive Analytics Integration',
        'Embedded Client-Facing Analytics',
      ],
    },
    {
      id: 9,
      icon: Palette,
      title: 'Brand Identity & UI/UX Design',
      category: 'Visual Craft',
      shortDesc: 'High-end design systems, tactile brand identities, and Figma component libraries.',
      deliverablesCount: '14 Deliverables',
      commissionBtn: 'COMMISSION BRANDING SCOPE',
      impactText:
        'Formulate unmistakable brand identities and scalable visual systems that command market authority. We craft atomic design libraries, motion choreographies, and high-fidelity interaction prototypes.',
      deliverables: [
        'Complete Brand Identity & Guidelines',
        'Design Systems & Component Libraries',
        'Figma High-Fidelity UI Prototyping',
        'Tactile Micro-Interactions & Motion',
        'Typography & Token Architectures',
        'User Journey & Flow Mapping',
        'Usability Testing & UX Audits',
        'Design-to-Code Developer Handoff',
        'Iconography & Visual Asset Suites',
        'Mobile-First Responsive Layouts',
        'Accessibility (WCAG) Color Standards',
        'Marketing Collateral & Pitch Assets',
        'Interactive Styleguides',
        'Multi-Theme Color Matrices',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Header (Pills removed) */}
      <div className="flex flex-col items-center text-center mb-16">
        <span
          className={`text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border transition-colors ${
            isDark
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
              : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'
          }`}
        >
          Core Practices & Deliverables
        </span>

        <h2
          className={`text-3xl sm:text-5xl font-black tracking-tight max-w-3xl leading-tight ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Comprehensive Practice & Deliverables
        </h2>
        <p className={`mt-4 text-sm sm:text-base max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Click any card to inspect the full strategic approach and itemized scope of deliverables.
        </p>
      </div>

      {/* 2. Grid of 9 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => setActiveModalService(service)}
              className={`group rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700 hover:shadow-[0_12px_36px_rgba(0,0,0,0.7)]'
                  : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]'
              }`}
            >
              <div>
                {/* Header Row: Icon + Deliverables Count */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-3 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-800 text-indigo-400 group-hover:border-zinc-700'
                        : 'bg-indigo-50 border-indigo-100 text-indigo-600 group-hover:border-indigo-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    {service.deliverablesCount}
                  </span>
                </div>

                {/* Category Pill */}
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold border inline-block mb-3 ${
                    isDark
                      ? 'bg-purple-950/60 border-purple-800/60 text-purple-300'
                      : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}
                >
                  {service.category}
                </span>

                {/* Service Title */}
                <h3
                  className={`text-xl font-bold tracking-tight mb-2.5 transition-colors ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400 group-hover:text-blue-500 transition-colors">
                  Inspect Scope & Impact
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-zinc-900 text-zinc-300 group-hover:bg-white group-hover:text-zinc-950'
                      : 'bg-zinc-100 text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Detailed Scope Modal/Overlay */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border transition-all shadow-2xl ${
              isDark
                ? 'bg-zinc-950 border-zinc-800 text-zinc-100'
                : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Service Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`p-3.5 rounded-2xl border ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-indigo-400'
                    : 'bg-indigo-50 border-indigo-100 text-indigo-600'
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
              className={`p-6 sm:p-7 rounded-2xl border my-6 ${
                isDark
                  ? 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300'
                  : 'bg-purple-50/40 border-purple-100 text-zinc-800'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-500 font-bold block mb-2">
                STRATEGIC APPROACH & IMPACT
              </span>
              <p className="text-sm sm:text-base leading-relaxed">{activeModalService.impactText}</p>
            </div>

            {/* Complete Scope of Deliverables (3-Column Grid with Checkmarks) */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  COMPLETE SCOPE OF DELIVERABLES ({activeModalService.deliverables.length})
                </span>
                <span className="text-xs text-zinc-400 italic">
                  Bespoke architecture configured per engagement
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeModalService.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Commission Bar */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                Ready to implement {activeModalService.title}? We deliver production milestones weekly.
              </span>
              <a
                href="#contact"
                onClick={() => setActiveModalService(null)}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>{activeModalService.commissionBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}