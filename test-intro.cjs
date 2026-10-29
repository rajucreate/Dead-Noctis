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
  const startTime = Date.now();
  await page.goto('http://localhost:5173/');

  // 1. Capture Panel 01: Initial Load (at 1.2s while progress bar is ~50% filled)
  await page.waitForTimeout(1200);
  const p1Path = path.join(ARTIFACT_DIR, 'intro-panel01-initial-load.png');
  await page.screenshot({ path: p1Path });
  const initTextVisible = await page.locator('text=SYSTEM INITIALIZING...').isVisible();
  console.log(`[t=${(Date.now() - startTime)/1000}s] Step 01 "SYSTEM INITIALIZING..." visible:`, initTextVisible);

  // 2. Capture Panel 02: Logo Assemble (at 3.6s when logo is fully assembled in center)
  await page.waitForTimeout(2400);
  const p2Path = path.join(ARTIFACT_DIR, 'intro-panel02-logo-assemble.png');
  await page.screenshot({ path: p2Path });
  const subtitleVisible = await page.locator('text=CTF - LEVEL 1 -').first().isVisible();
  console.log(`[t=${(Date.now() - startTime)/1000}s] Step 02 "CTF - LEVEL 1 -" visible:`, subtitleVisible);

  // 3. Wait for intro to finish (hold duration 2.2s + fade 0.8s)
  await page.waitForTimeout(3000);
  const p3Path = path.join(ARTIFACT_DIR, 'intro-panel03-home-revealed.png');
  await page.screenshot({ path: p3Path });
  console.log(`[t=${(Date.now() - startTime)/1000}s] Step 03 live home page revealed`);

  const errors = consoleLogs.filter(l => l.type === 'error' || l.type === 'pageerror');
  console.log('Total console errors:', errors.length);
  for (const log of consoleLogs) {
    if (log.type === 'error' || log.type === 'warning') {
      console.log(`[${log.type}] ${log.text}`);
    }
  }

  await browser.close();
  console.log('Test complete!');
})();
