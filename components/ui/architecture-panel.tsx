const lanes = [
  { label: "bookiji.core", status: "deterministic lifecycle online" },
  { label: "myassist.runtime", status: "live provider context active" },
  { label: "kinetix.metrics", status: "scoring pipeline calibrated" },
  { label: "platform.spine", status: "schema governance enforced" },
];

export function ArchitecturePanel() {
  return (
    <div className="surface-soft relative overflow-hidden rounded-2xl p-5 md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,164,99,0.12),transparent_55%)]" />
      <p className="relative text-[11px] tracking-[0.16em] text-muted uppercase">
        System Composition
      </p>
      <div className="relative mt-4 grid gap-2">
        {lanes.map((lane) => (
          <div
            key={lane.label}
            className="flex items-center justify-between rounded-xl border border-subtle bg-surface/80 px-3 py-2.5"
          >
            <p className="font-mono text-xs text-foreground">{lane.label}</p>
            <p className="font-mono text-[11px] text-accent">{lane.status}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-4 rounded-xl border border-subtle bg-surface/60 p-3 font-mono text-xs leading-relaxed text-muted">
        <p>build_mode = &quot;production-first&quot;</p>
        <p>state_policy = &quot;explicit_and_traceable&quot;</p>
        <p>ops_bias = &quot;clarity_over_magic&quot;</p>
      </div>
    </div>
  );
}
