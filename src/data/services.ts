import type { ImageMetadata } from 'astro';
import webImg from '@/assets/images/illus-build.jpg';
import snowImg from '@/assets/images/illus-run.jpg';

export type PillarId = 'build' | 'grow' | 'run' | 'more';

export const pillars: { id: PillarId; name: string; line: string }[] = [
  { id: 'build', name: 'Build', line: 'Websites, apps and online stores, made properly from day one.' },
  { id: 'grow', name: 'Grow', line: 'Get found, get clicks, and turn visitors into customers.' },
  { id: 'run', name: 'Run', line: 'We keep it working, up to date and selling after launch.' },
  { id: 'more', name: 'Beyond', line: 'Business development and people, when growth needs more than software.' },
];

export type Service = {
  slug: string;
  pillar: PillarId;
  name: string;
  short: string;
  headline: string;
  intro: string;
  offerings: { title: string; body: string }[];
  tools: string[];
  image?: ImageMetadata;
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'web-development',
    pillar: 'build',
    name: 'Websites & Web Apps',
    short: 'Business websites, portals, CRMs and SaaS products that load fast and are easy to change.',
    headline: 'Websites and web apps that load fast and are easy to change.',
    intro:
      'From a company website to a full SaaS product, we design and build it, write the code your next developer will thank us for, and hand you everything. You own the code, the accounts and the domain from day one.',
    offerings: [
      { title: 'Business websites', body: 'Fast, search-friendly sites for clinics, consultancies, recruiters and brands, built to turn visitors into enquiries.' },
      { title: 'Web applications', body: 'Customer portals, booking and intake systems, CRMs, dashboards and learning platforms built around how your team actually works.' },
      { title: 'SaaS products', body: 'Accounts, billing, roles and admin panels. We take products from first version to paying users.' },
      { title: 'Integrations & automation', body: 'Connect your tools, payment gateways and data sources, and automate the repetitive work in between.' },
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Vercel'],
    image: webImg,
    faqs: [
      { q: 'Do we own the code?', a: 'Yes. The code lives in your own GitHub or GitLab account from the first commit, and every account, domain and hosting service is registered to you.' },
      { q: 'Can you take over a site or app someone else built?', a: 'Yes. We start with a review of the existing code and hosting, fix what is urgent, and then carry on improving it.' },
      { q: 'How long does a website take?', a: 'Most business websites take 3–6 weeks from kick-off to launch. Web apps depend on scope; we agree milestones and dates before we start.' },
    ],
    metaTitle: 'Website & Web App Development',
    metaDescription:
      'Custom websites, web apps, portals, CRMs and SaaS products for businesses in the US and India. Built with Next.js, React and Node.js by Zemprolabs.',
  },
  {
    slug: 'ecommerce',
    pillar: 'build',
    name: 'E-commerce',
    short: 'Shopify and custom online stores, with local payments, product sourcing and dropshipping.',
    headline: 'Online stores that are quick to buy from and easy to run.',
    intro:
      'We build Shopify and custom stores for brands selling in the US, India and beyond. We set up the payments your customers expect and, if you need it, find the suppliers and automate fulfilment too.',
    offerings: [
      { title: 'Shopify stores', body: 'Custom themes, apps and checkout setups on Shopify and Shopify Plus, tuned for speed on mobile.' },
      { title: 'Custom storefronts', body: 'Headless and fully custom stores when a template can’t do what your brand needs.' },
      { title: 'Payments everywhere', body: 'Stripe and USD for the US; UPI, net banking, cards and cash on delivery in India; multi-currency for the rest.' },
      { title: 'Sourcing & dropshipping', body: 'We find and vet suppliers, especially in the US, and connect them to your store so orders fulfil themselves.' },
    ],
    tools: ['Shopify Plus', 'Next.js', 'Stripe', 'Razorpay', 'UPI'],
    faqs: [
      { q: 'Shopify or custom?', a: 'Most stores should start on Shopify: it is reliable and easy to manage. We recommend custom when you need something Shopify genuinely can’t do.' },
      { q: 'Can you run the store after launch?', a: 'Yes. Several clients hand us everything after launch: listings, ads, SEO and sales. See our maintenance and managed operations service.' },
    ],
    metaTitle: 'E-commerce & Shopify Development',
    metaDescription:
      'Shopify and custom e-commerce stores with Stripe, UPI and multi-currency checkout, plus US product sourcing and dropshipping. Zemprolabs.',
  },
  {
    slug: 'mobile-apps',
    pillar: 'build',
    name: 'Mobile Apps',
    short: 'iOS and Android apps from a single codebase, published to the App Store and Google Play.',
    headline: 'iOS and Android apps, built once and shipped to both stores.',
    intro:
      'We build mobile apps with React Native so you get iOS and Android from one codebase, sharing a backend with your website. We take care of publishing to both stores too.',
    offerings: [
      { title: 'Cross-platform apps', body: 'One codebase for iOS and Android, with native performance where it matters.' },
      { title: 'Video & learning apps', body: 'Streaming that adapts to slow connections, course progress and in-app payments.' },
      { title: 'Shared backend', body: 'Your app, website and admin tools work from the same data, so nothing gets out of sync.' },
      { title: 'Store publishing', body: 'App Store and Google Play listings, reviews and release updates handled for you.' },
    ],
    tools: ['React Native', 'TypeScript', 'Node.js', 'FastAPI'],
    faqs: [
      { q: 'Do I need separate iOS and Android apps?', a: 'Usually not. One React Native codebase covers both, which saves time and money and keeps features in step.' },
    ],
    metaTitle: 'Mobile App Development (iOS & Android)',
    metaDescription:
      'Cross-platform iOS and Android app development with React Native, from build to App Store and Google Play release. Zemprolabs.',
  },
  {
    slug: 'seo',
    pillar: 'grow',
    name: 'SEO',
    short: 'Technical, local and product SEO so the right people find you on Google.',
    headline: 'Show up when your customers search.',
    intro:
      'We fix what stops search engines from understanding your site, then build the pages and content that bring in visitors who are ready to buy, book or enquire.',
    offerings: [
      { title: 'Technical SEO', body: 'Speed, indexing, site structure and structured data, so search engines can read every page properly.' },
      { title: 'Local SEO', body: 'Google Business Profile, local pages and citations for clinics and service businesses in a specific city.' },
      { title: 'Product SEO', body: 'Category and product pages for online stores, written and structured to rank.' },
      { title: 'Monthly reporting', body: 'Rankings, traffic and enquiries in plain language, with what we will do next.' },
    ],
    tools: ['Google Search Console', 'Google Analytics', 'Schema.org'],
    faqs: [
      { q: 'How long does SEO take?', a: 'Technical fixes can help within weeks. Ranking for competitive terms usually takes 3–6 months of steady work.' },
    ],
    metaTitle: 'SEO Services: Technical, Local & E-commerce',
    metaDescription:
      'Technical, local and e-commerce SEO for businesses in the US and India. Clear monthly reporting from Zemprolabs.',
  },
  {
    slug: 'paid-ads-social',
    pillar: 'grow',
    name: 'Ads & Social Media',
    short: 'Google Ads, Meta Ads and social media run around leads and sales.',
    headline: 'Ads and social media judged on leads and sales.',
    intro:
      'We plan, run and improve your Google and Meta campaigns and keep your social channels active. We report on what matters: enquiries, bookings and orders.',
    offerings: [
      { title: 'Google Ads', body: 'Search, Shopping and Performance Max campaigns, set up with proper conversion tracking.' },
      { title: 'Meta Ads', body: 'Facebook and Instagram campaigns with creative, audiences and retargeting.' },
      { title: 'Social media', body: 'Regular posts, content calendars and community management that keep your brand active.' },
      { title: 'Lead handling', body: 'Make sure every enquiry from your ads is captured, routed and followed up.' },
    ],
    tools: ['Google Ads', 'Meta Ads', 'Google Analytics'],
    faqs: [
      { q: 'Do you need a minimum ad budget?', a: 'No fixed minimum. We will tell you honestly what budget is needed to get useful results in your market.' },
    ],
    metaTitle: 'Google Ads, Meta Ads & Social Media Management',
    metaDescription:
      'Google Ads, Meta Ads and social media management focused on leads and sales, for businesses in the US and India. Zemprolabs.',
  },
  {
    slug: 'maintenance',
    pillar: 'run',
    name: 'Maintenance & Managed Ops',
    short: 'Updates, fixes, product listings and day-to-day operations handled for you.',
    headline: 'After launch, we keep it running so you don’t have to.',
    intro:
      'Websites and stores need constant small jobs: updates, fixes, new products, new pages. We do that work on a monthly basis, and for some clients we run the whole digital operation end to end.',
    offerings: [
      { title: 'Care & maintenance', body: 'Security updates, backups, uptime checks and fixes, with a team who already knows your site.' },
      { title: 'Content & catalogue', body: 'New pages, product listings, price changes and seasonal updates whenever you need them.' },
      { title: 'Managed operations', body: 'We run your online store or lead pipeline day to day: listings, campaigns, follow-ups and reporting.' },
      { title: 'Continuous improvement', body: 'A steady flow of improvements based on what customers actually do on your site.' },
    ],
    tools: ['Monitoring', 'Backups', 'Shopify', 'Vercel'],
    faqs: [
      { q: 'Can you maintain a site you didn’t build?', a: 'Yes. We review it first so we know what we are taking on, then look after it like our own.' },
    ],
    metaTitle: 'Website Maintenance & Managed Operations',
    metaDescription:
      'Website and online store maintenance, product listings and fully managed digital operations on a monthly plan. Zemprolabs.',
  },
  {
    slug: 'servicenow',
    pillar: 'run',
    name: 'ServiceNow',
    short: 'ITSM, IRM/GRC and CMDB support, automation and safe upgrades.',
    headline: 'ServiceNow that stays clean, automated and safe to upgrade.',
    intro:
      'We support enterprise ServiceNow platforms: tuning ITSM, automating risk and compliance, keeping the CMDB accurate and making sure releases and upgrades don’t break anything.',
    offerings: [
      { title: 'ITSM', body: 'Incident, problem and change processes tuned so tickets reach the right team faster.' },
      { title: 'IRM / GRC', body: 'Risk and compliance assessments automated with Flow Designer.' },
      { title: 'CMDB health', body: 'Validate configuration items and relationships so your CMDB matches reality.' },
      { title: 'Releases & upgrades', body: 'Update-set conflict checks and upgrade testing before anything reaches production.' },
    ],
    tools: ['ITSM', 'ITAM', 'IRM / GRC', 'CMDB', 'Flow Designer', 'Integration Hub'],
    image: snowImg,
    faqs: [
      { q: 'Can you work alongside our internal ServiceNow team?', a: 'Yes. We often add capacity to existing teams and follow your release and change processes.' },
    ],
    metaTitle: 'ServiceNow Consulting: ITSM, IRM & CMDB',
    metaDescription:
      'ServiceNow ITSM, IRM/GRC and CMDB support, Flow Designer automation and safe upgrades for enterprises. Zemprolabs.',
  },
  {
    slug: 'business-development',
    pillar: 'more',
    name: 'Business Development & Research',
    short: 'Market research, go-to-market planning, client sourcing and pitch material.',
    headline: 'Research, positioning and pipeline for growing businesses.',
    intro:
      'Sometimes growth isn’t a software problem. We research markets and competitors, help shape what you sell, find the clients to sell it to and build the decks that close the deal.',
    offerings: [
      { title: 'Market & competitor research', body: 'Who is buying, what they pay and who you are up against, summarised so you can decide.' },
      { title: 'Go-to-market planning', body: 'Define your offer, your ideal customer and where to find them.' },
      { title: 'Client sourcing', body: 'Outreach and introductions that build a real pipeline of conversations.' },
      { title: 'Profiles & pitch decks', body: 'Company profiles, proposals and presentations that make you look as good as you are.' },
    ],
    tools: ['Research', 'CRM', 'Outreach'],
    faqs: [],
    metaTitle: 'Business Development & Market Research',
    metaDescription:
      'Market research, go-to-market planning, client sourcing and pitch decks for growing businesses. Zemprolabs.',
  },
  {
    slug: 'talent-sourcing',
    pillar: 'more',
    name: 'Talent Sourcing',
    short: 'Technical and healthcare talent, sourced and screened for you.',
    headline: 'The right people, found and screened for you.',
    intro:
      'We source and screen specialists for technology and healthcare roles, from ServiceNow consultants and software engineers to clinical staff, and can embed them directly in your projects.',
    offerings: [
      { title: 'Tech talent', body: 'Engineers and ServiceNow consultants with the skills your project actually needs.' },
      { title: 'Healthcare talent', body: 'Sourcing and screening support for medical recruitment firms.' },
      { title: 'Screening', body: 'Technical and background checks before anyone reaches your shortlist.' },
      { title: 'Embedded teams', body: 'Specialists placed directly into your delivery team for as long as you need them.' },
    ],
    tools: ['Sourcing', 'Screening', 'Placement'],
    faqs: [],
    metaTitle: 'Tech & Healthcare Talent Sourcing',
    metaDescription:
      'Sourcing and screening for software, ServiceNow and healthcare roles, with embedded team options. Zemprolabs.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
