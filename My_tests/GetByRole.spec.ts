import { expect, Page, test } from '@playwright/test';
import { chromium } from 'playwright';

test('Aria Role locator test', async () => {
    const browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the registration page
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // Assert the heading "Register Account" is visible using Aria Role locator
    await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

    // Close the browser
    await browser.close();
});
