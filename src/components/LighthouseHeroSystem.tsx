import React, { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface LighthouseHeroSystemProps {
  children: React.ReactNode;
  illuminatedContent?: React.ReactNode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

export const LighthouseHeroSystem: React.FC<LighthouseHeroSystemProps> = ({ children, illuminatedContent }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lanternLensRef = useRef<SVGCircleElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);

  // Emitter location in hero coordinates (Ref to avoid React re-renders)
  const emitterRef = useRef<{ x: number; y: number }>({ x: 920, y: 220 });

  // Beacon Pulse Shockwaves & Optical Flash on Click/Tap
  const flashRef = useRef<number>(0);
  const pulsesRef = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number; speed: number }>>([]);
  const hasInteractedRef = useRef<boolean>(false);

  // Physics points (Target and Smooth Interpolated Current)
  const targetPosRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 320,
    y: 190,
    active: false // Starts in cinematic patrol sweep until user touches/moves
  });
  const currentPosRef = useRef<{ x: number; y: number }>({ x: 320, y: 190 });
  const currentAngleRef = useRef<number>(-140);

  // Dynamic measurement of lighthouse lens emitter (Pixel-perfect across all screen sizes)
  const updateEmitter = () => {
    if (!lanternLensRef.current || !heroRef.current) return;
    const lensRect = lanternLensRef.current.getBoundingClientRect();
    const heroRect = heroRef.current.getBoundingClientRect();

    emitterRef.current = {
      x: lensRect.left + lensRect.width / 2 - heroRect.left,
      y: lensRect.top + lensRect.height / 2 - heroRect.top
    };
  };

  useEffect(() => {
    updateEmitter();
    window.addEventListener('resize', updateEmitter);

    // ResizeObserver catches layout shifts when images, fonts, or mobile views load
    let ro: ResizeObserver | null = null;
    if (heroRef.current && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateEmitter();
      });
      ro.observe(heroRef.current);
    }

    const timer = setTimeout(updateEmitter, 400);
    return () => {
      window.removeEventListener('resize', updateEmitter);
      if (ro) ro.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Multi-Input Listener: Mouse, Pointer & Touch (Fully responsive with cached rect for 0ms lag)
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    let heroRect = heroEl.getBoundingClientRect();
    const updateHeroRect = () => {
      if (heroEl) heroRect = heroEl.getBoundingClientRect();
    };

    window.addEventListener('resize', updateHeroRect, { passive: true });
    window.addEventListener('scroll', updateHeroRect, { passive: true });

    const triggerPulse = (clientX: number, clientY: number) => {
      targetPosRef.current.x = clientX - heroRect.left;
      targetPosRef.current.y = clientY - heroRect.top;
      targetPosRef.current.active = true;
      hasInteractedRef.current = true;

      // Trigger optical lens flash and expanding shockwave ring
      flashRef.current = 1.0;
      pulsesRef.current.push({
        x: emitterRef.current.x,
        y: emitterRef.current.y,
        radius: 12,
        maxRadius: Math.max(heroEl.clientWidth, heroEl.clientHeight) * 1.35,
        alpha: 1.0,
        speed: heroEl.clientWidth < 640 ? 18 : 26
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      triggerPulse(e.clientX, e.clientY);
    };

    const onPointerMove = (e: PointerEvent) => {
      targetPosRef.current.x = e.clientX - heroRect.left;
      targetPosRef.current.y = e.clientY - heroRect.top;
      targetPosRef.current.active = true;
      hasInteractedRef.current = true;
    };

    const onPointerLeave = () => {
      targetPosRef.current.active = false;
    };

    // Touch event handlers for seamless iOS / Android dragging & pulsing
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        triggerPulse(touch.clientX, touch.clientY);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        targetPosRef.current.x = touch.clientX - heroRect.left;
        targetPosRef.current.y = touch.clientY - heroRect.top;
        targetPosRef.current.active = true;
        hasInteractedRef.current = true;
      }
    };

    const onTouchEnd = () => {
      targetPosRef.current.active = false;
    };

    heroEl.addEventListener('pointerdown', onPointerDown, { passive: true });
    heroEl.addEventListener('pointermove', onPointerMove, { passive: true });
    heroEl.addEventListener('pointerleave', onPointerLeave, { passive: true });
    heroEl.addEventListener('touchstart', onTouchStart, { passive: true });
    heroEl.addEventListener('touchmove', onTouchMove, { passive: true });
    heroEl.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('resize', updateHeroRect);
      window.removeEventListener('scroll', updateHeroRect);
      heroEl.removeEventListener('pointerdown', onPointerDown);
      heroEl.removeEventListener('pointermove', onPointerMove);
      heroEl.removeEventListener('pointerleave', onPointerLeave);
      heroEl.removeEventListener('touchstart', onTouchStart);
      heroEl.removeEventListener('touchmove', onTouchMove);
      heroEl.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Continuous 120 FPS High-DPI Physics Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    if (!canvas || !heroEl) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let isVisible = true;
    let animId: number;
    let width = heroEl.clientWidth;
    let height = heroEl.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2); // High-DPI sharp rendering capped at 2 for performance

    let idleTime = 0;

    // IntersectionObserver: Pause canvas render loop when scrolled off-screen (saves 100% mobile GPU & battery)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId) {
            animId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(heroEl);

    // Responsive dust & sea-mist particles count based on screen width
    const particleCount = width < 640 ? 18 : 38;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.3,
      size: (1 + Math.random() * 2),
      baseAlpha: 0.15 + Math.random() * 0.25
    }));

    let colLeft = 0;
    let colTop = 0;
    const updateDimensions = () => {
      width = heroEl.clientWidth;
      height = heroEl.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // Scale context for sharp Retina rendering

      if (textColRef.current && heroEl) {
        const textRect = textColRef.current.getBoundingClientRect();
        const heroRect = heroEl.getBoundingClientRect();
        colLeft = textRect.left - heroRect.left;
        colTop = textRect.top - heroRect.top;
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const render = () => {
      if (!isVisible) {
        animId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const target = targetPosRef.current;
      const current = currentPosRef.current;
      const origin = emitterRef.current;

      const isMobile = width < 768;

      // 1. Target coordinate calculation (Auto-patrol on mobile / when idle)
      let destX = target.x;
      let destY = target.y;

      if (!target.active) {
        // Natural rhythmic coastal patrol sweep
        idleTime += 0.012;
        // On mobile, sweep across the headline and description higher up
        if (isMobile) {
          destX = width * 0.5 + Math.sin(idleTime) * (width * 0.36);
          destY = Math.min(height * 0.38, 220) + Math.cos(idleTime * 0.9) * 50;
        } else {
          destX = width * 0.38 + Math.sin(idleTime) * 150;
          destY = height * 0.32 + Math.cos(idleTime * 0.8) * 60;
        }
      }

      // 2. High-grade spring coordinate easing
      const smoothing = isMobile ? 0.14 : 0.18;
      current.x += (destX - current.x) * smoothing;
      current.y += (destY - current.y) * smoothing;

      // 3. Angular shortest-path inertia damping
      const dx = current.x - origin.x;
      const dy = current.y - origin.y;
      const targetAngleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

      let diff = targetAngleDeg - currentAngleRef.current;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      currentAngleRef.current += diff * 0.16;

      const rad = (currentAngleRef.current * Math.PI) / 180;
      const dist = Math.hypot(dx, dy);
      const beamLength = Math.max(dist, isMobile ? 320 : 420);

      // Conical divergence angle (Tuned for screen width)
      const coneAngle = ((isMobile ? 24 : 28) * Math.PI) / 180;
      const a1 = rad - coneAngle / 2;
      const a2 = rad + coneAngle / 2;

      const endX1 = origin.x + Math.cos(a1) * beamLength;
      const endY1 = origin.y + Math.sin(a1) * beamLength;
      const endX2 = origin.x + Math.cos(a2) * beamLength;
      const endY2 = origin.y + Math.sin(a2) * beamLength;

      // Flash decay from click/tap pulse
      flashRef.current *= 0.91;
      const flash = flashRef.current;

      // =========================================================================
      // PHOTOREALISTIC OPTICAL LIGHT ENGINE (Additive Screen Blending & Mie Scattering)
      // =========================================================================
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      // 4A. Outer Atmospheric Forward-Mie Scattering Haze (Broad Penumbra Falloff)
      const wideAngle = coneAngle * 1.55;
      const wA1 = rad - wideAngle / 2;
      const wA2 = rad + wideAngle / 2;
      const wEndX1 = origin.x + Math.cos(wA1) * beamLength;
      const wEndY1 = origin.y + Math.sin(wA1) * beamLength;

      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(wEndX1, wEndY1);
      ctx.arc(origin.x, origin.y, beamLength, wA1, wA2);
      ctx.closePath();

      const wideGrad = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, beamLength);
      wideGrad.addColorStop(0, `rgba(255, 200, 120, ${0.45 + flash * 0.3})`);
      wideGrad.addColorStop(0.15, `rgba(255, 120, 20, ${0.18 + flash * 0.2})`);
      wideGrad.addColorStop(0.5, 'rgba(255, 100, 0, 0.05)');
      wideGrad.addColorStop(0.85, 'rgba(0, 74, 173, 0.02)');
      wideGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = wideGrad;
      ctx.fill();

      // 4B. Primary Volumetric Light Shaft (Atmospheric Sea Mist Body)
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(endX1, endY1);
      ctx.arc(origin.x, origin.y, beamLength, a1, a2);
      ctx.closePath();

      const beamGrad = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, beamLength);
      beamGrad.addColorStop(0, `rgba(255, 255, 240, ${0.95 + flash * 0.05})`);
      beamGrad.addColorStop(0.08, `rgba(255, 220, 130, ${0.8 + flash * 0.2})`);
      beamGrad.addColorStop(0.28, `rgba(255, 140, 20, ${0.38 + flash * 0.35})`);
      beamGrad.addColorStop(0.65, `rgba(255, 90, 0, ${0.12 + flash * 0.2})`);
      beamGrad.addColorStop(0.95, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fill();

      // 4C. Prismatic Fresnel Refraction Caustics (Faint Internal Ray Striations)
      const rayOffsets = [-0.35, -0.18, 0, 0.18, 0.35];
      rayOffsets.forEach((offset, idx) => {
        const rAngle = rad + offset * coneAngle;
        const rEndX = origin.x + Math.cos(rAngle) * beamLength * 0.95;
        const rEndY = origin.y + Math.sin(rAngle) * beamLength * 0.95;

        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(rEndX, rEndY);
        const rayGrad = ctx.createLinearGradient(origin.x, origin.y, rEndX, rEndY);
        rayGrad.addColorStop(0, `rgba(255, 255, 255, ${0.6 + flash * 0.3})`);
        rayGrad.addColorStop(0.25, `rgba(255, 210, 120, ${0.35 + flash * 0.2})`);
        rayGrad.addColorStop(0.7, 'rgba(255, 110, 0, 0.08)');
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = rayGrad;
        ctx.lineWidth = idx === 2 ? 3 : 1.5;
        ctx.stroke();
      });

      // 5. Intense Collimated Core Filament (White-Hot Center Optical Axis)
      const coreA1 = rad - (coneAngle * 0.22) / 2;
      const coreA2 = rad + (coneAngle * 0.22) / 2;
      const cEndX1 = origin.x + Math.cos(coreA1) * (beamLength * 0.98);
      const cEndY1 = origin.y + Math.sin(coreA1) * (beamLength * 0.98);

      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(cEndX1, cEndY1);
      ctx.arc(origin.x, origin.y, beamLength * 0.98, coreA1, coreA2);
      ctx.closePath();

      const coreGrad = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, beamLength * 0.98);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.08, 'rgba(255, 250, 220, 0.95)');
      coreGrad.addColorStop(0.2, `rgba(255, 225, 150, ${0.75 + flash * 0.25})`);
      coreGrad.addColorStop(0.55, `rgba(255, 120, 0, ${0.3 + flash * 0.3})`);
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGrad;
      ctx.fill();

      // 6. Perspective Elliptical Spotlight Landing Pool
      const spotRadius = (isMobile ? 135 : 175) * (1 + flash * 0.35);
      const spotGrad = ctx.createRadialGradient(current.x, current.y, 0, current.x, current.y, spotRadius);
      spotGrad.addColorStop(0, `rgba(255, 250, 225, ${0.45 + flash * 0.4})`);
      spotGrad.addColorStop(0.25, `rgba(255, 160, 30, ${0.25 + flash * 0.25})`);
      spotGrad.addColorStop(0.65, `rgba(255, 90, 0, ${0.08 + flash * 0.1})`);
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.ellipse(current.x, current.y, spotRadius * 1.12, spotRadius * 0.88, rad, 0, Math.PI * 2);
      ctx.fillStyle = spotGrad;
      ctx.fill();

      // Ambient Lantern Room Sea-Mist Halo (Scattered 360° Coastal Bloom)
      const haloRadius = 78 * (1 + flash * 0.4);
      const haloGrad = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, haloRadius);
      haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      haloGrad.addColorStop(0.2, `rgba(255, 200, 100, ${0.6 + flash * 0.3})`);
      haloGrad.addColorStop(0.6, 'rgba(255, 107, 0, 0.15)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(origin.x, origin.y, haloRadius, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // Horizontal Anamorphic Optical Glare Streak
      const streakLength = 95 * (1 + flash * 0.6);
      const streakGrad = ctx.createLinearGradient(origin.x - streakLength, origin.y, origin.x + streakLength, origin.y);
      streakGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      streakGrad.addColorStop(0.35, 'rgba(6, 182, 212, 0.25)');
      streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.85 + flash * 0.15})`);
      streakGrad.addColorStop(0.65, 'rgba(6, 182, 212, 0.25)');
      streakGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.ellipse(origin.x, origin.y, streakLength, 2.5, 0, 0, Math.PI * 2);
      ctx.fillStyle = streakGrad;
      ctx.fill();

      ctx.restore();

      // 7. Interactive Optical Shockwave Rings from Click/Tap Pulses
      if (pulsesRef.current.length > 0) {
        pulsesRef.current.forEach((pulse) => {
          pulse.radius += pulse.speed;
          pulse.alpha *= 0.95;

          // Primary Amber Optical Shockwave Ring (GPU accelerated dual stroke)
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
          ctx.lineWidth = Math.max(2, 7 * pulse.alpha);
          ctx.strokeStyle = `rgba(255, 107, 0, ${pulse.alpha * 0.35})`;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
          ctx.lineWidth = Math.max(1, 3.5 * pulse.alpha);
          ctx.strokeStyle = `rgba(255, 210, 120, ${pulse.alpha * 0.9})`;
          ctx.stroke();

          // Secondary White High-Speed Refraction Ring
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.radius * 0.94, 0, Math.PI * 2);
          ctx.lineWidth = Math.max(0.5, 1.5 * pulse.alpha);
          ctx.strokeStyle = `rgba(255, 255, 255, ${pulse.alpha * 0.5})`;
          ctx.stroke();
          ctx.restore();
        });
        pulsesRef.current = pulsesRef.current.filter((p) => p.alpha > 0.02 && p.radius < p.maxRadius);
      }

      // 8. Tyndall Dust & Sea-Mist Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pdx = p.x - origin.x;
        const pdy = p.y - origin.y;
        const pAngle = Math.atan2(pdy, pdx);
        let pDiff = pAngle - rad;
        while (pDiff < -Math.PI) pDiff += Math.PI * 2;
        while (pDiff > Math.PI) pDiff -= Math.PI * 2;

        const pDist = Math.hypot(pdx, pdy);
        const inBeam = Math.abs(pDiff) < coneAngle / 2 && pDist < beamLength;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, inBeam ? p.size * (1.5 + flash * 0.8) : p.size, 0, Math.PI * 2);
        ctx.fillStyle = inBeam
          ? `rgba(255, 245, 210, ${Math.min(1, (p.baseAlpha * 3.5) * (1 + flash * 0.8))})`
          : `rgba(148, 163, 184, ${p.baseAlpha * 0.25})`;
        ctx.fill();
        ctx.restore();
      });

      // 9. Fresnel Lens Source Glare & Pulsing Flare
      const glareRadius = 34 * (1 + flash * 1.6);
      const glareGrad = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, glareRadius);
      glareGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      glareGrad.addColorStop(0.3, `rgba(255, 220, 140, ${Math.min(1, 0.9 + flash * 0.1)})`);
      glareGrad.addColorStop(0.7, `rgba(255, 107, 0, ${Math.min(1, 0.4 + flash * 0.4)})`);
      glareGrad.addColorStop(1, 'rgba(255, 107, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(origin.x, origin.y, glareRadius, 0, Math.PI * 2);
      ctx.fillStyle = glareGrad;
      ctx.fill();
      ctx.restore();

      // 10. Directly update the optical mask DOM style (Zero reflow / zero layout thrashing)
      const overlayEl = textOverlayRef.current;
      if (overlayEl) {
        const localX = current.x - colLeft;
        const localY = current.y - colTop;
        const maskStr = `radial-gradient(circle ${spotRadius.toFixed(0)}px at ${localX.toFixed(1)}px ${localY.toFixed(1)}px, black 30%, transparent 100%)`;
        overlayEl.style.maskImage = maskStr;
        overlayEl.style.webkitMaskImage = maskStr;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden select-none cursor-crosshair">
      {/* 120 FPS High-DPI Light Beam Canvas (Placed at z-20 so it emerges directly from the lighthouse lens inside the card and streams across the hero) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 pointer-events-none w-full h-full"
      />

      {/* Main Hero Layout */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Text Column (Spans 7 cols on desktop, elevated to z-30 for pristine legibility) */}
          <div ref={textColRef} className="lg:col-span-7 relative z-30 pointer-events-auto">
            {/* Base Layer */}
            <div className="space-y-6 sm:space-y-8">
              {children}
            </div>

            {/* Illuminated Overlay Layer (100% pixel-locked directly over base layer with ZERO scattering) */}
            {illuminatedContent && (
              <div
                ref={textOverlayRef}
                className="absolute inset-0 space-y-6 sm:space-y-8 pointer-events-none select-none z-40"
                style={{
                  maskImage: 'radial-gradient(circle 175px at 0px 0px, black 30%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle 175px at 0px 0px, black 30%, transparent 100%)'
                }}
              >
                {illuminatedContent}
              </div>
            )}
          </div>

          {/* Right Realistic Lighthouse Column (Spans 5 cols on desktop, at z-10 so beam emanates out of card) */}
          <div className="lg:col-span-5 relative z-10 mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] lg:aspect-[1/1.08] min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] rounded-2xl bg-[#070A12] border border-[rgba(148,163,184,0.25)] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden group">
              {/* Deep Coastal Night Sky */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#03050A] via-[#070B14] to-[#0A101D]"></div>
              {/* Starry Field */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

              {/* Realistic SVG Lighthouse Illustration */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="cliffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="40%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#05070D" />
                  </linearGradient>

                  <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="25%" stopColor="#F8FAFC" />
                    <stop offset="50%" stopColor="#CBD5E1" />
                    <stop offset="85%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0B0F17" />
                  </linearGradient>

                  <linearGradient id="redBandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7F1D1D" />
                    <stop offset="25%" stopColor="#FF6B00" />
                    <stop offset="60%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#450A0A" />
                  </linearGradient>

                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6,182,212,0.38)" />
                    <stop offset="50%" stopColor="rgba(0,74,173,0.28)" />
                    <stop offset="100%" stopColor="rgba(5,7,13,0.92)" />
                  </linearGradient>
                </defs>

                {/* Ocean Water */}
                <path
                  d="M 0 435 Q 200 428, 400 435 T 800 432 L 800 600 L 0 600 Z"
                  fill="url(#waterGrad)"
                  opacity="0.88"
                />

                {/* Living Ocean Wave Crests (Animated Sinusoidal Drifts) */}
                <g className="animate-wave-drift-1">
                  <path
                    d="M 0 455 Q 180 448, 360 458 T 800 452"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10, 8"
                  />
                </g>
                <g className="animate-wave-drift-2">
                  <path
                    d="M 40 488 Q 250 480, 480 490 T 800 484"
                    stroke="rgba(6,182,212,0.32)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </g>
                <g className="animate-wave-drift-3">
                  <path
                    d="M 0 525 Q 220 518, 460 528 T 800 522"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="16, 12"
                  />
                </g>

                {/* Distant Maritime Navigation Buoy with Blinking LED Beacon */}
                <g className="animate-buoy-bob" style={{ transformOrigin: '640px 465px' }}>
                  {/* Buoy Hull (Nautical Red & Steel) */}
                  <polygon points="633,472 647,472 644,460 636,460" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
                  {/* Buoy Mast */}
                  <line x1="640" y1="460" x2="640" y2="446" stroke="#E2E8F0" strokeWidth="1.5" />
                  <circle cx="640" cy="445" r="2.5" fill="#10B981" />
                  {/* Blinking Emerald LED Beacon */}
                  <circle cx="640" cy="445" r="5" fill="#10B981" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                  {/* Water Ripple Beneath Buoy */}
                  <ellipse cx="640" cy="473" rx="10" ry="2.5" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
                </g>

                {/* Rugged Coastal Cliff Outcrop (Widened Foundation for Larger Tower) */}
                <polygon
                  points="0,385 70,368 135,372 224,370 320,374 380,420 425,490 450,600 0,600"
                  fill="url(#cliffGrad)"
                />
                <path
                  d="M 30 405 L 120 390 L 180 425 L 260 405 L 330 455 L 370 555"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Crashing Sea Foam against the Cliff Rocks */}
                <path
                  d="M 315 385 Q 355 420, 370 455 Q 390 485, 380 520"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDuration: '2.5s' }}
                />

                {/* The Lighthouse Tower - Scaled Up by 1.26x for Perfect Golden Proportion */}
                <g
                  id="lighthouse-tower"
                  transform="translate(4, -6) scale(1.26)"
                  style={{ transformOrigin: '224px 372px' }}
                >
                  {/* Stone Plinth Base */}
                  <polygon points="180,372 268,372 276,360 172,360" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="175" y="352" width="98" height="8" rx="2" fill="#334155" />

                  {/* Tapered Tower Body with Bands */}
                  <polygon points="180,352 268,352 262,310 186,310" fill="url(#towerGrad)" />
                  <polygon points="186,310 262,310 256,270 192,270" fill="url(#redBandGrad)" />
                  <polygon points="192,270 256,270 250,225 198,225" fill="url(#towerGrad)" />
                  <polygon points="198,225 250,225 245,190 203,190" fill="url(#redBandGrad)" />

                  {/* Windows */}
                  <rect x="220" y="325" width="8" height="14" rx="3" fill="#0B0F17" stroke="#FF6B00" strokeWidth="1" />
                  <rect x="221" y="245" width="6" height="12" rx="3" fill="#0B0F17" stroke="#FF6B00" strokeWidth="0.8" />

                  {/* Gallery Railing */}
                  <polygon points="196,190 252,190 258,180 190,180" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                  <line x1="188" y1="172" x2="260" y2="172" stroke="#94A3B8" strokeWidth="1.5" />

                  {/* Glass Lantern Room */}
                  <rect x="200" y="152" width="48" height="28" fill="rgba(255,255,255,0.15)" stroke="#64748B" strokeWidth="1" />
                  <line x1="212" y1="152" x2="212" y2="180" stroke="#0F172A" strokeWidth="1.5" />
                  <line x1="224" y1="152" x2="224" y2="180" stroke="#0F172A" strokeWidth="1.5" />
                  <line x1="236" y1="152" x2="236" y2="180" stroke="#0F172A" strokeWidth="1.5" />

                  {/* Copper Roof Dome */}
                  <path d="M 198 152 Q 224 130, 250 152 Z" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="224" cy="134" r="3" fill="#FF6B00" />
                  <line x1="224" y1="131" x2="224" y2="116" stroke="#FF6B00" strokeWidth="1.5" />

                  {/* Fresnel Lens Source Core */}
                  <circle
                    ref={lanternLensRef}
                    cx="224"
                    cy="166"
                    r="8"
                    fill="#FFFFFF"
                  />
                  <circle cx="224" cy="166" r="16" fill="rgba(255,107,0,0.6)" />
                </g>
              </svg>

              {/* Minimal Status Badge */}
              <div className="absolute top-3.5 left-3.5 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05070D]/85 backdrop-blur-md border border-[rgba(148,163,184,0.2)] text-[11px] font-mono text-[#94A3B8]">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse"></span>
                <span className="text-white font-semibold tracking-wider">ZEMPRO BEACON</span>
                <span className="text-[#64748B]">//</span>
                <span className="text-[#10B981]">OPTICAL ACTIVE</span>
              </div>

              {/* Click / Drag to Pulse Floating Hint Badge */}
              <div className="absolute bottom-3.5 right-3.5 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05070D]/90 backdrop-blur-md border border-[#FF6B00]/35 text-[11px] font-mono text-[#FFB067] shadow-[0_4px_20px_rgba(0,0,0,0.6)] pointer-events-none group-hover:border-[#FF6B00]/70 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
                <span>Click / Tap to pulse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
