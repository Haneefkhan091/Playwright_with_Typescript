import { Browser, chromium, Page, test } from '@playwright/test';

test('File upload', async () => {
    // Launch the browser
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the subscription page
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator('input[type="file"]').scrollIntoViewIfNeeded()
    await page.setInputFiles('input[type="file"]', 'D:\\Playwright\\Fixture\\Best Practices of localization.jpg');
    await page.waitForTimeout(2000)
});
