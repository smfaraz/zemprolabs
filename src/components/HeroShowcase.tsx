import React, { useState } from 'react';
import { Project } from '../types';
import { projects } from '../data/projects';
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroShowcaseProps {
  onSelectProject?: (project: Project) => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({ onSelectProject }) => {
  // Featured real client platforms with genuine production demo videos
  const showcaseProjects = projects.filter((p) =>
    ['baemeds-com', 'erus-academy', 'auvia'].includes(p.id)
  );

  const [activeId, setActiveId] = useState<string>(showcaseProjects[0]?.id || 'baemeds-com');

  const activeProject =
    showcaseProjects.find((p) => p.id === activeId) || showcaseProjects[0] || projects[0];

  return (
    <div className="w-full rounded-2xl bg-[#080C14] border border-slate-800/80 shadow-2xl overflow-hidden transition-all duration-200">
      
      {/* Top Chrome: Project Switcher Tabs */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#05080E] border-b border-slate-800/60 gap-3">
        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {showcaseProjects.map((proj) => {
            const isActive = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveId(proj.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-white border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <span>{proj.title.split(' ')[0]}</span>
                <span className="text-[11px] text-slate-400">({proj.category})</span>
              </button>
            );
          })}
        </div>

        {/* Real Production Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Production Release</span>
        </div>
      </div>

      {/* Browser URL Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#060910] border-b border-slate-800/40 gap-3 text-xs">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block" />
        </div>

        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80 text-slate-300 text-xs flex-1 max-w-sm truncate">
          <Lock className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-mono text-[11px] truncate">{activeProject.domain}</span>
        </div>

        {activeProject.link ? (
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors shrink-0"
            title="Open live client site in new window"
          >
            <span className="hidden sm:inline">Live URL</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <div className="w-6" />
        )}
      </div>

      {/* Video Preview Canvas */}
      <div className="relative aspect-video w-full bg-black overflow-hidden group">
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
          <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-400 text-xs">
            <span>Video preview loading</span>
          </div>
        )}

        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Quick View Button on Hover */}
        {onSelectProject && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <button
              type="button"
              onClick={() => onSelectProject(activeProject)}
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs transition-colors hover:bg-slate-200"
            >
              Inspect Case Study
            </button>
          </div>
        )}
      </div>

      {/* Project Meta Footer */}
      <div className="p-4 sm:p-5 bg-[#080C14] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              {activeProject.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
              {activeProject.overview}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSelectProject ? (
              <button
                type="button"
                onClick={() => onSelectProject(activeProject)}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Case study details
              </button>
            ) : (
              <Link
                to={`/work/${activeProject.id}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>Read case study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Real Technology Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-800/60">
          {activeProject.tech.slice(0, 5).map((techName, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
            >
              {techName}
            </span>
          ))}
          {activeProject.tech.length > 5 && (
            <span className="text-[11px] text-slate-500">
              +{activeProject.tech.length - 5}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};
