import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout:  30*1000,      
//  expect: { timeout: 50 }, 
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: false,                  // run in headless mode
    baseURL: 'https://www.makemytrip.com/',  // default base url
    launchOptions: {
                     // slow down by 50ms
    },
    trace: 'on-first-retry',         // collect trace only on retry
    screenshot: 'on',   // capture screenshots on failure
    video: 'retain-on-failure',      // keep video only if failed
    viewport: { width: 1280, height: 720 },
  //  actionTimeout: 0,                // timeout for actions (0 = disabled)
    navigationTimeout: 30000,        // navigation timeout
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']    , viewport: { width: 1280, height: 720 }},
    },
  ],
});
