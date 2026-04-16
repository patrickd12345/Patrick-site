import test from 'node:test';
import assert from 'node:assert';
import { getActionClasses } from '../cta-cluster-logic.ts';

test('getActionClasses - primary variant', () => {
  const classes = getActionClasses('primary');
  assert.match(classes, /border-accent/);
  assert.match(classes, /bg-accent/);
  assert.match(classes, /text-\[var\(--color-bg\)\]/);
});

test('getActionClasses - secondary variant', () => {
  const classes = getActionClasses('secondary');
  assert.match(classes, /border-subtle/);
  assert.match(classes, /bg-transparent/);
  assert.match(classes, /text-foreground/);
});

test('getActionClasses - undefined variant (defaults to secondary)', () => {
  const classes = getActionClasses(undefined);
  assert.match(classes, /border-subtle/);
  assert.match(classes, /bg-transparent/);
});
