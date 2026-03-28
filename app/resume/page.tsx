import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  resumeExperience,
  resumeSkills,
  resumeSummary,
  ventures,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Structured resume for Patrick Duchesneau: summary, experience, focus areas, and venture portfolio.",
};

export default function ResumePage() {
  return (
    <Section className="pt-14 pb-12 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Resume"
          title="Senior architect and founder-builder with product-level execution range."
          description={resumeSummary}
        />
      </Reveal>

      <Reveal>
        <div className="surface mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
          <p className="text-sm text-muted">
            Downloadable PDF placeholder (to be replaced with final resume file).
          </p>
          <button
            type="button"
            className="rounded-full border border-subtle px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume (Placeholder)
          </button>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8">
        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold">Selected Experience</h2>
            <div className="mt-5 grid gap-4">
              {resumeExperience.map((item) => (
                <article key={`${item.role}-${item.org}`} className="surface rounded-2xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted">{item.org}</p>
                    </div>
                    <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">{item.summary}</p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-3">
                    {item.focusAreas.map((focus) => (
                      <li key={focus} className="rounded-lg border border-subtle px-3 py-2 text-xs">
                        {focus}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold">Skills and Focus Areas</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {resumeSkills.map((group) => (
                <article key={group.title} className="surface rounded-2xl p-5">
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold">Ventures</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {ventures.map((venture) => (
                <article key={venture.id} className="surface rounded-2xl p-5">
                  <h3 className="text-lg font-semibold">{venture.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {venture.oneLiner}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </Section>
  );
}
