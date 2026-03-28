import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed technical case studies for MyAssist, Kinetix, and Bookiji with architecture decisions, constraints, and implementation choices.",
};

export default function CaseStudiesPage() {
  return (
    <Section className="pt-14 pb-12 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Case Studies"
          title="Architecture, constraints, and execution decisions."
          description="Each case study focuses on why the work mattered and how technical choices were made under real constraints."
        />
      </Reveal>

      <div className="mt-10 grid gap-8">
        {caseStudies.map((study, index) => (
          <Reveal key={study.id} delay={index * 0.04}>
            <article id={study.id} className="surface-strong rounded-2xl p-6 md:p-8">
              <p className="eyebrow">{study.id}</p>
              <h2 className="mt-2 text-balance text-3xl leading-tight font-semibold md:text-4xl">
                {study.title}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted">
                {study.summary}
              </p>

              <dl className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="surface rounded-xl p-4">
                  <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Problem</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{study.problem}</dd>
                </div>
                <div className="surface rounded-xl p-4">
                  <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Why It Matters</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{study.whyItMatters}</dd>
                </div>
                <div className="surface rounded-xl p-4 md:col-span-2">
                  <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Product Scope</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{study.productScope}</dd>
                </div>
              </dl>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <section>
                  <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">
                    Architecture Decisions
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {study.architectureDecisions.map((item) => (
                      <li key={item} className="rounded-lg border border-subtle p-3 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">Constraints</h3>
                  <ul className="mt-3 space-y-2">
                    {study.constraints.map((item) => (
                      <li key={item} className="rounded-lg border border-subtle p-3 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">
                    Implementation Choices
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {study.implementationChoices.map((item) => (
                      <li key={item} className="rounded-lg border border-subtle p-3 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">
                    Technical Credibility Signals
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {study.credibilitySignals.map((item) => (
                      <li key={item} className="rounded-lg border border-subtle p-3 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <p className="mt-7 rounded-xl border border-subtle px-4 py-3 text-sm text-muted">
                <span className="text-foreground">Current maturity level:</span>{" "}
                {study.maturityLevel}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
