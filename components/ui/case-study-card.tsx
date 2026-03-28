import Link from "next/link";

import type { CaseStudy } from "@/lib/types";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="surface h-full rounded-2xl p-6">
      <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Case Study</p>
      <h3 className="mt-2 text-xl leading-tight font-semibold text-balance">{study.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{study.summary}</p>
      <div className="mt-5 space-y-2 text-sm">
        <p>
          <span className="text-muted">Problem: </span>
          <span>{study.problem}</span>
        </p>
        <p>
          <span className="text-muted">Maturity: </span>
          <span>{study.maturityLevel}</span>
        </p>
      </div>
      <Link
        href={`/case-studies#${study.id}`}
        className="mt-6 inline-flex rounded-full border border-subtle px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Open Full Case Study
      </Link>
    </article>
  );
}
