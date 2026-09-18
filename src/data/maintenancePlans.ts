export interface MaintenancePlan {
  id: string;
  name: string;
  tag: string;
  priceINR: number;
  displayINR: string;
  priceUSD: number;
  displayUSD: string;
  period: string;
  targetAudience: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'essential',
    name: 'Essential Care',
    tag: 'FOR SMALL BUSINESS WEBSITES',
    priceUSD: 400,
    displayUSD: '$400',
    priceINR: 35000,
    displayINR: '₹35,000',
    period: '/month',
    targetAudience: 'Small business websites, portfolios, and static lead-generation sites.',
    description: 'Essential technical maintenance, security updates, and performance monitoring to keep your site reliable and healthy.',
    features: [
      'Monthly technical health & uptime check',
      'Minor content & image updates (up to 3 requests/month)',
      'Security patch & dependency updates',
      'Automated backup monitoring & verification',
      'Basic technical email & ticket support',
      'Core Web Vitals & broken-link scans'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Care',
    tag: 'FOR ACTIVE BUSINESS PLATFORMS',
    priceUSD: 800,
    displayUSD: '$800',
    priceINR: 75000,
    displayINR: '₹75,000',
    period: '/month',
    targetAudience: 'Active business websites, growing service companies, and lead funnels.',
    description: 'Comprehensive technical upkeep, regular content updates, continuous performance optimization, and priority triage.',
    features: [
      'Everything in Essential Care',
      'Expanded content, product & copy updates',
      'Continuous Core Web Vitals & speed optimization',
      'Monthly technical SEO & search console checks',
      'GA4 analytics & event tracking health audits',
      'Priority response SLA (<12 business hours)',
      'Minor UI/UX enhancements & component tweaks'
    ],
    popular: true
  },
  {
    id: 'managed',
    name: 'Fully Managed Operations',
    tag: 'COMPLETE TECHNICAL & STORE CARE',
    priceUSD: 1500,
    displayUSD: '$1,500',
    priceINR: 145000,
    displayINR: '₹1,45,000',
    period: '/month',
    targetAudience: 'E-commerce stores, SaaS applications, and businesses that want technical operations completely handled.',
    description: 'Complete technical and storefront operations management. We manage your website or Shopify store while you focus on business growth.',
    features: [
      'Everything in Growth Care',
      'End-to-end e-commerce storefront management',
      'Product catalog updates, uploads & collection staging',
      'Promotional banners & discount code configuration',
      'App, plugin & third-party integration maintenance',
      'Firebase / backend cloud database monitoring',
      'Dedicated senior lead as single point of contact',
      'Bi-weekly sprint planning & ongoing feature rollouts'
    ]
  }
];

export interface ShopifyPlanReference {
  name: string;
  annualMonthlyINR: string;
  monthlyINR: string;
  bestFor: string;
  features: string[];
}

export const shopifyPlanReferences: ShopifyPlanReference[] = [
  {
    name: 'Shopify Basic',
    annualMonthlyINR: '₹1,499/month',
    monthlyINR: '₹1,994/month',
    bestFor: 'Solo entrepreneurs & emerging digital storefronts.',
    features: [
      'Basic storefront & standard checkout',
      '10 inventory locations',
      '24/7 Shopify chat support',
      'Standard transaction fees'
    ]
  },
  {
    name: 'Shopify Grow',
    annualMonthlyINR: '₹5,599/month',
    monthlyINR: '₹7,447/month',
    bestFor: 'Scaling businesses with growing sales volume.',
    features: [
      'Everything in Basic',
      'Professional reporting dashboards',
      '5 additional staff accounts',
      'Lower credit card & gateway processing rates'
    ]
  },
  {
    name: 'Shopify Advanced',
    annualMonthlyINR: '₹22,680/month',
    monthlyINR: '₹30,164/month',
    bestFor: 'High-volume businesses requiring custom reports and duties calculation.',
    features: [
      'Everything in Grow',
      'Custom report builder',
      '15 staff accounts',
      'Automated import duties & taxes calculation',
      'Lowest standard transaction fees'
    ]
  },
  {
    name: 'Shopify Plus',
    annualMonthlyINR: 'Starting from ₹1,75,000/month (3-yr term)',
    monthlyINR: '₹1,90,000/month (1-yr term)',
    bestFor: 'High-scale enterprise retail and international wholesale.',
    features: [
      'Customizable checkout with Shopify Functions',
      'Headless commerce & custom Storefront API',
      'Dedicated Plus partner account management',
      'Unlimited staff accounts & expansion stores'
    ]
  }
];
