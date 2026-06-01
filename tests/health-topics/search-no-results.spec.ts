import {expect, test} from '@playwright/test';
import {HealthTopicsPage} from '../../pages/health-topics.page';
import {GlobalHeaderComponent} from '../../pages/global-header.component';

test.describe('Scenario 006', () => {
  test('search with invalid keyword shows no-results page', async ({ page }) => {
    const healthTopics = new HealthTopicsPage(page);
    const header = new GlobalHeaderComponent(page);

    await healthTopics.open();

    await header.searchInput().fill('abc111xyz123');
    await header.searchInput().press('Enter');

    await expect(page).toHaveURL(/search-results/);

    await expect(page.getByText(/Your search did not match any results/i)).toBeVisible();

    await healthTopics.open();
    await expect(healthTopics.heading()).toBeVisible();
  });
});
