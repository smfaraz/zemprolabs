import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { HeroDeviceStage } from '../components/HeroDeviceStage';
import { BuildRunGrow } from '../components/BuildRunGrow';
import { HomeServiceCard } from '../components/HomeServiceCard';
import { HomePlatformAndPricingTeaser } from '../components/HomePlatformAndPricingTeaser';
import { HomeFAQSection } from '../components/HomeFAQSection';
import { HomeContactSection } from '../components/HomeContactSection';
import { Project3DScrollTracker } from '../components/Project3DScrollTracker';
import { ProjectModal } from '../components/ProjectModal';
import { homeServices } from '../data/homeServices';
import { projects } from '../data/projects';
import { clientProjectsList } from '../data/testimonials';
import { Project } from '../types';
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, MessageSquare } from 'lucide-react';

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
        conav<span className="text-slate-300 group-hover:text-cyan-400 font-normal transition-colors">lytics</span>
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

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Selected work with live autoplay preview videos (BaeMeds, Erus Academy, Auvia, MedusCore)
  const selectedWorkProjects = projects.filter((p) => Boolean(p.video)).slice(0, 4);

  return (
    <div className="pt-20 sm:pt-24 pb-0">
      <SEO
        title="Digital Partner for Software, E-Commerce & Managed Operations"
        description="We don't just build websites. Zemprolabs designs, develops, deploys, hosts, maintains, and manages your digital platform. From custom software to ongoing Shopify store care."
        canonicalPath="/"
      />

      {/* 1. Hero Section with Multi-Device Hardware Stage */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-3 sm:pt-6 lg:pt-8 pb-14 sm:pb-20 overflow-hidden max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Core Value & Call to Action */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left lg:pt-1">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL-STACK ENGINEERING &bull; OPERATIONS &bull; COMMERCE</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
                We Build.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA459] to-[#00E5FF]">
                  You Grow!
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold font-display text-slate-200 leading-snug">
                Your dedicated engineering team for custom software &amp; stores.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="space-y-2 max-w-xl">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-left">
                We build <span className="text-white font-medium">custom software</span>,{' '}
                <span className="text-white font-medium">e-commerce platforms</span>, and{' '}
                <span className="text-white font-medium">enterprise tools</span>
                {' '}— then stick around to <span className="text-[#FF9D54] font-medium">grow and manage them</span> smoothly.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] active:scale-95"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all active:scale-95"
              >
                <span>Explore Case Studies</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Multi-Device Hardware Stage */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroDeviceStage />
          </div>
        </div>
      </section>

      {/* 2. Ultra-Sleek Brand Wordmarks (Linear / Vercel Aesthetic) */}
      <section className="py-10 sm:py-12 border-y border-[rgba(148,163,184,0.08)] bg-[#05070D]/90 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#64748B]">
            TRUSTED BY FOUNDERS &amp; ENGINEERING TEAMS GLOBALLY
          </p>
        </div>

        <div className="overflow-hidden marquee-mask py-3 w-full">
          <div className="animate-marquee items-center gap-14 sm:gap-20 lg:gap-24 select-none">
            {[...clientBrandWordmarks, ...clientBrandWordmarks].map((brand, idx) => (
              <div
                key={idx}
                className="opacity-40 hover:opacity-100 text-slate-400 hover:text-white transition-all duration-300 cursor-default flex items-center whitespace-nowrap group hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
              >
                {brand.render()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Selected Work 3D Scroll Tracker (4 Production Projects) */}
      <section className="relative border-b border-[rgba(148,163,184,0.08)] bg-[#080C14]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <span>// PRODUCTION DEPLOYMENTS &bull; PROVEN WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
                Engineered for real business problems.
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 max-w-xl">
                Our production engineering anchors and scales mission-critical platforms—from medical e-commerce to adaptive streaming and international retail.
              </p>
            </div>
            <Link
              to="/work"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>VIEW ALL CASE STUDIES &rarr;</span>
            </Link>
          </div>
        </div>

        {/* 3D Scroll-Linked Project Tracker */}
        <Project3DScrollTracker
          projects={selectedWorkProjects}
          onSelectProject={setSelectedProject}
        />
      </section>

      {/* 4. Build / Run / Scale Lifecycle */}
      <BuildRunGrow />

      {/* 5. Six Service Overview Cards (Concise Summaries) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5">
                // SIX CORE DISCIPLINES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Everything digital. One accountable team.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>EXPLORE ALL 6 SERVICES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service) => (
              <HomeServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Managed Services & Tailored Architecture */}
      <HomePlatformAndPricingTeaser />

      {/* 7. Frequently Asked Questions Accordion */}
      <HomeFAQSection />

      {/* 8. Initiate Project Brief Form & Direct Contact */}
      <HomeContactSection />

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
