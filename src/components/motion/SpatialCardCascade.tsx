import React from 'react';
import { motion } from 'motion/react';

interface SpatialCardCascadeProps {
  children: React.ReactNode;
  index: number;
  total?: number;
  delay?: number;
  className?: string;
}

export const SpatialCardCascade: React.FC<SpatialCardCascadeProps> = ({
  children,
  index,
  total = 4,
  delay = 0,
  className = '',
}) => {
  // Alternate 3D tilt vectors based on grid quadrant
  const isLeft = index % 2 === 0;
  const isTop = index < 2;

  const initialRotateY = isLeft ? -6 : 6;
  const initialRotateX = isTop ? 8 : -8;

  const calculatedDelay = delay + (index % 4) * 0.12;

  return (
    <div className={`h-full ${className}`} style={{ perspective: 1200 }}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          rotateY: initialRotateY,
          rotateX: initialRotateX,
          y: 32,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
        transition={{
          duration: 1.15,
          delay: calculatedDelay,
          ease: [0.22, 1, 0.36, 1], // Smooth spatial settling
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
