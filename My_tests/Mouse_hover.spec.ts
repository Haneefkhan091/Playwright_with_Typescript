import test, { Browser, chromium, Page } from "playwright/test";

test('move to element', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
  
    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
  
    await page.waitForTimeout(15000);
  });
  