export interface TrustMetric {
  value: string;
  label: string;
  detail: string;
}

export const agencyMetrics: TrustMetric[] = [
  {
    value: '6',
    label: 'Core Disciplines',
    detail: 'Development, SEO & Growth, Enterprise, Marketing, Research, and Recruitment.'
  },
  {
    value: '1',
    label: 'Dedicated Point of Contact',
    detail: 'Direct access to your senior engineering lead—no junior account manager middlemen.'
  },
  {
    value: '0',
    label: 'Third-Party Hand-Offs',
    detail: 'Eliminating the friction, delays, and blame-shifting of managing multiple disjointed agencies.'
  },
  {
    value: '<24h',
    label: 'Direct Response Window',
    detail: 'Rapid technical triage and dedicated support availability across all active engagements.'
  }
];

export interface ClientProject {
  name: string;
  domain?: string;
  sector: string;
  region: string;
  badge?: string;
}

export const clientProjectsList: ClientProject[] = [
  { name: 'BaeMeds India', domain: 'baemeds.in', sector: 'Medical E-Commerce & Full Takeover', region: 'India', badge: 'E-Commerce' },
  { name: 'BaeMeds Global', domain: 'baemeds.com', sector: 'US Sourcing & Dropshipping Ecosystem', region: 'USA & Global', badge: 'E-Commerce' },
  { name: 'Auvia Behavioral Centers', domain: 'auviatherapy.com', sector: 'ABA Therapy Clinic CRM & Growth Retainer', region: 'Irving, TX', badge: 'Healthcare' },
  { name: 'Unstiched', sector: 'Luxury Designer Apparel E-Commerce', region: 'India', badge: 'E-Commerce' },
  { name: 'Erus Academy', domain: 'erusacademy.in', sector: 'AI English Fluency LMS (Web, CRM, iOS & Android)', region: 'India', badge: 'EdTech' },
  { name: 'The Qalb', domain: 'theqalb.in', sector: 'Artisanal Perfumery & Fragrances', region: 'India', badge: 'E-Commerce' },
  { name: 'Talent Hunters Consulting (THC)', domain: 'talhuntconsult.com', sector: 'Executive Search & Technical SEO', region: 'KSA, UAE, USA & India', badge: 'Recruitment' },
  { name: 'MedPulse GCC', sector: 'Clinical Workforce Intelligence & Automation', region: 'GCC & Global', badge: 'Healthcare AI' },
  { name: 'Enterprise ServiceNow Practice', sector: 'ITSM, IRM/GRC & CMDB Workflows', region: 'Global', badge: 'ServiceNow' },
  { name: 'Cynosure IT Innovations', domain: 'cynosureit.com', sector: 'ServiceNow ITSM, ITAM & IRM Consultation', region: 'India & Global', badge: 'ServiceNow' },
  { name: 'MedusCore', domain: 'meduscore.co.uk', sector: 'Healthcare Systems, Profile & Lead Generation', region: 'UK & International', badge: 'Consulting' },
  { name: 'Conavlytics', domain: 'conavlytics.com', sector: 'Technical Workforce Sourcing & IRM Tools', region: 'Global', badge: 'Software' },
  { name: 'Bilim', sector: 'Confidential E-Commerce Platform & Consultation', region: 'Global', badge: 'E-Commerce' },
  { name: 'DevIt', domain: 'wedevit.in', sector: 'Business Setup, Consultation & Client Sourcing', region: 'India & Global', badge: 'Consulting' }
];

