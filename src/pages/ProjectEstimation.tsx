import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Laptop,
  ShoppingBag,
  Workflow,
  Server,
  Smartphone,
  Briefcase,
  Check,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Mail,
  MessageSquare,
  Lock,
  GitBranch,
  Layers
} from 'lucide-react';
import { company } from '../data/company';

interface PlatformOption {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

interface CapabilityModule {
  id: string;
  name: string;
  detail: string;
}

interface EngagementMode {
  id: string;
  name: string;
  badge?: string;
  description: string;
}

interface TimelineOption {
  id: string;
  name: string;
  description: string;
}

interface StatusOption {
  id: string;
  name: string;
  description: string;
}

const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: 'webapp',
    name: 'Web Application or SaaS',
    description: 'Portals, dashboards, transactional backends, and multi-tenant platforms built with Next.js and TypeScript.',
    icon: Laptop
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Storefront',
    description: 'Custom Shopify Liquid themes, headless commerce, sub-second checkout speeds, and ERP inventory synchronization.',
    icon: ShoppingBag
  },
  {
    id: 'servicenow',
    name: 'Enterprise ServiceNow',
    description: 'Scoped applications, Flow Designer automations, custom Employee Service Portals, and CMDB governance.',
    icon: Workflow
  },
  {
    id: 'bizdev',
    name: 'Business Development Engine',
    description: 'Ideal customer profiling, target account research, outbound multi-channel sequences, and CRM pipeline setup.',
    icon: Briefcase
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure and DevOps',
    description: 'Automated CI/CD deployment pipelines, Terraform infrastructure as code, container clusters, and uptime monitoring.',
    icon: Server
  },
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile App',
    description: 'Native mobile experiences for iOS and Android built with React Native, offline storage, and store release pipelines.',
    icon: Smartphone
  }
];

const ENGAGEMENT_MODES: EngagementMode[] = [
  {
    id: 'agile_retainer',
    name: 'Dedicated Agile Retainer Pod',
    badge: 'Preferred model',
    description: 'We operate as your embedded engineering pod. We maintain active CI/CD pipelines directly in your repositories, prioritize your backlog in two-week agile sprints, and deploy weekly staging builds.'
  },
  {
    id: 'fixed_milestone',
    name: 'Fixed-Scope Milestone Project',
    badge: 'Defined scope',
    description: 'Best for a greenfield MVP or discrete feature release. We commit to a clear scope, itemized milestones, weekly staging previews, and included hypercare support.'
  }
];

const CAPABILITY_MODULES: CapabilityModule[] = [
  {
    id: 'design',
    name: 'Design System & Interactive Prototype',
    detail: 'Responsive Figma user journeys, design tokens, and click-through mockups.'
  },
  {
    id: 'auth',
    name: 'Authentication & Role-Based Permissions',
    detail: 'Secure user onboarding, session handling, and granular access control.'
  },
  {
    id: 'payments',
    name: 'Payment Processing & Subscriptions',
    detail: 'Stripe, Razorpay, recurring billing models, and localized currency checkout.'
  },
  {
    id: 'database',
    name: 'Database Architecture & Data Modeling',
    detail: 'Relational PostgreSQL or Supabase schemas, index tuning, and migrations.'
  },
  {
    id: 'api',
    name: 'Third-Party APIs & Webhook Integrations',
    detail: 'REST, GraphQL, external ERP feeds, and transactional webhook services.'
  },
  {
    id: 'cms',
    name: 'Admin Dashboard & Content Operations',
    detail: 'Custom internal control panels for managing data, users, and product catalogs.'
  },
  {
    id: 'cicd',
    name: 'Automated CI/CD & Deployment Pipelines',
    detail: 'GitHub Actions automation, automated test runs, and private staging builds.'
  },
  {
    id: 'seo',
    name: 'Search Optimization & Speed Tuning',
    detail: 'Sub-second Core Web Vitals, Schema.org structured data, and clean canonical routing.'
  },
  {
    id: 'analytics',
    name: 'Telemetry, Logging & Error Tracking',
    detail: 'Sentry exception monitoring, Datadog performance alerts, and event analytics.'
  },
  {
    id: 'outbound',
    name: 'Outbound Prospecting & CRM Pipeline',
    detail: 'Target account sourcing, cold sequences, and deal pipeline forecasting in HubSpot.'
  },
  {
    id: 'retainer_care',
    name: 'Ongoing Maintenance & Security Updates',
    detail: 'Proactive dependency patching, monthly framework updates, and bug fixes.'
  }
];

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: 'fast_track',
    name: 'Fast-track sprint',
    description: '2 to 4 weeks. High-priority focus for immediate launch windows.'
  },
  {
    id: 'standard',
    name: 'Balanced agile sprints',
    description: '1 to 2 months. Recommended schedule for full-featured applications and store builds.'
  },
  {
    id: 'multi_phase',
    name: 'Multi-phase platform',
    description: '2 to 4 months. Staged architecture rollout across multiple services and user personas.'
  }
];

