const { chromium } = require('playwright');
const path = require('path');

const outDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\3d220d64-3592-46fb-a4bb-39348cddf354';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });

  // 1. Initial load
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, 'intro-check-01-init.png') });

  // 2. Title fade in
  await page.waitForTimeout(950);
  await page.screenshot({ path: path.join(outDir, 'intro-check-02-title-fade.png') });

  // 3. Glitch burst
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, 'intro-check-03-glitch.png') });

  // 4. Settled pure white
  await page.waitForTimeout(350);
  await page.screenshot({ path: path.join(outDir, 'intro-check-04-settled-white.png') });

  // 5. Landing page revealed
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(outDir, 'intro-check-05-landing.png') });

  await browser.close();
  console.log('Intro checks complete!');
})();
