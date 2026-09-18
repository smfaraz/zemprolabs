export interface HomeService {
  num: string;
  id: string;
  title: string;
  desc: string;
  highlights: string[];
  cta: string;
  link: string;
}

export const homeServices: HomeService[] = [
  {
    num: '01',
    id: 'development',
    title: 'Development',
    desc: 'We design and engineer digital products from websites and mobile apps to SaaS platforms, automation, e-commerce and custom tools.',
    highlights: ['Web', 'Mobile', 'SaaS', 'E-Commerce', 'Automation'],
    cta: 'Explore Development',
    link: '/services'
  },
  {
    num: '02',
    id: 'seo-growth',
    title: 'SEO & Growth',
    desc: 'Build a stronger digital presence with technical SEO, product visibility and consistent branding.',
    highlights: ['Technical SEO', 'Product SEO', 'Branding'],
    cta: 'Explore SEO & Growth',
    link: '/services'
  },
  {
    num: '03',
    id: 'enterprise',
    title: 'Enterprise',
    desc: 'Modernize enterprise workflows, systems and operations with scalable technology solutions.',
    highlights: ['ServiceNow', 'Workflow Automation', 'Systems Integration', 'Enterprise Applications'],
    cta: 'Explore Enterprise',
    link: '/services'
  },
  {
    num: '04',
    id: 'marketing',
    title: 'Marketing',
    desc: 'Create measurable digital visibility through paid campaigns, social media and organic marketing.',
    highlights: ['Google Ads', 'Meta Ads', 'Social Media', 'Organic Marketing'],
    cta: 'Explore Marketing',
    link: '/services'
  },
  {
    num: '05',
    id: 'research',
    title: 'Research',
    desc: 'Turn market, product and business intelligence into clearer decisions and scalable opportunities.',
    highlights: ['Market Research', 'Product Research', 'Competition', 'Business Analysis'],
    cta: 'Explore Research',
    link: '/services'
  },
  {
    num: '06',
    id: 'recruitment',
    title: 'Recruitment',
    desc: 'Connect organizations with specialized talent through structured recruitment and international placement support.',
    highlights: ['Talent Sourcing', 'Healthcare Recruitment', 'Candidate Screening', 'Placement Support'],
    cta: 'Explore Recruitment',
    link: '/services'
  }
];
