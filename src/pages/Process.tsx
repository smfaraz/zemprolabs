import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Layers, 
  Code2, 
  Rocket, 
  Headphones, 
  ShieldCheck, 
  Clock, 
  Users, 
  Laptop, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Check,
  X
} from 'lucide-react';
import { ProcessPipelineVisual } from '../components/ProcessPipelineVisual';

interface ProcessStep {
  num: string;
  phase: string;
  title: string;
  subtitle: string;
  timeline: string;
  color: string;
  icon: React.ElementType;
  whatWeDo: string;
  whatYouReceive: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    phase: 'DISCOVERY & ALIGNMENT',
    title: 'Listen, Understand & Map Out',
    subtitle: 'We sit down with you to understand your business goals, target audience, and feature needs in plain English.',
    timeline: 'Days 1 – 3',
    color: '#FF6B00',
    icon: MessageSquare,
    whatWeDo: 'No sales fluff or 50-page bureaucratic questionnaires. We hold a focused 1-on-1 discovery session with your lead engineer. We listen to what you want to achieve, review any reference designs or competitors you love, and outline the exact list of features required for launch.',
    whatYouReceive: 'A crystal-clear project roadmap, agreed feature scope, and a realistic launch schedule with zero surprise fees.',
    deliverables: [
      'Plain-English feature roadmap',
      'Realistic launch timeline',
      'Architecture & tech stack plan',
      'Direct WhatsApp / Slack setup'
    ]
  },
  {
    num: '02',
    phase: 'DESIGN & PROTOTYPING',
    title: 'Visual Designs & Clickable Prototypes',
    subtitle: 'You click through interactive screens on your phone or computer before a single line of code is written.',
    timeline: 'Weeks 1 – 2',
    color: '#38BDF8',
    icon: Layers,
    whatWeDo: 'We craft modern, high-converting visual designs in Figma. We do not show you static slides—we hand you an interactive prototype you can open on your real phone. You can tap buttons, scroll through product catalogs, and review the exact look and feel.',
    whatYouReceive: 'A complete clickable prototype. We iterate together until you are 100% excited about every screen.',
    deliverables: [
      'Clickable mobile & desktop prototype',
      'Custom typography & brand palette',
      'User journey & checkout flow',
      'Direct Figma commenting access'
    ]
  },
  {
    num: '03',
    phase: 'ACTIVE ENGINEERING',
    title: 'Building & Weekly Working Previews',
    subtitle: 'Clean, modern code built in rapid weekly sprints. You test real progress every single Friday.',
    timeline: 'Weeks 3 – 6',
    color: '#10B981',
    icon: Code2,
    whatWeDo: 'Our in-house engineers build your frontend and backend using modern, reliable technologies (React, Next.js, Node, Supabase, Shopify Plus, or Cloud native). Every Friday, we deploy the latest code to a private staging URL so you can test real progress.',
    whatYouReceive: 'A private staging web link to click around and test, plus a quick 5-minute video walkthrough showing what was accomplished.',
    deliverables: [
      'Private live staging website URL',
      'Weekly Friday progress walkthroughs',
      'Code pushed to your private GitHub',
      'Continuous performance & safety checks'
    ]
  },
  {
    num: '04',
    phase: 'QUALITY ASSURANCE & LAUNCH',
    title: 'Cross-Device Testing & Smooth Launch',
    subtitle: 'We test across real devices, verify payments, and launch on your domain with zero downtime.',
    timeline: 'Launch Week',
    color: '#F59E0B',
    icon: Rocket,
    whatWeDo: 'Before opening the doors, we run an exhaustive pre-launch checklist. We test across iPhones, Android phones, tablets, and desktop browsers. We test payment gateways in sandbox and live mode, verify SSL security certificates, and ensure page speeds load in under a second.',
    whatYouReceive: 'A successful, zero-downtime launch on your custom domain, with verified search engine indexing, analytics, and automated cloud backups.',
    deliverables: [
      'Zero-downtime domain cutover',
      'SSL security & automated backups',
      'Google Analytics & tracking setup',
      'Complete cross-device verification'
    ]
  },
  {
    num: '05',
    phase: 'POST-LAUNCH CARE',
    title: 'Direct Engineer Care & Growth',
    subtitle: 'We do not disappear after launch day. You have direct access to your engineers for tweaks, updates, and support.',
    timeline: 'Ongoing Support',
    color: '#8B5CF6',
    icon: Headphones,
    whatWeDo: 'Software is a living product. As customers start using your platform, you will want new features, design tweaks, or quick updates. Instead of filing tickets with an offshore call center, you message the engineers who built your platform directly.',
    whatYouReceive: 'Fast response times, proactive cloud server monitoring, security updates, and smooth ongoing feature additions as your business grows.',
    deliverables: [
      'Direct chat with your lead developer',
      'Proactive uptime & server health monitoring',
      'Quick turnaround on tweaks & updates',
      '100% full transfer of all credentials'
    ]
  }
];

