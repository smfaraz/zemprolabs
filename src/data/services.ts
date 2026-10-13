import {
  Code2,
  ShoppingBag,
  Server,
  Activity,
  Workflow,
  TrendingUp,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceProof {
  label: string;
  href: string;
}

export interface ServiceOffering {
  id: string;
  icon: LucideIcon;
  title: string;
  badge: string;
  /** One line on who this service is for */
  audience: string;
  description: string;
  deliverables: string[];
  tech: string[];
  /** Optional link to real work. Only set this when the project is public and approved. */
  proof?: ServiceProof;
  image?: string;
}

export interface EngagementModel {
  id: string;
  label: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    id: 'web-apps',
    icon: Code2,
    title: 'Custom web platforms, SaaS & mobile apps',
    badge: 'Full-stack & Mobile',
    audience: 'Founders and healthcare/education clinics needing complete platforms engineered from ground zero.',
    description:
      'Multi-platform ecosystems built ground-up: student and patient web LMS portals, administrative counselor & intake CRMs, and native iOS and Android apps with AI/LLM interactive modules (as proven with Erus Academy and Auvia Behavioral Centers).',
    deliverables: [
      'Production web portals and SaaS platforms (React, Next.js, Node.js)',
      'Custom administrative & admissions CRMs with lead triage',
      'Native iOS and Android mobile apps (React Native / App Store release)',
      'LLM conversational modules and interactive AI video streaming architecture',
      'Transactional PostgreSQL, Supabase, and MongoDB database schemas',
      'Role-based authentication, subscription billing, and multi-currency checkout',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native (iOS & Android)', 'PostgreSQL', 'FastAPI', 'Tailwind CSS'],
    image: '/images/saas-platform-mockup.jpg',
  },
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'Flagship e-commerce, US sourcing & dropshipping',
    badge: 'Commerce & Sourcing',
    audience: 'Brands seeking high-converting online stores, ground-up incubation, or automated US dropship operations.',
    description:
      'Complete e-commerce incubation and digital operations. We source products from vetted US suppliers, engineer automated dropshipping fulfillment workflows, build high-speed storefronts, and manage full-scope domestic catalog operations where clients never have to lift a finger (BaeMeds USA & India, Unstiched luxury apparel, The Qalb perfumery).',
    deliverables: [
      'US supplier sourcing & catalog vetting pipelines',
      'Automated dropshipping fulfillment & order routing engines',
      'Custom high-performance Shopify Plus & Next.js storefronts',
      'End-to-end catalog upload, inventory sync & sales operations',
      'Unified payment checkout (Stripe, Razorpay, UPI, COD)',
      'Bespoke product interactive experiences (e.g. visual fragrance note pyramids)',
    ],
    tech: ['Shopify Plus', 'Next.js', 'Liquid', 'Dropship API', 'Stripe', 'Razorpay & UPI', 'Node.js', 'Tailwind CSS'],
    image: '/images/ecommerce-flagship-store.jpg',
  },
  {
    id: 'servicenow',
    icon: Workflow,
    title: 'Enterprise ServiceNow ITSM, IRM & CMDB maintenance',
    badge: 'Certified Enterprise',
    audience: 'Global enterprises and IT leaders requiring certified CIS-CMDB / IRM governance under strict confidentiality.',
    description:
      'Enterprise ServiceNow development and active environment maintenance by certified specialists. We manage IT Service Management (ITSM Pro), Integrated Risk Management (IRM / GRC), automated compliance rules, and zero-collision update set deployments across Washington and Xanadu releases under strict bilateral NDAs.',
    deliverables: [
      'Enterprise ITSM incident, problem, and change management routing',
      'IRM / GRC automated risk assessment & compliance policies',
      'Certified CMDB CI relationship auditing & health dashboards',
      'Zero-collision update set releases and cross-instance governance',
      'Flow Designer automations, Integration Hub REST APIs, and GlideScript',
      'Dedicated architecture maintenance safeguarding proprietary systems',
    ],
    tech: ['ServiceNow Washington/Xanadu', 'Flow Designer', 'GlideScript', 'ITSM Pro', 'IRM / GRC', 'CIS-CMDB', 'Integration Hub'],
    image: '/images/servicenow-dashboard.jpg',
  },
  {
    id: 'business-dev',
    icon: Briefcase,
    title: 'Strategic business development & practice sourcing',
    badge: 'Commercial Growth',
    audience: 'Enterprises, tech practices, and agencies looking to source specialized talent, build pipelines, and expand cross-border.',
    description:
      'Commercial business development, enterprise talent sourcing, and cross-border expansion. We sourced specialized ServiceNow engineering workforce and drove commercial pipeline expansion for Cynosure IT Innovations, built candidate intake systems for THC, and developed executive pitch collateral and sourcing operations for MedusCore UK.',
    deliverables: [
      'Specialized enterprise technical talent & workforce sourcing',
      'Target account research, ICP profiling, and outbound B2B pipelines',
      'Commercial partnership structuring and financial business development',
      'Executive client presentations, pitch decks, and brand artifacts',
      'Cross-border expansion strategy across India, GCC, UK, and North America',
    ],
    tech: ['ServiceNow Workforce', 'HubSpot', 'Apollo', 'Sales Navigator', 'Executive Artifacts', 'GTM Architecture'],
    image: '/images/cynosure-practice.jpg',
  },
  {
    id: 'cloud-devops',
    icon: Server,
    title: 'Cloud infrastructure, CI/CD & 99.98% uptime SLAs',
    badge: 'DevOps & Cloud',
    audience: 'Platforms requiring fault-tolerant hosting, zero-downtime releases, and continuous repository health.',
    description:
      'Production environments on AWS, Docker, and automated CI/CD pipelines. We configure declarative Terraform infrastructure, automated GitHub Actions test runners, and continuous deployment workflows so every release is repeatable, tested, and recoverable.',
    deliverables: [
      'AWS cloud architecture, containerized microservices, and serverless setups',
      'Automated zero-downtime CI/CD deployment pipelines via GitHub Actions',
      'Docker, Redis caching, Nginx reverse proxy, and PostgreSQL replication',
      'Automated disaster recovery, scheduled backups, and 99.98% uptime SLAs',
      '100% cloud credentials and repository ownership transferred to client',
    ],
    tech: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'PostgreSQL', 'Redis', 'Nginx', 'Datadog'],
    image: '/images/studio-workspace.jpg',
  },
  {
    id: 'managed-care',
    icon: Activity,
    title: 'Dedicated agile retainer & complete operations pod',
    badge: 'Embedded Retainer',
    audience: 'Founders who want an embedded technical and operational team running their software, ads, and sales.',
    description:
      'Our signature partnership model. We do not dump software over the fence and leave. We operate as your dedicated engineering and digital operations core—handling 2-week agile sprint features, active CI/CD maintenance, website updates, catalog uploads, and sales operations. You retain 100% IP ownership and direct Slack access.',
    deliverables: [
      'Dedicated agile engineering pod shipping 2-week sprint releases',
      'Active CI/CD pipeline and GitHub repository maintenance',
      'Zero-downtime dependency patching, database audits, and security updates',
      'Full operational takeover (catalog uploads, sales, and lead routing)',
      'Direct Slack channel with senior architects (zero account managers)',
      'Complete IP freedom: 100% repository and credential handover if you move on',
    ],
    tech: ['GitHub Actions', 'Sentry', 'Cloudflare', 'AWS CloudWatch', 'Direct Slack', 'Linear'],
    image: '/images/studio-team-collaboration.jpg',
  },
  {
    id: 'seo-growth',
    icon: TrendingUp,
    title: 'Technical SEO, multi-channel ads & leads management',
    badge: 'Growth & Ads Retainer',
    audience: 'Businesses needing continuous organic search visibility, profitable paid ad campaigns, and automated leads.',
    description:
      'End-to-end growth retainers combining technical SEO, multi-channel Google and Meta paid ad campaigns, social media strategy, and custom intelligence automations (such as MedPulse GCC medical news automation built for THC, and local Texas SEO/ads for Auvia Behavioral Centers).',
    deliverables: [
      'Technical SEO, Schema.org structured data, and Core Web Vitals optimization',
      'Multi-channel paid advertising campaigns across Google Ads and Meta Ads',
      'Social media growth strategy and brand content management',
      'Custom clinical & business intelligence automation engines',
      'Lead qualification, CRM triage, and conversion funnel analytics',
    ],
    tech: ['Google Ads', 'Meta Ads', 'Schema.org JSON-LD', 'Google Search Console', 'FastAPI Automations', 'Vercel'],
    image: '/images/medpulse-intelligence.jpg',
  },
];

