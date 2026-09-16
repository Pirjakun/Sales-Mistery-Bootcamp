import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'docs', 'mobile-screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const executablePath = fs.existsSync(edgePath) ? edgePath : chromePath;

async function run() {
  console.log('Launching browser with executable:', executablePath);
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set Mobile Viewport (iPhone 13 / 14: 390x844)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  const indexPath = `file:///${path.join(rootDir, 'index.html').replace(/\\/g, '/')}`;
  console.log('Navigating to index.html:', indexPath);
  await page.goto(indexPath, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));

  // 00. Header & Quick Nav
  console.log('Capturing 00_header_nav.png...');
  await page.screenshot({
    path: path.join(outputDir, '00_header_nav.png'),
    clip: { x: 0, y: 0, width: 390, height: 780 }
  });

  // Chapters 01 to 16
  const chapInfo = await page.evaluate(() => {
    const chaps = Array.from(document.querySelectorAll('.chap'));
    return chaps.map((chap, idx) => {
      const numEl = chap.querySelector('.chap-n');
      const titleEl = chap.querySelector('h2');
      const num = numEl ? numEl.innerText.trim() : String(idx + 1).padStart(2, '0');
      const title = titleEl ? titleEl.innerText.trim() : `Bab ${num}`;
      return { num, title };
    });
  });

  const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

  for (let i = 0; i < chapInfo.length; i++) {
    const c = chapInfo[i];
    const fileName = `${c.num}_${slugify(c.title)}.png`;
    console.log(`Capturing chapter ${c.num}: ${c.title} -> ${fileName}`);

    await page.evaluate((idx) => {
      const el = document.querySelectorAll('.chap')[idx];
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, i);

    await new Promise(r => setTimeout(r, 200));

    const chapElement = (await page.$$('.chap'))[i];
    if (chapElement) {
      await chapElement.screenshot({
        path: path.join(outputDir, fileName)
      });
    }
  }

  // 17. Checkin Form Presensi
  const checkinPath = `file:///${path.join(rootDir, 'checkin.html').replace(/\\/g, '/')}`;
  console.log('Navigating to checkin.html:', checkinPath);
  await page.goto(checkinPath, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 17_checkin_presensi_form.png...');
  await page.screenshot({
    path: path.join(outputDir, '17_checkin_presensi_form.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  // 18. Tiket Digital Pass (Mobile)
  console.log('Switching checkin view to ticket pass...');
  await page.evaluate(() => {
    if (typeof S !== 'undefined') {
      S.view = 'ticket';
      if (typeof render === 'function') render();
    }
  });
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 18_tiket_digital_peserta.png...');
  await page.screenshot({
    path: path.join(outputDir, '18_tiket_digital_peserta.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  // 19. Scanner Operator Admin
  const scannerPath = `file:///${path.join(rootDir, 'scanner.html').replace(/\\/g, '/')}`;
  console.log('Navigating to scanner.html:', scannerPath);
  await page.goto(scannerPath, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 19_scanner_operator.png...');
  await page.screenshot({
    path: path.join(outputDir, '19_scanner_operator.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  // 20. Scanner Grid Dashboard
  const scannerGridPath = `file:///${path.join(rootDir, 'scanner-grid.html').replace(/\\/g, '/')}`;
  console.log('Navigating to scanner-grid.html:', scannerGridPath);
  await page.goto(scannerGridPath, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 20_scanner_grid_dashboard.png...');
  await page.screenshot({
    path: path.join(outputDir, '20_scanner_grid_dashboard.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  await browser.close();
  console.log('All 20 screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
