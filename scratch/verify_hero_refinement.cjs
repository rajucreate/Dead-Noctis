const { chromium } = require('playwright');
const path = require('path');

const outDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\3d220d64-3592-46fb-a4bb-39348cddf354';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // Wait for intro transition to finish and landing page to settle (~3500ms)
  await page.waitForTimeout(3800);

  // 1. Full Landing Page Desktop (1440x900)
  await page.screenshot({ path: path.join(outDir, 'hero-01-refined-desktop.png') });
  console.log('Captured hero-01-refined-desktop.png');

  // 2. Button DOM and Text Verification
  const btnInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
      text: b.innerText.trim(),
      rect: {
        w: b.getBoundingClientRect().width,
        h: b.getBoundingClientRect().height,
      }
    }));
    return buttons;
  });
  console.log('Button Info:', JSON.stringify(btnInfo, null, 2));

  // 3. Hover on primary button
  const registerBtn = page.locator('button:has-text("REGISTER NOW")');
  await registerBtn.hover();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'hero-02-btn-register-hover.png') });
  console.log('Captured hero-02-btn-register-hover.png');

  // 4. Hover on secondary button
  const learnMoreBtn = page.locator('button:has-text("LEARN MORE")');
  await learnMoreBtn.hover();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'hero-03-btn-learnmore-hover.png') });
  console.log('Captured hero-03-btn-learnmore-hover.png');

  // 5. Mouse Parallax Test
  // Move mouse to top-left
  await page.mouse.move(100, 100);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'hero-04-parallax-topleft.png') });
  console.log('Captured hero-04-parallax-topleft.png');

  // Move mouse to bottom-right
  await page.mouse.move(1300, 800);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'hero-05-parallax-bottomright.png') });
  console.log('Captured hero-05-parallax-bottomright.png');

  // 6. Mobile Viewport (390x844)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(3800);
  await mobilePage.screenshot({ path: path.join(outDir, 'hero-06-mobile-refined.png') });
  console.log('Captured hero-06-mobile-refined.png');

  await browser.close();

  console.log('\n--- VERIFICATION COMPLETED ---');
  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  } else {
    console.log('Zero console errors confirmed!');
  }
})();
