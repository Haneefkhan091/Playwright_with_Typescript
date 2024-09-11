import { Browser, chromium, expect, Page, test } from '@playwright/test';

test('login test with single session in incognito mode', async () => {
    // Launch the browser in normal (non-headless) mode
    const browser: Browser = await chromium.launch({ headless: false });

    // Create an incognito browser context (each newContext is incognito by default)
    const incognitoContext = await browser.newContext(); // Incognito session

    // Create a page for the user session
    const page: Page = await incognitoContext.newPage();

    // Navigate to the login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Perform login
    const emailId = page.locator('[name="email"]');
    const password = page.locator('[name="password"]');
    const loginButton = page.locator('input[value="Login"]');

    await emailId.fill("Haneef007@yopmail.com");
    await password.fill("password123");
    await loginButton.click();

    // Check if the login is successful by verifying the page title
    const title = await page.title();
    expect(title).toEqual('My Account');
    console.log('Page Title after login:', title);

    // Take a screenshot after login
    await page.screenshot({ path: './Screenshot/screenshot_after_login_incognito.png', fullPage: true });

    await page.waitForTimeout(10000);
    // Close the incognito context and browser
    await incognitoContext.close();
    await browser.close();
});