const ASSET_STAGES: StatusOption[] = [
  {
    id: 'greenfield',
    name: 'Starting from scratch',
    description: 'Business requirements are defined; require architecture, interface design, and engineering.'
  },
  {
    id: 'design_ready',
    name: 'Designs complete in Figma',
    description: 'UI/UX mockups and user flows are ready; need senior engineering to implement.'
  },
  {
    id: 'modernize',
    name: 'Modernizing an existing platform',
    description: 'Current software is slow, outdated, or ready for architectural refactoring.'
  }
];

const STEPS = [
  { id: 1, title: 'Discipline', label: 'Platform' },
  { id: 2, title: 'Partnership', label: 'Model' },
  { id: 3, title: 'Capabilities', label: 'Architecture' },
  { id: 4, title: 'Context', label: 'Timeline' },
  { id: 5, title: 'Review', label: 'Proposal' }
];

const SCOPING_FAQS = [
  {
    q: 'Why do you provide custom proposals rather than automated price calculators?',
    a: 'Every digital product has distinct data structures, security requirements, and integration dependencies. Automated price calculators produce arbitrary figures that ignore technical reality. We review your exact brief and deliver an honest, itemized milestone schedule with committed deliverables and zero hidden fees.'
  },
  {
    q: 'Why do you prefer ongoing agile retainers rather than ending the project at launch?',
    a: 'Modern software is living infrastructure. Code that is abandoned at launch quickly accumulates outdated dependencies, broken deployment pipelines, and security risks. On an ongoing Agile Retainer, we maintain your continuous integration and deployment pipelines, handle regular dependency updates, and ship new backlog features in two-week agile sprints. You still own 100% of your code and repositories at all times.'
  },
  {
    q: 'How quickly will I receive an itemized proposal?',
    a: 'Our engineering team reviews your brief and sends an itemized technical breakdown with milestone schedules within 24 hours on business days.'
  },
  {
    q: 'Is this scoping consultation free?',
    a: 'Yes. It is completely free and carries zero obligation. We believe in providing technical clarity upfront so you can make informed decisions.'
  },
  {
    q: 'Can we sign an NDA before sharing sensitive requirements?',
    a: 'Yes. We regularly execute mutual non-disclosure agreements before reviewing proprietary workflows, database schemas, or product briefs.'
  },
  {
    q: 'Can you tailor the scope to meet our target investment?',
    a: 'Yes. If you have a specific budget target, let us know in your project notes. We will structure the highest-impact architectural modules into an initial MVP phase and schedule secondary features for subsequent agile retainer sprints.'
  }
];

