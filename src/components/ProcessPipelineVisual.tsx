import React, { useState } from 'react';
import { 
  MessageSquare, 
  Layers, 
  Code2, 
  Rocket, 
  Headphones, 
  CheckCircle2, 
  ExternalLink,
  Shield, 
  Smartphone,
  Server
} from 'lucide-react';

interface StagePreview {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  accentColor: string;
  whatYouSee: string;
  clientDeliverable: string;
  cadence: string;
  mockupBadge: string;
  checklist: string[];
}

const STAGES: StagePreview[] = [
  {
    id: 'plan',
    stepNumber: '01',
    title: 'Listen & Understand',
    subtitle: 'Plain-English discovery, goal alignment, and clear feature roadmap.',
    accentColor: '#FF6B00',
    whatYouSee: 'Shared Notion/Doc roadmap with every feature clearly explained in plain English.',
    clientDeliverable: 'Feature roadmap, architecture plan, and realistic timeline.',
    cadence: 'Days 1 – 3',
    mockupBadge: 'ROADMAP // PLAIN ENGLISH',
    checklist: [
      '1-on-1 discovery call with your lead engineer',
      'Feature priorities ranked by commercial value',
      'Realistic timeline with fixed milestones',
      'Direct WhatsApp / Slack channel created'
    ]
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Interactive Design',
    subtitle: 'Clickable Figma prototypes you can test on your phone before coding.',
    accentColor: '#38BDF8',
    whatYouSee: 'Clickable Figma prototype you can open right on your phone or laptop.',
    clientDeliverable: 'Complete interactive UI/UX design ready for your feedback.',
    cadence: 'Weeks 1 – 2',
    mockupBadge: 'FIGMA // CLICKABLE PROTOTYPE',
    checklist: [
      'Interactive mobile & desktop screen designs',
      'Real user flows and button actions mapped',
      'Unlimited revisions until you love the look',
      'Design tokens and typography established'
    ]
  },
  {
    id: 'build',
    stepNumber: '03',
    title: 'Weekly Working Previews',
    subtitle: 'Clean code built in 1-week cycles. You test real progress every Friday.',
    accentColor: '#10B981',
    whatYouSee: 'Private staging web address (e.g., staging.yourbrand.com) updated every week.',
    clientDeliverable: 'Working staging builds + 5-minute video walkthrough every Friday.',
    cadence: 'Weeks 3 – 6',
    mockupBadge: 'STAGING // LIVE PREVIEW URL',
    checklist: [
      'Private live staging link updated every week',
      'Test real features on your own devices',
      'Code pushed continuously to your private GitHub',
      'Quick weekly recap call or video update'
    ]
  },
  {
    id: 'launch',
    stepNumber: '04',
    title: 'Rigorous QA & Launch',
    subtitle: 'Cross-device testing, payment verification, and zero-downtime deployment.',
    accentColor: '#F59E0B',
    whatYouSee: 'Production deployment checklist with 100% green tests across devices.',
    clientDeliverable: 'Live software on your custom domain with SSL, analytics, and backups.',
    cadence: 'Launch Week',
    mockupBadge: 'PRODUCTION // LIVE LAUNCH',
    checklist: [
      'Tested across iPhones, Androids, Macs, and PCs',
      'Live payment and checkout flow verification',
      'Automated cloud backups & SSL security setup',
      'Zero downtime transition to your custom domain'
    ]
  },
  {
    id: 'support',
    stepNumber: '05',
    title: 'Post-Launch Care',
    subtitle: 'We stay by your side. Direct chat for tweaks, updates, and fast help.',
    accentColor: '#8B5CF6',
    whatYouSee: 'Direct WhatsApp/Slack channel where your engineer responds fast.',
    clientDeliverable: 'Uptime monitoring, security updates, and priority bug fixes.',
    cadence: 'Ongoing Support',
    mockupBadge: 'CARE // DIRECT ENGINEER CHAT',
    checklist: [
      'Direct chat with the engineers who wrote your code',
      'Proactive server and database health monitoring',
      'Quick turnaround for updates and feature additions',
      'Quarterly code audits and speed optimizations'
    ]
  }
];

