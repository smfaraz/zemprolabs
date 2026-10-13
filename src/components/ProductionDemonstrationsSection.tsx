import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { ServiceNowPolarisDashboard } from './ServiceNowPolarisDashboard';
import { ScrollReveal } from './motion';

interface ProjectDemo {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  domain: string;
  domainUrl: string;
  summary: string;
  video: string;
  fallbackImage: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

const DEMOS: ProjectDemo[] = [
  {
    id: 'baemeds-com',
    number: '01',
    title: 'BaeMeds USA (baemeds.com)',
    client: 'BaeMeds Healthcare USA',
    category: 'US Sourcing, Dropshipping & Digital Operations',
    domain: 'baemeds.com',
    domainUrl: 'https://baemeds.com',
    summary: 'Sourced products from suppliers in the USA, built the full dropshipping workflow, engineered the web storefront, and actively manage their website maintenance, marketing, ads, social media, and sales.',
    video: '/videos/work/baemeds.mp4',
    fallbackImage: '/images/baemeds-product.jpg',
    metrics: [
      { value: 'US Sourcing', label: 'Direct Suppliers' },
      { value: 'Full Retainer', label: 'Ads, Social & Sales' }
    ],
    tags: ['US Product Sourcing', 'Dropship Automation', 'Paid Ads & Social Media', 'Sales & Site Maintenance']
  },
  {
    id: 'erus-academy',
    number: '02',
    title: 'Erus Academy',
    client: 'Erus Academy',
    category: 'AI English Fluency Platform • Web, CRM & Mobile',
    domain: 'erusacademy.in',
    domainUrl: 'https://erusacademy.in/',
    summary: 'English fluency platform using AI video avatar courses, tailored for degree & engineering graduates and professionals preparing for interviews. What we engineered: the student web platform, admission CRM, and native iOS & Android apps with course delivery and payment integrations.',
    video: '/videos/work/erus-academy.mp4',
    fallbackImage: '/images/studio-workspace.jpg',
    metrics: [
      { value: 'Web, CRM, Mobile', label: 'Ecosystem' },
      { value: 'AI Video Avatars', label: 'Core feature' }
    ],
    tags: ['Web Platform', 'Admission CRM', 'iOS & Android Apps', 'AI Video Avatars']
  },
  {
    id: 'servicenow-enterprise-irm',
    number: '03',
    title: 'Enterprise ServiceNow ITSM & IRM Maintenance',
    client: 'Confidential Global Enterprise (Fortune 500)',
    category: 'Enterprise ServiceNow & Autonomous ITSM',
    domain: 'Confidential Enterprise Practice',
    domainUrl: '',
    summary: 'Confidential enterprise client engagement where we actively maintain their ServiceNow environment—managing IT Service Management (ITSM), Integrated Risk Management (IRM / GRC), automated compliance workflows, and update set conflict prevention.',
    video: '',
    fallbackImage: '/images/servicenow-dashboard.jpg',
    metrics: [
      { value: 'ITSM & IRM', label: 'Active Maintenance' },
      { value: 'CIS-CMDB', label: 'Certified Practice' }
    ],
    tags: ['ServiceNow Washington/Xanadu', 'Flow Designer', 'ITSM Pro & IRM', 'CMDB & Update Sets']
  },
  {
    id: 'auvia',
    number: '04',
    title: 'Auvia Behavioral Centers — ABA Clinic & CRM',
    client: 'Auvia Behavioral Centers (Irving, Texas)',
    category: 'ABA Therapy Clinic • Website, CRM & Growth Retainer',
    domain: 'auviatherapy.com',
    domainUrl: 'https://auviatherapy.com/',
    summary: 'ABA therapy clinic in Irving, Texas. We built their clinic website, custom CRM, and digital patient intake system. They are now on an active ongoing retainer for leads management, site maintenance, marketing, and ad campaigns.',
    video: '/videos/work/auvia.mp4',
    fallbackImage: '/images/mobile-health-app.jpg',
    metrics: [
      { value: 'Active Retainer', label: 'Leads, Ads & Maint.' },
      { value: 'Irving, TX', label: 'ABA Clinic & CRM' }
    ],
    tags: ['Clinic Website', 'Custom CRM', 'Leads Management', 'Marketing & Ads Retainer']
  }
];

export const ProductionDemonstrationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Interactive ServiceNow preview simulation state
  const [snValue, setSnValue] = useState<number>(720);
  const [snGrowing, setSnGrowing] = useState<boolean>(false);
  const [snPeak, setSnPeak] = useState<boolean>(false);

