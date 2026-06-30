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
      <section className="mx-auto max-w-3xl space-y-16 px-6 pb-8 md:px-10">
        <div className="border-t border-border/60 pt-12">
          <div className="eyebrow">Who we serve</div>
          <ul className="mt-8 space-y-6">
            {SERVES.map((s) => (
              <li key={s} className="flex gap-5">
                <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
                <span className="text-lg leading-relaxed text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Our approach</div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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
