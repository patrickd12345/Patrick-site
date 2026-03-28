import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  hasCustomContactEmail,
  hasCustomLinkedIn,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Patrick Duchesneau for technical leadership, architecture, and product execution opportunities.",
};

export default function ContactPage() {
  return (
    <Section className="pt-14 pb-12 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="If you need a senior builder who can architect and ship, let’s talk."
          description="Direct and practical conversations preferred. Reach out with context, constraints, and what outcome you need."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <aside className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Direct Channels</h2>
            <div className="mt-5 grid gap-4 text-sm">
              <div>
                <p className="text-muted">Email</p>
                <a
                  className="mt-1 inline-block transition-colors hover:text-accent"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
                {!hasCustomContactEmail ? (
                  <p className="mt-1 text-xs text-muted">
                    Placeholder email. Set `NEXT_PUBLIC_CONTACT_EMAIL`.
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-muted">LinkedIn</p>
                <a
                  className="mt-1 inline-block transition-colors hover:text-accent"
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.linkedInUrl}
                </a>
                {!hasCustomLinkedIn ? (
                  <p className="mt-1 text-xs text-muted">
                    Placeholder LinkedIn URL. Set `NEXT_PUBLIC_LINKEDIN_URL`.
                  </p>
                ) : null}
              </div>
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.05}>
          <ContactForm email={siteConfig.contactEmail} />
        </Reveal>
      </div>
    </Section>
  );
}
