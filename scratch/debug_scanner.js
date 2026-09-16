import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const executablePath = fs.existsSync(edgePath) ? edgePath : chromePath;

async function debugScanner() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));
  page.on('requestfailed', req => console.error('REQUEST FAILED:', req.url(), req.failure().errorText));

  const filePath = `file:///${path.join(rootDir, 'scanner.html').replace(/\\/g, '/')}`;
  console.log('Navigating to:', filePath);

  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const bodyHtml = await page.evaluate(() => document.body.innerHTML);
  console.log('Body HTML length:', bodyHtml.length);
  console.log('Body inner HTML preview:', bodyHtml.substring(0, 300));

  await browser.close();
}

debugScanner().catch(console.error);
