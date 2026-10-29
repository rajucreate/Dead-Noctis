import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface IntroCanvas3DProps {
  onComplete: () => void;
  className?: string;
}

// Preload the high-resolution stone texture immediately at module import to avoid any texture-load pop-in
const preloadedStoneImg = typeof window !== 'undefined' ? new Image() : null;
if (preloadedStoneImg) {
  preloadedStoneImg.src = '/src/assets/images/hero/dead-noctis-only.png';
}

/**
 * TRUE 3D CINEMATIC INTRO RENDERER (Three.js WebGL)
 *
 * Strict Timeline (Finishes at ~3.40s, hard cap 4.0s):
 * - 0.00–0.50s: SYSTEM INITIALIZATION (Forward camera dolly, sparse 3D emerald cubes,
 *               depth-aware "SYSTEM INITIALIZING..." + progress line)
 * - 0.50–0.85s: 3D SYSTEM ACTIVATION (Text dissolves into green fragments, camera accelerates forward,
 *               particles converge toward center, controlled glitch flash)
 * - 0.85–2.30s: 3D DEAD NOTICS TITLE REVEAL (Layered volumetric 3D extrusion, perspective rotation X/Y,
 *               green cubes rush in, title fragments assemble, emerald lighting sweep)
 * - 2.30–2.85s: FINAL 3D HERO MOMENT (Subtle camera forward dolly, multi-depth particles drift, lighting sheen)
 * - 2.85–3.40s: CINEMATIC DISSOLVE (Camera dollys through title plane, emerald dispersion flash,
 *               landing page revealed automatically at 3.40s)
 */
