import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Layers,
  CheckCircle2,
  Send,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Laptop,
  ShoppingBag,
  Smartphone,
  Server,
  HelpCircle,
  Check,
  FileText,
  Lock,
  MessageSquare,
  Users,
  Code2,
  ChevronDown,
  RefreshCw,
  Mail
} from 'lucide-react';
import { company } from '../data/company';

interface ProjectTypeOption {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface FeatureOption {
  id: string;
  name: string;
  category: string;
}

interface TimelineOption {
  id: string;
  name: string;
  desc: string;
}

interface StatusOption {
  id: string;
  name: string;
  desc: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'webapp',
    name: 'Custom Web Application / SaaS',
    description: 'Complex dashboards, customer portals, interactive platforms, and scalable cloud apps.',
    icon: Laptop,
    color: '#FF6B00'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Shopify Plus Store',
    description: 'Custom high-converting storefronts, payment funnels, inventory sync, and checkout optimizations.',
    icon: ShoppingBag,
    color: '#10B981'
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    description: 'Cross-platform native mobile experiences, push notifications, offline cache, and app store deployment.',
    icon: Smartphone,
    color: '#38BDF8'
  },
  {
    id: 'enterprise',
    name: 'Platform Rebuild / Modernization',
    description: 'Migrating legacy code, rebuilding slow systems, or scaling database and cloud architecture.',
    icon: Server,
    color: '#8B5CF6'
  },
  {
    id: 'brand',
    name: 'High-Performance Marketing Website',
    description: 'Bespoke corporate websites, interactive 3D landing pages, and search-optimized digital brand hubs.',
    icon: Sparkles,
    color: '#F59E0B'
  }
];

const FEATURE_MODULES: FeatureOption[] = [
  { id: 'uiux', name: 'Custom UI/UX & Clickable Figma Prototype', category: 'Design' },
  { id: 'auth', name: 'User Authentication & Member Accounts', category: 'Core' },
  { id: 'payments', name: 'Stripe / Razorpay / Global Payment Checkout', category: 'Commerce' },
  { id: 'cms', name: 'Custom CMS & Content Management', category: 'Content' },
  { id: 'catalog', name: 'Catalog, Filtering & Inventory Sync', category: 'Commerce' },
  { id: 'api', name: 'Third-Party API & ERP/CRM Integrations', category: 'Integration' },
  { id: 'database', name: 'Cloud Database Architecture (Supabase / Postgres)', category: 'Backend' },
  { id: 'realtime', name: 'Real-Time Notifications or Live Chat', category: 'Features' },
  { id: 'seo', name: 'Technical SEO & Sub-Second Speed Optimization', category: 'Performance' },
  { id: 'care', name: 'Post-Launch Care & Continuous Monthly Retainer', category: 'Support' }
];

const TIMELINES: TimelineOption[] = [
  { id: 'urgent', name: 'Fast Track (2–4 Weeks)', desc: 'Accelerated sprint for rapid time-to-market' },
  { id: 'standard', name: 'Standard (1–2 Months)', desc: 'Balanced milestone schedule for full-scope products' },
  { id: 'comprehensive', name: 'Comprehensive (2–4 Months)', desc: 'Multi-phase platform with extensive custom logic' },
  { id: 'flexible', name: 'Flexible / Discovery Stage', desc: 'Exploring feasibility and defining exact roadmap first' }
];

const PROJECT_STAGES: StatusOption[] = [
  { id: 'idea', name: 'Fresh Concept / From Scratch', desc: 'We have the idea and business goals, need design & build' },
  { id: 'design_ready', name: 'Figma / Wireframes Ready', desc: 'Design is already prepared, need reliable engineering' },
  { id: 'existing_code', name: 'Existing Codebase to Rebuild/Upgrade', desc: 'Current software needs modernizing, speed fixes, or new features' }
];

