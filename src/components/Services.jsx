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
  Layers,
  Sparkles,
  Info,
  Check,
  Target,
} from 'lucide-react';

export default function Services({ isDark }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const [selectedDeliverable, setSelectedDeliverable] = useState(null);

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
        {
          name: 'Digital Marketing Strategy',
          description:
            'A comprehensive full-funnel commercial growth blueprint. We map target buyer personas against multi-channel acquisition funnels, establish CAC-to-LTV ratio benchmarks, and structure predictive attribution models to eliminate speculative ad spending.',
          features: [
            'Omnichannel attribution and conversion path modeling',
            'Competitor market-share gap analysis and commercial positioning',
            'Target Customer Acquisition Cost (CAC) and payback period forecasting',
            'Cross-platform budget allocation algorithms and milestones',
          ],
          techStack: ['Attribution Modeling', 'Google Tag Manager', 'PostHog', 'Mixpanel'],
          outcome: 'Predictable user acquisition pipelines with documented CAC targets and clear growth levers.',
        },
        {
          name: 'Search Engine Optimization (SEO)',
          description:
            'Semantic search indexing and content cluster architecture engineered to capture bottom-of-funnel organic search volume. We align page content with modern search engine ranking factors to build sustainable search traffic.',
          features: [
            'Search intent mapping across transactional keywords',
            'Topic cluster content architecture and internal link graph',
            'SERP feature optimization (Rich Snippets, People Also Ask)',
            'Competitor backlink profile gap analysis and counter-strategy',
          ],
          techStack: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Schema.org'],
          outcome: 'Compound organic discovery eliminating reliance on paid ads alone.',
        },
        {
          name: 'Technical, On-Page & Off-Page SEO',
          description:
            'Deep code-level performance audits, structured schema markup, and high-authority link acquisition. We eliminate crawl budget waste and optimize Core Web Vitals to maximize search bot efficiency.',
          features: [
            'JSON-LD Structured Data Schema implementation',
            'Server-side rendering (SSR) and edge-caching validation',
            'Crawl budget optimization, canonical graphs, and dynamic sitemaps',
            'Editorial digital PR link outreach across industry publications',
          ],
          techStack: ['Next.js Metadata', 'Screaming Frog', 'Cloudflare Edge SEO'],
          outcome: '100% crawl efficiency, index priority, and prominent SERP visibility.',
        },
        {
          name: 'Local SEO & Google Business Profile',
          description:
            'Geo-targeted visibility campaigns designed to dominate high-intent local queries. We calibrate Google Business Profiles, maintain citation consistency across global directories, and automate review generation.',
          features: [
            'Google Business Profile (GBP) audit and category optimization',
            'Multi-location citation synchronizer across top directory aggregators',
            'Automated SMS/Email customer review generation flows',
            'Hyper-local schema markup and map-pack ranking optimization',
          ],
          techStack: ['Google Maps API', 'BrightLocal', 'Review Automation Webhooks'],
          outcome: 'Dominance in regional and hyper-local search intent.',
        },
        {
          name: 'Google Ads & Meta Ads Management',
          description:
            'High-converting PPC and paid social advertising campaigns configured with server-side Conversion APIs (CAPI). We run multivariate creative split-testing and budget pacing algorithms to maintain strong ROAS at scale.',
          features: [
            'Meta Conversions API (CAPI) & Google Enhanced Conversions',
            'Dynamic product ad (DPA) catalogs and automated remarketing',
            'Algorithmic bid pacing and dayparting schedules',
            'High-velocity creative variant testing (Hooks, Formats, CTAs)',
          ],
          techStack: ['Meta Pixel / CAPI', 'Google Ads Editor', 'AppsFlyer', 'BigQuery'],
          outcome: 'High ROAS through continuous multivariate creative testing.',
        },
        {
          name: 'Social Media Marketing & Management',
          description:
            'Strategic content production and community distribution systems built to position your brand as an authority. We develop motion assets, carousel carousels, and thought-leadership writing aligned with brand tone.',
          features: [
            'Monthly editorial calendars with scheduled cross-network publishing',
            'Motion graphics, reels, and video hooks engineered for retention',
            'Executive ghostwriting for founder profiles on LinkedIn and X',
            'Community engagement protocols and inbound direct message workflows',
          ],
          techStack: ['Figma', 'Adobe After Effects', 'Buffer / Typefully', 'Metricool'],
          outcome: 'Stronger brand equity and community trust signals.',
        },
        {
          name: 'Content Marketing & Strategy',
          description:
            'High-authority technical articles, whitepapers, and guides written to educate potential buyers. We build repeatable content pipelines that convert cold traffic into sales-qualified leads.',
          features: [
            'Industry whitepapers and downloadable gated research reports',
            'SEO-optimized blog editorial architecture with custom diagrams',
            'Repurposing frameworks converting long-form text into bite-sized social posts',
            'Content lead capture forms and email capture trigger nodes',
          ],
          techStack: ['Notion CMS', 'Clearscope', 'Figma Graphics', 'SurferSEO'],
          outcome: 'Sticky reader retention and conversion-oriented nurture tracks.',
        },
        {
          name: 'Email Marketing & Automation',
          description:
            'Automated customer lifecycle workflows tailored to buyer behaviors. We build welcome series, behavioral nurture sequences, cart-recovery engines, and win-back campaigns that convert dormant contacts.',
          features: [
            'Multi-branch behavioral logic triggers based on website activity',
            'Dynamic product recommendation blocks embedded in emails',
            'Advanced deliverability setups (DMARC, DKIM, SPF verification)',
            'Cohort segmentation by purchase value, engagement, and industry',
          ],
          techStack: ['Klaviyo', 'Customer.io', 'Resend', 'Postmark'],
          outcome: 'Automated repeat revenue and high inbox deliverability.',
        },
        {
          name: 'Lead Generation & Sales Funnels',
          description:
            'Interactive client onboarding funnels, qualification questionnaires, and automated scheduling links designed to filter out low-intent leads and route decision-makers directly to sales calendars.',
          features: [
            'Multi-step conversational forms with smart conditional branching',
            'Automated calendar scheduling with round-robin host routing',
            'Instant SMS/Email reminder flows reducing demo no-show rates',
            'Real-time enrichment of lead data with clear company profiles',
          ],
          techStack: ['Cal.com / Calendly', 'Typeform', 'HubSpot CRM', 'Clearbit API'],
          outcome: 'Consistent high-ticket qualified appointment volume.',
        },
        {
          name: 'Conversion Rate Optimization (CRO)',
          description:
            'Data-driven experimentation using session recordings, click heatmaps, and statistical A/B split-tests. We identify UX friction points and test UI elements to improve visitors-to-lead ratios.',
          features: [
            'Heatmap tracking and rage-click behavioral session analysis',
            'Statistical A/B multivariate testing on headlines and CTAs',
            'Checkout and sign-up form friction audits and micro-copy refinements',
            'Device-specific drop-off diagnostics and responsive usability tuning',
          ],
          techStack: ['PostHog', 'Hotjar', 'Google Optimize alternatives', 'VWO'],
          outcome: 'Higher revenue yield from existing traffic without increasing ad spend.',
        },
        {
          name: 'Landing Page Optimization',
          description:
            'Ultra-fast, conversion-focused landing pages built with clear messaging hierarchies, proof elements, and single-action triggers that maximize advertising return.',
          features: [
            'Sub-second page rendering using static pre-generation',
            'Hero section layout optimization with dynamic social proof widgets',
            'Objection-handling accordion modules and transparent pricing tables',
            'Dedicated UTM parameter capture passing ad sources into CRM records',
          ],
          techStack: ['React', 'Tailwind CSS', 'Vercel Edge Network', 'Lighthouse'],
          outcome: 'Reduced bounce rates and higher form-fill percentages.',
        },
        {
          name: 'Marketing Analytics & Reporting',
          description:
            'Centralized performance dashboards integrating data from Google Ads, Meta, SEO, and your CRM. We consolidate scattered numbers into verifiable business metrics.',
          features: [
            'Consolidated single-dashboard view of blended ROAS and MER',
            'Automated weekly email summaries delivered to executive leadership',
            'Granular lead-to-revenue tracking across paid and organic channels',
            'Custom SQL queries for cohort retention and customer lifetime value',
          ],
          techStack: ['Power BI', 'Google Looker Studio', 'BigQuery', 'PostgreSQL'],
          outcome: 'Clear visibility into marketing spend ROI and growth opportunities.',
        },
        {
          name: 'Brand Positioning & Online Reputation',
          description:
            'Strategic reputation elevation across customer review platforms and industry directories. We help monitor brand sentiment and position founders as category leaders.',
          features: [
            'Automated reputation monitors alerting to new brand mentions',
            'Structured responses and escalation workflows for customer feedback',
            'Review schema integration showing gold review stars in Google search results',
            'Industry award submissions and authority badge verification',
          ],
          techStack: ['Trustpilot API', 'Google Alerts', 'Mention', 'Schema.org'],
          outcome: 'Elite brand perception and risk-free client sign-offs.',
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
          description:
            'Enterprise digital headquarters designed to project authority, communicate value propositions, and convert institutional prospects into business partners.',
          features: [
            'Bespoke visual architecture with tailored grid layouts and brand styling',
            'Multi-page informational hierarchy (About, Practice, Leadership, News)',
            'Compliance with international privacy regulations (GDPR, CCPA)',
            'Global CDN distribution delivering fast page loads across regions',
          ],
          techStack: ['React 19', 'Next.js', 'Tailwind CSS', 'Cloudflare Pages'],
          outcome: 'Institutional-grade credibility and reliable client trust.',
        },
        {
          name: 'Premium Portfolio & Personal Websites',
          description:
            'Award-caliber portfolio experiences for creative agencies, executives, and designers featuring smooth scrolling, interactive canvas shaders, and case-study presentations.',
          features: [
            'Inertial smooth scrolling powered by Lenis',
            'Interactive project detail modals with split-view inspectors',
            'Dynamic theme switching with automatic system preference detection',
            'Media optimization pipeline delivering fast WebP and AVIF assets',
          ],
          techStack: ['Vite', 'React', 'Lenis Smooth Scroll', 'Framer Motion'],
          outcome: 'Standout aesthetic presence that closes high-ticket contracts.',
        },
        {
          name: 'Landing Pages & Campaign Websites',
          description:
            'High-velocity marketing landing pages tailored for product launches, ad campaigns, and funding announcements. Built for rapid deployment without sacrificing polish.',
          features: [
            'Single-objective page architecture focused on one primary call-to-action',
            'Instant form validations with zero layout shift during interaction',
            'Integrated event tracking passing UTM source data directly to webhooks',
            'Optimized Core Web Vitals scoring 95+ on mobile devices',
          ],
          techStack: ['Tailwind CSS', 'Vite', 'EmailJS / Resend', 'Vercel'],
          outcome: 'Maximum conversion rates for ad and press campaigns.',
        },
        {
          name: 'Custom React & Modern Web Development',
          description:
            'Clean, maintainable frontend applications built with functional React components, custom hooks, and strictly typed TypeScript architectures.',
          features: [
            'Reusable component libraries using atomic design principles',
            'Optimized state management avoiding unnecessary re-renders',
            'Strict TypeScript typing preventing runtime errors and regressions',
            'Clean code standards enforced through automated ESLint and Prettier configs',
          ],
          techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
          outcome: 'Modular, maintainable, and bug-free codebases.',
        },
        {
          name: 'Full-Stack Web Applications',
          description:
            'End-to-end cloud applications complete with relational databases, user authentication, role-based access control, and asynchronous job queues.',
          features: [
            'Relational database schemas with indexed queries and migrations',
            'Secure authentication using encrypted sessions and HTTP-only cookies',
            'REST and GraphQL endpoints for structured data exchange',
            'Background worker queues for asynchronous email and file tasks',
          ],
          techStack: ['PostgreSQL', 'FastAPI / Node.js', 'Prisma ORM', 'Docker'],
          outcome: 'Scalable functional web products ready for real users.',
        },
        {
          name: 'UI/UX Design & Figma Prototyping',
          description:
            'User research, high-fidelity wireframing, and interactive prototypes built inside Figma. We stress-test interactions and layout ergonomics before writing code.',
          features: [
            'Auto-Layout responsive Figma components with variant properties',
            'Complete design token hierarchy (Colors, Spacing, Typography, Shadows)',
            'Interactive click-through user testing prototypes',
            'Comprehensive developer design specs with handoff guidelines',
          ],
          techStack: ['Figma', 'FigJam', 'Tokens Studio', 'Zeroheight'],
          outcome: 'Clear vision alignment before writing a single line of code.',
        },
        {
          name: 'E-commerce & Online Stores',
          description:
            'Custom storefronts that balance brand storytelling with smooth checkout experiences. Features inventory sync, customer accounts, and localized pricing.',
          features: [
            'Custom product detail pages with variant pickers and stock meters',
            'Frictionless checkout experiences with one-click payment methods',
            'Real-time order status webhooks updating inventory records',
            'Server-side cart management supporting discount codes and bundles',
          ],
          techStack: ['Shopify Storefront API', 'Stripe Elements', 'Next.js', 'Tailwind'],
          outcome: 'Seamless shopping experiences with high cart completion rates.',
        },
        {
          name: 'SaaS Platforms & Web Applications',
          description:
            'Subscription software platforms with customer portals, plan upgrade flows, usage metering, and team invitation features.',
          features: [
            'Multi-tenant workspace architectures with isolated customer data',
            'Stripe Customer Portal integration handling recurring payments and invoices',
            'Team member invitation workflows with role-based permissions',
            'Real-time telemetry tracking active daily and monthly usage',
          ],
          techStack: ['Supabase', 'React', 'Stripe Billing', 'Tailwind UI'],
          outcome: 'Production-grade software foundations for recurring revenue.',
        },
        {
          name: 'Admin Panels & Analytics Dashboards',
          description:
            'Internal operational tooling for business teams to manage users, process refunds, review audit logs, and export performance data.',
          features: [
            'Sortable, searchable, and filterable data tables handling large datasets',
            'Inline row editing and bulk action batch processors',
            'Permission gates ensuring team members only access authorized controls',
            'One-click CSV and JSON data export tools',
          ],
          techStack: ['TanStack Table', 'Recharts', 'React Hook Form', 'Tailwind CSS'],
          outcome: 'Effortless team operations and metric tracking.',
        },
        {
          name: 'Booking, Appointment & CRM Systems',
          description:
            'Integrated appointment scheduling flows with automated calendar synchronization, time-zone detection, and reminder alerts.',
          features: [
            'Automatic multi-timezone conversions for international clients',
            'Bi-directional sync with Google Calendar, Outlook, and Apple iCal',
            'Intake qualification questionnaires required before booking',
            'Automated email and SMS notifications confirming appointments',
          ],
          techStack: ['Cal.com Embed', 'Google Calendar API', 'Twilio', 'Webhooks'],
          outcome: 'Zero double-booking and automated consultation onboarding.',
        },
        {
          name: 'Custom APIs & Third-Party Integrations',
          description:
            'Bespoke API adapters connecting disparate cloud services, legacy software systems, and modern SaaS tools into a unified data flow.',
          features: [
            'Token-based API rate limiting and DDoS request throttling',
            'Detailed OpenAPI / Swagger documentation and sandbox test environments',
            'Webhook consumers with retry logic and signature verification',
            'Data transformation layers matching legacy formats to modern JSON',
          ],
          techStack: ['FastAPI', 'Express', 'Redis', 'Swagger / OpenAPI'],
          outcome: 'Unified data flow across distinct software systems.',
        },
        {
          name: 'CMS & Dynamic Websites',
          description:
            'Headless CMS integrations allowing marketing and content teams to draft, preview, and publish pages without writing code.',
          features: [
            'Visual block-based page builders with real-time live preview',
            'Granular editorial roles (Author, Editor, Administrator)',
            'Automated image optimization upon upload with focal-point cropping',
            'Structured content schemas preventing layout breaks on publish',
          ],
          techStack: ['Sanity.io', 'Strapi', 'Contentful', 'GraphQL'],
          outcome: 'Instant marketing autonomy without developer bottlenecks.',
        },
        {
          name: 'Website Redesign & Modernization',
          description:
            'Upgrading slow, legacy websites into modern, accessible web applications without losing historical SEO rankings.',
          features: [
            'URL redirect mapping (301 redirects) preserving SEO equity',
            'Clean asset migration preserving images, links, and text content',
            'Modernized design aesthetic aligned with current typography trends',
            'Mobile-first responsive adaptations eliminating viewport bugs',
          ],
          techStack: ['Vite', 'React', 'Tailwind CSS', 'Redirect Engine'],
          outcome: 'Refreshed brand authority and elevated user engagement.',
        },
        {
          name: 'Performance, Accessibility & SEO Optimization',
          description:
            'Comprehensive audits resolving layout shift, long tasks, and slow server response times to hit 95+ Lighthouse scores.',
          features: [
            'Core Web Vitals tuning (LCP < 1.2s, FID < 50ms, CLS = 0)',
            'Font subsetting and preloading eliminating flash of unstyled text',
            'WCAG 2.1 AA accessibility compliance across contrast and screen readers',
            'Modern picture element configurations with responsive image sizing',
          ],
          techStack: ['Google Lighthouse', 'Web Vitals API', 'Axe DevTools', 'Bundle Analyzer'],
          outcome: 'Higher search rankings and accessible cross-browser rendering.',
        },
        {
          name: 'Website Maintenance & Support',
          description:
            'Ongoing technical support, scheduled dependency patch cycles, uptime monitoring, and priority bug-fix SLAs.',
          features: [
            '24/7 uptime monitoring with instant SMS alerts upon service degradation',
            'Automated dependency updates and vulnerability patching',
            'Weekly offsite database and asset cloud backups',
            'Guaranteed 24-hour turnaround on priority technical bug fixes',
          ],
          techStack: ['GitHub Dependabot', 'Uptime Kuma', 'Sentry', 'Cloudflare'],
          outcome: 'Guaranteed 99.9% uptime and zero tech debt build-up.',
        },
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
        {
          name: 'AI-Powered Website Features',
          description:
            'In-browser machine learning features that adapt website interfaces in real time. We incorporate intelligent auto-complete, context-aware form pre-fills, dynamic content ordering, and client-side media analysis.',
          features: [
            'Client-side machine learning inference with zero latency lag',
            'Smart form auto-completion and predictive input validation',
            'Dynamic user experience adaptation based on scroll and interaction history',
            'Automated dark/light theme suggestions based on time and ambient sensors',
          ],
          techStack: ['TensorFlow.js', 'Vercel AI SDK', 'React Hooks', 'WebAssembly (WASM)'],
          outcome: 'Engaging, modern digital interfaces that adapt to user behavior in real time.',
        },
        {
          name: 'Custom AI Chatbots & Virtual Assistants',
          description:
            'Tailored conversational agents trained on your products, company policies, and FAQs. Features continuous multi-turn session memory, tone enforcement, and deterministic tool-calling.',
          features: [
            'Streaming token responses via WebSockets for real-time conversation',
            'Context-aware session memory with automated summarization',
            'Strict tone calibration maintaining brand voice guidelines',
            'Safety guardrails preventing inappropriate queries and prompt injections',
          ],
          techStack: ['OpenAI Assistants API', 'LangChain', 'WebSocket Streaming', 'Redis Session Memory'],
          outcome: '24/7 client engagement that qualifies inbound inquiries without human intervention.',
        },
        {
          name: 'LLM API Integration',
          description:
            'Direct integration with frontier models including GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro. We build token-optimized pipelines with caching, error fallbacks, and usage tracking.',
          features: [
            'Token-cost optimization with semantic caching of common prompts',
            'Automated fallback cascades routing traffic if primary providers time out',
            'Structured JSON output validation using strict type schemas',
            'Real-time token cost and latency telemetry logged per user query',
          ],
          techStack: ['OpenAI SDK', 'Anthropic Claude API', 'Google Gemini API', 'LiteLLM Gateway'],
          outcome: 'Reliable, low-latency generative capabilities embedded directly in your app.',
        },
        {
          name: 'OpenAI, Gemini and Other Model Integrations',
          description:
            'Hybrid multi-model routing architectures. Simple tasks route to fast, cost-effective models while complex logical reasoning routes to frontier models, optimizing budget and speed.',
          features: [
            'Intelligent query routing analyzing complexity before model invocation',
            'Multi-modal processing handling simultaneous text, audio, and visual inputs',
            'Automatic rate limit smoothing and token queue distribution',
            'Vendor-agnostic wrapper code preventing platform lock-in',
          ],
          techStack: ['LiteLLM', 'Google Vertex AI', 'Azure OpenAI Service', 'FastAPI Proxy'],
          outcome: 'Optimized cost-per-inference with maximal response speed and accuracy.',
        },
        {
          name: 'Machine Learning Model Integration',
          description:
            'Packaging, containerizing, and deploying custom scikit-learn, PyTorch, or ONNX models into production web applications via low-latency serverless endpoints.',
          features: [
            'Containerized model microservices deployed on high-speed runtimes',
            'Sub-100ms inference response times optimized via ONNX Runtime',
            'Automated health checks and auto-scaling GPU/CPU clusters',
            'Data ingestion validation layers ensuring input features match training formats',
          ],
          techStack: ['ONNX Runtime', 'Python FastAPI', 'Docker Containers', 'AWS Lambda / Modal'],
          outcome: 'Bespoke business predictions integrated directly into production software.',
        },
        {
          name: 'Predictive Analytics & Forecasting',
          description:
            'Statistical regression models and time-series algorithms analyzing historical transaction logs to predict future sales trends, seasonal volume, and customer churn risks.',
          features: [
            'Time-series forecasting models accounting for seasonality and holidays',
            'Customer churn risk scores alerting success teams to at-risk accounts',
            'Inventory stock requirement forecasts preventing capital over-commitment',
            'Visual forecasting charts embedded directly into internal dashboards',
          ],
          techStack: ['scikit-learn', 'Prophet (Meta)', 'Pandas', 'PostgreSQL Data Pipelines'],
          outcome: 'Data-backed forecasting enabling proactive operational decisions.',
        },
        {
          name: 'Personalized Recommendations',
          description:
            'Real-time recommendation algorithms matching users with items based on collaborative filtering, session behavior, and vector embeddings of product attributes.',
          features: [
            'Cosine similarity ranking across high-dimensional product vectors',
            'Frequently bought together bundles computed from order patterns',
            'Real-time session updates adjusting recommendations as users click items',
            'Cold-start fallback algorithms presenting trending products to new visitors',
          ],
          techStack: ['PostgreSQL pgvector', 'Redis Vector Caching', 'Vector Embeddings', 'FastAPI'],
          outcome: 'Substantial increases in average session duration and checkout order value.',
        },
        {
          name: 'AI-Powered Search',
          description:
            'Next-generation search engines combining exact keyword matching with vector-based semantic understanding. Users find what they need even with misspellings or conceptual queries.',
          features: [
            'Hybrid search blending BM25 exact matches with dense vector embeddings',
            'Typo-tolerant and multi-language query processing',
            'Faceted navigation with dynamic attribute count filters',
            'Search analytics identifying queries that returned zero results',
          ],
          techStack: ['Pinecone Vector DB', 'OpenAI Text Embeddings', 'Algolia Hybrid', 'React InstantSearch'],
          outcome: 'Instant discovery of relevant products and records, even with misspelled search queries.',
        },
        {
          name: 'Intelligent Form & Document Processing',
          description:
            'Vision-language models and OCR pipelines that extract unstructured text from uploaded documents, receipts, PDFs, and invoices, structuring the data into normalized JSON tables.',
          features: [
            'Automated extraction of line items, invoice totals, dates, and vendor details',
            'Multi-page PDF parsing with high accuracy across distorted scans',
            'Strict schema validation using Zod and Pydantic models',
            'Direct database insertion of structured records with human review queues',
          ],
          techStack: ['GPT-4o Vision', 'Tesseract OCR', 'AWS Textract', 'Pydantic Validation'],
          outcome: 'Zero manual data entry overhead and instant file verification.',
        },
        {
          name: 'Natural Language Processing (NLP)',
          description:
            'Text classification, sentiment analysis, entity extraction, and automated language detection pipelines analyzing inbound feedback and operational messages.',
          features: [
            'Real-time sentiment scoring across customer reviews and support chats',
            'Named Entity Recognition (NER) isolating company names, locations, and emails',
            'Multi-language automated translation and language identification',
            'Topic modeling clustering recurring themes across customer comments',
          ],
          techStack: ['Hugging Face Transformers', 'spaCy', 'Python', 'FastAPI Microservice'],
          outcome: 'Automated understanding of customer emails, reviews, and survey feedback.',
        },
        {
          name: 'AI Content Assistance',
          description:
            'In-app copilot assistants that help users and staff draft copy, generate headlines, summarize long reports, and rewrite text to match target tone profiles.',
          features: [
            'Inline text generation triggered by slash commands (/ai)',
            'Multi-tone rewrites (Professional, Casual, Concise, Persuasive)',
            'Diff viewers showing original text compared to AI suggestions',
            'Strict company styleguide prompt injection ensuring tone accuracy',
          ],
          techStack: ['TipTap Editor API', 'OpenAI Streaming API', 'React', 'Tailwind CSS'],
          outcome: '4x faster content generation while adhering to brand voice guidelines.',
        },
        {
          name: 'Customer Support Automation',
          description:
            'Intelligent tier-1 support triage systems that interpret inbound support tickets, search company help documents, and draft accurate responses for team review or direct dispatch.',
          features: [
            'Automated support ticket classification by urgency and topic category',
            'Context-grounded resolution drafts prepared for support agents',
            'Automated resolution of recurring inquiries (returns, hours, password resets)',
            'Escalation triggers transferring complex or sensitive tickets to human agents',
          ],
          techStack: ['Zendesk API', 'Intercom Webhooks', 'LangChain', 'OpenAI Function Calling'],
          outcome: '70% automated resolution of repetitive support tickets within 60 seconds.',
        },
        {
          name: 'AI-Powered Product Discovery',
          description:
            'Interactive conversational shopping advisers that ask customers guided questions to identify their specific needs and recommend suitable products.',
          features: [
            'Interactive guided questionnaire narrowing down inventory catalogs',
            'Natural-language preference matching (e.g. lightweight waterproof sneakers for wide feet)',
            'One-click add-to-cart buttons directly inside chat dialogs',
            'Visual product recommendation cards with real-time stock status',
          ],
          techStack: ['React', 'Function Calling', 'Product Catalog Schemas', 'Stripe Cart Hooks'],
          outcome: 'Elevated client confidence and reduced return rates in online stores.',
        },
        {
          name: 'AI-Based Classification & Data Extraction',
          description:
            'Automated background pipelines that classify inbound leads, sort incoming files, and extract key metrics into your primary databases.',
          features: [
            'Zero-shot classification categorizing text without custom training datasets',
            'High-throughput asynchronous worker queues handling thousands of rows',
            'Confidence score ratings flagging low-confidence extractions for manual review',
            'Automated webhook triggers syncing extracted data to Salesforce or HubSpot',
          ],
          techStack: ['Python', 'Celery Worker Queue', 'Redis', 'PostgreSQL'],
          outcome: 'Clean, normalized records flowing automatically into your central CRM.',
        },
        {
          name: 'Model Deployment & Inference APIs',
          description:
            'Production-ready API endpoints hosting custom or open-source models with GPU acceleration, health telemetry, and autoscaling runtimes.',
          features: [
            'Containerized Docker runtimes with automated cold-start mitigation',
            'GPU-accelerated instances scaling to zero during off-peak hours',
            'Authentication tokens and rate-limiting securing all inference calls',
            'Real-time latency metrics and exception tracking via Sentry',
          ],
          techStack: ['Modal Labs', 'Replicate', 'Docker', 'FastAPI', 'AWS ECS'],
          outcome: 'Reliable 99.9% API uptime with zero idle server cost.',
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
      commissionBtn: 'COMMISSION LLM, SCOPE',
      impactText:
        'Eliminate AI hallucinations by grounding Large Language Models in your company’s private documentation, product databases, and legal records. We build hybrid dense-sparse vector pipelines with verified source citations and strict enterprise guardrails.',
      deliverables: [
        {
          name: 'Retrieval-Augmented Generation (RAG) Systems',
          description:
            'Enterprise question-answering systems that ground LLMs directly in your company documentation with verified citations.',
          features: [
            'Dense vector embeddings matched against user queries',
            'Chunk retrieval pipelines with metadata filtering',
            'Strict prompt templates forbidding hallucinated details',
            'Verifiable source footnotes linked to raw document pages',
          ],
          techStack: ['LangChain', 'LlamaIndex', 'Pinecone', 'OpenAI'],
          outcome: 'Elimination of hallucinations with 100% auditable source citations.',
        },
        {
          name: 'Website Knowledge-Base Chatbots',
          description:
            'Interactive help widgets answering customer questions directly from your public documentation and FAQs.',
          features: [
            'Real-time website crawler keeping vector indexes synchronized',
            'Inline links directing users to official documentation pages',
            'Fallback email capture when queries exceed knowledge base scope',
            'Analytics dashboard tracking common unanswered questions',
          ],
          techStack: ['React', 'Next.js API', 'Supabase Vector', 'Tailwind'],
          outcome: 'Instant resolution of visitor questions directly on the marketing website.',
        },
        {
          name: 'PDF, Document & File Question-Answering',
          description:
            'Secure upload portals allowing users to ask natural-language questions across complex multi-page PDF contracts and spreadsheets.',
          features: [
            'PDF text and table extraction preserving document structure',
            'Cross-document synthesis answering questions across multiple uploads',
            'Page number citations highlighting exact reference paragraphs',
            'Encrypted temporary storage automatically purged upon session end',
          ],
          techStack: ['Unstructured.io', 'PyPDF', 'FastAPI', 'Qdrant'],
          outcome: 'Instant answers across hundreds of pages of technical and legal documentation.',
        },
        {
          name: 'Company Knowledge Assistants',
          description:
            'Internal private search assistants for employee onboarding, standard operating procedures, and company manuals.',
          features: [
            'Slack and Microsoft Teams bot integrations for easy employee access',
            'Role-based access controls restricting sensitive HR and financial docs',
            'Integration with Notion, Google Drive, and Confluence workspaces',
            'Query analytics identifying gaps in company documentation',
          ],
          techStack: ['Slack Bolt SDK', 'LlamaIndex', 'OAuth 2.0', 'PostgreSQL'],
          outcome: 'Hours saved daily searching internal documents and knowledge silos.',
        },
        {
          name: 'Product Catalogue & Documentation Chatbots',
          description:
            'Technical support bots trained on detailed hardware or software specifications to guide developers and buyers.',
          features: [
            'Deep indexing of API schemas, technical specs, and CAD parameters',
            'Code snippet generation customized to the user query and framework',
            'Interactive parameter recommendations based on use-case requirements',
            'Direct handoff to technical support engineers when necessary',
          ],
          techStack: ['OpenAPI Spec Parsers', 'Vector Search', 'React Widget'],
          outcome: 'Rapid developer onboarding and accurate technical pre-sales support.',
        },
        {
          name: 'LLM-Powered Customer Support',
          description:
            'Continuous support agents that read customer history and draft context-aware answers before routing to human staff.',
          features: [
            'Customer ticket history retrieval grounding every response',
            'Tone adjustment maintaining brand empathy and clarity',
            'Automated response drafting for human agent approval',
            'Direct integration with Help Scout, Zendesk, and Front',
          ],
          techStack: ['Zendesk API', 'LangChain', 'FastAPI', 'OpenAI'],
          outcome: 'Lower first-response times and higher client satisfaction ratings.',
        },
        {
          name: 'Semantic & Hybrid Search',
          description:
            'Dual retrieval systems combining BM25 keyword matching with dense embedding vector similarity.',
          features: [
            'Reciprocal Rank Fusion (RRF) combining keyword and vector matches',
            'High retrieval accuracy across technical part numbers and conceptual queries',
            'Configurable weighting between exact keywords and semantic meaning',
            'Sub-50ms search latency across multi-million row catalogs',
          ],
          techStack: ['Qdrant', 'Elasticsearch / OpenSearch', 'BM25 Algorithm'],
          outcome: 'High retrieval precision across acronyms, part numbers, and conceptual queries.',
        },
        {
          name: 'Text Embeddings & Vector Search',
          description:
            'High-dimensional vector embeddings generated for company text to power mathematical similarity scoring.',
          features: [
            'Dense vector transformations using text-embedding-3-large',
            'Cosine similarity and dot product index optimizations',
            'Batch embedding pipelines with cost-reduction caching',
            'Dimensionality reduction techniques optimizing RAM consumption',
          ],
          techStack: ['OpenAI Embeddings', 'Cohere Embed', 'pgvector'],
          outcome: 'Accurate semantic clustering of related company documentation.',
        },
        {
          name: 'Vector Database Integration',
          description:
            'Production vector database deployment configured with metadata filters, sharding, and backup schedules.',
          features: [
            'Payload indexing enabling instant metadata filter combinations',
            'Automated snapshots and cloud replication ensuring zero data loss',
            'Namespace isolation separating client tenant datasets cleanly',
            'Cost-optimized vector storage architectures balancing speed and price',
          ],
          techStack: ['Pinecone', 'ChromaDB', 'PostgreSQL pgvector', 'Qdrant'],
          outcome: 'Sub-50ms vector queries across millions of embedded documents.',
        },
        {
          name: 'Document Ingestion & Chunking Pipelines',
          description:
            'Recursive semantic splitting pipelines that preserve tables, markdown headers, and code snippets.',
          features: [
            'Header-aware splitting preserving document context in each chunk',
            'Recursive character chunkers with controlled overlap boundaries',
            'Table extraction formatting tabular data into readable Markdown tables',
            'Automated metadata tagging appending source titles and dates',
          ],
          techStack: ['Semantic Chunker', 'Unstructured', 'Python Pipeline'],
          outcome: 'Zero context loss across chunk boundaries during retrieval.',
        },
        {
          name: 'Retrieval, Reranking & Context Management',
          description:
            'Two-stage retrieval pipelines that retrieve top candidates and re-rank them using cross-encoder models.',
          features: [
            'Cross-encoder re-ranking scoring semantic relevance of retrieved chunks',
            'Context compression pruning irrelevant sentences from LLM prompts',
            'Deduplication algorithms removing redundant document passages',
            'Dynamic context budgeting preventing context-window overflow errors',
          ],
          techStack: ['Cohere Rerank API', 'Cross-Encoders', 'Prompt Compressors'],
          outcome: 'Only the most relevant paragraphs are passed into the LLM context window.',
        },
        {
          name: 'Source-Cited AI Responses',
          description:
            'Dynamic user interface badges displaying exact page numbers, file names, and direct quotes used to answer.',
          features: [
            'Clickable citation numbers navigating to source document previewers',
            'Quote highlighting showing exact matching text within the document',
            'Confidence ratings indicating answer reliability based on source data',
            'Audit trails logging which documents were referenced for each answer',
          ],
          techStack: ['React Citation Component', 'Metadata Links', 'PDF Viewer'],
          outcome: 'Absolute user trust and rapid verification of critical claims.',
        },
        {
          name: 'Private Knowledge Retrieval Workflows',
          description:
            'Self-hosted RAG architecture keeping all data strictly inside your private cloud without sending data to third parties.',
          features: [
            'Open-weight models (Llama 3, Mistral) hosted in private cloud instances',
            'Local vector storage ensuring company data never leaves your VPC',
            'Strict network firewalls preventing external data leakage',
            'Complete audit logging satisfying enterprise compliance standards',
          ],
          techStack: ['Ollama', 'vLLM', 'Self-Hosted Qdrant', 'Private Cloud VPC'],
          outcome: 'Total compliance with internal data privacy and SOC2 requirements.',
        },
        {
          name: 'RAG Evaluation & Response Quality Testing',
          description:
            'Automated synthetic question benchmarks measuring retrieval accuracy, faithfulness, and answer relevance.',
          features: [
            'Ground-truth synthetic dataset generation simulating real user queries',
            'Faithfulness scoring checking whether answers rely solely on context',
            'Answer relevancy metrics assessing if the output directly addressed the query',
            'Continuous evaluation pipelines running before every production deploy',
          ],
          techStack: ['Ragas Framework', 'TruLens', 'Python Benchmarks'],
          outcome: 'Verifiable accuracy metrics before pushing new RAG versions to production.',
        },
        {
          name: 'Knowledge Base Management Interfaces',
          description:
            'Admin dashboard enabling non-technical teams to upload, inspect, update, and delete vector index documents.',
          features: [
            'Drag-and-drop document upload with real-time indexing status bars',
            'Visual chunk inspector showing how documents were split into vectors',
            'Manual document deletion and re-indexing buttons',
            'Search tester allowing admins to debug retrieval results directly',
          ],
          techStack: ['React Admin', 'Tailwind UI', 'FastAPI Backend'],
          outcome: 'Real-time knowledge updates without developer assistance.',
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
        'Deploy autonomous software agents equipped with tools, CRM connectors, and human-in-the-loop oversight. Our agent systems perform complex multi-step research, qualify inbound prospects, and sync enterprise systems without manual overhead.',
      deliverables: [
        {
          name: 'AI Agents & Tool-Using Assistants',
          description:
            'Autonomous LLM agents that execute external code, query databases, and call third-party APIs to achieve high-level goals.',
          features: [
            'Deterministic tool-calling protocols verifying argument validity',
            'Loop control mechanisms preventing infinite execution cycles',
            'Secure API sandboxing isolating agent actions from production secrets',
            'Multi-agent role coordination splitting tasks among specialist agents',
          ],
          techStack: ['LangGraph', 'CrewAI', 'OpenAI Function Calling'],
          outcome: 'Autonomous execution of multi-step digital workflows.',
        },
        {
          name: 'Multi-Step AI Workflows',
          description:
            'Deterministic sequential and stateful graph routines orchestrating specialized agent swarms.',
          features: [
            'State machine architectures with durable checkpoints',
            'Conditional branching based on intermediate step results',
            'Automatic error recovery and retry logic on failed steps',
            'Visual workflow tracing documenting each decision step',
          ],
          techStack: ['LangGraph State Machine', 'Temporal.io', 'Python'],
          outcome: 'Complex business operations carried out without human babysitting.',
        },
        {
          name: 'Lead Qualification & Routing',
          description:
            'Intelligent intake systems assessing client budgets, timelines, and technical requirements before routing.',
          features: [
            'Natural language lead qualification scoring against buyer personas',
            'Automatic calendar matching routing leads to appropriate account reps',
            'Instant webhook sync pushing enriched lead records to your CRM',
            'Slack notifications alerting reps to high-priority sales leads',
          ],
          techStack: ['CRM Webhooks', 'Structured Schema', 'Slack SDK'],
          outcome: 'High-intent leads booked directly into sales reps calendars.',
        },
        {
          name: 'Automated Customer Support',
          description:
            'End-to-end resolution agents capable of issuing refunds, changing account settings, and resetting credentials.',
          features: [
            'Secure API execution checking account permissions before updates',
            'Strict spending caps and authorization boundaries on financial actions',
            'Full audit logging tracking every automated account modification',
            'Graceful handoff to human agents when edge cases arise',
          ],
          techStack: ['REST APIs', 'Guardrails', 'Security Scopes'],
          outcome: 'Instant resolution of standard tier-1 support tickets.',
        },
        {
          name: 'CRM & Helpdesk Integration',
          description:
            'Real-time two-way synchronization between customer activity and central platforms like HubSpot or Salesforce.',
          features: [
            'Bi-directional synchronization preventing data conflicts',
            'Automated contact timeline updates recording email and chat interactions',
            'Custom field mapping translating website data into CRM formats',
            'Webhook listeners triggering agent workflows based on CRM status changes',
          ],
          techStack: ['HubSpot API', 'Salesforce REST', 'Zendesk'],
          outcome: 'Always accurate CRM customer records without manual data entry.',
        },
        {
          name: 'Email and Business Process Automation',
          description:
            'Agentic inboxes reading customer inquiries, drafting personalized replies, and updating backends.',
          features: [
            'Autonomous inbox parsing identifying message intent and urgency',
            'Context-aware email drafts prepared using company knowledge bases',
            'Automated follow-up scheduling when replies are delayed',
            'Attachment processing extracting data from received files',
          ],
          techStack: ['Gmail API', 'SendGrid', 'Webhook Listeners'],
          outcome: 'Zero unread inbox backlogs and rapid response times.',
        },
        {
          name: 'AI-Powered Research & Reporting',
          description:
            'Autonomous research agents scanning the web, summarizing competitors, and producing structured briefing PDFs.',
          features: [
            'Web browsing agents extracting data from public online resources',
            'Automated fact-checking comparing claims across multiple sources',
            'Executive summary generation highlighting key takeaways',
            'Automated PDF report compiling complete with data tables and charts',
          ],
          techStack: ['Tavily Search API', 'Markdown to PDF', 'Summary LLMs'],
          outcome: 'Instant competitor and market intelligence delivered on schedule.',
        },
        {
          name: 'API-Based Workflow Automation',
          description:
            'Custom microservice connectors bridging internal databases with external software products.',
          features: [
            'Reliable webhook delivery with automated retries and dead-letter queues',
            'Data transformation adapters translating legacy formats to modern JSON',
            'Scheduled cron workflows executing batch data transfers',
            'Real-time error logging alerting engineering teams to connection drops',
          ],
          techStack: ['FastAPI', 'Node.js', 'Zapier / Make Webhooks'],
          outcome: 'Elimination of repetitive manual copy-pasting across tabs.',
        },
        {
          name: 'Human Approval & Escalation Workflows',
          description:
            'Human-in-the-loop safeguard checkpoints requiring team review before agents take irreversible actions.',
          features: [
            'Slack interactive buttons allowing team members to approve or reject actions',
            'Timeout policies setting default behaviors when approvals are delayed',
            'Audit trails recording which team member approved each action',
            'Clear preview summaries showing exactly what the agent plans to execute',
          ],
          techStack: ['Slack Interactive Buttons', 'Email Approvals', 'State Checkpoints'],
          outcome: '100% control and safety over critical enterprise transactions.',
        },
        {
          name: 'Agent Evaluation & Monitoring',
          description:
            'Observability telemetry logging every agent decision, tool execution, and token cost in real time.',
          features: [
            'Step-by-step trace views visualizing agent decision trees',
            'Token consumption and inference cost tracking per agent workflow',
            'Latency breakdowns isolating slow tool calls and model responses',
            'Error rate dashboards alerting teams to recurring failure points',
          ],
          techStack: ['LangSmith', 'OpenTelemetry', 'PostgreSQL Logs'],
          outcome: 'Complete visibility into agent behavior and cost controls.',
        },
        {
          name: 'Business System Integrations',
          description:
            'Enterprise ERP, billing, and inventory connections allowing agents to manipulate business data safely.',
          features: [
            'Encrypted API credentials managed via secure key vaults',
            'Row-level security ensuring agents only access authorized tables',
            'Rate limit management preventing agents from hitting external API caps',
            'Continuous health checks verifying external system connectivity',
          ],
          techStack: ['QuickBooks API', 'Shopify Admin', 'Postgres'],
          outcome: 'Unification of fragmented business tools into one cohesive pipeline.',
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
        'Architecting high-converting digital storefronts that blend frictionless checkout UX with AI-assisted product discovery. We build scalable inventory backends, multi-currency payment pipelines, and conversational shopping assistants.',
      deliverables: [
        {
          name: 'Custom E-commerce Development',
          description:
            'Bespoke storefronts engineered with responsive grids, micro-interactions, and instant page transitions.',
          features: [
            'Custom UI components designed for brand differentiation',
            'Sub-second page navigation powered by edge pre-rendering',
            'Mobile-first checkout UX optimized for one-thumb purchasing',
            'Accessible markup compliant with WCAG shopping standards',
          ],
          techStack: ['React', 'Next.js', 'Tailwind CSS'],
          outcome: 'Luxury brand presentation with zero boilerplate template feel.',
        },
        {
          name: 'Product Catalogue & Inventory Systems',
          description:
            'Relational catalog management supporting variants, skus, dynamic pricing, and stock tracking.',
          features: [
            'Hierarchical category architecture with multi-attribute filtering',
            'Real-time inventory decrementing across simultaneous checkout sessions',
            'Automated low-stock threshold alerts notifying fulfillment teams',
            'Bulk CSV and JSON product import and export tools',
          ],
          techStack: ['PostgreSQL', 'Prisma / Drizzle', 'Redis Caching'],
          outcome: 'Fast inventory synchronization across all sales channels.',
        },
        {
          name: 'Secure Payment Gateway Integration',
          description:
            'PCI-compliant checkout flows supporting credit cards, Apple Pay, Google Pay, and localized currencies.',
          features: [
            'Direct integration with Stripe Elements for PCI DSS Level 1 compliance',
            'One-click digital wallet support (Apple Pay, Google Pay)',
            'Multi-currency conversions with automatic geo-located pricing',
            'Fraud prevention mechanisms using 3D Secure and Radar rules',
          ],
          techStack: ['Stripe Checkout', 'PayPal', 'Webhooks'],
          outcome: 'High checkout conversion rates with zero payment drops.',
        },
        {
          name: 'Order & Customer Management',
          description:
            'Centralized admin order fulfillment portals with shipping tracking and status triggers.',
          features: [
            'Order status management (Processing, Shipped, Delivered, Refunded)',
            'Automated customer transaction emails with order tracking links',
            'Customer profile history logging past orders and lifetime value',
            'Refund and return processing workflows integrated with payment gateways',
          ],
          techStack: ['Admin Dashboards', 'Email Notifications', 'Shipment APIs'],
          outcome: 'Efficient logistics management and fewer customer inquiries.',
        },
        {
          name: 'AI Product Recommendation Systems',
          description:
            'Machine learning algorithms suggesting complementary products based on browsing behavior and cart contents.',
          features: [
            'Cross-sell recommendation blocks on cart and checkout pages',
            'Personalized homepage feeds tailored to repeat customer browsing patterns',
            'Dynamic product bundling offering discounted bundle pricing',
            'Real-time vector matching finding visually or functionally similar items',
          ],
          techStack: ['Collaborative Filtering', 'Vector Embeddings', 'Edge Cache'],
          outcome: 'Measurable lift in Average Order Value (AOV).',
        },
        {
          name: 'Conversational Product Search',
          description:
            'Semantic shopping search allowing buyers to find items using conversational descriptions instead of strict keywords.',
          features: [
            'Natural language query understanding handling complex attribute requests',
            'Typo-tolerant and multi-language search processing',
            'Faceted filters dynamically adjusting based on search results',
            'Instant search dropdowns showing product images and pricing',
          ],
          techStack: ['Semantic Vectors', 'Pinecone', 'Hybrid Filters'],
          outcome: 'Immediate item discovery even for vague or descriptive search queries.',
        },
        {
          name: 'AI Shopping Assistants',
          description:
            'Guided shopping concierge chatbots recommending the ideal product sizing, style, or gift options.',
          features: [
            'Conversational intake identifying recipient, budget, and style preferences',
            'Curated product recommendations with direct add-to-cart buttons',
            'Sizing and fit advice based on past customer feedback',
            'Proactive chat invitations on high-intent product pages',
          ],
          techStack: ['Function Calling', 'Product Catalog Schema', 'Streaming UI'],
          outcome: 'In-store personal shopping experience replicated on the web.',
        },
        {
          name: 'Automated Product Descriptions',
          description:
            'AI generation pipelines crafting SEO-optimized, persuasive product copy across large inventory catalogs.',
          features: [
            'Bulk copy generation from raw technical product specifications',
            'Tone calibration aligning copy with luxury brand messaging',
            'SEO keyword injection targeting high-intent product terms',
            'Multi-language translation maintaining marketing appeal',
          ],
          techStack: ['Few-Shot Prompts', 'Batch LLM Generation', 'CMS APIs'],
          outcome: 'Hundreds of catalog items launched in minutes instead of weeks.',
        },
        {
          name: 'Intelligent Customer Support',
          description:
            'AI-assisted returns, order tracking, and FAQ resolution widgets embedded on checkout and account pages.',
          features: [
            'Self-service return request processing with automated label generation',
            'Order status lookup answering where is my order queries instantly',
            'Shipping policy and FAQ answers grounded in store documentation',
            'Seamless escalation to human support for complex return issues',
          ],
          techStack: ['Order API Lookup', 'Support Chatbots', 'Zendesk'],
          outcome: 'Instant answers for order queries without human support load.',
        },
        {
          name: 'Order Status Chatbots',
          description:
            'Autonomous lookup tools allowing buyers to verify fulfillment status and tracking numbers via text.',
          features: [
            'Direct integration with carrier tracking APIs (FedEx, UPS, DHL, USPS)',
            'Proactive SMS and WhatsApp updates when shipments change status',
            'Delivery delay notifications setting accurate customer expectations',
            'Estimated delivery date calculations displayed at checkout',
          ],
          techStack: ['Carrier APIs', 'Twilio / WhatsApp API', 'Webhooks'],
          outcome: 'Proactive customer reassurance throughout the shipping journey.',
        },
        {
          name: 'Sales Analytics & Reporting',
          description:
            'Real-time sales velocity, customer cohort retention, and margin analysis charts.',
          features: [
            'Real-time gross revenue and net profit metric tracking',
            'Cohort retention charts showing repeat customer purchasing behavior',
            'Top-performing product rankings sorted by revenue and units sold',
            'Refund rate monitoring highlighting potential product quality issues',
          ],
          techStack: ['Recharts', 'SQL Aggregations', 'CSV Export'],
          outcome: 'Clear visibility into top-performing products and profit margins.',
        },
        {
          name: 'Admin Dashboards & Business Automation',
          description:
            'Custom internal backends enabling staff to manage promotions, discounts, and customer records effortlessly.',
          features: [
            'Discount code creation with usage limits and expiration dates',
            'Customer segmentation tools for targeted marketing exports',
            'Role-based permissions separating support staff from financial settings',
            'Automated daily sales summary emails delivered to store managers',
          ],
          techStack: ['Tailwind UI', 'TanStack Table', 'Role-Based Auth'],
          outcome: 'Streamlined daily store management without developer intervention.',
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
        'Engineered for sub-second global latency, fault resilience, and zero maintenance drag. We configure serverless cloud runtimes, relational schemas (PostgreSQL), role-based auth, and automated continuous delivery pipelines.',
      deliverables: [
        {
          name: 'REST API Development & Integration',
          description:
            'High-throughput, type-safe API backends built with clean documentation and deterministic response schemas.',
          features: [
            'OpenAPI / Swagger documentation generated automatically from code types',
            'Strict input validation using Pydantic or Zod schemas',
            'Consistent error response formats with specific error codes',
            'Token-based rate limiting protecting endpoints from abuse',
          ],
          techStack: ['FastAPI', 'Node.js Express', 'OpenAPI / Swagger'],
          outcome: 'Clean, reliable communication between frontends and backend services.',
        },
        {
          name: 'Backend Architecture',
          description:
            'Modular microservice and monolithic system design tailored to prevent bottlenecks under high traffic.',
          features: [
            'Clean separation of business logic, database queries, and routing layers',
            'Stateless service design enabling horizontal container autoscaling',
            'Dependency injection patterns simplifying automated unit testing',
            'Comprehensive architecture documentation mapping data flows',
          ],
          techStack: ['Docker', 'Microservices', 'Distributed Systems'],
          outcome: 'Long-term maintainability without technical debt accumulation.',
        },
        {
          name: 'PostgreSQL, MySQL & Database Design',
          description:
            'Normalized database schema design with indexes, constraints, and ACID-compliant transactions.',
          features: [
            'Third-normal-form relational schema design preventing data duplication',
            'B-tree and GiST indexing strategies optimizing query performance',
            'Automated migration workflows tracking database changes in git',
            'Connection pooling preventing database exhaustion under heavy traffic',
          ],
          techStack: ['PostgreSQL', 'MySQL', 'Prisma ORM'],
          outcome: 'Sub-millisecond query execution and zero data corruption.',
        },
        {
          name: 'Supabase & Firebase Integration',
          description:
            'Rapid backend deployment leveraging managed authentication, real-time database subscriptions, and storage.',
          features: [
            'Managed authentication supporting email, magic links, and OAuth',
            'Real-time WebSocket subscriptions pushing database changes to clients',
            'Row-Level Security (RLS) policies securing data directly in Postgres',
            'Cloud storage buckets configured with public and private access rules',
          ],
          techStack: ['Supabase', 'Firebase', 'Realtime WebSockets'],
          outcome: 'Accelerated production launch with minimal infrastructure overhead.',
        },
        {
          name: 'Authentication & Authorization',
          description:
            'Hardened identity management featuring JWTs, secure HTTP-only cookies, OAuth providers, and RBAC.',
          features: [
            'Secure token refresh cycles preventing session hijacking',
            'Social login integration (Google, Apple, GitHub OAuth 2.0)',
            'Role-Based Access Control (RBAC) governing administrative privileges',
            'Two-factor authentication (2FA) support via authenticator apps',
          ],
          techStack: ['OAuth 2.0', 'JWT', 'NextAuth / Auth.js'],
          outcome: 'Zero-trust security protecting customer data and admin interfaces.',
        },
        {
          name: 'Cloudflare Pages & Workers Deployment',
          description:
            'Global edge deployment ensuring code and assets execute within milliseconds of every global visitor.',
          features: [
            'Global distribution across Cloudflare’s 300+ edge data centers',
            'Edge middleware handling geo-routing, redirects, and auth checks',
            'Automated DDoS mitigation and Web Application Firewall (WAF) rules',
            'Instant git-based deployments with automated staging preview URLs',
          ],
          techStack: ['Cloudflare Workers', 'Edge Caching', 'WAF'],
          outcome: 'Sub-second global performance and DDoS mitigation.',
        },
        {
          name: 'Serverless Application Architecture',
          description:
            'Event-driven functions scaling from zero to thousands of concurrent requests automatically.',
          features: [
            'Zero server provisioning or operating system maintenance overhead',
            'Automatic scaling matching incoming traffic volume dynamically',
            'Pay-per-execution billing reducing infrastructure costs during quiet hours',
            'Cold-start optimization techniques minimizing function startup latency',
          ],
          techStack: ['AWS Lambda', 'Vercel Serverless', 'Cloud Functions'],
          outcome: 'Pay-only-for-what-you-use pricing with zero server management.',
        },
        {
          name: 'Third-Party API Integrations',
          description:
            'Seamless bi-directional connectors for CRMs, ERPs, email systems, and external payment processors.',
          features: [
            'Webhook listener endpoints with signature verification and idempotency keys',
            'Automated exponential backoff retries handling external service downtime',
            'Data transformation layers matching legacy formats to modern JSON',
            'Detailed integration logging tracking all outbound third-party requests',
          ],
          techStack: ['REST', 'GraphQL', 'Webhooks'],
          outcome: 'Automated data consistency across external business tools.',
        },
        {
          name: 'Payment, Email & Notification Services',
          description:
            'Reliable transactional messaging pipelines and payment settlement listeners.',
          features: [
            'High-deliverability transactional email pipelines using modern APIs',
            'Webhook listeners tracking payment events (charge.succeeded, invoice.paid)',
            'Multi-channel notification dispatchers (Email, SMS, In-App, Push)',
            'HTML email template rendering matching company branding guidelines',
          ],
          techStack: ['Resend', 'SendGrid', 'Stripe Webhooks'],
          outcome: '100% email deliverability and instant payment confirmation.',
        },
        {
          name: 'CI/CD & Deployment Automation',
          description:
            'Automated testing and continuous integration pipelines deploying green code branches instantly.',
          features: [
            'Automated test suites executing linting, unit tests, and build checks on push',
            'Automatic deployment of pull requests to isolated staging environments',
            'Zero-downtime production deployments with one-click rollback capabilities',
            'Branch protection rules enforcing code review approvals before merging',
          ],
          techStack: ['GitHub Actions', 'Docker', 'Vercel Deployments'],
          outcome: 'Zero-downtime releases and developer deployment velocity.',
        },
        {
          name: 'Performance Monitoring & Maintenance',
          description:
            'Real-time server telemetry tracking CPU, memory, API latency, and unhandled exceptions.',
          features: [
            'Real-time exception tracking alerting engineering teams to errors',
            'Distributed tracing isolating slow database queries and API calls',
            'Server resource monitoring tracking memory and CPU utilization',
            'Weekly uptime and performance digest reports sent to leadership',
          ],
          techStack: ['Sentry', 'Datadog', 'Logtail'],
          outcome: 'Proactive bug resolution before end users ever notice.',
        },
        {
          name: 'Security, Backup & Reliability Improvements',
          description:
            'Automated offsite database snapshots, encrypted data at rest, and firewall configuration.',
          features: [
            'Daily automated database backups with point-in-time recovery capabilities',
            'End-to-end data encryption in transit (TLS 1.3) and at rest (AES-256)',
            'Regular dependency security scans identifying known CVE vulnerabilities',
            'Disaster recovery protocols tested to ensure rapid restoration if needed',
          ],
          techStack: ['Automated Backups', 'SSL/TLS', 'SOC2 Security Controls'],
          outcome: 'Guaranteed business continuity and rapid disaster recovery.',
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
        'Consolidate fragmented business metrics into unified, real-time executive dashboards. We construct automated data extraction pipelines and interactive visual models in Power BI and Tableau that illuminate customer lifetime value and channel ROI.',
      deliverables: [
        {
          name: 'Python & SQL Data Analysis',
          description:
            'Advanced querying, cohort analysis, and statistical processing transforming raw operational data into structured analytical models.',
          features: [
            'Complex SQL window functions, CTEs, and relational joins',
            'Python Pandas & NumPy exploratory data analysis pipelines',
            'Database indexing and query execution plan tuning',
            'Automated data integrity checks and statistical summaries',
          ],
          techStack: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy'],
          outcome: 'Rigorous data extraction and deep statistical insights from multi-source records.',
        },
        {
          name: 'Power BI & Tableau Dashboards',
          description:
            'Interactive visual command centers designed for business leaders and department heads with dynamic drill-down capabilities.',
          features: [
            'Cross-filtering visual elements with hierarchical drill-downs',
            'Custom theme palettes tailored to enterprise brand guidelines',
            'Mobile-responsive layout views optimized for executives on the go',
            'Automated cloud refreshes syncing directly with production tables',
          ],
          techStack: ['Power BI', 'Tableau Desktop', 'Power BI Service', 'DAX'],
          outcome: 'Real-time visibility into mission-critical KPIs without manual data gathering.',
        },
        {
          name: 'Excel Reporting & Automation',
          description:
            'Advanced spreadsheet financial modeling, automated VBA/Power Query routines, and dynamic pivot architectures.',
          features: [
            'Power Query M-code workflows automating repetitive data imports',
            'Dynamic financial modeling tables and sensitivity analyses',
            'Automated error-checking formulas and conditional logic gates',
            'Executive-ready summary sheets with automated charting',
          ],
          techStack: ['Microsoft Excel', 'Power Query', 'VBA', 'Office Scripts'],
          outcome: 'Elimination of hours spent copying and pasting manual spreadsheet numbers.',
        },
        {
          name: 'KPI & Performance Dashboards',
          description:
            'High-level command interfaces monitoring department benchmarks, revenue pacing, and team throughput metrics.',
          features: [
            'Real-time pacing gauges measuring progress against monthly and quarterly targets',
            'Color-coded threshold alerts flagging metrics that fall outside tolerances',
            'Cross-department metric consolidation (Sales, Marketing, Operations)',
            'Automated scheduled report distribution delivered straight to executive inboxes',
          ],
          techStack: ['Power BI', 'SQL Metrics', 'DAX Measures'],
          outcome: 'Immediate clarity on operational bottlenecks and milestone progress.',
        },
        {
          name: 'Sales & Customer Analytics',
          description:
            'In-depth lifetime value calculations, cohort retention curves, and customer churn risk modeling.',
          features: [
            'Customer Lifetime Value (LTV) and CAC payback period calculations',
            'Cohort retention heatmaps tracking repeat purchase drop-offs',
            'Customer segmentation models based on RFM (Recency, Frequency, Monetary)',
            'Churn risk indicators alerting account teams to declining engagement',
          ],
          techStack: ['SQL Cohorts', 'Python Analysis', 'PostgreSQL'],
          outcome: 'Higher customer retention and data-backed expansion revenue opportunities.',
        },
        {
          name: 'Marketing Campaign Analysis',
          description:
            'Multi-touch attribution models comparing ad spend against actual backend customer conversions and margin.',
          features: [
            'Attribution modeling measuring first-touch, last-touch, and linear conversion credit',
            'Channel-by-channel ROAS and MER benchmarking',
            'Audience engagement tracking across email and paid media',
            'Ad creative fatigue metrics identifying when to refresh campaign visuals',
          ],
          techStack: ['GA4 BigQuery', 'Attribution Modeling', 'SQL'],
          outcome: 'Clear visibility into which marketing channels produce profitable customers.',
        },
        {
          name: 'Data Cleaning & Transformation',
          description:
            'Automated ETL pipelines that ingest messy, unstructured inputs and output standardized, normalized tables.',
          features: [
            'Automated deduplication, format normalization, and missing-value imputation',
            'Data validation gates rejecting corrupted or out-of-range records',
            'Automated transformation scripts converting nested JSON into relational tables',
            'Schema enforcement preventing database migrations from breaking reports',
          ],
          techStack: ['Python Pandas', 'SQL', 'EasyMorph / Airflow'],
          outcome: '100% clean, audit-ready data flowing into analytical dashboards.',
        },
        {
          name: 'Predictive Modelling',
          description:
            'Machine learning forecasting models predicting future sales volume, inventory demand, and seasonal swings.',
          features: [
            'Time-series forecasting models accounting for seasonality and holidays',
            'Regression models determining pricing elasticity and demand response',
            'Scenario parameters allowing business teams to test what-if assumptions',
            'Model accuracy tracking measuring variance against actual outcomes',
          ],
          techStack: ['scikit-learn', 'Prophet', 'Python', 'Statsmodels'],
          outcome: 'Proactive planning based on statistical probabilities rather than guesswork.',
        },
        {
          name: 'AI-Assisted Data Insights',
          description:
            'Natural-language query engines and automated anomaly detection highlighting hidden outliers in your data.',
          features: [
            'Natural-language asking (e.g., "Which region had the largest margin drop in Q3?")',
            'Automated anomaly detection flagging unusual revenue or traffic spikes',
            'Automated bullet-point summary generation accompanying weekly charts',
            'Semantic data exploration powered by generative language models',
          ],
          techStack: ['OpenAI API', 'LangChain Data Agents', 'FastAPI'],
          outcome: 'Instant narrative summaries explaining the "why" behind the numbers.',
        },
        {
          name: 'Automated Business Reports',
          description:
            'Scheduled, formatted PDF and email report generation delivering key metrics to stakeholders automatically.',
          features: [
            'Automated weekly and monthly PDF generation matching brand guidelines',
            'Direct Slack and email webhook integrations delivering metric summaries',
            'Dynamic chart snapshots embedded directly in outbound emails',
            'Role-based report variants showing appropriate metrics per stakeholder',
          ],
          techStack: ['Python WeasyPrint', 'SendGrid API', 'Slack Webhooks'],
          outcome: 'Stakeholders receive critical metrics on schedule with zero manual effort.',
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
      commissionBtn: 'COMMISSION BRANDING, SCOPE',
      impactText:
        'Command immediate market authority with an unmistakable visual signature. We design comprehensive brand identity guidelines, geometric typographic systems, and cinematic scroll-driven interactions that linger in your audience’s memory.',
      deliverables: [
        {
          name: 'Brand Identity & Logo Design',
          description:
            'Distinctive visual identities including primary and secondary logo marks, color psychology, and strict guidelines.',
          features: [
            'Vector logo design optimized for favicon scale up to billboard sizing',
            'Curated color token matrices with balanced dark/light mode counterparts',
            'Comprehensive Brand Book PDF specifying typography, spacing, and usage rules',
            'Custom favicon suites and social profile asset packages',
          ],
          techStack: ['Figma', 'Adobe Illustrator', 'Brand Book PDF'],
          outcome: 'A memorable visual presence that establishes authority in your market.',
        },
        {
          name: 'UI/UX Research & Prototyping',
          description:
            'User journey mapping, competitive teardowns, wireframes, and interactive prototypes tested for usability.',
          features: [
            'Customer journey mapping identifying friction and drop-off points',
            'Low and high-fidelity interactive wireframes mapped to user flows',
            'Usability testing scripts validating navigation with target users',
            'Design rationale documentation detailing user experience decisions',
          ],
          techStack: ['Figma Prototyping', 'FigJam', 'Miro User Flows'],
          outcome: 'Intuitive user workflows validated before developer handoff.',
        },
        {
          name: 'Design Systems & Figma',
          description:
            'Scalable component libraries built with Figma Auto-Layout, variants, and structured design tokens.',
          features: [
            'Complete atomic component library (Buttons, Modals, Inputs, Cards)',
            'Strict design token hierarchy (Colors, Spacing, Typography, Radii)',
            'Figma Dev Mode specs detailing exact measurements and CSS flex properties',
            'Responsive component variants tested across desktop and mobile viewports',
          ],
          techStack: ['Figma Variants', 'Design Tokens', 'Auto-Layout 5.0'],
          outcome: '3x faster feature design velocity with complete visual consistency.',
        },
        {
          name: 'Social Media Creatives',
          description:
            'High-aesthetic social templates and campaign assets designed to build brand recognition across channels.',
          features: [
            'Modular Figma templates for carousels, announcement posts, and stories',
            'Consistent typography, layout hierarchies, and brand textures',
            'Optimized export presets for LinkedIn, X (Twitter), and Instagram',
            'Editable template suites allowing teams to produce assets rapidly',
          ],
          techStack: ['Figma Templates', 'Adobe Photoshop', 'Social Presets'],
          outcome: 'A polished, cohesive brand image across all public channels.',
        },
        {
          name: 'Digital Advertising Creatives',
          description:
            'High-converting ad banners and static creatives designed to grab attention and drive click-throughs.',
          features: [
            'Multivariate visual variants testing different hooks, formats, and CTAs',
            'High-contrast visual hierarchies optimized for mobile ad feeds',
            'Strict compliance with platform ad specs (Meta, Google Display, LinkedIn)',
            'Clear value proposition typography designed for immediate comprehension',
          ],
          techStack: ['Figma Ad Specs', 'Photoshop', 'Display Ad Templates'],
          outcome: 'Higher click-through rates and lower cost-per-click on paid campaigns.',
        },
        {
          name: 'Motion Graphics & Promotional Content',
          description:
            'Animated brand launch videos, product teaser reels, and kinetic typographic sequences for campaigns.',
          features: [
            'Kinetic typography animations highlighting key brand taglines',
            '2D and 3D product motion graphics showcasing UI interactions',
            'Platform-optimized vertical and horizontal video aspect ratios',
            'Sound-designed audio integration with rhythm-matched motion cuts',
          ],
          techStack: ['Adobe After Effects', 'Premiere Pro', 'Lottie Animations'],
          outcome: 'Compelling video content that drives engagement and shares.',
        },
        {
          name: 'Scroll-Driven Website Experiences',
          description:
            'Cinematic website layouts that respond smoothly to user scroll progression, creating an immersive journey.',
          features: [
            'Pinned viewport sections revealing content as the user scrolls',
            'Lenis smooth inertial scrolling integration preventing motion judder',
            'Hardware-accelerated CSS transforms maintaining 60fps performance',
            'Accessible fallback modes for users with reduced-motion preferences',
          ],
          techStack: ['Lenis', 'CSS Transforms', 'Tailwind CSS', 'IntersectionObserver'],
          outcome: 'An engaging, Apple-caliber digital journey that keeps visitors exploring.',
        },
        {
          name: 'GSAP & Interactive Web Animation',
          description:
            'High-performance timeline choreography, cursor-reactive elements, and interactive micro-animations.',
          features: [
            'ScrollTrigger timelines orchestrating staggered text and card entrances',
            'Cursor-following magnetic buttons and hover spotlights',
            'SVG stroke morphing and line drawing animations',
            'Sub-second execution using GPU-accelerated tweening',
          ],
          techStack: ['GSAP', 'ScrollTrigger', 'React GSAP Hooks'],
          outcome: 'Tactile, responsive digital interactions that elevate the site feel.',
        },
        {
          name: '3D Web Experiences',
          description:
            'Interactive WebGL canvases, 3D product visualizers, and lighting shaders built directly in the browser.',
          features: [
            'Interactive Three.js canvas viewports with custom orbit controls',
            'Optimized 3D geometry and compressed GLTF/GLB models for fast load times',
            'Dynamic lighting and shadow shaders reacting to cursor movement',
            'Graceful fallback rendering for lower-powered mobile devices',
          ],
          techStack: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'WebGL'],
          outcome: 'Cutting-edge visual differentiation that sets the agency apart.',
        },
        {
          name: 'Website Visual Storytelling',
          description:
            'Editorial layouts and narrative structures that guide visitors through your company’s story and value.',
          features: [
            'Narrative flow architecture moving from problem to solution and proof',
            'Interactive comparison modules and before-and-after visual sliders',
            'High-impact editorial typography balancing white space and bold text',
            'Strategic testimonial and client logo placements building trust',
          ],
          techStack: ['Editorial Grids', 'Tailwind CSS', 'Micro-Interactions'],
          outcome: 'A memorable brand story that builds trust and drives inbound inquiries.',
        },
      ],
    },
  ];

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
      {/* 1. Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span
          className={`text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border transition-colors ${
            isDark
              ? 'bg-zinc-900/80 border-zinc-800 text-purple-300'
              : 'bg-white border-zinc-200 text-purple-700 shadow-sm'
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
          Select any service card to open its scope, then click any individual deliverable to inspect its full technical architecture, key capabilities, and business outcome.
        </p>
      </div>

      {/* 2. Grid of 9 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => handleOpenScope(service)}
              className={`group rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-zinc-950/70 border-zinc-800/80 hover:border-purple-800 hover:shadow-[0_12px_36px_rgba(124,58,237,0.12)]'
                  : 'bg-white border-zinc-200/90 hover:border-purple-300 hover:shadow-[0_12px_30px_rgba(124,58,237,0.06)]'
              }`}
            >
              <div>
                {/* Header Row: Icon + Deliverables Count */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-3 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-purple-950/40 border-purple-900/50 text-purple-400 group-hover:border-purple-700'
                        : 'bg-purple-50 border-purple-100 text-purple-600 group-hover:border-purple-200'
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
                <span className="text-xs font-semibold text-zinc-400 group-hover:text-purple-400 transition-colors">
                  Inspect Scope & Deliverables
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-zinc-900 text-zinc-300 group-hover:bg-purple-600 group-hover:text-white'
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

        <a
          href="#contact"
          className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all flex-shrink-0 cursor-pointer"
        >
          <span>COMMISSION CUSTOM TECHNICAL SCOPE</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
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
              <a
                href="#contact"
                onClick={handleCloseScope}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
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