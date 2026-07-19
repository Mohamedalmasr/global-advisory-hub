import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-10 md:pt-32 md:pb-32">
        <div className="eyebrow">FORTEBETHEL{"\u00a0"}</div>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-foreground md:whitespace-nowrap md:text-7xl">
          Capital relocation for a <em className="text-accent">wider world.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
          A discreet advisory firm guiding internationally minded families,
          founders, and investors through capital relocation, global mobility,
          and access to worldwide investment opportunities — coordinated under
          Route183.
        </p>
        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap md:gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Begin a private conversation
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
              className="group bg-background p-6 transition-colors hover:bg-secondary md:p-10"
            >
              <div className="eyebrow">{c.n}</div>
              <h3 className="mt-3 font-serif text-xl text-foreground md:mt-4 md:text-2xl">
                {c.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3">
                {c.d}
              </p>
              <div className="mt-4 text-xs uppercase tracking-[0.22em] text-accent md:mt-6">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
