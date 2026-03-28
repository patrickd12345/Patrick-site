import type { ProofItem } from "@/lib/types";

type MetricStripProps = {
  items: ProofItem[];
};

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <div className="surface relative overflow-hidden rounded-2xl px-4 py-3 md:px-6 md:py-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(201,164,99,0.08),transparent)]" />
      <ul className="relative grid gap-3 md:grid-cols-5">
        {items.map((item) => (
          <li key={item.label} className="rounded-xl border border-subtle bg-surface/70 p-3">
            <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
