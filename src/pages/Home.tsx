import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ProductionDemonstrationsSection } from '../components/ProductionDemonstrationsSection';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/projects';
import { company } from '../data/company';
import { Project } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ShoppingBag,
  Server,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Globe2,
  Workflow,
  FileCode2,
  Play,
  ChevronDown
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  FloatingElement,
  CountUpNumber,
  TextReveal,
  PerspectiveLineReveal,
  CinematicCurtainReveal,
  SpatialCardCascade,
  LaserConnectPipeline,
  Magnetic,
  BorderBeam,
  FloatingParticles,
  useLenis
} from '../components/motion';

const clientBrandWordmarks = [
  {
    id: 'baemeds',
    render: () => (
      <span className="font-display font-semibold tracking-tight text-lg sm:text-xl">
        Bae<span className="font-bold text-slate-200 group-hover:text-[#FF6B00] transition-colors">Meds</span>
      </span>
    )
  },
  {
    id: 'devit',
    render: () => (
      <span className="font-display font-extrabold tracking-tight text-lg sm:text-xl lowercase">
        <span className="text-slate-400 group-hover:text-[#FF1F1F] transition-colors duration-300">dev</span>
        <span className="text-slate-400 group-hover:text-white transition-colors duration-300">it.</span>
      </span>
    )
  },
  {
    id: 'auvia',
    render: () => (
      <span className="font-display font-medium tracking-wide text-lg sm:text-xl lowercase">
        auvia<span className="text-[10px] font-mono tracking-widest uppercase ml-1 opacity-60">therapy</span>
      </span>
    )
  },
  {
    id: 'erus',
    render: () => (
      <span className="font-display font-bold tracking-[0.22em] text-base sm:text-lg uppercase">
        ERUS<span className="font-light tracking-normal text-xs opacity-50 ml-1.5">ACADEMY</span>
      </span>
    )
  },
  {
    id: 'meduscore',
    render: () => (
      <span className="font-display font-bold tracking-tight text-lg sm:text-xl">
        Medus<span className="font-light opacity-60">Core</span>
      </span>
    )
  },
  {
    id: 'mohsin',
    render: () => (
      <span className="font-display font-bold tracking-widest text-base sm:text-lg uppercase">
        MOHSIN<span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-[#FF6B00] ml-1 transition-colors">.SURGICALS</span>
      </span>
    )
  },
  {
    id: 'conavlytics',
    render: () => (
      <span className="font-mono font-bold tracking-tighter text-base sm:text-lg">
        conav<span className="text-slate-300 group-hover:text-[#FF6B00] font-normal transition-colors">lytics</span>
      </span>
    )
  },
  {
    id: 'bilim',
    render: () => (
      <span className="font-display font-black tracking-[0.25em] text-base sm:text-lg uppercase">
        BILIM
      </span>
    )
  },
  {
    id: 'cynosure',
    render: () => (
      <span className="font-display font-bold tracking-[0.18em] text-sm sm:text-base uppercase">
        CYNOSURE<span className="text-xs font-mono font-normal opacity-50 ml-1">IT</span>
      </span>
    )
  },
  {
    id: 'thc',
    render: () => (
      <span className="font-display font-black tracking-[0.35em] text-lg sm:text-xl uppercase">
        T&bull;H&bull;C
      </span>
    )
  },
  {
    id: 'qalb',
    render: () => (
      <span className="font-display font-semibold tracking-[0.2em] text-lg sm:text-xl uppercase">
        QALB
      </span>
    )
  }
];

const faqItems = [
  {
    question: 'How quickly can our project or sprint kick off?',
    answer: 'Typically within 5 to 7 business days. Once we complete your initial 48-hour architectural scope and execute the bilateral NDA and milestone agreement, your dedicated senior engineering pod kicks off work immediately with zero onboarding delays.'
  },
  {
    question: 'How do you handle collaboration across US, European, and Gulf time zones?',
    answer: 'Our engineering headquarters in Hyderabad maintains dedicated daily overlap with both European (morning) and US Eastern/Pacific (evening) business hours. We collaborate asynchronously through dedicated Slack channels and GitHub PRs, complemented by scheduled weekly architecture demos.'
  },
  {
    question: 'What is your pricing and milestone contract structure?',
    answer: 'We operate under two transparent engagement models: Milestone-Based Fixed Pricing for defined project deliverables (funds released only upon verified feature completion) and Dedicated Senior Pods on monthly retainers for ongoing product development, continuous maintenance, and 24/7 SLAs.'
  },
  {
    question: 'Can you inherit an existing codebase or work with our in-house team?',
    answer: 'Yes. We routinely conduct comprehensive architectural audits to inherit, refactor, and scale existing React, Next.js, Node.js, and Shopify codebases. We integrate seamlessly into your existing GitHub branch protections, CI/CD pipelines, and project boards without disrupting ongoing operations.'
  }
];

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollTo } = useLenis();

  return (
    <div className="w-full">
      <SEO
        title="Software Engineering, E-Commerce & ServiceNow Studio"
        description="Zemprolabs is an independent digital engineering studio. We build custom web applications, e-commerce platforms, enterprise ServiceNow workflows, and cloud infrastructure."
        canonicalPath="/"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (DARK with Real Architectural Glass Facade)               */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#090A0D] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed Real Architectural Glass Facade Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-building-facade.jpg"
            alt="Modern architectural glass headquarters"
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-45 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/75 to-[#090A0D]/50" />
        </div>

        {/* Ambient Floating Luminous Energy Particles */}
        <FloatingParticles count={26} />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Studio Label with Antigravity Floating Motion */}
          <FloatingElement distance={4} duration={5}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                Engineering &bull; Business Development &bull; Commerce &bull; Cloud &amp; SEO
              </span>
            </div>
          </FloatingElement>

          {/* Confident Headline with 3D Perspective Line Reveal */}
          <div className="space-y-4">
            <PerspectiveLineReveal duration={1.1} delay={0.05}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white leading-[1.05]">
                We Build.{' '}
                <span className="text-[#FF6B00]">You Grow.</span>
              </h1>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.0} delay={0.18}>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
                From custom web platforms and e-commerce to enterprise ServiceNow and business development—partner directly with the engineers who build your product.
              </p>
            </ScrollReveal>
          </div>

          {/* Action Buttons with Reveal & Magnetic Pull */}
          <ScrollReveal preset="fade-up" delay={0.28} duration={1.1} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnetic strength={14}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,107,0,0.35)]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={10}>
              <button
                type="button"
                onClick={() => scrollTo('#selected-work', { duration: 1.2 })}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Watch Live Work in Action</span>
              </button>
            </Magnetic>
          </ScrollReveal>

          {/* Selected Proof Points with Animated Numbers */}
          <ScrollReveal preset="fade-up" delay={0.38} duration={1.1} className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left">
            <div className="py-2">
              <CountUpNumber value={40} suffix="+" className="text-2xl sm:text-3xl font-bold font-display text-white block" />
              <div className="text-xs text-slate-400 mt-0.5">Production Deployments</div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#FF6B00]">Enterprise</div>
              <div className="text-xs text-slate-400 mt-0.5">Certified ServiceNow Practice</div>
            </div>
            <div className="py-2">
              <CountUpNumber value={99.98} decimals={2} suffix="%" className="text-2xl sm:text-3xl font-bold font-display text-white block" />
              <div className="text-xs text-slate-400 mt-0.5">Historical Platform Uptime</div>
            </div>
            <div className="py-2">
              <CountUpNumber value={100} suffix="%" className="text-2xl sm:text-3xl font-bold font-display text-white block" />
              <div className="text-xs text-slate-400 mt-0.5">Direct Code &amp; IP Transfer</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED CLIENTS MARQUEE (The User Loves This Section)                 */}
      {/* ========================================================================= */}
      <section className="py-10 border-y border-white/10 bg-[#07080B] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">
            TRUSTED BY FOUNDERS &amp; ENGINEERING TEAMS GLOBALLY
          </p>
        </div>

        <div className="overflow-hidden marquee-mask py-2 w-full">
          <div className="animate-marquee items-center gap-14 sm:gap-20 lg:gap-24 select-none">
            {[...clientBrandWordmarks, ...clientBrandWordmarks].map((brand, idx) => (
              <div
                key={idx}
                className="opacity-50 hover:opacity-100 text-slate-400 hover:text-white transition-opacity duration-200 cursor-default flex items-center whitespace-nowrap"
              >
                {brand.render()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SELECTED WORK (PRODUCTION SCREENING THEATER & ARCHITECTURAL DOSSIER)   */}
      {/* ========================================================================= */}
      <ProductionDemonstrationsSection />



      {/* ========================================================================= */}
      {/* 4. CORE DISCIPLINES (DARK SECTION - Balanced Studio Photo & 2x2 Practices) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Header with Scroll Reveal */}
          <ScrollReveal preset="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold">
                // CORE DISCIPLINES • ENGINEERING PRACTICES
              </div>
              <div className="mt-1">
                <TextReveal
                  text="Four disciplined practices. Zero vendor fragmentation."
                  as="h2"
                  className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                One accountable team engineering your frontend interfaces, transactional backends, enterprise ServiceNow workflows, and 24/7 cloud infrastructure.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-[#FF6B00] transition-colors shrink-0 pb-1"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          {/* Balanced Split: Left Studio Photo & Ethos (5 cols) + Right 2x2 Practices (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: The Studio Photo & Engineering Ethos with Cinematic Curtain Reveal */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <CinematicCurtainReveal direction="up" duration={1.1} className="rounded-2xl border border-white/10 aspect-[4/3] sm:aspect-[16/11] relative group shadow-lg">
                <img
                  src="/images/studio-team-collaboration.jpg"
                  alt="Zemprolabs senior engineering team collaborating"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                  <span>Hyderabad Engineering Center</span>
                  <span className="text-[#FF6B00]">Direct Access</span>
                </div>
              </CinematicCurtainReveal>

              <div className="p-4.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                  <span>THE ZEMPROLABS STANDARD</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every product is engineered directly by senior software architects. No account managers playing telephone, no outsourced contractors, and complete source code ownership from day one.
                </p>
              </div>
            </div>

            {/* Right: 4 Core Disciplines with 3D Spatial Quadrant Cascades */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discipline 1: Full-Stack Web & SaaS (Top-Left 3D Pitch) */}
              <SpatialCardCascade index={0}>
                <AntigravityTiltCard tiltMax={6} className="h-full rounded-xl">
                  <div className="h-full p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">01 // FULL-STACK</span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold font-display text-white">
                          Custom Web Apps &amp; SaaS
                        </h3>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          React &bull; Next.js &bull; Node.js &bull; PostgreSQL
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        Modular full-stack web applications, customer portals, and multi-tenant SaaS dashboards engineered for speed and longevity.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
                      Full-Stack SSR &bull; APIs &bull; Schemas
                    </div>
                  </div>
                </AntigravityTiltCard>
              </SpatialCardCascade>

              {/* Discipline 2: E-Commerce Architecture (Top-Right 3D Pitch) */}
              <SpatialCardCascade index={1}>
                <AntigravityTiltCard tiltMax={6} className="h-full rounded-xl">
                  <div className="h-full p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">02 // COMMERCE</span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold font-display text-white">
                          E-Commerce Engineering
                        </h3>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          Shopify Plus &bull; Headless &bull; Custom Storefronts
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        Tailored online storefronts engineered for sub-second checkout speeds, multi-currency routing, and warehouse inventory sync.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
                      Plus Migration &bull; Extensions &bull; Inventory Sync
                    </div>
                  </div>
                </AntigravityTiltCard>
              </SpatialCardCascade>

              {/* Discipline 3: Enterprise ServiceNow (Bottom-Left 3D Pitch with BorderBeam) */}
              <SpatialCardCascade index={2}>
                <AntigravityTiltCard tiltMax={6} className="h-full rounded-xl">
                  <div className="relative overflow-hidden h-full p-5 rounded-xl bg-white/[0.03] border border-[#FF6B00]/30 hover:border-[#FF6B00]/50 transition-all flex flex-col justify-between space-y-3">
                    <BorderBeam size={180} duration={7} colorFrom="#FF6B00" colorTo="#FFA048" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                          <Workflow className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 font-semibold">
                          ENTERPRISE
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold font-display text-white">
                          Enterprise ServiceNow
                        </h3>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          ITSM &bull; CSM &bull; Scoped Applications
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        Certified ServiceNow practice delivering custom scoped applications, IT service workflows, and instance synchronization.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
                      Scoped Apps &bull; Service Portals &bull; Instance Sync
                    </div>
                  </div>
                </AntigravityTiltCard>
              </SpatialCardCascade>

              {/* Discipline 4: Cloud Architecture & DevOps (Bottom-Right 3D Pitch) */}
              <SpatialCardCascade index={3}>
                <AntigravityTiltCard tiltMax={6} className="h-full rounded-xl">
                  <div className="h-full p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                          <Server className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">04 // CLOUD</span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold font-display text-white">
                          Cloud &amp; 24/7 DevOps
                        </h3>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          AWS &bull; Docker &bull; Zero-Downtime CI/CD
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        Production cloud environments engineered for 99.98% platform uptime, zero-downtime deployment pipelines, and 24/7 SLAs.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
                      Multi-Region AWS &bull; CI/CD &bull; 24/7 SLAs
                    </div>
                  </div>
                </AntigravityTiltCard>
              </SpatialCardCascade>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 4A. DELIVERY LIFECYCLE — Architectural Milestone Pipeline (.AGENTS SPEC)  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-t border-stone-300/80">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <ScrollReveal preset="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-300/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                <span>HOW WE DELIVER &bull; 3-PHASE MILESTONE SPEC</span>
              </div>
              <div className="mt-1">
                <TextReveal
                  text="Three phases. One predictable outcome."
                  as="h2"
                  className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900"
                />
              </div>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:text-[#FF6B00] transition-colors self-start md:self-auto pb-1 group"
            >
              <span>Full Process Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Animated Connecting Laser Rail */}
          <LaserConnectPipeline className="my-6" />

          {/* 3-Column Sequential Milestone Pipeline */}
          <StaggerContainer staggerDelay={0.22} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-stone-300/80">
            {/* Phase 01 */}
            <StaggerItem className="flex flex-col justify-between space-y-6 md:pr-8 lg:pr-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
                    01
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-stone-200/80 text-stone-700">
                    Days 01–03
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Architecture &amp; Agile Roadmap
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                    We audit your requirements, establish API and data contracts, and structure your backlog into clear 2-week agile sprints with committed milestones. You get a transparent technical blueprint before engineering begins.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-700 flex items-center justify-between">
                <span className="text-stone-500">Milestone</span>
                <span className="font-semibold text-slate-900">Agile Blueprint &rarr;</span>
              </div>
            </StaggerItem>

            {/* Phase 02 */}
            <StaggerItem className="flex flex-col justify-between space-y-6 md:px-8 lg:px-10 border-t md:border-t-0 pt-8 md:pt-0 border-stone-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
                    02
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25">
                    Continuous Sprints
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Agile Sprints &amp; Direct Access
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                    We work in rapid agile sprints with regular staging deployments and direct Slack collaboration with senior architects. We don't believe in tossing software over a fence and disappearing—we stay embedded to refine, maintain, and scale your product.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-700 flex items-center justify-between">
                <span className="text-stone-500">Methodology</span>
                <span className="font-semibold text-[#FF6B00]">Agile Collaboration &rarr;</span>
              </div>
            </StaggerItem>

            {/* Phase 03 */}
            <StaggerItem className="flex flex-col justify-between space-y-6 md:pl-8 lg:pl-10 border-t md:border-t-0 pt-8 md:pt-0 border-stone-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
                    03
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-stone-200/80 text-stone-700">
                    Zero Lock-In
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Ongoing Care or Clean IP Handover
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                    Our goal is a long-term engineering partnership. But if you ever decide to take things in-house or move on, you own 100% of your intellectual property—complete Git repositories, cloud credentials, documentation, and CI/CD pipelines transferred with zero friction.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-700 flex items-center justify-between">
                <span className="text-stone-500">Freedom</span>
                <span className="font-semibold text-slate-900">100% IP Transfer &check;</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4B. POST-LAUNCH OPS — Bold Split Layout (DARK)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Bold statement */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B00] font-semibold">
                  // POST-LAUNCH
                </span>
                <PerspectiveLineReveal duration={1.2}>
                  <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mt-2 leading-tight">
                    We don't vanish after deployment.
                  </h2>
                </PerspectiveLineReveal>
                <ScrollReveal preset="fade-up" duration={1.1} delay={0.2}>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    Most agencies disappear after handoff. We stay on as your engineering partner — maintaining infrastructure, driving organic traffic, and scaling revenue.
                  </p>
                </ScrollReveal>
              </div>
              <Link
                to="/managed-services"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#ff7b1a] transition-colors mt-6"
              >
                <span>Explore Managed Retainers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right: Clean numbered list with Stagger */}
            <StaggerContainer staggerDelay={0.1} className="lg:col-span-3 divide-y divide-white/10 border-y border-white/10">
              <StaggerItem className="py-6 flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full border border-emerald-500/40 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">Proactive Maintenance &amp; SLAs</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-xl">
                    Continuous dependency upgrades, security patching, database optimization, bug triage, and guaranteed uptime response times. 99.98% SLA target.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="py-6 flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full border border-blue-500/40 flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">Technical SEO &amp; Core Web Vitals</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-xl">
                    Programmatic SEO architecture, structured Schema markup, semantic indexability, crawl budget optimization, and sub-second TTFB speeds. Lighthouse 95+.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="py-6 flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full border border-[#FF6B00]/40 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">Performance Marketing &amp; CRO</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-xl">
                    Conversion rate optimization, Google/Meta campaign architecture, multi-touch analytics attribution, and high-converting acquisition funnels.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4C. FOUNDER DISPATCHES — Full-Width Blockquote Strip (LIGHT TEXTURED)      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-textured-light text-stone-900 border-t border-stone-300/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal preset="fade-up" className="flex items-center gap-2 pb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Founder Dispatches
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-300/70">
            <SpatialCardCascade index={0} className="pb-8 md:pb-0 md:pr-10 lg:pr-14">
              <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                &ldquo;Zemprolabs helped us build BaeMeds from the ground up—from product sourcing and dual-market store architecture to our paid ad campaigns. We are still in an active ongoing retainer with them for daily maintenance, marketing, and SEO, and having direct engineering access cuts our iteration time from weeks to hours.&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Salman Abdul Mohammed</div>
                  <div className="text-stone-500 text-[11px] font-mono">Head of Operations · BaeMeds Global</div>
                </div>
                <span className="font-mono text-xs font-semibold text-stone-600">Active Retainer Client</span>
              </div>
            </SpatialCardCascade>

            <SpatialCardCascade index={1} className="pt-8 md:pt-0 md:pl-10 lg:pl-14">
              <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                &ldquo;Zemprolabs delivered deep platform expertise on our ServiceNow instance where standard dev agencies fell short. They audited our CMDB, eliminated update set collisions, and engineered automated ITSM &amp; IRM workflows that significantly reduced our incident resolution times.&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">IT Director &amp; Platform Owner</div>
                  <div className="text-stone-500 text-[11px] font-mono">Confidential Enterprise · Fortune 500</div>
                </div>
                <span className="font-mono text-xs font-semibold text-stone-600">Enterprise ServiceNow</span>
              </div>
            </SpatialCardCascade>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OPERATING COMMITMENTS — Minimal Numbered Rows (DARK)                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <ScrollReveal preset="fade-up" className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#FF6B00]">
              WHY FOUNDERS PARTNER WITH US
            </span>
            <div className="mt-2">
              <TextReveal
                text="Real engineering standards. No agency fluff."
                as="h2"
                className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white"
              />
            </div>
          </ScrollReveal>

          {/* Minimal numbered commitment rows with Stagger */}
          <StaggerContainer staggerDelay={0.08} className="divide-y divide-white/10 border-y border-white/10">
            <StaggerItem className="py-7 sm:py-8 grid grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.015] transition-colors">
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-sm font-bold text-[#FF6B00]">01</span>
              </div>
              <div className="col-span-10 sm:col-span-3">
                <h3 className="text-base font-bold font-display text-white">Talk Directly With the Builders</h3>
              </div>
              <div className="col-span-12 sm:col-span-5 sm:col-start-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  You work directly with the senior engineers writing your code. We share a dedicated Slack channel, hop on quick video calls when needed, and cut out the middleman entirely.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="font-mono text-[11px] text-emerald-400">Direct Access &bull; Zero Middlemen</span>
              </div>
            </StaggerItem>

            <StaggerItem className="py-7 sm:py-8 grid grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.015] transition-colors">
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-sm font-bold text-[#FF6B00]">02</span>
              </div>
              <div className="col-span-10 sm:col-span-3">
                <h3 className="text-base font-bold font-display text-white">You Own 100% of Everything</h3>
              </div>
              <div className="col-span-12 sm:col-span-5 sm:col-start-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every line of code, design asset, database schema, and account credential belongs entirely to you. Mutual NDA and full ownership rights signed from day one.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="font-mono text-[11px] text-amber-400">Zero Vendor Lock-in</span>
              </div>
            </StaggerItem>

            <StaggerItem className="py-7 sm:py-8 grid grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.015] transition-colors">
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-sm font-bold text-[#FF6B00]">03</span>
              </div>
              <div className="col-span-10 sm:col-span-3">
                <h3 className="text-base font-bold font-display text-white">Clean, Maintainable Code</h3>
              </div>
              <div className="col-span-12 sm:col-span-5 sm:col-start-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  We write clean, strictly typed code with modular components and clear documentation. Any developer you hire tomorrow will be able to pick it up, understand it, and build on it with ease.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="font-mono text-[11px] text-blue-400">Easy to Inherit &amp; Scale</span>
              </div>
            </StaggerItem>

            <StaggerItem className="py-7 sm:py-8 grid grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.015] transition-colors">
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-sm font-bold text-[#FF6B00]">04</span>
              </div>
              <div className="col-span-10 sm:col-span-3">
                <h3 className="text-base font-bold font-display text-white">Fast Uptime &amp; Swift Response</h3>
              </div>
              <div className="col-span-12 sm:col-span-5 sm:col-start-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your live system is backed by active monitoring and guaranteed quick response times. If anything critical ever goes wrong, we jump on it immediately to keep your business running smoothly.
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="font-mono text-[11px] text-indigo-400">Rapid Response Support</span>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Compact Handover Manifest — inline checklist */}
          <ScrollReveal preset="fade-up" className="pt-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="uppercase tracking-wider font-semibold">What you get with every project launch:</span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-300">
              {[
                'Full Codebase & Git Access',
                'Clear Architecture & Setup Docs',
                'Automated Build & Deployment Setup',
                'All Cloud, Domain & Account Logins',
                'Speed & Performance Verification',
                '30 Days of Dedicated Support'
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ (LIGHT TEXTURED)                                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-t border-stone-300/80">
        <div className="max-w-5xl mx-auto">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-300/70">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B00] font-semibold">
                  // FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
                  Questions founders ask before signing.
                </h2>
              </div>
            </div>

            <div className="divide-y divide-stone-300/70">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    >
                      <span className="font-display font-medium text-base sm:text-lg text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#FF6B00] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-sm text-slate-600 leading-relaxed font-normal max-w-3xl">
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
      {/* 7. CONTACT CTA (RICH BLACK SECTION)                                       */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-t border-white/10 relative overflow-hidden">
        {/* Subtle architectural ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#FF6B00]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <ScrollReveal preset="fade-up" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF6B00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>DIRECT ARCHITECT ACCESS &bull; 48-HOUR SCOPE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tell us what you're creating. We'll review your scope, propose an architecture, and deliver an honest timeline and estimate within 48 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fade-up" delay={0.15} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnetic strength={12}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-lg active:scale-[0.98]"
              >
                <span>Submit Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={8}>
              <Link
                to="/project-estimation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all active:scale-[0.98]"
              >
                <span>Calculate Project Cost</span>
              </Link>
            </Magnetic>
          </ScrollReveal>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-400">
            <div>
              Email:{' '}
              <a href={company.emailHref} className="text-white hover:text-[#FF6B00] underline font-mono transition-colors">
                {company.email}
              </a>
            </div>
            <div>
              Phone:{' '}
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF6B00] font-mono transition-colors">
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

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
