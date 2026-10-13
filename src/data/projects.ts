import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'baemeds-com',
    title: 'BaeMeds USA (baemeds.com)',
    client: 'BaeMeds Healthcare USA',
    category: 'E-Commerce',
    domain: 'baemeds.com',
    overview: 'Complete US healthcare e-commerce incubation and dropshipping operation for baemeds.com. We sourced the products from suppliers in the USA, built the full dropshipping workflow, engineered the web storefront, and actively manage their website maintenance, marketing, ads, social media, and sales.',
    challenge: 'BaeMeds needed to establish a direct-to-consumer medical supplies footprint in the United States, requiring reliable US supplier sourcing, an automated dropshipping pipeline, and end-to-end management of marketing, advertising, and digital sales without operational bottlenecks.',
    approach: 'We sourced medical and healthcare products directly from vetted suppliers and distributors across the USA, established an automated dropshipping fulfillment bridge, engineered the high-converting storefront with USD/Stripe checkout, and continue to operate as their full-stack digital growth partner managing website updates, Google/Meta paid ad campaigns, social channels, and sales conversions.',
    built: [
      'US Supplier Product Sourcing & Catalog Vetting Pipeline',
      'Automated Dropshipping Order Fulfillment System',
      'High-Converting Production Storefront (baemeds.com)',
      'Omnichannel Paid Ad Campaigns (Meta & Google Ads)',
      'Active Retainer: Social Media, Ads, Marketing & Sales'
    ],
    tech: ['Next.js', 'Shopify Plus', 'Node.js', 'Google Ads', 'Meta Ads', 'Dropship API', 'Stripe'],
    link: 'https://baemeds.com',
    color: '#FF6B00',
    video: '/videos/work/baemeds.mp4',
    metrics: [
      { label: 'Sourcing', value: 'Direct US Suppliers' },
      { label: 'Flow', value: 'Full Dropship Automation' },
      { label: 'Operations', value: 'Maint., Ads, Social & Sales' }
    ]
  },
  {
    id: 'erus-academy',
    title: 'Erus Academy — AI English Fluency Platform',
    client: 'Erus Academy',
    category: 'EdTech',
    domain: 'erusacademy.in',
    overview: 'English fluency platform using AI video avatar courses, tailored for degree & engineering graduates and professionals preparing for interviews. We built this platform from the ground up: designing and engineering the student web platform, administrative CRM, native iOS and Android mobile apps, and LLM-powered interactive modules.',
    challenge: 'Erus Academy needed an end-to-end multi-platform digital learning ecosystem built from scratch to deliver AI video avatar fluency courses, handle student counseling and admissions, and run interactive interview assessments across web and mobile devices.',
    approach: 'We engineered their entire multi-tier architecture from ground zero: a student web learning LMS portal, an administrative admissions and lead CRM, native iOS and Android mobile applications with adaptive video streaming, and integrated LLM capabilities for conversational practice and speech assessment.',
    built: [
      'Student Web Learning LMS Platform (erusacademy.in)',
      'Admission & Student Counselor CRM System',
      'Native iOS Application (App Store)',
      'Native Android Application (Google Play)',
      'AI Video Avatar Course Delivery & Streaming Architecture',
      'LLM Conversational English Assessment Modules',
      'Integrated Multi-Currency Payment Checkout'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'React Native (iOS & Android)', 'FastAPI', 'LLM Video Engine', 'Tailwind CSS', 'Razorpay'],
    link: 'https://erusacademy.in',
    color: '#3B82F6',
    video: '/videos/work/erus-academy.mp4',
    metrics: [
      { label: 'Ecosystem', value: 'Web, CRM, iOS & Android' },
      { label: 'Core Tech', value: 'AI Video Avatars & LLM' },
      { label: 'Audience', value: 'Graduates & Job Seekers' }
    ]
  },
  {
    id: 'servicenow-enterprise-irm',
    title: 'Enterprise ServiceNow ITSM & IRM Maintenance',
    client: 'Confidential Global Enterprise (Fortune 500 Financial & Technology Practice)',
    category: 'ServiceNow',
    domain: 'Confidential Enterprise Practice',
    overview: 'Confidential enterprise client engagement where we actively maintain their ServiceNow environment—managing IT Service Management (ITSM), Integrated Risk Management (IRM / GRC), automated compliance workflows, and update set conflict prevention.',
    challenge: 'A global enterprise required certified ServiceNow specialists to maintain high-volume ITSM and IRM modules, audit CMDB configurations, ensure zero-collision release update sets, and prevent customization breakages across major platform upgrades under strict confidentiality.',
    approach: 'We provide dedicated platform governance and ongoing maintenance: optimizing incident/change routing in ITSM Pro, configuring automated policy & risk compliance rules in Flow Designer, validating CMDB configuration health, and enforcing collision-free update set deployments while safeguarding all proprietary architecture.',
    built: [
      'Enterprise ITSM Incident, Problem & Change Optimization',
      'IRM Risk & Compliance Policy Assessment Engine',
      'Automated CMDB CI Relationship Validation',
      'Zero-Collision Update Set Release Governance',
      'Ongoing Architecture Maintenance & Upgrade Safety'
    ],
    tech: ['ServiceNow Washington/Xanadu', 'Flow Designer', 'GlideScript', 'ITSM Pro', 'IRM / GRC', 'Integration Hub', 'REST API'],
    color: '#00BFA5',
    image: '/images/servicenow-dashboard.jpg',
    metrics: [
      { label: 'Scope', value: 'ITSM, IRM & CMDB Maintenance' },
      { label: 'Practice', value: 'Certified CIS-CMDB / IRM' },
      { label: 'Engagement', value: 'Strictly Confidential' }
    ]
  },
  {
    id: 'auvia',
    title: 'Auvia Behavioral Centers — ABA Clinic & CRM',
    client: 'Auvia Behavioral Centers (Irving, Texas)',
    category: 'Healthcare',
    domain: 'auviatherapy.com',
    overview: 'Comprehensive digital infrastructure and growth retainer for an ABA therapy clinic in Irving, Texas. We engineered their primary clinic website, custom patient intake CRM, and custom operational tools. Today, we actively manage their patient leads, website maintenance, healthcare SEO, social media, and digital advertising campaigns.',
    challenge: 'Auvia required an empathetic, HIPAA-aligned digital presence combined with a custom patient intake CRM to manage family inquiries, schedule child ABA assessments, and drive clinic enrollment across Irving and the Dallas–Fort Worth metroplex.',
    approach: 'We engineered their clinic website and a streamlined patient CRM. Moving post-launch into an active retainer, we manage their patient lead pipeline, ongoing web maintenance, local healthcare SEO, targeted Google/Meta ad campaigns, and social media brand presence.',
    built: [
      'Clinic Web Experience (auviatherapy.com)',
      'Custom Patient Intake & Assessment CRM',
      'Lead Triage & Patient Routing Engine',
      'Local Texas Pediatric Healthcare SEO Campaign',
      'Ongoing Full-Scope Maintenance, Ads & Social Retainer'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Meta Ads', 'Google Ads', 'Vercel'],
    link: 'https://auviatherapy.com',
    color: '#10B981',
    video: '/videos/work/auvia.mp4',
    metrics: [
      { label: 'Practice', value: 'ABA Therapy Clinic' },
      { label: 'Location', value: 'Irving, Texas' },
      { label: 'Retainer Scope', value: 'Leads, Ads, Social & Maint.' }
    ]
  },
  {
    id: 'baemeds-in',
    title: 'BaeMeds India (baemeds.in)',
    client: 'BaeMeds Healthcare India',
    category: 'E-Commerce',
    domain: 'baemeds.in',
    overview: 'Full-service digital commerce operations for baemeds.in. We built their online store and completely take over their ongoing operations so the client does not need to lift a finger—handling catalog uploads, ongoing maintenance, technical SEO, Google Ads, multi-channel marketing campaigns, and end-to-end sales management.',
    challenge: 'BaeMeds India required a trusted digital partner to build their domestic healthcare e-commerce platform and completely manage daily catalog additions, marketing campaigns, and technical maintenance without requiring internal operational overhead.',
    approach: 'We engineered a high-converting storefront with localized INR checkout, UPI payments, and automated inventory sync. On an ongoing basis, we fully operate their store: adding new products, executing Google Ads and marketing funnels, managing sales flows, and maintaining 100% platform uptime and SEO rankings.',
    built: [
      'Custom High-Speed E-Commerce Storefront (baemeds.in)',
      'UPI, NetBanking & Card Checkout Workflows',
      'Full-Service Product Catalog Uploads & Management',
      'Google Ads & Paid Marketing Campaign Management',
      'Active Full-Scope Maintenance, SEO & Sales Operations'
    ],
    tech: ['Shopify Plus', 'React', 'Google Ads', 'Technical SEO', 'UPI & Razorpay', 'Node.js'],
    link: 'https://www.baemeds.in/',
    color: '#FF6B00',
    video: '/videos/work/baemeds.mp4',
    metrics: [
      { label: 'Operations', value: '100% Fully Managed by Us' },
      { label: 'Services', value: 'Maintenance, SEO, Ads & Sales' },
      { label: 'Market', value: 'India (baemeds.in)' }
    ]
  },
  {
    id: 'unstiched',
    title: 'Unstiched Luxury Designer Apparel',
    client: 'Unstiched Apparel',
    category: 'E-Commerce',
    domain: 'unstiched.in',
    overview: 'Ongoing e-commerce venture where we are building the fashion business from the ground up—similar to our end-to-end model with BaeMeds. Developing the boutique digital storefront, curated lookbooks, high-speed mobile shopping, catalog operations, and go-to-market marketing pipelines.',
    challenge: 'Unstiched required an agile partner to incubate their designer apparel brand from zero: engineering an instant-load luxury storefront, structuring catalog photography workflows, and executing a complete ground-up launch roadmap.',
    approach: 'We are engineering the complete enterprise from scratch: high-performance Next.js storefront, visual lookbooks, instant slide-out bag interactions, and secure multi-currency payment checkout, backed by ongoing catalog and marketing execution.',
    built: [
      'Luxury Designer E-Commerce Storefront',
      'High-Resolution Mobile Visual Lookbooks',
      'Instant Slide-Out Cart & Quick-Add Drawer',
      'Ground-Up Business Incubation & Launch Roadmap'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Vercel'],
    color: '#EC4899',
    image: '/images/unstiched-storefront.jpg',
    metrics: [
      { label: 'Status', value: 'Ongoing Ground-Up Build' },
      { label: 'Model', value: 'Full Incubation (Like BaeMeds)' },
      { label: 'Performance', value: '98+ Lighthouse Edge' }
    ]
  },
  {
    id: 'qalb',
    title: 'The Qalb Luxury Fragrances',
    client: 'The Qalb Luxury Perfumes',
    category: 'E-Commerce',
    domain: 'qalbfragrances.com',
    overview: 'Artisanal luxury perfumery and spiritual essentials brand. We helped build their custom e-commerce website with interactive scent note pyramids, high-speed mobile shopping, and multi-gateway checkout.',
    challenge: 'The brand needed an evocative, tactile digital showcase to communicate fragrance note structures (top, heart, base notes) while delivering smooth, friction-free checkout for domestic and international fragrance buyers.',
    approach: 'We helped engineer their bespoke e-commerce website with tailored product detail layouts, interactive visual scent pyramids, instant cart drawer interactions, and unified Razorpay/UPI/COD payment integrations.',
    built: [
      'Bespoke Luxury Fragrance E-Commerce Storefront',
      'Interactive Scent Note Pyramid Breakdowns',
      'Instant Slide-Out Bag & Quick-Checkout Drawer',
      'Unified UPI, Card & Cash-on-Delivery Gateways'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Razorpay & UPI', 'Cloudflare CDN', 'Vercel'],
    link: 'https://qalbfragrances.com/',
    color: '#C5A880',
    image: '/images/qalb-perfumery.jpg',
    metrics: [
      { label: 'Our Contribution', value: 'Built E-Commerce Website' },
      { label: 'Niche', value: 'Artisanal Perfumery' },
      { label: 'Checkout', value: 'Instant UPI & Cards' }
    ]
  },
  {
    id: 'talhunt',
    title: 'Talent Hunters Consulting (THC)',
    client: 'Talent Hunters Consulting (KSA, UAE, USA & India)',
    category: 'Recruitment',
    domain: 'talhuntconsult.com',
    overview: 'Global talent advisory and executive search consultancy for Oil & Gas, Energy, Utilities, and Technical Manpower across KSA, UAE, USA, and India. We built their global corporate website, engineered automation tools, and manage their ongoing SEO.',
    challenge: 'THC needed an authoritative international digital presence for industrial clients and candidates across the Gulf and US, backed by automated candidate intake and search engine visibility.',
    approach: 'We built their full-scale responsive web platform with sector practice portals and candidate submission pipelines, developed custom clinical/technical intelligence automations, and manage their ongoing technical SEO to drive organic corporate search authority.',
    built: [
      'Global Executive Search Corporate Web Platform',
      'Oil & Gas and Energy Practice Portals',
      'Automated Candidate Submission Engine',
      'Ongoing Technical SEO & Structured Data Management',
      'Custom Intelligence & Intake Automations'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Schema.org JSON-LD', 'Vercel'],
    link: 'https://www.talhuntconsult.com/',
    color: '#001F3F',
    image: '/images/talhunt-portal.jpg',
    metrics: [
      { label: 'Scope', value: 'Built Website & Ongoing SEO' },
      { label: 'Specialization', value: 'Oil & Gas Manpower' },
      { label: 'Offices', value: 'KSA, UAE, USA & India' }
    ]
  },
  {
    id: 'medpulse-ai',
    title: 'MedPulse GCC Clinical Intelligence (THC Automation)',
    client: 'Talent Hunters Consulting (THC Healthcare Practice)',
    category: 'Software',
    domain: 'THC Clinical Intelligence Platform',
    overview: 'Specialized clinical intelligence and medical news automation engine custom-built for THC (Talent Hunters Consulting). It synthesizes real-time medical developments, regional health advisories, and categorized clinical data across the GCC region.',
    challenge: 'THC needed an automated intelligence tool to aggregate, monitor, and synthesize clinical research, health advisories, and regional medical news across the GCC without manual research overhead.',
    approach: 'We engineered an automated intelligence system that pulls, validates, and categorizes medical publications, providing THC with automated intelligence feeds and an intuitive dashboard.',
    built: [
      'Custom Clinical Intelligence Automation for THC',
      'Automated GCC Health Advisory Ingestion Engine',
      'Topic Filtering & Semantic Search Interface',
      'Automated Real-Time News Synthesis Dashboard'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Automation Scripts', 'Vercel'],
    color: '#6366F1',
    image: '/images/medpulse-intelligence.jpg',
    metrics: [
      { label: 'Role', value: 'Custom Automation Built for THC' },
      { label: 'Region', value: 'GCC Middle East' },
      { label: 'Function', value: 'Real-Time Medical Intelligence' }
    ]
  },
  {
    id: 'cynosure',
    title: 'Cynosure IT Innovations — ServiceNow & Biz Dev',
    client: 'Cynosure IT Innovations',
    category: 'ServiceNow',
    domain: 'cynosureit.com',
    overview: 'Strategic enterprise partnership with Cynosure IT Innovations. We sourced specialized ServiceNow consultation and technical workforce across ITSM, ITAM, and IRM, while spearheading financial business development to accelerate practice growth.',
    challenge: 'Cynosure IT Innovations needed targeted ServiceNow practice expansion—sourcing qualified technical talent across ITSM, IT Asset Management (ITAM), and IRM, alongside strategic business development to capture enterprise contracts.',
    approach: 'We provided end-to-end consulting: sourced and placed certified ServiceNow engineering workforce, structured technical delivery across ITSM, ITAM, and IRM modules, and executed commercial business development strategies.',
    built: [
      'Specialized ServiceNow Workforce & Consultation Sourcing',
      'ITSM, ITAM & IRM Capability Architecture',
      'Financial Business Development Pipeline',
      'Strategic Commercial Partnership Framework'
    ],
    tech: ['ServiceNow ITSM', 'ITAM', 'IRM / GRC', 'Workforce Sourcing', 'Business Development'],
    link: 'https://cynosureit.com',
    color: '#F59E0B',
    image: '/images/cynosure-practice.jpg',
    metrics: [
      { label: 'Service Sourced', value: 'ServiceNow Consultation & Talent' },
      { label: 'Practices', value: 'ITSM, ITAM & IRM' },
      { label: 'Growth', value: 'Financial Business Development' }
    ]
  },
  {
    id: 'meduscore',
    title: 'MedusCore Healthcare Recruitment',
    client: 'MedusCore UK',
    category: 'Recruitment',
    domain: 'meduscore.co.uk',
    overview: 'Medical staffing and physician/nurse credentialing consultancy in the United Kingdom. We built their recruitment website, developed their company profile and executive consultation materials, and actively handle their ongoing maintenance, lead generation, sourcing, presentations, and artifacts.',
    challenge: 'MedusCore needed a trusted end-to-end partner to build their digital presence, craft high-trust executive collateral, and execute continuous day-to-day operations including lead generation, candidate sourcing, and presentation artifact design.',
    approach: 'We built their full-scale medical recruitment portal and company profile from scratch. Today, we handle their complete operational ecosystem: managing site maintenance, driving continuous lead generation, candidate sourcing pipelines, and producing all executive client pitch presentations and brand artifacts.',
    built: [
      'Specialized Medical Recruitment Web Platform',
      'Professional Company Profile & Executive Collateral',
      'Lead Generation & Placement Pipeline Operations',
      'Candidate & Healthcare Talent Sourcing Systems',
      'Executive Client PPTs, Pitch Decks & Artifacts',
      'Active Website & Infrastructure Maintenance'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Lead Generation', 'Executive Collateral', 'Cloud Infrastructure'],
    link: 'https://meduscore.co.uk/',
    color: '#0EA5E9',
    video: '/videos/work/meduscore.mp4',
    metrics: [
      { label: 'Built by Us', value: 'Website, Company Profile & Strategy' },
      { label: 'Retainer Scope', value: 'Lead Gen, Sourcing & Artifacts' },
      { label: 'Market', value: 'UK & International' }
    ]
  },
  {
    id: 'conavlytics',
    title: 'Conavlytics — IRM Workforce & Tooling',
    client: 'Conavlytics',
    category: 'Software',
    domain: 'conavlytics.com',
    overview: 'Enterprise data and analytics firm where we sourced the specialized technical workforce to build their Integrated Risk Management (IRM) tools, custom software modules, and platform workflows.',
    challenge: 'Conavlytics required experienced software engineers and risk-platform specialists to architect custom IRM tooling and data intelligence modules within tight enterprise deadlines.',
    approach: 'We stepped in as their talent and technical partner: sourced and embedded specialized developers, structured the architecture for their custom IRM risk tools, and delivered core platform capabilities.',
    built: [
      'Specialized Technical Workforce Sourcing',
      'Custom IRM Risk Management Tooling',
      'Enterprise Data & Workflow Modules',
      'Risk Assessment & Analysis Integrations'
    ],
    tech: ['React', 'TypeScript', 'IRM Tooling', 'Python Analytics', 'Cloud Data Systems'],
    link: 'https://conavlytics.com',
    color: '#14B8A6',
    image: '/images/conavlytics-irm.jpg',
    metrics: [
      { label: 'What We Did', value: 'Sourced Workforce & Built IRM Tools' },
      { label: 'Focus', value: 'Risk Management & Analytics' },
      { label: 'Status', value: 'Delivered & Active' }
    ]
  },
  {
    id: 'bilim',
    title: 'Bilim — Confidential E-Commerce & Consultation',
    client: 'Bilim',
    category: 'E-Commerce',
    domain: 'Confidential E-Commerce Platform',
    overview: 'Confidential client partnership where we helped architect and build a proprietary e-commerce platform, while providing expert technical consultation and sourcing specialized workforce for their digital ecosystem.',
    challenge: 'Bilim required confidential, high-level technical consultation to structure and build a proprietary e-commerce engine with reliable development workforce sourcing.',
    approach: 'We provided strategic consultation, helped engineer their confidential e-commerce architecture with secure transaction processing, and sourced specialized engineering talent to execute their roadmap.',
    built: [
      'Confidential E-Commerce Web Platform',
      'Technical Consultation & Architecture Blueprint',
      'Specialized Engineering Workforce Sourcing',
      'Secure Multi-Currency Transaction Engine'
    ],
    tech: ['Next.js', 'React', 'Node.js', 'E-Commerce Architecture', 'Workforce Sourcing'],
    color: '#8B5CF6',
    image: '/images/bilim-ecommerce.jpg',
    metrics: [
      { label: 'Scope', value: 'Confidential E-Commerce Platform' },
      { label: 'Services', value: 'Built Platform, Sourced Work & Advisory' },
      { label: 'Client Tier', value: 'Confidential Enterprise' }
    ]
  },
  {
    id: 'devit',
    title: 'DevIt — Business Setup, Consultation & Clients',
    client: 'DevIt (wedevit.in)',
    category: 'Software',
    domain: 'wedevit.in',
    overview: 'Strategic business incubation and advisory engagement. We provided high-level business consultation, sourced initial enterprise clients, and helped them set up their entire digital agency business from scratch.',
    challenge: 'DevIt needed experienced business and digital guidance to establish their commercial entity, structure service offerings, and source their inaugural pipeline of paying clients.',
    approach: 'We acted as their strategic incubator: advised on business setup, structured operational delivery workflows, and directly sourced client engagements to establish their market momentum.',
    built: [
      'Complete Business Setup & Operational Framework',
      'Strategic Consultation & Service Architecture',
      'Direct Client Sourcing & Lead Pipelines',
      'Commercial Go-to-Market Execution (wedevit.in)'
    ],
    tech: ['Business Incubation', 'Client Sourcing', 'Consultation', 'Growth Strategy'],
    link: 'https://www.wedevit.in',
    color: '#FF1F1F',
    image: '/images/devit-platform.jpg',
    metrics: [
      { label: 'What We Did', value: 'Helped Set Up Business & Sourced Clients' },
      { label: 'Consultation', value: 'End-to-End Business Advisory' },
      { label: 'Website', value: 'wedevit.in' }
    ]
  }
];