export const ProcessPipelineVisual: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('plan');
  const current = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <div className="w-full bg-[#050B16] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: current.accentColor }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accentColor }} />
            <span>INTERACTIVE WORKFLOW PREVIEW</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-2">
            Click any phase to see what you actually experience
          </h3>
        </div>

        <div className="text-xs font-mono text-slate-400 bg-[#08101E] px-3.5 py-2 rounded-lg border border-white/10 flex items-center gap-2">
          <span>Active Phase:</span>
          <span className="font-bold text-white uppercase">{current.stepNumber} // {current.title}</span>
        </div>
      </div>

      {/* Step Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-6 pb-8 relative z-10">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-3.5 rounded-xl transition-all duration-200 border flex flex-col justify-between ${
                isActive
                  ? 'bg-[#0B1528] border-white/30 shadow-lg -translate-y-0.5'
                  : 'bg-[#060C18]/80 border-white/5 hover:border-white/20 hover:bg-[#091222]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span 
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'text-black' : 'text-slate-400 bg-white/5'
                  }`}
                  style={{ backgroundColor: isActive ? stage.accentColor : undefined }}
                >
                  {stage.stepNumber}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {stage.cadence.split(' ')[0]}
                </span>
              </div>
              <div className="text-xs font-semibold text-white truncate">
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Interactive Dashboard Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
        
        {/* Left: What Client Experiences & Receives (7 cols) */}
        <div className="lg:col-span-7 bg-[#081222] border border-white/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span 
                className="text-xs font-mono font-bold px-2.5 py-1 rounded-md text-black"
                style={{ backgroundColor: current.accentColor }}
              >
                PHASE {current.stepNumber} &bull; {current.cadence}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Transparent &amp; Predictable
              </span>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {current.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            {/* What you receive callout */}
            <div className="p-4 rounded-lg bg-[#040812] border border-white/10 space-y-1.5">
              <div className="text-xs font-mono uppercase text-[#FF6B00] font-bold">
                What You (The Client) Actually Receive:
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                {current.clientDeliverable}
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2.5">
                INCLUDED IN THIS STAGE:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 
                      className="w-4 h-4 shrink-0 mt-0.5" 
                      style={{ color: current.accentColor }} 
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Direct Engineers &bull; No Agency Layers</span>
            <span className="text-white">Zero Guesswork</span>
          </div>
        </div>

        {/* Right: Live Interactive Artifact Mockup (5 cols) */}
        <div className="lg:col-span-5 bg-[#030712] border border-white/10 rounded-xl p-5 flex flex-col justify-between overflow-hidden relative">
          {/* Top Mockup Browser Header */}
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5 truncate max-w-[200px]">
                {current.mockupBadge}
              </div>
            </div>

            {/* Dynamic Content based on active stage */}
            {activeStageId === 'plan' && (
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-[#070E1C] border border-white/5 space-y-2">
                  <div className="text-[11px] text-[#FF6B00] font-bold">PROJECT SCOPE &amp; ROADMAP.md</div>
                  <div className="space-y-1 text-[11px] text-slate-400">
                    <div># Client Target: High-converting digital store</div>
                    <div>- Sprint 1: Interactive Figma UX prototype</div>
                    <div>- Sprint 2: Core engine, payments, live preview</div>
                    <div>- Sprint 3: Speed audit &amp; custom domain launch</div>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A162B] border border-emerald-500/20 text-emerald-400 text-[11px] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Agreed scope locked // Zero surprise invoices</span>
                </div>
              </div>
            )}

            {activeStageId === 'design' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#070E1C] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#38BDF8]">
                    <span>FIGMA PROTOTYPE LINK</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <div className="h-28 rounded bg-[#030610] border border-white/10 p-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1 text-[10px] text-slate-400">
                      <span>Mobile Canvas (390x844)</span>
                      <span className="text-emerald-400">Ready to Click</span>
                    </div>
                    <div className="space-y-1.5 py-1">
                      <div className="h-4 bg-white/10 rounded w-3/4" />
                      <div className="h-3 bg-white/5 rounded w-1/2" />
                      <div className="h-6 bg-[#38BDF8]/20 border border-[#38BDF8]/40 rounded flex items-center justify-center text-[9px] text-[#38BDF8] font-bold">
                        TAP TO TEST CHECKOUT
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 text-center">
                  You test the full user journey on your real phone before we code.
                </div>
              </div>
            )}

            {activeStageId === 'build' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#070E1C] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#10B981]">
                    <span>https://staging.yourbrand.com</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">LIVE BUILD</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#030610] border border-white/10 space-y-1.5 text-[11px] text-slate-400">
                    <div className="text-white font-bold">Latest Friday Release:</div>
                    <div>&bull; Payment gateway integration active</div>
                    <div>&bull; Mobile responsiveness verified (100/100)</div>
                    <div>&bull; Database sync running flawlessly</div>
                  </div>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300 flex items-center justify-between">
                  <span>Git commit: e74f09a (Main branch)</span>
                  <span className="text-emerald-400 font-bold">Verified</span>
                </div>
              </div>
            )}

            {activeStageId === 'launch' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#070E1C] border border-white/5 space-y-2">
                  <div className="text-[11px] text-[#F59E0B] font-bold">LAUNCH DAY PRE-FLIGHT VERIFICATION</div>
                  <div className="space-y-1.5 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>SSL Security Certificate</span>
                      <span className="text-emerald-400 font-bold">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Lighthouse Performance Score</span>
                      <span className="text-emerald-400 font-bold">99 / 100</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>DNS Cutover (Custom Domain)</span>
                      <span className="text-emerald-400 font-bold">Zero Downtime</span>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 text-center">
                  Smooth transition into production with instant rollback safety.
                </div>
              </div>
            )}

            {activeStageId === 'support' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#070E1C] border border-white/5 space-y-2">
                  <div className="text-[11px] text-[#8B5CF6] font-bold">DIRECT ENGINEER CHANNEL</div>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 rounded bg-[#030610] text-slate-300">
                      <span className="text-slate-500 font-bold">Client:</span> "Hey team, can we add Apple Pay to checkout?"
                    </div>
                    <div className="p-2 rounded bg-[#0A162B] text-emerald-300 border border-emerald-500/20">
                      <span className="text-white font-bold">Lead Engineer:</span> "On it! Pushing to staging this afternoon for you to test."
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 text-center">
                  Direct talk with developers. No tickets that take 4 days to answer.
                </div>
              </div>
            )}
          </div>

          {/* Bottom Card Summary */}
          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Client Experience</span>
            <span className="text-white font-bold">Human &amp; Transparent</span>
          </div>
        </div>

      </div>
    </div>
  );
};
