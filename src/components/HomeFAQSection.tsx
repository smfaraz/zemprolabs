import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Activity } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do we get started with a new project?',
    answer:
      'We start with a direct technical discovery call between you and a senior engineering lead—no sales middlemen. We review your requirements, technical architecture, and milestones, then provide a comprehensive scope blueprint within 48 hours.',
    category: 'Process',
  },
  {
    question: 'Do we own 100% of the code and intellectual property?',
    answer:
      'Yes, absolutely. All custom source code, repositories, cloud infrastructure configurations, and digital assets are 100% your property from day one with zero platform lock-in or proprietary licensing traps.',
    category: 'Ownership',
  },
  {
    question: 'How does 24/7 Managed Digital Care work?',
    answer:
      'Our team provides active operational guardianship: 24/7 uptime monitoring, critical security patching, automated daily backups, e-commerce storefront maintenance, and rapid technical triage with guaranteed SLA response windows.',
    category: 'Maintenance',
  },
  {
    question: 'Can you work with our existing codebase or in-house team?',
    answer:
      'Yes. Many of our clients have existing platforms or partial in-house teams. We seamlessly integrate into your Git workflows, CI/CD pipelines, and communication channels (Slack, Linear, GitHub) to accelerate delivery without disrupting ongoing operations.',
    category: 'Collaboration',
  },
  {
    question: 'What technologies and frameworks do you specialize in?',
    answer:
      'Our core stack covers modern full-stack web and mobile engineering: React, Next.js, Node.js, TypeScript, PostgreSQL, Shopify Liquid & Hydrogen, cloud infrastructure (AWS, GCP, Cloudflare), and enterprise systems integration.',
    category: 'Engineering',
  },
  {
    question: 'What is your typical project delivery timeline?',
    answer:
      'Timelines depend on scope: focused e-commerce storefronts and MVPs typically deploy within 3–6 weeks, while complex full-stack SaaS platforms or enterprise migrations span 8–14 weeks, delivered in two-week functional sprint demos.',
    category: 'Timeline',
  },
];

interface Fish {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  length: number;
  color: string;
  glowColor: string;
  tailPhase: number;
  tailSpeed: number;
  waveAmp: number;
}

interface Bubble {
  x: number;
  y: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const HomeFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Canvas Underwater Simulation: Bioluminescent Fish & Deep-Sea Currents
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const fishPalette = [
      { color: '#06B6D4', glow: 'rgba(6,182,212,0.4)' },
      { color: '#38BDF8', glow: 'rgba(56,189,248,0.4)' },
      { color: '#10B981', glow: 'rgba(16,185,129,0.35)' },
      { color: '#FF6B00', glow: 'rgba(255,107,0,0.35)' },
    ];

    // Create 7 graceful bioluminescent fish
    const fishes: Fish[] = Array.from({ length: 7 }, (_, i) => {
      const palette = fishPalette[i % fishPalette.length];
      const direction = Math.random() > 0.3 ? 1 : -1;
      return {
        x: Math.random() * width,
        y: 80 + Math.random() * (height - 160),
        vx: direction * (0.6 + Math.random() * 0.7),
        vy: (Math.random() - 0.5) * 0.25,
        size: 3 + Math.random() * 2.5,
        length: 22 + Math.random() * 16,
        color: palette.color,
        glowColor: palette.glow,
        tailPhase: Math.random() * Math.PI * 2,
        tailSpeed: 0.08 + Math.random() * 0.06,
        waveAmp: 3 + Math.random() * 3,
      };
    });

