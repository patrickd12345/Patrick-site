import test from "node:test";
import assert from "node:assert";
import { isValidUrlProtocol, isValidMailtoUrl, ensureSafeUrl } from "../url-validation.ts";

test("isValidUrlProtocol - valid http", () => {
  assert.strictEqual(isValidUrlProtocol("http://example.com"), true);
});

test("isValidUrlProtocol - valid https", () => {
  assert.strictEqual(isValidUrlProtocol("https://example.com"), true);
});

test("isValidUrlProtocol - case insensitive", () => {
  assert.strictEqual(isValidUrlProtocol("HTTPS://EXAMPLE.COM"), true);
});

test("isValidUrlProtocol - leading/trailing whitespace", () => {
  assert.strictEqual(isValidUrlProtocol("  https://example.com  "), true);
});

test("isValidUrlProtocol - invalid javascript protocol", () => {
  assert.strictEqual(isValidUrlProtocol("javascript:alert(1)"), false);
});

test("isValidUrlProtocol - invalid data protocol", () => {
  assert.strictEqual(isValidUrlProtocol("data:text/html,<script>alert(1)</script>"), false);
});

test("isValidUrlProtocol - invalid vbscript protocol", () => {
  assert.strictEqual(isValidUrlProtocol("vbscript:msgbox('hello')"), false);
});

test("isValidUrlProtocol - empty string", () => {
  assert.strictEqual(isValidUrlProtocol(""), false);
});

test("isValidUrlProtocol - no protocol", () => {
  assert.strictEqual(isValidUrlProtocol("example.com"), false);
});

test("ensureSafeUrl - returns original if safe", () => {
  const url = "https://linkedin.com/in/patrick";
  assert.strictEqual(ensureSafeUrl(url, "fallback"), url);
});

test("ensureSafeUrl - returns fallback if unsafe", () => {
  const unsafeUrl = "javascript:alert(1)";
  const fallback = "https://linkedin.com/in/patrick";
  assert.strictEqual(ensureSafeUrl(unsafeUrl, fallback), fallback);
});

test("isValidMailtoUrl - valid mailto", () => {
  assert.strictEqual(isValidMailtoUrl("mailto:hello@example.com"), true);
});

test("isValidMailtoUrl - valid mailto with subject and body", () => {
  assert.strictEqual(isValidMailtoUrl("mailto:hello@example.com?subject=hi&body=there"), true);
});

test("isValidMailtoUrl - invalid javascript protocol", () => {
  assert.strictEqual(isValidMailtoUrl("javascript:alert(1)"), false);
});

test("isValidMailtoUrl - case insensitive", () => {
  assert.strictEqual(isValidMailtoUrl("MAILTO:HELLO@EXAMPLE.COM"), true);
});
