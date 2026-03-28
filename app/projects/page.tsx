import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ventures } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Bookiji, Kinetix, and MyAssist. Product systems built with architecture discipline and practical execution.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-14 pb-12 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="A product portfolio built as real systems."
          description="These ventures reflect one operating model: deterministic architecture, practical shipping velocity, and long-horizon product thinking."
        />
      </Reveal>

      <div className="mt-10 grid gap-5">
        {ventures.map((venture, index) => (
          <Reveal key={venture.id} delay={index * 0.05}>
            <article id={venture.id} className="surface-strong rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">{venture.name}</h2>
                <span className="rounded-full border border-subtle px-3 py-1 text-xs tracking-[0.1em] text-muted uppercase">
                  {venture.maturity}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed">{venture.oneLiner}</p>
              <dl className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">Technical framing</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{venture.technicalFraming}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">Business framing</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{venture.businessFraming}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <article className="surface mt-10 rounded-2xl p-6 md:p-8">
          <p className="eyebrow">Optional Mention</p>
          <h2 className="mt-2 text-2xl font-semibold">MyChessCoach / Chess</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            AI-assisted chess tooling with Stockfish integration and analysis
            pipeline work. This project represents technical experimentation and
            model-assisted coaching design, while the core positioning remains
            centered on Bookiji, Kinetix, and MyAssist.
          </p>
        </article>
      </Reveal>
    </Section>
  );
}
