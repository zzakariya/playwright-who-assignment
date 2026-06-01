import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Scope to WHO health-topics scenarios only; excludes tests/example.spec.ts
  testMatch: ['**/health-topics/**/*.spec.ts'],
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 60_000,
  reporter: 'html',
  use: {
    baseURL: 'https://www.who.int',
    navigationTimeout: 30_000,
    actionTimeout: 15_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
