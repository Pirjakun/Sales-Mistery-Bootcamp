import fs from 'fs';
import path from 'path';

function extractPdfStrings(filePath) {
  const buf = fs.readFileSync(filePath);
  const str = buf.toString('latin1');
  
  // Extract text inside TJ / Tj arrays or text streams
  const matches = str.match(/\(([^()]+)\)\s*T[jJ]/g) || [];
  const textClean = matches.map(m => m.replace(/^\(|\)\s*T[jJ]$/g, '')).join(' ');
  
  // Also look for uncompressed text blocks
  const plainText = str.replace(/[^\x20-\x7E\n\r]/g, ' ');
  return { textClean, plainText };
}

const discFile = './Brief_Handbook_Sales_Mastery_Bootcamp/DISC_Profile_Tim_WG_Final.pdf';
const mbtiFile = './Brief_Handbook_Sales_Mastery_Bootcamp/Ringkasan deskripsi untuk MBTI.pdf';

console.log('=== DISC PDF ===');
const discRes = extractPdfStrings(discFile);
console.log(discRes.textClean.slice(0, 1000));
console.log('--- PLAIN TEXT BLOCKS ---');
const discLines = discRes.plainText.split('\n').filter(l => l.includes('DISC') || l.includes('MBTI') || l.includes('Nama') || l.length > 20);
console.log(discLines.slice(0, 50).join('\n'));

console.log('\n=== MBTI PDF ===');
const mbtiRes = extractPdfStrings(mbtiFile);
console.log(mbtiRes.textClean.slice(0, 1000));
