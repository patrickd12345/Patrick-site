import Link from "next/link";

import { getActionClasses } from "./cta-cluster-logic";
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
        return (
          <Link
            key={`${action.href}-${action.label}`}
            href={action.href}
            className={getActionClasses(action.variant)}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