  const handleTriggerRemediation = () => {
    if (snPeak) {
      setSnPeak(false);
      setSnValue(720);
      return;
    }
    setSnGrowing(true);
    const start = snValue;
    const target = 984;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(start + (target - start) * ease);
      setSnValue(val);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setSnGrowing(false);
        setSnPeak(true);
      }
    };
    requestAnimationFrame(step);
  };

  const activeDemo = DEMOS[activeIndex];

  // Restart video when active project changes
  useEffect(() => {
    if (videoRef.current && activeDemo.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeIndex, activeDemo.video]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const isServiceNow = activeDemo.id.startsWith('servicenow');

  return (
    <section
      id="selected-work"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-textured-light text-stone-900 border-b border-stone-300/80"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* ========================================================================= */}
        {/* Compact Header */}
        <ScrollReveal preset="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-300/80">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-semibold">
              // PRODUCTION PLATFORMS • LIVE DEMONSTRATIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-stone-900 mt-1">
              Engineered for real commercial impact.
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-stone-900 hover:text-[#FF6B00] transition-colors shrink-0 pb-1"
          >
            <span>View All 12+ Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </ScrollReveal>

        {/* Master-Detail Interactive Screening Console (Single Viewport Height) */}
        <ScrollReveal preset="fade-up" delay={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: High-Resolution Live Video Canvas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#090A0D] rounded-2xl overflow-hidden border border-stone-800 shadow-xl flex-1 flex flex-col justify-between group">
              {/* Minimal Browser Header */}
              <div className="h-9 bg-[#0E1015] border-b border-white/10 px-4 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                  <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>https://{activeDemo.domain}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-emerald-400">{isServiceNow ? 'POLARIS INSTANCE' : 'LIVE INSTANCE'}</span>
                  <span>•</span>
                  <span>{isServiceNow ? 'INTERACTIVE' : '1080P'}</span>
                </div>
              </div>

              {/* Viewport: Video or Interactive Polaris Dashboard */}
              <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                {isServiceNow ? (
                  <div className="w-full h-full">
                    <ServiceNowPolarisDashboard
                      displayedValue={snValue}
                      isGrowing={snGrowing}
                      reachedPeak={snPeak}
                      isProcessing={false}
                      showFinale={false}
                      onTriggerRemediation={handleTriggerRemediation}
                    />
                  </div>
                ) : (
                  <>
                    <video
                      key={activeDemo.id}
                      ref={videoRef}
                      src={activeDemo.video}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      poster={activeDemo.fallbackImage}
                      onClick={togglePlay}
                      className="w-full h-full object-cover object-top cursor-pointer"
                    />

                    {/* Pause Overlay */}
                    {!isPlaying && (
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md"
                        aria-label="Play video"
                      >
                        <Play className="w-5 h-5 fill-white translate-x-0.5" />
                      </button>
                    )}
                  </>
                )}

                {/* Bottom Tactile Hover Controls */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    {isServiceNow ? (
                      <button
                        type="button"
                        onClick={handleTriggerRemediation}
                        className="px-2.5 py-1 rounded-md bg-black/85 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold backdrop-blur-md hover:bg-black transition-colors"
                      >
                        {snPeak ? '↺ Reset Queue' : '⚡ Auto-Remediate Fleet'}
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="p-1.5 rounded-md bg-black/80 text-white backdrop-blur-md hover:bg-black transition-colors"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                        </button>

                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1.5 rounded-md bg-black/80 text-white backdrop-blur-md hover:bg-black transition-colors"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#FF6B00]" />}
                        </button>
                      </>
                    )}
                  </div>

                  {isServiceNow || !activeDemo.domainUrl ? (
                    <div className="pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 text-[11px] font-mono text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Enterprise IRM &bull; Confidential</span>
                    </div>
                  ) : (
                    <a
                      href={activeDemo.domainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 text-[11px] font-mono text-slate-300 backdrop-blur-md hover:text-[#FF6B00] transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="px-4 py-2 bg-[#0E1015] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="truncate">{activeDemo.category}</span>
                <span className="text-[#FF6B00] shrink-0 font-semibold">{activeDemo.metrics[0].value} {activeDemo.metrics[0].label}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Systems Ledger (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            {DEMOS.map((demo, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={demo.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-xl p-4 sm:p-4.5 border transition-all text-left relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#FAF9F5] border-stone-400/90 shadow-sm ring-1 ring-[#FF6B00]/30'
                      : 'bg-white/50 border-stone-300/50 hover:bg-white hover:border-stone-400 text-stone-600'
                  }`}
                >
                  {/* Row Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#FF6B00]' : 'text-stone-400'}`}>
                        {demo.number}
                      </span>
                      <h3 className={`font-bold font-display text-base sm:text-lg ${isActive ? 'text-stone-900' : 'text-stone-800'}`}>
                        {demo.title}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-stone-900 text-white font-semibold' : 'bg-stone-200/80 text-stone-600'
                    }`}>
                      {demo.metrics[0].value}
                    </span>
                  </div>

                  {/* Active Expansion Details */}
                  {isActive ? (
                    <div className="mt-2.5 space-y-3 pt-2.5 border-t border-stone-200/80">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {demo.summary}
                      </p>

                      <div className="flex items-center justify-between gap-4 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {demo.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-stone-200/80 text-stone-700 font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/work/${demo.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-stone-900 hover:text-[#FF6B00] transition-colors shrink-0"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-stone-500 font-mono truncate mt-1">
                      {demo.category} &bull; {demo.client}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductionDemonstrationsSection;
