import { expect, Page } from "@playwright/test";

export default class FlightSearchPage {
    constructor(private page: Page) {
        if(!this.validateAppliedFilterText()){
            throw new Error("This is not Flight Search Page");
        }
    }

    private appliedFilterText = "//p[text()='Applied Filters']";

        async validateAppliedFilterText() {
        if(await this.page.locator(this.appliedFilterText).isVisible()){
           return true;
        }
    }

}