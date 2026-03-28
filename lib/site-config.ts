export const siteConfig = {
  name: "Patrick Duchesneau",
  shortName: "Patrick D.",
  role: "Founder-Builder and Senior Technical Architect",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://patrickduchesneau.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@patrickduchesneau.com",
  linkedInUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/patrickduchesneau",
};

export const hasCustomContactEmail = Boolean(
  process.env.NEXT_PUBLIC_CONTACT_EMAIL,
);

export const hasCustomLinkedIn = Boolean(process.env.NEXT_PUBLIC_LINKEDIN_URL);
