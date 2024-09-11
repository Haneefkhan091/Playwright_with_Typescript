import { Browser, Page, chromium } from '@playwright/test';

export class BaseTest {
    public browser!: Browser; // Use definite assignment
    public page!: Page;       // Use definite assignment

    async setup() {
        this.browser = await chromium.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async teardown() {
        await this.browser.close();
    }
}