const FAQS = [
  {
    q: 'Why do you provide custom estimates instead of fixed pricing tiers?',
    a: 'Every software project has different requirements, integration needs, and scale considerations. Arbitrary pricing packages force you into paying for features you do not need or skimping on critical architecture. We scope your exact requirements so you receive an honest, fixed milestone estimate without surprise change orders.'
  },
  {
    q: 'How quickly will I receive my project estimate?',
    a: 'Our lead engineering team reviews your submission and typically sends your itemized estimate and recommended roadmap within 12 to 24 hours on business days.'
  },
  {
    q: 'Is this estimate free, and am I committed to anything?',
    a: 'It is 100% free and carries zero obligation. We believe in providing clear technical clarity upfront so you can make an informed commercial decision.'
  },
  {
    q: 'Can you sign a Non-Disclosure Agreement (NDA) first?',
    a: 'Absolutely. We regularly sign mutual NDAs before reviewing sensitive business workflows or proprietary concepts.'
  },
  {
    q: 'Can you work within our defined budget?',
    a: 'Yes. If you have a specific target budget, let us know in the notes. We will design the highest-impact feature scope and milestone roadmap to fit within your constraints.'
  }
];

export const ProjectEstimation: React.FC = () => {
  // Configurator state
  const [selectedType, setSelectedType] = useState<string>('webapp');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'uiux',
    'auth',
    'payments',
    'database',
    'seo'
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedStage, setSelectedStage] = useState<string>('idea');

  // Form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const selectedTimelineObj = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];
  const selectedStageObj = PROJECT_STAGES.find((s) => s.id === selectedStage) || PROJECT_STAGES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title="Project Scope & Estimation | Request a Custom Estimate | Zemprolabs"
        description="Configure your project scope, select required capabilities, and send an enquiry directly to our lead engineers. Receive a confidential, itemized milestone estimate within 24 hours."
        canonicalPath="/project-estimation"
      />

      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-[#FF6B00]/[0.03] blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>CUSTOM SCOPE &amp; ESTIMATION // NO GENERIC TIERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Build your project scope.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
              Get a real estimate.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Every digital product is unique. Configure your target platform, desired features, and timeline below. Our lead engineers will review your scope and send an itemized, milestone-based estimate within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              100% Free &amp; Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Reviewed by Senior Engineers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Zero Obligation
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Interactive Estimator & Enquiry Console */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scope Builder Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#070D1A] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] uppercase font-bold">
                  <span>STEP 01 //</span>
                  <span>TARGET PLATFORM</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Select one</span>
              </div>

              <div className="space-y-2.5">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-[#0A1424] border-white/30 shadow-lg -translate-y-0.5'
                          : 'bg-[#040812] border-white/5 hover:border-white/20 hover:bg-[#070E1C]'
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${type.color}15`,
                          color: type.color,
                          border: `1px solid ${type.color}30`
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm sm:text-base text-white">
                            {type.name}
                          </span>
                          {isSelected && (
                            <span className="text-xs font-mono text-[#FF6B00] flex items-center gap-1 font-bold">
                              <Check className="w-3.5 h-3.5" />
                              <span>Selected</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Modules */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#070D1A] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase font-bold">
                  <span>STEP 02 //</span>
                  <span>CAPABILITIES &amp; MODULES</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {selectedFeatures.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FEATURE_MODULES.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#08162B] border-[#38BDF8]/40 text-white font-medium shadow-md'
                          : 'bg-[#040812] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                      }`}
                    >
                      <span className="leading-snug">{feat.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-[#38BDF8] border-[#38BDF8] text-black'
                            : 'border-white/20 bg-white/5'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Current Stage */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#070D1A] border border-white/10 shadow-xl space-y-6">
              {/* Timeline */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase font-bold">
                    <span>STEP 03 //</span>
                    <span>TARGET TIMELINE</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Launch goals</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TIMELINES.map((time) => {
                    const isSelected = selectedTimeline === time.id;
                    return (
                      <button
                        key={time.id}
                        type="button"
                        onClick={() => setSelectedTimeline(time.id)}
                        className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'bg-[#081B1A] border-[#10B981]/50 text-white shadow-md'
                            : 'bg-[#040812] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                        }`}
                      >
                        <div className="font-semibold text-white mb-1 flex items-center justify-between">
                          <span>{time.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#10B981]" />}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">
                          {time.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Stage */}
              <div className="pt-2">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase font-bold">
                    <span>STEP 04 //</span>
                    <span>CURRENT ASSET STATUS</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Where you are today</span>
                </div>

                <div className="space-y-2">
                  {PROJECT_STAGES.map((stg) => {
                    const isSelected = selectedStage === stg.id;
                    return (
                      <button
                        key={stg.id}
                        type="button"
                        onClick={() => setSelectedStage(stg.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#14120A] border-[#F59E0B]/40 text-white shadow-md'
                            : 'bg-[#040812] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-white">{stg.name}</div>
                          <div className="text-[11px] text-slate-400">{stg.desc}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#F59E0B] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Scope Summary & Direct Enquiry Form (5 cols sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Live Scope Summary Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#081224] border border-white/15 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <div className="text-[10px] font-mono text-[#FF6B00] font-bold uppercase tracking-wider">
                    CONFIGURED SCOPE
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Project Summary
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                  {selectedFeatures.length} Modules
                </span>
              </div>

              {/* Selected Overview Pills */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#040812] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Platform:</span>
                  <span className="text-white font-bold truncate max-w-[210px] text-right">
                    {selectedTypeObj.name}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#040812] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Timeline:</span>
                  <span className="text-white font-bold">{selectedTimelineObj.name}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#040812] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-white font-bold truncate max-w-[210px] text-right">
                    {selectedStageObj.name}
                  </span>
                </div>
              </div>

              {/* Notice: No generic pricing reveal */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#94A3B8] space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold font-mono text-[10px]">
                  <Lock className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>CUSTOM ENGINEER SCOPE // ZERO GENERIC ESTIMATES</span>
                </div>
                <p className="leading-relaxed">
                  To ensure precision and eliminate hidden fees, our senior engineering team personally reviews your configuration and prepares a dedicated milestone breakdown.
                </p>
              </div>

              {/* Enquiry Submission Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Your Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#030610] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#030610] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#030610] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Company Ltd"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#030610] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Project Notes or Specific Needs (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any reference links, existing websites, or specific business goals..."
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#030610] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF6B00] transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm font-mono bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Submitting Your Scope...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Custom Project Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[10px] font-mono text-center text-slate-400 pt-1">
                    Your details are confidential &bull; Response within 24 hours
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="p-6 rounded-xl bg-[#04121A] border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold font-display text-white">
                      Scope &amp; Enquiry Received!
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Thank you <strong className="text-white">{clientName || 'there'}</strong>. Our lead engineer has received your configured project scope for a <strong className="text-white">{selectedTypeObj.name}</strong> with {selectedFeatures.length} feature modules.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-black/40 text-xs font-mono text-emerald-300 space-y-1 text-left">
                    <div>&bull; Client: {clientName} ({clientEmail})</div>
                    <div>&bull; Scope: {selectedTypeObj.name} ({selectedFeatures.length} modules)</div>
                    <div>&bull; Estimated Response: Within 24 hours</div>
                    <div>&bull; Reviewer: Senior Technical Lead</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <a
                      href={`mailto:${company.email}?subject=${encodeURIComponent(
                        `Custom Scope Estimation Request: ${selectedTypeObj.name} (${clientName})`
                      )}&body=${encodeURIComponent(
                        `Client Name: ${clientName}\nEmail: ${clientEmail}\nPhone: ${clientPhone || 'N/A'}\nCompany: ${companyName || 'N/A'}\n\nSelected Platform: ${selectedTypeObj.name}\nTimeline: ${selectedTimelineObj.name}\nAsset Status: ${selectedStageObj.name}\nFeatures Selected (${selectedFeatures.length}): ${selectedFeatures.join(', ')}\n\nProject Notes:\n${projectNotes || 'None'}`
                      )}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </a>
                    <a
                      href={`https://wa.me/917447557577?text=${encodeURIComponent(
                        `Hello Zemprolabs Team,\n\nI configured a project scope enquiry.\n\n*Name:* ${clientName}\n*Email:* ${clientEmail}\n*Platform:* ${selectedTypeObj.name}\n*Timeline:* ${selectedTimelineObj.name}\n*Modules:* ${selectedFeatures.length} selected\n\n*Notes:* ${projectNotes || 'None'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] hover:bg-[#10B981]/30 transition-all"
                    >
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-slate-400 hover:text-white pt-1"
                  >
                    &larr; Reconfigure or submit another project
                  </button>
                </div>
              )}

            </div>

            {/* Quick Guarantees Box */}
            <div className="p-4 rounded-xl bg-[#040812] border border-white/5 space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Zemprolabs Scoping Guarantees</span>
              </div>
              <div>&bull; Fixed milestone delivery with zero hidden change orders</div>
              <div>&bull; 100% source code ownership from day one</div>
              <div>&bull; Direct developer communication without account managers</div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Why We Don't Post Generic Price Tags */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span>OUR TRANSPARENT PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Why we don’t post generic price tags
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Traditional agencies use misleading "starter packages" to lure you in, only to invoice you for every small change later. Here is why bespoke scoping protects you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#070D1A] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Every System is Unique
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              A high-converting e-commerce store with ERP sync has very different technical needs than a SaaS dashboard. Fixed tiers either overcharge you or omit essentials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#070D1A] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Zero Surprise Invoices
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              When we provide an estimate, we agree on exact deliverables and milestones upfront. You never receive surprise change-order bills halfway through development.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#070D1A] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Scoped by Engineers, Not Sales
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Your inquiry is evaluated by the senior engineers who actually write code. No commission-driven salespeople overpromising what cannot be delivered.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What Happens Next (3-Step Roadmap) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#081224] to-[#040812] border border-white/10 shadow-2xl">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono text-[#FF6B00]">
              <span>NEXT STEPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              What happens after you send your enquiry?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#030610] border border-white/5 space-y-2.5">
              <div className="text-xs font-mono text-[#FF6B00] font-bold">
                01 // WITHIN 12-24 HOURS
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Senior Lead Review
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                A lead engineer analyzes your configured platform, modules, and target timeline to establish architecture requirements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#030610] border border-white/5 space-y-2.5">
              <div className="text-xs font-mono text-[#38BDF8] font-bold">
                02 // DIRECT EMAIL PROPOSAL
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Itemized Milestone Scope
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                You receive a clear, plain-English breakdown with milestone schedules, recommended tech stack, and fixed estimates.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#030610] border border-white/5 space-y-2.5">
              <div className="text-xs font-mono text-[#10B981] font-bold">
                03 // OPTIONAL 15-MIN CALL
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Technical Walkthrough
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                If you'd like, we hop on a brief video call with your lead engineer to answer technical questions before you commit to anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>COMMONLY ASKED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Questions about project estimates
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#070D1A] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-lg bg-white/5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Docked Closing CTA Section (pb-0 to connect seamlessly with Footer) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-0 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#09152C] via-[#0D1E3E] to-[#081224] border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl mb-12">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-xs font-mono text-[#FF6B00]">
              <span>PREFER A DIRECT CONVERSATION?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
              Have a custom request or existing codebase?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If your project doesn't fit standard categories or you already have a detailed specification document, you can message our team directly or schedule an immediate technical review call.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm font-mono bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)]"
              >
                <span>Talk to an Engineer Directly</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm font-mono bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all"
              >
                <span>View Recent Client Platforms</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectEstimation;
