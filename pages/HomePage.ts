import { expect, Page } from "@playwright/test";
import { waitForText } from "../Util/waitUtils";

export default class HomePage {
    constructor(private page: Page) {}

    private loginModalCloseBtn = "//span[@data-cy = 'closeModal']";
    private companyLogo = "//a[@data-cy = 'mmtLogo']";
    private oneWayBtn = "//li[@data-cy = 'oneWayTrip' and @class = 'selected']";
    private searchFlightBtn = "//a[text()='Search']";
    private fromCityLabel = "//span[text()='From']/..";
    private fromCityInput = "//input[@placeholder='From']";


    async closeLoginModal() {
        if(await this.page.locator(this.loginModalCloseBtn).isVisible()){
            await this.page.locator(this.loginModalCloseBtn).click();
        }
    }

    async navigate() {
        await this.page.goto("https://www.makemytrip.com/");
    }

    async pageLoaded() {
        await waitForText(this.page.locator(this.oneWayBtn), 'One Way', 10000);
        await expect(this.page.locator(this.companyLogo)).toBeVisible();
        await expect(this.page.locator(this.oneWayBtn)).toBeVisible();
    }

    async enterFromCity(city: string) {
        await this.page.locator(this.fromCityLabel).click();
        await this.page.locator(this.fromCityInput).fill(city);
    }

    async clickSearchFlight() {
        await this.page.locator(this.searchFlightBtn).click();
    }
    
}