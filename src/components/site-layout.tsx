import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">ForteBethel</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            S.A. · Panama
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="border-b border-accent pb-0.5 text-sm tracking-wide text-foreground transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl">ForteBethel</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Capital relocation for a wider world. Private, relationship-led advisory.
            </p>
          </div>
          <div>
            <div className="eyebrow">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
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
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} ForteBethel S.A. All rights reserved.</span>
          <span>Discretion · Clarity · Direction</span>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <Link to="/" className="hover:text-foreground">
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
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
      <Breadcrumb current={eyebrow} />
      <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
    </header>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}