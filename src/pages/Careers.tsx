import React from 'react';
import { SEO } from '../components/SEO';
import {
  ArrowRight,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  TextReveal,
  Magnetic,
  FloatingParticles,
  useLenis,
} from '../components/motion';

interface JobRole {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

const OPEN_POSITIONS: JobRole[] = [
  {
    title: 'Senior Full-Stack Web Engineer',
    department: 'Web & SaaS Engineering',
    location: 'Hyderabad (Hybrid / Onsite)',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Lead architecture and development of scalable React, Next.js, and Node.js applications with strict TypeScript standards and clean schema design.',
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    title: 'Enterprise ServiceNow Technical Consultant',
    department: 'ServiceNow Practice',
    location: 'Hyderabad / Remote (India)',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'Architect custom scoped applications, automated cross-department workflows, Service Portal interfaces, and cross-instance migration utilities.',
    skills: ['ServiceNow ITSM', 'Scoped Applications', 'Flow Designer', 'Service Portal', 'JavaScript']
  },
  {
    title: 'Shopify Plus & E-Commerce Engineer',
    department: 'Commerce Practice',
    location: 'Hyderabad / Remote (India)',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'Build high-converting Shopify Plus storefronts, custom checkout extensions, private API integrations, and international multi-currency stores.',
    skills: ['Shopify Plus', 'Liquid', 'Storefront API', 'React', 'Checkout Extensions', 'Stripe']
  },
  {
    title: 'Cloud Infrastructure & DevOps Engineer',
    department: 'Cloud & DevOps',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'Configure automated zero-downtime CI/CD pipelines, AWS environments, Docker microservices, and 24/7 uptime monitoring systems.',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Nginx', 'Datadog']
  }
];

export const Careers: React.FC = () => {
  const { scrollTo } = useLenis();

  return (
    <div className="w-full bg-[#090A0D] text-white selection:bg-[#FF6B00] selection:text-black">
      <SEO
        title="Careers & Engineering Roles | Zemprolabs Studio"
        description="Join Zemprolabs. We build custom web apps, Shopify Plus stores, enterprise ServiceNow systems, and cloud architectures for global clients. View open engineering positions."
        canonicalPath="/careers"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Architectural Dark)                                      */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        {/* Ambient Floating Luminous Energy Particles */}
        <FloatingParticles count={22} />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>WE ARE HIRING &bull; HYDERABAD STUDIO &amp; REMOTE INDIA</span>
          </div>

          <ScrollReveal preset="fade-up" duration={1.2} delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Build Real Software with{' '}
              <span className="text-[#FF6B00]">Senior Engineers.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4">
              No middle management bureaucracy, no throwaway prototypes. You will work directly with lead software architects on mission-critical platforms running in active production.
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fade-up" delay={0.45} duration={1.2} className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={12}>
              <button
                type="button"
                onClick={() => scrollTo('#open-roles', { duration: 1.1 })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              >
                <span>Explore Open Engineering Roles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Magnetic>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OPEN ROLES DIRECTORY (Warm Textured Limestone Canvas)                  */}
      {/* ========================================================================= */}
      <section id="open-roles" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-textured-light text-[#0F172A] border-b border-stone-300/80">
        <div className="max-w-7xl mx-auto space-y-14">
          <ScrollReveal preset="fade-up" className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#FF6B00]">
              ACTIVE OPENINGS // HYDERABAD &amp; REMOTE
            </span>
            <div className="mt-2">
              <TextReveal
                text="Engineering Positions"
                as="h2"
                className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900"
              />
            </div>
            <p className="text-base sm:text-lg text-slate-700 mt-3 leading-relaxed">
              We look for engineers who care about clean code architecture, type safety, and real business outcomes. Competitive compensation and transparent sprint cycles.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="space-y-6">
            {OPEN_POSITIONS.map((role, idx) => (
              <StaggerItem key={idx}>
                <AntigravityTiltCard tiltMax={4} className="rounded-2xl">
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-stone-300/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-white font-medium">
                          {role.department}
                        </span>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-200/80 text-slate-700">
                          {role.location}
                        </span>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-200/80 text-slate-700">
                          {role.experience}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-display text-slate-900">
                        {role.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {role.skills.map((skill) => (
                          <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-200/70 text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 pt-2 lg:pt-0">
                      <Magnetic strength={8}>
                        <a
                          href={`mailto:careers@zemprolabs.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-sm"
                        >
                          <span>Apply for this Role</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </AntigravityTiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRANSPARENT 3-STAGE HIRING PROCESS (Architectural Dark)               */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-14">
          <ScrollReveal preset="fade-up" className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00]">
              TRANSPARENT PROCESS // NO ENDLESS ROUNDS
            </span>
            <div className="mt-2">
              <TextReveal
                text="Our 3-Stage Interview Flow."
                as="h2"
                className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white"
              />
            </div>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              We respect your time. No generic LeetCode puzzles or 6-week hiring loops. Just practical conversations about real code.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={6} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#FF6B00] font-bold">ROUND 01 // 30 MINS</div>
                    <h4 className="text-xl font-bold font-display text-white">Introduction &amp; Experience</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      A casual 30-minute video conversation with an engineering lead to discuss your previous projects, technical preferences, and mutual fit.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={6} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#FF6B00] font-bold">ROUND 02 // 60 MINS</div>
                    <h4 className="text-xl font-bold font-display text-white">Code Review &amp; Architecture</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Walk through a project you've written or solve a practical real-world architectural problem together. We look for clarity, type safety, and clean structure.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>

            <StaggerItem className="h-full">
              <AntigravityTiltCard tiltMax={6} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#FF6B00] font-bold">ROUND 03 // 30 MINS</div>
                    <h4 className="text-xl font-bold font-display text-white">Founder Discussion &amp; Offer</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Discuss compensation, career growth, studio culture, and project assignments. Fast, transparent offers delivered within 48 hours.
                    </p>
                  </div>
                </div>
              </AntigravityTiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GENERAL APPLICATION CTA                                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0D] text-white relative overflow-hidden">
        <ScrollReveal preset="fade-up" className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Don't see your exact role listed?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            We are always interested in meeting disciplined software engineers, DevOps specialists, and technical architects. Send us your GitHub profile or portfolio.
          </p>

          <div className="pt-4">
            <Magnetic strength={12}>
              <a
                href="mailto:careers@zemprolabs.com?subject=General%20Engineering%20Application"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:shadow-[0_0_35px_rgba(255,107,0,0.5)]"
              >
                <span>Send Us Your GitHub &bull; Resume</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Careers;
