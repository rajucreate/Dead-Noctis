const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load the full storyboard image
  const srcPath = 'C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg';
  const imgBase64 = fs.readFileSync(srcPath).toString('base64');

  await page.setContent(`
    <html>
      <body style="margin:0; background:black;">
        <img id="img" src="data:image/jpeg;base64,${imgBase64}" />
        <canvas id="c"></canvas>
      </body>
    </html>
  `);

  // Let's get the text titles from each cell by checking the top bar
  // Each cell has a title bar like:
  // "01. HOME", "02. ABOUT", "03. EVENTS / DETAILS", "04. RULES", "05. FAQ", "06. REGISTER", "07. ...", "08. ...", "09. ..."
  // Let's crop and upscale the top-left of each cell to inspect it
  const w = Math.floor(1024 / 3);
  const h = Math.floor(682 / 3);

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const idx = r * 3 + c + 1;
      const dataUrl = await page.evaluate(({ r, c, w, h }) => {
        const img = document.getElementById('img');
        const canvas = document.getElementById('c');
        canvas.width = 400;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        // crop cell
        ctx.drawImage(img, c * (1024/3), r * (682/3), 1024/3, 682/3, 0, 0, 400, 300);
        return canvas.toDataURL('image/png');
      }, { r, c, w, h });

      fs.writeFileSync(`scratch/cell_preview_${idx}.png`, Buffer.from(dataUrl.replace(/^data:image\/png;base64,/, ''), 'base64'));
    }
  }

  console.log('Saved all 9 cell previews');
  await browser.close();
})();
