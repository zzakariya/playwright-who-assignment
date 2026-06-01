import {expect, test} from '@playwright/test';
import {HealthTopicsPage} from '../../pages/health-topics.page';
import {GlobalHeaderComponent} from '../../pages/global-header.component';

test.describe('Scenario 009', () => {
  test('WHO global navigation header is present and navigable', async ({ page }) => {
    const healthTopics = new HealthTopicsPage(page);
    const header = new GlobalHeaderComponent(page);

    await healthTopics.open();

    await expect(header.whoLogo()).toBeVisible();

    await header.clickWhoLogo();
    await expect(page).toHaveURL(/^https:\/\/www\.who\.int(\/[a-z]{2})?\/?\??/);

    await healthTopics.open();
    await expect(healthTopics.heading()).toBeVisible();

    if ((await header.languageSelector().count()) > 0) {
      await expect(header.languageSelector()).toBeVisible();
    }

    await expect(header.searchInput()).toBeVisible();
  });
});
