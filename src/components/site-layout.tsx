"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Home, Briefcase, Target, GitBranch, Mail } from "lucide-react";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const MOBILE_NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/opportunities", label: "Opportunities", icon: Target },
  { to: "/process", label: "Process", icon: GitBranch },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-start gap-12 px-6 py-5 md:px-10">
        <Link href="/" className="group">
          <img src="/logo.png" alt="ForteBethel" className="h-12 w-auto object-contain md:h-14" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.filter((item) => item.to !== "/contact").map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={
                pathname === item.to
                  ? "text-sm text-foreground"
                  : "text-sm text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-sm text-foreground"
                : "text-sm text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {MOBILE_NAV.map((item) => {
          const isActive = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              href={item.to}
              className={`flex flex-col items-center gap-1 px-3 py-2 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 pb-24 md:mt-32 md:pb-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4 md:gap-10">
          <div>
            <img src="/logo.png" alt="ForteBethel" className="h-10 w-auto object-contain" />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Capital relocation for a wider world. Private, relationship-led advisory.
            </p>
          </div>
          <div>
            <div className="eyebrow">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link href={item.to} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow">About us</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Office</div>
            <p className="mt-4 text-sm text-muted-foreground">
              Panama City, Republic of Panama
              <br />
              By private appointment only
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:mt-12 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} ForteBethel S.A. All rights reserved.</span>
          <span>Discretion · Clarity · Direction</span>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
    >
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      <span className="mx-3 text-border">|</span>
      <span className="text-foreground">{current}</span>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-12 pb-8 md:px-10 md:pt-24 md:pb-12">
      <Breadcrumb current={eyebrow} />
      <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:mt-8 md:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
        {intro}
      </p>
    </header>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileNav />
    </div>
  );
}
