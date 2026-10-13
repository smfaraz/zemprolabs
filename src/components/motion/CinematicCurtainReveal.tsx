import React from 'react';
import { motion } from 'motion/react';

interface CinematicCurtainRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  className?: string;
}

export const CinematicCurtainReveal: React.FC<CinematicCurtainRevealProps> = ({
  children,
  direction = 'up',
  duration = 1.15,
  delay = 0,
  className = '',
}) => {
  // Translate offsets for the sliding curtain overlay
  const curtainTranslates = {
    up: { initial: { y: '0%' }, animate: { y: '-101%' } },
    down: { initial: { y: '0%' }, animate: { y: '101%' } },
    left: { initial: { x: '0%' }, animate: { x: '-101%' } },
    right: { initial: { x: '0%' }, animate: { x: '101%' } },
  };

  const curtain = curtainTranslates[direction];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Media content: zooms out gently as curtain lifts */}
      <motion.div
        initial={{
          scale: 1.12,
          opacity: 0.6,
        }}
        whileInView={{
          scale: 1.0,
          opacity: 1.0,
        }}
        viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
        transition={{
          duration: duration * 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Cinematic shutter curtain pane */}
      <motion.div
        initial={curtain.initial}
        whileInView={curtain.animate}
        viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
        transition={{
          duration,
          delay,
          ease: [0.19, 1, 0.22, 1], // Luxury expo ease-out
        }}
        className="pointer-events-none absolute inset-0 bg-[#090A0D] z-20 flex items-end justify-center"
      >
        {/* Luminous Shimmer Leading Blade Edge */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent shadow-[0_0_20px_#FF6B00]" />
      </motion.div>
    </div>
  );
};
