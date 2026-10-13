import React from 'react';
import { motion } from 'motion/react';

interface PerspectiveLineRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const PerspectiveLineReveal: React.FC<PerspectiveLineRevealProps> = ({
  children,
  delay = 0,
  duration = 1.15,
  className = '',
}) => {
  return (
    <div className="overflow-visible" style={{ perspective: 1200 }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 42,
          rotateX: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Spring-damped luxury rise
        }}
        style={{
          transformOrigin: '50% 100%',
          transformStyle: 'preserve-3d',
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
