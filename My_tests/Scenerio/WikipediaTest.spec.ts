
import { test } from '@playwright/test';
import { WikipediaPage } from '../Pages/WikipediaPage';
import { BaseTest } from './../BaseTest/BaseTest';

test.only('Dropdown handling on Wikipedia language selection page', async () => {
    const baseTest = new BaseTest();
    await baseTest.setup();

    const wikipediaPage = new WikipediaPage(baseTest.page);
    await wikipediaPage.navigate();

    const selectedLanguage = await wikipediaPage.selectLanguage('English');
    console.log('Selected language:', selectedLanguage); // Should log 'en' for English

    await wikipediaPage.search('Playwright');

    const pageTitle = await wikipediaPage.getTitle();
    console.log('Page title after search:', pageTitle); // Should reflect the search term and language

    await baseTest.teardown();
});

