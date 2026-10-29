import { useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface UseAmbientOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  enabled?: boolean;
  cubeCount?: number;
  speedMultiplier?: number;
}

interface VoxelCube {
  x: number;
  y: number;
  size: number;
  depth: number;
  speedY: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobblePhase: number;
  baseAlpha: number;
  rotAngle: number;
}

const COS30 = Math.cos(Math.PI / 6);
const SIN30 = Math.sin(Math.PI / 6);

/**
 * 60fps 3D Isometric Voxel Cube Particle Engine.
 * Renders floating Minecraft-style 3D cubicles with distinct shaded faces
 * (top highlight, left mid-tone, right shadow) and continuous ambient motion.
 */
export function useAmbient({
  canvasRef,
  enabled = true,
  cubeCount = 34,
  speedMultiplier = 1,
}: UseAmbientOptions) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Initialize 3D isometric cubicles
    const cubes: VoxelCube[] = Array.from({ length: cubeCount }, () => {
      const depth = 0.35 + Math.random() * 0.75; // 0.35 to 1.1
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: (4.5 + Math.random() * 8.5) * depth, // 3D size scaling
        depth,
        speedY: (0.2 + Math.random() * 0.45) * speedMultiplier,
        wobbleSpeed: 0.008 + Math.random() * 0.015,
        wobbleAmp: 12 + Math.random() * 24,
        wobblePhase: Math.random() * Math.PI * 2,
        baseAlpha: 0.25 + Math.random() * 0.55,
        rotAngle: (Math.random() - 0.5) * 0.2, // Subtle tilt
      };
    });

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cubes.length; i++) {
        const cube = cubes[i];

        // Float upwards smoothly
        cube.y -= cube.speedY * cube.depth;

        // Wrap around viewport edges
        if (cube.y < -35) {
          cube.y = height + 35;
          cube.x = Math.random() * width;
        }

        // Horizontal sinusoidal drift
        const renderX =
          cube.x + Math.sin(time * cube.wobbleSpeed + cube.wobblePhase) * cube.wobbleAmp;
        const renderY = cube.y;
        const s = cube.size;
        const alpha = cube.baseAlpha * Math.min(1, Math.max(0, cube.y / 60)); // fade near top edge

        if (alpha <= 0.01) continue;

        ctx.save();
        ctx.translate(renderX, renderY);
        if (cube.rotAngle !== 0) {
          ctx.rotate(cube.rotAngle);
        }

        // Vertices of 3D Isometric Cube
        const pCenter = [0, 0];
        const pTop = [0, -s];
        const pTopRight = [s * COS30, -s * SIN30];
        const pBottomRight = [s * COS30, s * SIN30];
        const pBottom = [0, s];
        const pBottomLeft = [-s * COS30, s * SIN30];
        const pTopLeft = [-s * COS30, -s * SIN30];

        // 1. Top Face (Brightest Highlight)
        ctx.fillStyle = `rgba(72, 255, 159, ${alpha * 0.95})`;
        ctx.beginPath();
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pTopLeft[0], pTopLeft[1]);
        ctx.lineTo(pTop[0], pTop[1]);
        ctx.lineTo(pTopRight[0], pTopRight[1]);
        ctx.closePath();
        ctx.fill();

        // 2. Left Face (Mid-tone Primary Green)
        ctx.fillStyle = `rgba(34, 255, 136, ${alpha * 0.75})`;
        ctx.beginPath();
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pTopLeft[0], pTopLeft[1]);
        ctx.lineTo(pBottomLeft[0], pBottomLeft[1]);
        ctx.lineTo(pBottom[0], pBottom[1]);
        ctx.closePath();
        ctx.fill();

        // 3. Right Face (Shadow / Depth)
        ctx.fillStyle = `rgba(13, 119, 66, ${alpha * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pTopRight[0], pTopRight[1]);
        ctx.lineTo(pBottomRight[0], pBottomRight[1]);
        ctx.lineTo(pBottom[0], pBottom[1]);
        ctx.closePath();
        ctx.fill();

        // Subtle crisp neon edge borders
        ctx.strokeStyle = `rgba(34, 255, 136, ${alpha * 0.35})`;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        // Outer hexagonal silhouette
        ctx.moveTo(pTop[0], pTop[1]);
        ctx.lineTo(pTopRight[0], pTopRight[1]);
        ctx.lineTo(pBottomRight[0], pBottomRight[1]);
        ctx.lineTo(pBottom[0], pBottom[1]);
        ctx.lineTo(pBottomLeft[0], pBottomLeft[1]);
        ctx.lineTo(pTopLeft[0], pTopLeft[1]);
        ctx.closePath();
        // Internal isometric seams
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pTop[0], pTop[1]);
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pBottomLeft[0], pBottomLeft[1]);
        ctx.moveTo(pCenter[0], pCenter[1]);
        ctx.lineTo(pBottomRight[0], pBottomRight[1]);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef, enabled, cubeCount, speedMultiplier, prefersReduced]);
}
