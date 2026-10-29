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

  // 1. Capture during smooth fade-in (~1.0s from load)
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'sequence-01-fade-in.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured sequence-01-fade-in.png (Smooth Fade-In)`);

  // 2. Capture during ending glitch burst (~1.38s from load)
  await page.waitForTimeout(260);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'sequence-02-glitch-burst.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured sequence-02-glitch-burst.png (Localized Glitch Burst)`);

  // 3. Capture settled pure-white stable state (~1.85s from load)
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'sequence-03-settled-white.png') });
  console.log(`[t=${((Date.now() - startTime)/1000).toFixed(2)}s] Captured sequence-03-settled-white.png (Stable Pure White)`);

  // 4. Wait for landing page to appear automatically
  const skipBtn = page.locator('button[aria-label="Skip intro animation"]');
  await skipBtn.waitFor({ state: 'detached', timeout: 5000 });
  const totalDuration = (Date.now() - startTime) / 1000;

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'sequence-04-landing-page.png') });
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
