import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "playwright";
import config from "../playwright.config";
import { disposeApiContext, initApiContext } from "./apiContext";

export let context: BrowserContext;
export let browser : Browser;
export let page : Page;

BeforeAll(async () => {
    await initApiContext();
    const browserType = (process.env.BROWSER as 'chromium' | 'firefox' | 'webkit') || 'chromium';
    if (browserType === 'chromium')
        browser = await chromium.launch(config.use);
    else if (browserType === 'firefox') {
        browser = await firefox.launch(config.use);
    }
    else {
        browser = await webkit.launch(config.use);
    }
    console.log("Browser launched", browser.browserType().name());
})

AfterAll(async () => {
    await browser.close();
    await disposeApiContext();
})

Before(async () => {
    context = await browser.newContext(config.use);
    page = await context.newPage();
})

After(async () => {
    await page.close();
    await context.close();
})