import { notFound } from "next/navigation";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { SiteLayout } from "@/components/site-layout";
import type { Opportunity } from "@/types/opportunities";
import listingsData from "@/data/opportunity-listings.json";
import countriesData from "@/data/opportunities.json";

export const dynamic = "force-dynamic";

const listings = listingsData as Opportunity[];

const countryNameMap: Record<string, string> = Object.fromEntries(
  countriesData.map((c) => [c.code, c.name]),
);

function formatPrice(price: number) {
  if (price >= 1_000_000) {
    return `$${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 1)}M`;
  }
  return `$${(price / 1_000).toFixed(0)}K`;
}

export function generateStaticParams() {
  return listings.map((item) => ({ ref: item.ref }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  const item = listings.find((l) => l.ref === ref);
  if (!item) return { title: "Opportunity Not Found" };
  return {
    title: `${item.title} — ForteBethel`,
    description: `${item.title} — ${countryNameMap[item.country] ?? item.country}, ${item.state}. ${item.sector} opportunity.`,
  };
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  const item = listings.find((l) => l.ref === ref);
  if (!item) notFound();

  return (
    <SiteLayout>
      <header className="mx-auto max-w-3xl px-6 pt-12 pb-8 md:px-10 md:pt-24 md:pb-12">
        <nav
          aria-label="Breadcrumb"
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-3 text-border">|</span>
          <Link href="/opportunities" className="hover:text-foreground">
            Opportunities
          </Link>
          <span className="mx-3 text-border">|</span>
          <span className="text-foreground">{item.ref}</span>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="border-t border-border/60 pt-8 md:pt-12">
          <span className="text-xs font-mono tracking-wider text-muted-foreground">
            {item.ref}
          </span>

          <h1 className="mt-3 font-serif text-3xl leading-tight text-foreground md:mt-4 md:text-5xl">
            {item.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground md:mt-8 md:gap-6 md:text-base">
            <span className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode={item.country}
                svg
                style={{ width: 18, height: 13 }}
              />
              {countryNameMap[item.country] ?? item.country}
            </span>
            <span className="text-border">·</span>
            <span>{item.state}</span>
            <span className="text-border">·</span>
            <span>{item.sector}</span>
          </div>

          <div className="mt-8 border-t border-border/60 pt-8 md:mt-10">
            <div className="eyebrow">Asking Price</div>
            <p className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              {formatPrice(item.price)}
            </p>
          </div>

          <div className="mt-8 border-t border-border/60 pt-8 md:mt-10">
            <div className="eyebrow">Overview</div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {item.description}
            </p>
          </div>

          <div className="mt-10 border-t border-border/60 pt-8 md:mt-12">
            <div className="eyebrow">Next Steps</div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Access to this opportunity begins with a confidential
              conversation. To explore whether this listing aligns with your
              objectives, reach out directly.
            </p>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
              >
                Start a private discussion →
              </Link>
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center border border-border/60 px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-muted/50"
              >
                ← Back to all opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
