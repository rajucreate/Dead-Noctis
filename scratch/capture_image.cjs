const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:#020604;">
        <img src="http://localhost:5173/src/assets/images/hero/hero-concept.jpg" style="width:100vw; height:100vh; object-fit:cover;" />
      </body>
    </html>
  `);
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'scratch/hero-concept-raw.png' });
  await browser.close();
  console.log('Saved scratch/hero-concept-raw.png');
})();
