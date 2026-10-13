import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { company } from '../data/company';
import { serviceProcesses, type ServiceProcess, type ProcessStage } from '../data/processes';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Activity,
  ShieldCheck,
  UserCheck,
  Layers,
  GitBranch,
  RefreshCw,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  FloatingElement,
  TextReveal,
  Magnetic,
  FloatingParticles,
  PerspectiveLineReveal,
  CinematicCurtainReveal,
  SpatialCardCascade,
  LaserConnectPipeline,
} from '../components/motion';

const COMPARISON_ROWS = [
  {
    feature: 'Who executes your project?',
    zemprolabs: 'Direct senior software architects & growth leads',
    agency: 'Junior developers after the senior sales pitch',
    freelance: 'Solo developer with variable skill depth'
  },
  {
    feature: 'Delivery methodology',
    zemprolabs: 'Tailored 4-phase blueprints specific to the service',
    agency: 'Rigid, generic one-size-fits-all agency template',
    freelance: 'Ad-hoc, unstandardized execution'
  },
  {
    feature: 'Long-term partnership model',
    zemprolabs: 'Preferred Agile Retainer: Continuous CI/CD maintenance & 2-week sprints',
    agency: 'One-off project dumping or expensive hourly change orders',
    freelance: 'Disappears after final invoice; code rots without maintenance'
  },
  {
    feature: 'CI/CD & automated deployment',
    zemprolabs: 'Maintained directly in client Git repositories with automated tests',
    agency: 'Manual FTP/SSH deployments or closed proprietary hosting',
    freelance: 'No automated tests or continuous deployment pipelines'
  },
  {
    feature: 'Code & IP ownership',
    zemprolabs: '100% transferred to client from Day 1',
    agency: 'Proprietary frameworks & vendor lock-in',
    freelance: 'Often disputed or uncommitted'
  },
  {
    feature: 'Staging & progress visibility',
    zemprolabs: 'Weekly private staging & video demos every Friday',
    agency: 'Infrequent slide decks & static screenshots',
    freelance: 'Sporadic local previews upon request'
  },
  {
    feature: 'Communication channel',
    zemprolabs: 'Dedicated Slack with your architects & leads',
    agency: 'Account manager telephone games & email delays',
    freelance: 'Inconsistent messaging & delayed response'
  },
  {
    feature: 'Post-launch support & evolution',
    zemprolabs: '30-day hypercare + seamless transition to Agile Retainer pod',
    agency: 'Expensive bloated support add-on contracts',
    freelance: 'Developer moves to next client immediately'
  }
];

const FAQS = [
  {
    q: 'Why do you have different processes for different services?',
    a: 'Because engineering a transactional Next.js web application requires a fundamentally different architecture, testing cadence, and handover than configuring an enterprise ServiceNow instance, scaling an e-commerce storefront, or structuring an outbound B2B market expansion. We tailor the milestones, staging links, tooling, and deliverables specifically to the discipline so your project is never forced into a generic template.'
  },
  {
    q: 'How long does a typical project take from brief to launch?',
    a: 'A focused Shopify build or cloud setup typically launches in 2 to 4 weeks. Full-stack web applications, multi-service platforms, and enterprise ServiceNow implementations generally take 4 to 8 weeks. Strategic business development sprints run on 30 to 60-day pipeline milestones. Every project receives an itemized milestone schedule with committed release dates within 48 hours of your brief.'
  },
  {
    q: 'How do you guarantee that project budgets remain fixed?',
    a: 'We conduct a thorough architectural audit before quoting. We identify data structures, third-party integrations, and edge cases during the initial 48-hour discovery phase, locking down a concrete specification. Unless you decide to change the core scope mid-sprint, your milestone price never changes.'
  },
  {
    q: 'Who actually writes the code and executes our service?',
    a: 'Senior software architects and domain leads based in our Hyderabad engineering center. We do not subcontract work to unknown offshore third parties or delegate your build to junior trainees. You collaborate directly with the specialists executing your project on a shared Slack channel.'
  },
  {
    q: 'Why do you prefer ongoing agile retainers rather than ending projects at launch?',
    a: 'Modern software and digital operations are living systems. Code that is abandoned after launch quickly accumulates security vulnerabilities, outdated dependencies, broken CI/CD pipelines, and technical debt. Our preferred engagement model across web development, Shopify, ServiceNow, cloud infrastructure, and growth is an ongoing Agile Retainer. We maintain your CI/CD pipelines directly in your repositories, handle proactive dependency and security updates, and continuously ship new feature backlog items in regular 2-week agile sprints. You still own 100% of your code and IP with zero vendor lock-in.'
  },
  {
    q: 'Can we sign an NDA before sharing our project requirements?',
    a: 'Yes. We respect confidentiality and regularly sign mutual NDAs before reviewing sensitive business workflows, schemas, or product briefs. We can countersign your standard NDA or provide our standard mutual confidentiality agreement within hours.'
  }
];

