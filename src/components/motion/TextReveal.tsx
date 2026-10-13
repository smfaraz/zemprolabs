import React from 'react';
import { motion, type Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    y: '115%',
    opacity: 0,
    rotateX: -25,
  },
  visible: {
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
  as: Component = 'div',
}) => {
  const words = text.split(' ');

  return (
    <Component className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -100px 0px', amount: 0.25 }}
        custom={stagger}
        variants={{
          ...containerVariants,
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: stagger,
            },
          },
        }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-0"
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden pb-1 -mb-1">
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
