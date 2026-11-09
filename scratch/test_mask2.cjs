const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin:0; padding:0; box-sizing:border-box; }
          body { background:#020604; overflow:hidden; }
          .container { position:relative; width:1440px; height:900px; }
          .bg-img {
            position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
          }
          .left-mask {
            position:absolute; inset:0;
            background: linear-gradient(
              90deg,
              #020604 0%,
              #020604 46%,
              rgba(2,6,4,0.98) 51%,
              rgba(2,6,4,0.85) 54%,
              rgba(2,6,4,0.3) 60%,
              transparent 68%
            );
          }
          .noctis-tail-patch {
            position:absolute;
            left: 45%;
            top: 28%;
            width: 140px;
            height: 120px;
            background: radial-gradient(ellipse at center, rgba(2,6,4,0.98) 0%, rgba(2,6,4,0.8) 50%, transparent 100%);
            filter: blur(8px);
          }
          .top-mask {
            position:absolute;
            top: 0; left: 0; right: 0;
            height: 110px;
            background: linear-gradient(
              180deg,
              #020604 0%,
              #020604 60%,
              rgba(2,6,4,0.7) 85%,
              transparent 100%
            );
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img class="bg-img" src="http://localhost:5173/src/assets/images/hero/hero-concept.jpg" />
          <div class="left-mask"></div>
          <div class="noctis-tail-patch"></div>
          <div class="top-mask"></div>
        </div>
      </body>
    </html>
  `);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/test-mask-result2.png' });
  await browser.close();
  console.log('Saved scratch/test-mask-result2.png');
})();
