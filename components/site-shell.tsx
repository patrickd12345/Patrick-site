"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-40 border-b border-subtle bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="group">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              Patrick Duchesneau
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-accent">
              Founder-Builder
            </p>
          </Link>

          <button
            type="button"
            className="rounded-lg border border-subtle px-3 py-1.5 text-sm text-foreground md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-surface text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {isOpen ? (
          <nav
            id="mobile-nav"
            className="grid gap-2 border-t border-subtle px-6 py-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-subtle px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="mt-20 border-t border-subtle">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-2 md:px-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              Senior technical builder focused on architecture, product, and
              execution. Building systems that stay clear under real operational
              pressure.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-muted md:justify-self-end">
            {navItems.map((item) => (
              <Link
                key={`footer-${item.href}`}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-2 transition-colors hover:text-accent"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
