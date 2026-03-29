import { resolvePatrickSiteRuntimeEnv } from "./runtimeEnv";

const runtime = resolvePatrickSiteRuntimeEnv();

export const siteConfig = {
  name: "Patrick Duchesneau",
  shortName: "Patrick D.",
  role: "Founder-Builder and Senior Technical Architect",
  siteUrl: runtime.siteUrl,
  contactEmail: runtime.contactEmail,
  linkedInUrl: runtime.linkedInUrl,
};

export const hasCustomContactEmail = runtime.hasCustomContactEmail;

export const hasCustomLinkedIn = runtime.hasCustomLinkedIn;
