import { Page, TestInfo } from "@playwright/test";
import fs from 'fs';
import path from "path";


export function logStep(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[STEP] ${timestamp} - ${message}`);
}

export function captureBrowserConsole(page: Page){
    page.on('console', (msg) => {
        console.log(`[BROWSER LOG] ${msg.type()}: ${msg.text()}`)
    })
}

export async function screenShotOnFailure(page: Page, testInfo: TestInfo) {
    if(testInfo.status !== testInfo.expectedStatus){
        const fileName = `failed_${testInfo.title.replace(/\s+/g,'_')}.png`;
        await page.screenshot({path: path.join('screenshots', fileName), fullPage: true});
        console.log(`Failure screenshot: screenshots/${fileName}`);
    }
}