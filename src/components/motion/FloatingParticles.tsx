import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 16,
  className = '',
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? '#FF6B00' : i % 3 === 1 ? '#00F0FF' : '#FFA048',
      opacity: Math.random() * 0.4 + 0.15,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: ['0px', '-40px', '20px', '0px'],
            x: ['0px', '25px', '-20px', '0px'],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.5, p.opacity],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
