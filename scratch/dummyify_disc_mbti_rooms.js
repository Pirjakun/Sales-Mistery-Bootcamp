import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const roomMap = {
  "412": "101",
  "413": "102",
  "414": "103",
  "415": "104",
  "416": "105",
  "417": "106",
  "421": "107",
  "422": "108",
  "423": "109",
  "424": "110",
  "425": "111"
};

const dummyDiscs = ["D", "I", "S", "C", "D/I", "S/C", "I/S", "D/C"];
const dummyMbtis = ["ESTJ", "ENFP", "ISTP", "ISFJ", "ENTJ", "INFP", "ESTP", "ISTJ"];

const dummyKarakter = "Profil karakter & komitmen peserta bootcamp.";
const dummyCommStyle = "Gaya komunikasi profesional, ramah, dan terstruktur.";
const dummySaran = "Fokus pada pengembangan sales planning, komunikasi, dan follow-up.";
const dummySalesStrength = "Komunikatif, energik, dan mudah membangun koneksi dengan pelanggan.";
const dummySalesRisk = "Perlu menjaga konsistensi dalam eksekusi dan tindak lanjut.";
const dummyTipsKomunikasi = "Sampaikan poin utama secara lugas, antusias, dan berikan dorongan positif.";

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

  // Replace room numbers 412..425 -> 101..111
  Object.entries(roomMap).forEach(([oldRoom, newRoom]) => {
    // Replace in JSON field "kamar": "412" or "room": "412"
    content = content.replace(new RegExp(`"kamar"\\s*:\\s*"${oldRoom}"`, 'g'), `"kamar": "${newRoom}"`);
    content = content.replace(new RegExp(`"room"\\s*:\\s*"${oldRoom}"`, 'g'), `"room": "${newRoom}"`);
    content = content.replace(new RegExp(`Kamar ${oldRoom}`, 'g'), `Kamar ${newRoom}`);
    content = content.replace(new RegExp(`data-search="\\s*${oldRoom}`, 'g'), `data-search="${newRoom}`);
  });

  // Replace detailed DISC analysis fields in JS files / script tags
  content = content.replace(/"karakter"\s*:\s*"[^"]*"/g, `"karakter": "${dummyKarakter}"`);
  content = content.replace(/"commStyle"\s*:\s*"[^"]*"/g, `"commStyle": "${dummyCommStyle}"`);
  content = content.replace(/"saran"\s*:\s*"[^"]*"/g, `"saran": "${dummySaran}"`);
  content = content.replace(/"salesStrength"\s*:\s*"[^"]*"/g, `"salesStrength": "${dummySalesStrength}"`);
  content = content.replace(/"salesRisk"\s*:\s*"[^"]*"/g, `"salesRisk": "${dummySalesRisk}"`);
  content = content.replace(/"tipsKomunikasi"\s*:\s*"[^"]*"/g, `"tipsKomunikasi": "${dummyTipsKomunikasi}"`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Dummy-ified DISC, MBTI & Rooms in ${relPath}`);
});

console.log('Finished updating DISC profiles, MBTI, and Rooming list to dummy data!');
