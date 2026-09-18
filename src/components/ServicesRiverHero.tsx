import React from 'react';
import { Sparkles, Code2, Users, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesRiverHeroProps {
  activeDiscipline: string;
  onSelectDiscipline: (id: string) => void;
}

export const ServicesRiverHero: React.FC<ServicesRiverHeroProps> = ({
  activeDiscipline,
  onSelectDiscipline
}) => {
  const disciplines = [
    { id: 'all', label: 'All Services (06)', code: 'ALL' },
    { id: 'development', label: '01. Websites & Apps', code: 'DEV' },
    { id: 'seo-growth', label: '02. SEO & Traffic', code: 'SEO' },
    { id: 'enterprise', label: '03. Enterprise Tools', code: 'ENT' },
    { id: 'marketing', label: '04. Digital Marketing', code: 'MKT' },
    { id: 'research', label: '05. Business Research', code: 'RES' },
    { id: 'recruitment', label: '06. Hiring & Staffing', code: 'REC' },
  ];

  return (
    <div className="relative w-full overflow-hidden border-b border-white/[0.08] bg-[#02050A]">
      {/* Subtle Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      {/* Atmospheric Radial Shading */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 bg-[#FF6B00]/[0.025] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-96 bg-[#38BDF8]/[0.025] blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-14 sm:pb-20 relative z-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Technical Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>FULL-STACK ENGINEERING PRACTICE // ZERO SUBCONTRACTING</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.08]">
            Full-Stack Engineering &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
              Managed Digital Care.
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            We design, develop, deploy, and manage custom software, high-conversion Shopify stores, and enterprise cloud integrations—with zero offshore handoffs, transparent milestones, and direct 1-on-1 developer access.
          </p>

          {/* 3 Core Trust Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
            <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white font-display">100% In-House</div>
                <div className="text-slate-400 font-mono text-[11px]">Direct developer chat</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white font-display">Zero Lock-In</div>
                <div className="text-slate-400 font-mono text-[11px]">100% code ownership</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#070D18]/90 border border-white/[0.08] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white font-display">24/7 Support</div>
                <div className="text-slate-400 font-mono text-[11px]">Sub-24h SLA response</div>
              </div>
            </div>
          </div>

          {/* Interactive Discipline Filter Bar */}
          <div className="pt-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              // SELECT CAPABILITY TO INSPECT:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {disciplines.map((item) => {
                const isSelected = activeDiscipline === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectDiscipline(item.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)] scale-[1.02]'
                        : 'bg-[#080E1A] text-slate-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
