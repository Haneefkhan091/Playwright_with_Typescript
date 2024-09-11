import test, { Browser, chromium, Page } from "playwright/test";

test('mouse click events', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();
  
    // Double click
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
    await page.getByText('Double-Click Me To See Alert').dblclick();
  
    await page.waitForTimeout(3000);
  
    // Right click / context click
    await page.getByText('right click me').click({ button: 'right' });
  
    // Shift + click
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({ modifiers: ['Shift'] });
  
    await page.waitForTimeout(10000);
  
    browser.close();
  });
  