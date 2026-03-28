import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Patrick Duchesneau: founder-builder, systems architect, and technical operator focused on real product execution.",
};

export default function AboutPage() {
  return (
    <Section className="pt-14 pb-12 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="I build systems where product quality and technical integrity reinforce each other."
          description="I work at the overlap of architecture, product direction, and hands-on implementation. I prefer explicit systems, clear ownership, and practical execution velocity."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">What I Build</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I build product systems that require disciplined architecture:
              clear data boundaries, deterministic behavior, and reliable
              operational paths. My work spans interfaces, APIs, data models,
              and deployment workflows.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.04}>
          <article className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">How I Think</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I choose clarity over cleverness. Deterministic state models,
              migration discipline, and observability are not overhead; they are
              product strategy. The goal is long-term speed without hidden
              fragility.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Why Multiple Products</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Bookiji, Kinetix, and MyAssist are different surfaces for the same
              operating model: architect deeply, ship pragmatically, and keep
              systems legible under pressure.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Current Direction</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I am positioning toward high-trust, AI-centric technical
              leadership where architecture, product, and execution need to
              coexist in one operator.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <article className="surface-strong mt-10 rounded-2xl p-6 md:p-8">
          <p className="eyebrow">Operating posture</p>
          <p className="mt-3 max-w-4xl text-pretty text-lg leading-relaxed md:text-xl">
            Calm confidence. Practical intelligence. Founder-level accountability.
            I stay hands-on where it matters and design systems that teams can
            scale without losing control.
          </p>
        </article>
      </Reveal>
    </Section>
  );
}
