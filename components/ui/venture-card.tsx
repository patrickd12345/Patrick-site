import Link from "next/link";

import type { Venture } from "@/lib/types";

type VentureCardProps = {
  venture: Venture;
};

export function VentureCard({ venture }: VentureCardProps) {
  return (
    <article className="surface h-full rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{venture.name}</h3>
        <span className="rounded-full border border-subtle px-2.5 py-1 text-[11px] tracking-[0.08em] text-muted uppercase">
          Active
        </span>
      </div>
      <p className="mt-3 text-base leading-relaxed text-foreground">{venture.oneLiner}</p>
      <dl className="mt-5 space-y-3">
        <div>
          <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Technical</dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">
            {venture.technicalFraming}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Business</dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">
            {venture.businessFraming}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.12em] text-muted uppercase">Maturity</dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">{venture.maturity}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={venture.projectHref}
          className="rounded-full border border-subtle px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          View Project
        </Link>
        <Link
          href={venture.caseStudyHref}
          className="rounded-full border border-subtle px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Read Case Study
        </Link>
      </div>
    </article>
  );
}
