import React from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface CubeSpec {
  id: number;
  size: number;                 // Cube edge in px (10 to 32)
  xPercent: number;             // % from left (50% to 92% - clear of left text column)
  yPercent: number;             // Initial % from top across the continuous scroll journey (18% to 370%)
  zDepth: number;               // translateZ depth (-75px to 85px)
  blurPx: number;               // Depth of field blur (0 for mid, 0.8-1.2 for close foreground)
  opacity: number;              // 0.35 to 0.95
  rotateDuration: number;       // Duration of slow tumble in seconds
  bobDuration: number;          // Duration of gentle vertical bob in seconds
  delay: number;                // Animation phase delay in seconds
  travelHeightPercent: number;  // Multiplier for upward vertical ascent on scroll
  scrollXFactor: number;        // Lateral drift across caverns on scroll
  scrollZFactor: number;        // Depth drift on scroll
  scrollRotX: number;           // Extra rotational tumble on scroll along X
  scrollRotY: number;           // Extra rotational tumble on scroll along Y
}

/**
 * 36 Carefully Orchestrated 3D Voxel Cubes divided into 4 Continuous Scroll Waves:
 *
 * Wave 1: Hero Portal Emergence (IDs 1-8)     - Initial view
 * Wave 2: About Cavern Ascending Stream (IDs 9-17)   - Ascends as user scrolls into About
 * Wave 3: Events Floating Monolith Fleet (IDs 18-26) - Ascends as user scrolls into Events
 * Wave 4: Rules Matrix Orbital Cluster (IDs 27-36)  - Ascends as user scrolls into Rules
 */
