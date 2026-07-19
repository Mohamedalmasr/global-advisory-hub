import { Metadata } from "next";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Services — ForteBethel",
  description:
    "Structured, discreet advisory across capital relocation, global mobility, and worldwide investment access.",
  openGraph: {
    title: "Services — ForteBethel",
    description:
      "Capital relocation, investment access, and global mobility — coordinated under Route183.",
  },
};

const SERVICES = [
  {
    n: "01",
    title: "Capital Relocation",
    body: "We help families, founders, and investors evaluate where capital, family interests, and operating structures may be better positioned — for resilience, access, and long-term flexibility. This includes jurisdictional comparison, structural considerations, and timing.",
  },
  {
    n: "02",
    title: "Investment Access",
    body: "Curated review of worldwide unique investment opportunities, assessed through a premium advisory lens with a practical execution pathway — not just identification, but a route to act.",
  },
  {
    n: "03",
    title: "Global Mobility",
    body: "Coordinated guidance around residency options, second-base planning, jurisdiction selection, and global lifestyle objectives, tailored to each client's specific circumstances.",
  },
] as const;

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Services"
        intro="ForteBethel provides structured, discreet advisory across capital relocation, global mobility, and worldwide investment access. Every engagement is built around clarity, discretion, and a defined path forward."
      />
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="divide-y divide-border/60 border-y border-border/60">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="grid gap-4 py-8 md:grid-cols-[80px_1fr] md:gap-6 md:py-12"
            >
              <div className="eyebrow pt-1 md:pt-2">{s.n}</div>
              <div>
                <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground md:mt-4">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
