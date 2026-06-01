import {expect, test} from '@playwright/test';
import {TopicPage} from '../../pages/topic.page';

test.describe('Scenario 007', () => {
    test('resource links under a health topic load successfully', async ({page}) => {
        const topicPage = new TopicPage(page);

        await topicPage.navigate('/health-topics/ageing');
        expect(page.url()).toContain('/health-topics/ageing');

        await page.getByRole('link', {name: 'Databases and tools +'}).click();

        const firstLink = page
            .locator('[role="main"] .sf-accordion__panel')
            .filter({hasText: 'Databases and tools'})
            .locator('a[href^="http"]')
            .first();
        await expect(firstLink, 'No resource links found').toBeVisible();
        const href = (await firstLink.getAttribute('href')) ?? '';

        const [newTab] = await Promise.all([page.context().waitForEvent('page'), firstLink.click(),]);
        await newTab.waitForLoadState('domcontentloaded');

        await expect(newTab).not.toHaveURL(/\/404/i);

        if (topicPage.isWhoOwnedDomain(href)) {
            expect(topicPage.isWhoOwnedDomain(newTab.url())).toBe(true);
        }

        await newTab.close();
        await expect(page).toHaveURL(/\/health-topics\/ageing/);
    });
});
