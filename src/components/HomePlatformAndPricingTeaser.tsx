import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Layers, Sparkles, Server, CheckCircle2 } from 'lucide-react';

export const HomePlatformAndPricingTeaser: React.FC = () => {
  const [activeZone, setActiveZone] = useState<'managed' | 'custom' | 'ambient'>('ambient');

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(148,163,184,0.08)] relative overflow-hidden select-none">
      {/* Background Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#38BDF8]/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono mb-4">
          <Server className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>OPERATIONAL RELIABILITY &bull; PRODUCTION ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
          Engineered for Reliability.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
            Built for Scale.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed max-w-2xl mx-auto">
          Whether safeguarding an existing high-traffic platform with 24/7 technical guardianship or architecting a mission-critical build from scratch, we eliminate downtime with total engineering accountability.
        </p>
      </div>

      {/* Two High-Tech Cockpit HUD Stations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        
        {/* Cockpit Station 01: Managed Digital Care */}
        <div
          onMouseEnter={() => setActiveZone('managed')}
          onMouseLeave={() => setActiveZone('ambient')}
          className="rounded-2xl bg-[#070B14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#FF6B00]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
        >
          {/* Corner Crosshair Brackets (+) */}
          <span className="absolute top-2.5 left-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute top-2.5 right-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute bottom-2.5 left-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>

          {/* Top Laser Accent */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* HUD Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#FF6B00] font-semibold tracking-wider">
                  STATION 01 //
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25 font-bold">
                  MANAGED DIGITAL CARE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-semibold">99.98% SLA ACTIVE</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Already have an active digital platform?
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mt-2">
                Continuous 24/7 technical guardianship—handling proactive uptime monitoring, security patch triage, store operations, and performance tuning so your platform never degrades.
              </p>
            </div>

            {/* Streamlined Feature Rows */}
            <div className="space-y-2 pt-1">
              {[
                { code: '01', title: 'Production Oversight', detail: '24/7 Live Monitoring' },
                { code: '02', title: 'E-Commerce Operations', detail: 'Zero-Downtime Releases' },
                { code: '03', title: 'Cloud Infrastructure', detail: 'Automated Daily Backups' },
                { code: '04', title: 'Security & Vulnerabilities', detail: 'Immediate Patch Triage' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                    <span className="font-mono text-[10px] text-[#FF6B00]/80 font-semibold">{item.code} //</span>
                    <span className="font-medium text-slate-200">{item.title}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#94A3B8] hidden sm:inline">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action HUD Footer */}
          <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-95 group/btn font-mono font-bold"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[10px] font-mono text-slate-500">
              STATUS: OVERWATCH ACTIVE
            </span>
          </div>
        </div>

        {/* Cockpit Station 02: Tailored Architecture & Builds */}
        <div
          onMouseEnter={() => setActiveZone('custom')}
          onMouseLeave={() => setActiveZone('ambient')}
          className="rounded-2xl bg-[#070B14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#38BDF8]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
        >
          {/* Corner Crosshair Brackets (+) */}
          <span className="absolute top-2.5 left-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute top-2.5 right-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute bottom-2.5 left-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>

          {/* Top Laser Accent */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* HUD Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
                  STATION 02 //
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/25 font-bold">
                  TAILORED ARCHITECTURE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#38BDF8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span className="font-semibold">100% CODE OWNERSHIP</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Need a custom build or dedicated team?
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mt-2">
                From high-conversion e-commerce stores to scalable SaaS platforms and enterprise automation, we architect and deploy with complete code and cloud ownership in your hands.
              </p>
            </div>

            {/* Streamlined Feature Rows */}
            <div className="space-y-2 pt-1">
              {[
                { code: '01', title: 'Custom Full-Stack Builds', detail: 'Web, Mobile & SaaS' },
                { code: '02', title: 'Direct Cloud Ownership', detail: 'Zero Vendor Lock-In' },
                { code: '03', title: 'Scope Blueprinting', detail: 'Clear Milestones & Delivery' },
                { code: '04', title: 'Senior Technical Leads', detail: 'Direct 1-on-1 Access' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                    <span className="font-mono text-[10px] text-[#38BDF8]/80 font-semibold">{item.code} //</span>
                    <span className="font-medium text-slate-200">{item.title}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#94A3B8] hidden sm:inline">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action HUD Footer */}
          <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0B1528] text-white hover:bg-[#0e1c38] border border-[#38BDF8]/35 hover:border-[#38BDF8]/70 transition-all active:scale-95 group/btn shadow-[0_0_20px_rgba(56,189,248,0.15)] font-mono font-bold"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[10px] font-mono text-slate-500">
              DISCOVERY READY
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
