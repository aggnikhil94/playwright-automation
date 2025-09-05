import { expect, Page } from "@playwright/test";

export default class HomePage {
    constructor(private page: Page) {}

    private loginModalCloseBtn = "//span[@data-cy = 'closeModal']";
    private companyLogo = "//a[@data-cy = 'mmtLogo']";
    private oneWayBtn = "//li[@data-cy = 'oneWayTrip' and @class = 'selected']";

    async closeLoginModal() {
        if(await this.page.locator(this.loginModalCloseBtn).isVisible()){
            await this.page.locator(this.loginModalCloseBtn).click();
        }
    }

    async navigate() {
        await this.page.goto("https://www.makemytrip.com/");
    }

    async pageLoaded() {
        await expect(this.page.locator(this.companyLogo)).toBeVisible();
        await expect(this.page.locator(this.oneWayBtn)).toBeVisible();
    }
}