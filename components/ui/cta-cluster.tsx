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

export function CtaCluster({ actions, className }: CtaClusterProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {actions.map((action) => {
        const isPrimary = (action.variant ?? "secondary") === "primary";
        return (
          <Link
            key={`${action.href}-${action.label}`}
            href={action.href}
            className={cn(
              "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isPrimary
                ? "border-accent bg-accent text-[var(--color-bg)] hover:bg-accent-strong"
                : "border-subtle bg-transparent text-foreground hover:border-accent hover:text-accent",
            )}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
