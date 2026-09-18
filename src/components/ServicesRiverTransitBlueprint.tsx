import React, { useState } from 'react';
import { CheckCircle2, Shield, ArrowRight, Layers, Workflow } from 'lucide-react';

interface TransitStage {
  num: string;
  station: string;
  name: string;
  descriptor: string;
  focus: string;
  details: string[];
  deliverable: string;
  color: string;
}

const transitStages: TransitStage[] = [
  {
    num: '01',
    station: 'STEP 01',
    name: 'Discovery & Project Blueprint',
    descriptor: 'Before writing any code, we map out exact features, technical needs, and a realistic timeline.',
    focus: 'Clear scope, database design, and fixed milestones so there are no surprise costs.',
    details: [
      'Detailed discussion of your business goals & user needs',
      'System design, database structure & user flow diagrams',
      'Clean interactive Figma screens so you see it before we build',
      'Signed NDA & 100% Code Ownership guaranteed in writing'
    ],
    deliverable: 'Clear Project Scope, Timeline & Fixed Milestone Plan',
    color: '#FF6B00'
  },
  {
    num: '02',
    station: 'STEP 02',
    name: 'Weekly Builds & Live Demos',
    descriptor: 'We build in disciplined weekly cycles, giving you a private test link to try out as we progress.',
    focus: 'Clean code, weekly video updates, and direct access to your developer.',
    details: [
      'Direct WhatsApp or Slack group with the senior developers building your app',
      'Private staging website updated weekly so you can click through progress',
      'Fast feedback turnaround without messy tickets or layers of managers',
      'Automated code testing to ensure existing features never break'
    ],
    deliverable: 'Working Test Link & Weekly Video Walkthrough',
    color: '#06B6D4'
  },
  {
    num: '03',
    station: 'STEP 03',
    name: 'Speed, Security & Launch',
    descriptor: 'We test everything thoroughly on real phones and browsers, optimize speed, and manage the launch.',
    focus: 'Fast page loads, secure customer checkout, and a seamless switch to live.',
    details: [
      'Real-world speed tuning so pages load in under a second',
      'Checkout & payment gateway live testing (Razorpay, Stripe, UPI)',
      'Security checks to protect customer data against spam and vulnerabilities',
      'Zero-downtime domain setup and DNS configuration handled for you'
    ],
    deliverable: 'Live Launch + 30 Days of Free Bug-Fix Support',
    color: '#10B981'
  },
  {
    num: '04',
    station: 'STEP 04',
    name: 'Ongoing Care & Growth',
    descriptor: 'We stay by your side after launch with ongoing software updates, daily backups, and quick help.',
    focus: 'Automated 24/7 checkups, fast emergency fixes, and continuous improvements.',
    details: [
      'Automated 24/7 uptime checkups so we know instantly if anything slows down',
      'Priority emergency support—if something breaks, an engineer fixes it right away',
      'Daily automatic off-site backups so your customer data is always safe',
      'Monthly developer hours available whenever you want to add new features'
    ],
    deliverable: 'Peace of Mind & A Dedicated Engineering Partner',
    color: '#A855F7'
  }
];

export const ServicesRiverTransitBlueprint: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = transitStages[activeStageIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#03060E] border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-96 bg-[#FF6B00]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>HOW WE WORK // 4 SIMPLE STEPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
            From your first call to launch and beyond.
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] mt-2.5 leading-relaxed">
            No guesswork, no disappearing developers, and no confusing technical jargon. You always know what is being built, when it will be ready, and can test working previews every week.
          </p>
        </div>

        {/* Sprint Delivery Progress Rail with Stepping Waypoints */}
        <div className="relative mb-10">
          {/* Progress Track */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/[0.08] -translate-y-1/2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF6B00] via-[#06B6D4] to-[#10B981] transition-all duration-500 ease-out"
              style={{
                width: `${((activeStageIndex + 1) / transitStages.length) * 100}%`
              }}
            />
          </div>

          {/* 4 Station Waypoint Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {transitStages.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const isCompleted = idx < activeStageIndex;

              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-[#08101E] border-[#FF6B00] shadow-[0_0_25px_rgba(255,107,0,0.15)] scale-[1.02]'
                      : isCompleted
                      ? 'bg-[#050A14] border-[#06B6D4]/40 hover:border-white/30'
                      : 'bg-[#04070F] border-white/[0.08] hover:border-white/20 hover:bg-[#070D1A]'
                  }`}
                >
                  {/* Floating Indicator above active waypoint */}
                  {isSelected && (
                    <div className="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 items-center gap-1 text-[10px] font-mono text-[#FF6B00] animate-bounce">
                      <Workflow className="w-3.5 h-3.5 fill-[#FF6B00]" />
                      <span>ACTIVE PHASE</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-mono font-bold tracking-wider"
                      style={{ color: isSelected ? stage.color : '#94A3B8' }}
                    >
                      {stage.station}
                    </span>

                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                        isSelected
                          ? 'bg-[#FF6B00] text-black shadow-md'
                          : isCompleted
                          ? 'bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/50'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {stage.num}
                    </span>
                  </div>

                  <h3 className={`text-sm sm:text-base font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {stage.name}
                  </h3>

                  <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {stage.descriptor}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Station Deep-Dive Cockpit Panel */}
        <div className="p-6 sm:p-9 rounded-3xl bg-[#070D1A]/95 border border-white/[0.12] shadow-2xl relative overflow-hidden">
          {/* Top colored accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] transition-colors duration-500"
            style={{ backgroundColor: activeStage.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Station Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: activeStage.color }}>
                <Workflow className="w-4 h-4" />
                <span>STEP {activeStage.num} // HOW WE WORK TOGETHER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {activeStage.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStage.descriptor} {activeStage.focus}
              </p>

              {/* Station Deliverables Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  WHAT GETS DONE IN THIS STEP:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Milestone Seal & Deliverable Sign-off (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#040810] border border-white/10 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs font-mono">
                  <span className="text-slate-400">// YOUR GUARANTEE</span>
                  <span className="text-[#10B981] flex items-center gap-1 font-bold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>100% YOUR CODE &amp; PROPERTY</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    What you receive at this step:
                  </div>
                  <div className="text-sm sm:text-base font-bold font-display text-white p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#FF6B00]">
                    {activeStage.deliverable}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
                  You review and approve each step before we move forward. All code repositories, accounts, and documentation belong 100% to your company from day one.
                </p>

                <div className="pt-1">
                  <a
                    href="#contact-form"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-semibold transition-all"
                  >
                    <span>Talk to us about your project &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