export const IntroCanvas3D: React.FC<IntroCanvas3DProps> = ({
  onComplete,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Perspective Camera
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    try {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 0, 50);

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to landing page:', e);
      onComplete();
      return;
    }

    // 2. 3D Lighting Environment
    const ambientLight = new THREE.AmbientLight(0x101a14, 1.2);
    scene.add(ambientLight);

    // Front Pure White Key Light: Ensures DEAD NOTICS letter faces are pure white (#ffffff)
    const frontWhiteLight = new THREE.DirectionalLight(0xffffff, 2.8);
    frontWhiteLight.position.set(0, 6, 28);
    scene.add(frontWhiteLight);

    // Subtle Emerald Rim Light: Positioned behind/grazing so it catches cube edges and outer silhouettes only
    const rimLight = new THREE.DirectionalLight(0x22ff88, 1.6);
    rimLight.position.set(24, 20, -8);
    scene.add(rimLight);

    // Subtle Cyan Fill Light: Soft grazing light from left-rear
    const fillLight = new THREE.DirectionalLight(0x00f5b8, 0.8);
    fillLight.position.set(-24, -14, -6);
    scene.add(fillLight);

    // Dynamic emerald energy sweep light across lettering during assembly
    const sweepLight = new THREE.PointLight(0x00ff66, 0, 80);
    sweepLight.position.set(-25, 0, 12);
    scene.add(sweepLight);

    // 3. 3D Particle Field: Instanced Voxel Cubes in Spatial Depth
    const PARTICLE_COUNT = 140;
    const cubeGeo = new THREE.BoxGeometry(0.42, 0.42, 0.42);
    const cubeMat = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 0.5,
    });

    const instancedCubes = new THREE.InstancedMesh(cubeGeo, cubeMat, PARTICLE_COUNT);
    scene.add(instancedCubes);

    interface ParticleState {
      pos: THREE.Vector3;
      originPos: THREE.Vector3;
      velocity: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      rot: THREE.Vector3;
      scale: number;
    }

    const particles: ParticleState[] = [];
    const dummy = new THREE.Object3D();
    const colorPalette = [
      new THREE.Color(0x22ff88), // Primary neon green
      new THREE.Color(0x00ff66), // Toxic bright green
      new THREE.Color(0x00f5b8), // Emerald cyan
      new THREE.Color(0x117744), // Shaded depth green
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const z = -120 + Math.random() * 160; // -120 to +40
      const spreadX = 45 + Math.abs(z) * 0.35;
      const spreadY = 30 + Math.abs(z) * 0.25;

      let posX = (Math.random() - 0.5) * spreadX * 2;
      let posY = (Math.random() - 0.5) * spreadY * 2;

      // Keep center title corridor clear of foreground occlusion
      if (Math.abs(posX) < 14 && posY > -5 && posY < 8 && z > -1 && z < 25) {
        posX += (posX >= 0 ? 1 : -1) * 12;
      }

      const pos = new THREE.Vector3(posX, posY, z);

      particles.push({
        pos,
        originPos: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          0.42 + Math.random() * 0.65 // Traveling forward toward camera
        ),
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        ),
        rot: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        scale: 0.6 + Math.random() * 0.8,
      });

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      instancedCubes.setColorAt(i, chosenColor);
    }
    if (instancedCubes.instanceColor) instancedCubes.instanceColor.needsUpdate = true;

    // 4. Create Sharp Textures via Offscreen Canvas
    function makeCanvasTexture(
      draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
      w = 1024,
      h = 128
    ) {
      const offscreen = document.createElement('canvas');
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext('2d');
      if (ctx) draw(ctx, w, h);
      const tex = new THREE.CanvasTexture(offscreen);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    }

    // A. "SYSTEM INITIALIZING..." Texture
    const initTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = '300 32px "Rajdhani", monospace';
      ctx.fillStyle = '#e8f5ee';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '10px';
      ctx.fillText('SYSTEM INITIALIZING...', w / 2, h / 2);
    }, 1024, 128);

    // B. "GOOGLE DEVELOPER GROUPS" Texture (+15-20% increase, clean medium-bold white with subtle contrast glow)
    const gdgTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.shadowColor = 'rgba(255, 255, 255, 0.45)';
      ctx.shadowBlur = 6;
      ctx.font = '700 50px "Rajdhani", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '2px';
      ctx.fillText('Google Developer Groups', w / 2, h / 2);
    }, 1440, 140);

    // C. "PRESENTS" Texture (+20-25% increase, reduced letter spacing, clean white with subtle contrast glow)
    const presentsTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.shadowColor = 'rgba(255, 255, 255, 0.45)';
      ctx.shadowBlur = 5;
      ctx.font = '700 38px "Rajdhani", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '5px';
      ctx.fillText('PRESENTS', w / 2, h / 2);
    }, 1024, 128);

    // D. "THE" Texture
    const theTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = '700 36px "Rajdhani", sans-serif';
      ctx.fillStyle = '#22ff88';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '6px';
      ctx.shadowColor = '#00ff66';
      ctx.shadowBlur = 12;
      ctx.fillText('THE', w / 2, h / 2);
    }, 512, 128);

    // E. "CTF - LEVEL 1" Texture
    const ctfTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = '700 52px "Rajdhani", sans-serif';
      ctx.fillStyle = '#22ff88';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '6px';
      ctx.shadowColor = '#00ff66';
      ctx.shadowBlur = 18;
      ctx.fillText('CTF - LEVEL 1', w / 2, h / 2);
    }, 1280, 160);

    // 5. Build 3D Object Hierarchies

    // Group 1: Screen 01 Initialization (3D Space)
    const initGroup = new THREE.Group();
    initGroup.position.set(0, 0, 12);
    scene.add(initGroup);

    const initPlaneMat = new THREE.MeshBasicMaterial({
      map: initTex,
      transparent: true,
      opacity: 0,
    });
    const initPlane = new THREE.Mesh(new THREE.PlaneGeometry(16, 2), initPlaneMat);
    initGroup.add(initPlane);

    // Small minimal green progress indicator line
    const barTrackMat = new THREE.MeshBasicMaterial({
      color: 0x0a2818,
      transparent: true,
      opacity: 0,
    });
    const barTrack = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.12), barTrackMat);
    barTrack.position.set(0, -1.2, 0);
    initGroup.add(barTrack);

    const barFillMat = new THREE.MeshBasicMaterial({
      color: 0x22ff88,
      transparent: true,
      opacity: 0,
    });
    const barFill = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.12), barFillMat);
    barFill.position.set(0, -1.2, 0.02);
    barFill.scale.set(0.001, 1, 1);
    initGroup.add(barFill);

    // Group 2: Screen 02 Full 3D Event Title Structure
    const titleMasterGroup = new THREE.Group();
    titleMasterGroup.position.set(0, 0, 0);
    scene.add(titleMasterGroup);

    // Upper Text Planes: Scaled for improved readability while remaining subordinate to DEAD NOTICS
    const gdgMat = new THREE.MeshBasicMaterial({
      map: gdgTex,
      transparent: true,
      opacity: 0,
    });
    const gdgMesh = new THREE.Mesh(new THREE.PlaneGeometry(17, 2.15), gdgMat);
    gdgMesh.position.set(0, 5.7, 0);
    titleMasterGroup.add(gdgMesh);

    const presentsMat = new THREE.MeshBasicMaterial({
      map: presentsTex,
      transparent: true,
      opacity: 0,
    });
    const presentsMesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.5), presentsMat);
    presentsMesh.position.set(0, 4.3, 0);
    titleMasterGroup.add(presentsMesh);

    const theMat = new THREE.MeshBasicMaterial({
      map: theTex,
      transparent: true,
      opacity: 0,
    });
    const theMesh = new THREE.Mesh(new THREE.PlaneGeometry(5, 1.25), theMat);
    theMesh.position.set(0, 2.7, 0);
    titleMasterGroup.add(theMesh);

    const ctfMat = new THREE.MeshBasicMaterial({
      map: ctfTex,
      transparent: true,
      opacity: 0,
    });
    const ctfMesh = new THREE.Mesh(new THREE.PlaneGeometry(18, 2.25), ctfMat);
    ctfMesh.position.set(0, -3.2, 0);
    titleMasterGroup.add(ctfMesh);

    // 3D Volumetric Extruded "DEAD NOTICS" Group
    const title3DGroup = new THREE.Group();
    title3DGroup.position.set(0, 0, 0);
    titleMasterGroup.add(title3DGroup);

    // Load and normalize stone texture to ensure pure radiant white (#FFFFFF) letter faces
    const whiteStoneCanvas = document.createElement('canvas');
    whiteStoneCanvas.width = 632;
    whiteStoneCanvas.height = 60;
    const whiteStoneCtx = whiteStoneCanvas.getContext('2d');
    const whiteStoneTex = new THREE.CanvasTexture(whiteStoneCanvas);
    whiteStoneTex.minFilter = THREE.LinearFilter;
    whiteStoneTex.magFilter = THREE.LinearFilter;

    const stoneImg = new Image();
    stoneImg.src = '/src/assets/images/hero/dead-noctis-only.png';
    const imgToUse = (preloadedStoneImg && preloadedStoneImg.complete) ? preloadedStoneImg : stoneImg;
    const processWhiteStone = (img: HTMLImageElement) => {
      if (!whiteStoneCtx) return;
      whiteStoneCtx.drawImage(img, 0, 0);
      const imgData = whiteStoneCtx.getImageData(0, 0, 632, 60);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 10) {
          // Normalize to neutral grayscale and boost highlights to pure white (#FFFFFF)
          const lum = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
          const boosted = Math.min(255, Math.round(lum * 1.38));
          data[i] = boosted;
          data[i + 1] = boosted;
          data[i + 2] = boosted;
        }
      }
      whiteStoneCtx.putImageData(imgData, 0, 0);
      whiteStoneTex.needsUpdate = true;
    };

    if (imgToUse.complete) {
      processWhiteStone(imgToUse);
    } else {
      imgToUse.onload = () => processWhiteStone(imgToUse);
    }

    const TITLE_WIDTH = 22;
    const TITLE_HEIGHT = 2.2;
    const SLICES_COUNT = 7;
    const EXTRUSION_LAYERS = 6;

    interface Slice3D {
      frontMesh: THREE.Mesh;
      extrusions: THREE.Mesh[];
      originX: number;
      targetX: number;
      rotY: number;
    }

    const slices: Slice3D[] = [];
    const sliceHeight = TITLE_HEIGHT / SLICES_COUNT;

    for (let s = 0; s < SLICES_COUNT; s++) {
      const sliceUVY = (SLICES_COUNT - 1 - s) / SLICES_COUNT;
      const sliceGeo = new THREE.PlaneGeometry(TITLE_WIDTH, sliceHeight);

      // Adjust UVs for this slice band
      const uvs = sliceGeo.attributes.uv;
      for (let i = 0; i < uvs.count; i++) {
        const u = uvs.getX(i);
        const v = uvs.getY(i);
        uvs.setXY(i, u, sliceUVY + v / SLICES_COUNT);
      }
      uvs.needsUpdate = true;

      // Primary visible letter faces: PURE WHITE (#FFFFFF) with distressed stone texture
      const sliceMat = new THREE.MeshStandardMaterial({
        map: whiteStoneTex,
        transparent: true,
        roughness: 0.15,
        metalness: 0.05,
        color: new THREE.Color(0xffffff),
        opacity: 0,
      });

      const frontMesh = new THREE.Mesh(sliceGeo, sliceMat);
      const posY = (SLICES_COUNT / 2 - s - 0.5) * sliceHeight;
      frontMesh.position.set(0, posY, 0);
      title3DGroup.add(frontMesh);

      // Volumetric 3D Layered Extrusions: Dark charcoal / black dimensional depth (NO green tint)
      const extrusions: THREE.Mesh[] = [];
      for (let e = 1; e <= EXTRUSION_LAYERS; e++) {
        const depthZ = -e * 0.16;
        const shadeFactor = Math.max(0.18, 1 - e * 0.14);
        const charcoal = 0.15 * shadeFactor;
        const extMat = new THREE.MeshStandardMaterial({
          map: whiteStoneTex,
          transparent: true,
          color: new THREE.Color(charcoal, charcoal, charcoal),
          roughness: 0.75,
          metalness: 0.2,
          opacity: 0,
        });
        const extMesh = new THREE.Mesh(sliceGeo, extMat);
        extMesh.position.set(0, posY, depthZ);
        title3DGroup.add(extMesh);
        extrusions.push(extMesh);
      }

      slices.push({
        frontMesh,
        extrusions,
        originX: (s % 2 === 0 ? -1 : 1) * (14 + Math.random() * 8), // Displaced in 3D depth space
        targetX: 0,
        rotY: (s % 2 === 0 ? -0.3 : 0.3),
      });
    }

    // RGB Glitch Chromatic Duplicates (Strictly scoped to DEAD NOTICS)
    const rgbGeo = new THREE.PlaneGeometry(TITLE_WIDTH, TITLE_HEIGHT);

    const rgbGreenMat = new THREE.MeshBasicMaterial({
      map: whiteStoneTex,
      transparent: true,
      color: 0x00ff66,
      blending: THREE.AdditiveBlending,
      opacity: 0,
    });
    const rgbGreenMesh = new THREE.Mesh(rgbGeo, rgbGreenMat);
    rgbGreenMesh.position.set(0, 0, 0.04);
    title3DGroup.add(rgbGreenMesh);

    const rgbCyanMat = new THREE.MeshBasicMaterial({
      map: whiteStoneTex,
      transparent: true,
      color: 0x00e5ff,
      blending: THREE.AdditiveBlending,
      opacity: 0,
    });
    const rgbCyanMesh = new THREE.Mesh(rgbGeo, rgbCyanMat);
    rgbCyanMesh.position.set(0, 0, 0.06);
    title3DGroup.add(rgbCyanMesh);

    // Micro Digital Glitch Fragment Voxels (Strictly scoped to DEAD NOTICS periphery)
    const FRAG_COUNT = 10;
    const fragGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const fragMat = new THREE.MeshBasicMaterial({
      color: 0x22ff88,
      transparent: true,
      opacity: 0,
    });
    const fragmentMeshes: THREE.Mesh[] = [];
    for (let f = 0; f < FRAG_COUNT; f++) {
      const fragMesh = new THREE.Mesh(fragGeo, fragMat);
      fragMesh.visible = false;
      title3DGroup.add(fragMesh);
      fragmentMeshes.push(fragMesh);
    }

    // 6. Responsive Scaling & Animation Loop (Strict 4.0s Hard Limit, finishes naturally at ~2.85s)
    const updateResponsiveScale = () => {
      const aspect = width / height;
      const visibleWidthAtSettled = 24.7 * aspect;
      const responsiveScale = aspect < 1.0 
        ? Math.min(1.0, (visibleWidthAtSettled * 0.82) / 22) 
        : (aspect < 1.4 ? 0.88 : 1.0);
      titleMasterGroup.scale.setScalar(responsiveScale);
      initGroup.scale.setScalar(Math.min(1.0, responsiveScale * 1.25));
    };
    updateResponsiveScale();

    let startTime = performance.now();
    let animId: number;
    let completed = false;

    // Hard fallback safety timer at 3.40s (guaranteed under 4.0s total wall clock)
    const hardTimer = setTimeout(() => {
      if (!completed) {
        completed = true;
        onComplete();
      }
    }, 3400);

    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateResponsiveScale();
    };
    window.addEventListener('resize', handleResize);

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000; // seconds

      // =====================================================================
      // TIMELINE STAGES (0.00s -> 2.85s)
      // =====================================================================

      // --- PHASE 1: 0.00s - 0.40s (SYSTEM INITIALIZATION) ---
      if (elapsed <= 0.40) {
        const p1 = Math.min(1, elapsed / 0.40);

        // Camera slow forward dolly
        camera.position.z = 50 - p1 * 5;

        // Init text & progress line fade in and fill
        const textFade = Math.min(1, elapsed / 0.15);
        initPlaneMat.opacity = textFade;
        barTrackMat.opacity = textFade * 0.4;
        barFillMat.opacity = textFade;

        // Progress line fills across 0.00s to 0.35s
        barFill.scale.x = Math.max(0.001, Math.min(1, elapsed / 0.35));

        // Ensure title and slices are strictly invisible
        slices.forEach((slice) => {
          (slice.frontMesh.material as THREE.MeshStandardMaterial).opacity = 0;
          slice.extrusions.forEach((ext) => {
            (ext.material as THREE.MeshStandardMaterial).opacity = 0;
          });
        });
      }

      // --- PHASE 2: 0.40s - 0.65s (3D SYSTEM ACTIVATION & DISSOLVE) ---
      else if (elapsed <= 0.65) {
        const p2 = (elapsed - 0.40) / 0.25;

        // Camera accelerates forward
        camera.position.z = 45 - p2 * 13;

        // Init text dissolves with brief digital glitch
        initPlaneMat.opacity = Math.max(0, 1 - p2 * 2.5);
        barFillMat.opacity = Math.max(0, 1 - p2 * 2.5);
        barTrackMat.opacity = Math.max(0, 1 - p2 * 2.5);

        // Flash glitch displacement on dissolving init text
        if (elapsed < 0.55) {
          initPlane.position.x = (Math.random() - 0.5) * 0.4;
        } else {
          initPlane.position.x = 0;
        }

        // Ensure title and slices are strictly invisible before fade starts
        slices.forEach((slice) => {
          (slice.frontMesh.material as THREE.MeshStandardMaterial).opacity = 0;
          slice.extrusions.forEach((ext) => {
            (ext.material as THREE.MeshStandardMaterial).opacity = 0;
          });
        });
      }

      // --- PHASE 3: 0.65s - 1.90s (3D DEAD NOTICS TITLE REVEAL) ---
      else if (elapsed <= 1.90) {
        const p3 = (elapsed - 0.65) / 1.25;

        // Hide init plane completely
        initPlaneMat.opacity = 0;
        barFillMat.opacity = 0;
        barTrackMat.opacity = 0;

        // Camera smoothly approaches settled distance
        camera.position.z = 32 - Math.sin(p3 * Math.PI * 0.5) * 5.5; // 32 -> 26.5

        // A. Upper Supporting Text: Immediately readable as title composition appears
        const orgProg = Math.min(1, (elapsed - 0.65) / 0.20);
        gdgMat.opacity = orgProg;
        gdgMesh.position.y = 5.7;

        presentsMat.opacity = orgProg;
        presentsMesh.position.y = 4.3;

        // B. DEAD NOTICS Title Reveal:
        // 1. Smooth, clearly visible fade-in: 0.65s - 1.65s (1000ms, continuous gentle ease-in-out curve)
        // 2. Localized sharp glitch burst: 1.65s - 1.90s (250ms, triggers ONLY after fade completes)
        const FADE_START = 0.65;
        const FADE_DURATION = 1.00; // 1000ms smooth continuous fade (strictly within 900–1100ms)
        const FADE_END = FADE_START + FADE_DURATION; // 1.65s

        const GLITCH_START = FADE_END; // 1.65s (Only AFTER fade-in has completed!)
        const GLITCH_DURATION = 0.25; // 250ms (strictly within 200–300ms)
        const GLITCH_END = GLITCH_START + GLITCH_DURATION; // 1.90s

        // 1. Continuous, gentle ease-in-out opacity curve (starts at 0, smoothly ascends over 1000ms)
        const fadeProg = Math.min(1, Math.max(0, (elapsed - FADE_START) / FADE_DURATION));
        const smoothFade = 0.5 - 0.5 * Math.cos(fadeProg * Math.PI);

        // 2. Glitch State (Triggers ONLY after fade-in is 100% complete)
        const isGlitch = elapsed >= GLITCH_START && elapsed <= GLITCH_END;
        let glitchIntensity = 0;
        let opacityFlicker = 1.0;

        if (isGlitch) {
          const glitchP = (elapsed - GLITCH_START) / GLITCH_DURATION;
          // Sharp envelope: fast attack, sustains, snaps off cleanly
          glitchIntensity = Math.sin(glitchP * Math.PI) * 0.9 + 0.1;

          // Two to three distinct, irregular opacity flickers during the burst
          if (glitchP > 0.12 && glitchP < 0.24) {
            opacityFlicker = 0.38;
          } else if (glitchP > 0.42 && glitchP < 0.54) {
            opacityFlicker = 0.48;
          } else if (glitchP > 0.72 && glitchP < 0.82) {
            opacityFlicker = 0.58;
          }

          // Rapid, subtle horizontal displacement strictly on the DEAD NOTICS title group
          title3DGroup.position.x = (Math.random() - 0.5) * 0.45 * glitchIntensity;
          title3DGroup.position.y = (Math.random() - 0.5) * 0.08 * glitchIntensity;

          // Momentary green/cyan RGB chromatic edge separation
          rgbGreenMat.opacity = 0.85 * glitchIntensity;
          rgbGreenMesh.position.x = 0.45 * glitchIntensity + (Math.random() - 0.5) * 0.08;
          rgbGreenMesh.position.y = (Math.random() - 0.5) * 0.05;

          rgbCyanMat.opacity = 0.75 * glitchIntensity;
          rgbCyanMesh.position.x = -0.45 * glitchIntensity + (Math.random() - 0.5) * 0.08;
          rgbCyanMesh.position.y = (Math.random() - 0.5) * 0.05;

          // Minimal digital fragment voxels around the title edges
          fragMat.opacity = 0.85 * glitchIntensity;
          fragmentMeshes.forEach((frag, fIdx) => {
            frag.visible = true;
            const seed = (fIdx * 13.37 + elapsed * 20) % 1;
            const posX = ((fIdx / FRAG_COUNT) - 0.5) * TITLE_WIDTH + (seed - 0.5) * 1.8;
            const posY = (Math.sin(fIdx * 2.5 + elapsed * 10) * 0.5) * (TITLE_HEIGHT * 0.8);
            frag.position.set(posX, posY, 0.15);
            frag.scale.setScalar(0.7 + seed * 0.6);
          });
        } else {
          // Stable state: No glitch, no displacement, perfectly aligned
          title3DGroup.position.x = 0;
          title3DGroup.position.y = 0;
          rgbGreenMat.opacity = 0;
          rgbCyanMat.opacity = 0;
          fragMat.opacity = 0;
          fragmentMeshes.forEach((frag) => {
            frag.visible = false;
          });
        }

        // Title group orientation: Strictly steady, no rotation or scale changes
        title3DGroup.rotation.set(0, 0, 0);

        // Apply slice positions and opacity
        const currentOpacity = smoothFade * opacityFlicker;

        slices.forEach((slice, sIdx) => {
          let sliceOffset = 0;
          if (isGlitch && (sIdx === 0 || sIdx === 2 || sIdx === 5)) {
            sliceOffset = (sIdx % 2 === 0 ? 1 : -1) * (0.35 + Math.random() * 0.45) * glitchIntensity;
          }

          slice.frontMesh.position.x = sliceOffset;
          (slice.frontMesh.material as THREE.MeshStandardMaterial).opacity = currentOpacity;

          // Extrusion depth layers follow slice X
          slice.extrusions.forEach((ext) => {
            ext.position.x = sliceOffset;
            (ext.material as THREE.MeshStandardMaterial).opacity = currentOpacity * 0.85;
          });
        });

        // C. "THE" and "CTF - LEVEL 1" Lock In
        const theProg = Math.min(1, Math.max(0, (elapsed - 0.70) / 0.20));
        theMat.opacity = theProg;

        const ctfProg = Math.min(1, Math.max(0, (elapsed - 0.75) / 0.25));
        ctfMat.opacity = ctfProg;
        ctfMesh.position.y = -3.2 - (1 - ctfProg) * 0.5;

        // Reset sweep light during reveal phase
        sweepLight.intensity = 0;
      }

      // --- PHASE 4: 1.90s - 2.40s (FINAL 3D HERO MOMENT: Settled, Clean, Pure White Title) ---
      else if (elapsed <= 2.40) {
        const p4 = (elapsed - 1.90) / 0.5;

        // Subtle forward camera dolly
        camera.position.z = 26.5 - p4 * 1.5;

        // All text at full opacity
        gdgMat.opacity = 1;
        gdgMesh.position.y = 5.7;
        presentsMat.opacity = 1;
        presentsMesh.position.y = 4.3;
        theMat.opacity = 1;
        theMesh.position.y = 2.7;
        ctfMat.opacity = 1;

        // Ensure title is completely settled, clean, stable pure white (#FFFFFF)
        title3DGroup.position.set(0, 0, 0);
        title3DGroup.rotation.set(0, 0, 0);
        rgbGreenMat.opacity = 0;
        rgbCyanMat.opacity = 0;
        fragMat.opacity = 0;
        fragmentMeshes.forEach((frag) => {
          frag.visible = false;
        });

        slices.forEach((slice) => {
          slice.frontMesh.position.x = 0;
          (slice.frontMesh.material as THREE.MeshStandardMaterial).opacity = 1;
          slice.extrusions.forEach((ext) => {
            ext.position.x = 0;
            (ext.material as THREE.MeshStandardMaterial).opacity = 0.85;
          });
        });
        title3DGroup.rotation.set(0, 0, 0);
        title3DGroup.position.set(0, 0, 0);

        // Emerald Lighting Energy Sweep across 3D Lettering during settled hero moment (1.90s -> 2.20s)
        if (elapsed >= 1.90 && elapsed <= 2.20) {
          const sweepProg = (elapsed - 1.90) / 0.30;
          sweepLight.intensity = Math.sin(sweepProg * Math.PI) * 3.5;
          sweepLight.position.x = -22 + sweepProg * 44; // Left to right across title
        } else {
          sweepLight.intensity = 0;
        }
      }

      // --- PHASE 5: 2.40s - 2.85s (CINEMATIC DISSOLVE TO EXISTING LANDING PAGE) ---
      else if (elapsed <= 2.85) {
        const p5 = (elapsed - 2.40) / 0.45;

        // Camera accelerates forward through the title
        camera.position.z = 25 - p5 * 18;

        // Fade out whole 3D scene smoothly to reveal landing page underneath
        const fadeOut = Math.max(0, 1 - p5 * 1.6);
        gdgMat.opacity = fadeOut;
        presentsMat.opacity = fadeOut;
        theMat.opacity = fadeOut;
        ctfMat.opacity = fadeOut;
        cubeMat.opacity = fadeOut;

        slices.forEach((slice) => {
          (slice.frontMesh.material as THREE.MeshStandardMaterial).opacity = fadeOut;
          slice.extrusions.forEach((ext) => {
            (ext.material as THREE.MeshStandardMaterial).opacity = fadeOut * 0.85;
          });
        });

        if (container) {
          container.style.opacity = String(fadeOut);
        }
      }

      // --- COMPLETION: At 2.85s, hand off to landing page ---
      else {
        if (!completed) {
          completed = true;
          clearTimeout(hardTimer);
          onComplete();
        }
        return;
      }

      // =====================================================================
      // 3D PARTICLE UPDATE LOOP (Genuine Spatial Movement across Depths)
      // =====================================================================
      const isConverging = elapsed >= 0.45 && elapsed <= 0.85;
      const isDispersing = elapsed >= 2.40;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        if (isConverging) {
          // Particles converge toward the portal perimeter framing the title cleanly
          const targetX = Math.sign(p.originPos.x || 1) * (14 + Math.abs(p.originPos.x) * 0.15);
          p.pos.x += (targetX - p.pos.x) * 0.045;
          p.pos.y += (0 - p.pos.y) * 0.04;
        } else if (isDispersing) {
          // Breakout dispersion during final transition
          p.pos.x += Math.sign(p.pos.x || 1) * 0.85;
          p.pos.y += Math.sign(p.pos.y || 1) * 0.65;
        } else {
          // Natural forward travel toward and past camera
          p.pos.z += p.velocity.z;

          // Wrap back to distant Z when passing camera
          if (p.pos.z > camera.position.z + 5) {
            p.pos.z = -120;
            const spreadX = 45 + Math.abs(p.pos.z) * 0.35;
            const spreadY = 30 + Math.abs(p.pos.z) * 0.25;
            p.pos.x = (Math.random() - 0.5) * spreadX * 2;
            p.pos.y = (Math.random() - 0.5) * spreadY * 2;
          }
        }

        // Tumble rotation
        p.rot.x += p.rotSpeed.x;
        p.rot.y += p.rotSpeed.y;
        p.rot.z += p.rotSpeed.z;

        dummy.position.copy(p.pos);
        dummy.rotation.set(p.rot.x, p.rot.y, p.rot.z);
        dummy.scale.setScalar(p.scale);
        dummy.updateMatrix();

        instancedCubes.setMatrixAt(i, dummy.matrix);
      }
      instancedCubes.instanceMatrix.needsUpdate = true;

      // Render WebGL frame
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup resources on unmount
    return () => {
      clearTimeout(hardTimer);
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      try {
        cubeGeo.dispose();
        cubeMat.dispose();
        instancedCubes.dispose();
        initTex.dispose();
        gdgTex.dispose();
        presentsTex.dispose();
        theTex.dispose();
        ctfTex.dispose();
        whiteStoneTex.dispose();
        rgbGeo.dispose();
        rgbGreenMat.dispose();
        rgbCyanMat.dispose();
        fragGeo.dispose();
        fragMat.dispose();
        renderer.dispose();
      } catch (err) {
        // Safe disposal
      }
    };
  }, [onComplete, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#000000',
        transition: 'opacity 0.35s ease-out',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
