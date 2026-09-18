import React, { useState } from 'react';
import { Project } from '../types';
import { projects } from '../data/projects';
import { ExternalLink, Lock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroShowcaseProps {
  onSelectProject?: (project: Project) => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({ onSelectProject }) => {
  // Select top 3 projects with high quality demo video
  const showcaseProjects = projects.filter((p) =>
    ['baemeds', 'auvia', 'erus-academy'].includes(p.id)
  );

  const [activeId, setActiveId] = useState<string>(showcaseProjects[0]?.id || 'baemeds');

  const activeProject =
    showcaseProjects.find((p) => p.id === activeId) || showcaseProjects[0] || projects[0];

  return (
    <div className="w-full rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 group">
      {/* Top Bar: Selector Tabs */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#080B12] border-b border-[rgba(148,163,184,0.12)] gap-2">
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
          {showcaseProjects.map((proj) => {
            const isActive = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveId(proj.id)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#FF6B00] text-black font-semibold shadow-[0_0_12px_rgba(255,107,0,0.35)]'
                    : 'bg-[#05070D] text-[#94A3B8] border border-[rgba(148,163,184,0.1)] hover:text-white hover:border-white/20'
                }`}
              >
                <span>{proj.title.split(' ')[0]}</span>
                <span className="opacity-70 text-[10px]">({proj.category})</span>
              </button>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/20 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>LIVE PRODUCTION</span>
        </div>
      </div>

      {/* Simulated Browser URL Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#05070D]/90 border-b border-[rgba(148,163,184,0.08)] gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70 inline-block"></span>
        </div>

        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-[#0B0F17] border border-[rgba(148,163,184,0.1)] text-[11px] font-mono text-[#94A3B8] flex-1 max-w-sm truncate">
          <Lock className="w-3 h-3 text-[#10B981] shrink-0" />
          <span className="text-white/90 truncate">{activeProject.domain}</span>
        </div>

        {activeProject.link ? (
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono text-[#FF6B00] hover:text-[#ff852e] transition-colors shrink-0"
            title="Open live client website in new tab"
          >
            <span className="hidden sm:inline">Visit Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <div className="w-6"></div>
        )}
      </div>

      {/* Video Preview Container */}
      <div className="relative aspect-video w-full bg-black overflow-hidden group/vid">
        {activeProject.video ? (
          <video
            key={activeProject.id}
            src={activeProject.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0B0F17] text-[#94A3B8] text-xs font-mono">
            <span>Interactive Demo Ready</span>
          </div>
        )}

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80 pointer-events-none"></div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/vid:opacity-100 transition-opacity duration-200">
          {onSelectProject && (
            <button
              type="button"
              onClick={() => onSelectProject(activeProject)}
              className="px-4 py-2 rounded-lg bg-[#FF6B00] text-black font-semibold text-xs font-mono flex items-center gap-2 shadow-lg hover:bg-[#ff7b1a] transition-all transform scale-95 group-hover/vid:scale-100"
            >
              <span>View Case Study Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Floating Sector Pill */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#FF6B00]" />
          <span>{activeProject.client}</span>
        </div>
      </div>

      {/* Showcase Bottom Card Footer */}
      <div className="p-4 sm:p-5 bg-[#0B0F17] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm sm:text-base font-bold font-display text-white">
              {activeProject.title}
            </h4>
            <p className="text-xs text-[#94A3B8] line-clamp-1 mt-0.5">
              {activeProject.overview}
            </p>
          </div>

          {onSelectProject && (
            <button
              type="button"
              onClick={() => onSelectProject(activeProject)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF6B00] hover:underline self-start sm:self-auto shrink-0"
            >
              <span>Case Study</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Metrics Grid */}
        {activeProject.metrics && activeProject.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[rgba(148,163,184,0.1)]">
            {activeProject.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#05070D] p-2 rounded-lg border border-[rgba(148,163,184,0.08)]">
                <div className="text-[10px] font-mono text-[#94A3B8] truncate">{m.label}</div>
                <div className="text-xs font-semibold text-white truncate mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {activeProject.tech.slice(0, 4).map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-[#94A3B8] border border-[rgba(148,163,184,0.1)]"
            >
              {t}
            </span>
          ))}
          {activeProject.tech.length > 4 && (
            <span className="text-[10px] font-mono text-[#94A3B8]/70">
              +{activeProject.tech.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
