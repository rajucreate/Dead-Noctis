const fs = require('fs');
const path = require('path');

// Let's check the size of label files
for (let i = 1; i <= 9; i++) {
  const p = path.join(__dirname, `label_${i}.png`);
  if (fs.existsSync(p)) {
    console.log(`label_${i}.png exists, size: ${fs.statSync(p).size}`);
  }
}
