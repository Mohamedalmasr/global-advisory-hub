import { notFound } from "next/navigation";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { SiteLayout } from "@/components/site-layout";
import type { Opportunity } from "@/types/opportunities";
import listingsData from "@/data/opportunity-listings.json";
import countriesData from "@/data/opportunities.json";
import { OpportunityDetailContent } from "./content";

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
      <OpportunityDetailContent
        item={item}
        countryName={countryNameMap[item.country] ?? item.country}
        formattedPrice={formatPrice(item.price)}
      />
    </SiteLayout>
  );
}
