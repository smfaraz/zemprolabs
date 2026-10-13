import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { company } from '../data/company';
import { SEO } from '../components/SEO';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AntigravityTiltCard,
  FloatingParticles,
  Magnetic
} from '../components/motion';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    setVideoError(false);
  }, [id]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project?.video || videoError) return;

    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [project?.video, videoError]);

  if (!project) {
    return (
      <div className="pt-32 pb-24 px-4 max-w-2xl mx-auto text-center space-y-6 bg-[#090A0D] min-h-screen text-white">
        <SEO
          title="Project Not Found | Zemprolabs"
          description="The requested project case study could not be found."
        />
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#FF6B00]">
          <Layers className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Project Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested case study could not be located in our production records.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] text-black font-semibold text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-[#090A0D] text-white">
      <SEO
        title={`${project.title} | Case Study | Zemprolabs`}
        description={project.overview}
        canonicalPath={`/work/${project.id}`}
      />

      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Case Study</span>
            <span className="text-white font-bold">{currentIndex + 1}</span>
            <span>of {projects.length}</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Summary Header (Architectural Glass Building Facade Hero) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 overflow-hidden bg-[#090A0D] border-b border-white/10">
        {/* Full-bleed Architectural Glass Facade Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-building-facade.jpg"
            alt="Modern architectural glass headquarters"
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-45 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/80 to-[#090A0D]/55" />
        </div>

        {/* Ambient Floating Luminous Energy Particles */}
        <FloatingParticles count={22} />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal preset="fade-up" duration={1.2} delay={0.2} className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs text-slate-300">
                Client: <strong className="text-white font-medium">{project.client}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Live in Production</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
              {project.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.link ? (
                <Magnetic strength={10}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all font-mono shadow-md"
                  >
                    <span>Visit Live Platform ({project.domain})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-mono backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidential Client Engagement &bull; Bilateral NDA Protected</span>
                </div>
              )}
              {project.domain && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono backdrop-blur-md">
                  <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>{project.domain}</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Live Media Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-6xl mx-auto">
        <ScrollReveal preset="zoom-in" duration={1.2} delay={0.15} className="rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl relative">
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {project.video && !videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="p-12 text-center text-slate-400">
                <h3 className="text-xl font-bold font-display text-white mb-1">{project.title}</h3>
                <p className="text-xs text-slate-400">Live deployment in active production.</p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {project.metrics.map((m, idx) => (
              <StaggerItem key={idx}>
                <AntigravityTiltCard tiltMax={6} className="rounded-xl">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-xs text-slate-400 block">{m.label}</span>
                    <span className="text-lg sm:text-xl font-bold font-display text-white block">{m.value}</span>
                  </div>
                </AntigravityTiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>

      {/* 3. Deep-Dive Story on Tactile Architectural Paper Canvas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-textured-light text-slate-900 border-y border-stone-300/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Challenge, Approach & Detailed Architecture (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-3 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00] block">
                The Operational Bottleneck
              </span>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                The Client Challenge
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-3 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 block">
                Architectural Execution
              </span>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Our Engineering Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {project.approach}
              </p>
            </div>

            {/* Deep-Dive Operational Breakdown */}
            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-4 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
                Full-Lifecycle Stewardship
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900">
                End-to-End Operational &amp; Engineering Execution
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Rather than treating this engagement as a one-and-done software handover, Zemprolabs operates as the client&apos;s embedded engineering and digital operations core. We take full responsibility for technical stability, continuous performance optimization, system integrations, and multi-channel execution:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Continuous Architecture &amp; Maintenance
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero-downtime dependency patching, database integrity audits, API schema synchronizations, and 99.98% uptime monitoring without client operational overhead.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Automated Workflows &amp; Commercial Pipelines
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom pipelines connecting front-end interfaces directly to fulfillment engines, lead capture CRMs, secure payment gateways, and advertising analytics telemetry.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Growth, Telemetry &amp; Campaign Management
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where applicable across our e-commerce and growth partnerships, we actively manage paid advertising campaigns, organic search optimization, and day-to-day catalog operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality & Zero Lock-in Assurance */}
            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-3 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Client Protection &amp; IP Security
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900">
                100% Code Ownership &amp; Bilateral NDA Safeguards
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                All client proprietary business logic, cloud credentials, customer data, and commercial models remain strictly confidential under bilateral non-disclosure agreements. If the client ever chooses to bring development in-house or transition, 100% of all Git repositories, infrastructure accounts, API credentials, and technical documentation are fully owned and accessible with zero vendor lock-in.
              </p>
            </div>
          </div>

          {/* Right Column: Deliverables & Tech Stack (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-stone-200 pb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>What We Delivered</span>
              </div>
              <ul className="space-y-3">
                {project.built.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-300 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-stone-200 pb-3">
                <Cpu className="w-4 h-4 text-[#FF6B00]" />
                <span>Production Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-stone-200/80 text-slate-800 font-medium font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-stone-900 text-white space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] border-b border-white/10 pb-3">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Engineering Standards</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>100% Client Code &amp; IP Ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Bilateral NDA &bull; Protected Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>CI/CD Automated Testing &amp; Uptime SLAs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Zero Vendor Lock-in &bull; Full Handover Rights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sequential Case Study Navigation */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-white/10">
        <div className="flex items-center justify-between">
          <Link
            to={`/work/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors text-left"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400" />
            <div>
              <span className="text-[11px] text-slate-400 block">Previous Case Study</span>
              <span className="text-sm sm:text-base font-bold font-display text-white">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/work/${nextProject.id}`}
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors text-right"
          >
            <div>
              <span className="text-[11px] text-slate-400 block">Next Case Study</span>
              <span className="text-sm sm:text-base font-bold font-display text-white">{nextProject.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </Link>
        </div>
      </section>

      {/* 5. Closing CTA — Studio Obsidian */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <p className="text-sm font-medium tracking-wide text-[#FF6B00]">
          Ready to Engineer a Similar Platform?
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
          Tell us what you are creating.
        </h2>

        <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
          We review your scope, propose an architecture, and deliver a fixed timeline and estimate within 48 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-lg"
          >
            <span>Submit Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/project-estimation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 transition-all"
          >
            <span>Calculate Project Cost</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
