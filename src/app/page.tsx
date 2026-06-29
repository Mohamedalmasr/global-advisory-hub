import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-32">
        <div className="eyebrow">FORTEBETHEL{"\u00a0"}</div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground whitespace-nowrap md:text-7xl">
          Capital relocation for a <em className="text-accent">wider world.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A discreet advisory firm guiding internationally minded families, founders, and investors
          through capital relocation, global mobility, and access to worldwide investment
          opportunities — coordinated under Route183.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex items-center bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Begin a private conversation
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center border border-border px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:border-foreground"
          >
            Explore Route183 →
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-px bg-border/60 px-0 md:grid-cols-3 md:px-10">
          {[
            {
              n: "01",
              t: "Capital Relocation",
              d: "Evaluating where capital, family interests, and operating structures may be better positioned.",
              to: "/services",
            },
            {
              n: "02",
              t: "Investment Access",
              d: "Curated worldwide opportunities, vetted through a premium advisory lens.",
              to: "/opportunities",
            },
            {
              n: "03",
              t: "Global Mobility",
              d: "Residency, second-base planning, and jurisdiction selection — tailored to each client.",
              to: "/services",
            },
          ].map((c) => (
            <Link
              key={c.n}
              href={c.to}
              className="group bg-background p-10 transition-colors hover:bg-secondary"
            >
              <div className="eyebrow">{c.n}</div>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <div className="mt-6 text-xs uppercase tracking-[0.22em] text-accent">Explore →</div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
