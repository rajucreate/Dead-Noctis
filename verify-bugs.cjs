const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/LENOVO/.gemini/antigravity/brain/3d220d64-3592-46fb-a4bb-39348cddf354';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleLogs = [];
  const networkFonts = [];

  page.on('console', (msg) => {
    consoleLogs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', (err) => {
    consoleLogs.push({ type: 'pageerror', text: err.message });
  });

  page.on('response', (response) => {
    const url = response.url();
    if (url.includes('.woff') || url.includes('.woff2') || url.includes('.ttf') || url.includes('font')) {
      networkFonts.push({
        url,
        status: response.status(),
        contentType: response.headers()['content-type'],
      });
    }
  });

  console.log('--- 1. Testing Viewport: 390x844 (Mobile) ---');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // (a) Closed state
  const mobileClosedPath = path.join(ARTIFACT_DIR, 'mobile-390x844-closed.png');
  await page.screenshot({ path: mobileClosedPath, fullPage: false });
  console.log('Captured screenshot: mobile-390x844-closed.png');

  // Verify hamburger
  const hamburger = page.locator('button[aria-label="Open menu"]');
  const isHamburgerVisible = await hamburger.isVisible();
  const box = await hamburger.boundingBox();
  console.log(`Hamburger visible at 390px: ${isHamburgerVisible}`);
  if (box) {
    console.log(`Hamburger tap target: ${box.width}x${box.height}px`);
  }

  // Open drawer
  await hamburger.click();
  await page.waitForTimeout(300);

  // Check body scroll lock
  const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
  console.log(`Body scroll overflow when drawer open: "${bodyOverflow}"`);

  // Check focused element
  const focusedTag = await page.evaluate(() => {
    const el = document.activeElement;
    return el ? `${el.tagName.toLowerCase()}[aria-label="${el.getAttribute('aria-label') || ''}"]` : 'none';
  });
  console.log(`Active focused element in drawer: ${focusedTag}`);

  // (b) Open drawer
  const mobileOpenPath = path.join(ARTIFACT_DIR, 'mobile-390x844-open.png');
  await page.screenshot({ path: mobileOpenPath, fullPage: false });
  console.log('Captured screenshot: mobile-390x844-open.png');

  // Test close via Esc
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const isDrawerOpenAfterEsc = await page.locator('[role="dialog"]').isVisible();
  console.log(`Drawer closed after Escape key: ${!isDrawerOpenAfterEsc}`);

  const focusAfterClose = await page.evaluate(() => {
    const el = document.activeElement;
    return el ? `${el.tagName.toLowerCase()}[aria-label="${el.getAttribute('aria-label') || ''}"]` : 'none';
  });
  console.log(`Focus returned to trigger after close: ${focusAfterClose}`);

  console.log('\n--- 2. Testing Viewport: 820x1180 (Tablet) ---');
  await page.setViewportSize({ width: 820, height: 1180 });
  await page.waitForTimeout(300);

  const tabletNav = page.locator('nav[aria-label="Main Navigation"]');
  const tabletHamburger = page.locator('button[aria-label="Open menu"]');
  const isNavVisible820 = await tabletNav.isVisible();
  const isHamburgerVisible820 = await tabletHamburger.isVisible();

  console.log(`At 820px width:`);
  console.log(`- Desktop navigation visible: ${isNavVisible820}`);
  console.log(`- Mobile hamburger visible: ${isHamburgerVisible820}`);

  const tabletClosedPath = path.join(ARTIFACT_DIR, 'tablet-820x1180.png');
  await page.screenshot({ path: tabletClosedPath, fullPage: false });
  console.log('Captured screenshot: tablet-820x1180.png');

  console.log('\n--- 3. Browser Console Log Summary ---');
  console.log(`Total console entries: ${consoleLogs.length}`);
  const errors = consoleLogs.filter((l) => l.type === 'error' || l.type === 'pageerror');
  const warnings = consoleLogs.filter((l) => l.type === 'warning');
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);
  for (const log of consoleLogs) {
    console.log(`[${log.type}] ${log.text}`);
  }

  console.log('\n--- 4. Font Network Requests ---');
  console.log(`Total font network requests captured: ${networkFonts.length}`);
  for (const f of networkFonts) {
    console.log(`Status: ${f.status} | Content-Type: ${f.contentType} | URL: ${f.url}`);
  }

  await browser.close();
})();
