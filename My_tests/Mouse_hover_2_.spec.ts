import test, { chromium } from "playwright/test";

test('move to element', async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    // Navigate to Amazon website
    await page.goto('https://www.amazon.com');
    
    // Hover over the 'Account & Lists' menu
    await page.hover('#nav-link-accountList');
    
    // Wait for the dropdown to appear
    await page.waitForSelector('div#nav-al-your-account');
    
    // Click on 'Your Orders' in the dropdown
    await page.click('a[href*="your-orders"]');
  });
  