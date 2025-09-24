import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/HomePage';
import { page } from '../Util/Hooks';
import FlightSearchPage from '../pages/FlightSearchPage';
import { captureBrowserConsole } from '../Util/debugUtils';
import { expect , test } from '@playwright/test';
import { getUsers } from '../Util/apiUtils';
import { waitForPageLoad } from '../Util/waitUtils';

let homePage: HomePage
let flightSearchPage: FlightSearchPage;

Given('the user is on the login page', async function () {
  // homePage = new HomePage(page);
  // await homePage.navigate();
});

// When('the user enters valid credentials', {timeout: -1} , async function () {
//   if(homePage != null && homePage != undefined){
//     await homePage.closeLoginModal();
//     await homePage.pageLoaded();
//   }
//   else{
//     throw new Error("Home page is not initialized");
//   }
  
// });

// When('the user click search flight button', {timeout: -1} , async function () {
//  await homePage.clickSearchFlight();
// });

//  Then('user is on flight search page', {timeout: -1} , async function () {
//       // await page.pause();
//       // flightSearchPage = new FlightSearchPage(page);
//         await page.route('*/**/api/v1/fruits', async route => {
//         const json = [{ name: 'Mango', id: 21 }];
//         await route.fulfill({ json });
//   });
//   // Go to the page
//     await page.goto('https://demo.playwright.dev/api-mocking');

//   // Assert that the Strawberry fruit is visible
//     await expect(page.getByText('Mango')).toBeVisible();
//   });

   Then('user is on flight search page', async function () {

  const body = await getUsers();
  console.log(body);
  expect(body.data.length).toBeGreaterThan(0);
  expect(body.data[0]).toHaveProperty('id');
  expect(body.data[0]).toHaveProperty('email');
  expect(body.data[0]).toHaveProperty('first_name');
  expect(body.data[0]).toHaveProperty('last_name');
  });