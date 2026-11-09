const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const srcPath = 'C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg';
  const imgBase64 = fs.readFileSync(srcPath).toString('base64');

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:black;">
        <img id="src" src="data:image/jpeg;base64,${imgBase64}" />
        <canvas id="c"></canvas>
      </body>
    </html>
  `);

  await page.waitForSelector('#src');

  // Let's inspect the layout of the 3x3 board
  // Total width: 1024, Total height: 682
  // Cell 1: x: 0..341, y: 0..227 -> 01. HOME (INDEX)
  // Cell 2: x: 341..682, y: 0..227 -> 02. ABOUT
  // The header of each card has a small label (e.g. "02. ABOUT" at ~16px height) and navbar.
  // The artwork is on the right side of 02. ABOUT!
  
  const outDir = path.join(__dirname, '../src/assets/images/sections');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Let's crop 02. ABOUT artwork
  // In Cell 2 (x: 341, y: 0, w: 341, h: 227)
  const cell2 = await page.evaluate(() => {
    const img = document.getElementById('src');
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');

    // Crop the entire 02. ABOUT panel
    // Width is roughly 341, height is roughly 227
    // Let's find exact card boundary by inspecting pixels
    canvas.width = 341;
    canvas.height = 227;
    ctx.drawImage(img, 341, 0, 341, 227, 0, 0, 341, 227);
    return canvas.toDataURL('image/png');
  });

  const base64Data = cell2.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(path.join(outDir, 'about-card-raw.png'), Buffer.from(base64Data, 'base64'));
  console.log('Saved about-card-raw.png');

  await browser.close();
})();
