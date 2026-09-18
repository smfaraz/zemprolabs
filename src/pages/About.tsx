import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Code2,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Laptop,
  Layers,
  Server,
  ShoppingBag,
  HelpCircle,
  ChevronDown,
  Terminal,
  HeartHandshake,
  Compass,
  Cpu
} from 'lucide-react';
import { company } from '../data/company';

interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Simplicity Over Hype',
    subtitle: 'No jargon, no over-engineered bloat.',
    description: 'We do not chase every new trend just to sound clever. We pick proven, ultra-fast, and dependable technologies (TypeScript, React, Next.js, Node, Supabase, Shopify Plus) that solve real problems without creating endless technical debt.',
    color: '#FF6B00',
    icon: Terminal
  },
  {
    number: '02',
    title: 'Direct Engineer Access',
    subtitle: 'You talk to the people writing your code.',
    description: 'We eliminated account managers and sales middlemen. When you have a question or need an update, you message your lead engineer directly on Slack or WhatsApp. Clear answers, zero telephone games.',
    color: '#38BDF8',
    icon: Users
  },
  {
    number: '03',
    title: 'Brutally Honest Advice',
    subtitle: 'We treat your capital like our own.',
    description: 'If you ask us to build a feature that is unnecessary, overpriced, or unlikely to help your customers, we tell you frankly. We see ourselves as your technical partner, not order takers who run up invoices.',
    color: '#10B981',
    icon: HeartHandshake
  },
  {
    number: '04',
    title: 'Pride in Craftsmanship',
    subtitle: 'Clean code you actually own.',
    description: 'Every system we write is well-documented, type-safe, and pushed to your private repository from day one. If another developer looks at our code tomorrow, they will find it clean, organized, and easy to maintain.',
    color: '#8B5CF6',
    icon: Code2
  }
];

const TECH_STACK = [
  {
    category: 'Web & User Interfaces',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    accent: '#FF6B00'
  },
  {
    category: 'Backend & Cloud Systems',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'REST APIs', 'Cloudflare Workers'],
    accent: '#38BDF8'
  },
  {
    category: 'E-Commerce & Stores',
    items: ['Shopify Plus', 'Liquid Engineering', 'Headless Storefronts', 'Stripe', 'Razorpay'],
    accent: '#10B981'
  },
  {
    category: 'Mobile & Native Apps',
    items: ['React Native', 'Expo', 'iOS & Android Deployments', 'Push Notifications', 'Offline Sync'],
    accent: '#F59E0B'
  }
];

