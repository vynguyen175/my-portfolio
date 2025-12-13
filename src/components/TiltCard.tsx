'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
  scaleOnHover?: boolean;
}

export function TiltCard({
  children,
  className = '',
  tiltAmount = 15,
  glareEnabled = true,
  scaleOnHover = true
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig);
  const scale = useSpring(1, springConfig);

  // Glare position
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareOpacity = useSpring(0, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    x.set(mouseX * 0.5);
    y.set(mouseY * 0.5);
  };

  const handleMouseEnter = () => {
    if (scaleOnHover) scale.set(1.02);
    if (glareEnabled) glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
}

// Project card with 3D effect
interface ProjectCard3DProps {
  title: string;
  category: string;
  onClick?: () => void;
  className?: string;
}

export function ProjectCard3D({
  title,
  category,
  onClick,
  className = ''
}: ProjectCard3DProps) {
  return (
    <TiltCard className={`group cursor-pointer ${className}`}>
      <motion.div
        onClick={onClick}
        className="relative aspect-[4/3] rounded-2xl bg-neutral-900 overflow-hidden border border-neutral-800"
        whileHover={{ borderColor: 'rgb(64 64 64)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.div>
        </div>

        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* View project text */}
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm text-neutral-400">View Project</span>
        </motion.div>
      </motion.div>

      {/* Card info */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <motion.h3
            className="text-xl font-medium text-white"
            whileHover={{ color: 'rgb(163 163 163)' }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.svg
            className="w-5 h-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 3, y: -3, color: 'white' }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </motion.svg>
        </div>
        <p className="text-sm text-neutral-500">{category}</p>
      </div>
    </TiltCard>
  );
}

// Floating card animation
interface FloatingCardProps {
  children?: ReactNode;
  className?: string;
  floatAmount?: number;
  duration?: number;
}

export function FloatingCard({
  children,
  className = '',
  floatAmount = 15,
  duration = 4
}: FloatingCardProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -floatAmount, 0],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Shine effect on hover
interface ShineCardProps {
  children: ReactNode;
  className?: string;
}

export function ShineCard({ children, className = '' }: ShineCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        variants={{
          initial: { x: '-100%' },
          hover: { x: '200%' },
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
