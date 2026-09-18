import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

export const LighthouseShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Status for user feedback
  const [beaconStatus, setBeaconStatus] = useState<'tracking' | 'sweeping'>('sweeping');
  const [illuminatedSector, setIlluminatedSector] = useState<string>('Production Ready');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Lighthouse coordinates (positioned on a cliff at the lower-left / center-left)
    // Emitter is at the top of the lighthouse lantern room
    let emitterX = width * 0.28;
    let emitterY = height * 0.42;

    // Target angle and current smoothed physics angle
    let currentAngle = -15; // degrees
    let targetAngle = -15;
    let targetDistance = 300;
    let isUserInteracting = false;
    let idleTimer: NodeJS.Timeout;
    let sweepTime = 0;

    // Dust & sea-mist particles caught in the beam
    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.2 - Math.random() * 0.5, // gentle upward drift like sea mist
      size: 1 + Math.random() * 2,
      baseAlpha: 0.1 + Math.random() * 0.2
    }));

    const resizeHandler = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      emitterX = width * 0.28;
      emitterY = height * 0.42;
    };
    window.addEventListener('resize', resizeHandler);

    // Mouse movement tracking with physics
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

      // Update illuminated sector based on where the cursor points
      if (mouseY < height * 0.35) {
        setIlluminatedSector('Cloud Infrastructure // 99.98% SLA');
      } else if (mouseX > width * 0.65) {
        setIlluminatedSector('E-Commerce Architecture // Zero Downtime');
      } else {
        setIlluminatedSector('Active Navigation // 24/7 Managed Care');
      }

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isUserInteracting = false;
        setBeaconStatus('sweeping');
      }, 3500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Main physics and rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Idle auto-sweep when user isn't moving mouse
      if (!isUserInteracting) {
        sweepTime += 0.015;
        // Oscillate smoothly between -65 and 45 degrees
        targetAngle = Math.sin(sweepTime) * 48 - 10;
        targetDistance = width * 0.65 + Math.cos(sweepTime * 1.5) * 80;
      }

      // 2. Physics Angular Interpolation (Shortest Path Damping)
      let diff = targetAngle - currentAngle;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      currentAngle += diff * 0.075; // smooth rotational inertia

      const rad = (currentAngle * Math.PI) / 180;
      const beamSpreadRad = (32 * Math.PI) / 180; // 32 degree volumetric cone
      const beamLength = Math.max(targetDistance, width * 0.85);

      // 3. Render Volumetric Fog / Light Beam (Mie Scattering)
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

      // Multi-stop volumetric atmospheric gradient
      const beamGrad = ctx.createRadialGradient(
        emitterX,
        emitterY,
        0,
        emitterX,
        emitterY,
        beamLength
      );
      beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      beamGrad.addColorStop(0.06, 'rgba(255, 220, 150, 0.85)');
      beamGrad.addColorStop(0.2, 'rgba(255, 140, 0, 0.45)');
      beamGrad.addColorStop(0.5, 'rgba(255, 107, 0, 0.18)');
      beamGrad.addColorStop(0.8, 'rgba(0, 74, 173, 0.08)');
      beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // 4. Secondary Soft Outer Glow Beam
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(emitterX, emitterY);
      const wideAngle1 = rad - (beamSpreadRad * 1.5) / 2;
      const wideAngle2 = rad + (beamSpreadRad * 1.5) / 2;
      ctx.arc(emitterX, emitterY, beamLength * 0.9, wideAngle1, wideAngle2);
      ctx.closePath();

      const wideGrad = ctx.createRadialGradient(
        emitterX,
        emitterY,
        0,
        emitterX,
        emitterY,
        beamLength * 0.9
      );
      wideGrad.addColorStop(0, 'rgba(255, 200, 100, 0.35)');
      wideGrad.addColorStop(0.4, 'rgba(255, 107, 0, 0.12)');
      wideGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = wideGrad;
      ctx.fill();
      ctx.restore();

      // 5. Target Illumination Pool (Spotlight on cursor/target point)
      const targetSpotX = emitterX + Math.cos(rad) * targetDistance;
      const targetSpotY = emitterY + Math.sin(rad) * targetDistance;

      const spotGrad = ctx.createRadialGradient(
        targetSpotX,
        targetSpotY,
        0,
        targetSpotX,
        targetSpotY,
        140
      );
      spotGrad.addColorStop(0, 'rgba(255, 235, 180, 0.3)');
      spotGrad.addColorStop(0.4, 'rgba(255, 107, 0, 0.12)');
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(targetSpotX, targetSpotY, 140, 0, Math.PI * 2);
      ctx.fillStyle = spotGrad;
      ctx.fill();
      ctx.restore();

      // 6. Dust Motes & Sea Mist Particles Floating in Light
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Check if particle is inside the conical beam
        const pdx = p.x - emitterX;
        const pdy = p.y - emitterY;
        const pAngle = Math.atan2(pdy, pdx) * (180 / Math.PI);
        let pDiff = pAngle - currentAngle;
        while (pDiff < -180) pDiff += 360;
        while (pDiff > 180) pDiff -= 360;

        const pDist = Math.hypot(pdx, pdy);
        const inBeam = Math.abs(pDiff) < 16 && pDist < beamLength;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, inBeam ? p.size * 1.5 : p.size, 0, Math.PI * 2);
        ctx.fillStyle = inBeam
          ? `rgba(255, 240, 200, ${Math.min(1, p.baseAlpha * 3.5)})`
          : `rgba(148, 163, 184, ${p.baseAlpha * 0.3})`;
        ctx.fill();
        ctx.restore();
      });

      // 7. Core Emitter Flare (intense Fresnel lens source glare)
      const coreGrad = ctx.createRadialGradient(emitterX, emitterY, 0, emitterX, emitterY, 35);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.2, 'rgba(255, 220, 120, 0.9)');
      coreGrad.addColorStop(0.6, 'rgba(255, 107, 0, 0.45)');
      coreGrad.addColorStop(1, 'rgba(255, 107, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(emitterX, emitterY, 35, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl bg-[#070A12] border border-[rgba(148,163,184,0.2)] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden group select-none"
    >
      {/* Deep Coastal Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050A] via-[#070B14] to-[#0A101D]"></div>

      {/* Atmospheric Starry Field */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Dynamic Physics Canvas for the Volumetric Light Beam */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      />

      {/* Realistic Detailed SVG Lighthouse & Rocky Coastal Cliff */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Rocky Cliff Gradient */}
          <linearGradient id="cliffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="40%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#05070D" />
          </linearGradient>

          {/* Tower Masonry Shading (Cylindrical highlight) */}
          <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="25%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="85%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0B0F17" />
          </linearGradient>

          {/* Tower Red Accent Band Gradient */}
          <linearGradient id="redBandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F1D1D" />
            <stop offset="25%" stopColor="#FF6B00" />
            <stop offset="60%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#450A0A" />
          </linearGradient>

          {/* Glass Lantern Housing Reflection */}
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="50%" stopColor="rgba(255,200,100,0.4)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0.9)" />
          </linearGradient>

          {/* Ocean Waves Highlight */}
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.35)" />
            <stop offset="50%" stopColor="rgba(0,74,173,0.25)" />
            <stop offset="100%" stopColor="rgba(5,7,13,0.9)" />
          </linearGradient>

          {/* Soft Shadow Filter */}
          <filter id="cliffShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="-5" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* 1. Distant Ocean Water & Ambient Horizon */}
        <path
          d="M 0 450 Q 200 445, 400 450 T 800 448 L 800 600 L 0 600 Z"
          fill="url(#waterGrad)"
          opacity="0.85"
        />

        {/* Dynamic Ocean Wave Foam Lines */}
        <path
          d="M 0 465 Q 180 460, 360 468 T 800 462"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8, 6"
        />
        <path
          d="M 50 495 Q 260 488, 480 496 T 800 492"
          stroke="rgba(6,182,212,0.25)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 535 Q 200 528, 450 536 T 800 530"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          fill="none"
        />

        {/* 2. Rugged Coastal Cliff Outcrop (supporting the lighthouse) */}
        <g filter="url(#cliffShadow)">
          {/* Main Rock Mass */}
          <polygon
            points="0,380 90,360 160,375 224,370 270,385 330,420 370,490 400,600 0,600"
            fill="url(#cliffGrad)"
          />
          {/* Jagged Geological Strata Lines */}
          <path
            d="M 30 400 L 120 385 L 180 420 L 250 400 L 320 450 L 350 550"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 70 440 L 160 430 L 220 470 L 290 460 L 320 540"
            stroke="rgba(0,0,0,0.6)"
            strokeWidth="3"
            fill="none"
          />
          {/* Crashing Waves Sea Foam at Cliff Base */}
          <path
            d="M 280 440 Q 320 425, 340 450 Q 370 470, 360 510"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* 3. The Lighthouse Architectural Structure */}
        <g id="lighthouse-tower">
          {/* Stone Base Plinth */}
          <polygon points="180,372 268,372 276,360 172,360" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
          <rect x="175" y="352" width="98" height="8" rx="2" fill="#334155" />

          {/* Tapered Main Tower Body */}
          {/* Bottom White Section */}
          <polygon points="180,352 268,352 262,310 186,310" fill="url(#towerGrad)" />
          {/* Red/Orange Band */}
          <polygon points="186,310 262,310 256,270 192,270" fill="url(#redBandGrad)" />
          {/* Middle White Section */}
          <polygon points="192,270 256,270 250,225 198,225" fill="url(#towerGrad)" />
          {/* Top Red/Orange Band */}
          <polygon points="198,225 250,225 245,190 203,190" fill="url(#redBandGrad)" />

          {/* Tower Windows */}
          <rect x="220" y="325" width="8" height="14" rx="3" fill="#0B0F17" stroke="#FF6B00" strokeWidth="1" />
          <rect x="221" y="245" width="6" height="12" rx="3" fill="#0B0F17" stroke="#FF6B00" strokeWidth="0.8" />

          {/* Gallery Deck Cornice & Corbel Supports */}
          <polygon points="196,190 252,190 258,180 190,180" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          {/* Gallery Railing */}
          <line x1="188" y1="172" x2="260" y2="172" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="190" y1="180" x2="190" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="202" y1="180" x2="202" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="214" y1="180" x2="214" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="224" y1="180" x2="224" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="234" y1="180" x2="234" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="246" y1="180" x2="246" y2="172" stroke="#94A3B8" strokeWidth="1" />
          <line x1="258" y1="180" x2="258" y2="172" stroke="#94A3B8" strokeWidth="1" />

          {/* Lantern Room (Glass Chamber holding Fresnel Lens) */}
          <rect x="200" y="152" width="48" height="28" fill="url(#glassGrad)" stroke="#64748B" strokeWidth="1" />
          {/* Glass Astragals / Panes */}
          <line x1="212" y1="152" x2="212" y2="180" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="224" y1="152" x2="224" y2="180" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="236" y1="152" x2="236" y2="180" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="200" y1="166" x2="248" y2="166" stroke="#0F172A" strokeWidth="1" />

          {/* Copper Roof Dome & Cupola */}
          <path d="M 198 152 Q 224 130, 250 152 Z" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
          {/* Finial Ball & Lightning Rod Spire */}
          <circle cx="224" cy="134" r="3" fill="#FF6B00" />
          <line x1="224" y1="131" x2="224" y2="116" stroke="#FF6B00" strokeWidth="1.5" />

          {/* Golden Fresnel Lens Glow Housing */}
          <circle cx="224" cy="166" r="7" fill="#FFFBEB" />
          <circle cx="224" cy="166" r="14" fill="rgba(255,107,0,0.5)" />
        </g>

        {/* Subtle Constellation / Maritime Tech Points */}
        <g id="constellation" opacity="0.65">
          <circle cx="580" cy="120" r="2.5" fill="#38BDF8" />
          <text x="592" y="124" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
            LAT 17.3850° N
          </text>

          <circle cx="680" cy="200" r="2.5" fill="#10B981" />
          <text x="692" y="204" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
            99.98% UPTIME
          </text>

          <circle cx="490" cy="250" r="2" fill="#FF6B00" />
          <text x="502" y="254" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
            CORE VITALS &lt; 0.7s
          </text>
        </g>
      </svg>

      {/* Top HUD Bar with Real-time Navigation Telemetry */}
      <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 z-30 flex items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05070D]/80 backdrop-blur-md border border-[rgba(148,163,184,0.18)] text-xs font-mono text-white">
          <Compass className="w-3.5 h-3.5 text-[#FF6B00] animate-spin-slow" />
          <span className="font-semibold text-[#FF6B00]">ZEMPRO BEACON</span>
          <span className="text-[#64748B]">//</span>
          <span className="text-[11px] text-[#94A3B8] hidden sm:inline">
            {beaconStatus === 'tracking' ? 'CURSOR LOCKED' : 'ROTATING PATROL'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#05070D]/80 backdrop-blur-md border border-[rgba(148,163,184,0.18)] text-[11px] font-mono text-[#10B981]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>OPTICAL PHYSICS ENGAGED</span>
        </div>
      </div>

      {/* Bottom Floating Telemetry Card showing what the beam illuminates */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 z-30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-[#0B0F17]/85 backdrop-blur-md border border-[rgba(148,163,184,0.18)] pointer-events-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">
              // ILLUMINATING TARGET
            </div>
            <div className="text-xs sm:text-sm font-bold font-display text-white">
              {illuminatedSector}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-[#94A3B8] border-t sm:border-t-0 pt-2 sm:pt-0 border-[rgba(148,163,184,0.1)]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Active Overwatch</span>
          </span>
          <span className="text-[10px] text-[#FF6B00] hidden md:inline">
            Move mouse to aim beam
          </span>
        </div>
      </div>
    </div>
  );
};
