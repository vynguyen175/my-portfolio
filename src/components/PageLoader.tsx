'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF7F2]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo/Name Reveal */}
            <div className="overflow-hidden pb-4">
              <motion.h1
                className="font-display text-5xl md:text-7xl font-bold text-[#2D2522]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                Vy
              </motion.h1>
            </div>

            {/* Animated line - gold gradient */}
            <motion.div
              className="mt-6 h-[2px] bg-gradient-to-r from-[#A62626] via-[#C9A54D] to-[#A62626]"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            />

            {/* Loading text */}
            <motion.p
              className="mt-4 text-sm text-[#6B5B4F] tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.p>

            {/* Progress indicator - elegant spinner */}
            <motion.div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <motion.div
                className="w-8 h-8 border-2 border-[#E8D5A8] border-t-[#A62626] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 pattern-textile opacity-50" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
