import { Page, Locator } from "@playwright/test";


export async function clickElement(locator: Locator, timeout: number = 5000) {
    await locator.waitFor({state: 'visible', timeout});
    await locator.click();
}

export async function typeText(locator: Locator, text: string, delay: number = 0) {
    await locator.fill('');
    await locator.pressSequentially(text, {delay});
}

export async function doubleClick(locator: Locator, timeout: number = 5000) {
    await locator.dblclick({timeout});
}

export async function fillInput(locator: Locator, text: string) {
  await locator.fill(text);
}

export async function selectDropdown(locator: Locator, option: string | number) {
  if (typeof option === 'number') {
    await locator.selectOption({ index: option });
  } else {
    await locator.selectOption(option);
  }
}

export async function checkCheckbox(locator: Locator) {
  if (!(await locator.isChecked())) {
    await locator.check();
  }
}

export async function uncheckCheckbox(locator: Locator) {
  if (await locator.isChecked()) {
    await locator.uncheck();
  }
}

export async function hoverElement(locator: Locator) {
  await locator.hover();
}

export async function rightClick(locator: Locator) {
  await locator.click({ button: 'right' });
}