import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight, Check, ExternalLink, Globe, Shield, Sparkles, Play } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stream only on hover/interaction - eliminates initial page load bandwidth
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video || videoError) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Handled browser policy gracefully
          });
      }
    } else {
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovered, project.video, videoError]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (onSelect) onSelect(project);
        navigate(`/work/${project.id}`);
      }}
      className="group relative rounded-2xl bg-[#070D18]/95 border border-white/[0.1] hover:border-[#FF6B00]/70 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
    >
      {/* Corner Crosshairs (+) */}
      <span className="absolute top-2.5 left-2.5 font-mono text-xs text-white/20 select-none pointer-events-none">+</span>
      <span className="absolute top-2.5 right-2.5 font-mono text-xs text-white/20 select-none pointer-events-none">+</span>

      <div>
        {/* Browser Cockpit Top Bar */}
        <div className="w-full bg-[#040810] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
          </div>

          {/* Domain Address Bar Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px] truncate max-w-[130px] xs:max-w-[160px] sm:max-w-[200px]">
            <Globe className="w-3 h-3 text-[#FF6B00] shrink-0" />
            <span className="truncate">{project.domain}</span>
          </div>

          <span
            className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border"
            style={{
              backgroundColor: `${project.color}15`,
              color: project.color,
              borderColor: `${project.color}35`
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Video / Visual Showcase Container */}
        <div className="relative h-48 sm:h-52 w-full bg-[#02050B] overflow-hidden border-b border-white/[0.08]">
          {project.video && !videoError ? (
            <>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={project.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/30 pointer-events-none" />

              {/* Stream On-Demand Indicator (0 Initial Bandwidth) */}
              {!isPlaying && (
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03060E]/85 border border-white/15 text-xs font-mono text-slate-300 group-hover:border-[#FF6B00] group-hover:text-[#FF6B00] group-hover:bg-[#03060E]/95 transition-all shadow-xl">
                    <Play className="w-3 h-3 fill-current" />
                    <span>Hover to Stream</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6 relative">
              <div
                className="absolute inset-0 opacity-20 blur-2xl pointer-events-none"
                style={{ backgroundColor: project.color }}
              />
              <div className="text-center space-y-2 relative z-10">
                <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center bg-white/5 border border-white/10" style={{ color: project.color }}>
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400">{project.domain}</div>
              </div>
            </div>
          )}

          {/* Live System Indicator Over Video */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#10B981] bg-[#040810]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>LIVE IN PRODUCTION</span>
            </span>
          </div>

          {/* Direct Live Website Link Button (Top Right of Media) */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 text-[11px] font-mono text-white bg-[#050B16]/90 hover:bg-[#FF6B00] hover:text-black transition-all px-2.5 py-1 rounded-md border border-white/20 shadow-md group/link"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] font-semibold mb-1">
              // {project.client}
            </div>
            <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF6B00] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed mt-2">
              {project.overview}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#10B981]" />
              <span>What we built:</span>
            </div>
            <div className="space-y-1">
              {project.built.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Tech Stack & Action Link */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
          {project.tech.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#03060C] text-slate-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-mono text-slate-500">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF6B00] group-hover:text-white transition-colors shrink-0">
          <span>Explore Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
