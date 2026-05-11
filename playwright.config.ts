// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') }); // Load environment variables from .env file

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  //forbidOnly: !!process.env.CI,
 // retries: process.env.CI ? 2 : 0,
  //workers: process.env.CI ? 1 : 1,
  reporter: 'html',
  use: {
    //baseURL: 'https://demo.guru99.com/test/newtours',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'] },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */
  ],
});
