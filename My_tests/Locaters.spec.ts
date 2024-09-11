import { test } from '@playwright/test';
import { chromium, Page } from 'playwright';

test('Getbyrole', async ({}) => {
    // Launch browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    // Navigate to the given URL
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // 1. ID Selector
    const emailField = page.locator('#input-email');
    await emailField.fill('test@example.com');
    console.log('Email field is enabled:', await emailField.isEnabled());

    // 2. Class Name Selector
    const logo = page.locator('.img-responsive');
    console.log('Logo is visible:', await logo.isVisible());

    // 3. Text Selector
    const forgottenPasswordLink = page.locator('text=Forgotten Password');
    console.log('Forgotten Password link is visible:', await forgottenPasswordLink.isVisible());

    // 4. CSS Selector
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('password123');
    console.log('Password field is enabled:', await passwordField.isEnabled());

    // 5. XPath Selector
    const loginButton = page.locator('//input[@value="Login"]');
    console.log('Login button is visible:', await loginButton.isVisible());

    // 6. Combining Selectors
    const usernameField = page.locator('input[type="text"]#input-email');
    await usernameField.fill('example@example.com');

    // 7. Chaining Selectors
    const signInButton = page.locator('form >> text=Login');
    console.log('Sign In button is enabled:', await signInButton.isEnabled());

    // 8. Attribute Selector
    const placeholderEmail = page.locator('[placeholder="E-Mail Address"]');
    await placeholderEmail.fill('example@domain.com');
    console.log('Email field with placeholder is filled.');

    // 9. nth-match Selector (for selecting a specific match among multiple)
    const thirdLink = page.locator('a').nth(2);
    console.log('Third link is visible:', await thirdLink.isVisible());

    // Close browser after interaction
    await browser.close();
});
