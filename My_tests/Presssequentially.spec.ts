import { Browser, Page, test } from '@playwright/test';
import { chromium } from 'playwright';

test('move to element', async () => {
  const browser: Browser = await chromium.launch({ headless: false});
  const page: Page = await browser.newPage();

  await page.goto('https://www.daraz.pk/#?');
  await page.getByPlaceholder('Search in Daraz').pressSequentially("Iphone 15 proma")

 
});
