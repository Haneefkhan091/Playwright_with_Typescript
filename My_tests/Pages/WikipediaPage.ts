import { Page } from '@playwright/test';

export class WikipediaPage {
    private page: Page;
    private languageDropdown = 'select#searchLanguage';
    private searchInput = 'input[name="search"]';
    private submitButton = 'button[type="submit"]';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.wikipedia.org/');
    }

    async selectLanguage(language: string) {
        const dropdown = this.page.locator(this.languageDropdown);
        await dropdown.selectOption({ label: language });
        return await dropdown.inputValue();
    }

    async search(term: string) {
        await this.page.locator(this.searchInput).fill(term);
        await this.page.locator(this.submitButton).click();
    }

    async getTitle() {
        return await this.page.title();
    }
}
