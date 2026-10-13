import React from 'react';
import { motion } from 'motion/react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  size = 250,
  duration = 8,
  delay = 0,
  colorFrom = '#FF6B00',
  colorTo = '#00F0FF',
  borderWidth = 1.5,
  className = '',
}) => {
  return (
    <div
      style={
        {
          '--border-beam-size': `${size}px`,
          '--border-beam-duration': `${duration}s`,
          '--border-beam-delay': `${delay}s`,
          '--border-beam-color-from': colorFrom,
          '--border-beam-color-to': colorTo,
          '--border-beam-width': `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-beam-width))_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] ${className}`}
    >
      <motion.div
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay,
        }}
        className="absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round inherit)`,
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo}, transparent)`,
        }}
      />
    </div>
  );
};
