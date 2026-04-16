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
 * Ensures a URL is safe by checking its protocol.
 * Returns the original URL if safe, otherwise returns the fallback.
 */
export function ensureSafeUrl(url: string, fallback: string): string {
  return isValidUrlProtocol(url) ? url : fallback;
}
