'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  generateLuckyBoxSprite,
  generateLuckyBoxHitSprite,
  generateCoinFrames,
  generateCloudSprite,
  generateBushSprite,
  generateGroundTile,
  generatePipe,
} from '@/lib/spriteGenerator';

export default function MarioGame() {
  const gameRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const initGame = async () => {
      // Always destroy previous game before creating new one
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }

      const PhaserModule = await import('phaser');
      const Phaser = PhaserModule.default || PhaserModule;

      class GameScene extends Phaser.Scene {
        constructor() {
          super('GameScene');
        }

        preload() {
          // Load Mario sprites
          this.load.image('mario-idle', '/sprites/mario-idle.png');
          this.load.image('mario-run', '/sprites/mario-run.png');

          // Environment sprites
          this.textures.addCanvas('lucky-box', generateLuckyBoxSprite());
          this.textures.addCanvas('lucky-box-hit', generateLuckyBoxHitSprite());
          this.textures.addCanvas('cloud', generateCloudSprite());
          this.textures.addCanvas('bush', generateBushSprite());
          this.textures.addCanvas('ground-tile', generateGroundTile());
          this.textures.addCanvas('pipe', generatePipe());

          // Coin animation frames
          const coinCanvases = generateCoinFrames();
          coinCanvases.forEach((c, i) => {
            this.textures.addCanvas(`coin-${i}`, c);
          });
        }

        create() {
          const w = this.scale.width;
          const h = this.scale.height;
          const groundHeight = 220;
          const groundY = h - groundHeight / 2;
          const skyHeight = h - groundHeight;

          // Check for dark mode
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          const skyColor = isDark ? 0x0a1929 : 0x5c94fc;
          const groundColor = isDark ? 0x2c2416 : 0x8b7355;

          console.log('Game Create - Dark mode:', isDark, 'Sky color:', skyColor.toString(16));

          // Sky gradient
          const skyRect = this.add.rectangle(w / 2, skyHeight / 2, w, skyHeight, skyColor);
          this.data.set('skyRect', skyRect);
          this.data.set('isDark', isDark);

          // Add stars in dark mode
          const stars: any[] = [];
          if (isDark) {
            for (let i = 0; i < 40; i++) {
              const x = Math.random() * w;
              const y = Math.random() * (skyHeight * 0.6);
              stars.push(this.add.rectangle(x, y, 2, 2, 0xffffff));
            }
          }
          this.data.set('stars', stars);

          // Cloud layer (will parallax) - responsive positioning
          const cloudGroup = this.add.container(0, 0);
          const cloudPositions = [
            { x: Math.max(150, w * 0.15), y: 180, scale: 1.5 },
            { x: Math.max(350, w * 0.4), y: 160, scale: 2 },
            { x: Math.max(550, w * 0.65), y: 190, scale: 1.3 },
            ...(w > 900 ? [{ x: Math.max(800, w * 0.85), y: 170, scale: 1.7 }] : []),
          ];
          cloudPositions.forEach((pos) => {
            const cloud = this.add.image(pos.x, pos.y, 'cloud').setScale(pos.scale);
            cloudGroup.add(cloud);
          });

          // Ground fill
          const groundDisplay = this.add.rectangle(w / 2, groundY, w, groundHeight, groundColor);
          this.data.set('groundDisplay', groundDisplay);

          // Ground tiles layer (will parallax)
          const groundTilesGroup = this.add.container(0, 0);
          const tileW = 48;
          for (let gx = tileW / 2; gx < w + tileW * 3; gx += tileW) {
            const tile = this.add.image(gx, h - groundHeight + tileW / 2, 'ground-tile');
            groundTilesGroup.add(tile);
          }

          // Bush layer (will parallax) - responsive positioning
          const bushGroup = this.add.container(0, 0);
          const bushPositions = [
            { x: Math.max(150, w * 0.25), y: h - groundHeight - 10, scale: 1.3 },
            { x: Math.max(400, w * 0.6), y: h - groundHeight - 10, scale: 1.6 },
            ...(w > 900 ? [{ x: Math.max(700, w * 0.85), y: h - groundHeight - 10, scale: 1.2 }] : []),
          ];
          bushPositions.forEach((pos) => {
            const bush = this.add.image(pos.x, pos.y, 'bush').setScale(pos.scale);
            bushGroup.add(bush);
          });

          // Brick top position (where Mario stands)
          const brickTop = h - groundHeight;

          // Mario — standing ON TOP of the brick row
          const marioX = 120;
          const marioScale = 0.6;
          const marioHeight = 150 * marioScale; // Approximate sprite height
          const marioGroundY = brickTop - (marioHeight / 2) - 5; // Center Y so feet touch bricks

          // Create Mario sprite (idle)
          const mario = this.add.sprite(marioX, marioGroundY, 'mario-idle');
          mario.setScale(marioScale);
          mario.setDepth(100); // Ensure Mario is above other elements

          // Store the ground Y position
          this.data.set('marioGroundY', marioGroundY);

          (mario as any).direction = 1; // 1 = right, -1 = left

          // Lucky boxes — positioned in center/right area with responsive spacing
          const boxes = this.physics.add.staticGroup();
          const boxY = 85;

          // Responsive box scale and spacing based on screen width
          let boxScale: number;
          let boxSpacing: number;
          let startX: number;

          if (w < 600) {
            // Very small screens
            boxScale = 1.5;
            boxSpacing = 80;
            startX = 50;
          } else if (w < 768) {
            // Mobile
            boxScale = 1.8;
            boxSpacing = 110;
            startX = 60;
          } else if (w < 1024) {
            // Tablet
            boxScale = 2.2;
            boxSpacing = 150;
            startX = 80;
          } else {
            // Desktop
            boxScale = 2.5;
            boxSpacing = 200;
            startX = w / 2 - 100;
          }

          // Ensure the last box doesn't go off-screen
          const rightmostBoxX = startX + boxSpacing * 3 + (80 * boxScale);
          if (rightmostBoxX > w - 30) {
            // Adjust spacing if it exceeds screen bounds
            startX = Math.max(40, w - (boxSpacing * 3) - (160 * boxScale));
          }

          const boxPositions = [
            { x: startX, y: boxY, label: 'skills' },
            { x: startX + boxSpacing, y: boxY, label: 'projects' },
            { x: startX + boxSpacing * 2, y: boxY, label: 'about' },
            { x: startX + boxSpacing * 3, y: boxY, label: 'contact' },
          ];

          // Create pipes array to store pipe data for collision
          const pipes: any[] = [];
          const pipeScale = w < 768 ? 2 : 2.5;
          const pipeHeight = 48 * pipeScale; // Pipe sprite is 16 pixels tall at 3x render = 48, then scaled
          const pipeY = brickTop - pipeHeight / 2; // Position pipe on ground

          boxPositions.forEach((pos) => {
            const box = this.add.sprite(pos.x, pos.y, 'lucky-box');
            box.setScale(boxScale);
            box.setData('label', pos.label);
            box.setData('hit', false);
            boxes.add(box);

            // Label text under the box
            this.add.text(pos.x, pos.y + 42, pos.label.toUpperCase(), {
              fontSize: '16px',
              fontFamily: '"Press Start 2P", monospace, Arial',
              color: '#FFFFFF',
              stroke: '#000000',
              strokeThickness: 4,
              align: 'center',
            }).setOrigin(0.5, 0);

            // Create pipe below each box
            const pipe = this.add.sprite(pos.x, pipeY, 'pipe');
            pipe.setScale(pipeScale);
            pipe.setDepth(50);
            pipe.setData('label', pos.label);
            pipes.push({
              sprite: pipe,
              x: pos.x,
              topY: pipeY - pipeHeight / 2, // Top of the pipe
              width: 36 * pipeScale, // Pipe sprite is 12 pixels wide at 3x render = 36
              label: pos.label,
            });
          });

          this.data.set('pipes', pipes);
          this.data.set('pipeTopY', pipeY - pipeHeight / 2); // Y position of pipe top for landing

          this.input.on('pointerdown', (pointer: any) => {
            const clickedBox = boxes.getChildren().find((child: any) => {
              return Phaser.Math.Distance.Between(pointer.x, pointer.y, child.x, child.y) < 60;
            });

            if (clickedBox) {
              this.marioWalkToBox(mario, clickedBox, Phaser);
            }
          });

          this.data.set('mario', mario);
          this.data.set('boxes', boxes);
          this.data.set('isWalking', false);
          this.data.set('parallaxOffset', 0);
          this.data.set('cloudGroup', cloudGroup);
          this.data.set('groundTilesGroup', groundTilesGroup);
          this.data.set('bushGroup', bushGroup);

          // Keyboard controls setup
          const cursors = this.input.keyboard!.createCursorKeys();
          const spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
          this.data.set('cursors', cursors);
          this.data.set('spaceKey', spaceKey);
          this.data.set('isJumping', false);
          this.data.set('spaceWasDown', false);
          this.data.set('marioSpeed', 300);
          this.data.set('jumpVelocity', -600);
          this.data.set('marioVelocityY', 0);
          this.data.set('gravity', 1200);
          this.data.set('currentFloor', 'ground'); // 'ground' or 'pipe'
        }

        update(_time: number, delta: number) {
          const mario = this.data.get('mario');
          const cursors = this.data.get('cursors');
          const spaceKey = this.data.get('spaceKey');
          const isWalking = this.data.get('isWalking');
          const groundY = this.data.get('marioGroundY');
          const boxes = this.data.get('boxes');
          const pipes = this.data.get('pipes');

          if (!mario || !cursors || isWalking) return;

          const speed = this.data.get('marioSpeed');
          const deltaSeconds = delta / 1000;
          const screenWidth = this.scale.width;
          const marioHalfHeight = (mario.height * mario.scaleY) / 2;
          const marioHalfWidth = (mario.width * mario.scaleX) / 2;

          // Horizontal movement
          let isMoving = false;
          if (cursors.left.isDown) {
            mario.x -= speed * deltaSeconds;
            mario.setTexture('mario-run');
            mario.setFlipX(true);
            isMoving = true;
          } else if (cursors.right.isDown) {
            mario.x += speed * deltaSeconds;
            mario.setTexture('mario-run');
            mario.setFlipX(false);
            isMoving = true;
          }

          // Keep Mario within screen bounds
          mario.x = Math.max(marioHalfWidth, Math.min(screenWidth - marioHalfWidth, mario.x));

          // Jump logic
          let isJumping = this.data.get('isJumping');
          let velocityY = this.data.get('marioVelocityY');
          const gravity = this.data.get('gravity');
          const jumpVelocity = this.data.get('jumpVelocity');
          const spaceWasDown = this.data.get('spaceWasDown');
          let currentFloor = this.data.get('currentFloor');

          // Detect space key press (only trigger once per press)
          if (spaceKey.isDown && !spaceWasDown && !isJumping) {
            isJumping = true;
            this.data.set('isJumping', true);
            velocityY = jumpVelocity;
            this.data.set('marioVelocityY', velocityY);
            mario.setTexture('mario-run');
          }
          this.data.set('spaceWasDown', spaceKey.isDown);

          if (isJumping) {
            // Apply gravity
            velocityY += gravity * deltaSeconds;
            mario.y += velocityY * deltaSeconds;

            const marioBottom = mario.y + marioHalfHeight;
            const marioLeft = mario.x - marioHalfWidth;
            const marioRight = mario.x + marioHalfWidth;
            const marioTop = mario.y - marioHalfHeight;

            // Check for box collision while jumping upward
            if (velocityY < 0) {
              const boxChildren = boxes.getChildren();
              for (const box of boxChildren) {
                const boxSprite = box as any;
                const boxBounds = {
                  left: boxSprite.x - (boxSprite.width * boxSprite.scaleX) / 2,
                  right: boxSprite.x + (boxSprite.width * boxSprite.scaleX) / 2,
                  top: boxSprite.y - (boxSprite.height * boxSprite.scaleY) / 2,
                  bottom: boxSprite.y + (boxSprite.height * boxSprite.scaleY) / 2,
                };

                // Check if Mario's head hits the box from below
                if (
                  marioTop <= boxBounds.bottom &&
                  marioTop >= boxBounds.top - 20 &&
                  marioRight > boxBounds.left &&
                  marioLeft < boxBounds.right &&
                  !boxSprite.getData('hit')
                ) {
                  // Hit the box!
                  this.data.set('isWalking', true); // Prevent further input
                  this.triggerBoxHit(mario, boxSprite, groundY);
                  return;
                }
              }
            }

            // Check for pipe collision while falling
            if (velocityY > 0 && pipes) {
              for (const pipe of pipes) {
                const pipeLeft = pipe.x - pipe.width / 2;
                const pipeRight = pipe.x + pipe.width / 2;
                const pipeTop = pipe.topY;

                // Check if Mario lands on top of pipe
                if (
                  marioRight > pipeLeft &&
                  marioLeft < pipeRight &&
                  marioBottom >= pipeTop &&
                  marioBottom <= pipeTop + 30 // Small tolerance
                ) {
                  // Land on pipe
                  mario.y = pipeTop - marioHalfHeight;
                  this.data.set('isJumping', false);
                  this.data.set('currentFloor', 'pipe');
                  velocityY = 0;
                  this.data.set('marioVelocityY', velocityY);
                  return;
                }
              }
            }

            // Land on ground
            if (mario.y >= groundY) {
              mario.y = groundY;
              this.data.set('isJumping', false);
              this.data.set('currentFloor', 'ground');
              velocityY = 0;
            }

            this.data.set('marioVelocityY', velocityY);
          } else {
            // Not jumping - check if Mario walks off a pipe
            if (currentFloor === 'pipe' && pipes) {
              let onPipe = false;
              const marioLeft = mario.x - marioHalfWidth;
              const marioRight = mario.x + marioHalfWidth;

              for (const pipe of pipes) {
                const pipeLeft = pipe.x - pipe.width / 2;
                const pipeRight = pipe.x + pipe.width / 2;

                if (marioRight > pipeLeft && marioLeft < pipeRight) {
                  onPipe = true;
                  break;
                }
              }

              // If Mario walked off the pipe, start falling
              if (!onPipe) {
                this.data.set('isJumping', true);
                this.data.set('marioVelocityY', 0);
                this.data.set('currentFloor', 'ground');
              }
            }
          }

          // Set to idle if not moving and on ground
          if (!isMoving && !isJumping) {
            mario.setTexture('mario-idle');
            mario.setFlipX(false);
          }
        }

        marioWalkToBox(mario: any, box: any, Phaser: any) {
          if (this.data.get('isWalking')) return;
          this.data.set('isWalking', true);

          const targetX = box.x;
          const dist = Math.abs(mario.x - targetX);
          const maxDuration = 2000;
          const minDuration = 400;
          const duration = Math.max(minDuration, Math.min(maxDuration, dist * 3));

          // Direction: moving right = positive, left = negative
          const direction = targetX > mario.x ? 1 : -1;
          mario.direction = direction;

          // Switch to running sprite and flip if moving left
          mario.setTexture('mario-run');
          mario.setFlipX(direction < 0);

          const cloudGroup = this.data.get('cloudGroup');
          const groundTilesGroup = this.data.get('groundTilesGroup');
          const bushGroup = this.data.get('bushGroup');

          this.tweens.add({
            targets: mario,
            x: targetX,
            duration: duration,
            ease: 'Linear',
            onUpdate: (tween: any) => {
              // Parallax effect: move background opposite to Mario's movement
              const progress = tween.progress;
              const parallaxAmount = progress * dist * -direction;

              // Clouds move less (appear distant)
              cloudGroup.x = parallaxAmount * 0.3;

              // Ground tiles move more (appear closer)
              groundTilesGroup.x = parallaxAmount * 0.6;

              // Bushes move with ground
              bushGroup.x = parallaxAmount * 0.6;
            },
            onComplete: () => {
              mario.setFlipX(false);
              // Reset parallax offset
              cloudGroup.x = 0;
              groundTilesGroup.x = 0;
              bushGroup.x = 0;
              this.jumpAndHit(mario, box, Phaser);
            },
          });
        }

        jumpAndHit(mario: any, box: any, Phaser: any) {
          // Make sure mario is using the run sprite during jump
          mario.setTexture('mario-run');
          mario.setFlipX(mario.direction < 0);

          const groundY = this.data.get('marioGroundY');
          const targetY = box.y + 70; // Jump to hit the box from below

          // Jump up to the box
          this.tweens.add({
            targets: mario,
            y: targetY,
            duration: 300,
            ease: 'Quad.easeOut',
            onComplete: () => {
              this.triggerBoxHit(mario, box, groundY);
            },
          });
        }

        triggerBoxHit(mario: any, box: any, groundY: number) {
          // Bounce the box
          const origY = box.y;
          this.tweens.add({
            targets: box,
            y: origY - 15,
            duration: 80,
            yoyo: true,
            ease: 'Bounce.easeOut',
          });

          // Change box to "hit" (used) state
          if (!box.getData('hit')) {
            box.setData('hit', true);
            box.setTexture('lucky-box-hit');
          }
          this.spawnCoin(box);

          // Mario falls back down to ground level (never below bricks)
          this.tweens.add({
            targets: mario,
            y: groundY,
            duration: 350,
            ease: 'Cubic.easeIn',
            onComplete: () => {
              // Ensure Mario is exactly at ground level
              mario.setY(groundY);
              mario.setTexture('mario-idle');
              mario.setFlipX(false);
              this.data.set('isWalking', false);
              const label = box.getData('label');
              router.push(`/${label}`);
            },
          });
        }

        spawnCoin(box: any) {
          const coin = this.add.sprite(box.x, box.y - 30, 'coin-0');

          // Coin spin animation
          let frame = 0;
          const spinTimer = this.time.addEvent({
            delay: 80,
            loop: true,
            callback: () => {
              frame = (frame + 1) % 4;
              coin.setTexture(`coin-${frame}`);
            },
          });

          this.tweens.add({
            targets: coin,
            y: box.y - 140,
            alpha: 0,
            duration: 800,
            ease: 'Cubic.easeOut',
            onComplete: () => {
              spinTimer.destroy();
              coin.destroy();
            },
          });
        }
      }

      const config: any = {
        type: Phaser.AUTO,
        parent: 'game-container',
        width: window.innerWidth,
        height: window.innerHeight,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 1200 },
            debug: false,
          },
        },
        scene: GameScene,
        scale: {
          mode: Phaser.Scale.RESIZE,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        render: {
          pixelArt: true,
          antialias: false,
        },
      };

      const game = new Phaser.Game(config);
      gameRef.current = game;

      // Watch for theme changes and update colors dynamically
      const updateThemeColors = () => {
        const scene = game.scene.getScene('GameScene') as any;
        if (!scene) return;

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const skyColor = isDark ? 0x0a1929 : 0x5c94fc;
        const groundColor = isDark ? 0x2c2416 : 0x8b7355;

        console.log('Theme changed! Updating colors - Dark mode:', isDark);

        // Update sky color
        const skyRect = scene.data.get('skyRect');
        if (skyRect) {
          skyRect.setFillStyle(skyColor);
        }

        // Update ground color
        const groundDisplay = scene.data.get('groundDisplay');
        if (groundDisplay) {
          groundDisplay.setFillStyle(groundColor);
        }

        // Update or create stars
        const oldStars = scene.data.get('stars') || [];
        oldStars.forEach((star: any) => star.destroy());

        const w = scene.scale.width;
        const h = scene.scale.height;
        const skyHeight = h - 220;

        const newStars: any[] = [];
        if (isDark) {
          for (let i = 0; i < 40; i++) {
            const x = Math.random() * w;
            const y = Math.random() * (skyHeight * 0.6);
            newStars.push(scene.add.rectangle(x, y, 2, 2, 0xffffff));
          }
        }
        scene.data.set('stars', newStars);
      };

      // Listen for changes to data-theme attribute
      const htmlElement = document.documentElement;
      const observer = new MutationObserver(updateThemeColors);
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });

      // Store observer for cleanup
      (gameRef as any).themeObserver = observer;
    };

    initGame();

    return () => {
      // Clean up theme observer
      if ((gameRef as any).themeObserver) {
        (gameRef as any).themeObserver.disconnect();
      }
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [router]);

  return (
    <div
      id="game-container"
      style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
    />
  );
}
