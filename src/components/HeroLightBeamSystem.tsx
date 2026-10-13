import React, { useEffect, useRef, useState, useCallback } from 'react';
import { OpticalTerminal } from './OpticalTerminal';

interface HeroLightBeamSystemProps {
  children: React.ReactNode;
}

export const HeroLightBeamSystem: React.FC<HeroLightBeamSystemProps> = ({ children }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Emitter position relative to the hero container
  const [emitterPos, setEmitterPos] = useState<{ x: number; y: number }>({ x: 900, y: 120 });
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number; active: boolean }>({
    x: 350,
    y: 180,
    active: true
  });
  const [targetAngle, setTargetAngle] = useState<number>(180);

  const emitterPosRef = useRef(emitterPos);
  emitterPosRef.current = emitterPos;

  const pointerPosRef = useRef(pointerPos);
  pointerPosRef.current = pointerPos;

  const handleEmitterUpdate = useCallback((x: number, y: number) => {
    setEmitterPos({ x, y });
    emitterPosRef.current = { x, y };
  }, []);

  // Real-time zero-delay pointer tracking
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    let rafId: number | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pointerPosRef.current = { x, y, active: true };

      // Calculate angle
      const dx = x - emitterPosRef.current.x;
      const dy = y - emitterPosRef.current.y;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setPointerPos({ x, y, active: true });
          setTargetAngle(angle);
          rafId = null;
        });
      }
    };

    const handlePointerLeave = () => {
      pointerPosRef.current = { ...pointerPosRef.current, active: false };
      setPointerPos((prev) => ({ ...prev, active: false }));
    };

    heroEl.addEventListener('pointermove', handlePointerMove, { passive: true });
    heroEl.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      heroEl.removeEventListener('pointermove', handlePointerMove);
      heroEl.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  // Zero-delay physics canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    if (!canvas || !heroEl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = heroEl.clientWidth;
      canvas.height = heroEl.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawBeam = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const curPointer = pointerPosRef.current;
      const curEmitter = emitterPosRef.current;

      const targetX = curPointer.active ? curPointer.x : canvas.width * 0.35;
      const targetY = curPointer.active ? curPointer.y : canvas.height * 0.35;

      const originX = curEmitter.x;
      const originY = curEmitter.y;

      const dx = targetX - originX;
      const dy = targetY - originY;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      // Volumetric beam dimensions
      const startWidth = 8;
      const endWidth = Math.min(260, Math.max(160, dist * 0.35));

      const perpAngle = angle + Math.PI / 2;

      // 4 corners of the light trapezoid
      const x1 = originX + Math.cos(perpAngle) * (startWidth / 2);
      const y1 = originY + Math.sin(perpAngle) * (startWidth / 2);
      const x2 = originX - Math.cos(perpAngle) * (startWidth / 2);
      const y2 = originY - Math.sin(perpAngle) * (startWidth / 2);

      const x3 = targetX - Math.cos(perpAngle) * (endWidth / 2);
      const y3 = targetY - Math.sin(perpAngle) * (endWidth / 2);
      const x4 = targetX + Math.cos(perpAngle) * (endWidth / 2);
      const y4 = targetY + Math.sin(perpAngle) * (endWidth / 2);

      // 1. Soft atmospheric light beam body
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x4, y4);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x2, y2);
      ctx.closePath();

      const beamGrad = ctx.createRadialGradient(originX, originY, 0, targetX, targetY, dist * 1.1);
      beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      beamGrad.addColorStop(0.08, 'rgba(255, 140, 0, 0.7)');
      beamGrad.addColorStop(0.3, 'rgba(255, 107, 0, 0.25)');
      beamGrad.addColorStop(0.7, 'rgba(6, 182, 212, 0.1)');
      beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // 2. Focused Intense Center Laser Core
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(targetX + Math.cos(perpAngle) * (endWidth * 0.3), targetY + Math.sin(perpAngle) * (endWidth * 0.3));
      ctx.lineTo(targetX - Math.cos(perpAngle) * (endWidth * 0.3), targetY - Math.sin(perpAngle) * (endWidth * 0.3));
      ctx.closePath();

      const coreGrad = ctx.createLinearGradient(originX, originY, targetX, targetY);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.2, 'rgba(255, 180, 50, 0.8)');
      coreGrad.addColorStop(0.7, 'rgba(255, 107, 0, 0.3)');
      coreGrad.addColorStop(1, 'rgba(255, 107, 0, 0.05)');

      ctx.fillStyle = coreGrad;
      ctx.fill();
      ctx.restore();

      // 3. Illuminated Target Pool (Spotlight landing at pointer)
      const spotGrad = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, 170);
      spotGrad.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      spotGrad.addColorStop(0.25, 'rgba(255, 140, 0, 0.25)');
      spotGrad.addColorStop(0.6, 'rgba(6, 182, 212, 0.08)');
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(targetX, targetY, 170, 0, Math.PI * 2);
      ctx.fillStyle = spotGrad;
      ctx.fill();
      ctx.restore();

      // 4. Source Flare at Terminal Aperture
      const flareGrad = ctx.createRadialGradient(originX, originY, 0, originX, originY, 30);
      flareGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      flareGrad.addColorStop(0.3, 'rgba(255, 140, 0, 0.9)');
      flareGrad.addColorStop(1, 'rgba(255, 107, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(originX, originY, 30, 0, Math.PI * 2);
      ctx.fillStyle = flareGrad;
      ctx.fill();
      ctx.restore();

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(drawBeam);
      }
    };

    drawBeam();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const posX = pointerPos.active ? pointerPos.x : 350;
  const posY = pointerPos.active ? pointerPos.y : 180;

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden cursor-crosshair">
      {/* Background Ambience */}
      <div className="ambient-glow -top-32 -left-32 w-96 h-96 bg-[#FF6B00]/15"></div>
      <div className="ambient-glow top-48 -right-32 w-96 h-96 bg-[#004AAD]/20"></div>

      {/* Dynamic 0-Latency Light Beam Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      />

      {/* Base Normal Content */}
      <div className="relative z-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {children}
          </div>

          {/* Right Optical Terminal Box with Emitter */}
          <div className="lg:col-span-5 relative z-20">
            <OpticalTerminal
              onEmitterPositionUpdate={handleEmitterUpdate}
              targetAngle={targetAngle}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          SECRET BLUEPRINT REVEAL LAYER
          Only visible where the spotlight shines!
          Uses dynamic radial-gradient mask centered on cursor
          ======================================================== */}
      <div
        className="absolute inset-0 z-15 pointer-events-none select-none transition-opacity duration-150"
        style={{
          maskImage: `radial-gradient(circle 210px at ${posX}px ${posY}px, black 35%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 210px at ${posX}px ${posY}px, black 35%, transparent 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto h-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center h-full">
            {/* Hidden Blueprint Layer Over Left Text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 relative font-mono">
              {/* Secret Tech Stamp Behind Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#06B6D4] bg-[#06B6D4]/20 text-[#06B6D4] text-xs font-bold tracking-widest shadow-[0_0_15px_#06B6D4]">
                <span>[ VERIFIED SPEC: ZERO DEBT // ZERO LEGACY BLOAT ]</span>
              </div>

              {/* Secret Blueprint Callouts Around Heading */}
              <div className="space-y-3 relative">
                <div className="absolute -top-6 left-0 text-[11px] text-[#06B6D4] font-bold tracking-widest bg-black/80 px-2 py-0.5 rounded border border-[#06B6D4]/50 shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                  &lt;CODEBASE&gt; 100% CLIENT IP OWNERSHIP &bull; CLEAN REPO HANDOFF
                </div>

                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white/10 opacity-0 pointer-events-none">
                  We Build. You Grow!
                </div>

                <div className="text-xs text-[#10B981] font-mono tracking-wider bg-black/80 p-2 rounded-lg border border-[#10B981]/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  // MEASURABLE OUTCOMES: +38% CHECKOUT SPEED &bull; $4.2M+ COMMERCE PROCESSED &bull; 99.98% MONITORED UPTIME
                </div>
              </div>

              {/* Secret Architect Notes Over Description */}
              <div className="p-3 rounded-xl bg-black/90 border-2 border-[#FF6B00] shadow-[0_0_25px_rgba(255,107,0,0.5)] space-y-1 max-w-[470px]">
                <div className="text-[10px] text-[#FF6B00] font-bold tracking-wider">
                  [ ARCHITECT DIRECTIVE // CONFIDENTIAL ]
                </div>
                <div className="text-xs text-white leading-relaxed font-semibold">
                  Zero junior middlemen. You work directly with senior full-stack architects who design your schema and write production code.
                </div>
              </div>

              {/* Secret SLA Verification Behind Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-3 py-1.5 rounded bg-[#10B981]/20 border border-[#10B981] text-[#10B981] text-xs font-bold shadow-[0_0_15px_#10B981]">
                  [ SLA GUARANTEE: &lt; 24H EMERGENCY HOTFIX DISPATCH ]
                </div>
                <div className="px-3 py-1.5 rounded bg-[#004AAD]/40 border border-[#38BDF8] text-[#38BDF8] text-xs font-bold">
                  [ DIRECT SLACK / WHATSAPP CHANNEL ]
                </div>
              </div>

              {/* Secret Technical Schematics Watermark */}
              <div className="text-[10px] text-[#06B6D4]/80 tracking-widest pt-3 border-t border-[#06B6D4]/40 flex items-center justify-between">
                <span>SYS_VERIFY: 0 THIRD-PARTY CONTRACTORS</span>
                <span>SECURITY AUDIT: 0 KNOWN CVEs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
