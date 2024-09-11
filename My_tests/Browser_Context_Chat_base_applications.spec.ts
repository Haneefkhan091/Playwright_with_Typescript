import { Browser, chromium, expect, Page, test } from '@playwright/test';

test('login test with two different sessions', async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    // Create two separate browser contexts
    const context1 = await browser.newContext(); // First user session
    const context2 = await browser.newContext(); // Second user session

    // Create pages for each user session
    const page1: Page = await context1.newPage();
    const page2: Page = await context2.newPage();

    // Navigate both users to the login page
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // First user login
    const emailId1 = await page1.locator('[name="email"]');
    const password1 = await page1.locator('[name="password"]');
    const loginButton1 = await page1.locator('input[value="Login"]');

    await emailId1.fill("Haneef007@yopmail.com");
    await password1.fill("password123");
    await loginButton1.click();

    // Second user login
    const emailId2 = await page2.locator('[name="email"]');
    const password2 = await page2.locator('[name="password"]');
    const loginButton2 = await page2.locator('input[value="Login"]');

    await emailId2.fill("Haneef008@yopmail.com"); // A different user
    await password2.fill("password123");
    await loginButton2.click();

    // Check if both logins are successful by verifying the page title for each session
    const title1 = await page1.title();
    expect(title1).toEqual('My Account');  
    console.log('User 1 Title:', title1);

    const title2 = await page2.title();
    expect(title2).toEqual('My Account');
    console.log('User 2 Title:', title2);

    // Take screenshots after login for both sessions
    await page1.screenshot({ path: './Screenshot/screenshot_after_login_user1.png', fullPage: true });
    await page2.screenshot({ path: './Screenshot/screenshot_after_login_user2.png', fullPage: true });

    // Close both contexts
    await context1.close();
    await context2.close();

    await browser.close();
});
