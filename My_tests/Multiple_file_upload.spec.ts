import path from "path";
import test, { Browser, chromium } from "playwright/test";

test('Single File Upload', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page = await browser.newPage();
  
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  
    // Multiple file upload
    await page.locator("input[name='filesToUpload']")
      .setInputFiles([
        path.join("D:\\Playwright\\Fixture\\Best Practices of localization.jpg"),
        path.join("D:\\Playwright\\Fixture\\Best Practices of localization1.jpg"),
        path.join("D:\\Playwright\\Fixture\\Dispatched+Address+Status+11-09-2024+10AM.xlsx")
      ]);
  await page.waitForTimeout(4000)
//Deselect all Uploaded file
await page.locator("input[name='filesToUpload']").setInputFiles([]);
  
    await page.waitForTimeout(3000); // Optional wait to observe the upload
    await browser.close();
  });
  