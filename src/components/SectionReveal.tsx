'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export function SectionReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 1.2,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  const getClipPath = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: 'inset(100% 0% 0% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        };
      case 'down':
        return {
          hidden: 'inset(0% 0% 100% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        };
      case 'left':
        return {
          hidden: 'inset(0% 0% 0% 100%)',
          visible: 'inset(0% 0% 0% 0%)',
        };
      case 'right':
        return {
          hidden: 'inset(0% 100% 0% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        };
      default:
        return {
          hidden: 'inset(100% 0% 0% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        };
    }
  };

  const clipPaths = getClipPath();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ clipPath: clipPaths.hidden }}
        animate={isInView ? { clipPath: clipPaths.visible } : { clipPath: clipPaths.hidden }}
        transition={{
          duration,
          delay,
          ease: [0.77, 0, 0.175, 1], // Custom easing for smooth curtain effect
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Alternative: Reveal with overlay that slides away
interface OverlayRevealProps {
  children: ReactNode;
  className?: string;
  overlayColor?: string;
  delay?: number;
  duration?: number;
}

export function OverlayReveal({
  children,
  className = '',
  overlayColor = 'bg-[#FAF7F2]',
  delay = 0,
  duration = 1,
}: OverlayRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      <motion.div
        className={`absolute inset-0 ${overlayColor} z-10`}
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{
          duration,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
}
