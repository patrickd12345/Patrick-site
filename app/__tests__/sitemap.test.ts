import test from 'node:test';
import assert from 'node:assert';
import sitemap, { routes } from '../sitemap.ts';
import { siteConfig } from '../../lib/site-config.ts';

test('sitemap function returns correct number of routes', () => {
  const result = sitemap();
  assert.strictEqual(result.length, routes.length);
});

test('sitemap function returns correct structure for each route', () => {
  const result = sitemap();

  // Verify expected routes are present
  assert.strictEqual(routes.includes(""), true);
  assert.strictEqual(routes.includes("/projects"), true);
  assert.strictEqual(routes.includes("/case-studies"), true);
  assert.strictEqual(routes.includes("/about"), true);
  assert.strictEqual(routes.includes("/resume"), true);
  assert.strictEqual(routes.includes("/contact"), true);

  result.forEach((item, index) => {
    const route = routes[index];
    assert.strictEqual(item.url, `${siteConfig.siteUrl}${route}`);
    assert.ok(item.lastModified instanceof Date);
    assert.strictEqual(item.changeFrequency, 'weekly');
    if (route === '') {
      assert.strictEqual(item.priority, 1);
    } else {
      assert.strictEqual(item.priority, 0.8);
    }
  });
});
