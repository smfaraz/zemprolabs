import {
  Code2,
  ShoppingBag,
  Workflow,
  Briefcase,
  Server,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface ProcessStage {
  number: string;
  timeline: string;
  title: string;
  subtitle: string;
  description: string;
  clientReceives: string;
  deliverables: string[];
}

export interface ServiceProcess {
  id: string;
  serviceName: string;
  shortName: string;
  badge: string;
  icon: LucideIcon;
  timelineEstimate: string;
  cadence: string;
  deliverableType: string;
  leadContact: string;
  summary: string;
  image?: string;
  stages: ProcessStage[];
}

export const serviceProcesses: ServiceProcess[] = [
  {
    id: 'web-apps',
    serviceName: 'Web Apps & SaaS Engineering',
    shortName: 'Web Apps & SaaS',
    badge: 'Full-Stack Architecture',
    icon: Code2,
    timelineEstimate: '4 – 8 Weeks + Agile Retainer',
    cadence: '2-Week Agile Sprints & CI/CD',
    deliverableType: '100% IP Transfer & Dedicated Agile Retainer',
    leadContact: 'Senior Full-Stack Architect',
    image: '/images/saas-platform-mockup.jpg',
    summary:
      'A disciplined engineering process for ground-up web platforms, dashboards, and SaaS applications. We prefer ongoing agile retainers over one-and-done handovers: writing clean modular TypeScript, maintaining active CI/CD pipelines with the client, and shipping continuous sprint improvements.',
    stages: [
      {
        number: '01',
        timeline: 'Days 01 – 03',
        title: 'Architecture Discovery, Schema Modeling & Scope Lock',
        subtitle: 'Direct technical audit of data models, API endpoints, and system constraints.',
        description:
          'We analyze your business logic, user personas, authentication needs, and third-party dependencies. We design PostgreSQL/Supabase database schemas, specify API contracts (REST/GraphQL), select the hosting architecture (Next.js on Vercel/AWS), and lock down a fixed milestone schedule within 48 hours.',
        clientReceives:
          'Architectural blueprint diagram, entity relationship diagram (ERD), API contract documentation, fixed milestone contract, and a dedicated Slack channel with your architects.',
        deliverables: [
          'Technical Architecture Blueprint',
          'Database Schema & ERD Model',
          'Fixed Milestone Schedule & Estimate',
          'Direct Architect Slack Channel',
        ],
      },
      {
        number: '02',
        timeline: 'Weeks 01 – 02',
        title: 'Interactive Figma Prototyping & Design Tokens',
        subtitle: 'Clickable prototypes and responsive UI tested on real mobile and desktop screens.',
        description:
          'We translate user journeys into accessible, high-conversion interfaces in Figma. You click through actual user flows, forms, and permission states on your phone and laptop. We fine-tune typography, spacing tokens, and micro-interactions before a single line of frontend code is committed.',
        clientReceives:
          'Collaborative Figma file with interactive prototypes, complete design system token spec, and verified mobile/desktop responsive mockups.',
        deliverables: [
          'Interactive Clickable Figma Prototype',
          'Responsive Mobile & Desktop Layouts',
          'Design System & Typography Tokens',
          'Collaborative Review & Revision Window',
        ],
      },
      {
        number: '03',
        timeline: 'Weeks 03 – 06',
        title: 'Milestone Sprints & Weekly Staging Deployments',
        subtitle: 'Strict TypeScript frontend and transactional backends pushed to private staging every Friday.',
        description:
          'Senior software architects write modular Next.js components, transactional database queries, and secure webhook handlers. Every Friday, an updated build is deployed to a password-protected staging URL accompanied by a 5-minute video walkthrough and written changelog.',
        clientReceives:
          'Private staging URL updated weekly, automated CI/CD pipeline builds, weekly video walkthrough demo, and commits pushed directly to your private GitHub repository.',
        deliverables: [
          'Private Password-Protected Staging URL',
          'Continuous Commits to Client GitHub',
          'Weekly Staging Video Walkthrough',
          'Automated Linting & Unit Test Pipeline',
        ],
      },
      {
        number: '04',
        timeline: 'Cutover & Ongoing Retainer',
        title: 'Zero-Downtime Cutover & Dedicated Agile Retainer with CI/CD',
        subtitle: 'Production launch followed immediately by continuous 2-week agile sprints, CI/CD maintenance, and proactive platform care.',
        description:
          'We execute pre-launch verification: database indexing checks, Core Web Vitals optimization, SSL hardening, and automated backup routines. Rather than ending the project and walking away, we transition seamlessly into our preferred Agile Retainer: maintaining your GitHub Actions CI/CD pipelines, deploying continuous updates on 2-week agile sprints, handling dependency security upgrades, and burning down prioritized feature backlogs.',
        clientReceives:
          '100% Git repositories, production domain deployment, active CI/CD deployment pipelines, architecture runbook, and ongoing agile sprint retainer roadmap.',
        deliverables: [
          'Zero-Downtime Production Deployment',
          '100% Repository & Cloud IP Transfer',
          'Active CI/CD Pipeline & GitHub Actions Maintenance',
          'Ongoing 2-Week Agile Sprint & Feature Backlog Roadmap',
        ],
      },
    ],
  },
  {
    id: 'shopify',
    serviceName: 'E-Commerce Platforms & Storefronts',
    shortName: 'E-Commerce',
    badge: 'E-Commerce Architecture',
    icon: ShoppingBag,
    timelineEstimate: '2 – 4 Weeks + Agile Retainer',
    cadence: '2-Week Agile Sprints & Growth Iterations',
    deliverableType: 'Custom Storefront + Ongoing Agile Commerce Retainer',
    leadContact: 'Lead E-Commerce Architect',
    image: '/images/ecommerce-flagship-store.jpg',
    summary:
      'A conversion-focused e-commerce delivery lifecycle designed for fast page speeds, frictionless mobile checkout, clean ERP inventory sync, and ongoing agile retainers to continuously improve conversions and maintain theme CI/CD.',
    stages: [
      {
        number: '01',
        timeline: 'Days 01 – 03',
        title: 'Catalog, ERP & Checkout Architecture Audit',
        subtitle: 'In-depth audit of product variants, third-party apps, checkout flow, and ERP sync.',
        description:
          'We audit your existing SKU catalog, inventory feeds, metafield requirements, third-party Shopify apps, and payment gateways. We define theme architecture (custom Liquid vs. headless Hydrogen), eliminate redundant app scripts that slow down load times, and establish your checkout optimization roadmap.',
        clientReceives:
          'Catalog migration map, app rationalization report, custom metafield schema, and fixed scope timeline.',
        deliverables: [
          'SKU & Metafield Architecture Map',
          'Third-Party App Audit & Reduction Plan',
          'Payment & Tax Gateway Configuration Spec',
          'Fixed Milestone Timeline',
        ],
      },
      {
        number: '02',
        timeline: 'Weeks 01 – 02',
        title: 'High-Converting Storefront & Mobile UX Design',
        subtitle: 'Mobile-first product pages, cart drawers, and frictionless checkout flows in Figma.',
        description:
          'We design high-converting e-commerce templates: PDP with variant selectors and stock urgency, sticky add-to-cart bars, slide-out drawer cart with cross-sells, and clean collection filters. Every screen is designed for thumb-friendly mobile purchasing.',
        clientReceives:
          'Complete Figma design files for homepage, collection, PDP, cart drawer, and custom landing pages.',
        deliverables: [
          'Mobile-First PDP & Cart Drawer Prototypes',
          'Collection Filtering & Facet Search Layouts',
          'Checkout Extension & Upsell Wireframes',
          'Design Asset & Typography Guidelines',
        ],
      },
      {
        number: '03',
        timeline: 'Weeks 03 – 04',
        title: 'Custom Theme Engineering & App Integration',
        subtitle: 'Clean Liquid coding, sub-second collection rendering, and ERP inventory syncing.',
        description:
          'We engineer your theme using modern Shopify CLI and theme app extensions. We connect warehouse inventory sync, configure Shopify Functions for custom discounts, integrate Klaviyo and analytics tracking, and ensure sub-second page rendering without heavy JavaScript bloat.',
        clientReceives:
          'Development store preview link, live product catalog sync, payment gateway sandbox testing access, and speed benchmark audit.',
        deliverables: [
          'Custom Modular Shopify Theme Build',
          'Inventory Sync & ERP Webhook Integration',
          'Custom Shopify Functions & Cart Extensions',
          'Google Tag Manager & GA4 E-Commerce Events',
        ],
      },
      {
        number: '04',
        timeline: 'Cutover & Ongoing Retainer',
        title: 'Frictionless Cutover & Continuous Agile E-Commerce Retainer',
        subtitle: 'Zero-downtime DNS cutover, 301 redirects, followed by continuous agile theme sprints, CI/CD, and conversion rate optimization.',
        description:
          'We conduct end-to-end sandbox and live real-money test orders across payment gateways, map 100% of legacy 301 redirects, and manage DNS cutover. Post-launch, we transition directly into an ongoing agile retainer: managing theme updates via GitHub CI/CD, optimizing checkout conversions, launching seasonal landing pages, and providing proactive maintenance.',
        clientReceives:
          'Live Shopify store under your ownership, complete 301 redirect index, staff training guide, and an ongoing monthly agile maintenance retainer roadmap.',
        deliverables: [
          'Zero-Downtime Storefront Cutover',
          'Complete 301 SEO URL Redirect Mapping',
          'Theme GitHub CI/CD Integration & Automated Staging',
          'Ongoing Agile Commerce Maintenance & CRO Retainer',
        ],
      },
    ],
  },
  {
    id: 'servicenow',
    serviceName: 'Enterprise ServiceNow Development',
    shortName: 'ServiceNow',
    badge: 'Enterprise Workflows',
    icon: Workflow,
    timelineEstimate: '3 – 6 Weeks + Enterprise Retainer',
    cadence: '2-Week Agile Sprints & Release Cycles',
    deliverableType: 'Enterprise Instance + Ongoing Agile DevOps Retainer',
    leadContact: 'Certified CIS-CMDB ServiceNow Architect',
    image: '/images/servicenow-dashboard.jpg',
    summary:
      'Enterprise-grade ServiceNow delivery adhering strictly to scoped app best practices. We prefer ongoing agile platform retainers: managing release cycles, maintaining ATF test suites, and handling continuous enterprise workflow enhancements.',
    stages: [
      {
        number: '01',
        timeline: 'Week 01',
        title: 'Instance Audit, CMDB Health & Scoped App Spec',
        subtitle: 'Architectural review of instance configuration, table inheritance, and security ACLs.',
        description:
          'We inspect your ServiceNow instance health, evaluate CMDB schema alignment, review existing business rules and client scripts, and define your scoped application boundaries. We create an architecture decision document to keep custom code upgrade-safe across future ServiceNow family releases.',
        clientReceives:
          'Instance health audit report, scoped application architectural specification, table inheritance diagram, and upgrade-safety checklist.',
        deliverables: [
          'ServiceNow Instance Health Diagnostic',
          'Scoped Application Architecture Blueprint',
          'Data Model & Access Control (ACL) Specification',
          'Sprint Milestone & Release Plan',
        ],
      },
      {
        number: '02',
        timeline: 'Weeks 02 – 03',
        title: 'Flow Designer Automation & Portal Workspace UI',
        subtitle: 'Visual flow logic, integration hub spokes, and modern employee service portal.',
        description:
          'We build zero-code/low-code flows in Flow Designer, construct reusable subflows, and write clean script includes only where enterprise performance demands it. We design intuitive Service Portal or Polaris Workspaces so end-users submit tickets and approve requests with zero confusion.',
        clientReceives:
          'Interactive Sub-Production workspace preview, flow execution logs, and demo walkthrough of approval logic.',
        deliverables: [
          'Flow Designer & Integration Hub Spoke Automations',
          'Script Includes & Client Scripts',
          'Custom Service Portal Widgets & Catalog Items',
          'Role-Based Access & Security Rule Verification',
        ],
      },
      {
        number: '03',
        timeline: 'Weeks 04 – 05',
        title: 'Sub-Production Testing & Update Set Packaging',
        subtitle: 'Rigorous UAT in sub-production, automated ATF regression tests, and clean update sets.',
        description:
          'We package all configuration records into neatly named and versioned Update Sets. We execute Automated Test Framework (ATF) test suites and assist your team through User Acceptance Testing (UAT) in your DEV and TEST instances, documenting all test run evidence.',
        clientReceives:
          'Versioned update sets, ATF test result logs, signed-off UAT scenario documentation, and rollback procedures.',
        deliverables: [
          'Collated & Previewed Update Set Packages',
          'Automated Test Framework (ATF) Test Suites',
          'User Acceptance Testing (UAT) Signoff Document',
          'Environment Migration & Rollback Guide',
        ],
      },
      {
        number: '04',
        timeline: 'Cutover & Ongoing Retainer',
        title: 'Production Deployment & Continuous Enterprise Agile Retainer',
        subtitle: 'Controlled production release, ATF regression test runs, and continuous agile release cycles.',
        description:
          'We commit update sets, resolve collisions, and run sanity checks during production release. We then partner on an ongoing agile platform retainer: managing your quarterly ServiceNow family upgrades, maintaining ATF test suites, expanding catalog workflows, and governing backlog stories in 2-week agile sprints.',
        clientReceives:
          'Deployed production application, complete technical runbook, sysadmin administration guide, and ongoing agile release governance agreement.',
        deliverables: [
          'Production Commit & Zero-Collision Deployment',
          'Instance Configuration Runbook & Admin Guide',
          'Automated Test Framework (ATF) Regression Governance',
          'Ongoing Enterprise Agile Platform Retainer',
        ],
      },
    ],
  },
  {
    id: 'business-dev',
    serviceName: 'Business Development & Market Expansion',
    shortName: 'Business Dev',
    badge: 'Commercial Growth',
    icon: Briefcase,
    timelineEstimate: '30 – 60 Days + Ongoing Retainer',
    cadence: 'Weekly Outbound Sprints & Pipeline Reviews',
    deliverableType: 'Dedicated Outbound Engine & Ongoing Growth Retainer',
    leadContact: 'Senior Business Development Lead',
    image: '/images/cynosure-practice.jpg',
    summary:
      'A strategic go-to-market and commercial pipeline engine. Rather than ending after initial discovery, we operate on an ongoing growth retainer: executing weekly outbound prospecting sprints, testing new market verticals, and accelerating deals to signature.',
    stages: [
      {
        number: '01',
        timeline: 'Days 01 – 05',
        title: 'ICP Definition, TAM Mapping & Competitive Intelligence',
        subtitle: 'Defining high-value customer profiles, target account tiers, and regional value propositions.',
        description:
          'We analyze your business model, contract values, and differentiation. We define your Ideal Customer Profile (ICP), map your Total Addressable Market (TAM) across target geographies (India, GCC, UK, North America), and benchmark competitors to craft a sharp, non-commoditized commercial positioning.',
        clientReceives:
          'ICP specification matrix, target account universe list (Tier 1/2/3 accounts), competitive positioning dossier, and commercial hypothesis.',
        deliverables: [
          'Ideal Customer Profile (ICP) & Persona Matrix',
          'Addressable Account List & Decision-Maker Directory',
          'Competitor Commercial Intelligence Dossier',
          'Go-To-Market Value Proposition Framework',
        ],
      },
      {
        number: '02',
        timeline: 'Weeks 02 – 03',
        title: 'Commercial Offer Structuring & Pitch Collateral',
        subtitle: 'Executive pitch decks, one-pagers, proposal templates, and pricing architecture.',
        description:
          'We structure commercial packages and create the collateral enterprise decision-makers expect: an executive pitch deck, technical one-pager, ROI calculator model, and an RFP-ready proposal template that eliminates friction during executive procurement reviews.',
        clientReceives:
          'Professional Figma/Keynote deck templates, editable proposal framework, pricing schedule, and sales battlecards.',
        deliverables: [
          'Executive Enterprise Pitch Deck',
          '1-Page Capabilities Brief',
          'Commercial Proposal & Scope Template',
          'Objection Handling & Sales Battlecards',
        ],
      },
      {
        number: '03',
        timeline: 'Weeks 04 – 06',
        title: 'Multi-Channel Outbound Execution & Lead Qualification',
        subtitle: 'Highly personalized executive outreach, relationship building, and high-intent discovery calls.',
        description:
          'We deploy multi-touch outbound campaigns via LinkedIn Sales Navigator, verified executive email, and strategic warm introductions. We engage C-suite and VP decision-makers, handle preliminary qualification, and book qualified discovery discussions directly into your calendar.',
        clientReceives:
          'Live pipeline tracking sheet, verified decision-maker contact records, recorded qualification notes, and qualified meetings booked.',
        deliverables: [
          'Targeted Outreach Sequences & Executive Copy',
          'Live B2B Pipeline Telemetry Dashboard',
          'Qualified Discovery Calls & Intro Meetings Booked',
          'Detailed Prospect Qualification Dossiers',
        ],
      },
      {
        number: '04',
        timeline: 'Ongoing Commercial Retainer',
        title: 'CRM Governance & Dedicated Commercial Growth Retainer',
        subtitle: 'Continuous weekly outbound sprints, CRM pipeline management, and deal closure support.',
        description:
          'We configure CRM forecasting and follow-up sequences, continuing on an ongoing commercial retainer: running weekly outbound prospecting sprints, testing new market ICPs, refining collateral, and co-presenting in executive proposal negotiations.',
        clientReceives:
          'Fully configured CRM pipeline, outbound playbooks, live pipeline tracking, and ongoing strategic deal acceleration support.',
        deliverables: [
          'Configured HubSpot/Salesforce CRM Pipeline',
          'Documented Repeatable Outbound Playbook',
          'Weekly Outbound Prospecting & Deal Review Sprints',
          'Ongoing Strategic Growth & Expansion Retainer',
        ],
      },
    ],
  },
  {
    id: 'cloud-devops',
    serviceName: 'Cloud Infrastructure & DevOps',
    shortName: 'Cloud & DevOps',
    badge: 'Infrastructure & SLA',
    icon: Server,
    timelineEstimate: '1 – 2 Weeks + Ongoing DevOps Retainer',
    cadence: 'Continuous CI/CD & 2-Week SRE Sprints',
    deliverableType: 'Automated CI/CD & Ongoing DevOps/SRE Retainer',
    leadContact: 'Principal Cloud Solutions Architect',
    image: '/images/studio-workspace.jpg',
    summary:
      'Production cloud environments engineered for 99.98% uptime. We prefer ongoing DevOps retainers: maintaining active GitHub Actions CI/CD pipelines with your team, managing cloud costs, and providing automated monitoring.',
    stages: [
      {
        number: '01',
        timeline: 'Days 01 – 03',
        title: 'Workload Audit, Security Baseline & Topology Design',
        subtitle: 'Cloud cost analysis, VPC subnet planning, and compliance security posture.',
        description:
          'We review your existing hosting bills, traffic patterns, and security perimeter. We design multi-tier VPC topologies across AWS/GCP with private subnets, security groups, database encryption at rest, and automated backup retention policies.',
        clientReceives:
          'Cloud architecture topology diagram, estimated monthly infrastructure cost model, and security posture checklist.',
        deliverables: [
          'Cloud Topology & Network Architecture Blueprint',
          'Infrastructure Cost Estimation & Optimization Plan',
          'Security Baseline & Access Policy (IAM) Spec',
          'Disaster Recovery & Backup Retention Schedule',
        ],
      },
      {
        number: '02',
        timeline: 'Week 01',
        title: 'Infrastructure as Code (IaC) & CI/CD Pipeline',
        subtitle: 'Declarative Terraform configurations and zero-downtime GitHub Actions workflows.',
        description:
          'We codify your entire infrastructure using Terraform or AWS CDK. We build automated GitHub Actions pipelines that run linter checks, automated unit tests, build Docker images, and deploy automatically to staging on branch merges.',
        clientReceives:
          'Git repository with modular Terraform scripts, GitHub Actions workflow files, and environment secret management setup.',
        deliverables: [
          'Modular Terraform / CloudFormation Codebase',
          'Automated CI/CD Deployment Pipelines',
          'Secure Secrets Management (AWS Secrets Manager)',
          'Containerized Dockerfiles & Multi-Stage Builds',
        ],
      },
      {
        number: '03',
        timeline: 'Week 02',
        title: 'Containerization, Stress Testing & Redundancy',
        subtitle: 'Production container orchestration, load stress testing, and failover verification.',
        description:
          'We deploy your services on AWS ECS/EKS or containerized App Runner with auto-scaling triggers. We execute load stress tests using k6 to identify memory bottlenecks, simulate database failovers, and verify Redis caching efficiency.',
        clientReceives:
          'Load test benchmark reports, auto-scaling configuration rules, and database replication health status.',
        deliverables: [
          'Production Container Cluster with Auto-Scaling',
          'k6 Load Stress Test Benchmark Reports',
          'Database Multi-AZ Replication & Failover Testing',
          'Redis In-Memory Cache Optimization',
        ],
      },
      {
        number: '04',
        timeline: 'Cutover & Ongoing Retainer',
        title: 'Zero-Downtime DNS Cutover & Ongoing CI/CD SRE Retainer',
        subtitle: 'Production DNS migration, active CI/CD pipeline management, and 99.98% monitored uptime SLA.',
        description:
          'We execute a blue/green or canary production cutover with zero downtime. On our ongoing DevOps retainer, we maintain your automated CI/CD pipelines, optimize multi-cloud infrastructure bills, roll out container security patches, and uphold our 99.98% platform uptime SLA with real-time Slack and PagerDuty alerting.',
        clientReceives:
          'Production environment ownership, incident escalation matrix, monitoring dashboards, and ongoing agile DevOps retainer SLA.',
        deliverables: [
          'Zero-Downtime Production DNS Cutover',
          'Continuous GitHub Actions & CI/CD Maintenance',
          'Sentry & CloudWatch Telemetry Observability',
          '99.98% Monitored Uptime SLA & Ongoing DevOps Retainer',
        ],
      },
    ],
  },
  {
    id: 'seo-growth',
    serviceName: 'Technical SEO & Growth Acceleration',
    shortName: 'Technical SEO',
    badge: 'Growth & Telemetry',
    icon: TrendingUp,
    timelineEstimate: '2 – 4 Weeks + Monthly Retainer',
    cadence: 'Bi-Weekly Agile SEO Sprints & CRO Reports',
    deliverableType: 'Schema.org JSON-LD & Continuous Growth Retainer',
    leadContact: 'Technical SEO & Performance Specialist',
    image: '/images/medpulse-intelligence.jpg',
    summary:
      'Eliminating technical crawl friction, optimizing Core Web Vitals, and driving continuous organic revenue through structured monthly agile SEO and conversion retainers.',
    stages: [
      {
        number: '01',
        timeline: 'Days 01 – 04',
        title: 'Deep Crawl Audit, Core Web Vitals & Schema Diagnostic',
        subtitle: 'Full Screaming Frog crawl, Google Search Console index diagnostic, and Lighthouse audit.',
        description:
          'We crawl your entire site to detect crawl errors, 404s, redirect chains, orphan pages, duplicate meta tags, and index bloat. We audit Core Web Vitals (LCP, INP, CLS) on real mobile devices to uncover render-blocking JavaScript and slow server response times.',
        clientReceives:
          'Technical SEO diagnostic report with prioritized severity matrix, Core Web Vitals lab & field data, and indexing discrepancy list.',
        deliverables: [
          'Complete Technical Crawl & Indexing Audit',
          'Core Web Vitals (LCP / INP / CLS) Benchmark Report',
          'Information Architecture & Internal Linking Map',
          'Prioritized Technical Fix Roadmap',
        ],
      },
      {
        number: '02',
        timeline: 'Weeks 01 – 02',
        title: 'Crawl Budget Optimization & Structured Data Injection',
        subtitle: 'Canonicalization, dynamic XML sitemaps, robots.txt, and Schema.org JSON-LD.',
        description:
          'We eliminate index bloat, configure clean robots.txt rules, and implement dynamic server-rendered sitemaps. We write and inject rich Schema.org JSON-LD structured data (Organization, LocalBusiness, Product, FAQ, Article, Breadcrumbs) to capture rich snippets in search results.',
        clientReceives:
          'Live staging with schema validation passing Google Rich Results Test, updated sitemaps, and canonical rule verifications.',
        deliverables: [
          'Google Rich Results Schema.org JSON-LD Suite',
          'Crawl Budget & Index Bloat Elimination',
          'Clean XML Sitemaps & Robots.txt Governance',
          'Mobile Core Web Vitals Speed Hardening',
        ],
      },
      {
        number: '03',
        timeline: 'Weeks 03 – 04',
        title: 'Keyword Architecture, Content Gaps & Funnel CRO',
        subtitle: 'Search intent mapping, high-converting metadata, and checkout funnel optimization.',
        description:
          'We analyze commercial search queries your competitors rank for, optimize title tags and header hierarchies, and eliminate friction on key landing pages to convert organic visitors into paying customers and leads.',
        clientReceives:
          'Keyword intent matrix, updated page metadata specs, conversion rate optimization recommendations, and A/B test setups.',
        deliverables: [
          'High-Intent Commercial Keyword Mapping',
          'On-Page Semantic Heading & Meta Optimization',
          'Landing Page Conversion Rate Optimization (CRO)',
          'Event Tracking & Conversion Goal Configuration',
        ],
      },
      {
        number: '04',
        timeline: 'Ongoing Growth Retainer',
        title: 'Search Console Telemetry & Continuous Agile SEO Retainer',
        subtitle: 'Weekly ranking monitoring, algorithm update defense, and monthly organic revenue reports.',
        description:
          'We monitor Google Search Console indexing and keyword rankings daily. On an ongoing monthly retainer, we protect your domain from sudden algorithmic shifts, execute continuous agile SEO sprints, optimize landing page conversion funnels, and deliver clear organic ROI reports.',
        clientReceives:
          'Monthly performance dashboard, executive summary report, proactive warning alerts, and continuous sprint recommendations.',
        deliverables: [
          'Automated Google Search Console Telemetry',
          'Keyword Ranking & Organic Traffic Reports',
          'Continuous Agile Technical SEO & Speed Sprints',
          'Monthly Strategy & Priority Backlog Review',
        ],
      },
    ],
  },
];
