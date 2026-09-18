import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'development',
    num: '01',
    title: 'Websites & Apps',
    shortDesc: 'Clean websites, mobile apps, and custom web tools that work smoothly, load fast, and don’t break.',
    longDesc: 'Whether you need a brand-new website, an e-commerce store, a mobile app, or a custom tool for your team, we build it right. You get clean, dependable code, weekly progress previews you can click through, and direct communication with the engineers building your product.',
    capabilities: [
      'Custom Websites & Web Applications',
      'Android & iOS Mobile Apps (Native & Cross-Platform)',
      'Shopify & Custom E-Commerce Storefronts',
      'Customer Dashboards & SaaS Software',
      'Internal Business Tools & Daily Automation',
      'Speeding Up, Fixing & Modernizing Existing Code',
      'Payment Gateway Setup (Razorpay, Stripe, UPI & Cards)',
      'Secure Cloud Databases & User Login Systems'
    ],
    techStack: [
      'React & Next.js',
      'TypeScript',
      'Android & iOS',
      'Node.js',
      'Python',
      'Shopify',
      'Firebase & AWS',
      'PostgreSQL',
      'REST & GraphQL APIs',
      'Direct WhatsApp Sync'
    ],
    highlight: 'Direct collaboration with senior developers, clear milestones, and zero technical jargon.'
  },
  {
    id: 'seo-growth',
    num: '02',
    title: 'SEO & Search Visibility',
    shortDesc: 'Help ideal customers find your business on Google with fast page speeds, clean structure, and clear content.',
    longDesc: 'No shady tricks, fake backlinks, or empty guarantees. We fix the real technical issues that hold websites back: slow loading speeds, broken links, missing search tags, and confusing page layouts so search engines can easily index and rank your pages.',
    capabilities: [
      'Fixing site speed & Core Web Vitals (sub-second mobile loading)',
      'Google Search Console setup & indexation error cleanup',
      'E-commerce product search optimization & rich snippets',
      'Clean sitemaps and structured search tags (Schema.org)',
      'Mobile responsiveness & layout alignment',
      'Clear page structure so search engines understand your business',
      'Ongoing keyword ranking and organic traffic monitoring'
    ],
    techStack: ['Technical SEO Audits', 'Core Web Vitals', 'Schema.org', 'Google Search Console', 'Product SEO', 'Brand Identity Systems'],
    highlight: 'Practical, honest SEO that speeds up your website and helps customers find you naturally.'
  },
  {
    id: 'enterprise',
    num: '03',
    title: 'Business Automation & ServiceNow',
    shortDesc: 'Streamline daily business workflows, connect separate software tools, and custom ServiceNow setups.',
    longDesc: 'If your team is wasting hours copying data between spreadsheets or struggling with clunky enterprise tools, we connect your systems so information flows automatically, securely, and without mistakes.',
    capabilities: [
      'Custom ServiceNow development & user-friendly portals',
      'Automating repetitive internal tasks, tickets & approvals',
      'Connecting your CRM, ERP, and customer support tools',
      'Employee onboarding & internal service workflows',
      'Asset and configuration lifecycle tracking',
      'Centralized reporting dashboards for leadership',
      'Secure cloud infrastructure & role-based access controls'
    ],
    techStack: ['ServiceNow', 'GlideScript', 'Flow Designer', 'Integration Hub', 'REST APIs', 'Cloud Infrastructure', 'Enterprise Security'],
    highlight: 'Practical business automation that saves your team hours of manual work every single week.'
  },
  {
    id: 'marketing',
    num: '04',
    title: 'Digital Marketing & Ads',
    shortDesc: 'Clear, honest digital advertising and social media campaigns that bring in real paying customers.',
    longDesc: 'We help you run targeted campaigns on Google and social media without burning through your budget. You get simple, plain-English weekly reports showing exactly how much you spent and what leads or sales were generated.',
    capabilities: [
      'Google Search & Shopping Ads setup and daily management',
      'Meta Ads (Targeted Instagram & Facebook campaigns)',
      'Social media channel management & consistent posting',
      'Transparent conversion tracking (knowing where every order came from)',
      'Clear ad copywriting & eye-catching visual messaging',
      'Landing page optimization to turn clicks into buyers',
      'Weekly plain-English performance summaries'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'GA4 Analytics', 'Google Tag Manager', 'Content Strategy', 'Attribution Modeling'],
    highlight: 'Transparent ad management focused on actual leads and sales, never vanity metrics.'
  },
  {
    id: 'research',
    num: '05',
    title: 'Market & Tech Research',
    shortDesc: 'Thorough market research, competitor checkups, and technical feasibility studies before you invest.',
    longDesc: 'Before spending tens of thousands on a new product or business expansion, we help you check the ground reality: who the competitors are, what customers are asking for, and whether the technology makes financial sense.',
    capabilities: [
      'Competitor feature, pricing, and positioning comparisons',
      'Customer demand & market opportunity checks',
      'Technology cost & feasibility estimates before development starts',
      'Operational bottleneck reviews & growth planning',
      'Product roadmap and milestone recommendations',
      'Clear executive summary reports you can present to partners or investors'
    ],
    techStack: ['Market Intelligence', 'Competitive Benchmarking', 'Financial Modeling', 'Process Mapping', 'Feasibility Audits'],
    highlight: 'Objective, fact-based insights so you can invest your time and budget with total confidence.'
  },
  {
    id: 'recruitment',
    num: '06',
    title: 'Hiring & Staffing',
    shortDesc: 'Finding, screening, and vetting qualified developers, engineers, and healthcare professionals for your team.',
    longDesc: 'We take the headache out of hiring. Our team sources, pre-screens, and technically tests candidates to ensure they have the exact technical abilities, communication skills, and work ethic your company requires.',
    capabilities: [
      'Senior software engineers, mobile developers & technical leads',
      'Healthcare & medical specialist placements (via MedusCore)',
      'Practical technical interviews and hands-on coding tests',
      'Thorough credentialing, license checks & reference verification',
      'International talent sourcing and visa documentation support',
      'Smooth onboarding support for remote or in-house hires'
    ],
    techStack: ['Global Sourcing Networks', 'Technical & Clinical Evaluation', 'Credentialing Coordination', 'Integration Frameworks'],
    highlight: 'Rigorous vetting by real practitioners, so you only spend time interviewing top candidates.'
  }
];
