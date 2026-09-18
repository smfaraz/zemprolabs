import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShieldCheck, Compass, Sparkles, Layers, Cpu } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

export const HomePlatformAndPricingTeaser: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeZone, setActiveZone] = useState<'managed' | 'custom' | 'ambient'>('ambient');
  const [beaconStatus, setBeaconStatus] = useState<'tracking' | 'sweeping'>('sweeping');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Emitter at top-center of the lighthouse tower
    let emitterX = width * 0.5;
    let emitterY = height * 0.18;

    let currentAngle = 90; // pointing downward into the cards
    let targetAngle = 90;
    let targetDistance = height * 0.7;
    let isUserInteracting = false;
    let idleTimer: ReturnType<typeof setTimeout>;
    let sweepTime = 0;

    // Atmospheric sea mist particles
    const particles: Particle[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.4,
      size: 1 + Math.random() * 2,
      baseAlpha: 0.1 + Math.random() * 0.25,
    }));

    const resizeHandler = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      emitterX = width * 0.5;
      emitterY = height * 0.18;
    };
    window.addEventListener('resize', resizeHandler);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dx = mouseX - emitterX;
      const dy = mouseY - emitterY;
      const rawAngle = Math.atan2(dy, dx) * (180 / Math.PI);

      targetAngle = rawAngle;
      targetDistance = Math.hypot(dx, dy);
      isUserInteracting = true;
      setBeaconStatus('tracking');

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isUserInteracting = false;
        setBeaconStatus('sweeping');
      }, 3500);
    };

    container.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Idle auto-sweep between left card and right card
      if (!isUserInteracting) {
        sweepTime += 0.012;
        // Oscillate smoothly across 45 to 135 degrees (left to right)
        targetAngle = 90 + Math.sin(sweepTime) * 38;
        targetDistance = height * 0.68 + Math.cos(sweepTime * 1.5) * 40;
      }

      // Smooth Angular Physics Interpolation
      let diff = targetAngle - currentAngle;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      currentAngle += diff * 0.065;

      const rad = (currentAngle * Math.PI) / 180;
      const beamSpreadRad = (36 * Math.PI) / 180;
      const beamLength = Math.max(targetDistance, height * 0.75);

      // Volumetric Light Beam (Mie Scattering simulation)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(emitterX, emitterY);
      const angle1 = rad - beamSpreadRad / 2;
      const angle2 = rad + beamSpreadRad / 2;

      const x1 = emitterX + Math.cos(angle1) * beamLength;
      const y1 = emitterY + Math.sin(angle1) * beamLength;
      const x2 = emitterX + Math.cos(angle2) * beamLength;
      const y2 = emitterY + Math.sin(angle2) * beamLength;

      ctx.lineTo(x1, y1);
      ctx.arc(emitterX, emitterY, beamLength, angle1, angle2);
      ctx.closePath();

      const beamGrad = ctx.createRadialGradient(
        emitterX,
        emitterY,
        0,
        emitterX,
        emitterY,
        beamLength
      );
      beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      beamGrad.addColorStop(0.08, 'rgba(255, 210, 140, 0.7)');
      beamGrad.addColorStop(0.25, 'rgba(255, 107, 0, 0.35)');
      beamGrad.addColorStop(0.55, 'rgba(255, 107, 0, 0.12)');
      beamGrad.addColorStop(0.85, 'rgba(0, 74, 173, 0.05)');
      beamGrad.addColorStop(1, 'rgba(5, 7, 13, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // Atmospheric mist particles caught in the beam
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pdx = p.x - emitterX;
        const pdy = p.y - emitterY;
        const pAngle = Math.atan2(pdy, pdx) * (180 / Math.PI);
        let pDiff = pAngle - currentAngle;
        while (pDiff < -180) pDiff += 360;
        while (pDiff > 180) pDiff -= 360;

        const inBeam = Math.abs(pDiff) < 18;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, inBeam ? p.size * 1.4 : p.size, 0, Math.PI * 2);
        ctx.fillStyle = inBeam
          ? `rgba(255, 235, 190, ${Math.min(0.9, p.baseAlpha * 3)})`
          : `rgba(148, 163, 184, ${p.baseAlpha * 0.25})`;
        ctx.fill();
        ctx.restore();
      });

      // Fresnel Lens Core Flare
      const coreGrad = ctx.createRadialGradient(emitterX, emitterY, 0, emitterX, emitterY, 28);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.25, 'rgba(255, 220, 130, 0.95)');
      coreGrad.addColorStop(0.6, 'rgba(255, 107, 0, 0.5)');
      coreGrad.addColorStop(1, 'rgba(255, 107, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(emitterX, emitterY, 28, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeHandler);
      container.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(148,163,184,0.08)] relative overflow-hidden select-none"
    >
      {/* Background Optical Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-85"
      />

      {/* Atmospheric Horizon Waterline SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-35"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.2)" />
            <stop offset="45%" stopColor="rgba(0,74,173,0.15)" />
            <stop offset="100%" stopColor="rgba(5,7,13,0.8)" />
          </linearGradient>
        </defs>

        {/* Ocean Waves */}
        <path
          d="M 0 140 Q 250 132, 500 140 T 1000 136 L 1000 600 L 0 600 Z"
          fill="url(#oceanGrad)"
        />
        <path
          d="M 0 155 Q 220 148, 480 156 T 1000 150"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="12, 8"
        />
        <path
          d="M 50 185 Q 300 178, 550 186 T 1000 180"
          stroke="rgba(6,182,212,0.2)"
          strokeWidth="2"
          fill="none"
        />

        {/* Central Lighthouse Silhouette */}
        <g id="mini-lighthouse" opacity="0.9">
          {/* Base Plinth */}
          <polygon points="482,142 518,142 522,136 478,136" fill="#1E293B" />
          {/* Tower Body */}
          <polygon points="484,136 516,136 512,115 488,115" fill="#CBD5E1" />
          <polygon points="488,115 512,115 509,98 491,98" fill="#FF6B00" />
          <polygon points="491,98 509,98 506,84 494,84" fill="#F8FAFC" />
          {/* Lantern Room */}
          <rect x="494" y="74" width="12" height="10" fill="#FFFBEB" />
          {/* Dome & Finial */}
          <path d="M 493 74 Q 500 66, 507 74 Z" fill="#0F172A" />
          <line x1="500" y1="66" x2="500" y2="58" stroke="#FF6B00" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono mb-4">
          <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>24/7 ACTIVE OVERWATCH &bull; TECHNICAL EXCELLENCE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
          Guiding your digital platform through rough waters.
        </h2>

        <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
          Whether maintaining an existing enterprise platform or architecting a mission-critical build from scratch, we eliminate technical fog with total operational accountability.
        </p>
      </div>

      {/* Two High-Tech Cockpit HUD Stations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        
        {/* Cockpit Station 01: Managed Digital Care */}
        <div
          onMouseEnter={() => setActiveZone('managed')}
          onMouseLeave={() => setActiveZone('ambient')}
          className="rounded-xl bg-[#070B14]/85 backdrop-blur-xl border border-white/[0.08] hover:border-[#FF6B00]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
        >
          {/* Corner Crosshair Brackets (+) */}
          <span className="absolute top-2 left-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute top-2 right-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute bottom-2 left-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>
          <span className="absolute bottom-2 right-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#FF6B00]/50 transition-colors">+</span>

          {/* Top Laser Accent */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* HUD Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#FF6B00] font-semibold tracking-wider">
                  STATION 01 //
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25">
                  MANAGED DIGITAL CARE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>99.98% SLA ACTIVE</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Already have a digital platform?
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mt-2">
                Continuous 24/7 technical guardianship—handling active maintenance, security patches, store operations, and performance tuning so your platform never drifts.
              </p>
            </div>

            {/* Streamlined Feature Rows */}
            <div className="space-y-1.5 pt-1">
              {[
                { code: '01', title: 'Production Oversight', detail: '24/7 Uptime Monitoring' },
                { code: '02', title: 'E-Commerce Operations', detail: 'Zero-Downtime Releases' },
                { code: '03', title: 'Cloud Infrastructure', detail: 'Automated Daily Backups' },
                { code: '04', title: 'Security & Vulnerabilities', detail: 'Immediate Patch Triage' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-2.5 text-xs text-[#F8FAFC]">
                    <span className="font-mono text-[10px] text-[#FF6B00]/70 font-semibold">{item.code} //</span>
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-95 group/btn"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[10px] font-mono text-[#64748B]">
              STATUS: ONLINE
            </span>
          </div>
        </div>

        {/* Cockpit Station 02: Tailored Architecture & Builds */}
        <div
          onMouseEnter={() => setActiveZone('custom')}
          onMouseLeave={() => setActiveZone('ambient')}
          className="rounded-xl bg-[#070B14]/85 backdrop-blur-xl border border-white/[0.08] hover:border-[#38BDF8]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
        >
          {/* Corner Crosshair Brackets (+) */}
          <span className="absolute top-2 left-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute top-2 right-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute bottom-2 left-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>
          <span className="absolute bottom-2 right-2.5 font-mono text-[10px] text-white/20 select-none pointer-events-none group-hover:text-[#38BDF8]/50 transition-colors">+</span>

          {/* Top Laser Accent */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* HUD Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
                  STATION 02 //
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/25">
                  TAILORED ARCHITECTURE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#38BDF8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>100% CODE OWNERSHIP</span>
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
            <div className="space-y-1.5 pt-1">
              {[
                { code: '01', title: 'Custom Full-Stack Builds', detail: 'Web, Mobile & SaaS' },
                { code: '02', title: 'Direct Cloud Ownership', detail: 'Zero Vendor Lock-In' },
                { code: '03', title: 'Scope Blueprinting', detail: 'Clear Milestones & Delivery' },
                { code: '04', title: 'Senior Technical Leads', detail: 'Direct 1-on-1 Access' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-2.5 text-xs text-[#F8FAFC]">
                    <span className="font-mono text-[10px] text-[#38BDF8]/70 font-semibold">{item.code} //</span>
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#0B1528] text-white hover:bg-[#0e1c38] border border-[#38BDF8]/35 hover:border-[#38BDF8]/70 transition-all active:scale-95 group/btn shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[10px] font-mono text-[#64748B]">
              DISCOVERY READY
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
