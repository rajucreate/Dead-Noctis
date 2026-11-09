const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Load each cell_*.jpg and examine text content using tesseract or simple inspection
  console.log('Inspecting cell images...');
  for (let i = 1; i <= 9; i++) {
    const p = path.resolve(`scratch/cell_${i}.jpg`);
    const stats = fs.statSync(p);
    console.log(`Cell ${i}: ${stats.size} bytes`);
  }
  await browser.close();
})();
