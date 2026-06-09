import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE || 'http://localhost:4173';
const screens = ['welcome', 'home', 'detail', 'add', 'lockscreen', 'found', 'map', 'dashboard', 'finder'];

mkdirSync('screenshots', { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars'],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

for (const s of screens) {
  await page.goto(`${BASE}/?screen=${s}`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `screenshots/${s}.png` });
  console.log('captured', s);
}

await browser.close();
console.log('done');
