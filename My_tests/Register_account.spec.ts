import { Browser, chromium, Page, test } from '@playwright/test';
import * as fs from 'fs'; // Import the file system module

// Utility function to get the next email
function getNextEmail() {
    const emailFile = 'emails.txt'; // File to store all emails

    // Check if the file exists, if not create it
    if (!fs.existsSync(emailFile)) {
        fs.writeFileSync(emailFile, 'Haneef007@yopmail.com\n'); // Initialize with a starting email
    }

    // Read the last email from the file and determine the next email
    const emails = fs.readFileSync(emailFile, 'utf-8').trim().split('\n');
    const lastEmail = emails[emails.length - 1]; // Get the last used email

    // Extract the number from the email and increment it
    const match = lastEmail.match(/Haneef(\d+)@yopmail.com/);
    let emailNumber = 7; // Default number if match fails
    if (match) {
        emailNumber = parseInt(match[1], 10) + 1;
    }

    // Construct the next email
    const nextEmail = `Haneef${String(emailNumber).padStart(3, '0')}@yopmail.com`;

    // Append the next email to the file
    fs.appendFileSync(emailFile, `${nextEmail}\n`);

    return nextEmail;
}

test('Register account and store the mail after registeration', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Get the next email for registration
    const email = getNextEmail();

    // Navigate to the registration page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // Fill in the registration form
    await page.locator('input[name="firstname"]').fill('Haneef');
    await page.locator('input[name="lastname"]').fill('khan');
    await page.locator('input[name="email"]').fill(email); // Use the dynamic email
    await page.locator('input[name="telephone"]').fill('03129137393');
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('input[name="confirm"]').fill('password123');

    // Select the Newsletter subscription option to 'No'
    await page.locator('input[name="newsletter"][value="0"]').check();

    // Agree to the Privacy Policy
    await page.locator('input[name="agree"]').check();

    // Click the Continue button to submit the form
    await page.locator('input[value="Continue"]').click();

    // Optionally, capture a screenshot after submitting the form
    await page.screenshot({ path: `./Screenshot/registration_success_${email}.png`, fullPage: true });

    // Close the browser
    await browser.close();
});
