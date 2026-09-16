import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const routeCopies = [
  { file: 'scanner.html', folder: 'scanner' },
  { file: 'scanner-grid.html', folder: 'scanner-grid' },
  { file: 'scanner-grid.html', folder: 'scanner-sesi2' },
  { file: 'checkin.html', folder: 'checkin' },
  { file: 'booking.html', folder: 'booking' }
];

routeCopies.forEach(({ file, folder }) => {
  const srcPath = path.join(distDir, file);
  const targetFolder = path.join(distDir, folder);
  const targetPath = path.join(targetFolder, 'index.html');

  if (fs.existsSync(srcPath)) {
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
    fs.copyFileSync(srcPath, targetPath);
    console.log(`Copied ${file} -> dist/${folder}/index.html`);
  }
});
console.log('Postbuild route copies completed!');
