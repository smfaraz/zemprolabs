/**
 * Centralized Zemprolabs Commercial & Pricing Configuration
 * All amounts are in INR (₹) as the primary commercial currency,
 * with clean rounded USD ($) international reference pricing.
 * Third-party platform fees (Shopify, Google Firebase) are explicitly separated from Zemprolabs service rates.
 */

export interface MaintenanceTier {
  id: string;
  name: string;
  tag: string;
  amountINR: number;
  displayPrice: string;
  amountUSD: number;
  displayPriceUSD: string;
  period: string;
  targetAudience: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PlatformDevOption {
  id: string;
  name: string;
  surchargeINR: number;
  displaySurcharge: string;
  surchargeUSD: number;
  displaySurchargeUSD: string;
  platformCostNote: string;
  isUsageBased?: boolean;
  provider: 'Shopify' | 'Google' | 'Hosting' | 'None';
}

export interface AddonOption {
  id: string;
  name: string;
  costINR: number;
  displayCost: string;
  costUSD: number;
  displayCostUSD: string;
}

export interface EngagementDevOption {
  id: string;
  name: string;
  monthlyServiceCostINR: number;
  monthlyServiceCostUSD: number;
  displayCost: string;
  displayCostUSD: string;
  description: string;
}

export interface ShopifyIndiaTier {
  name: string;
  annualMonthlyINR: string;
  monthlyINR: string;
  bestFor: string;
  features: string[];
}

export const pricingConfig = {
  currency: 'INR',
  symbol: '₹',
  referenceCurrency: 'USD',
  referenceSymbol: '$',

  // Scope Estimator Base Development Fee
  estimatorBaseBuildUSD: 2600,
  displayEstimatorBaseBuildUSD: '$2,600',
  estimatorBaseBuildINR: 250000, // ₹2,50,000 Base Project Build
  displayEstimatorBaseBuild: '₹2,50,000',

  // Estimator Platform Surcharges (Zemprolabs Engineering Fee)
  platformOptions: [
    {
      id: 'none',
      name: 'Static / Decoupled Frontend (No Backend)',
      surchargeUSD: 0,
      displaySurchargeUSD: '$0',
      surchargeINR: 0,
      displaySurcharge: '₹0',
      platformCostNote: '$0 — Standard CDN hosting included',
      provider: 'None'
    },
    {
      id: 'firebase',
      name: 'Google Firebase (Serverless Backend Architecture)',
      surchargeUSD: 700,
      displaySurchargeUSD: '+$700 setup',
      surchargeINR: 65000,
      displaySurcharge: '+₹65,000 setup',
      platformCostNote: 'Usage-based — final cost depends on actual consumption (Generous free tier included)',
      isUsageBased: true,
      provider: 'Google'
    },
    {
      id: 'shopify',
      name: 'Shopify E-Commerce Storefront',
      surchargeUSD: 800,
      displaySurchargeUSD: '+$800 setup',
      surchargeINR: 75000,
      displaySurcharge: '+₹75,000 setup',
      platformCostNote: '₹1,499/month to ₹5,599/month billed directly by Shopify',
      provider: 'Shopify'
    },
    {
      id: 'shopify_firebase',
      name: 'Shopify Storefront + Firebase Custom Backend',
      surchargeUSD: 1350,
      displaySurchargeUSD: '+$1,350 setup',
      surchargeINR: 125000,
      displaySurcharge: '+₹1,25,000 setup',
      platformCostNote: 'Shopify subscription tier + Firebase usage-based consumption',
      provider: 'Shopify'
    },
    {
      id: 'custom_backend',
      name: 'Custom Node.js / PostgreSQL Cloud API',
      surchargeUSD: 1200,
      displaySurchargeUSD: '+$1,200 setup',
      surchargeINR: 110000,
      displaySurcharge: '+₹1,10,000 setup',
      platformCostNote: 'Cloud hosting (~$20 – $60/month depending on compute size)',
      provider: 'Hosting'
    }
  ] as PlatformDevOption[],

  // Estimator Add-ons
  addonOptions: [
    {
      id: 'design',
      name: 'UI/UX Figma Architecture & Component System',
      costUSD: 500,
      displayCostUSD: '+$500',
      costINR: 45000,
      displayCost: '+₹45,000'
    },
    {
      id: 'seo',
      name: 'Technical SEO Audit & Schema Structured Data',
      costUSD: 400,
      displayCostUSD: '+$400',
      costINR: 35000,
      displayCost: '+₹35,000'
    },
    {
      id: 'multicurrency',
      name: 'Multi-Currency & International Gateway Routing',
      costUSD: 550,
      displayCostUSD: '+$550',
      costINR: 50000,
      displayCost: '+₹50,000'
    },
    {
      id: 'cicd',
      name: 'Automated CI/CD & Production Staging Infrastructure',
      costUSD: 350,
      displayCostUSD: '+$350',
      costINR: 30000,
      displayCost: '+₹30,000'
    }
  ] as AddonOption[],

  // Estimator Engagement Options
  engagementOptions: [
    {
      id: 'one_time',
      name: 'One-Time Build (No Retainer)',
      monthlyServiceCostUSD: 0,
      monthlyServiceCostINR: 0,
      displayCostUSD: '$0',
      displayCost: '₹0',
      description: 'Complete codebase delivery, standard warranty, and documentation handoff.'
    },
    {
      id: 'maintenance',
      name: 'Essential Care Maintenance',
      monthlyServiceCostUSD: 400,
      monthlyServiceCostINR: 35000,
      displayCostUSD: '$400/month',
      displayCost: '₹35,000/month',
      description: 'Security patches, uptime verification, broken-link scans, and health reports.'
    },
    {
      id: 'growth_care',
      name: 'Growth Care Maintenance',
      monthlyServiceCostUSD: 800,
      monthlyServiceCostINR: 75000,
      displayCostUSD: '$800/month',
      displayCost: '₹75,000/month',
      description: 'Priority SLA, speed tuning, continuous technical SEO, and UI tweaks.'
    },
    {
      id: 'full_managed',
      name: 'Fully Managed Operations',
      monthlyServiceCostUSD: 1500,
      monthlyServiceCostINR: 145000,
      displayCostUSD: '$1,500/month',
      displayCost: '₹1,45,000/month',
      description: 'Hands-on store management, catalog staging, promotional setups, and cloud ops.'
    }
  ] as EngagementDevOption[],

  // Recurring Maintenance & Managed Care Retainers
  maintenancePlans: [
    {
      id: 'essential',
      name: 'Essential Care',
      tag: 'FOR SMALL BUSINESS WEBSITES',
      amountUSD: 400,
      displayPriceUSD: '$400',
      amountINR: 35000,
      displayPrice: '₹35,000',
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
      amountUSD: 800,
      displayPriceUSD: '$800',
      amountINR: 75000,
      displayPrice: '₹75,000',
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
      amountUSD: 1500,
      displayPriceUSD: '$1,500',
      amountINR: 145000,
      displayPrice: '₹1,45,000',
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
  ] as MaintenanceTier[],

  // Official Shopify India Reference (Paid directly to Shopify Inc.)
  shopifyTiers: [
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
    }
  ] as ShopifyIndiaTier[],

  // Disclaimers
  disclaimers: {
    shopify:
      'Shopify subscription fees are paid directly to Shopify, not Zemprolabs. Shopify pricing is set by Shopify and may change. Additional app, payment, domain and third-party costs may apply.',
    firebase:
      'Firebase infrastructure is usage-based. Final third-party infrastructure cost depends on actual usage. Google bills usage directly with zero agency markup.',
    general:
      'Zemprolabs professional service fees are transparent milestone or retainer agreements. Infrastructure, hosting, and platform subscriptions are billed directly by their respective providers.'
  }
};
