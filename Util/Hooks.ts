import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import config from "../playwright.config";

export let context: BrowserContext;
export let browser : Browser;
export let page : Page;

BeforeAll(async () => {
    browser = await chromium.launch(config.use);
})

AfterAll(async () => {
    await browser.close();
})

Before(async () => {
    context = await browser.newContext(config.use);
    page = await context.newPage();
})

After(async () => {
    await page.close();
    await context.close();
})