import Link from "next/link";

import { cn } from "@/lib/cn";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type CtaClusterProps = {
  actions: Action[];
  className?: string;
};

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200";
const PRIMARY_CLASSES = cn(
  BASE_CLASSES,
  "border-accent bg-accent text-[var(--color-bg)] hover:bg-accent-strong",
);
const SECONDARY_CLASSES = cn(
  BASE_CLASSES,
  "border-subtle bg-transparent text-foreground hover:border-accent hover:text-accent",
);

export function CtaCluster({ actions, className }: CtaClusterProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {actions.map((action) => (
        <Link
          key={`${action.href}-${action.label}`}
          href={action.href}
          className={
            action.variant === "primary" ? PRIMARY_CLASSES : SECONDARY_CLASSES
          }
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
