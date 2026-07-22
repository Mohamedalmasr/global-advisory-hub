import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import {
  SlideUp,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-10 md:pt-32 md:pb-32">
        <SlideUp delay={0.1}>
          <div className="eyebrow">FORTEBETHEL{"\u00a0"}</div>
        </SlideUp>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-foreground md:whitespace-nowrap md:text-7xl">
          <TextReveal text="Capital relocation for a " />
          <em className="text-accent">
            <TextReveal text="wider world." />
          </em>
        </h1>
        <SlideUp delay={0.5}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
            A discreet advisory firm guiding internationally minded families,
            founders, and investors through capital relocation, global mobility,
            and access to worldwide investment opportunities — coordinated under
            Route183.
          </p>
        </SlideUp>
        <SlideUp delay={0.7}>
          <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap md:gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
            >
              Begin a private conversation
            </Link>
          </div>
        </SlideUp>
      </section>

      <section className="border-t border-border/60">
        <StaggerContainer
          className="mx-auto grid max-w-6xl gap-px bg-border/60 px-0 md:grid-cols-3 md:px-10"
          stagger={0.12}
        >
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
            <StaggerItem key={c.n}>
              <Link
                href={c.to}
                className="group block bg-background p-6 transition-colors hover:bg-secondary md:p-10"
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </SiteLayout>
  );
}
