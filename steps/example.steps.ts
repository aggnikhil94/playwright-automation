import { Given, When, Then } from '@cucumber/cucumber';

console.log("✅ example.steps.ts loaded");

Given('the user is on the login page', async function () {
  console.log('👉 User is on the login page');
});

When('the user enters valid credentials', async function () {
  console.log('👉 User enters valid credentials');
});

When('clicks the login button', async function () {
  console.log('👉 User clicks login button');
});

Then('the user should be redirected to the dashboard page', function () {
  console.log('👉 should be redirected to the dashboard');
    });