export const ProjectEstimation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [selectedPlatform, setSelectedPlatform] = useState<string>('webapp');
  const [selectedEngagement, setSelectedEngagement] = useState<string>('agile_retainer');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'design',
    'auth',
    'payments',
    'database',
    'cicd',
    'seo',
    'retainer_care'
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedStage, setSelectedStage] = useState<string>('greenfield');

  // Contact info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const selectedPlatformObj =
    PLATFORM_OPTIONS.find((p) => p.id === selectedPlatform) || PLATFORM_OPTIONS[0];
  const selectedEngagementObj =
    ENGAGEMENT_MODES.find((e) => e.id === selectedEngagement) || ENGAGEMENT_MODES[0];
  const selectedTimelineObj =
    TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[1];
  const selectedStageObj =
    ASSET_STAGES.find((s) => s.id === selectedStage) || ASSET_STAGES[0];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project Scoping Request: ${selectedPlatformObj.name} - ${name || 'Prospective Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${companyName || 'N/A'}\n\nPlatform: ${selectedPlatformObj.name}\nEngagement Model: ${selectedEngagementObj.name}\nTimeline: ${selectedTimelineObj.name}\nStarting State: ${selectedStageObj.name}\n\nSelected Capabilities (${selectedModules.length}):\n${selectedModules.join(', ')}\n\nProject Notes:\n${notes || 'None'}`
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Zemprolabs Team,\n\nI submitted a project brief on your website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${companyName || 'N/A'}\nPlatform: ${selectedPlatformObj.name}\nEngagement Model: ${selectedEngagementObj.name}\nTimeline: ${selectedTimelineObj.name}\nStarting State: ${selectedStageObj.name}\nModules Selected: ${selectedModules.length}\n\nNotes: ${notes || 'None'}`
  );
  const whatsappLink = `https://wa.me/917447557577?text=${whatsappMessage}`;

  return (
    <div className="w-full bg-[#090A0D] text-white min-h-screen">
      <SEO
        title="Project Scoping & Estimation | Zemprolabs"
        description="Configure your digital product requirements, architecture modules, and delivery timeline through our guided flow. Receive an itemized milestone proposal reviewed by our engineers within 24 hours."
        canonicalPath="/project-estimation"
      />

      {/* ========================================================================= */}
      {/* STEP-BY-STEP GUIDED FLOW                                                  */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 max-w-5xl mx-auto">
        
        {/* Step Indicator Progress Bar */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].title}
            </span>
            <span className="text-xs text-[#FF6B00] font-semibold">
              {Math.round((currentStep / STEPS.length) * 100)}% complete
            </span>
          </div>

          {/* Progress track */}
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF6B00] to-[#ff8533] rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(255,107,0,0.6)]"
              style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Step Pill Navigation */}
          <div className="grid grid-cols-5 gap-2 pt-4">
            {STEPS.map((step) => {
              const isPassed = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setCurrentStep(step.id)}
                  className={`text-left py-2 px-2.5 rounded-lg text-xs transition-all border ${
                    isCurrent
                      ? 'bg-[#FF6B00]/10 border-[#FF6B00] text-white font-semibold ring-1 ring-[#FF6B00]/40 shadow-sm'
                      : isPassed
                      ? 'bg-white/[0.03] border-white/20 text-slate-300 hover:border-[#FF6B00]/40 cursor-pointer'
                      : 'bg-transparent border-transparent text-slate-500 cursor-not-allowed'
                  }`}
                  disabled={step.id > currentStep}
                >
                  <span className={`block text-[10px] ${isCurrent ? 'text-[#FF6B00] font-bold' : isPassed ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {isPassed ? '✓ ' : ''}0{step.id}
                  </span>
                  <span className="truncate block font-medium">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Card Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl space-y-8">
          
          {/* ========================================================================= */}
          {/* STEP 1: TARGET PLATFORM & DISCIPLINE                                      */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  What type of platform are you looking to build?
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Select the core discipline that best represents your project brief.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {PLATFORM_OPTIONS.map((plat) => {
                  const Icon = plat.icon;
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      type="button"
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between space-y-4 ${
                        isSelected
                          ? 'bg-[#FF6B00]/[0.08] border-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.15)] ring-1 ring-[#FF6B00]/60'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/25 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#FF6B00] text-black shadow-md' : 'bg-white/5 text-slate-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {isSelected && (
                          <span className="text-xs text-[#FF6B00] font-semibold flex items-center gap-1">
                            <Check className="w-4 h-4 stroke-[2.5]" />
                            Selected
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold text-base text-white">
                          {plat.name}
                        </div>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {plat.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: PARTNERSHIP & ENGAGEMENT MODEL                                    */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  How would you prefer to partner with us?
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  We prioritize continuous agile retainers to maintain active CI/CD and feature velocity, but also execute fixed milestone builds.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {ENGAGEMENT_MODES.map((eng) => {
                  const isSelected = selectedEngagement === eng.id;
                  return (
                    <button
                      key={eng.id}
                      type="button"
                      onClick={() => setSelectedEngagement(eng.id)}
                      className={`text-left p-6 rounded-xl border transition-all flex flex-col justify-between space-y-4 ${
                        isSelected
                          ? 'bg-[#FF6B00]/[0.08] border-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.15)] ring-1 ring-[#FF6B00]/60'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/25 text-slate-300'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2.5 py-0.5 rounded font-medium ${
                            eng.badge === 'Preferred model'
                              ? 'bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30'
                              : 'bg-white/10 text-slate-200'
                          }`}>
                            {eng.badge}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-[#FF6B00] stroke-[2.5]" />}
                        </div>
                        <div className="font-bold text-lg text-white pt-1">
                          {eng.name}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-1">
                          {eng.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: TECHNICAL CAPABILITIES & ARCHITECTURE                             */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    Which technical capabilities does your project require?
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Select all architectural components needed for your platform.
                  </p>
                </div>
                <span className="text-xs text-[#FF6B00] font-semibold px-2.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 shrink-0">
                  {selectedModules.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CAPABILITY_MODULES.map((mod) => {
                  const isSelected = selectedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleModule(mod.id)}
                      className={`text-left p-4 rounded-xl border text-xs transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#FF6B00]/[0.07] border-[#FF6B00]/70 text-white font-medium ring-1 ring-[#FF6B00]/30'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-white font-medium text-sm leading-snug">
                          {mod.name}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {mod.detail}
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#FF6B00] border-[#FF6B00] text-black shadow-sm'
                            : 'border-white/20 bg-white/5'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: TIMELINE & ASSET READINESS                                        */}
          {/* ========================================================================= */}
          {currentStep === 4 && (
            <div className="space-y-8">
              {/* Delivery Cadence */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Target delivery timeline
                </h2>
                <p className="text-sm text-slate-400">
                  Select your expected launch velocity or commercial milestone window.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {TIMELINE_OPTIONS.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t.id)}
                        className={`text-left p-4 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'bg-[#FF6B00]/[0.08] border-[#FF6B00] text-white ring-1 ring-[#FF6B00]/60 shadow-[0_0_15px_rgba(255,107,0,0.12)]'
                            : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="font-semibold text-sm text-white mb-1 flex items-center justify-between">
                          <span>{t.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#FF6B00] stroke-[2.5]" />}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {t.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Starting point */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-lg font-bold font-display text-white">
                  Current project status
                </h3>
                <p className="text-sm text-slate-400">
                  Where is your team starting from today?
                </p>

                <div className="space-y-2.5 pt-1">
                  {ASSET_STAGES.map((stg) => {
                    const isSelected = selectedStage === stg.id;
                    return (
                      <button
                        key={stg.id}
                        type="button"
                        onClick={() => setSelectedStage(stg.id)}
                        className={`w-full text-left p-4 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#FF6B00]/[0.08] border-[#FF6B00] text-white ring-1 ring-[#FF6B00]/60 shadow-[0_0_15px_rgba(255,107,0,0.12)]'
                            : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm text-white">{stg.name}</div>
                          <div className="text-xs text-slate-400 mt-1">{stg.description}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#FF6B00] stroke-[2.5] shrink-0 ml-3" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: REVIEW SPECIFICATION & REQUEST PROPOSAL                           */}
          {/* ========================================================================= */}
          {currentStep === 5 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Review brief and request engineering proposal
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Review your configured requirements below. Our technical team will compile an itemized milestone breakdown.
                </p>
              </div>

              {/* Review Summary Ledger */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
                <div className="font-semibold text-sm text-white border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Configured scope brief</span>
                  <span className="text-xs text-[#FF6B00] font-semibold">
                    {selectedModules.length} capabilities selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Discipline:</span>
                    <span className="text-white font-medium">{selectedPlatformObj.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Partnership model:</span>
                    <span className="text-white font-medium">{selectedEngagementObj.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Delivery timeline:</span>
                    <span className="text-white font-medium">{selectedTimelineObj.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Starting state:</span>
                    <span className="text-white font-medium">{selectedStageObj.name}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs">
                  <span className="text-slate-400 block mb-1.5">Selected architecture modules:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedModules.map((modId) => {
                      const mod = CAPABILITY_MODULES.find((m) => m.id === modId);
                      return mod ? (
                        <span key={modId} className="px-2.5 py-1 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF8533] text-[11px] font-medium">
                          {mod.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-1.5">
                <div className="text-slate-200 font-medium">Included in every engagement:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    100% source code and cloud ownership
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Active CI/CD in your Git repositories
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Weekly staging previews and demos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Direct Slack access to lead engineers
                  </span>
                </div>
              </div>

              {/* Submission Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Phone or WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Company or project name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Project notes or repository links (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details on target users, required third-party integrations, or existing code..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-semibold text-sm bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:shadow-[0_0_35px_rgba(255,107,0,0.5)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-black" />
                        <span>Submitting brief...</span>
                      </>
                    ) : (
                      <span>Request Technical Proposal</span>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500 pt-1">
                    Direct review by our engineering team &bull; 24-hour turnaround
                  </p>
                </form>
              ) : (
                /* Success State */
                <div className="p-8 rounded-xl bg-white/[0.04] border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Scope brief submitted
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed max-w-lg mx-auto">
                      Thank you, <strong className="text-white">{name || 'there'}</strong>. Our engineering partner has received your configuration for a <strong className="text-white">{selectedPlatformObj.name}</strong>. We will review your architecture requirements and reply within 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={mailtoLink}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="text-xs text-slate-400 hover:text-white pt-2 block mx-auto underline"
                  >
                    Start a new project brief
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Flow Navigation Controls (Next / Back) */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 && (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                <span>Continue to {STEPS[currentStep].title}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            )}
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. TRANSPARENCY & METHODOLOGY SECTION (Tactile Paper Canvas)              */}
      {/* ========================================================================= */}
      <section className="bg-textured-light text-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-stone-300/80">
        <div className="max-w-5xl mx-auto space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">
              Why we scope with milestone accountability
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Traditional agencies advertise cheap hourly rates, only to bill endless hours without shipping working builds. We operate on predictable, milestone-driven accountability and long-term agile retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-300 p-6 rounded-2xl shadow-sm space-y-2.5">
              <h3 className="text-base font-bold font-display text-slate-900">
                Every system is unique
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A high-converting e-commerce platform with ERP sync has fundamentally different architectural requirements than an enterprise ServiceNow instance. Fixed tiers either overcharge you or omit critical security and testing pipelines.
              </p>
            </div>

            <div className="bg-white border border-stone-300 p-6 rounded-2xl shadow-sm space-y-2.5">
              <h3 className="text-base font-bold font-display text-slate-900">
                No surprise invoices
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When we provide an estimate, we agree on exact sprint deliverables upfront. You never receive surprise change-order invoices halfway through development for features discussed during initial scoping.
              </p>
            </div>

            <div className="bg-white border border-stone-300 p-6 rounded-2xl shadow-sm space-y-2.5">
              <h3 className="text-base font-bold font-display text-slate-900">
                Scoped by engineers, not sales
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your scope is evaluated by the engineers who actually write and deploy code. No commission-driven sales representatives promising unachievable delivery dates.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="pt-4 max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-1.5 mb-6">
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Frequently asked questions
              </h3>
              <p className="text-xs text-slate-600">
                Common questions about our scoping and estimation process.
              </p>
            </div>

            <div className="space-y-3">
              {SCOPING_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-stone-300/80 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4"
                    >
                      <span className="font-semibold text-sm text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-black' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-stone-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectEstimation;
