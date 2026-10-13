import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  FileCode2,
  Activity,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { company } from '../data/company';
import {
  serviceOfferings,
  engagementModels,
  processSteps,
  faqs,
  type ServiceOffering,
  type EngagementModel
} from '../data/services';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  FloatingElement,
  PerspectiveLineReveal,
  CinematicCurtainReveal,
  SpatialCardCascade,
} from '../components/motion';

export const Services: React.FC = () => {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(serviceOfferings[0].id);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const selectedPractice =
    serviceOfferings.find((svc) => svc.id === selectedPracticeId) || serviceOfferings[0];

  const standards = [
    {
      title: 'Direct engineer access',
      detail: 'You collaborate directly with the engineers writing your code on Slack. Zero account-manager telephone games.'
    },
    {
      title: '100% Code and IP transfer',
      detail: 'All Git repositories, cloud infrastructure, and documentation are transferred to you from day one.'
    },
    {
      title: 'Maintainable, strict TypeScript',
      detail: 'Modular architecture, strict typing, clean database schemas, and zero lint warnings so your in-house team inherits seamlessly.'
    },
    {
      title: '30-Day post-launch warranty',
      detail: 'Every fixed build includes a dedicated 30-day warranty window for bug fixes, performance tuning, and operational handoff.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': serviceOfferings.map((svc) => ({
      '@type': 'Service',
      name: svc.title,
      description: svc.description,
      serviceType: svc.badge,
      provider: {
        '@type': 'Organization',
        name: 'Zemprolabs',
        address: {
          '@type': 'PostalAddress',
          addressLocality: company.address.city,
          addressCountry: company.address.country
        }
      }
    }))
  };

  return (
    <div className="w-full bg-[#090A0D] text-white">
      <SEO
        title="Engineering Services, E-Commerce & Business Development | Zemprolabs"
        description="Zemprolabs designs, builds, and scales custom web platforms, flagship e-commerce stores, enterprise ServiceNow workflows, and strategic business development pipelines."
        canonicalPath="/services"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ========================================================================= */}
      {/* 1. HERO — Architectural Glass Building Facade Hero                        */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative pt-36 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10 overflow-hidden"
      >
        {/* Full-bleed Architectural Glass Facade Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-building-facade.jpg"
            alt="Modern architectural glass headquarters"
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-45 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/80 to-[#090A0D]/55" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <FloatingElement distance={4} duration={5}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                ENGINEERING &bull; COMMERCE &bull; SERVICENOW &bull; BIZ DEV &bull; SEO
              </span>
            </div>
          </FloatingElement>

          <div className="space-y-4">
            <PerspectiveLineReveal duration={1.3} delay={0.15}>
              <h1
                id="services-hero-heading"
                className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]"
              >
                Web Platforms, Commerce &amp;{' '}
                <span className="text-[#FF6B00]">Business Growth.</span>
              </h1>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.35}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
                We design, build, maintain, and scale custom web platforms, flagship e-commerce stores, enterprise workflows, and strategic business development pipelines. You collaborate directly with the engineers and growth leads building your system.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal preset="fade-up" delay={0.45} duration={1.2} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,107,0,0.35)]"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/project-estimation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Calculate Project Cost</span>
            </Link>
          </ScrollReveal>

          {/* Operating Commitments Strip */}
          <ScrollReveal preset="fade-up" delay={0.7} duration={1.2} className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left">
            <div className="py-2">
              <span className="block text-slate-400 text-xs">Headquarters</span>
              <span className="font-bold text-white text-base sm:text-lg font-display mt-0.5 block">Hyderabad, India</span>
            </div>
            <div className="py-2">
              <span className="block text-slate-400 text-xs">Direct Access</span>
              <span className="font-bold text-[#FF6B00] text-base sm:text-lg font-display mt-0.5 block">Dedicated Slack</span>
            </div>
            <div className="py-2">
              <span className="block text-slate-400 text-xs">Code Ownership</span>
              <span className="font-bold text-white text-base sm:text-lg font-display mt-0.5 block">100% Day One Transfer</span>
            </div>
            <div className="py-2">
              <span className="block text-slate-400 text-xs">Platform Uptime</span>
              <span className="font-bold text-emerald-400 text-base sm:text-lg font-display mt-0.5 block">99.98% Monitored SLA</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PRACTICES — Editorial Studio Canvas (TACTILE PAPER TEXTURE)        */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="core-practices-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-b border-stone-300/80"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold tracking-wide text-[#FF6B00]">
              Our Core Disciplines
            </p>
            <PerspectiveLineReveal duration={1.3}>
              <h2
                id="core-practices-heading"
                className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight"
              >
                Seven core disciplines. One accountable studio.
              </h2>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.2}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Whether you need a ground-up web application, a fast Shopify migration, ServiceNow automation, or strategic B2B market expansion, we take ownership of execution with measurable commercial outcomes.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Discipline Selector & Deep Dive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Nav Column: List of Disciplines (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block px-1">
                Select a practice to inspect
              </span>
              <div className="space-y-2">
                {serviceOfferings.map((svc) => {
                  const isSelected = svc.id === selectedPracticeId;
                  const Icon = svc.icon;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedPracticeId(svc.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border ${
                        isSelected
                          ? 'bg-white shadow-md border-stone-300 ring-2 ring-[#FF6B00]/20'
                          : 'bg-white/60 hover:bg-white border-stone-200/80 hover:border-stone-300'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-slate-900 text-[#FF6B00]' : 'bg-stone-200/80 text-stone-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`text-base font-bold font-display truncate ${
                              isSelected ? 'text-slate-900' : 'text-slate-700'
                            }`}
                          >
                            {svc.title}
                          </h3>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium shrink-0">
                            {svc.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1">{svc.audience}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Display Column: Practice Specification Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-300 shadow-xl space-y-8">
                {/* Practice Visual Preview with Cinematic Curtain Reveal */}
                {selectedPractice.image && (
                  <CinematicCurtainReveal key={selectedPractice.id} direction="up" duration={1.1} className="rounded-xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] relative border border-stone-200/90 shadow-inner group">
                    <img
                      src={selectedPractice.image}
                      alt={selectedPractice.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10">
                        {selectedPractice.badge} Practice &bull; Production System
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded backdrop-blur-md border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live in Production
                      </span>
                    </div>
                  </CinematicCurtainReveal>
                )}

                {/* Header */}
                <div className="space-y-3 border-b border-stone-200 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00]">
                      {selectedPractice.badge} Practice
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                    {selectedPractice.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedPractice.description}
                  </p>
                </div>

                {/* Best Suited For */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Who this is for
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                    {selectedPractice.audience}
                  </p>
                </div>

                {/* Core Architectural Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Concrete deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPractice.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 text-slate-800 text-xs sm:text-sm border border-stone-200/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack & Action */}
                <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Production Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedPractice.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded bg-stone-200/80 text-slate-800 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
                    >
                      <span>Inquire About {selectedPractice.badge}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW WE DELIVER — Three Disciplined Phases (STUDIO OBSIDIAN)            */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="delivery-lifecycle-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-medium tracking-wide text-[#FF6B00]">
              The Delivery Lifecycle
            </p>
            <h2
              id="delivery-lifecycle-heading"
              className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white leading-tight"
            >
              Three phases. One predictable outcome.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We work in 2-week agile sprints. We do not want to leave clients stranded with complex software—our preferred model is an ongoing Agile Retainer where we operate as your embedded engineering pod. But if you ever choose to bring development in-house or move on, you own 100% of all Git repositories, IP, and credentials from day one with zero vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                  Day 01–03
                </span>
                <span className="text-sm font-bold text-slate-500">01</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Architecture &amp; Fixed Scope
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We audit your data schema, design modular API contracts, establish milestones, and commit to a fixed timeline and budget within 48 hours. You get a complete architecture spec before a single line of code is written.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold">
                Architecture Spec Handover
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                  Week 01–06
                </span>
                <span className="text-sm font-bold text-slate-500">02</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Sprint Builds &amp; Direct Access
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Bi-weekly production staging builds. Direct Slack access to the engineers who write the code—zero account-manager telephone games, zero ambiguity.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold">
                Weekly Staging Deploys
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                  Launch + Continuous Retainer
                </span>
                <span className="text-sm font-bold text-slate-500">03</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Launch &amp; Full IP Transfer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Production DNS routing, 100% Git and cloud credentials handover, automated CI/CD pipelines, and a seamless transition to our ongoing Agile Retainer pod. Zero proprietary vendor lock-in.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold">
                100% IP Transfer &amp; Handover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3B. OPERATIONAL PODS IN PRODUCTION — Visual Photo Gallery                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0F14] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-14">
          <ScrollReveal preset="fade-up" className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6B00]">
              // ACTIVE OPERATIONAL PODS IN PRODUCTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              We run your digital operations so you don&apos;t have to.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From sourcing products and managing daily catalog uploads to running multi-channel ads and enterprise ServiceNow governance, see how our embedded pods deliver real commercial results.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: E-Commerce Sourcing & Operations */}
            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-[#FF6B00]/40 transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src="/images/baemeds-product.jpg"
                      alt="E-Commerce Sourcing & Dropshipping"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[#FF6B00]">
                      E-Commerce &amp; Sourcing
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-display text-white">
                        US Product Sourcing &amp; Full Operations
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        We source products from US distributors, engineer automated dropshipping pipelines, upload catalogs, run Google &amp; Meta Ads, and manage digital sales (e.g. BaeMeds USA &amp; India). The client doesn&apos;t lift a finger.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Storefronts &bull; Ads &bull; Sales</span>
                      <span className="text-emerald-400 font-semibold">100% Managed</span>
                    </div>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            {/* Card 2: Ground-Up Multi-Platform Ecosystems */}
            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-[#FF6B00]/40 transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src="/images/studio-team-collaboration.jpg"
                      alt="Multi-platform engineering ecosystem"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-blue-400">
                      Web &bull; CRM &bull; Mobile &bull; AI
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-display text-white">
                        Ground-Up 4-in-1 Platform Engineering
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Student &amp; clinic web LMS portals, admissions/patient intake CRMs, native iOS &amp; Android mobile apps, and LLM-powered interactive modules (e.g. Erus Academy &amp; Auvia Behavioral Centers).
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Web &bull; CRM &bull; iOS &bull; Android</span>
                      <span className="text-[#FF6B00] font-semibold">Ground Zero</span>
                    </div>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            {/* Card 3: Enterprise ServiceNow & B2B Growth */}
            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-[#FF6B00]/40 transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src="/images/servicenow-dashboard.jpg"
                      alt="ServiceNow Enterprise ITSM & IRM"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-emerald-400">
                      ServiceNow &bull; Biz Dev
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-display text-white">
                        Enterprise Governance &amp; Practice Sourcing
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Certified CIS-CMDB and IRM governance under strict bilateral NDAs for global enterprises, paired with strategic ServiceNow technical talent sourcing and financial business development (Cynosure IT Innovations).
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>ITSM &bull; IRM &bull; Workforce</span>
                      <span className="text-emerald-400 font-semibold">Bilateral NDA</span>
                    </div>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMMERCIAL STRUCTURES — Transparent Models (TACTILE PAPER TEXTURE)     */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="commercial-models-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-b border-stone-300/80"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal preset="fade-up" className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold tracking-wide text-[#FF6B00]">
              Commercial Models
            </p>
            <h2
              id="commercial-models-heading"
              className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight"
            >
              Three commercial structures. Zero budget surprises.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Choose the structure that matches your current product stage. In every arrangement, you own 100% of the code and communicate directly with senior engineers.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model) => {
              const isPreferred = model.id === 'retainer';
              return (
                <StaggerItem key={model.id} className="h-full">
                  <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                    <div
                      className={`h-full p-8 rounded-2xl bg-white border flex flex-col justify-between space-y-8 relative transition-all ${
                        isPreferred
                          ? 'border-[#FF6B00] shadow-xl ring-2 ring-[#FF6B00]/30'
                          : 'border-stone-300 shadow-md'
                      }`}
                    >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {model.label}
                      </span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${
                          isPreferred
                            ? 'bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20'
                            : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        {model.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        {model.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#FF6B00] mt-1">
                        {model.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="pt-4 border-t border-stone-200 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Standard inclusions
                      </span>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5">
                        {model.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <Link
                      to={model.ctaLink}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                        isPreferred
                          ? 'bg-[#FF6B00] text-black hover:bg-[#ff7b1a] shadow-sm'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      <span>{model.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CONTRACTUAL STANDARDS & FAQ — Questions Founders Ask (STUDIO OBSIDIAN)  */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* 4 Standards */}
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm font-medium tracking-wide text-[#FF6B00]">
                Contractual Commitments
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
                Standards we guarantee in every agreement.
              </h2>
            </div>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((std) => (
                <StaggerItem key={std.title} className="h-full">
                  <AntigravityTiltCard tiltMax={5} className="h-full rounded-xl">
                    <div className="h-full p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all space-y-3">
                      <h3 className="text-base font-bold font-display text-white">
                        {std.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {std.detail}
                      </p>
                    </div>
                  </AntigravityTiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* FAQ Accordion */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm font-medium tracking-wide text-[#FF6B00]">
                Frequently Asked Questions
              </p>
              <h3
                id="faq-heading"
                className="text-2xl sm:text-3xl font-bold font-display text-white"
              >
                Questions founders ask before signing.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Direct answers about scoping, IP ownership, support warranties, and codebase inheritances.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-[#FF6B00] hover:underline font-medium"
                >
                  <span>Have a specific question? Ask us directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                    >
                      <span className="text-base font-semibold text-white font-display">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CLOSING CTA — Studio Black Final Brief Intake                          */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="brief-intake-heading"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <p className="text-sm font-medium tracking-wide text-[#FF6B00]">
            Ready to Build?
          </p>

          <h2
            id="brief-intake-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight"
          >
            Have a project in mind? Tell us what you are creating.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We will review your scope, propose an architecture, and deliver an honest timeline and estimate within 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all active:scale-[0.98] shadow-lg"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/project-estimation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all active:scale-[0.98]"
            >
              <span>Calculate Project Cost</span>
            </Link>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <div>
              Email:{' '}
              <a href={`mailto:${company.email}`} className="text-white hover:underline">
                {company.email}
              </a>
            </div>
            <div>
              Phone:{' '}
              <a href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:underline">
                {company.phone}
              </a>
            </div>
            <div>
              HQ:{' '}
              <span className="text-white">
                {company.address.city}, {company.address.country}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};