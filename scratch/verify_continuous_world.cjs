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

  // Wait for intro transition to settle (~3800ms)
  await page.waitForTimeout(3800);

  // 1. Section 01: Hero / Portal Entrance (Scroll 0)
  await page.screenshot({ path: path.join(outDir, 'world-01-hero.png') });
  console.log('Captured world-01-hero.png');

  // 2. Section 02: Enter the Dimension
  await page.locator('#dimension').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'world-02-dimension.png') });
  console.log('Captured world-02-dimension.png');

  // 3. Section 03: About Dead Notics
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'world-03-about.png') });
  console.log('Captured world-03-about.png');

  // 4. Section 04: Events / Challenge Dimensions
  await page.locator('#events').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'world-04-events.png') });
  console.log('Captured world-04-events.png');

  // 5. Section 05: Rules and Participation
  await page.locator('#rules').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'world-05-rules.png') });
  console.log('Captured world-05-rules.png');

  // 6. Section 06: FAQ with Accordion interaction
  await page.locator('#faq').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  // Click second question
  const faqBtn2 = page.locator('#faq-btn-1');
  await faqBtn2.click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'world-06-faq.png') });
  console.log('Captured world-06-faq.png');

  // 7. Section 07: Final Registration Destination & Footer
  await page.locator('#register').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'world-07-register-footer.png') });
  console.log('Captured world-07-register-footer.png');

  // 8. Test Navigation Bar Smooth Scroll
  // Click "RULES" in navbar
  const rulesNavLink = page.locator('header nav a:has-text("RULES")');
  await rulesNavLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, 'world-08-nav-rules-active.png') });
  console.log('Captured world-08-nav-rules-active.png');

  // 9. Mobile Viewport (390x844)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(3800);

  // Hero mobile
  await mobilePage.screenshot({ path: path.join(outDir, 'world-09-mobile-hero.png') });
  console.log('Captured world-09-mobile-hero.png');

  // Open mobile drawer
  const hamburger = mobilePage.locator('button[aria-label="Open menu"]');
  await hamburger.click();
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({ path: path.join(outDir, 'world-10-mobile-drawer.png') });
  console.log('Captured world-10-mobile-drawer.png');

  // Scroll mobile to events
  const closeBtn = mobilePage.locator('button[aria-label="Close menu"]');
  await closeBtn.click();
  await mobilePage.waitForTimeout(300);
  await mobilePage.locator('#events').scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(600);
  await mobilePage.screenshot({ path: path.join(outDir, 'world-11-mobile-events.png') });
  console.log('Captured world-11-mobile-events.png');

  await browser.close();

  console.log('\n--- VERIFICATION COMPLETED ---');
  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  } else {
    console.log('Zero console errors confirmed!');
  }
})();
