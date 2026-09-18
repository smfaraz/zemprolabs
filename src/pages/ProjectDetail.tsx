import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { SEO } from '../components/SEO';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Radio,
  Anchor,
  Lock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-32 pb-24 px-4 max-w-2xl mx-auto text-center space-y-6">
        <SEO
          title="Project Not Found | Zemprolabs"
          description="The requested project case study could not be found."
        />
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#FF6B00]">
          <Layers className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Project Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested case study could not be located. It may have been updated or moved.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] text-black font-mono font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  // Next and Previous projects for the footer carousel
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title={`${project.title} | Case Study & Production Architecture`}
        description={project.overview}
        canonicalPath={`/work/${project.id}`}
      />

      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-500">PROJECT</span>
            <span className="text-white font-bold">0{currentIndex + 1}</span>
            <span className="text-slate-500">/ 0{projects.length}</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Header Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-10 max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-4">
          
          {/* Tag & Client Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
              style={{
                backgroundColor: `${project.color}18`,
                color: project.color,
                borderColor: `${project.color}40`
              }}
            >
              {project.category}
            </span>

            <span className="text-xs font-mono text-slate-400">
              // CLIENT: <strong className="text-white font-mono">{project.client}</strong>
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#10B981] bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>LIVE IN PRODUCTION</span>
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          {/* Domain and External Link Action */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#070D18] border border-white/10 text-xs font-mono text-slate-300">
              <Globe className="w-4 h-4 text-[#FF6B00]" />
              <span>{project.domain}</span>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 2. Media / Video Stage Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#050A14] border border-white/[0.12] shadow-2xl relative group">
          {/* Top Browser Window Header */}
          <div className="w-full bg-[#03060E] border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/60"></span>
            </div>

            <div className="px-4 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>https://{project.domain.split(' ')[0]}</span>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-[#10B981]" />
              <span className="hidden sm:inline">SECURE SSL 256-BIT</span>
            </div>
          </div>

          {/* Video or Visual Canvas */}
          <div className="relative aspect-video w-full bg-[#02040A] overflow-hidden flex items-center justify-center">
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-12 text-center space-y-4 relative">
                <div
                  className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                  style={{ backgroundColor: project.color }}
                />
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-white/5 border border-white/15"
                  style={{ color: project.color }}
                >
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
                <p className="text-sm font-mono text-slate-400 max-w-md mx-auto">
                  Enterprise platform deployed directly in client environment.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Verified Facts & Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#060C18] border border-white/[0.08] space-y-1 shadow-lg"
              >
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="text-lg sm:text-xl font-bold font-display text-white">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Deep-Dive Story & Architecture Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: The Problem & Solution (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#060C18] border border-white/[0.08] space-y-3 shadow-xl">
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-bold">
                // EXECUTIVE SUMMARY
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                Project Background
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#060C18] border border-white/[0.08] space-y-3 shadow-xl">
              <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-bold">
                // WHAT THE CLIENT NEEDED
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                The Core Challenge
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#060C18] border border-white/[0.08] space-y-3 shadow-xl">
              <div className="text-xs font-mono text-[#10B981] uppercase tracking-wider font-bold">
                // HOW WE BUILT &amp; SOLVED IT
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                Our Engineering Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Delivery Pipeline */}
            {project.pipeline && project.pipeline.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#060C18] border border-white/[0.08] space-y-4 shadow-xl">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                  // DELIVERY LIFECYCLE
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Step-by-Step Implementation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {project.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs font-mono text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] font-bold flex items-center justify-center text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Deliverables & Tech Stack Cockpit (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* What Was Built Checklist */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#060C18] border border-white/[0.12] space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-bold border-b border-white/[0.08] pb-3">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>What We Built &amp; Handed Over</span>
              </div>
              <ul className="space-y-3">
                {project.built.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#060C18] border border-white/[0.12] space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-bold border-b border-white/[0.08] pb-3">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                <span>Technology Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.04] text-slate-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Ownership Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#040810] border border-white/[0.1] space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#10B981] font-bold">
                <Lock className="w-4 h-4" />
                <span>OUR CLIENT COMMITMENT</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                All source code, design assets, and cloud configurations were provisioned directly under the client's corporate accounts with 100% intellectual property ownership.
              </p>
              <div className="pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(project.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <span>Build Something Like This &rarr;</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Next / Previous Project Carousel Navigator */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/[0.08] bg-[#03060E] max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            // EXPLORE OTHER PLATFORMS
          </span>
          <Link to="/work" className="text-xs font-mono text-[#FF6B00] hover:underline">
            View All 06 Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Prev Project Card */}
          <Link
            to={`/work/${prevProject.id}`}
            className="p-5 rounded-2xl bg-[#060C18] border border-white/[0.08] hover:border-white/25 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#FF6B00] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Previous Project</div>
                <div className="text-sm sm:text-base font-bold font-display text-white group-hover:text-[#FF6B00] transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">{prevProject.category}</span>
          </Link>

          {/* Next Project Card */}
          <Link
            to={`/work/${nextProject.id}`}
            className="p-5 rounded-2xl bg-[#060C18] border border-white/[0.08] hover:border-white/25 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#FF6B00] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Next Project</div>
                <div className="text-sm sm:text-base font-bold font-display text-white group-hover:text-[#FF6B00] transition-colors">
                  {nextProject.title}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">{nextProject.category}</span>
          </Link>
        </div>
      </section>

      {/* 5. Safe Harbor Closing CTA (Docked pb-0 into Footer) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#060C18] border border-white/[0.12] max-w-4xl mx-auto space-y-6 shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-75" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
            <Anchor className="w-3.5 h-3.5" />
            <span>DIRECT DEVELOPER ACCESS // ESTIMATE IN 48 HOURS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Ready to build your next platform?
          </h3>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            You will work directly with our senior software engineers from day one. Transparent milestones, weekly staging previews, and full code ownership.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] w-full sm:w-auto font-mono font-bold"
            >
              <span>Tell Us About Your Project &rarr;</span>
            </Link>

            <Link
              to="/project-estimation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0A1222] border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all w-full sm:w-auto font-mono"
            >
              <span>Explore Project Estimation</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-500 pt-2">
            <span>&bull; Strict NDA Protected</span>
            <span>&bull; 100% Code Ownership</span>
            <span>&bull; Detailed Estimate in 48 Hours</span>
          </div>
        </div>
      </section>
    </div>
  );
};
