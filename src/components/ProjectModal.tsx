import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Check, Layers, Cpu, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#070D18] border border-white/[0.15] shadow-2xl flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Accent Line */}
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: project.color }}
        />

        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#070D18]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono font-bold border"
              style={{
                backgroundColor: `${project.color}15`,
                color: project.color,
                borderColor: `${project.color}35`
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              // {project.client}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Header Title & Verified Domain Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 mt-1">
                <Globe className="w-4 h-4 text-[#FF6B00]" />
                <span>{project.domain}</span>
              </div>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] shrink-0 self-start sm:self-auto"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Video Preview Player (if present) */}
          {project.video && (
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#02050B] relative aspect-video shadow-inner">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Quick Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#040810] border border-white/[0.08]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {m.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold font-display text-white">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2-Column Split: The Story vs Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: The Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] mb-1.5 font-bold">
                  // PROJECT OVERVIEW
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1.5 font-bold">
                  // WHAT THE CLIENT NEEDED
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#10B981] mb-1.5 font-bold">
                  // HOW WE BUILT &amp; SOLVED IT
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.approach}
                </p>
              </div>

              {/* Delivery Steps */}
              {project.pipeline && project.pipeline.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
                    // WORKFLOW &amp; DELIVERY PHASES
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 p-3 rounded-xl bg-[#040810] border border-white/[0.06]">
                    {project.pipeline.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-xs font-mono text-slate-200 border border-white/10 flex items-center gap-1.5">
                          <span className="text-[#FF6B00] font-bold text-[10px]">{idx + 1}.</span>
                          {step}
                        </span>
                        {idx < project.pipeline!.length - 1 && (
                          <span className="text-slate-600 text-xs select-none">&rarr;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Deliverables & Tech Stack (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Deliverables Checklist */}
              <div className="p-5 rounded-2xl bg-[#040810] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>What We Built &amp; Handed Over</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.built.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="p-5 rounded-2xl bg-[#040810] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-bold">
                  <Cpu className="w-4 h-4 text-[#38BDF8]" />
                  <span>Technologies Used</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Talk to Us CTA */}
              <div className="pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(project.title)}`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all"
                >
                  <span>Discuss A Similar Project &rarr;</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
