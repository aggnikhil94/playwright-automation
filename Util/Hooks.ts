import { After, Before } from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright";

let context: BrowserContext;
let page: Page;

Before(async function (scenario) {
    console.log(`****Starting Scenario: ${scenario.pickle.name}****`)
})

After(async function (scenario) {
    console.log('****Ending Scenario****')
})