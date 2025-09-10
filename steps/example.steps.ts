import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/HomePage';
import { page } from '../Util/Hooks';
import FlightSearchPage from '../pages/FlightSearchPage';
import { captureBrowserConsole } from '../Util/debugUtils';

let homePage: HomePage
let flightSearchPage: FlightSearchPage;

Given('the user is on the login page', async function () {
  captureBrowserConsole(page);
  homePage = new HomePage(page);
  await homePage.navigate();
});

When('the user enters valid credentials', {timeout: -1} , async function () {
  await homePage.closeLoginModal();
  await homePage.pageLoaded();
});

When('the user click search flight button', {timeout: -1} , async function () {
 await homePage.clickSearchFlight();
});

 Then('user navigates to flight page', {timeout: -1} , async function () {
      flightSearchPage = new FlightSearchPage(page);
  });
