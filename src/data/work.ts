import type { ImageMetadata } from 'astro';
import servicenowImg from '@/assets/images/illus-run.jpg';
import unstichedImg from '@/assets/images/illus-unstiched.jpg';
import medpulseImg from '@/assets/images/illus-medpulse.jpg';
import cynosureImg from '@/assets/images/illus-cynosure.jpg';
import bilimImg from '@/assets/images/illus-bilim.jpg';

// Real screenshots of the live sites, and stills from the walkthrough videos
import bmUs1 from '@/assets/work/baemeds-usa-1.jpg';
import bmUs2 from '@/assets/work/baemeds-usa-2.jpg';
import bmUs3 from '@/assets/work/baemeds-usa-3.jpg';
import qalb1 from '@/assets/work/the-qalb-1.jpg';
import qalb2 from '@/assets/work/the-qalb-2.jpg';
import qalb3 from '@/assets/work/the-qalb-3.jpg';
import thc1 from '@/assets/work/talent-hunters-consulting-1.jpg';
import thc2 from '@/assets/work/talent-hunters-consulting-2.jpg';
import thc3 from '@/assets/work/talent-hunters-consulting-3.jpg';
import conav1 from '@/assets/work/conavlytics-1.jpg';
import conav2 from '@/assets/work/conavlytics-2.jpg';
import conav3 from '@/assets/work/conavlytics-3.jpg';
import devit1 from '@/assets/work/devit-1.jpg';
import devit2 from '@/assets/work/devit-2.jpg';
import auvia1 from '@/assets/work/auvia-1.jpg';
import bmIn1 from '@/assets/work/baemeds-india-1.jpg';
import bmIn2 from '@/assets/work/baemeds-india-2.jpg';
import bmIn3 from '@/assets/work/baemeds-india-3.jpg';
import erus1 from '@/assets/work/erus-academy-1.jpg';
import erus2 from '@/assets/work/erus-academy-2.jpg';
import erus3 from '@/assets/work/erus-academy-3.jpg';
import med1 from '@/assets/work/meduscore-1.jpg';
import med2 from '@/assets/work/meduscore-2.jpg';
import med3 from '@/assets/work/meduscore-3.jpg';
// Phone screenshots of the live sites (390 x 844)
import m_baemeds_usa from '@/assets/work/baemeds-usa-m.jpg';
import m_erus_academy from '@/assets/work/erus-academy-m.jpg';
import m_auvia from '@/assets/work/auvia-m.jpg';
import m_meduscore from '@/assets/work/meduscore-m.jpg';
import m_baemeds_india from '@/assets/work/baemeds-india-m.jpg';
import m_talent_hunters_consulting from '@/assets/work/talent-hunters-consulting-m.jpg';
import m_the_qalb from '@/assets/work/the-qalb-m.jpg';
import m_conavlytics from '@/assets/work/conavlytics-m.jpg';
import m_devit from '@/assets/work/devit-m.jpg';

export type CaseStudy = {
  slug: string;
  client: string;
  headline: string;
  summary: string;
  sector: string;
  location: string;
  status: 'Live' | 'Ongoing' | 'Confidential';
  services: string[]; // service slugs
  url?: string;
  image?: ImageMetadata;
  /** Phone screenshot of the live site, for portrait cards */
  mobile?: ImageMetadata;
  video?: string;
  challenge: string;
  approach: string;
  delivered: string[];
  stack: string[];
  featured?: boolean;
  /** Backdrop colour behind the browser frame */
  tint?: 'sand' | 'forest' | 'ember' | 'mist';
  /** screen = website screenshot/video shown in a browser frame; art = full-bleed illustration */
  kind?: 'screen' | 'art';
  /** Extra screens for the case-study gallery */
  gallery?: ImageMetadata[];
};

