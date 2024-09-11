import { Browser, chromium, Page, test } from '@playwright/test';

test('locator test', async () => {
    // Launch the browser in normal mode (not headless)
    const browser: Browser = await chromium.launch({ headless: false});

    // Create a new page (tab)
    const page: Page = await browser.newPage();

    // Navigate to the URL
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    // Locate the form field for the name and fill it
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Naveen');

    // Locate and click the button with the text 'Get Your Free Trial'
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    // Close the browser after the test completes
    await browser.close();
});
