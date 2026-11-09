const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);

  const data = await page.evaluate(() => {
    const titles = Array.from(document.querySelectorAll('h1, [class*="title"], img')).map(el => ({
      tag: el.tagName,
      className: typeof el.className === 'string' ? el.className : '',
      text: el.innerText || '',
      src: el.src || null,
      rect: {
        x: el.getBoundingClientRect().x,
        y: el.getBoundingClientRect().y,
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      }
    }));
    const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
      text: b.innerText,
      className: b.className,
      rect: {
        x: b.getBoundingClientRect().x,
        y: b.getBoundingClientRect().y,
        w: b.getBoundingClientRect().width,
        h: b.getBoundingClientRect().height,
      }
    }));
    return { titles, buttons };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
