import { Page,Locator, expect } from '@playwright/test';


export async function waitForElementToBeVisible(page: Page, locator: Locator, timeout: number = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
}

export async function waitForPageLoad(page: Page, state: 'load' | 'domcontentloaded' | 'networkidle' = 'load') {
    await page.waitForLoadState(state);
}

export async function waitForUrlContains(page: Page, substring: string, timeout: number = 5000) {
    await page.waitForURL(new RegExp(`.*${substring}.*`), { timeout });
}

export async function waitForText(locator: Locator, text: string, timeout: number = 5000) {
    await expect(locator).toHaveText(text, { timeout });
}