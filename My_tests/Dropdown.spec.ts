import { Browser, chromium, Page, test } from '@playwright/test';

test('Dropdown handling on Wikipedia language selection page', async () => {
    // Launch the browser in normal mode
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to Wikipedia's language selection page
    await page.goto('https://www.wikipedia.org/');

    // Interact with the dropdown for language selection (select a language like "English")
    const languageDropdown = page.locator('select#searchLanguage');
    await languageDropdown.selectOption({ label: 'English' }); // Selecting English

    // Optionally, verify if the correct option was selected
    const selectedLanguage = await languageDropdown.inputValue();
    console.log('Selected language:', selectedLanguage); // Should log 'de' for English 

    // Simulate searching with the selected language
    await page.locator('input[name="search"]').fill('Playwright');
    await page.locator('button[type="submit"]').click();

    const pageTitle = await page.title();
    console.log('Page title after search:', pageTitle); // Should reflect the search term and language
await page.waitForTimeout(2000);
    // Close the browser after the test completes
    await browser.close();
});
