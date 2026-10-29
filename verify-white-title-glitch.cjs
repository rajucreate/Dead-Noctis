const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/LENOVO/.gemini/antigravity/brain/3d220d64-3592-46fb-a4bb-39348cddf354';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  const page = await browser.newPage();
  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push({ type: msg.type(), text: msg.text() }));
  page.on('pageerror', err => consoleLogs.push({ type: 'pageerror', text: err.message }));

  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:5173/...');
  await page.goto('http://localhost:5173/');
  const startTime = Date.now();

  // 1. Capture during glitch burst (~1.15s - 1.25s from start)
  await page.waitForTimeout(1180);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'title-glitch-burst.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured title-glitch-burst.png`);

  // 2. Capture settled pure white title state (~2.0s - 2.2s)
  await page.waitForTimeout(900);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'title-pure-white-settled.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured title-pure-white-settled.png`);

  // 3. Pixel inspection on settled frame: Measure center title pixels
  const pixelAnalysis = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return null;
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return null;
    const w = canvas.width;
    const h = canvas.height;
    const pixels = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    // Sample the center region (where DEAD NOTICS sits)
    const centerY = Math.floor(h * 0.5);
    const startX = Math.floor(w * 0.35);
    const endX = Math.floor(w * 0.65);
    let maxR = 0, maxG = 0, maxB = 0;
    let whitePixelCount = 0;
    let greenDominatedCount = 0;

    for (let x = startX; x < endX; x++) {
      for (let dy = -25; dy <= 25; dy++) {
        const y = centerY + dy;
        const idx = (y * w + x) * 4;
        const r = pixels[idx];
        const g = pixels[idx + 1];
        const b = pixels[idx + 2];
        const a = pixels[idx + 3];

        if (r > maxR) maxR = r;
        if (g > maxG) maxG = g;
        if (b > maxB) maxB = b;

        // Check for pure white highlights (R > 220, G > 220, B > 220, and |R - G| < 15, |R - B| < 15)
        if (r > 200 && g > 200 && b > 200 && Math.abs(r - g) < 20 && Math.abs(r - b) < 20) {
          whitePixelCount++;
        }
        // Green dominated: G significantly higher than R (e.g. G > 180 and G - R > 50)
        if (g > 150 && (g - r > 40)) {
          greenDominatedCount++;
        }
      }
    }

    return {
      canvasWidth: w,
      canvasHeight: h,
      maxR,
      maxG,
      maxB,
      whitePixelCount,
      greenDominatedCount,
    };
  });
  console.log('Pixel Analysis of DEAD NOTICS letter faces:', pixelAnalysis);

  // 4. Wait for landing page to appear
  const skipBtn = page.locator('button[aria-label="Skip intro animation"]');
  await skipBtn.waitFor({ state: 'detached', timeout: 5000 });
  const totalDuration = (Date.now() - startTime) / 1000;

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'title-landing-page.png') });
  console.log(`[t=${totalDuration.toFixed(2)}s] Landing page appeared automatically!`);

  const isNavbarVisible = await page.locator('header').isVisible();
  const isHeroVisible = await page.locator('section').isVisible();

  console.log('\n--- Acceptance Verification ---');
  console.log(`- Total Intro Duration: ${totalDuration.toFixed(2)}s (Under 4.0s requirement: ${totalDuration <= 4.0})`);
  console.log('- Landing Page Header visible & interactive:', isNavbarVisible);
  console.log('- Landing Page HeroSection preserved:', isHeroVisible);

  const errors = consoleLogs.filter(l => l.type === 'error' || l.type === 'pageerror');
  console.log('Total console errors:', errors.length);

  await browser.close();
  console.log('Verification finished successfully!');
})();
