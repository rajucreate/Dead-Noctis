const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Render hero-concept with a coordinate grid or test gradients
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:#020604; overflow:hidden;">
        <div style="position:relative; width:1440px; height:900px;">
          <img src="http://localhost:5173/src/assets/images/hero/hero-concept.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
          <!-- Test Gradient Overlay -->
          <div id="grad" style="position:absolute; inset:0; background: linear-gradient(to right, #020604 0%, #020604 48%, rgba(2,6,4,0.95) 52%, rgba(2,6,4,0.7) 58%, transparent 68%); pointer-events:none;"></div>
          <!-- Top Nav Mask to hide baked nav -->
          <div style="position:absolute; top:0; left:0; right:0; height:85px; background: linear-gradient(to bottom, #020604 70%, transparent 100%); pointer-events:none;"></div>
        </div>
      </body>
    </html>
  `);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/test-gradient.png' });
  await browser.close();
  console.log('Saved scratch/test-gradient.png');
})();
