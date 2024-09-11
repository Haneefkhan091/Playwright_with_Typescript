import { Browser, chromium, expect, Page, test } from '@playwright/test';

test('registration test', async () => {
    // Launch browser
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the registration page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // 1. ID Selector (First Name and Last Name fields)
    const firstNameField = page.locator('#input-firstname');
    const lastNameField = page.locator('#input-lastname');
    
    await firstNameField.fill('John');
    await lastNameField.fill('Doe');

    // 2. Class Name Selector (Logo Image)
    const logo = page.locator('.img-responsive');
    expect(await logo.isVisible()).toBeTruthy();

    // 3. Corrected Selector for Privacy Policy checkbox
    const privacyPolicyCheckbox = page.locator('input[name="agree"]'); // Use the checkbox's name attribute to locate it specifically
    expect(await privacyPolicyCheckbox.isVisible()).toBeTruthy();
    await privacyPolicyCheckbox.check(); // Check the checkbox

    // 4. CSS Selector (Email input)
    const emailField = page.locator('input[type="email"]');
    await emailField.fill('john.doe@example.com');

    // 5. XPath Selector (Submit/Register button)
    const registerButton = page.locator('//input[@value="Continue"]');
    expect(await registerButton.isVisible()).toBeTruthy();

    // 8. Combining Selectors (Combining ClassName and Attribute)
    const passwordField = page.locator('input[type="password"]#input-password');
    await passwordField.fill('password123');

    // 11. Attribute Selector (Phone number input by placeholder)
    const telephoneField = page.locator('[placeholder="Telephone"]');
    await telephoneField.fill('1234567890');

    // Take screenshot after filling form
    await page.screenshot({ path: './Screenshot/registration_form_filled.png', fullPage: true });

    // Optionally, submit the form (Uncomment if needed)
    // await registerButton.click();
    // await page.waitForNavigation(); // Wait for navigation after form submission

    // Close browser after interaction
    await browser.close();
});
