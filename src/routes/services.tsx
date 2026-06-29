import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ForteBethel" },
      {
        name: "description",
        content:
          "Structured, discreet advisory across capital relocation, global mobility, and worldwide investment access.",
      },
      { property: "og:title", content: "Services — ForteBethel" },
      {
        property: "og:description",
        content:
          "Capital relocation, investment access, and global mobility — coordinated under Route183.",
      },
    ],
  }),
  component: ServicesPage,
});

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

function ServicesPage() {
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
            <article key={s.n} className="grid gap-6 py-12 md:grid-cols-[80px_1fr]">
              <div className="eyebrow pt-2">{s.n}</div>
              <div>
                <h2 className="font-serif text-3xl text-foreground">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="py-16 text-center">
          <p className="text-lg italic text-muted-foreground">
            Every service connects into Route183 — our structured pathway from first conversation to
            execution.
          </p>
          <Link
            to="/process"
            className="mt-6 inline-block border-b border-accent pb-1 text-sm uppercase tracking-[0.22em] text-foreground hover:text-accent"
          >
            Explore Route183 →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}