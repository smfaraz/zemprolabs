import React from 'react';
import { motion, type Variants } from 'motion/react';

type RevealPreset = 'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'slide-left' | 'slide-right';

interface ScrollRevealProps {
  children: React.ReactNode;
  preset?: RevealPreset;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
}

const variants: Record<RevealPreset, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 52 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1], // Smooth luxury deceleration curve
      },
    },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -52 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 54 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -54 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  preset = 'fade-up',
  delay = 0,
  duration,
  className = '',
  viewportMargin = '0px 0px -100px 0px',
  amount = 0.15,
  once = true,
}) => {
  const selectedVariant = variants[preset];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin as any, amount }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...((selectedVariant.visible as any)?.transition || {}),
            delay,
            ...(duration ? { duration } : {}),
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.16,
  delayChildren = 0.08,
  className = '',
  viewportMargin = '0px 0px -100px 0px',
  amount = 0.15,
  once = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin as any, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  preset?: RevealPreset;
}> = ({ children, className = '', preset = 'fade-up' }) => {
  const selectedVariant = variants[preset];

  return (
    <motion.div variants={selectedVariant} className={className}>
      {children}
    </motion.div>
  );
};
