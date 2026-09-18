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
  { name: 'BaeMeds', domain: 'baemeds.in', sector: 'Medical E-Commerce', region: 'India & USA', badge: 'E-Commerce' },
  { name: 'DevIt', domain: 'devit.com', sector: 'Software & Cloud Engineering', region: 'Global', badge: 'Enterprise' },
  { name: 'Auvia Therapy', domain: 'auviatherapy.com', sector: 'Pediatric Healthcare Intake', region: 'Austin, TX', badge: 'Healthcare' },
  { name: 'Erus Academy', domain: 'erusacademy.in', sector: 'Digital LMS & Video Streaming', region: 'India', badge: 'EdTech' },
  { name: 'MedusCore', domain: 'meduscore.co.uk', sector: 'Healthcare Systems & Recruitment', region: 'UK & International', badge: 'Enterprise' },
  { name: 'Mohsin Surgicals', domain: 'mohsinsurgicals.com', sector: 'Surgical & Medical Supply Commerce', region: 'India & Global', badge: 'B2B Commerce' },
  { name: 'Conavlytics', domain: 'conavlytics.com', sector: 'Business Intelligence & Analytics', region: 'Global', badge: 'Data / SaaS' },
  { name: 'Bilim', domain: 'bilim.io', sector: 'Digital Education & Learning', region: 'Central Asia & Intl', badge: 'EdTech' },
  { name: 'Cynosure IT Innovations', domain: 'cynosureit.com', sector: 'Enterprise IT & Cloud Solutions', region: 'India', badge: 'Cloud Systems' },
  { name: 'THC', domain: 'thc.co', sector: 'Healthcare & Wellness Infrastructure', region: 'International', badge: 'HealthTech' },
  { name: 'Qalb', domain: 'qalb.app', sector: 'Digital Health & Wellness Platform', region: 'Middle East & Global', badge: 'Mobile App' }
];

