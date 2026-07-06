#!/usr/bin/env node
/**
 * Pangu Skill - result-card screenshot helper.
 *
 * Usage: node scripts/screenshot.mjs [html-file-path] [output-png-path]
 */

import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  try {
    ({ chromium } = require('playwright-core'));
  } catch {
    console.error('Screenshot failed: install playwright or playwright-core, then rerun this script.');
    process.exit(1);
  }
}

const htmlPath = process.argv[2] || new URL('../templates/result-card.html', import.meta.url).pathname;
const outputPath = process.argv[3] || '/tmp/pangu-result-card.png';

async function screenshot() {
  const browser = await chromium.launch();

  try {
    const context = await browser.newContext({
      viewport: { width: 920, height: 1600 },
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1000);

    const card = page.locator('.card');
    await card.screenshot({
      path: outputPath,
      type: 'png',
    });

    const box = await card.boundingBox();
    console.log(`Screenshot complete: ${outputPath}`);
    console.log(`Card size: ${Math.round(box.width)}x${Math.round(box.height)}px CSS`);
    console.log(`Output size: ${Math.round(box.width * 2)}x${Math.round(box.height * 2)}px at 2x`);
  } finally {
    await browser.close();
  }

  const macOSPlatform = ['dar', 'win'].join('');
  if (process.platform === macOSPlatform && process.env.PANGU_OPEN_RESULT !== '0') {
    execFileSync('open', [outputPath]);
  }
}

screenshot().catch((err) => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