const CUBE_SPECS: CubeSpec[] = [
  // ── WAVE 1: HERO DIMENSION (Visible on initial load, ascends on scroll) ──────
  {
    id: 1,
    size: 28,
    xPercent: 54,
    yPercent: 28,
    zDepth: 75,
    blurPx: 1.0,
    opacity: 0.90,
    rotateDuration: 18,
    bobDuration: 4.5,
    delay: 0.5,
    travelHeightPercent: 210,
    scrollXFactor: 45,
    scrollZFactor: 55,
    scrollRotX: 180,
    scrollRotY: 220,
  },
  {
    id: 2,
    size: 24,
    xPercent: 86,
    yPercent: 62,
    zDepth: 60,
    blurPx: 0.8,
    opacity: 0.85,
    rotateDuration: 16,
    bobDuration: 4.2,
    delay: 1.2,
    travelHeightPercent: 220,
    scrollXFactor: -30,
    scrollZFactor: 40,
    scrollRotX: -160,
    scrollRotY: 190,
  },
  {
    id: 3,
    size: 22,
    xPercent: 76,
    yPercent: 32,
    zDepth: 50,
    blurPx: 0.6,
    opacity: 0.88,
    rotateDuration: 19,
    bobDuration: 4.8,
    delay: 1.8,
    travelHeightPercent: 205,
    scrollXFactor: 35,
    scrollZFactor: 45,
    scrollRotX: 150,
    scrollRotY: -170,
  },
  {
    id: 4,
    size: 18,
    xPercent: 68,
    yPercent: 20,
    zDepth: 25,
    blurPx: 0,
    opacity: 0.92,
    rotateDuration: 22,
    bobDuration: 5.0,
    delay: 2.1,
    travelHeightPercent: 190,
    scrollXFactor: 25,
    scrollZFactor: 15,
    scrollRotX: 130,
    scrollRotY: 160,
  },
  {
    id: 5,
    size: 16,
    xPercent: 62,
    yPercent: 68,
    zDepth: 15,
    blurPx: 0,
    opacity: 0.85,
    rotateDuration: 20,
    bobDuration: 4.8,
    delay: 0.8,
    travelHeightPercent: 195,
    scrollXFactor: 40,
    scrollZFactor: 20,
    scrollRotX: -120,
    scrollRotY: 150,
  },
  {
    id: 6,
    size: 15,
    xPercent: 82,
    yPercent: 44,
    zDepth: 10,
    blurPx: 0,
    opacity: 0.88,
    rotateDuration: 24,
    bobDuration: 5.5,
    delay: 3.0,
    travelHeightPercent: 185,
    scrollXFactor: -20,
    scrollZFactor: 10,
    scrollRotX: 140,
    scrollRotY: -130,
  },
  {
    id: 7,
    size: 12,
    xPercent: 51,
    yPercent: 52,
    zDepth: -45,
    blurPx: 0,
    opacity: 0.48,
    rotateDuration: 26,
    bobDuration: 6.0,
    delay: 1.5,
    travelHeightPercent: 160,
    scrollXFactor: 15,
    scrollZFactor: -20,
    scrollRotX: 80,
    scrollRotY: 100,
  },
  {
    id: 8,
    size: 11,
    xPercent: 73,
    yPercent: 78,
    zDepth: -65,
    blurPx: 0,
    opacity: 0.42,
    rotateDuration: 28,
    bobDuration: 6.2,
    delay: 2.7,
    travelHeightPercent: 150,
    scrollXFactor: 20,
    scrollZFactor: -30,
    scrollRotX: -70,
    scrollRotY: 90,
  },

  // ── WAVE 2: ABOUT DIMENSION (Ascends from below as user scrolls to About) ────
  {
    id: 9,
    size: 26,
    xPercent: 58,
    yPercent: 102,
    zDepth: 70,
    blurPx: 0.9,
    opacity: 0.92,
    rotateDuration: 17,
    bobDuration: 4.4,
    delay: 0.9,
    travelHeightPercent: 230,
    scrollXFactor: 35,
    scrollZFactor: 50,
    scrollRotX: 170,
    scrollRotY: -190,
  },
  {
    id: 10,
    size: 20,
    xPercent: 80,
    yPercent: 115,
    zDepth: 45,
    blurPx: 0.5,
    opacity: 0.88,
    rotateDuration: 19,
    bobDuration: 4.7,
    delay: 1.6,
    travelHeightPercent: 220,
    scrollXFactor: -25,
    scrollZFactor: 35,
    scrollRotX: -150,
    scrollRotY: 180,
  },
  {
    id: 11,
    size: 17,
    xPercent: 66,
    yPercent: 125,
    zDepth: 20,
    blurPx: 0,
    opacity: 0.90,
    rotateDuration: 21,
    bobDuration: 4.9,
    delay: 2.3,
    travelHeightPercent: 210,
    scrollXFactor: 30,
    scrollZFactor: 20,
    scrollRotX: 140,
    scrollRotY: 160,
  },
  {
    id: 12,
    size: 22,
    xPercent: 88,
    yPercent: 135,
    zDepth: 55,
    blurPx: 0.7,
    opacity: 0.86,
    rotateDuration: 16,
    bobDuration: 4.3,
    delay: 0.7,
    travelHeightPercent: 240,
    scrollXFactor: 40,
    scrollZFactor: 45,
    scrollRotX: -180,
    scrollRotY: -210,
  },
  {
    id: 13,
    size: 14,
    xPercent: 74,
    yPercent: 148,
    zDepth: 5,
    blurPx: 0,
    opacity: 0.80,
    rotateDuration: 23,
    bobDuration: 5.2,
    delay: 1.1,
    travelHeightPercent: 190,
    scrollXFactor: -18,
    scrollZFactor: 10,
    scrollRotX: 120,
    scrollRotY: 140,
  },
  {
    id: 14,
    size: 19,
    xPercent: 60,
    yPercent: 158,
    zDepth: 35,
    blurPx: 0,
    opacity: 0.85,
    rotateDuration: 18,
    bobDuration: 4.6,
    delay: 2.8,
    travelHeightPercent: 215,
    scrollXFactor: 28,
    scrollZFactor: 25,
    scrollRotX: -130,
    scrollRotY: 170,
  },
  {
    id: 15,
    size: 13,
    xPercent: 83,
    yPercent: 168,
    zDepth: -25,
    blurPx: 0,
    opacity: 0.55,
    rotateDuration: 25,
    bobDuration: 5.8,
    delay: 1.4,
    travelHeightPercent: 170,
    scrollXFactor: 15,
    scrollZFactor: -15,
    scrollRotX: 90,
    scrollRotY: -110,
  },
  {
    id: 16,
    size: 10,
    xPercent: 52,
    yPercent: 178,
    zDepth: -60,
    blurPx: 0,
    opacity: 0.40,
    rotateDuration: 29,
    bobDuration: 6.3,
    delay: 3.1,
    travelHeightPercent: 155,
    scrollXFactor: -12,
    scrollZFactor: -25,
    scrollRotX: -80,
    scrollRotY: 95,
  },
  {
    id: 17,
    size: 30,
    xPercent: 71,
    yPercent: 185,
    zDepth: 85,
    blurPx: 1.2,
    opacity: 0.94,
    rotateDuration: 15,
    bobDuration: 4.1,
    delay: 0.3,
    travelHeightPercent: 250,
    scrollXFactor: -45,
    scrollZFactor: 60,
    scrollRotX: 200,
    scrollRotY: 230,
  },

  // ── WAVE 3: EVENTS DIMENSION (Ascends from below into Events Monolith) ───────
  {
    id: 18,
    size: 25,
    xPercent: 77,
    yPercent: 195,
    zDepth: 65,
    blurPx: 0.8,
    opacity: 0.90,
    rotateDuration: 17,
    bobDuration: 4.5,
    delay: 1.0,
    travelHeightPercent: 235,
    scrollXFactor: 32,
    scrollZFactor: 48,
    scrollRotX: 160,
    scrollRotY: -180,
  },
  {
    id: 19,
    size: 18,
    xPercent: 63,
    yPercent: 208,
    zDepth: 25,
    blurPx: 0,
    opacity: 0.88,
    rotateDuration: 20,
    bobDuration: 4.8,
    delay: 1.9,
    travelHeightPercent: 215,
    scrollXFactor: -22,
    scrollZFactor: 20,
    scrollRotX: -140,
    scrollRotY: 150,
  },
  {
    id: 20,
    size: 21,
    xPercent: 86,
    yPercent: 218,
    zDepth: 50,
    blurPx: 0.6,
    opacity: 0.87,
    rotateDuration: 18,
    bobDuration: 4.6,
    delay: 2.5,
    travelHeightPercent: 225,
    scrollXFactor: 38,
    scrollZFactor: 38,
    scrollRotX: 175,
    scrollRotY: 195,
  },
  {
    id: 21,
    size: 15,
    xPercent: 55,
    yPercent: 228,
    zDepth: 10,
    blurPx: 0,
    opacity: 0.82,
    rotateDuration: 22,
    bobDuration: 5.1,
    delay: 0.6,
    travelHeightPercent: 195,
    scrollXFactor: -16,
    scrollZFactor: 12,
    scrollRotX: -115,
    scrollRotY: 135,
  },
  {
    id: 22,
    size: 27,
    xPercent: 69,
    yPercent: 238,
    zDepth: 78,
    blurPx: 1.0,
    opacity: 0.91,
    rotateDuration: 16,
    bobDuration: 4.3,
    delay: 1.3,
    travelHeightPercent: 245,
    scrollXFactor: 42,
    scrollZFactor: 55,
    scrollRotX: 190,
    scrollRotY: -200,
  },
  {
    id: 23,
    size: 12,
    xPercent: 89,
    yPercent: 248,
    zDepth: -30,
    blurPx: 0,
    opacity: 0.52,
    rotateDuration: 27,
    bobDuration: 6.1,
    delay: 2.2,
    travelHeightPercent: 165,
    scrollXFactor: 18,
    scrollZFactor: -18,
    scrollRotX: 85,
    scrollRotY: 105,
  },
  {
    id: 24,
    size: 16,
    xPercent: 61,
    yPercent: 258,
    zDepth: 18,
    blurPx: 0,
    opacity: 0.86,
    rotateDuration: 21,
    bobDuration: 4.9,
    delay: 3.2,
    travelHeightPercent: 205,
    scrollXFactor: -26,
    scrollZFactor: 16,
    scrollRotX: 135,
    scrollRotY: -145,
  },
  {
    id: 25,
    size: 11,
    xPercent: 78,
    yPercent: 268,
    zDepth: -55,
    blurPx: 0,
    opacity: 0.44,
    rotateDuration: 28,
    bobDuration: 6.2,
    delay: 0.8,
    travelHeightPercent: 155,
    scrollXFactor: 14,
    scrollZFactor: -22,
    scrollRotX: -75,
    scrollRotY: 90,
  },
  {
    id: 26,
    size: 23,
    xPercent: 84,
    yPercent: 276,
    zDepth: 58,
    blurPx: 0.7,
    opacity: 0.89,
    rotateDuration: 17,
    bobDuration: 4.4,
    delay: 1.7,
    travelHeightPercent: 230,
    scrollXFactor: 36,
    scrollZFactor: 42,
    scrollRotX: -165,
    scrollRotY: 185,
  },

  // ── WAVE 4: RULES DIMENSION (Ascends from below into Rules Security Matrix) ──
  {
    id: 27,
    size: 29,
    xPercent: 57,
    yPercent: 288,
    zDepth: 80,
    blurPx: 1.1,
    opacity: 0.93,
    rotateDuration: 16,
    bobDuration: 4.2,
    delay: 0.4,
    travelHeightPercent: 245,
    scrollXFactor: -38,
    scrollZFactor: 58,
    scrollRotX: 185,
    scrollRotY: 215,
  },
  {
    id: 28,
    size: 19,
    xPercent: 75,
    yPercent: 298,
    zDepth: 30,
    blurPx: 0,
    opacity: 0.87,
    rotateDuration: 21,
    bobDuration: 4.8,
    delay: 1.5,
    travelHeightPercent: 215,
    scrollXFactor: 26,
    scrollZFactor: 24,
    scrollRotX: 145,
    scrollRotY: -165,
  },
  {
    id: 29,
    size: 16,
    xPercent: 88,
    yPercent: 308,
    zDepth: 15,
    blurPx: 0,
    opacity: 0.84,
    rotateDuration: 23,
    bobDuration: 5.0,
    delay: 2.6,
    travelHeightPercent: 200,
    scrollXFactor: -24,
    scrollZFactor: 14,
    scrollRotX: -125,
    scrollRotY: 145,
  },
  {
    id: 30,
    size: 22,
    xPercent: 65,
    yPercent: 318,
    zDepth: 52,
    blurPx: 0.6,
    opacity: 0.89,
    rotateDuration: 18,
    bobDuration: 4.5,
    delay: 0.8,
    travelHeightPercent: 225,
    scrollXFactor: 34,
    scrollZFactor: 40,
    scrollRotX: 160,
    scrollRotY: 180,
  },
  {
    id: 31,
    size: 14,
    xPercent: 81,
    yPercent: 328,
    zDepth: 0,
    blurPx: 0,
    opacity: 0.78,
    rotateDuration: 24,
    bobDuration: 5.3,
    delay: 1.8,
    travelHeightPercent: 190,
    scrollXFactor: 16,
    scrollZFactor: 8,
    scrollRotX: 110,
    scrollRotY: -130,
  },
  {
    id: 32,
    size: 26,
    xPercent: 53,
    yPercent: 338,
    zDepth: 72,
    blurPx: 0.9,
    opacity: 0.91,
    rotateDuration: 17,
    bobDuration: 4.4,
    delay: 2.9,
    travelHeightPercent: 240,
    scrollXFactor: -40,
    scrollZFactor: 52,
    scrollRotX: -175,
    scrollRotY: 195,
  },
  {
    id: 33,
    size: 11,
    xPercent: 72,
    yPercent: 348,
    zDepth: -45,
    blurPx: 0,
    opacity: 0.46,
    rotateDuration: 27,
    bobDuration: 6.0,
    delay: 1.2,
    travelHeightPercent: 165,
    scrollXFactor: 22,
    scrollZFactor: -18,
    scrollRotX: 80,
    scrollRotY: 95,
  },
  {
    id: 34,
    size: 17,
    xPercent: 85,
    yPercent: 356,
    zDepth: 22,
    blurPx: 0,
    opacity: 0.85,
    rotateDuration: 20,
    bobDuration: 4.7,
    delay: 2.0,
    travelHeightPercent: 210,
    scrollXFactor: -18,
    scrollZFactor: 18,
    scrollRotX: 130,
    scrollRotY: 155,
  },
  {
    id: 35,
    size: 24,
    xPercent: 67,
    yPercent: 364,
    zDepth: 62,
    blurPx: 0.8,
    opacity: 0.88,
    rotateDuration: 19,
    bobDuration: 4.6,
    delay: 0.5,
    travelHeightPercent: 230,
    scrollXFactor: 32,
    scrollZFactor: 44,
    scrollRotX: -155,
    scrollRotY: -175,
  },
  {
    id: 36,
    size: 10,
    xPercent: 79,
    yPercent: 372,
    zDepth: -65,
    blurPx: 0,
    opacity: 0.40,
    rotateDuration: 29,
    bobDuration: 6.2,
    delay: 3.4,
    travelHeightPercent: 150,
    scrollXFactor: 15,
    scrollZFactor: -25,
    scrollRotX: -70,
    scrollRotY: 85,
  },
];