    // Deep-sea rising bubbles
    const bubbles: Bubble[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -0.3 - Math.random() * 0.5,
      radius: 1 + Math.random() * 2,
      alpha: 0.1 + Math.random() * 0.25,
    }));

    // Sonar wave pulse
    let sonarRadius = 0;
    let sonarAlpha = 0.3;

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Sonar concentric ping in background
      sonarRadius += 0.8;
      sonarAlpha = Math.max(0, 0.35 * (1 - sonarRadius / 450));
      if (sonarRadius > 450) {
        sonarRadius = 0;
        sonarAlpha = 0.35;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(width * 0.15, height * 0.45, sonarRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(6, 182, 212, ${sonarAlpha})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.restore();

      // 2. Rising deep-sea bubbles
      bubbles.forEach((b) => {
        b.y += b.vy;
        if (b.y < 0) {
          b.y = height;
          b.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${b.alpha})`;
        ctx.fill();
        ctx.restore();
      });

      // 3. Render and animate each Bioluminescent Fish
      fishes.forEach((fish) => {
        fish.x += fish.vx;
        fish.y += fish.vy;
        fish.tailPhase += fish.tailSpeed;

        // Wrap around viewport
        if (fish.vx > 0 && fish.x > width + 50) fish.x = -50;
        if (fish.vx < 0 && fish.x < -50) fish.x = width + 50;
        if (fish.y < 60) fish.vy = Math.abs(fish.vy);
        if (fish.y > height - 60) fish.vy = -Math.abs(fish.vy);

        const dir = fish.vx >= 0 ? 1 : -1;
        const tailOffset = Math.sin(fish.tailPhase) * fish.waveAmp;

        ctx.save();
        ctx.translate(fish.x, fish.y);

        // Ambient glow halo behind fish
        const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, fish.length * 1.3);
        glowGrad.addColorStop(0, fish.glowColor);
        glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(0, 0, fish.length * 1.3, 0, Math.PI * 2);
        ctx.fill();

        // Sleek Fish Body Spine (Streamlined needle shape)
        ctx.beginPath();
        ctx.strokeStyle = fish.color;
        ctx.lineWidth = 1.75;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Head
        ctx.moveTo(dir * (fish.length * 0.5), 0);
        // Midbody
        ctx.quadraticCurveTo(
          0,
          tailOffset * 0.4,
          -dir * (fish.length * 0.4),
          tailOffset * 0.8
        );
        // Caudal fin tip
        ctx.lineTo(-dir * (fish.length * 0.6), tailOffset * 1.2);
        ctx.stroke();

        // Caudal Tail Fin Flukes (Bioluminescent V-shape)
        ctx.beginPath();
        ctx.moveTo(-dir * (fish.length * 0.45), tailOffset * 0.8);
        ctx.lineTo(-dir * (fish.length * 0.68), tailOffset * 1.2 - 3.5);
        ctx.moveTo(-dir * (fish.length * 0.45), tailOffset * 0.8);
        ctx.lineTo(-dir * (fish.length * 0.68), tailOffset * 1.2 + 3.5);
        ctx.strokeStyle = fish.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Glowing Bioluminescent Eye
        ctx.beginPath();
        ctx.arc(dir * (fish.length * 0.35), -1, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = fish.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.08)] bg-[#05070D] relative overflow-hidden select-none"
    >
      {/* Underwater Interactive Canvas with Swimming Bioluminescent Fish */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-45"
      />

      {/* Deep-sea oceanic ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#06B6D4]/[0.025] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#004AAD]/[0.035] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 text-[#06B6D4] text-xs font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>DEPTH: 120M &bull; DEEP-SEA ARCHITECTURAL DIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our engineering standards, 100% codebase ownership, managed operational care, and delivery timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#090E1A]/95 border-[#06B6D4]/40 shadow-[0_4px_25px_rgba(6,182,212,0.1)]'
                    : 'bg-[#070B14]/85 border-white/[0.06] hover:border-white/[0.14] hover:bg-[#080D18]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-semibold transition-colors shrink-0 ${
                        isOpen ? 'text-[#06B6D4]' : 'text-[#64748B] group-hover:text-slate-300'
                      }`}
                    >
                      0{idx + 1} //
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-white tracking-tight group-hover:text-[#06B6D4] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#06B6D4]/15 border-[#06B6D4]/40 text-[#06B6D4] rotate-180'
                        : 'bg-white/[0.03] border-white/[0.08] text-[#94A3B8] group-hover:text-white group-hover:border-white/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/[0.04]">
                    <p className="pl-8 sm:pl-9">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro-banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#090E1A]/70 backdrop-blur-sm border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#06B6D4] shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300">
              Have a custom or architecture-specific question?
            </span>
          </div>
          <a
            href="mailto:info@zemprolabs.com"
            className="text-xs font-mono text-[#06B6D4] hover:underline font-semibold whitespace-nowrap"
          >
            Ask our engineering team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
