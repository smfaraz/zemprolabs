import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { LighthouseHeroSystem } from '../components/LighthouseHeroSystem';
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
    <div className="pt-24 sm:pt-28 pb-0">
      <SEO
        title="Digital Partner for Software, E-Commerce & Managed Operations"
        description="We don't just build websites. Zemprolabs designs, develops, deploys, hosts, maintains, and manages your digital platform. From custom software to ongoing Shopify store care."
        canonicalPath="/"
      />

      {/* 1. Hero Section with Lighthouse Optical Physics */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24 overflow-hidden">
        <LighthouseHeroSystem
          illuminatedContent={
            <>
              {/* 1. Illuminated Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/25 border border-[#FFD272]/70 text-[#FFFBEB] text-xs font-mono shadow-[0_0_20px_rgba(255,107,0,0.6)]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>ENGINEERING &bull; OPERATIONS &bull; COMMERCE</span>
              </div>

              {/* 2. Radiant Solar Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#FFFDF5] leading-[1.05] drop-shadow-[0_0_35px_rgba(255,220,130,0.95)]">
                  We Build.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FFD700] to-[#00E5FF] filter drop-shadow-[0_0_40px_rgba(255,107,0,1)]">
                    You Grow!
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-semibold font-display text-white leading-snug drop-shadow-[0_0_25px_rgba(255,240,200,0.9)]">
                  Your dedicated engineering team for custom software &amp; stores.
                </p>
              </div>

              {/* 3. Illuminated High-Contrast Copy - EXACT subpixel match with base paragraph */}
              <div className="space-y-2 max-w-[470px]">
                <p className="text-base sm:text-lg text-white font-normal leading-relaxed text-left drop-shadow-[0_0_20px_rgba(255,210,120,0.9)]">
                  We build <span className="text-[#FFE4B5] font-medium underline decoration-[#FF6B00] decoration-2 underline-offset-4">custom software</span>,{' '}
                  <span className="text-[#FFE4B5] font-medium underline decoration-[#FF6B00] decoration-2 underline-offset-4">e-commerce platforms</span>,{' '}
                  <span className="text-[#FFE4B5] font-medium underline decoration-[#FF6B00] decoration-2 underline-offset-4">enterprise tools</span>, and{' '}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#FF6B00] text-black border border-[#FFD272] shadow-[0_0_20px_rgba(255,107,0,0.85)] align-middle">
                    <span>much more</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                  {' '}— then stick around to <span className="text-[#FFD272] font-medium">grow them</span> and keep them running smoothly.
                </p>
              </div>

              {/* 4. Glowing Action Buttons */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF7B1A] text-black border border-[#FFD272] shadow-[0_0_35px_rgba(255,107,0,0.85)]">
                    <span>Book a Free Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#111827] text-white border border-[#38BDF8]/60 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                    <span>Explore Case Studies</span>
                    <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                </div>
              </div>


              {/* 6. Secret Human Handwritten Notes Floating Under Spotlight (Carefully arranged in margins with zero text collisions) */}
              <div className="font-['Caveat',cursive] pointer-events-none">
                {/* Note 1: Above top badge crowning the hero */}
                <div className="absolute -top-8 sm:-top-10 left-1 sm:left-4 text-2xl sm:text-3xl text-[#FFE4B5] drop-shadow-[0_0_22px_rgba(255,180,50,0.95)] -rotate-3 whitespace-nowrap">
                  <span>built with care ~</span>
                </div>

                {/* Note 2: To the right of 'You Grow!' in the open heading margin */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-6 lg:left-[550px] lg:right-auto text-xl sm:text-2xl lg:text-3xl text-[#FFB067] drop-shadow-[0_0_22px_rgba(255,107,0,0.95)] rotate-3 whitespace-nowrap">
                  <span>always on.</span>
                </div>

                {/* Note 3: In the open margin to the right of the body copy */}
                <div className="absolute top-44 sm:top-36 right-3 sm:right-auto sm:left-[485px] text-xl sm:text-2xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.95)] -rotate-2 whitespace-nowrap">
                  <span>we&apos;ve got you.</span>
                </div>

                {/* Note 4: Floating in the open space beside the action buttons, pointing at them */}
                <div className="absolute top-[250px] sm:top-[215px] right-3 sm:right-auto sm:left-[415px] text-2xl sm:text-3xl text-[#34D399] drop-shadow-[0_0_22px_rgba(52,211,153,0.95)] rotate-2 whitespace-nowrap">
                  <span>let&apos;s talk &rarr;</span>
                </div>
              </div>
            </>
          }
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING &bull; OPERATIONS &bull; COMMERCE</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              We Build.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA459] to-[#004AAD] filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                You Grow!
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold font-display text-white leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Your dedicated engineering team for custom software &amp; stores.
            </p>
          </div>

          <div className="space-y-2 max-w-[470px]">
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              We build <span className="text-white font-medium">custom software</span>,{' '}
              <span className="text-white font-medium">e-commerce platforms</span>,{' '}
              <span className="text-white font-medium">enterprise tools</span>, and{' '}
              <Link
                to="/services"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 hover:bg-[#FF6B00] hover:text-black transition-all shadow-[0_0_12px_rgba(255,107,0,0.2)] group align-middle"
              >
                <span>much more</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              {' '}— then stick around to <span className="text-white font-medium">grow them</span> and keep them running smoothly.
            </p>
          </div>

          {/* Action Buttons: Primary Book a Free Call, Secondary Explore Case Studies */}
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.4)] active:scale-95"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all active:scale-95"
              >
                <span>Explore Case Studies</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>
            </div>
          </div>

        </LighthouseHeroSystem>
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
      <section className="relative border-b border-[rgba(148,163,184,0.08)] bg-[#080C14]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <span>// OPTICAL BEACON &bull; PRODUCTION WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
                Engineered for real business problems.
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 max-w-xl">
                Like a lighthouse cutting through digital fog, our production engineering anchors and illuminates mission-critical platforms—from medical e-commerce to adaptive streaming and international scale.
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
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

      {/* 6. Managed Services & Tailored Architecture (Lighthouse Overwatch) */}
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
