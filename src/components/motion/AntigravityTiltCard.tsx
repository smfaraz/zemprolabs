import React, { useState, useRef, useEffect, useCallback } from 'react';

interface AntigravityTiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number; // max tilt degrees (e.g. 7)
  glareOpacity?: number; // max opacity of specular glare
  elevateOnHover?: boolean;
}

export const AntigravityTiltCard: React.FC<AntigravityTiltCardProps> = ({
  children,
  className = '',
  tiltMax = 8,
  glareOpacity = 0.2,
  elevateOnHover = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = x / rect.width;
    const yPct = y / rect.height;

    // Calculate rotation angles (-tiltMax to +tiltMax)
    const rotateY = ((xPct - 0.5) * tiltMax * 2).toFixed(2);
    const rotateX = (-(yPct - 0.5) * tiltMax * 2).toFixed(2);
    const translateZ = elevateOnHover ? '16px' : '0px';

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ})`
    );

    setGlarePosition({
      x: +(xPct * 100).toFixed(1),
      y: +(yPct * 100).toFixed(1),
      opacity: glareOpacity,
    });
  }, [isReducedMotion, tiltMax, glareOpacity, elevateOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (isReducedMotion) return;
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, [isReducedMotion]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Specular Glare Layer */}
      {!isReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.2), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};