const COMPARISONS = [
  {
    aspect: 'Communication',
    zempro: 'Direct Slack/WhatsApp with the actual engineers writing your code.',
    others: 'Layers of non-technical account managers and slow ticket queues.'
  },
  {
    aspect: 'Seeing Progress',
    zempro: 'Weekly private staging link you can test on your phone every Friday.',
    others: 'Months of silence followed by a generic PowerPoint slide presentation.'
  },
  {
    aspect: 'Tone & Explanations',
    zempro: 'Simple, honest, plain English. We explain how things work without jargon.',
    others: 'Confusing technical jargon designed to make simple work sound mysterious.'
  },
  {
    aspect: 'Code & Asset Ownership',
    zempro: '100% yours from Day 1. Code pushed directly to your private GitHub.',
    others: 'Proprietary lock-in, hidden exit fees, or hostage source code.'
  },
  {
    aspect: 'Pricing & Changes',
    zempro: 'Agreed fixed scope and clear milestones. Zero surprise invoices.',
    others: 'Vague initial bids followed by constant surprise change-order fees.'
  }
];

const FAQS = [
  {
    question: 'Do I need technical knowledge to work with Zemprolabs?',
    answer: 'Not at all. Our entire process is designed to be friendly, human, and transparent. We handle all server configurations, database architecture, payment gateways, and code. You tell us what your business needs, and we explain every option in plain language so you can make confident decisions.'
  },
  {
    question: 'What if I want to change or add a feature halfway through?',
    answer: 'That is completely normal. Ideas evolve once you see real screens. Because we build in rapid weekly sprints, we can easily adjust priorities. If you want to add a feature, we discuss how it affects the timeline, decide together whether to swap it in, and keep moving without friction.'
  },
  {
    question: 'How often do we communicate during development?',
    answer: 'As often as you like, without overwhelming your schedule. You have a direct Slack or WhatsApp channel with your lead developer for daily quick questions, plus a structured weekly demo every Friday where you get a live link and a 5-minute video summary of what was built.'
  },
  {
    question: 'Who actually writes the code for my project?',
    answer: 'Our dedicated in-house engineering team. We never subcontract your project to random freelancers or white-label agencies. The developer you speak with on the discovery call is the engineer writing your software.'
  },
  {
    question: 'Do I own the code, designs, and intellectual property?',
    answer: 'Yes, 100%. From day one, all code is committed to your private GitHub repository, all design files in Figma belong to you, and all hosting accounts are under your name. You are never locked into us.'
  },
  {
    question: 'What happens after launch? Are we left on our own?',
    answer: 'Never. Every launch includes post-launch monitoring and bug-fixing warranty. If anything we built does not perform as expected, we fix it promptly. You can also retain us for ongoing feature enhancements and proactive server care.'
  }
];

