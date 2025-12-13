'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  radius = 200
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < radius) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Hover scale effect for links and buttons
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({ children, className = '', scale = 1.05 }: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

// Animated button with hover effect
interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function AnimatedButton({ children, className = '', href, onClick }: AnimatedButtonProps) {
  const buttonContent = (
    <motion.span
      className={`relative inline-flex items-center gap-2 overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="relative z-10"
        variants={{
          initial: { y: 0 },
          hover: { y: -30 },
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          initial: { y: 30 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}

// Underline link animation
interface AnimatedLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function AnimatedLink({ children, href, className = '' }: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-current"
        variants={{
          initial: { width: 0 },
          hover: { width: '100%' },
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.a>
  );
}

// Glow effect on hover
interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowButton({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.5)'
}: GlowButtonProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ backgroundColor: glowColor }}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1.2 },
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
