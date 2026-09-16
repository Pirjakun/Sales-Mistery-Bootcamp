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

  // 1. Desktop View Scanner U-Shape (1280x800)
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5 });
  const scannerPath = `file:///${path.join(rootDir, 'scanner.html').replace(/\\/g, '/')}`;
  console.log('Capturing Desktop Scanner U-Shape:', scannerPath);
  await page.goto(scannerPath, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, '21_scanner_desktop_ushape.png') });

  // 2. Desktop View Scanner Grid 5x5 (1280x800)
  const scannerGridPath = `file:///${path.join(rootDir, 'scanner-grid.html').replace(/\\/g, '/')}`;
  console.log('Capturing Desktop Scanner Grid:', scannerGridPath);
  await page.goto(scannerGridPath, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, '22_scanner_desktop_grid.png') });

  // 3. Mobile View Scanner U-Shape (390x844)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  console.log('Capturing Mobile Scanner U-Shape:', scannerPath);
  await page.goto(scannerPath, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, '19_scanner_operator.png') });

  // 4. Mobile View Scanner Grid 5x5 (390x844)
  console.log('Capturing Mobile Scanner Grid:', scannerGridPath);
  await page.goto(scannerGridPath, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, '20_scanner_grid_dashboard.png') });

  await browser.close();
  console.log('Scanner page screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error capturing scanner screenshots:', err);
  process.exit(1);
});
