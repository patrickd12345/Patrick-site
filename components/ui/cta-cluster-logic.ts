import { cn } from "../../lib/cn.ts";

export const getActionClasses = (variant: "primary" | "secondary" | undefined) => {
  const isPrimary = variant === "primary";
  return cn(
    "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200",
    isPrimary
      ? "border-accent bg-accent text-[var(--color-bg)] hover:bg-accent-strong"
      : "border-subtle bg-transparent text-foreground hover:border-accent hover:text-accent",
  );
};
