import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — ForteBethel" },
      {
        name: "description",
        content:
          "A curated view of worldwide investment opportunities, reviewed with discretion and connected to real execution pathways under Route183.",
      },
      { property: "og:title", content: "Opportunities — ForteBethel" },
      {
        property: "og:description",
        content:
          "Cross-border opportunities reviewed privately, vetted with a practical lens.",
      },
    ],
  }),
  component: OpportunitiesPage,
});

const FOCUS = [
  "Cross-border investment themes across multiple regions and asset classes",
  "Opportunities aligned with relocation, residency, or jurisdictional strategy",
  "Access points typically unavailable through conventional channels",
] as const;

function OpportunitiesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Opportunities"
        title="Opportunities"
        intro="A curated view of worldwide investment opportunities — reviewed with discretion, vetted with a practical lens, and connected to real execution pathways under Route183."
      />
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="border-y border-border/60 py-12">
          <div className="eyebrow">What we look at</div>
          <ul className="mt-8 space-y-6">
            {FOCUS.map((item) => (
              <li key={item} className="flex gap-5">
                <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
                <span className="text-lg leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-12">
          <div className="eyebrow">Our approach</div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ForteBethel does not list opportunities publicly. Each opportunity is reviewed in the
            context of a client's broader objectives — capital structure, mobility goals, and risk
            posture — before being introduced privately.
          </p>
        </div>

        <div className="border-t border-border/60 py-16 text-center">
          <p className="font-serif text-2xl italic text-foreground">
            Opportunity access begins with a confidential conversation, not a catalog.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Start a private discussion →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}