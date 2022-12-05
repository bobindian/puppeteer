'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://15.207.254.126/mtest/', {
    waitUntil: 'networkidle2',
  });
  // page.pdf() is currently supported only in headless mode.
  // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
  await page.pdf({
    path: 'hn.pdf',
    format: 'letter',
  });

  await browser.close();
})();