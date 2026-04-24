import test from 'node:test';
import assert from 'node:assert';
import robots from '../robots.ts';
import { siteConfig } from '../../lib/site-config.ts';

test('robots function returns correct structure', () => {
  const result = robots();

  assert.strictEqual(typeof result, 'object');
  assert.ok(result.rules);

  // Handling rules as either a single object or an array as per MetadataRoute.Robots
  const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;

  assert.strictEqual(rules.userAgent, '*');
  assert.strictEqual(rules.allow, '/');
  assert.strictEqual(result.sitemap, `${siteConfig.siteUrl}/sitemap.xml`);
});
