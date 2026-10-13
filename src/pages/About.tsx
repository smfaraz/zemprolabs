import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { company } from '../data/company';
import {
  ArrowRight,
  MapPin,
  Check,
  Laptop,
  ShoppingBag,
  Workflow,
  Server,
  Smartphone,
  Briefcase,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  TextReveal,
  Magnetic,
  BorderBeam,
  FloatingParticles,
  PerspectiveLineReveal,
  CinematicCurtainReveal,
  SpatialCardCascade,
} from '../components/motion';

export const About: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Direct senior engineer collaboration',
      summary: 'You communicate directly with the engineers writing and reviewing your code.',
      description:
        'We eliminated account managers and non-technical sales middlemen. When you discuss architectural trade-offs, scope revisions, or performance bottlenecks, you speak with lead engineers who understand your system down to the database schema.'
    },
    {
      number: '02',
      title: 'Agile retainers over project abandonment',
      summary: 'Modern software requires ongoing maintenance, dependency updates, and feature velocity.',
      description:
        'Software left unattended after launch accumulates security vulnerabilities, broken third-party APIs, and deployment failures. We partner through dedicated agile retainer pods, maintaining active CI/CD pipelines directly inside your repositories and deploying in two-week sprints.'
    },
    {
      number: '03',
      title: 'Complete source code and cloud ownership',
      summary: '100% intellectual property transfer from the very first commit.',
      description:
        'Every line of code, Dockerfile, Terraform configuration, and documentation is committed directly into your private GitHub or GitLab organization. Bilateral non-disclosure agreements and full intellectual property assignment are standard on every contract.'
    },
    {
      number: '04',
      title: 'Commercial accountability over technical novelty',
      summary: 'We build with battle-tested stacks engineered for stability and speed.',
      description:
        'We never impose experimental tools just because they are trendy. We engineer platforms with high-throughput technologies—TypeScript, Next.js, React, Node.js, PostgreSQL, E-Commerce engines, and ServiceNow—that your business can maintain and scale reliably for years.'
    }
  ];

  const disciplines = [
    {
      icon: Laptop,
      title: 'Web Applications & SaaS',
      description:
        'Scalable web applications, customer portals, and multi-tenant architectures built with Next.js, React, and TypeScript.'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Platforms & Storefronts',
      description:
        'Custom Shopify Liquid themes, headless commerce backends, sub-second checkout speeds, and bi-directional ERP synchronizations.'
    },
    {
      icon: Workflow,
      title: 'Enterprise ServiceNow',
      description:
        'Custom scoped applications, Flow Designer automation, Employee Service Portals, ITSM workflows, and CMDB governance.'
    },
    {
      icon: Briefcase,
      title: 'Business Development Engines',
      description:
        'Systematic ideal customer profiling, B2B lead generation, multi-channel outbound sequences, and CRM pipeline instrumentation.'
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure & DevOps',
      description:
        'Automated CI/CD deployment pipelines, containerized microservices, infrastructure as code with Terraform, and 24/7 uptime monitoring.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      description:
        'High-performance iOS and Android mobile experiences engineered with React Native, offline synchronization, and app store release pipelines.'
    }
  ];

  return (
    <div className="w-full bg-[#090A0D] text-white selection:bg-[#FF6B00] selection:text-black">
      <SEO
        title="About Our Studio | Zemprolabs"
        description="Learn about Zemprolabs: our engineering philosophy, direct senior access model, Hyderabad headquarters, and full-stack capabilities."
        canonicalPath="/about"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Real Architectural Glass Facade)                         */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-building-facade.jpg"
            alt="Zemprolabs engineering studio headquarters facade"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/80 to-[#090A0D]/60" />
        </div>

        {/* Ambient Floating Luminous Energy Particles */}
        <FloatingParticles count={24} />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-6">
            <PerspectiveLineReveal duration={1.3} delay={0.15}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
                An independent engineering studio built for lasting technical partnerships.
              </h1>
            </PerspectiveLineReveal>

            <ScrollReveal preset="fade-up" duration={1.1} delay={0.35}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                We partner with founders and enterprise engineering leaders who demand senior technical execution. Instead of handoffs, junior subcontractors, and code rot, we operate as dedicated agile pods embedded directly in your repositories.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal preset="fade-up" delay={0.45} duration={1.2} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Magnetic strength={12}>
              <Link
                to="/project-estimation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                <span>Scope Your Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </Magnetic>
            <Magnetic strength={8}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all"
              >
                <span>View Case Studies</span>
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STUDIO ETHOS & THE PROBLEM WE SOLVE                                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Studio Photography Card with Cinematic Curtain Shutter Reveal */}
          <div className="lg:col-span-6">
            <CinematicCurtainReveal direction="up" duration={1.3} className="rounded-2xl border border-white/10 relative shadow-2xl group overflow-hidden">
              <AntigravityTiltCard tiltMax={5} className="rounded-2xl">
                <div className="relative">
                  <img
                    src="/images/studio-team-collaboration.jpg"
                    alt="Zemprolabs engineering pod collaborating in studio"
                    className="w-full aspect-[4/3] object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/90 via-[#090A0D]/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-xs text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                      Engineering Pods &bull; Hyderabad Center
                    </span>
                    <span className="text-slate-400">Global Client Delivery</span>
                  </div>
                </div>
              </AntigravityTiltCard>
            </CinematicCurtainReveal>
          </div>

          {/* Studio Narrative */}
          <ScrollReveal preset="slide-left" className="lg:col-span-6 space-y-6">
            <TextReveal
              text="Why we built Zemprolabs differently."
              as="h2"
              className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight"
            />

            <p className="text-base text-slate-300 leading-relaxed">
              Traditional software agencies operate on a broken incentive model: senior partners sell the project, then quietly hand execution over to junior contractors while billing unpredictable hourly fees. Once code launches, the agency departs, leaving founders with undocumented architectures that break at the first update.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Zemprolabs was designed to replace that friction with direct engineering clarity. We act as your specialized technical co-pilots. We set up automated testing and continuous integration from day one, maintain transparent sprint backlogs, and prioritize long-term agile retainers to keep code healthy and fast.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF6B00] stroke-[2.5]" />
                  <span>100% Repository Control</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your code lives in your own GitHub or GitLab accounts with zero proprietary lock-in.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF6B00] stroke-[2.5]" />
                  <span>Two-Week Agile Cadence</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continuous staging previews, bi-weekly sprint reviews, and direct Slack access.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUR CORE OPERATING PRINCIPLES (Warm Tactile Paper Canvas)             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-b border-stone-300/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <PerspectiveLineReveal duration={1.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900">
                Principles that govern our engineering craft.
              </h2>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.2}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                These standards are not marketing taglines. They are embedded directly in our contracts, our architecture reviews, and our daily commits.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => (
              <SpatialCardCascade key={p.number} index={idx} className="h-full">
                <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                  <div className="h-full p-8 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-stone-300/80 shadow-sm space-y-4 hover:border-stone-400 transition-colors flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold font-display text-slate-900">
                          {p.number}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-200/70 text-slate-800">
                          Engineering Standard
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-slate-900 leading-snug">
                        {p.title}
                      </h3>

                      <div className="text-xs text-[#FF6B00] font-semibold">
                        {p.summary}
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed pt-1">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </AntigravityTiltCard>
              </SpatialCardCascade>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SIX TECHNICAL DISCIPLINES (Architectural Studio Grid)                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <PerspectiveLineReveal duration={1.2}>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
                Core disciplines we deliver.
              </h2>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.2}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We focus strictly on the engineering domains where we maintain deep architectural mastery.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <SpatialCardCascade key={idx} index={idx % 4} className="h-full">
                  <AntigravityTiltCard tiltMax={6} className="h-full rounded-2xl">
                    <div className="h-full p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF6B00]/50 transition-all flex flex-col justify-between space-y-5 group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#FF6B00] group-hover:text-black group-hover:border-[#FF6B00] text-slate-300 flex items-center justify-center transition-colors shadow-sm">
                          <Icon className="w-6 h-6 stroke-[1.75]" />
                        </div>

                        <h3 className="text-lg font-bold font-display text-white">
                          {d.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {d.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 text-xs text-slate-500 flex items-center justify-between">
                        <span>Senior engineering execution</span>
                        <span className="text-[#FF6B00] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Active pod
                        </span>
                      </div>
                    </div>
                  </AntigravityTiltCard>
                </SpatialCardCascade>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PHYSICAL STUDIO HEADQUARTERS                                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal preset="slide-right" className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Our physical workspace and presence.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                While we deliver globally for partners in the United States, United Kingdom, Middle East, and India, our physical engineering headquarters is anchored in Hyderabad.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display text-base">
                      Hyderabad Engineering Headquarters
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {company.address.full}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-slate-400 block mb-1">Direct inquiries:</span>
                  <a
                    href={company.emailHref}
                    className="text-white hover:text-[#FF6B00] font-medium transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-slate-400 block mb-1">Phone &amp; WhatsApp:</span>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF6B00] font-medium transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-6">
              <CinematicCurtainReveal direction="up" duration={1.3} className="rounded-2xl border border-white/10 relative shadow-2xl overflow-hidden">
                <AntigravityTiltCard tiltMax={5} className="rounded-2xl">
                  <div className="relative">
                    <img
                      src="/images/studio-workspace.jpg"
                      alt="Zemprolabs engineering workstations in Hyderabad"
                      className="w-full aspect-[4/3] object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-xs text-slate-300">
                      Workstations &amp; Architecture Pods &bull; Hyderabad
                    </div>
                  </div>
                </AntigravityTiltCard>
              </CinematicCurtainReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION (Project Scoping Invitation)                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white relative overflow-hidden">
        <ScrollReveal preset="fade-up" className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Ready to architect your software with a dedicated team?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Step through our interactive project scoping configurator to receive an itemized proposal evaluated directly by our technical team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Magnetic strength={12}>
              <Link
                to="/project-estimation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:shadow-[0_0_35px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                <span>Configure Project Scoping</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </Magnetic>
            <Magnetic strength={8}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all"
              >
                <span>Schedule a Technical Call</span>
              </Link>
            </Magnetic>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default About;