const ABOUT_FAQS = [
  {
    q: 'Are you an agency or an independent software engineering studio?',
    a: 'We are an independent software studio. Unlike traditional agencies that juggle 50 projects with junior contractors and non-technical account managers, we keep a focused team of experienced in-house engineers who work directly with our clients.'
  },
  {
    q: 'Where is your team located?',
    a: 'Our engineering studio is located in Hyderabad, India (6th Floor, Ehtesham Heights, Golden Heights Colony, Upperpally). We collaborate daily with founders, companies, and fast-growing brands across India, the Middle East, Europe, and the US.'
  },
  {
    q: 'Do you outsource code to third-party freelancers?',
    a: 'Never. Every line of code, database schema, and interface design is crafted in-house by our full-time engineering team. This is how we guarantee sub-second load speeds, clean architecture, and rapid response times.'
  },
  {
    q: 'Can we meet in person or do a video call before starting?',
    a: 'Absolutely. If you are in Hyderabad, you are welcome to visit our studio. Otherwise, we regularly conduct friendly video walkthroughs to review your project goals, explore your reference ideas, and plan the roadmap together.'
  },
  {
    q: 'Who owns the intellectual property and code when the project is done?',
    a: 'You do—100%. From the very first sprint, all code is pushed to your private GitHub repository, Figma designs are transferred to your account, and all cloud services are registered under your business. We believe in earning your trust through great work, not vendor lock-in.'
  }
];

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 sm:pt-28 pb-0 bg-[#02050A]">
      <SEO
        title="About Zemprolabs | Independent Software Studio in Hyderabad"
        description="Meet the engineering team behind Zemprolabs. We build custom web apps, e-commerce stores, and high-performance digital platforms with direct developer access and 100% code ownership."
        canonicalPath="/about"
      />

      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pb-20 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-[#FF6B00]/[0.03] blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>INDEPENDENT ENGINEERING STUDIO // HYDERABAD, INDIA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Engineers who care about the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#38BDF8] to-[#10B981]">
              software they write.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            We are an independent team of developers and software craftspeople. We build fast web applications, custom e-commerce stores, and cloud platforms for founders who want honest engineering without agency bloat.
          </p>

          {/* 3 Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-5 rounded-2xl bg-[#070D1A] border border-white/10 hover:border-[#FF6B00]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <Users className="w-4 h-4 text-[#FF6B00]" />
                <span>100% In-House</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                No mystery contractors. Every line of code is written by our dedicated engineering team in Hyderabad.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070D1A] border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>Zero Lock-In</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Your code, Figma files, and cloud credentials belong to you from day one. Complete transparency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070D1A] border border-white/10 hover:border-[#10B981]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                <HeartHandshake className="w-4 h-4 text-[#10B981]" />
                <span>Long-Term Care</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We don't disappear after launch. We monitor uptime, ship updates, and protect your platform continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Story Behind Zemprolabs (Human Narrative) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#070D1A] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-wider mb-1">
                OUR STORY // WHY WE EXIST
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                We built the studio we wished we could hire.
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-[#040812] border border-white/10 shrink-0 w-fit">
              Founded on Craft &amp; Honesty
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Before starting Zemprolabs, we saw firsthand how traditional software agencies operate. A slick sales executive would pitch a client on a multi-month vision, only to hand the work off to junior contractors who had never seen the original brief. Clients were trapped in endless ticket queues, billed for tiny change requests, and left with brittle code they couldn't maintain.
            </p>
            <p>
              We believed there was a much simpler, more respectful way to build software: <strong className="text-white font-semibold">assemble a tight team of skilled engineers, talk in plain English, ship real working progress every week, and treat every client's business with total dedication.</strong>
            </p>
            <p>
              Today, Zemprolabs is proud to be the trusted technical backbone for businesses worldwide. Whether we're launching a high-converting e-commerce flagship, crafting a complex SaaS workflow, or maintaining 24/7 cloud infrastructure, our clients know exactly who is writing their software and that we stand behind every single deployment.
            </p>
          </div>

          {/* Core Values Quote */}
          <div className="p-6 rounded-2xl bg-[#040812] border-l-4 border-[#FF6B00] space-y-2">
            <p className="text-sm sm:text-base font-medium text-white italic">
              "Great software isn't born from buzzwords or 50-page PowerPoint decks. It comes from experienced engineers who listen carefully, write clean code, and care about the people who use it."
            </p>
            <div className="text-xs font-mono text-[#FF6B00]">
              — The Zemprolabs Engineering Philosophy
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our 4 Core Principles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>HOW WE OPERATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            The principles that guide our work
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            These aren't marketing slogans. They are the non-negotiable rules we follow every time we open our code editors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-[#070D1A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    RULE // {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#94A3B8] mt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. The Engineering Stack We Master */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081224] border border-white/10 shadow-2xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
              // PRODUCTION TOOLKIT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Battle-tested technologies we build with
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              We choose modern, high-speed technologies that guarantee reliability, easy hiring in the future, and zero vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH_STACK.map((stack, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#040812] border border-white/5 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stack.accent }} />
                  <h4 className="text-sm font-bold text-white font-display">
                    {stack.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#070D1A] text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hyderabad Studio & Direct Reach */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#070D1A] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono text-[#10B981]">
                <MapPin className="w-3.5 h-3.5" />
                <span>PHYSICAL STUDIO PRESENCE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Based in Hyderabad. Building for the world.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our main development lab is located in Hyderabad's tech corridor. We operate with full in-house infrastructure, high-speed fiber lines, and modern hardware to support round-the-clock deployments.
              </p>

              <div className="p-4 rounded-xl bg-[#040812] border border-white/5 space-y-2 text-xs font-mono text-slate-300">
                <div className="text-white font-bold">{company.name} Studio</div>
                <div>{company.address.line1}, {company.address.line2}</div>
                <div>{company.address.line3}, {company.address.city}, {company.address.country}</div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#040812] border border-white/10 space-y-4">
              <div className="text-xs font-mono text-[#FF6B00] uppercase font-bold">
                DIRECT STUDIO CONTACT
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                  <div>
                    <span className="text-slate-500 block text-[10px]">PRIMARY PHONE &amp; WHATSAPP:</span>
                    <a
                      href={company.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#10B981] transition-colors font-bold text-sm block"
                    >
                      {company.phone} <span className="text-[10px] text-[#10B981] font-normal">(Primary)</span>
                    </a>
                  </div>
                  <div className="pt-1 border-t border-white/5">
                    <span className="text-slate-500 block text-[10px]">SECONDARY LINE:</span>
                    <a
                      href={company.phoneSecondaryHref}
                      className="text-slate-300 hover:text-white transition-colors text-xs font-mono block"
                    >
                      {company.phoneSecondary} <span className="text-[10px] text-slate-500 font-normal">(Secondary)</span>
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-slate-500 block text-[10px]">ENGINEERING EMAIL:</span>
                  <a
                    href={company.emailHref}
                    className="text-white hover:text-[#FF6B00] transition-colors font-bold text-sm block"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed pt-1">
                You will always be connected directly with an engineer who understands technical requirements, not an answering service.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Honest FAQ Accordion */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>COMMONLY ASKED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Questions about our studio
          </h2>
        </div>

        <div className="space-y-4">
          {ABOUT_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#070D1A] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-lg bg-white/5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Docked Closing CTA Section (pb-0 to connect seamlessly with Footer) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-0 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#09152C] via-[#0D1E3E] to-[#081224] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl mb-12">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-xs font-mono text-[#FF6B00]">
              <span>READY TO PARTNER? // DIRECT CONVERSATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]">
              Let’s build something dependable together.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an upcoming product, e-commerce store, or digital platform? Reach out to our engineering studio for practical guidance, technical scoping, and an honest partnership.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:scale-[1.02]"
              >
                <span>Talk With Our Engineering Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/project-estimation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <span>Configure Project Scope</span>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Direct engineer contact
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Strict NDA protection
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
