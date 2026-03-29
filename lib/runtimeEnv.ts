type EnvSource = NodeJS.ProcessEnv;

function readFirst(env: EnvSource, keys: string[], fallback = ''): string {
  for (const key of keys) {
    const value = env[key];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
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

export function resolvePatrickSiteRuntimeEnv(env: EnvSource = process.env): PatrickSiteRuntimeEnv {
  const customContactEmail = readFirst(env, ['NEXT_PUBLIC_CONTACT_EMAIL']);
  const customLinkedIn = readFirst(env, ['NEXT_PUBLIC_LINKEDIN_URL']);

  return {
    siteUrl: readFirst(env, ['NEXT_PUBLIC_SITE_URL'], 'https://patrickduchesneau.com'),
    contactEmail: customContactEmail || 'hello@patrickduchesneau.com',
    linkedInUrl: customLinkedIn || 'https://www.linkedin.com/in/patrickduchesneau',
    hasCustomContactEmail: Boolean(customContactEmail),
    hasCustomLinkedIn: Boolean(customLinkedIn),
  };
}
