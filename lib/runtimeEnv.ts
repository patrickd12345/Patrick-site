import { isValidUrlProtocol, ensureSafeUrl } from "./url-validation.ts";

type EnvSource = NodeJS.ProcessEnv;

function readFirst(env: EnvSource, keys: string[], fallback = ''): string {
  for (const key of keys) {
    const value = env[key];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed) {
        return trimmed;
      }
    }
  }
  return fallback;
}

export type PatrickSiteRuntimeEnv = {
  siteUrl: string;
  contactEmail: string;
  linkedInUrl: string;
  hasCustomContactEmail: boolean;
  hasCustomLinkedIn: boolean;
};

export function resolvePatrickSiteRuntimeEnv(
  env: EnvSource = process.env,
): PatrickSiteRuntimeEnv {
  const customContactEmail = readFirst(env, ["NEXT_PUBLIC_CONTACT_EMAIL"]);
  const customLinkedIn = readFirst(env, ["NEXT_PUBLIC_LINKEDIN_URL"]);

  const defaultSiteUrl = "https://patrickduchesneau.com";
  const defaultLinkedIn = "https://www.linkedin.com/in/patrickduchesneau";

  const siteUrl = ensureSafeUrl(
    readFirst(env, ["NEXT_PUBLIC_SITE_URL"], defaultSiteUrl),
    defaultSiteUrl,
  );

  const linkedInUrl = ensureSafeUrl(
    customLinkedIn || defaultLinkedIn,
    defaultLinkedIn,
  );

  return {
    siteUrl,
    contactEmail: customContactEmail || "hello@patrickduchesneau.com",
    linkedInUrl,
    hasCustomContactEmail: Boolean(customContactEmail),
    hasCustomLinkedIn: Boolean(customLinkedIn) && isValidUrlProtocol(customLinkedIn),
  };
}
