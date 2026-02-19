'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React, { useEffect, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  variant?: 'slideUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
  delay?: number;
}

export default function AnimatedElement({
  children,
  variant = 'slideUp',
  delay = 0
}: AnimatedElementProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div ref={ref}>{children}</div>;
  }

  const getAnimationClass = (): string => {
    if (!isVisible) {
      switch (variant) {
        case 'slideUp':
          return 'animation-slideup-hidden';
        case 'fadeIn':
          return 'animation-fadein-hidden';
        case 'slideLeft':
          return 'animation-slideleft-hidden';
        case 'slideRight':
          return 'animation-slideright-hidden';
        default:
          return 'animation-slideup-hidden';
      }
    }

    switch (variant) {
      case 'slideUp':
        return 'animation-slideup-visible';
      case 'fadeIn':
        return 'animation-fadein-visible';
      case 'slideLeft':
        return 'animation-slideleft-visible';
      case 'slideRight':
        return 'animation-slideright-visible';
      default:
        return 'animation-slideup-visible';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0)'
          : variant === 'slideUp'
          ? 'translateY(20px)'
          : variant === 'slideLeft'
          ? 'translateX(20px)'
          : variant === 'slideRight'
          ? 'translateX(-20px)'
          : 'scale(0.95)',
        transition: `all 0.5s ease-out ${delay}ms`,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
}
