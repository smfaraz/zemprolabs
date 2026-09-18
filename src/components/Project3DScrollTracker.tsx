import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Lock, Play, Radio, Sparkles, Pause } from 'lucide-react';

interface Project3DScrollTrackerProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Project3DScrollTracker: React.FC<Project3DScrollTrackerProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 3, y: -2 });
  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);

  const total = projects.length;
  const activeProject = projects[activeIndex] || projects[0];

  // Intersection observer to pause timer when off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 7-second smooth auto-cycle with progress bar (pauses on hover or when out of view)
  useEffect(() => {
    if (!isInView || isHovered || isPaused) {
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
      return;
    }

    const duration = 7000; // 7 seconds per project
    let start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgressPercent(pct);

      if (pct >= 100) {
        setActiveIndex((prev) => (prev + 1) % total);
        setProgressPercent(0);
        start = performance.now();
      }

      progressTimerRef.current = requestAnimationFrame(frame);
    };

    progressTimerRef.current = requestAnimationFrame(frame);

    return () => {
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
    };
  }, [activeIndex, isInView, isHovered, isPaused, total]);

  // Handle active video playback cleanly without multiple video lockups
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback (silent catch)
      });
    }
  }, [activeIndex]);

  // Navigate directly to project
  const selectProject = (idx: number) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    setProgressPercent(0);
  };

  const handlePrev = () => {
    selectProject(activeIndex === 0 ? total - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    selectProject((activeIndex + 1) % total);
  };

  // Lightweight 3D mouse parallax tilt (Smooth & Zero Layout Shift)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({
      x: +(y * -12).toFixed(2),
      y: +(x * 14).toFixed(2)
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setCardTilt({ x: 4, y: -3 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-6 sm:py-10 select-none overflow-hidden"
    >

      {/* Volumetric Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] max-w-full h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-700 ease-out z-0"
        style={{
          background: `radial-gradient(circle, ${activeProject.color} 0%, rgba(5,7,13,0) 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Telemetry & Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: activeProject.color }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ backgroundColor: activeProject.color }}
              />
            </span>
            
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white">
              <span>// PRODUCTION SYSTEMS</span>
              <span className="text-slate-500">&bull;</span>
              <span style={{ color: activeProject.color }}>
                {activeProject.category}
              </span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-400">
                0{activeIndex + 1} / 0{total}
              </span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400">
              <Radio className="w-3 h-3 text-[#10B981] animate-pulse" />
              <span>LIVE CLUSTER ACTIVE</span>
            </div>
          </div>

          {/* Stepper Controls & Autoplay Pause */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all flex items-center gap-1.5 ${
                isPaused 
                  ? 'bg-[#FF6B00]/15 border-[#FF6B00]/40 text-[#FF6B00]' 
                  : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white'
              }`}
              title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              <span>{isPaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
            </button>

            <button
              onClick={handlePrev}
              className="p-1.5 rounded-md bg-[#080D18] border border-white/[0.1] text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-md bg-[#080D18] border border-white/[0.1] text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              title="Next Project"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Split Showcase: 3D Cockpit (Left 7 cols) + Telemetry Specs (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 3D Engineering Production Chassis */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[260px] sm:min-h-[420px] lg:min-h-[460px]">
            {/* Ambient Project Brand Glow */}
            <div
              className="absolute inset-4 rounded-3xl blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: activeProject.color }}
            />

            {/* High-Performance 3D Browser Chassis */}
            <div
              className="relative z-20 w-full max-w-[620px] mx-auto cursor-pointer group"
              style={{ perspective: '1200px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => onSelectProject(activeProject)}
            >
              {/* Cockpit Shell */}
              <div
                className="relative w-full rounded-2xl bg-[#06080E]/95 border border-[rgba(148,163,184,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) translateZ(0)`,
                  willChange: 'transform'
                }}
              >
                {/* Browser Top Control Bar */}
                <div className="h-9 sm:h-10 bg-[#0B0F17] border-b border-white/[0.08] px-3.5 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>

                  {/* Browser URL Pill with SSL Lock */}
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#04060A] border border-white/10 text-[11px] font-mono text-slate-300 max-w-[220px] sm:max-w-xs truncate">
                    <Lock className="w-3 h-3 text-[#10B981] shrink-0" />
                    <span className="truncate">{activeProject.domain}</span>
                  </div>

                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase border"
                    style={{
                      backgroundColor: `${activeProject.color}15`,
                      borderColor: `${activeProject.color}40`,
                      color: activeProject.color
                    }}
                  >
                    {activeProject.category}
                  </span>
                </div>

                {/* 3D Viewport: Clean single video player with zero decoding contention */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#030508] overflow-hidden">
                  {activeProject.video ? (
                    <video
                      ref={videoRef}
                      key={activeProject.id}
                      src={activeProject.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-400 font-mono text-xs">
                      Live Production Preview
                    </div>
                  )}

                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                  {/* Hover Prompt */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none backdrop-blur-[1px]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00] text-black text-xs font-semibold font-display shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Inspect Production Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Frame Status Bar */}
                <div className="h-7 bg-[#080C14] border-t border-white/[0.08] px-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="truncate">PRODUCTION DEPLOYMENT // ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold group-hover:underline" style={{ color: activeProject.color }}>
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Story Specs & Delivery Pipeline */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            
            {/* Client & Category Badge */}
            <div className="flex items-center gap-2.5">
              <span
                className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold tracking-wide uppercase border flex items-center gap-1.5"
                style={{
                  backgroundColor: `${activeProject.color}15`,
                  borderColor: `${activeProject.color}40`,
                  color: activeProject.color
                }}
              >
                <Sparkles className="w-3 h-3" />
                <span>{activeProject.client}</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeProject.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              {activeProject.title}
            </h3>

            {/* Overview */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.overview}
            </p>

            {/* End-to-End Delivery Pipeline */}
            {activeProject.pipeline && activeProject.pipeline.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                  />
                  <span className="text-slate-300 font-semibold">// DELIVERY PIPELINE</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {activeProject.pipeline.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#0F172A] border border-white/10 text-xs font-mono text-slate-200">
                        {step}
                      </span>
                      {idx < activeProject.pipeline!.length - 1 && (
                        <span className="text-slate-500 text-xs select-none">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Production Metrics */}
            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#0A0E17] border border-white/10">
                {activeProject.metrics.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate mb-0.5">
                      {metric.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold font-display text-white truncate">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={`/work/${activeProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] active:scale-95 cursor-pointer font-display"
              >
                <span>Explore Full Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#0B0F17] text-slate-200 hover:text-white border border-white/10 hover:border-white/30 transition-all active:scale-95"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Interactive Project Stepper with Live Liquid Progress Indicator */}
        <div className="mt-8 sm:mt-12 pt-4 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={proj.id}
                  onClick={() => selectProject(idx)}
                  className={`group text-left p-3 rounded-xl transition-all border cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0E1524] border-[#FF6B00]/60 shadow-[0_0_20px_rgba(255,107,0,0.15)]'
                      : 'bg-[#060A12] border-white/5 hover:border-white/20 hover:bg-[#0B101C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isActive ? 'text-[#FF6B00]' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      0{idx + 1} &bull; {proj.category}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full transition-colors"
                      style={{
                        backgroundColor: isActive ? proj.color : isPassed ? `${proj.color}80` : 'transparent',
                        boxShadow: isActive ? `0 0 10px ${proj.color}` : 'none'
                      }}
                    />
                  </div>

                  <div
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {proj.client}
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 truncate mt-0.5">
                    {proj.category}
                  </div>

                  {/* Liquid Progress Bar */}
                  <div className="w-full h-1 bg-white/[0.06] rounded-full mt-2.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-100 ease-linear rounded-full"
                      style={{
                        backgroundColor: proj.color,
                        width: isActive ? `${progressPercent}%` : isPassed ? '100%' : '0%'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
