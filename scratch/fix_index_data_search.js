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

const wordReplacements = [
  ["ananda", "budi"],
  ["nanda", "budi"],
  ["dimas", "siti"],
  ["wiyanarko", "rahma"],
  ["sri", "andi"],
  ["wijayati", "wijaya"],
  ["jay", "andi"],
  ["elfasa", "dewi"],
  ["khoirumansyah", "lestari"],
  ["maria", "eka"],
  ["dita", "eka"],
  ["fivtiari", "pratama"],
  ["fuad", "fajar"],
  ["jaka", "fajar"],
  ["pamungkas", "hidayat"],
  ["nindy", "gita"],
  ["amalia", "gutawa"],
  ["paramitha", "hendra"],
  ["mitha", "hendra"],
  ["ainur", "indah"],
  ["hasanah", "permata"],
  ["fadli", "trainer"],
  ["fahmi", "trainer"],
  ["mya", "kartika"],
  ["sholikhah", "sari"],
  ["yulia", "lukman"],
  ["mekar", "hakim"],
  ["gilang", "maya"],
  ["risnantyo", "anggraini"],
  ["irvani", "novi"],
  ["okki", "oscar"],
  ["fadilah", "perdana"],
  ["yaktianuraga", "ramadhan"],
  ["bagus", "putra"],
  ["linda", "rina"],
  ["susanto", "melati"],
  ["etik", "setyo"],
  ["andri", "setyo"],
  ["andriyanti", "wibowo"],
  ["sofyan", "tania"],
  ["popan", "tania"],
  ["thohari", "putri"],
  ["kensrie", "utami"],
  ["ayuningtyas", "dewi"],
  ["adiel", "vicky"],
  ["priyarama", "hermawan"]
];

const indexPath = path.join(rootDir, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace placeholder
content = content.replace(/placeholder="Cari nama peserta atau nomor kamar \(mis: 412, Nanda, Fadli\)\.\.\."/g, 'placeholder="Cari nama peserta atau nomor kamar (mis: 101, Budi, Trainer)..."');

// Replace all data-search attributes
content = content.replace(/data-search="([^"]+)"/g, (match, p1) => {
  let searchStr = p1;
  fullReplacements.forEach(([orig, replacement]) => {
    const re = new RegExp(orig.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    searchStr = searchStr.replace(re, replacement);
  });
  wordReplacements.forEach(([orig, replacement]) => {
    const re = new RegExp(`\\b${orig}\\b`, 'gi');
    searchStr = searchStr.replace(re, replacement);
  });
  return `data-search="${searchStr}"`;
});

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Cleaned data-search attributes in index.html!');
