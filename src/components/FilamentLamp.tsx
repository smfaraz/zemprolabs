import React, { useState } from 'react';

interface FilamentLampProps {
  className?: string;
  wireLength?: number; // length of wire in px
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const FilamentLamp: React.FC<FilamentLampProps> = ({
  className = '',
  wireLength = 120,
  size = 'md',
  interactive = true
}) => {
  const [isOn, setIsOn] = useState(true);
  const idPrefix = React.useId().replace(/:/g, '');

  const bloomId = `filament-bloom-${idPrefix}`;
  const softGlowId = `soft-glow-${idPrefix}`;
  const socketMetalId = `socket-metal-${idPrefix}`;
  const glassReflectId = `glass-reflection-${idPrefix}`;

  // Dimensions based on size
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;
  const bulbWidth = 44 * scale;
  const bulbHeight = 150 * scale;
  const socketHeight = 48 * scale;
  const totalSvgHeight = wireLength + socketHeight + bulbHeight + 40;
  const svgWidth = 240 * scale;
  const centerX = svgWidth / 2;

  return (
    <div 
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ pointerEvents: interactive ? 'auto' : 'none' }}
      title={interactive ? 'Click to toggle light' : undefined}
    >
      {/* 1. Deep Atmospheric Warm Radiance (Broad Room Illumination) */}
      <div 
        className={`absolute rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          isOn ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          width: `${620 * scale}px`,
          height: `${620 * scale}px`,
          top: `${wireLength + socketHeight - 120}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(255, 119, 0, 0.16) 0%, rgba(255, 85, 0, 0.08) 35%, rgba(255, 60, 0, 0.02) 60%, transparent 75%)',
          filter: 'blur(50px)',
          zIndex: 0
        }}
      />

      {/* 2. Concentrated Filament Halo (Immediate Bulb Proximity) */}
      <div 
        className={`absolute rounded-full pointer-events-none transition-all duration-700 ease-out ${
          isOn ? 'opacity-100 scale-100' : 'opacity-5 scale-75'
        }`}
        style={{
          width: `${320 * scale}px`,
          height: `${320 * scale}px`,
          top: `${wireLength + socketHeight - 20}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(255, 130, 0, 0.28) 0%, rgba(255, 90, 0, 0.14) 40%, transparent 70%)',
          filter: 'blur(24px)',
          zIndex: 0
        }}
      />

      {/* SVG Filament Lamp */}
      <svg
        width={svgWidth}
        height={totalSvgHeight}
        viewBox={`0 0 ${svgWidth} ${totalSvgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-300 active:scale-[0.98]"
        style={{ cursor: interactive ? 'pointer' : 'default' }}
        onClick={interactive ? () => setIsOn(!isOn) : undefined}
        role={interactive ? 'button' : undefined}
        aria-label={interactive ? 'Interactive Filament Lamp - Toggle Warm Illumination' : 'Filament Lamp'}
      >
        <defs>
          {/* Filament Glowing Filters */}
          <filter id={bloomId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={softGlowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>

          {/* Metal Socket Gradient */}
          <linearGradient id={socketMetalId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#111215" />
            <stop offset="20%" stopColor="#22252A" />
            <stop offset="50%" stopColor="#363A42" />
            <stop offset="75%" stopColor="#1E2025" />
            <stop offset="100%" stopColor="#111215" />
          </linearGradient>

          {/* Glass Cylinder Highlight */}
          <linearGradient id={glassReflectId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="15%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="85%" stopColor="rgba(255, 255, 255, 0.03)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.20)" />
          </linearGradient>
        </defs>

        {/* 1. Suspension Cable */}
        <line
          x1={centerX}
          y1={0}
          x2={centerX}
          y2={wireLength}
          stroke="#27272A"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* Small Cable Strain Relief Nipple */}
        <rect
          x={centerX - 3 * scale}
          y={wireLength - 6 * scale}
          width={6 * scale}
          height={6 * scale}
          rx={1.5}
          fill="#18181B"
          stroke="#3F3F46"
          strokeWidth="0.75"
        />

        {/* 2. Metal Cylindrical Socket */}
        <g transform={`translate(${centerX - bulbWidth / 2}, ${wireLength})`}>
          {/* Socket Body */}
          <rect
            x={0}
            y={0}
            width={bulbWidth}
            height={socketHeight}
            rx={3}
            fill={`url(#${socketMetalId})`}
            stroke="#18181B"
            strokeWidth="1"
          />

          {/* Knurled Detail Rings */}
          <line
            x1={2}
            y1={socketHeight * 0.25}
            x2={bulbWidth - 2}
            y2={socketHeight * 0.25}
            stroke="#1C1E23"
            strokeWidth="0.75"
          />
          <line
            x1={2}
            y1={socketHeight * 0.75}
            x2={bulbWidth - 2}
            y2={socketHeight * 0.75}
            stroke="#1C1E23"
            strokeWidth="0.75"
          />

          {/* Lower Collar / Brass Lip */}
          <rect
            x={2}
            y={socketHeight - 4}
            width={bulbWidth - 4}
            height={4}
            fill="#3A3022"
            opacity={0.8}
          />
        </g>

        {/* 3. Elongated Tubular Glass Bulb & Filament */}
        <g transform={`translate(${centerX - bulbWidth / 2}, ${wireLength + socketHeight})`}>
          {/* Glass Bulb Body with Rounded Bottom */}
          <rect
            x={0}
            y={0}
            width={bulbWidth}
            height={bulbHeight}
            rx={bulbWidth / 2}
            fill={`url(#${glassReflectId})`}
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1"
          />

          {/* Internal Support Stem & Lead Wires */}
          <line
            x1={bulbWidth / 2 - 4 * scale}
            y1={0}
            x2={bulbWidth / 2 - 4 * scale}
            y2={24 * scale}
            stroke="#3F3F46"
            strokeWidth="1"
          />
          <line
            x1={bulbWidth / 2 + 4 * scale}
            y1={0}
            x2={bulbWidth / 2 + 4 * scale}
            y2={24 * scale}
            stroke="#3F3F46"
            strokeWidth="1"
          />

          {/* Central Stem Glass Support */}
          <path
            d={`M${bulbWidth / 2 - 3 * scale} 0 L${bulbWidth / 2 - 3 * scale} ${18 * scale} L${bulbWidth / 2 + 3 * scale} ${18 * scale} L${bulbWidth / 2 + 3 * scale} 0 Z`}
            fill="rgba(255, 255, 255, 0.08)"
          />

          {/* Glowing Hairpin Filament Wire (The Signature Visual) */}
          {isOn ? (
            <g filter={`url(#${bloomId})`}>
              {/* Outer Radiant Amber Halo */}
              <path
                d={`M${bulbWidth / 2 - 4 * scale} ${24 * scale} 
                    L${bulbWidth / 2 - 4 * scale} ${bulbHeight - 24 * scale} 
                    A${4 * scale} ${4 * scale} 0 0 0 ${bulbWidth / 2 + 4 * scale} ${bulbHeight - 24 * scale} 
                    L${bulbWidth / 2 + 4 * scale} ${24 * scale}`}
                stroke="#FF4500"
                strokeWidth={5 * scale}
                strokeLinecap="round"
                fill="none"
                opacity={0.5}
              />

              {/* Mid Amber Glow */}
              <path
                d={`M${bulbWidth / 2 - 4 * scale} ${24 * scale} 
                    L${bulbWidth / 2 - 4 * scale} ${bulbHeight - 24 * scale} 
                    A${4 * scale} ${4 * scale} 0 0 0 ${bulbWidth / 2 + 4 * scale} ${bulbHeight - 24 * scale} 
                    L${bulbWidth / 2 + 4 * scale} ${24 * scale}`}
                stroke="#FF8800"
                strokeWidth={3 * scale}
                strokeLinecap="round"
                fill="none"
              />

              {/* Intense Incandescent Core Wire */}
              <path
                d={`M${bulbWidth / 2 - 4 * scale} ${24 * scale} 
                    L${bulbWidth / 2 - 4 * scale} ${bulbHeight - 24 * scale} 
                    A${4 * scale} ${4 * scale} 0 0 0 ${bulbWidth / 2 + 4 * scale} ${bulbHeight - 24 * scale} 
                    L${bulbWidth / 2 + 4 * scale} ${24 * scale}`}
                stroke="#FFF2CC"
                strokeWidth={1.25 * scale}
                strokeLinecap="round"
                fill="none"
              />

              {/* Center Vertical Filament Rod (Visible in the user's reference photo) */}
              <line
                x1={bulbWidth / 2}
                y1={24 * scale}
                x2={bulbWidth / 2}
                y2={bulbHeight - 34 * scale}
                stroke="#FF8800"
                strokeWidth={2.5 * scale}
                strokeLinecap="round"
              />
              <line
                x1={bulbWidth / 2}
                y1={24 * scale}
                x2={bulbWidth / 2}
                y2={bulbHeight - 34 * scale}
                stroke="#FFF9E6"
                strokeWidth={1 * scale}
                strokeLinecap="round"
              />
            </g>
          ) : (
            /* Cold, Unlit Filament Wire */
            <g opacity={0.35}>
              <path
                d={`M${bulbWidth / 2 - 4 * scale} ${24 * scale} 
                    L${bulbWidth / 2 - 4 * scale} ${bulbHeight - 24 * scale} 
                    A${4 * scale} ${4 * scale} 0 0 0 ${bulbWidth / 2 + 4 * scale} ${bulbHeight - 24 * scale} 
                    L${bulbWidth / 2 + 4 * scale} ${24 * scale}`}
                stroke="#71717A"
                strokeWidth={1.5 * scale}
                strokeLinecap="round"
                fill="none"
              />
              <line
                x1={bulbWidth / 2}
                y1={24 * scale}
                x2={bulbWidth / 2}
                y2={bulbHeight - 34 * scale}
                stroke="#71717A"
                strokeWidth={1.5 * scale}
                strokeLinecap="round"
              />
            </g>
          )}

          {/* Glass Specular Glare / Edge Highlight */}
          <path
            d={`M${4 * scale} ${18 * scale} L${4 * scale} ${bulbHeight - 28 * scale}`}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d={`M${bulbWidth - 4 * scale} ${18 * scale} L${bulbWidth - 4 * scale} ${bulbHeight - 28 * scale}`}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
