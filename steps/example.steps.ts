import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/HomePage';
import { page } from '../Util/Hooks';

let homePage: HomePage

Given('the user is on the login page', async function () {
  homePage = new HomePage(page);
  await homePage.navigate();
});

When('the user enters valid credentials', async function () {
  await homePage.closeLoginModal();
  await homePage.pageLoaded();
});

