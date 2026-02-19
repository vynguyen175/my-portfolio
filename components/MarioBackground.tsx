'use client';

import { useEffect, useRef } from 'react';
import { useThemeSafe } from '@/hooks/useThemeSafe';
import {
  generateCloudSprite,
  generateBushSprite,
  generateGroundTile,
  generateQuestionBlock,
  generateBrickBlock,
  generatePipe,
  generateGoomba,
  generateKoopa,
  generateStar,
  generateCoinFrames,
  generateShyGuy,
  generateFireFlower,
} from '@/lib/spriteGenerator';

interface MarioBackgroundProps {
  backgroundColor?: string;
  children?: React.ReactNode;
}

function MarioBackgroundContent({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useThemeSafe();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw gradient background based on theme
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (theme === 'light') {
      gradient.addColorStop(0, '#5c94fc');
      gradient.addColorStop(1, '#ffd700');
    } else {
      // Night sky theme
      gradient.addColorStop(0, '#0a1929');
      gradient.addColorStop(0.5, '#1a237e');
      gradient.addColorStop(1, '#0d47a1');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stars in dark mode
    if (theme === 'dark') {
      ctx.fillStyle = '#ffffff';
      // Create stars with seeded random positions
      const starCount = 50;
      for (let i = 0; i < starCount; i++) {
        const x = (i * 137.5) % canvas.width; // Use golden ratio for distribution
        const y = (i * 73.3) % (canvas.height * 0.6); // Only in upper 60%
        const size = Math.sin(i * 0.5) * 1.5 + 1; // Vary size
        ctx.fillRect(x, y, size, size);
      }
    }

      // Draw clouds (multiple layers)
      const cloudCanvas = generateCloudSprite();
      const clouds = [
        { x: 50, y: 80 },
        { x: 300, y: 120 },
        { x: 600, y: 100 },
        { x: 900, y: 140 },
        { x: 1100, y: 90 },
        { x: 1400, y: 130 }
      ];
      clouds.forEach(cloud => {
        if (cloud.x < canvas.width) ctx.drawImage(cloudCanvas, cloud.x, cloud.y);
      });

      // Draw bushes (more of them)
      const bushCanvas = generateBushSprite();
      const bushes = [
        { x: 100, y: canvas.height - 300 },
        { x: 400, y: canvas.height - 320 },
        { x: 700, y: canvas.height - 310 },
        { x: 1000, y: canvas.height - 330 },
        { x: 1300, y: canvas.height - 315 }
      ];
      bushes.forEach(bush => {
        if (bush.x < canvas.width) ctx.drawImage(bushCanvas, bush.x, bush.y);
      });

      // Draw decorative blocks
      const questionBlockCanvas = generateQuestionBlock();
      const brickBlockCanvas = generateBrickBlock();
      const pipeCanvas = generatePipe();

      // Question blocks
      const groundLevel = canvas.height - 150;
      ctx.drawImage(questionBlockCanvas, 200, groundLevel - 150);
      ctx.drawImage(questionBlockCanvas, 500, groundLevel - 180);
      ctx.drawImage(questionBlockCanvas, 800, groundLevel - 160);
      ctx.drawImage(questionBlockCanvas, 1100, groundLevel - 170);

      // Brick blocks
      ctx.drawImage(brickBlockCanvas, 350, groundLevel - 150);
      ctx.drawImage(brickBlockCanvas, 650, groundLevel - 150);
      ctx.drawImage(brickBlockCanvas, 950, groundLevel - 150);
      ctx.drawImage(brickBlockCanvas, 1250, groundLevel - 150);

      // Pipes
      ctx.drawImage(pipeCanvas, 150, groundLevel - 100);
      ctx.drawImage(pipeCanvas, 750, groundLevel - 120);
      ctx.drawImage(pipeCanvas, 1300, groundLevel - 110);

    // Decorative elements removed for cleaner look

    // Draw ground (taller)
    const groundY = canvas.height - 140;
    ctx.fillStyle = theme === 'dark' ? '#2c2416' : '#8b7355';
    ctx.fillRect(0, groundY, canvas.width, 140);

    // Draw ground underside
    ctx.fillStyle = theme === 'dark' ? '#1a1410' : '#6B5344';
    ctx.fillRect(0, groundY + 100, canvas.width, 40);

    const groundTileCanvas = generateGroundTile();
    const tileW = 48;
    for (let x = 0; x < canvas.width + tileW; x += tileW) {
      ctx.drawImage(groundTileCanvas, x, groundY);
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redraw on resize (in a real app, would optimize this)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-y-auto">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function MarioBackground({ backgroundColor = 'from-blue-200 to-yellow-100', children }: MarioBackgroundProps) {
  return (
    <MarioBackgroundContent>{children}</MarioBackgroundContent>
  );
}
