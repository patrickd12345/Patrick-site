import { test } from "node:test";
import assert from "node:assert";
import { cn } from "./cn.ts";

test("cn utility", async (t) => {
  await t.test("concatenates strings", () => {
    assert.strictEqual(cn("a", "b"), "a b");
  });

  await t.test("filters out falsy values", () => {
    assert.strictEqual(cn("a", false, "b", null, undefined), "a b");
  });

  await t.test("handles empty strings", () => {
    // Boolean("") is false, so it's filtered out
    assert.strictEqual(cn("a", "", "b"), "a b");
  });

  await t.test("returns an empty string when no arguments are provided", () => {
    assert.strictEqual(cn(), "");
  });

  await t.test("returns an empty string when only falsy values are provided", () => {
    assert.strictEqual(cn(false, null, undefined), "");
  });
});