export interface VoxelCubesProps {
  scrollProgress?: number;
  activeSection?: string;
  className?: string;
}

/**
 * Real CSS 3D Floating Translucent Emerald Voxel Cubes Engine.
 *
 * Enhanced with Continuous Generative Ascent on Scroll:
 * - 36 uniquely sized and timed 3D voxel cubes across 4 dimensional waves.
 * - As the user scrolls down, new cubicles continuously emerge from below and float upwards.
 * - Smooth fade-in as cubes rise from the bottom void and fade-out as they exit top.
 * - Each cube features 6 individually lit facets and an energized emerald core.
 * - Strictly placed on the right side (50% - 92%) preserving full readability of left text column.
 */
const VoxelCubesComponent: React.FC<VoxelCubesProps> = ({
  scrollProgress = 0,
  className,
}) => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none select-none overflow-visible',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {CUBE_SPECS.map((cube) => {
        const half = cube.size / 2;
        const sp = prefersReduced ? 0 : scrollProgress;

        // Calculate continuous vertical position as cubes ascend from below
        // Each cube travels upward by: sp * travelHeightPercent (in % units)
        const verticalShiftPercent = sp * cube.travelHeightPercent;
        const currentScreenY = cube.yPercent - verticalShiftPercent;

        // Only render cubes within or near the active viewport window (-15% to 115%)
        // This keeps rendering buttery smooth at 60/120fps with zero overhead!
        if (currentScreenY < -15 || currentScreenY > 115) {
          return null;
        }

        // Calculate smooth entrance/exit opacity so cubes materialize gracefully
        let dynamicOpacity = cube.opacity;
        if (currentScreenY > 92) {
          // Entering from below: fade in smoothly
          dynamicOpacity = Math.max(0, cube.opacity * (1 - (currentScreenY - 92) / 18));
        } else if (currentScreenY < 12) {
          // Leaving at the top: fade out smoothly
          dynamicOpacity = Math.max(0, cube.opacity * ((currentScreenY + 12) / 24));
        }

        // Lateral cavern drift and rotational kinetics
        const scrollOffsetX = sp * cube.scrollXFactor;
        const currentZ = cube.zDepth + sp * cube.scrollZFactor;
        const scrollRotX = sp * cube.scrollRotX;
        const scrollRotY = sp * cube.scrollRotY;

        return (
          <div
            key={cube.id}
            className="absolute hidden sm:block will-change-transform"
            style={{
              left: `${cube.xPercent}%`,
              top: `${currentScreenY.toFixed(2)}%`,
              transform: `translate3d(${scrollOffsetX.toFixed(1)}px, 0px, ${currentZ.toFixed(1)}px)`,
              filter: cube.blurPx > 0 ? `blur(${cube.blurPx}px)` : undefined,
              opacity: dynamicOpacity,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.08s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.2s ease',
            }}
          >
            {/* Scroll-driven tumble wrapper */}
            <div
              style={{
                transform: `rotateX(${scrollRotX.toFixed(1)}deg) rotateY(${scrollRotY.toFixed(1)}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Idle bobbing wrapper with volumetric lighting drop shadow */}
              <div
                className="voxel-cube-bob"
                style={{
                  animationDuration: `${cube.bobDuration}s`,
                  animationDelay: `-${cube.delay}s`,
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.85)) drop-shadow(0 0 10px rgba(34,255,136,0.22))',
                }}
              >
                {/* Rotating 3D Cube container with 6 distinct lit Minecraft cyber-voxel facets */}
                <div
                  className="voxel-cube-tumble"
                  style={{
                    width: `${cube.size}px`,
                    height: `${cube.size}px`,
                    animationDuration: `${cube.rotateDuration}s`,
                    animationDelay: `-${cube.delay * 1.5}s`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Inner Glowing Energized Core */}
                  <div
                    className="absolute inset-[22%] bg-accent-glow/65 blur-[1.5px] pointer-events-none rounded-[1px]"
                    style={{ transform: 'translateZ(0px)' }}
                  />

                  {/* 1. FRONT face (Angled directional light) */}
                  <div
                    className="absolute inset-0 border border-accent-green/70 bg-accent-green/28 shadow-[inset_0_0_6px_rgba(34,255,136,0.3)]"
                    style={{
                      transform: `translateZ(${half}px)`,
                    }}
                  />

                  {/* 2. BACK face (Deep interior bedrock) */}
                  <div
                    className="absolute inset-0 border border-accent-green/35 bg-[#062414]/70"
                    style={{
                      transform: `rotateY(180deg) translateZ(${half}px)`,
                    }}
                  />

                  {/* 3. TOP face (Brightest specular Minecraft sky light with crystalline sheen) */}
                  <div
                    className="absolute inset-0 border border-[#8affc1]/90 bg-[#48ff9f]/45 shadow-[inset_0_0_8px_rgba(255,255,255,0.45)]"
                    style={{
                      transform: `rotateX(90deg) translateZ(${half}px)`,
                    }}
                  />

                  {/* 4. BOTTOM face (Ambient occlusion shadow) */}
                  <div
                    className="absolute inset-0 border border-accent-green/25 bg-[#010c05]/85"
                    style={{
                      transform: `rotateX(-90deg) translateZ(${half}px)`,
                    }}
                  />

                  {/* 5. RIGHT face (Side directional bounce) */}
                  <div
                    className="absolute inset-0 border border-accent-green/55 bg-[#147a43]/32"
                    style={{
                      transform: `rotateY(90deg) translateZ(${half}px)`,
                    }}
                  />

                  {/* 6. LEFT face (Recessed ambient occlusion) */}
                  <div
                    className="absolute inset-0 border border-accent-green/45 bg-[#0b4a27]/32"
                    style={{
                      transform: `rotateY(-90deg) translateZ(${half}px)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const VoxelCubes = React.memo(VoxelCubesComponent);
export default VoxelCubes;
