import puppeteer from 'puppeteer';

const siteUrl = 'https://www.amazon.co.uk';
const fileName = 'amazon-uk';

(async () => {
  console.log('launching chrome');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  console.log('visiting page');
  await page.goto(siteUrl);
  console.log('taking screenshot');
  await page.screenshot({
    path: `${fileName}.png`,
    fullPage: true,
  });
  console.log('screenshot taken');
  console.log('now taking in mobile mode');
  await page.setViewport({
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
  });
  console.log('visiting page');
  await page.goto(siteUrl);
  console.log('taking screenshot');
  await page.screenshot({
    path: `${fileName}-mobile.png`,
    fullPage: true,
  });

  await browser.close();
})();
