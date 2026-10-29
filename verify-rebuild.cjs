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

  // 1. Capture Screen 01 (t = 1.0s: SYSTEM INITIALIZING... with green pixels and progress line filling)
  await page.waitForTimeout(1000);
  const s1Path = path.join(ARTIFACT_DIR, 'screen01-initialization.png');
  await page.screenshot({ path: s1Path });
  const isInitVisible = await page.locator('text=SYSTEM INITIALIZING...').isVisible();
  console.log(`[t=${(Date.now() - startTime)/1000}s] Screen 01 "SYSTEM INITIALIZING..." visible:`, isInitVisible);

  // 2. Capture Screen 02 (t = 3.8s: Centered assembled logo with glitch settle)
  await page.waitForTimeout(2800);
  const s2Path = path.join(ARTIFACT_DIR, 'screen02-logo-assemble.png');
  await page.screenshot({ path: s2Path });

  const isOrgVisible = await page.locator('text=Google Developer Groups').first().isVisible();
  const isPresentsVisible = await page.locator('text=P R E S E N T S').first().isVisible();
  const isTheVisible = await page.locator('text=THE').first().isVisible();
  const isCtfLevel1Visible = await page.locator('text=CTF - LEVEL 1').first().isVisible();

  console.log(`[t=${(Date.now() - startTime)/1000}s] Screen 02 Elements:`);
  console.log('- "Google Developer Groups" visible:', isOrgVisible);
  console.log('- "P R E S E N T S" visible:', isPresentsVisible);
  console.log('- "THE" visible:', isTheVisible);
  console.log('- "CTF - LEVEL 1" visible:', isCtfLevel1Visible);

  // Mobile test (390x844)
  console.log('\nTesting Mobile Viewport (390x844)...');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:5173/');

  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'screen01-mobile-init.png') });

  await mobilePage.waitForTimeout(2800);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'screen02-mobile-logo.png') });

  const errors = consoleLogs.filter(l => l.type === 'error' || l.type === 'pageerror');
  console.log('\nTotal console errors:', errors.length);
  for (const log of consoleLogs) {
    if (log.type === 'error' || log.type === 'warning') {
      console.log(`[${log.type}] ${log.text}`);
    }
  }

  await browser.close();
  console.log('Verification complete!');
})();