export const Process: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceProcesses[0].id);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentService =
    serviceProcesses.find((p) => p.id === selectedServiceId) || serviceProcesses[0];
  const currentStage = currentService.stages[activeStage] || currentService.stages[0];

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setActiveStage(0);
  };

  return (
    <div className="w-full bg-[#090A0D] text-white">
      <SEO
        title="Our Engineering Process & Delivery Blueprints | Zemprolabs"
        description="Explore Zemprolabs' tailored delivery processes across Web Apps, E-Commerce, ServiceNow, Business Development, Cloud, and Technical SEO with weekly staging and full IP transfer."
        canonicalPath="/process"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Architectural Glass Building Facade Hero)                */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10 overflow-hidden">
        {/* Full-bleed Architectural Glass Facade Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-building-facade.jpg"
            alt="Modern architectural glass headquarters"
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-45 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/80 to-[#090A0D]/55" />
        </div>

        {/* Ambient Floating Luminous Energy Particles */}
        <FloatingParticles count={24} />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <FloatingElement distance={4} duration={5}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                DISCIPLINE-SPECIFIC DELIVERY &bull; PREDICTABLE EXECUTION
              </span>
            </div>
          </FloatingElement>

          <div className="space-y-4">
            <PerspectiveLineReveal duration={1.3} delay={0.15}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
                How We Deliver Across{' '}
                <span className="text-[#FF6B00]">Every Discipline.</span>
              </h1>
            </PerspectiveLineReveal>

            <ScrollReveal preset="fade-up" duration={1.1} delay={0.35}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
                Different services require different delivery playbooks. From full-stack web applications and Shopify migrations to ServiceNow workflows and B2B business development, explore our tailored 4-phase blueprints.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal preset="fade-up" delay={0.45} duration={1.2} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnetic strength={12}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,107,0,0.35)]"
              >
                <span>Schedule Architecture Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={8}>
              <Link
                to="/project-estimation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Calculate Project Cost</span>
              </Link>
            </Magnetic>
          </ScrollReveal>

          {/* Studio Process Telemetry */}
          <ScrollReveal preset="fade-up" delay={0.7} duration={1.2} className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left">
            <div className="py-2">
              <span className="text-xs text-slate-400 block">Delivery Cadence</span>
              <span className="text-base sm:text-lg font-bold font-display text-white mt-0.5 block">2-Week Agile Sprints</span>
            </div>
            <div className="py-2">
              <span className="text-xs text-slate-400 block">CI/CD &amp; Testing</span>
              <span className="text-base sm:text-lg font-bold font-display text-[#FF6B00] mt-0.5 block">Continuous Pipelines</span>
            </div>
            <div className="py-2">
              <span className="text-xs text-slate-400 block">Communication</span>
              <span className="text-base sm:text-lg font-bold font-display text-white mt-0.5 block">Direct Slack Pod Access</span>
            </div>
            <div className="py-2">
              <span className="text-xs text-slate-400 block">Preferred Model</span>
              <span className="text-base sm:text-lg font-bold font-display text-emerald-400 mt-0.5 block">Ongoing Agile Retainer</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE TAILORED PROCESS SYSTEM (Tactile Architectural Paper Canvas)        */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="delivery-lifecycle-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-b border-stone-300/80"
      >
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
              Tailored Delivery Lifecycles By Practice
            </span>
            <PerspectiveLineReveal duration={1.3}>
              <h2
                id="delivery-lifecycle-heading"
                className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900"
              >
                Different disciplines require different delivery playbooks.
              </h2>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.2}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                A full-stack web application, an e-commerce storefront cutover, an enterprise ServiceNow implementation, and an outbound B2B expansion engine are fundamentally distinct. Rather than ending projects at launch, our preferred model is an ongoing Agile Retainer—maintaining continuous CI/CD pipelines, automated testing, and bi-weekly sprint improvements across every practice.
              </p>
            </ScrollReveal>
          </div>

          {/* Service Discipline Selector Ribbon */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block px-1">
              Select a practice to inspect its delivery process:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
              {serviceProcesses.map((sp) => {
                const isSelected = sp.id === currentService.id;
                const Icon = sp.icon;
                return (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => handleSelectService(sp.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-center ${
                      isSelected
                        ? 'bg-[#090A0D] text-white border-[#090A0D] shadow-md ring-2 ring-[#FF6B00]/30'
                        : 'bg-white/80 hover:bg-white text-slate-700 border-stone-300/80 hover:border-stone-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#FF6B00]' : 'text-stone-500'}`} />
                    <span className="truncate">{sp.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Service Quick Facts Banner */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-300 shadow-md space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FF6B00]/10 text-[#FF6B00]">
                    {currentService.badge}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    4-Stage Structured Blueprint
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  {currentService.serviceName}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                {currentService.summary}
              </p>
            </div>

            {/* Service Fast Facts Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>Timeline</span>
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display leading-snug">
                  {currentService.timelineEstimate}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <Activity className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>Cadence</span>
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display leading-snug">
                  {currentService.cadence}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>Primary Handover</span>
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display leading-snug">
                  {currentService.deliverableType}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <UserCheck className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>Lead Contact</span>
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-display leading-snug">
                  {currentService.leadContact}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Connecting Laser Rail */}
          <LaserConnectPipeline className="my-6" />

          {/* Interactive Phase Selector & Deep-Dive Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Phase Selector List (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block px-1">
                Select a stage to inspect
              </span>
              <div className="space-y-3">
                {currentService.stages.map((step, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-stone-400 shadow-md ring-2 ring-[#FF6B00]/30'
                          : 'bg-white/60 hover:bg-white border-stone-300/70 hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-display font-extrabold text-xl ${
                              isSelected ? 'text-[#FF6B00]' : 'text-stone-400'
                            }`}
                          >
                            {step.number}
                          </span>
                          <h4 className="font-bold font-display text-base sm:text-lg text-slate-900 leading-snug">
                            {step.title}
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-slate-700 font-semibold shrink-0">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-2">
                        {step.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Phase Specification (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-300 shadow-xl space-y-8">
                {/* Stage Visual Preview with Cinematic Shutter Reveal */}
                {currentService.image && (
                  <CinematicCurtainReveal key={`${currentService.id}-${activeStage}`} direction="up" duration={1.1} className="rounded-xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] relative border border-stone-200/90 shadow-inner group">
                    <img
                      src={currentService.image}
                      alt={currentService.serviceName}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10">
                        Stage {currentStage.number} &bull; {currentStage.title}
                      </span>
                      <span className="text-[11px] font-mono text-[#FF6B00] flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded backdrop-blur-md border border-[#FF6B00]/30">
                        <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                        {currentStage.timeline}
                      </span>
                    </div>
                  </CinematicCurtainReveal>
                )}

                {/* Header */}
                <div className="space-y-3 border-b border-stone-200 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00]">
                      Stage {currentStage.number} &bull; {currentStage.timeline}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      {currentService.serviceName}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                    {currentStage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {currentStage.subtitle}
                  </p>
                </div>

                {/* What Happens */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    What happens during this phase
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                    {currentStage.description}
                  </p>
                </div>

                {/* What You Receive */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    What you receive
                  </h4>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/60">
                    {currentStage.clientReceives}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key deliverables &amp; milestones
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-stone-50 text-slate-800 text-xs sm:text-sm border border-stone-200/60 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contextual Action */}
                <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-stone-500 font-mono">
                    Direct collaboration with {currentService.leadContact}
                  </span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(currentService.serviceName)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
                  >
                    <span>Inquire About {currentService.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2B. THE AGILE RETAINER POD (Why We Prefer Continuous CI/CD & Evolution)   */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="agile-retainer-heading"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0F14] text-white border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                <span>PREFERRED ENGAGEMENT PHILOSOPHY</span>
              </div>
              <h2
                id="agile-retainer-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight"
              >
                Why We Prefer Retainers Over Ending Projects.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Traditional agencies build, dump unmaintained code over the fence, and disappear. We believe production software is living infrastructure. Rather than ending projects at launch, we partner on ongoing Agile Retainers—maintaining active CI/CD pipelines, shipping features in 2-week sprints, and eliminating technical debt across web development, commerce, cloud, and enterprise workflows.
              </p>
            </div>

            <Link
              to="/contact?intent=retainer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shrink-0 active:scale-[0.98]"
            >
              <span>Explore An Agile Retainer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Core Pillars of our Agile Retainer Model with Stagger & Antigravity 3D Tilt */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">Active CI/CD Pipelines</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We manage automated GitHub Actions pipelines directly in your repositories. Automated linting, test suites, preview staging environments, and safe branch deployments prevent code from breaking.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">2-Week Agile Sprints</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We organize work into disciplined two-week sprints. Backlog refinement, sprint planning, weekly staging demos, and velocity tracking keep product progress predictable and aligned with commercial goals.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">Proactive Maintenance</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Security patches, framework upgrades (Next.js, Node, Liquid), database indexing audits, and API deprecation defense happen automatically every month before issues reach end users.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">Embedded Product Pod</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      You get direct access to senior full-stack architects, DevOps engineers, and UI specialists in a shared Slack channel—operating as a natural extension of your team without hiring overhead.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Visual Editorial Spread: Studio Pod & IP Handover Guarantee */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 relative group aspect-[16/9] shadow-2xl">
              <img
                src="/images/studio-team-collaboration.jpg"
                alt="Zemprolabs engineering pod collaborating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 space-y-1">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FF6B00] text-black font-bold uppercase tracking-wider">
                  Hyderabad Engineering Center
                </span>
                <h4 className="text-base sm:text-lg font-bold font-display text-white">
                  Senior Engineers Only &bull; 0 Account Manager Proxies
                </h4>
                <p className="text-xs text-slate-300">
                  Direct Slack communication, bi-weekly agile sprint demos, and commits pushed directly to client repositories.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ZERO VENDOR LOCK-IN GUARANTEE</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  100% IP Freedom If You Move On
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We believe in long-term engineering partnerships where we actively manage your software, maintenance, ads, and sales. But if you ever decide to transition or take development in-house, we hand over 100% of your intellectual property immediately:
                </p>
                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>Complete Git repositories &amp; commit histories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>All AWS, cloud &amp; hosting account credentials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>Architecture blueprints &amp; sysadmin runbooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>Zero proprietary lock-in or licensing fees</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold transition-all"
              >
                <span>Inquire About Agile Pod Retainer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OPERATING STANDARDS COMPARISON (Studio Obsidian Stage)                 */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="comparison-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
              Why Operating Model Matters
            </span>
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white leading-tight"
            >
              Zemprolabs Studio vs Traditional Alternatives.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We engineered our studio structure specifically to eliminate the common failure points of traditional agencies and freelance marketplaces.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-white/5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="p-5 sm:p-6 font-semibold">Operating Dimension</th>
                  <th className="p-5 sm:p-6 text-[#FF6B00] bg-[#FF6B00]/10 font-bold">Zemprolabs Studio</th>
                  <th className="p-5 sm:p-6 text-slate-400">Traditional Agency</th>
                  <th className="p-5 sm:p-6 text-slate-400">Freelance Marketplaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01]">
                    <td className="p-5 sm:p-6 font-semibold text-white">{row.feature}</td>
                    <td className="p-5 sm:p-6 bg-[#FF6B00]/5 text-white font-medium">{row.zemprolabs}</td>
                    <td className="p-5 sm:p-6 text-slate-400">{row.agency}</td>
                    <td className="p-5 sm:p-6 text-slate-400">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROCESS FAQ (Questions Founders Ask)                                   */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
              Frequently Asked Questions
            </span>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold font-display text-white"
            >
              Questions founders ask about how we work.
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] cursor-pointer"
                  >
                    <span className="font-bold text-white text-base sm:text-lg font-display">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLOSING CTA (Studio Black Brief Intake)                                */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="process-cta-heading"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
            Ready to Plan Your Product Roadmap?
          </span>

          <h2
            id="process-cta-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight"
          >
            Have a project in mind? Tell us what you are creating.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
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

          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-mono">
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
