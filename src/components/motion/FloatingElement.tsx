import React from 'react';
import { motion } from 'motion/react';

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number; // e.g. 4
  distance?: number; // e.g. 6
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 4.5,
  distance = 6,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
