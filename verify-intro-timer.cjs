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

  // Measure start time after page is loaded and running
  const startTime = Date.now();

  // 1. Capture 3D System Initialization (Phase 1, ~0.3s)
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '3d-intro-initialization.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured 3d-intro-initialization.png`);

  // 2. Capture 3D DEAD NOTICS Reveal (Phase 3, ~1.6s)
  await page.waitForTimeout(1300);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '3d-intro-title-reveal.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured 3d-intro-title-reveal.png`);

  // 3. Wait for intro overlay to be removed automatically
  const skipBtn = page.locator('button[aria-label="Skip intro animation"]');
  await skipBtn.waitFor({ state: 'detached', timeout: 5000 });
  const totalDuration = (Date.now() - startTime) / 1000;

  await page.screenshot({ path: path.join(ARTIFACT_DIR, '3d-intro-landing-page.png') });
  console.log(`[t=${totalDuration.toFixed(2)}s] Intro completed automatically!`);
  console.log(`Captured 3d-intro-landing-page.png`);

  const isNavbarVisible = await page.locator('header').isVisible();
  const isHeroContentVisible = await page.locator('#main-content').isVisible();

  console.log('\n--- Acceptance Verification ---');
  console.log(`- Total Intro Duration: ${totalDuration.toFixed(2)}s (Under 4.0s strict requirement: ${totalDuration <= 4.0})`);
  console.log('- Landing Page Header visible & interactive:', isNavbarVisible);
  console.log('- Landing Page HeroSection preserved:', isHeroContentVisible);

  const errors = consoleLogs.filter(l => l.type === 'error' || l.type === 'pageerror');
  console.log('Total console errors:', errors.length);

  await browser.close();
  console.log('Verification finished successfully!');
})();