export const work: CaseStudy[] = [
  {
    slug: 'baemeds-usa',
    tint: 'forest',
    client: 'BaeMeds USA',
    headline: 'Launching a US medical supplies brand, from sourcing to sales.',
    summary:
      'We found the suppliers, built the store, automated dropshipping and now run the ads, social and sales for baemeds.com.',
    sector: 'Healthcare e-commerce',
    location: 'United States',
    status: 'Live',
    services: ['ecommerce', 'paid-ads-social', 'maintenance'],
    url: 'https://baemeds.com',
    image: bmUs1,
    mobile: m_baemeds_usa,
    gallery: [bmUs1, bmUs2, bmUs3],
    challenge:
      'BaeMeds wanted to sell medical supplies directly to US customers without holding stock or hiring an operations team. They needed reliable US suppliers, a store people trust with a medical purchase, and someone to keep orders and marketing moving every day.',
    approach:
      'We vetted suppliers and distributors across the US and built the catalogue around them. Orders flow straight from the storefront to the supplier, so there is no manual hand-off. After launch we stayed on to run Google and Meta campaigns, social channels, site updates and the sales pipeline.',
    delivered: [
      'US supplier sourcing and catalogue vetting',
      'Automated dropship order flow',
      'Storefront with USD checkout on Stripe',
      'Google Ads and Meta Ads campaigns',
      'Ongoing social, maintenance and sales operations',
    ],
    stack: ['Shopify Plus', 'Next.js', 'Node.js', 'Stripe', 'Google Ads', 'Meta Ads'],
    featured: true,
  },
  {
    slug: 'erus-academy',
    tint: 'ember',
    client: 'Erus Academy',
    headline: 'An AI English-fluency school on web, iOS and Android.',
    summary:
      'A learning platform, admissions CRM and two native apps, built from zero, that teach interview-ready English with AI video tutors.',
    sector: 'EdTech',
    location: 'India',
    status: 'Live',
    services: ['web-development', 'mobile-apps'],
    url: 'https://erusacademy.in',
    image: erus1,
    mobile: m_erus_academy,
    gallery: [erus1, erus2, erus3],
    video: '/videos/work/erus-academy.mp4',
    challenge:
      'Erus Academy teaches spoken English to graduates and job seekers preparing for interviews. They needed courses delivered by AI video avatars, conversation practice that gives real feedback, and a way to manage counselling and admissions, on every device students use.',
    approach:
      'We designed and built the whole system: a web learning portal, an admissions and counsellor CRM, and native iOS and Android apps sharing one backend. Language models power the conversation practice and speaking assessments, and video streams adapt to slow mobile connections.',
    delivered: [
      'Student learning portal at erusacademy.in',
      'Admissions and counsellor CRM',
      'iOS app (App Store) and Android app (Google Play)',
      'AI video-avatar course delivery',
      'AI conversation practice and speaking assessment',
      'Razorpay checkout',
    ],
    stack: ['React', 'TypeScript', 'React Native', 'Node.js', 'FastAPI', 'Razorpay'],
    featured: true,
  },
  {
    slug: 'auvia',
    tint: 'sand',
    client: 'Auvia Behavioral Centers',
    headline: 'A website and intake system that fills an ABA therapy clinic.',
    summary:
      'For a children’s therapy clinic in Irving, Texas: a warm website, a patient-intake CRM, and a growth retainer covering SEO, ads and social.',
    sector: 'Healthcare',
    location: 'Irving, Texas, US',
    status: 'Live',
    services: ['web-development', 'seo', 'paid-ads-social', 'maintenance'],
    url: 'https://auviatherapy.com',
    image: auvia1,
    mobile: m_auvia,
    gallery: [auvia1],
    video: '/videos/work/auvia.mp4',
    challenge:
      'Parents looking for ABA therapy are anxious and short on time. Auvia needed a site that reassures them, an easy way to request an assessment, and a system that makes sure no family enquiry gets lost, while reaching families across Dallas–Fort Worth.',
    approach:
      'We built the clinic website and a custom intake CRM that sorts and routes each enquiry to the right person. Since launch we have run local SEO, Google and Meta campaigns and social media, and we look after the site and the lead pipeline month to month.',
    delivered: [
      'Clinic website at auviatherapy.com',
      'Patient intake and assessment CRM',
      'Lead triage and routing',
      'Local SEO for Dallas–Fort Worth',
      'Ongoing ads, social and maintenance',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel', 'Google Ads', 'Meta Ads'],
    featured: true,
  },
  {
    slug: 'meduscore',
    tint: 'mist',
    client: 'MedusCore',
    headline: 'Running the digital side of a UK healthcare recruiter.',
    summary:
      'Website, company profile and pitch material for a UK medical staffing firm, plus day-to-day lead generation and candidate sourcing.',
    sector: 'Healthcare recruitment',
    location: 'United Kingdom',
    status: 'Live',
    services: ['web-development', 'maintenance', 'business-development', 'talent-sourcing'],
    url: 'https://meduscore.co.uk/',
    image: med1,
    mobile: m_meduscore,
    gallery: [med1, med2, med3],
    video: '/videos/work/meduscore.mp4',
    challenge:
      'MedusCore places doctors and nurses and helps with credentialing. They needed a credible online presence and polished material for hospital clients, and they needed a steady flow of both leads and candidates without building an in-house team.',
    approach:
      'We built the recruitment website and wrote and designed their company profile and executive pitch decks. We now run the operational side as well: site maintenance, lead generation, candidate sourcing and new presentations whenever they need them.',
    delivered: [
      'Recruitment website',
      'Company profile and executive collateral',
      'Pitch decks and presentations',
      'Lead generation and candidate sourcing',
      'Ongoing website maintenance',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    slug: 'baemeds-india',
    tint: 'sand',
    client: 'BaeMeds India',
    headline: 'A healthcare store the owners never have to touch.',
    summary:
      'We built baemeds.in and run all of it: catalogue, SEO, Google Ads, marketing and sales.',
    sector: 'Healthcare e-commerce',
    location: 'India',
    status: 'Live',
    services: ['ecommerce', 'seo', 'paid-ads-social', 'maintenance'],
    url: 'https://www.baemeds.in/',
    image: bmIn1,
    mobile: m_baemeds_india,
    gallery: [bmIn1, bmIn2, bmIn3],
    video: '/videos/work/baemeds.mp4',
    challenge:
      'BaeMeds wanted an Indian online store for healthcare products, but did not want to hire people to add products, run campaigns or fix things when they break.',
    approach:
      'We built the store with checkout that suits Indian buyers (UPI, net banking and cards) and inventory that stays in sync. Then we took over operations completely: new product listings, Google Ads, marketing funnels, sales follow-up, SEO and maintenance.',
    delivered: [
      'Storefront at baemeds.in',
      'UPI, net banking and card checkout',
      'Product listing and catalogue management',
      'Google Ads and marketing campaigns',
      'SEO, maintenance and sales operations',
    ],
    stack: ['Shopify Plus', 'React', 'Node.js', 'Razorpay', 'Google Ads'],
  },
  {
    slug: 'talent-hunters-consulting',
    tint: 'forest',
    client: 'Talent Hunters Consulting',
    headline: 'A global website for an executive search firm in energy.',
    summary:
      'Corporate website, candidate intake and ongoing SEO for a recruiter serving oil & gas and energy across KSA, UAE, the US and India.',
    sector: 'Executive search',
    location: 'KSA · UAE · US · India',
    status: 'Live',
    services: ['web-development', 'seo'],
    url: 'https://www.talhuntconsult.com/',
    image: thc1,
    mobile: m_talent_hunters_consulting,
    gallery: [thc1, thc2, thc3],
    challenge:
      'THC recruits technical and leadership talent for oil & gas, energy and utilities. They needed a site that looks credible to industrial clients in the Gulf and the US, makes it easy for candidates to apply, and shows up in search.',
    approach:
      'We built the website with a section for each industry practice and a candidate submission flow. We added structured data from the start and continue to manage their technical SEO.',
    delivered: [
      'Corporate website',
      'Industry practice sections',
      'Candidate submission flow',
      'Technical SEO and structured data',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'medpulse-gcc',
    kind: 'art',
    client: 'MedPulse GCC',
    headline: 'Automated medical news and research tracking for the Gulf.',
    summary:
      'An internal tool for Talent Hunters Consulting that gathers, sorts and summarises clinical news and health advisories across the GCC.',
    sector: 'Healthcare intelligence',
    location: 'GCC',
    status: 'Live',
    services: ['web-development'],
    image: medpulseImg,
    challenge:
      'THC’s healthcare team spent hours tracking medical research, regulatory updates and health advisories across Gulf countries by hand.',
    approach:
      'We built an automated system that pulls in publications and advisories, checks and categorises them, and shows them on a searchable dashboard with topic filters.',
    delivered: [
      'Automated ingestion of GCC health advisories',
      'Categorisation and topic filters',
      'Searchable dashboard',
      'Automatic news summaries',
    ],
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python'],
  },
  {
    slug: 'the-qalb',
    tint: 'ember',
    client: 'The Qalb',
    headline: 'An online store that lets you read a perfume before you smell it.',
    summary:
      'An e-commerce site for an artisanal fragrance house, with visual scent-note breakdowns and quick checkout.',
    sector: 'Fragrance e-commerce',
    location: 'India',
    status: 'Live',
    services: ['ecommerce'],
    url: 'https://qalbfragrances.com/',
    image: qalb1,
    mobile: m_the_qalb,
    gallery: [qalb1, qalb2, qalb3],
    challenge:
      'Perfume is hard to sell online because customers can’t smell it. The Qalb needed a way to describe each fragrance clearly and a checkout that works for buyers in India and abroad.',
    approach:
      'We helped build a storefront where each product shows its top, heart and base notes visually. Adding to the bag is instant, and checkout supports UPI, cards and cash on delivery.',
    delivered: [
      'Custom storefront',
      'Visual scent-note breakdowns',
      'Slide-out bag and quick checkout',
      'UPI, card and cash-on-delivery payments',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Razorpay', 'Cloudflare'],
  },
  {
    slug: 'unstiched',
    kind: 'art',
    client: 'Unstiched',
    headline: 'Building a designer apparel brand from the ground up.',
    summary:
      'We are helping launch a luxury fashion label: the storefront, the lookbooks, the catalogue and the launch plan.',
    sector: 'Fashion e-commerce',
    location: 'India',
    status: 'Ongoing',
    services: ['ecommerce', 'business-development'],
    image: unstichedImg,
    challenge:
      'Unstiched is a new designer label. They need a store that feels as premium as the clothes, a way to manage product photography and listings, and a plan for launch.',
    approach:
      'We are building a fast storefront with editorial lookbooks and a slide-out bag, and planning the catalogue and launch alongside the founders, the same end-to-end way we work with BaeMeds.',
    delivered: [
      'Designer storefront',
      'Mobile lookbooks',
      'Slide-out bag and quick add',
      'Launch roadmap',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Vercel'],
  },
  {
    slug: 'enterprise-servicenow',
    kind: 'art',
    client: 'Global enterprise (confidential)',
    headline: 'Keeping an enterprise ServiceNow platform healthy and safe to upgrade.',
    summary:
      'Ongoing ServiceNow support across ITSM, risk and compliance (IRM/GRC) and the CMDB for a global enterprise.',
    sector: 'Enterprise IT',
    location: 'Global',
    status: 'Confidential',
    services: ['servicenow'],
    image: servicenowImg,
    challenge:
      'A large enterprise relies on ServiceNow for incidents, changes, risk and compliance. Every release and platform upgrade could break their customisations, and the CMDB kept drifting out of date.',
    approach:
      'We look after the platform day to day. We tune incident and change routing, automate risk and compliance checks with Flow Designer, validate CMDB relationships, and check every update set for conflicts before it ships.',
    delivered: [
      'ITSM incident, problem and change improvements',
      'Automated risk and compliance assessments',
      'CMDB relationship validation',
      'Update-set conflict checks before release',
      'Upgrade support',
    ],
    stack: ['ServiceNow ITSM', 'IRM / GRC', 'Flow Designer', 'Integration Hub', 'REST API'],
  },
  {
    slug: 'cynosure',
    kind: 'art',
    client: 'Cynosure IT Innovations',
    headline: 'Growing a ServiceNow consultancy with people and pipeline.',
    summary:
      'We sourced ServiceNow consultants across ITSM, ITAM and IRM and ran business development to win new enterprise work.',
    sector: 'IT consulting',
    location: 'India · Global',
    status: 'Live',
    services: ['servicenow', 'talent-sourcing', 'business-development'],
    url: 'https://gocynosure.com',
    image: cynosureImg,
    challenge:
      'Cynosure wanted to grow its ServiceNow practice. That meant finding qualified consultants quickly and winning more enterprise contracts to keep them busy.',
    approach:
      'We sourced and placed certified ServiceNow talent across ITSM, IT asset management and IRM, helped shape how they deliver those services, and ran the business development that brought in new contracts.',
    delivered: [
      'ServiceNow consultant sourcing and placement',
      'ITSM, ITAM and IRM service design',
      'Business development pipeline',
      'Partnership framework',
    ],
    stack: ['ServiceNow ITSM', 'ITAM', 'IRM / GRC'],
  },
  {
    slug: 'conavlytics',
    tint: 'forest',
    client: 'Conavlytics',
    headline: 'A team and the tools for a risk-analytics firm.',
    summary:
      'We sourced the engineers and helped build custom risk-management (IRM) tools for an enterprise analytics company.',
    sector: 'Risk & analytics',
    location: 'Global',
    status: 'Live',
    services: ['talent-sourcing', 'web-development'],
    url: 'https://conavlytics.com',
    image: conav1,
    mobile: m_conavlytics,
    gallery: [conav1, conav2, conav3],
    challenge:
      'Conavlytics had enterprise deadlines and needed experienced developers and risk-platform specialists faster than they could hire them.',
    approach:
      'We found and embedded the specialists, set up the architecture for their custom IRM tools, and helped deliver the core modules.',
    delivered: [
      'Engineering talent sourcing',
      'Custom IRM risk tools',
      'Data and workflow modules',
      'Risk assessment integrations',
    ],
    stack: ['React', 'TypeScript', 'Python'],
  },
  {
    slug: 'bilim',
    kind: 'art',
    client: 'Bilim',
    headline: 'Architecture, engineers and advice for a private commerce platform.',
    summary:
      'For a confidential client, we helped design and build an e-commerce platform and supplied the engineers to finish it.',
    sector: 'E-commerce',
    location: 'Global',
    status: 'Confidential',
    services: ['ecommerce', 'talent-sourcing'],
    image: bilimImg,
    challenge:
      'Bilim needed a custom e-commerce platform built under strict confidentiality and a dependable team to deliver it.',
    approach:
      'We advised on the architecture, helped build the platform with secure multi-currency payments, and sourced engineers to carry out the roadmap.',
    delivered: [
      'Custom e-commerce platform',
      'Architecture plan',
      'Multi-currency payments',
      'Engineering team sourcing',
    ],
    stack: ['Next.js', 'React', 'Node.js'],
  },
  {
    slug: 'devit',
    tint: 'ember',
    client: 'DevIt',
    headline: 'Helping a new digital agency set up and win its first clients.',
    summary:
      'We advised DevIt on setting up the business, shaped their services and brought in their first paying clients.',
    sector: 'Digital agency',
    location: 'India · Global',
    status: 'Live',
    services: ['business-development'],
    url: 'https://www.wedevit.in',
    image: devit1,
    mobile: m_devit,
    gallery: [devit1, devit2],
    challenge:
      'DevIt was starting from zero: no company structure, no defined services and no clients.',
    approach:
      'We worked as their incubator. We advised on company setup, helped define their services and delivery process, and sourced their first client projects to get them moving.',
    delivered: [
      'Business setup and operations framework',
      'Service design',
      'First client sourcing',
      'Go-to-market plan',
    ],
    stack: ['Business consulting', 'Client sourcing'],
  },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
