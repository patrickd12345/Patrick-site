import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </section>
  );
}
