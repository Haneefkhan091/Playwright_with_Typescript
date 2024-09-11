import { Browser, chromium, Page, test } from '@playwright/test';
test('locator test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    // Option 1: Using chained locators to fill form and submit
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Naveen');
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    // Option 2: Using getByRole for button
    const form = page.locator('form#Form_getForm');
    const getYourFreeTrButton = page.getByRole('button', { name: 'Get Your Free Trial' });

    await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('Naveen');
    await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();

    // Optional: Another way to click the button
    await form.locator(getYourFreeTrButton).click();
});
