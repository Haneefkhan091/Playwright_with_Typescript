import { Browser, chromium, Page, test } from '@playwright/test';

test('Dropdown handling for country selection on Magazine Subscription page', async () => {
    // Launch the browser
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the subscription page
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    // Define the dropdown selector
    const countryDropDown = 'select#Contact_CountryCode';

    // Option 1: Select by value (e.g., 'AD' for Andorra)
    await page.selectOption(countryDropDown, { value: 'AD' });

    // Option 2: Select by label (e.g., 'Pakistan')
    await page.selectOption(countryDropDown, { label: 'Pakistan' });

    // Option 3: Select by index (e.g., 10th item)
    await page.selectOption(countryDropDown, { index: 10 });

    // Fetch all options available in the dropdown and print the count
    const allOptions = await page.$$(countryDropDown + ' > option');
    console.log('Total options in the dropdown:', allOptions.length);

    console.log('All options in the dropdown:');
    for (const option of allOptions) {
        const optionText = await option.textContent(); // Get the text of the option
        console.log(optionText); // Print the option text
    }

    // Wait for 15 seconds to visually inspect the page
    await page.waitForTimeout(15000);

    // Close the browser after the test completes
    await browser.close();
});
