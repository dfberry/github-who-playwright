import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://thankful-glacier-0c994031e.azurestaticapps.net/');
  const title = page.locator('.Home');
  await expect(title).toHaveText('Home View 1Lorem ipsum dolor sit amet, consectetur adip.');
});