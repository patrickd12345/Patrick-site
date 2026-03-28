import { ArchitecturePanel } from "@/components/ui/architecture-panel";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { MetricStrip } from "@/components/ui/metric-strip";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { VentureCard } from "@/components/ui/venture-card";
import {
  caseStudies,
  proofItems,
  ventures,
  workPrinciples,
} from "@/lib/site-content";

const featuredCaseStudies = caseStudies.slice(0, 3);

export default function Home() {
  return (
    <div className="pb-16">
      <Section className="pt-14 md:pt-20">
        <div className="hero-frame grid gap-8 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <Reveal>
            <p className="eyebrow">Founder-Level Technical Operator</p>
            <h1 className="mt-4 max-w-2xl text-balance text-4xl leading-tight font-semibold md:text-6xl">
              I architect deterministic products that survive production.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              I build across product, architecture, and execution: from data
              model governance to shipped interfaces. Bookiji, Kinetix, and
              MyAssist are built as real systems, not demo narratives.
            </p>
            <CtaCluster
              className="mt-8"
              actions={[
                { href: "/case-studies", label: "View Case Studies", variant: "primary" },
                { href: "/contact", label: "Start a Conversation", variant: "secondary" },
              ]}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ArchitecturePanel />
          </Reveal>
        </div>
      </Section>

      <Section className="mt-8 md:mt-10">
        <Reveal>
          <MetricStrip items={proofItems} />
        </Reveal>
      </Section>

      <Section id="ventures" className="mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Ventures"
            title="Products with architectural depth and execution discipline."
            description="Bookiji is the flagship platform. Kinetix and MyAssist prove range, speed, and product rigor across different domains."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ventures.map((venture, index) => (
            <Reveal key={venture.id} delay={index * 0.05}>
              <VentureCard venture={venture} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Case studies focused on architecture decisions and operational reality."
            description="No vanity metrics. The signal is in constraints, tradeoffs, migration strategy, and production readiness."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredCaseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.05}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="How I Work"
            title="Calm, direct execution with systems-level rigor."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {workPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.04}>
              <article className="surface rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mt-20">
        <Reveal>
          <div className="surface-strong rounded-2xl p-7 md:p-10">
            <p className="eyebrow">Positioning</p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl leading-tight font-semibold md:text-4xl">
              I build like an operator: architecture choices tied directly to
              product outcomes.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted">
              I am hands-on across frontend, backend, and platform operations.
              The common thread is production clarity: explicit state models,
              migration discipline, observability, and practical AI integration
              that serves user workflows.
            </p>
            <CtaCluster
              className="mt-7"
              actions={[
                { href: "/about", label: "Read About Patrick", variant: "secondary" },
                { href: "/contact", label: "Contact Patrick", variant: "primary" },
              ]}
            />
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