export const Process: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title="Our Working Process | Transparent & Human Software Craft"
        description="Clear steps, weekly progress, and zero guesswork. Learn how Zemprolabs turns your vision into working, high-scale software with direct engineer access and 100% code ownership."
        canonicalPath="/process"
      />

      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pb-20 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-[#FF6B00]/[0.03] blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>TRANSPARENT CLIENT PROCESS // NO JARGON, NO SURPRISES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Clear steps. Weekly progress.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
              Zero guesswork.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            Most agencies hide behind complex buzzwords and account managers. We do things differently: you talk directly with the engineers building your software, test live progress every week, and own every single line of code.
          </p>

          {/* 3 Core Client Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-4 rounded-xl bg-[#070D1A] border border-white/10 hover:border-[#FF6B00]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <Users className="w-4 h-4 text-[#FF6B00]" />
                <span>Direct Engineers</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                No game of telephone. Message the developers writing your code directly on Slack or WhatsApp.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070D1A] border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <Laptop className="w-4 h-4 text-[#38BDF8]" />
                <span>Weekly Live Demos</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Never wait months in the dark. Test working features on your real phone or laptop every Friday.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070D1A] border border-white/10 hover:border-[#10B981]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>100% Your Code</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                All source code, designs, and cloud accounts belong to you from day one with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Pipeline Visual Component */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <ProcessPipelineVisual />
      </section>

      {/* 3. Detailed Step-by-Step Breakdown */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span>DETAILED WALKTHROUGH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            What each phase looks like in practice
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            From the initial conversation to long-term care, here is our exact step-by-step workflow.
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Subtle vertical spine line */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#FF6B00]/40 via-[#38BDF8]/40 to-[#10B981]/40" />

          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#070D1A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl md:ml-16"
              >
                {/* Step indicator node on the timeline spine */}
                <div 
                  className="hidden md:flex absolute -left-16 top-8 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center font-mono font-bold text-xs bg-[#02050A] border-2 shadow-md"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {step.num}
                </div>

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-5 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-base shrink-0 shadow-inner"
                      style={{ backgroundColor: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider uppercase">
                          PHASE {step.num} // {step.phase}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#030610] border border-white/10 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Typical timing: {step.timeline}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-5">
                  <p className="text-base text-slate-200 font-medium leading-relaxed">
                    {step.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                    <div className="space-y-1.5 p-4 rounded-xl bg-[#030712] border border-white/5">
                      <div className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                        <span>What We Do:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {step.whatWeDo}
                      </p>
                    </div>

                    <div className="space-y-1.5 p-4 rounded-xl bg-[#030712] border border-white/5">
                      <div className="text-xs font-mono font-bold text-[#10B981] uppercase flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>What You Receive:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {step.whatYouReceive}
                      </p>
                    </div>
                  </div>

                  {/* Deliverable Tags */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-slate-400 mb-2.5">
                      DELIVERABLES INCLUDED:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-[#040812] text-slate-300 border border-white/10 flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. The Zemprolabs Way vs. Typical Agency */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono text-[#10B981]">
            <span>HONEST COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            How we compare to traditional agencies
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            We built Zemprolabs specifically to solve the frustration of dealing with bloated agency bureaucracy.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#070D1A] overflow-hidden shadow-2xl">
          {/* Table Header (Hidden on mobile where rows stack vertically) */}
          <div className="hidden sm:grid grid-cols-12 bg-[#040812] p-4 sm:p-5 border-b border-white/10 text-xs font-mono uppercase tracking-wider">
            <div className="sm:col-span-3 text-slate-400 font-bold">
              Feature / Experience
            </div>
            <div className="sm:col-span-4 text-[#FF6B00] font-bold flex items-center gap-1.5">
              <span>Zemprolabs (Our Way)</span>
            </div>
            <div className="sm:col-span-5 text-slate-500 font-bold flex items-center gap-1.5">
              <span>Traditional Agency</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/5">
            {COMPARISONS.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 p-4 sm:p-5 items-center gap-3 sm:gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-12 sm:col-span-3 font-semibold text-sm text-white">
                  {row.aspect}
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{row.zempro}</span>
                </div>

                <div className="col-span-12 sm:col-span-5 flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                  <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our 4 Communication Guarantees */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#081224] to-[#040812] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono">
              <span>OUR CLIENT PROMISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              The 4 non-negotiable rules we work by
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              We respect your time, your money, and your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#030610] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold font-display text-white">Zero Tech Jargon</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                If we cannot explain something simply, we explain it again. You are always informed, never overwhelmed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030610] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold font-display text-white">Prompt Answers</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                No waiting 4 days for a ticket update. Message us on Slack or WhatsApp for fast, direct communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030610] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold font-display text-white">100% Code Ownership</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Every line of code and Figma design belongs to you from day one. Transferred to your private repository.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030610] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold font-display text-white">No Surprise Fees</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                We agree on scope and deliverables before work begins. No hidden costs, no unexpected invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Honest FAQ Accordion */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Everything you need to know about working with us
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Direct answers to the most important questions our clients ask.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#070D1A] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Docked Closing CTA Section (pb-0 to connect seamlessly with Footer) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-0 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#09152C] via-[#0D1E3E] to-[#081224] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl mb-12">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-xs font-mono text-[#FF6B00]">
              <span>READY TO TALK? // ZERO OBLIGATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]">
              Let’s build something your customers will love.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an upcoming product, store, or platform in mind? Let’s have a simple, honest conversation with our lead engineers. No sales pitch—just practical guidance on how to build it right.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:scale-[1.02]"
              >
                <span>Start a Project Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <span>Explore What We’ve Built</span>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Direct engineer response
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Fixed-price estimate
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Process;
