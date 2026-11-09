const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  for (let i = 0; i <= 5; i++) {
    await page.waitForTimeout(1000);
    const status = await page.evaluate(() => {
      const overlay = document.querySelector('[role="status"]');
      return {
        hasOverlay: !!overlay,
        overlayOpacity: overlay ? overlay.style.opacity : null,
        overlayDisplay: overlay ? overlay.style.display : null,
      };
    });
    console.log(`At ${i + 1}s:`, status);
  }

  await browser.close();
})();
