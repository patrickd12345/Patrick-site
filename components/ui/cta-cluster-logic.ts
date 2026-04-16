const baseClasses =
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const getActionClasses = (variant: "primary" | "secondary" | undefined) => {
  const isPrimary = variant === "primary";
  const variantClasses = isPrimary
    ? "border-accent bg-accent text-[var(--color-bg)] hover:bg-accent-strong"
    : "border-subtle bg-transparent text-foreground hover:border-accent hover:text-accent";
  return `${baseClasses} ${variantClasses}`;
};
