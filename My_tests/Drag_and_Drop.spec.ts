import { Browser, Page, test } from '@playwright/test';
import { chromium } from 'playwright';

test('move to element', async () => {
  const browser: Browser = await chromium.launch({ headless: false});
  const page: Page = await browser.newPage();

  await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

  // Single command for drag and drop
//   await page.locator("#draggable").dragTo(page.locator("#droppable"));

  // Multiple commands for drag and drop
  await page.locator("#draggable").hover();
  await page.mouse.down();
  await page.locator("#droppable").hover();
  await page.mouse.up();

  await page.waitForTimeout(15000);
});
