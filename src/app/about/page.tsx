import { Metadata } from "next";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "About — ForteBethel",
  description:
    "ForteBethel S.A. is a Panama-based global advisory firm for internationally minded families, founders, and investors.",
  openGraph: {
    title: "About — ForteBethel",
    description:
      "Private, relationship-led advisory across capital relocation, jurisdictional strategy, and worldwide investment access.",
  },
};

const SERVES = [
  "Families seeking long-term resilience and flexibility for capital and operations",
  "Founders and entrepreneurs evaluating global structuring options",
  "Investors looking for curated, vetted access to international opportunities",
] as const;

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="About Us"
        intro="ForteBethel S.A. is a Panama-based global advisory firm helping internationally minded families, founders, and investors navigate capital relocation, jurisdictional strategy, and worldwide investment opportunities."
      />
      <section className="mx-auto max-w-3xl space-y-10 px-6 pb-8 md:space-y-16 md:px-10">
        <div className="border-t border-border/60 pt-8 md:pt-12">
          <div className="eyebrow">Who we serve</div>
          <ul className="mt-6 space-y-4 md:mt-8 md:space-y-6">
            {SERVES.map((s) => (
              <li key={s} className="flex gap-4 md:gap-5">
                <span className="mt-2 h-px w-5 flex-shrink-0 bg-accent md:w-6" />
                <span className="text-base leading-relaxed text-foreground md:text-lg">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Our approach</div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            We bring structure, discretion, and clear decision-making to complex international
            moves. Our work is coordinated from Panama, with an international outlook, and built on
            a foundation of private, relationship-led advisory engagement — not transactional
            consulting.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
