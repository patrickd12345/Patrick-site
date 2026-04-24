import test from "node:test";
import assert from "node:assert";
import { resolvePatrickSiteRuntimeEnv } from "../runtimeEnv.ts";

test("resolvePatrickSiteRuntimeEnv - default values", () => {
  const env = resolvePatrickSiteRuntimeEnv({});
  assert.strictEqual(env.contactEmail, "hello@patrickduchesneau.com");
  assert.strictEqual(env.siteUrl, "https://patrickduchesneau.com");
});

test("resolvePatrickSiteRuntimeEnv - custom contact email", () => {
  const env = resolvePatrickSiteRuntimeEnv({
    NEXT_PUBLIC_CONTACT_EMAIL: "custom@example.com",
  });
  assert.strictEqual(env.contactEmail, "custom@example.com");
  assert.strictEqual(env.hasCustomContactEmail, true);
});

test("resolvePatrickSiteRuntimeEnv - invalid custom contact email (protocol injection)", () => {
  const env = resolvePatrickSiteRuntimeEnv({
    NEXT_PUBLIC_CONTACT_EMAIL: "javascript:alert(1)@example.com",
  });
  // Should fallback to default because of ':'
  assert.strictEqual(env.contactEmail, "hello@patrickduchesneau.com");
  assert.strictEqual(env.hasCustomContactEmail, false);
});

test("resolvePatrickSiteRuntimeEnv - invalid custom contact email (no @)", () => {
  const env = resolvePatrickSiteRuntimeEnv({
    NEXT_PUBLIC_CONTACT_EMAIL: "invalidemail",
  });
  assert.strictEqual(env.contactEmail, "hello@patrickduchesneau.com");
  assert.strictEqual(env.hasCustomContactEmail, false);
});
