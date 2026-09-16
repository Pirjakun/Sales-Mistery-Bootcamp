import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fullReplacements = [
  ["I Gusti Ayu Ananda Putri", "Budi Santoso"],
  ["Dimas Wiyanarko", "Siti Rahma"],
  ["Sri Wijayati", "Andi Wijaya"],
  ["Elfasa Khoirumansyah", "Dewi Lestari"],
  ["Maria Dita Fivtiari", "Eka Pratama"],
  ["Fuad Jaka Pamungkas", "Fajar Hidayat"],
  ["Nindy Amalia", "Gita Gutawa"],
  ["Paramitha Maharesmi Nugraheni Putri", "Hendra Setiawan"],
  ["Paramitha Maharesmi", "Hendra Setiawan"],
  ["Ainur Hasanah", "Indah Permata"],
  ["Fadli Fahmi Ali", "Lead Trainer"],
  ["Mya Mar'atus Sholikhah", "Kartika Sari"],
  ["Yulia Mekar Rini", "Lukman Hakim"],
  ["Gilang Risnantyo", "Maya Anggraini"],
  ["Irvani Putri", "Novi Saputra"],
  ["Okki Putri Fadilah", "Oscar Perdana"],
  ["I Gusti Putu Yaktianuraga", "Putra Ramadhan"],
  ["Linda Susanto", "Rina Melati"],
  ["Etik Andriyanti", "Setyo Wibowo"],
  ["Sofyan Thohari", "Tania Putri"],
  ["Kensrie Diah Ayuningtyas", "Utami Dewi"],
  ["Adiel Priyarama", "Vicky Hermawan"]
];

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

const targetFiles = [
  'checkin.html',
  'scanner.html',
  'scanner-grid.html',
  'index.html',
  'booking.html',
  'api/checkin.js',
  'api/participants.js'
];

targetFiles.forEach(relPath => {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace full names first
  fullReplacements.forEach(([orig, replacement]) => {
    const re = new RegExp(orig.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    content = content.replace(re, replacement);
  });

  // Replace JSON field "panggilan": "Name" or "call": "Name"
  callReplacements.forEach(([orig, replacement]) => {
    content = content.replace(new RegExp(`"panggilan"\\s*:\\s*"${orig}"`, 'g'), `"panggilan": "${replacement}"`);
    content = content.replace(new RegExp(`"call"\\s*:\\s*"${orig}"`, 'g'), `"call": "${replacement}"`);
    content = content.replace(new RegExp(`<b>${orig}</b>`, 'g'), `<b>${replacement}</b>`);
    content = content.replace(new RegExp(`<li>${orig}</li>`, 'g'), `<li>${replacement}</li>`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated dummy data in ${relPath}`);
});

console.log('Dummy data replacement completed!');