export const engagementModels: EngagementModel[] = [
  {
    id: 'fixed-project',
    label: 'Fixed project',
    title: 'Milestone-based projects',
    badge: 'New builds and MVPs',
    tagline: 'Clear deliverables, agreed dates and a fixed budget.',
    description:
      'Best for new websites, web apps, Shopify builds or a specific feature. You get a written scope, timeline and price within 48 hours of sharing your brief.',
    features: [
      'Written scope and fixed price within 48 hours',
      'Payments tied to completed milestones',
      'Direct Slack access to the engineer building your product',
      '30 days of post-launch fixes and full code and IP transfer',
    ],
    ctaText: 'Scope a project',
    ctaLink: '/project-estimation',
  },
  {
    id: 'retainer',
    label: 'Agile retainer',
    title: 'Dedicated Agile Retainer & CI/CD Pod',
    badge: 'Preferred Partnership Model',
    tagline: 'Continuous delivery, active CI/CD maintenance, and 2-week agile sprints.',
    description:
      'Our preferred engagement model across web dev, e-commerce, cloud, and enterprise workflows. Rather than ending projects at launch, we operate as your embedded engineering pod: maintaining active CI/CD pipelines, shipping continuous features in 2-week agile sprints, and managing security and uptime.',
    features: [
      'Dedicated agile engineering pod with 2-week sprint releases',
      'Active CI/CD pipeline maintenance in your GitHub repositories',
      'Proactive dependency upgrades, security patching, and bug fixes',
      'Continuous backlog grooming, architecture audits, and direct Slack access',
    ],
    ctaText: 'Start an Agile Retainer',
    ctaLink: '/contact',
  },
  {
    id: 'managed-ops',
    label: 'Full operations takeover',
    title: 'Full-Scope Operations & Growth Retainer',
    badge: 'Zero Operational Overhead',
    tagline: 'We run your maintenance, catalog, SEO, paid ads, and sales operations.',
    description:
      'Engineered for businesses that want a full-service technical and growth takeover (like BaeMeds and Auvia). You do not have to lift a finger—we handle continuous web maintenance, catalog additions, multi-channel Google/Meta ads, SEO, and sales pipelines, with 100% IP ownership remaining yours.',
    features: [
      'Complete catalog uploads, inventory sync & storefront maintenance',
      'Multi-channel paid ads management (Google Ads & Meta Ads)',
      'Technical SEO, local search rankings & social media presence',
      'Lead routing, CRM management & conversion telemetry',
      'Zero vendor lock-in: 100% code & accounts remain your property',
    ],
    ctaText: 'Explore Operations Retainer',
    ctaLink: '/contact',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'You share your goals, users and constraints. We ask questions until the brief is clear.',
  },
  {
    title: 'Scope',
    description: 'You receive a written scope, timeline and price within 48 hours.',
  },
  {
    title: 'Build',
    description: 'We build in milestones and show working builds on a staging site as we go.',
  },
  {
    title: 'Launch',
    description: 'We deploy, test on real devices and hand over code, credentials and documentation.',
  },
  {
    title: 'Support',
    description: 'We fix issues, keep dependencies current and help you plan what to build next.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How much does a project cost?',
    answer:
      'It depends on scope. Use the cost calculator for a rough range, or send a brief and we will reply with a fixed quote within 48 hours.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'A focused website or Shopify build usually takes a few weeks. Larger web apps take longer. Your written scope includes a timeline broken into milestones.',
  },
  {
    question: 'Who owns the code?',
    answer:
      'You do. All repositories, cloud credentials and documentation are transferred to you, and we sign an NDA at the start if you need one.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Every fixed project includes 30 days of post-launch fixes, and ongoing maintenance is available as a monthly plan with response times agreed in writing.',
  },
  {
    question: 'Can you work with our existing codebase or ServiceNow instance?',
    answer:
      'Yes. We can review what you have, tell you honestly what needs fixing, and work inside your own repositories and instances.',
  },
  {
    question: 'How does your business development service work alongside engineering?',
    answer:
      'We help clients not only engineer robust digital platforms and software, but also build commercial traction. Our business development team works with you on ICP targeting, outbound partnership pipelines, B2B lead generation, and regional market entry across India, GCC, UK, and North America.',
  },
];
