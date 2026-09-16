import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const callReplacements = [
  ["Nanda", "Budi"],
  ["Dimas", "Siti"],
  ["Jay", "Andi"],
  ["Elfasa", "Dewi"],
  ["Dita", "Eka"],
  ["Jaka", "Fajar"],
  ["Nindy", "Gita"],
  ["Mitha", "Hendra"],
  ["Ainur", "Indah"],
  ["Fadli", "Trainer"],
  ["Mya", "Kartika"],
  ["Yulia", "Lukman"],
  ["Gilang", "Maya"],
  ["Irvani", "Novi"],
  ["Okki", "Oscar"],
  ["Bagus", "Putra"],
  ["Linda", "Rina"],
  ["Andri", "Setyo"],
  ["Popan", "Tania"],
  ["Kensrie", "Utami"],
  ["Adiel", "Vicky"]
];

const files = ['api/checkin.js', 'booking.html'];

files.forEach(relPath => {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  callReplacements.forEach(([orig, replacement]) => {
    content = content.replace(new RegExp(`"call"\\s*:\\s*"${orig}"`, 'g'), `"call": "${replacement}"`);
    content = content.replace(new RegExp(`"room"\\s*:\\s*"421"`, 'g'), `"room": "107"`);
    content = content.replace(new RegExp(`"room"\\s*:\\s*"412"`, 'g'), `"room": "101"`);
    content = content.replace(new RegExp(`"room"\\s*:\\s*"417"`, 'g'), `"room": "106"`);
    content = content.replace(new RegExp(`${orig.toLowerCase()}@`, 'g'), `${replacement.toLowerCase()}@`);
    content = content.replace(new RegExp(`Kursi (\\d+) · ${orig}`, 'g'), `Kursi $1 · ${replacement}`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned ${relPath}`);
});
