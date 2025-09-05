import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";

export let context: BrowserContext;
export let browser : Browser;
export let page : Page;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 50 });
})

AfterAll(async () => {
    await browser.close();
})

Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    page.setDefaultTimeout(60000);
    page.setDefaultNavigationTimeout(60000);
})

After(async () => {
    await page.close();
    await context.close();
})