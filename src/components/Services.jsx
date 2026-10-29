import React, { useState, useRef } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Layout, 
  Database, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Cloud, 
  BarChart3, 
  Palette, 
  ArrowUpRight 
} from 'lucide-react';

export default function Services({ onOpenBrief }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [expandedCards, setExpandedCards] = useState({
    "01": true, "02": true, "03": true, "04": true, 
    "05": true, "06": true, "07": true, "08": true, "09": true
  });

  const carouselRefs = useRef({});

  // Fallback handler if any remote photo fails
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80";
  };

  const servicesData = [
    // 01. AI & MACHINE LEARNING INTEGRATION (15 Deliverables)
    {
      id: "01",
      title: "AI & MACHINE LEARNING INTEGRATION",
      badge: "PREDICTIVE SYSTEMS",
      desc: "Turn conventional websites into intelligent applications.",
      icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      strategy: "Bridge the divide between experimental AI and dependable business software. We integrate real-time inference APIs, custom classification models, and predictive algorithms into user interfaces to automate decisions and personalize customer journeys.",
      ctaText: "COMMISSION AI SCOPE",
      deliverables: [
        { name: "AI-Powered Website Features", desc: "Dynamic interface elements adapting contextually to real-time user intent markers.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
        { name: "Custom AI Chatbots & Virtual Assistants", desc: "Natural language conversational agents trained on proprietary support workflows.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
        { name: "LLM API Integration", desc: "Production middleware connecting model endpoints with token usage telemetry and caching.", image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80" },
        { name: "OpenAI, Gemini and Other Model Integrations", desc: "Multi-provider model routing configured for latency balancing and failover resilience.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
        { name: "Machine Learning Model Integration", desc: "Embedding specialized scikit-learn, PyTorch, and TensorFlow inference pipelines into web portals.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" },
        { name: "Predictive Analytics & Forecasting", desc: "Time-series forecasting models anticipating replenishment windows and customer churn.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Personalized Recommendations", desc: "Collaborative filtering algorithms and real-time embedding matching for customer catalogs.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "AI-Powered Search", desc: "Semantic vector search engines that understand user context beyond exact keywords.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
        { name: "Intelligent Form & Document Processing", desc: "Automated OCR extraction, field validation, and classification pipelines processing PDFs.", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" },
        { name: "Natural Language Processing (NLP)", desc: "Sentiment classification, entity extraction, and multi-language translation services.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
        { name: "AI Content Assistance", desc: "Context-aware generation tools accelerating editorial copy and product metadata drafting.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80" },
        { name: "Customer Support Automation", desc: "Automated tier-1 resolution workflows resolving customer inquiries with verifiable answers.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
        { name: "AI-Powered Product Discovery", desc: "Visual search matching, conversational product advisors, and dynamic parameter filtering.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" },
        { name: "AI-Based Classification & Data Extraction", desc: "Unstructured data categorizers turning raw customer tickets into clean records.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
        { name: "Model Deployment & Inference APIs", desc: "Containerized model runtimes on edge infrastructure engineered for low latency.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 02. WEBSITE DESIGN & DEVELOPMENT (15 Deliverables)
    {
      id: "02",
      title: "WEBSITE DESIGN & DEVELOPMENT",
      badge: "FLAGSHIP ENGINEERING",
      desc: "Design and build modern, responsive digital experiences.",
      icon: <Layout className="w-5 h-5 text-zinc-800" />,
      strategy: "We craft bespoke web platforms that unify tactile visual luxury with bulletproof engineering. Powered by React 19, Next.js, and clean micro-interactions, our platforms deliver sub-second response times and effortless cross-device performance.",
      ctaText: "COMMISSION WEBSITE SCOPE",
      deliverables: [
        { name: "Business & Corporate Websites", desc: "Authoritative digital headquarters designed to communicate executive capabilities.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
        { name: "Premium Portfolio & Personal Websites", desc: "High-touch showcase portals featuring bespoke geometry, dynamic galleries, and motion.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
        { name: "Landing Pages & Campaign Websites", desc: "Conversion-optimized landing platforms engineered for rapid speed and lead capture.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "Custom React & Next.js Development", desc: "Modular frontend architecture utilizing modern component patterns and SSR for speed.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
        { name: "Full-Stack Web Applications", desc: "End-to-end applications with secure authentication and normalized transactional workflows.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
        { name: "UI/UX Design & Figma Prototyping", desc: "High-fidelity interactive wireframes, component design systems, and verified user flows.", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80" },
        { name: "E-commerce & Online Stores", desc: "Bespoke storefronts engineered with smooth catalog exploration and instant payment pipelines.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" },
        { name: "SaaS Platforms & Web Applications", desc: "Scalable software interfaces equipped with role-based permissions and billing funnels.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Admin Panels & Analytics Dashboards", desc: "Dense, functional control panels rendering operational controls and live telemetry.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
        { name: "Booking, Appointment & CRM Systems", desc: "Automated schedule coordination, calendar synchronization, and bi-directional customer data pipelines.", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80" },
        { name: "Custom APIs & Third-Party Integrations", desc: "Robust middleware microservices seamlessly connecting your frontend with external SaaS tools.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
        { name: "CMS & Dynamic Websites", desc: "Headless content backends that allow non-technical teams to publish dynamic updates easily.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" },
        { name: "Website Redesign & Modernization", desc: "Legacy code refactoring, visual refresh, responsive adaptation, and tech stack upgrades.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
        { name: "Performance, Accessibility & SEO Optimization", desc: "Targeted web vitals remediation, WCAG 2.1 compliance audits, and crawl enhancements.", image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=600&q=80" },
        { name: "Website Maintenance & Support", desc: "Proactive uptime monitoring, security patching, dependency upgrades, and iterative improvements.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 03. LLM, RAG & KNOWLEDGE-BASED AI (15 Deliverables)
    {
      id: "03",
      title: "LLM, RAG & KNOWLEDGE-BASED AI",
      badge: "DETERMINISTIC AI",
      desc: "Build AI assistants that answer using your own business information.",
      icon: <Database className="w-5 h-5 text-zinc-800" />,
      strategy: "Eliminate AI hallucinations by grounding Large Language Models in your company's private documentation, product databases, and legal records. We build hybrid dense-sparse vector pipelines with verified source citations and strict enterprise guardrails.",
      ctaText: "COMMISSION LLM, SCOPE",
      deliverables: [
        { name: "Retrieval-Augmented Generation (RAG) Systems", desc: "End-to-end grounded query pipelines matching incoming requests with verified document chunks.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { name: "Website Knowledge-Base Chatbots", desc: "Client-facing widgets referencing only your approved public guides and pricing sheets.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
        { name: "PDF, Document & File Question-Answering", desc: "Document analysis portals enabling instant semantic Q&A across lengthy corporate contracts.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
        { name: "Company Knowledge Assistants", desc: "Internal employee copilots indexed against Notion, Slack, Google Drive, and Confluence.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
        { name: "Product Catalogue & Documentation Chatbots", desc: "Technical query assistants that understand complex product dimensions and code tables.", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80" },
        { name: "LLM-Powered Customer Support", desc: "Autonomous support ticket answering pipelines grounded with CRM historical logs and SLAs.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
        { name: "Semantic & Hybrid Search", desc: "Combined BM25 keyword matching and dense vector embeddings delivering precise search results.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
        { name: "Text Embeddings & Vector Search", desc: "Production embedding pipelines converting large document archives into dimensional vectors.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { name: "Vector Database Integration", desc: "Managed setups across Pinecone, Weaviate, and pgvector optimized for low query latency.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
        { name: "Document Ingestion & Chunking Pipelines", desc: "Intelligent document parsing algorithms that maintain context boundaries and markdown tables.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
        { name: "Retrieval, Reranking & Context Management", desc: "Cross-encoder reranking layers that evaluate retrieved excerpts to feed the most pertinent context.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Source-Cited AI Responses", desc: "Footnote, quote verification, and direct page citation architectures for verifiable answers.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
        { name: "Private Knowledge Retrieval Workflows", desc: "Zero-data-retention indexing pipelines ensuring enterprise confidential records remain private.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
        { name: "RAG Evaluation & Response Quality Testing", desc: "Automated benchmarking suites validating faithfullness and context recall scores before release.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
        { name: "Knowledge Base Management Interfaces", desc: "Administrative dashboards for uploading documents, re-indexing vector collections, and auditing.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 04. DIGITAL MARKETING & GROWTH (13 Deliverables)
    {
      id: "04",
      title: "DIGITAL MARKETING & GROWTH",
      badge: "Revenue Acceleration",
      desc: "Grow visibility, generate leads and improve conversions.",
      icon: <TrendingUp className="w-5 h-5 text-zinc-800" />,
      strategy: "We construct data-engineered acquisition funnels and technical SEO architectures designed to capture high-intent commercial demand. Every campaign is monitored for verifiable return on ad spend and sustained organic prominence.",
      ctaText: "COMMISSION DIGITAL SCOPE",
      deliverables: [
        { name: "Digital Marketing Strategy", desc: "Full-funnel commercial acquisition blueprint analyzing user journeys and unit economics.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
        { name: "Search Engine Optimization (SEO)", desc: "Enterprise keyword modeling and structured schema markup to capture organic volume.", image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=600&q=80" },
        { name: "Technical, On-Page & Off-Page SEO", desc: "Core Web Vitals optimization, semantic tag hierarchies, and backlink network acquisition.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "Local SEO & Google Business Profile", desc: "Geographical ranking dominance, local map pack optimization, and multi-location reviews.", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80" },
        { name: "Google Ads & Meta Ads Management", desc: "Algorithmic bidding architectures and multi-tier retargeting to maximize blended ROAS.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Social Media Marketing & Management", desc: "Omnichannel positioning and short-form asset production building organic brand equity.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" },
        { name: "Content Marketing & Strategy", desc: "Data-backed editorial frameworks calibrated to generate sustainable inbound pipeline.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80" },
        { name: "Email Marketing & Automation", desc: "Dynamic behavioral nurture workflows and automated lifecycle retention sequences.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
        { name: "Lead Generation & Sales Funnels", desc: "Frictionless multi-step lead capture flows and programmatic qualification routing.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
        { name: "Conversion Rate Optimization (CRO)", desc: "Systematic multivariate A/B testing and behavioral scroll mapping to boost conversions.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Landing Page Optimization", desc: "Sub-second responsive landing experiences engineered with clear single-call-to-action hierarchies.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
        { name: "Marketing Analytics & Reporting", desc: "Multi-touch attribution models and executive dashboards measuring pipeline performance in real time.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
        { name: "Brand Positioning & Online Reputation", desc: "Digital reputation management and public sentiment tracking across commercial touchpoints.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 05. AI AGENTS & BUSINESS AUTOMATION (11 Deliverables)
    {
      id: "05",
      title: "AI AGENTS & BUSINESS AUTOMATION",
      badge: "AUTONOMOUS OPERATIONS",
      desc: "Automate repetitive tasks and connect business workflows.",
      icon: <Bot className="w-5 h-5 text-zinc-800" />,
      strategy: "Deploy autonomous software agents equipped with tools, CRM connectors, and human-in-the-loop oversight. Our agent systems perform complex multi-step research, qualify inbound prospects, and sync enterprise systems without manual overhead.",
      ctaText: "COMMISSION AI SCOPE",
      deliverables: [
        { name: "AI Agents & Tool-Using Assistants", desc: "Autonomous software agents executing multi-turn function calls across external APIs.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
        { name: "Multi-Step AI Workflows", desc: "Orchestrated task graphs that decompose business processes into discrete, verifiable milestones.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
        { name: "Lead Qualification & Routing", desc: "Autonomous agents that evaluate inbound form submissions and assign CRM owners.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
        { name: "Automated Customer Support", desc: "Autonomous resolvers handling common support inquiries while escalating complex edge cases.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
        { name: "CRM & Helpdesk Integration", desc: "Direct bi-directional data synchronization across Salesforce, HubSpot, Zendesk, and Intercom.", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80" },
        { name: "Email and Business Process Automation", desc: "Intelligent inbox triaging, automated draft compilation, and scheduled follow-up reminders.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
        { name: "AI-Powered Research & Reporting", desc: "Autonomous web research synthesizers compiling market analyses and executive briefing notes.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "API-Based Workflow Automation", desc: "Custom webhook connectors linking internal tools and databases into synchronized pipelines.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
        { name: "Human Approval & Escalation Workflows", desc: "Built-in authorization gates that pause execution and prompt administrative review.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
        { name: "Agent Evaluation & Monitoring", desc: "Continuous telemetry tracking tool accuracy, API call latencies, and goal completion rates.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Business System Integrations", desc: "Enterprise connectors interfacing with ERP, inventory systems, and billing engines securely.", image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 06. E-COMMERCE & INTELLIGENT WEB SOLUTIONS (12 Deliverables)
    {
      id: "06",
      title: "E-COMMERCE & INTELLIGENT WEB SOLUTIONS",
      badge: "Conversion Commerce",
      desc: "Build online stores with intelligent product and customer experiences.",
      icon: <ShoppingBag className="w-5 h-5 text-zinc-800" />,
      strategy: "Architecting high-converting digital storefronts that blend frictionless checkout UX with AI-assisted product discovery. We build scalable inventory backends, multi-currency payment pipelines, and conversational shopping assistants.",
      ctaText: "COMMISSION E-COMMERCE SCOPE",
      deliverables: [
        { name: "Custom E-commerce Development", desc: "Headless storefronts built on modern web stacks optimized for lightning-fast page loading.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" },
        { name: "Product Catalogue & Inventory Systems", desc: "Robust backends handling complex variant structures and real-time inventory counts.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
        { 
          name: "Secure Payment Gateway Integration", 
          desc: "Compliant PCI payment integrations across Stripe, Apple Pay, PayPal, and regional banks.", 
          image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80" 
        },
        { name: "Order & Customer Management", desc: "Centralized administrative portals for fulfillment tracking, invoice generation, and customer accounts.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80" },
        { name: "AI Product Recommendation Systems", desc: "Machine learning engines analyzing browsing behavior to surface personalized upsells.", image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=600&q=80" },
        { name: "Conversational Product Search", desc: "Natural language search boxes that understand colloquial customer queries.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
        { name: "AI Shopping Assistants", desc: "Interactive storefront guides that answer inquiries, compare features, and guide checkouts.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
        { name: "Automated Product Descriptions", desc: "Programmatic copy generation pipelines turning spec sheets into SEO-friendly descriptions.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80" },
        { name: "Intelligent Customer Support", desc: "Automated post-purchase assistance handling tracking updates and warranty questions.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" },
        { name: "Order Status Chatbots", desc: "Dedicated tracking interfaces that look up courier checkpoints directly from shipping APIs.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { name: "Sales Analytics & Reporting", desc: "Executive metrics tracking average order value, customer acquisition cost, and gross margins.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "Admin Dashboards & Business Automation", desc: "Back-office tooling automating supplier purchase orders and low-stock notifications.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 07. BACKEND, CLOUD & INTEGRATIONS (12 Deliverables)
    {
      id: "07",
      title: "BACKEND, CLOUD & INTEGRATIONS",
      badge: "CLOUD INFRASTRUCTURE",
      desc: "Connect, deploy and maintain reliable digital systems.",
      icon: <Cloud className="w-5 h-5 text-zinc-800" />,
      strategy: "Engineered for sub-second global latency, fault resilience, and zero maintenance drag. We configure serverless cloud runtimes, relational schemas (PostgreSQL), role-based auth, and automated continuous delivery pipelines.",
      ctaText: "COMMISSION BACKEND, SCOPE",
      deliverables: [
        { name: "REST API Development & Integration", desc: "Well-documented RESTful endpoints designed with clear resource models and versioning.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
        { name: "Backend Architecture", desc: "Scalable backend foundations organized using domain-driven design and modular clean services.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { name: "PostgreSQL, MySQL & Database Design", desc: "Relational database models engineered with indexes and foreign key constraints.", image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=600&q=80" },
        { name: "Supabase & Firebase Integration", desc: "Serverless backend architectures providing instant realtime listeners and managed auth.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
        { name: "Authentication & Authorization", desc: "Secure OAuth2, JWT, multi-factor authentication, and granular RBAC implementations.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
        { name: "Cloudflare Pages & Workers Deployment", desc: "Serverless edge compute runtimes serving cached assets globally with near-zero latency.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
        { name: "Serverless Application Architecture", desc: "Scalable serverless functions executing on-demand to handle compute loads without dedicated servers.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { name: "Third-Party API Integrations", desc: "Resilient connectors linking your product to external payment processors and shipping carriers.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" },
        { name: "Payment, Email & Notification Services", desc: "Automated delivery networks sending transactional receipts, SMS notifications, and webhooks.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
        { name: "CI/CD & Deployment Automation", desc: "Automated GitHub Actions deployment workflows running unit tests upon every commit.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
        { name: "Performance Monitoring & Maintenance", desc: "Continuous APM telemetry monitoring database query duration and endpoint error rates.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Security, Backup & Reliability Improvements", desc: "Automated daily snapshot backups, SSL automation, and firewall hardening.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 08. DATA ANALYTICS & BUSINESS INTELLIGENCE (10 Deliverables)
    {
      id: "08",
      title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
      badge: "Revenue Intelligence",
      desc: "Transform business data into actionable insights.",
      icon: <BarChart3 className="w-5 h-5 text-zinc-800" />,
      strategy: "Consolidate fragmented business metrics into unified, real-time executive dashboards. We construct automated data extraction pipelines and interactive visual models in Power BI and Tableau that illuminate customer lifetime value and channel ROI.",
      ctaText: "COMMISSION DATA SCOPE",
      deliverables: [
        { name: "Python & SQL Data Analysis", desc: "Deep relational queries, exploratory data analysis, and statistical modeling extracting patterns.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
        { name: "Power BI & Tableau Dashboards", desc: "Executive-grade visualization suites providing instant drill-down into enterprise performance.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
        { name: "Excel Reporting & Automation", desc: "VBA macro models, automated pivot tables, and spreadsheet pipelines eliminating manual weekly reporting.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
        { name: "KPI & Performance Dashboards", desc: "Live operational telemetry tracking north-star corporate metrics, team velocity, and burn rates.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
        { name: "Sales & Customer Analytics", desc: "Cohort retention mapping, churn prediction triggers, and purchasing propensity models.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
        { name: "Marketing Campaign Analysis", desc: "Multi-touch attribution models measuring blended return on advertising spend (ROAS).", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80" },
        { name: "Data Cleaning & Transformation", desc: "ETL data engineering pipelines removing duplicates and formatting raw feeds into clean tables.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { name: "Predictive Modelling", desc: "Forecasting algorithms projecting quarterly demand, inventory requirements, and customer value.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
        { name: "AI-Assisted Data Insights", desc: "Natural language query layers that allow non-technical founders to ask plain English questions.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
        { name: "Automated Business Reports", desc: "Scheduled executive summaries compiled dynamically and dispatched automatically to inboxes.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" }
      ]
    },

    // 09. BRANDING, UI/UX & CREATIVE EXPERIENCES (10 Deliverables)
    {
      id: "09",
      title: "BRANDING, UI/UX & CREATIVE EXPERIENCES",
      badge: "Creative Identity",
      desc: "Create a consistent identity and distinctive digital presence.",
      icon: <Palette className="w-5 h-5 text-zinc-800" />,
      strategy: "Command immediate market authority with an unmistakable visual signature. We design comprehensive brand identity guidelines, geometric typographic systems, and cinematic scroll-driven interactions that linger in your audience's memory.",
      ctaText: "COMMISSION BRANDING, SCOPE",
      deliverables: [
        { name: "Brand Identity & Logo Design", desc: "Timeless vector identity marks, brand guidelines, color palettes, and visual signatures.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80" },
        { name: "UI/UX Research & Prototyping", desc: "User journey mapping, wireframing, and interactive clickable prototypes verified with users.", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80" },
        { name: "Design Systems & Figma", desc: "Tokenized UI libraries with automated variants, dark-mode states, and responsive layout grids.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
        { name: "Social Media Creatives", desc: "Bespoke social templates, carousel storytelling layouts, and high-impact digital campaign assets.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" },
        { name: "Digital Advertising Creatives", desc: "High-CTR advertising graphics designed for display networks, sponsored social channels, and teasers.", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80" },
        { name: "Motion Graphics & Promotional Content", desc: "Fluid animated typography, product unveil videos, and 2D/3D brand reels for campaigns.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
        { name: "Scroll-Driven Website Experiences", desc: "Hardware-accelerated parallax journeys and narrative landing experiences that reveal content dynamically.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
        { name: "GSAP & Interactive Web Animation", desc: "Physics-based timeline animations, SVG morphing, and interactive hover choreographies with GSAP.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
        { name: "3D Web Experiences", desc: "Interactive Three.js and WebGL scenes that allow users to interact with 3D models in real time.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
        { name: "Website Visual Storytelling", desc: "Cinematic typography pairing, editorial art direction, and immersive pacing to elevate retention.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ];

  const scrollDeliverables = (id, direction) => {
    const el = carouselRefs.current[id];
    if (el) {
      const scrollAmount = 360;
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleCard = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all = {};
    servicesData.forEach(s => (all[s.id] = true));
    setExpandedCards(all);
  };

  const collapseAll = () => {
    const all = {};
    servicesData.forEach(s => (all[s.id] = false));
    setExpandedCards(all);
  };

  const filteredServices = servicesData.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.deliverables.some(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Search & Controls in Neutral Monochrome */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 border-b border-zinc-200 pb-6">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities (e.g. SEO, RAG, React)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400/20 focus:border-zinc-400 transition-all text-zinc-900 placeholder-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-medium text-zinc-600">
            <button
              onClick={expandAll}
              type="button"
              className="px-3.5 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-zinc-300">|</span>
            <button
              onClick={collapseAll}
              type="button"
              className="px-3.5 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* 01 to 09 Services Stack */}
        <div className="space-y-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedCards[service.id];

            return (
              <div
                key={service.id}
                className="bg-white rounded-[32px] sm:rounded-[36px] border border-zinc-200 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"
              >
                {/* Card Header in Clean White & Grey */}
                <div 
                  onClick={() => toggleCard(service.id)}
                  className="p-6 sm:p-9 flex items-center justify-between cursor-pointer select-none hover:bg-zinc-50/50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Neutral Grey Icon Box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-sm">
                      {service.icon}
                    </div>

                    <div>
                      {/* Title + Pill Badge */}
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight uppercase">
                          {service.title}
                        </h3>
                        <span className="text-[10px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/60 tracking-wider uppercase">
                          {service.badge}
                        </span>
                      </div>

                      {/* Subtitle description */}
                      <p className="text-zinc-500 text-xs sm:text-sm font-normal">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right side: Deliverables count + Dark Chevron Button */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                      {service.deliverables.length} Deliverables
                    </span>

                    <button
                      type="button"
                      aria-label="Toggle section"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900 hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer active:scale-95"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content Area */}
                {isExpanded && (
                  <div className="px-6 sm:px-9 pb-8 sm:pb-9 pt-1 border-t border-zinc-100 animate-in fade-in duration-300">
                    
                    {/* STRATEGIC APPROACH & IMPACT Banner */}
                    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-800 font-bold uppercase">
                          STRATEGIC APPROACH & IMPACT
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                        {service.strategy}
                      </p>
                    </div>

                    {/* COMPLETE SCOPE OF DELIVERABLES Header with Carousel Arrows */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-wider text-zinc-900 uppercase">
                          COMPLETE SCOPE OF DELIVERABLES ({service.deliverables.length})
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden md:inline-block text-xs font-mono text-zinc-400">
                          Bespoke architecture configured per engagement
                        </span>
                        
                        {/* Carousel Scroll Buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => scrollDeliverables(service.id, 'left')}
                            className="p-1.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 shadow-sm active:scale-95 transition-all cursor-pointer"
                            aria-label="Scroll deliverables left"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollDeliverables(service.id, 'right')}
                            className="p-1.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 shadow-sm active:scale-95 transition-all cursor-pointer"
                            aria-label="Scroll deliverables right"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Carousel */}
                    <div
                      ref={(el) => (carouselRefs.current[service.id] = el)}
                      className="flex gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-md transition-all p-3.5 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Deliverable Image Preview */}
                            <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-zinc-100">
                              <img
                                src={item.image}
                                alt={item.name}
                                onError={handleImageError}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>

                            {/* Green Checkmark + Dark Title */}
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-semibold text-zinc-900 leading-snug">
                                {item.name}
                              </span>
                            </div>

                            {/* Extended Informational Description */}
                            <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-normal pl-6">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">
                        Ready to implement {service.title.toLowerCase()}? We deliver production milestones weekly.
                      </span>

                      <button
                        type="button"
                        onClick={onOpenBrief}
                        className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-98 transition-all cursor-pointer"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Hybrid Cross-Functional Scope Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-[32px] sm:rounded-[36px] bg-white border border-zinc-200 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                Full-Spectrum Capability
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-2">
              NEED A HYBRID CROSS-FUNCTIONAL SCOPE ACROSS MULTIPLE DISCIPLINES?
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We design integrated retainers combining development, AI engineering, and digital growth.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBrief}
            className="px-7 py-4 rounded-full bg-zinc-900 hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md active:scale-98 transition-all shrink-0 cursor-pointer"
          >
            <span>COMMISSION CUSTOM TECHNICAL SCOPE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}