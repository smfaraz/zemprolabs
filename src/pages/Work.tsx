import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';
import { Sparkles, Radio, CheckCircle2, Shield, ArrowRight, Layers, Anchor, Code2, Users2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WorkHeroIllustration } from '../components/WorkHeroIllustration';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter definitions with human business labels and matching category IDs
  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'e-commerce',
      label: 'E-Commerce & Stores',
      count: projects.filter((p) => p.category === 'E-Commerce').length
    },
    {
      id: 'edtech',
      label: 'EdTech & Mobile Apps',
      count: projects.filter((p) => p.category === 'EdTech').length
    },
    {
      id: 'healthcare',
      label: 'Healthcare & Clinics',
      count: projects.filter((p) => p.category === 'Healthcare').length
    },
    {
      id: 'servicenow',
      label: 'ServiceNow & Automation',
      count: projects.filter((p) => p.category === 'ServiceNow').length
    },
    {
      id: 'recruitment',
      label: 'Recruitment & Portals',
      count: projects.filter((p) => p.category === 'Recruitment').length
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title="Client Work & Case Studies | Real Software in Production"
        description="Explore real websites, mobile apps, custom e-commerce stores, and enterprise platforms built and maintained by Zemprolabs."
        canonicalPath="/work"
      />

      {/* 1. Grounded & Human Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-72 bg-[#FF6B00]/[0.03] blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Text Col (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>REAL CLIENT PLATFORMS // 100% LIVE IN PRODUCTION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Software we’ve built, launched, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
                care for.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              No conceptual redesigns or agency mockups. Every project below is running in active production—processing real customer orders, streaming video courses, and automating daily business operations.
            </p>

            {/* 3 Grounded Credibility Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white font-display">Live &amp; Tested</div>
                  <div className="text-slate-400 font-mono text-[11px]">Real public domains</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white font-display">Direct Engineers</div>
                  <div className="text-slate-400 font-mono text-[11px]">No account managers</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white font-display">100% Your Code</div>
                  <div className="text-slate-400 font-mono text-[11px]">In your own accounts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Multi-Device Software Ecosystem Illustration (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <WorkHeroIllustration />
          </div>

        </div>
      </section>

      {/* 2. Interactive Segmented Filter Bar */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] flex-wrap gap-4">
          
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)] scale-[1.02]'
                      : 'bg-[#080E1A] border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                      isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    0{tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Radio className="w-3 h-3 text-[#10B981]" />
            <span>Showing {filteredProjects.length} of {projects.length} Platforms</span>
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="text-[#FF6B00] hover:underline ml-2"
              >
                (Show All)
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. Projects Interactive Cockpit Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-3xl bg-[#060C18] border border-white/10 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto text-slate-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">No projects found in this category</h3>
            <p className="text-xs text-slate-400">
              Try switching back to view all projects or contact us to see relevant private case studies.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-4 py-2 rounded-xl text-xs font-mono bg-[#FF6B00] text-black font-bold"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </section>

      {/* 4. Safe Harbor Closing CTA Banner (Docked with pb-0 into Footer) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#060C18] border border-white/[0.12] max-w-4xl mx-auto space-y-6 shadow-2xl relative">
          {/* Top Accent Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-75" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
            <Anchor className="w-3.5 h-3.5" />
            <span>DIRECT DEVELOPER ACCESS // ESTIMATE IN 48 HOURS</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Have a project you want to build or improve?
          </h3>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Whether launching a custom store, architecting a web or mobile app, or needing someone reliable to look after your existing code—let’s talk.
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

      {/* 5. Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
