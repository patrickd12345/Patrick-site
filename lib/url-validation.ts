/**
 * Checks if a URL string has a safe protocol (http or https).
 * This prevents XSS attacks via protocols like javascript: or data:.
 */
export function isValidUrlProtocol(url: string): boolean {
  if (!url) return false;

  const trimmedUrl = url.trim().toLowerCase();

  // Allow only http:// and https://
  return trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://");
}

/**
 * Checks if a URL string has a safe mailto: protocol.
 */
export function isValidMailtoUrl(url: string): boolean {
  if (!url) return false;

  const trimmedUrl = url.trim().toLowerCase();

  return trimmedUrl.startsWith("mailto:");
}

/**
 * Checks if a string is a safe email format.
 * This is a basic check to prevent protocol injection.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;

  const trimmed = email.trim();

  // Basic check: should contain @ and not contain dangerous protocol indicators
  return (
    trimmed.includes("@") &&
    !trimmed.includes(":") &&
    !trimmed.includes("/") &&
    !trimmed.includes("\\")
  );
}

/**
 * Ensures a URL is safe by checking its protocol.
 * Returns the original URL if safe, otherwise returns the fallback.
 */
export function ensureSafeUrl(url: string, fallback: string): string {
  return isValidUrlProtocol(url) ? url : fallback;
}
