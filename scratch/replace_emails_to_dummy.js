import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetFiles = [
  'booking.html',
  'checkin.html',
  'scanner.html',
  'scanner-grid.html',
  'index.html',
  'api/checkin.js',
  'api/participants.js'
];

targetFiles.forEach(relPath => {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace @werkudara.com -> @example.com
  content = content.replace(/@werkudara\.com/gi, '@example.com');
  content = content.replace(/contoh@werkudara\.com/gi, 'contoh@example.com');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Replaced emails in ${relPath}`);
});

console.log('Finished replacing emails to dummy @example.com!');
