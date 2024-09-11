import test, { chromium } from "playwright/test";

test('move to element', async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    // Navigate to the website
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  
  // Scroll to the specific button by role and name 'Mouse Hover'
  const button = await page.getByRole('button', { name: 'Mouse Hover' });
  
  // Hover on the button
  await button.hover();
  await page.waitForTimeout(2000)
  });
  