import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { projects } from '../data/projects';
import { company } from '../data/company';
import {
  ArrowRight,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  FloatingElement,
  CountUpNumber,
  PerspectiveLineReveal,
  CinematicCurtainReveal,
  SpatialCardCascade,
} from '../components/motion';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const featuredVideoRef = useRef<HTMLVideoElement | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'e-commerce',
      label: 'E-Commerce',
      count: projects.filter((p) => p.category === 'E-Commerce').length
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      count: projects.filter((p) => p.category === 'Healthcare').length
    },
    {
      id: 'software',
      label: 'Software & AI',
      count: projects.filter((p) => p.category === 'Software').length
    },
    {
      id: 'servicenow',
      label: 'ServiceNow',
      count: projects.filter((p) => p.category === 'ServiceNow').length
    },
    {
      id: 'edtech',
      label: 'EdTech & Video',
      count: projects.filter((p) => p.category === 'EdTech').length
    },
    {
      id: 'recruitment',
      label: 'Staffing Portals',
      count: projects.filter((p) => p.category === 'Recruitment').length
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(p.category.toLowerCase())
        );

  const featuredProject = projects[featuredIndex] || projects[0];

  useEffect(() => {
    if (featuredVideoRef.current) {
      featuredVideoRef.current.currentTime = 0;
      featuredVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [featuredIndex]);

  const togglePlay = () => {
    if (featuredVideoRef.current) {
      if (isPlaying) {
        featuredVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        featuredVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (featuredVideoRef.current) {
      featuredVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full bg-textured-light text-slate-900 min-h-screen">
      <SEO
        title="Client Work & Production Deployments | Zemprolabs"
        description="Explore real web applications, Shopify Plus stores, mobile platforms, and enterprise ServiceNow systems built, deployed, and maintained by Zemprolabs."
        canonicalPath="/work"
      />

      {/* ========================================================================= */}
      {/* 1. HERO (Architectural Glass Building Facade Hero)                        */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="work-title"
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
                Case Studies &bull; Production Deployments
              </span>
            </div>
          </FloatingElement>

          <div className="space-y-4">
            <PerspectiveLineReveal duration={1.3} delay={0.15}>
              <h1
                id="work-title"
                className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]"
              >
                Real Software in{' '}
                <span className="text-[#FF6B00]">Production.</span>
              </h1>
            </PerspectiveLineReveal>
            <ScrollReveal preset="fade-up" duration={1.1} delay={0.35}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                Every system below was designed, built, and launched by our senior engineers to solve concrete business bottlenecks. No concept mockups or speculative redesigns.
              </p>
            </ScrollReveal>
          </div>

          {/* Quick Studio Stats */}
          <ScrollReveal preset="fade-up" delay={0.5} duration={1.2} className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left">
            <div className="py-2">
              <CountUpNumber value={projects.length} suffix="+" className="text-2xl sm:text-3xl font-bold font-display text-white block" />
              <div className="text-xs text-slate-400 mt-0.5">Live Production Systems</div>
            </div>
            <div className="py-2">
              <CountUpNumber value={100} suffix="%" className="text-2xl sm:text-3xl font-bold font-display text-[#FF6B00] block" />
              <div className="text-xs text-slate-400 mt-0.5">Direct Code &amp; IP Transfer</div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">Direct</div>
              <div className="text-xs text-slate-400 mt-0.5">Architect Slack Access</div>
            </div>
            <div className="py-2">
              <CountUpNumber value={99.98} decimals={2} suffix="%" className="text-2xl sm:text-3xl font-bold font-display text-white block" />
              <div className="text-xs text-slate-400 mt-0.5">Monitored Uptime SLA</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED SCREENING THEATER (Master-Detail Interactive Deck)             */}
      {/* ========================================================================= */}
      <section
        aria-label="Featured Platform Screening"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-300/80"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
                Interactive Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 mt-1">
                Featured Flagship Platforms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any project to preview the live application video
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: High-Resolution Live Video Player (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#090A0D] rounded-2xl overflow-hidden border border-stone-300 shadow-xl flex-1 flex flex-col justify-between group">
                {/* Header bar */}
                <div className="h-10 bg-[#111318] border-b border-white/10 px-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[11px] text-slate-300 truncate">
                      {featuredProject.domain}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {featuredProject.client}
                  </span>
                </div>

                {/* Video */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                  {featuredProject.video ? (
                    <video
                      key={featuredProject.id}
                      ref={featuredVideoRef}
                      src={featuredProject.video}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      onClick={togglePlay}
                      className="w-full h-full object-cover object-top cursor-pointer"
                    />
                  ) : featuredProject.id === 'servicenow-enterprise-irm' ? (
                    <div className="w-full h-full bg-[#032D42] p-2 sm:p-4 flex flex-col justify-center">
                      <div className="bg-[#05080E] rounded-xl border border-white/10 p-5 space-y-4 text-left">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">ServiceNow Washington &bull; Active Production Instance</span>
                          </div>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                            99.98% SLA
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-[10px] text-slate-400 block font-mono">ITSM INCIDENTS</span>
                            <span className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5 block">48,250+</span>
                            <span className="text-[10px] text-emerald-400">Zero-Collision Managed</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-[10px] text-slate-400 block font-mono">IRM / GRC AUDIT</span>
                            <span className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5 block">100% Passed</span>
                            <span className="text-[10px] text-emerald-400">Automated Rules</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-[10px] text-slate-400 block font-mono">CMDB CI HEALTH</span>
                            <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono mt-0.5 block">CIS-CMDB</span>
                            <span className="text-[10px] text-slate-300">Certified Practice</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Enterprise ServiceNow maintenance covering ITSM Pro, Flow Designer automations, and Integrated Risk Management (IRM / GRC) with automated compliance audits.
                        </p>
                      </div>
                    </div>
                  ) : featuredProject.image ? (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-center p-8 text-slate-400">
                      <h3 className="text-xl font-bold text-white mb-1 font-display">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs text-slate-400">{featuredProject.category}</p>
                    </div>
                  )}

                  {/* Play/Pause overlay */}
                  {!isPlaying && featuredProject.video && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </button>
                  )}

                  {/* Bottom Hover Controls */}
                  {featuredProject.video && (
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="p-1.5 rounded-md bg-black/80 text-white hover:bg-black transition-colors"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1.5 rounded-md bg-black/80 text-white hover:bg-black transition-colors"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#FF6B00]" />}
                        </button>
                      </div>

                      {featuredProject.link && (
                        <a
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 text-xs text-white hover:text-[#FF6B00] transition-colors"
                        >
                          <span>Visit Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer bar */}
                <div className="px-4 py-3 bg-[#111318] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{featuredProject.title}</span>
                  <Link
                    to={`/work/${featuredProject.id}`}
                    className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-semibold"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Interactive Project Selector List (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              {projects.slice(0, 4).map((project, idx) => {
                const isSelected = featuredIndex === idx;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setFeaturedIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-white border-stone-400 shadow-md ring-2 ring-[#FF6B00]/30'
                        : 'bg-white/60 hover:bg-white border-stone-300/70 hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-xs font-bold ${
                            isSelected ? 'text-[#FF6B00]' : 'text-stone-400'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <h3 className="font-bold font-display text-base sm:text-lg text-slate-900">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {project.overview}
                    </p>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-[#FF6B00] font-semibold">Active in preview &rarr;</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPLETE PRODUCTION CATALOG (Clean Editorial Directory)                */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="all-case-studies"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-stone-300/80"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header & Filter Bar */}
          <ScrollReveal preset="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-300/80">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
                Case Studies Directory
              </span>
              <h2
                id="all-case-studies"
                className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 mt-1"
              >
                All Production Case Studies
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white/70 text-slate-700 hover:bg-white border border-stone-300/70'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="ml-1.5 text-[10px] opacity-70">({tab.count})</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Editorial Case Studies Cards with 3D Spatial Cascades and Cinematic Shutter Reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <SpatialCardCascade key={project.id} index={idx % 4} className="h-full">
                <AntigravityTiltCard tiltMax={5} className="h-full rounded-2xl">
                  <article className="h-full bg-white rounded-2xl border border-stone-300 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden">
                    {/* Visual Thumbnail with Cinematic Curtain Reveal */}
                    <CinematicCurtainReveal direction="up" duration={1.1} className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-top"
                        />
                      ) : project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-6 text-center text-slate-400">
                          <div>
                            <div className="text-lg font-bold font-display text-white">
                              {project.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">{project.category}</div>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 right-3 p-1.5 rounded-md bg-black/75 text-white hover:text-[#FF6B00] transition-colors backdrop-blur-md"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </CinematicCurtainReveal>

                    {/* Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Client: <strong className="text-slate-800">{project.client}</strong></span>
                        </div>

                        <h3 className="text-xl font-bold font-display text-slate-900">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {project.overview}
                        </p>

                        {/* Metrics */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                            {project.metrics.slice(0, 2).map((m, idx) => (
                              <div
                                key={idx}
                                className="p-2 rounded bg-stone-50 border border-stone-200"
                              >
                                <span className="text-[10px] text-slate-500 block">{m.label}</span>
                                <span className="font-bold text-slate-900 block mt-0.5 truncate">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions & Tech */}
                      <div className="pt-4 border-t border-stone-200 space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-1 text-xs">
                          <Link
                            to={`/work/${project.id}`}
                            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-900 hover:text-[#FF6B00] transition-colors"
                          >
                            <span>Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <div className="flex items-center gap-3">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FF6B00] hover:underline font-semibold text-[11px]"
                              >
                                Live &rarr;
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </AntigravityTiltCard>
              </SpatialCardCascade>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLOSING CTA (Studio Black Final Brief Intake)                          */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="work-cta-heading"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
            Start a Project
          </span>

          <h2
            id="work-cta-heading"
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
