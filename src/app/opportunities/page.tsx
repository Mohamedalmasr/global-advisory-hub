import { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Opportunities — ForteBethel",
  description:
    "A curated view of worldwide investment opportunities, reviewed with discretion and connected to real execution pathways.",
  openGraph: {
    title: "Opportunities — ForteBethel",
    description: "Cross-border opportunities reviewed privately, vetted with a practical lens.",
  },
};

const FOCUS = [
  "Cross-border investment themes across multiple regions and asset classes",
  "Opportunities aligned with relocation, residency, or jurisdictional strategy",
  "Access points typically unavailable through conventional channels",
] as const;

export default function OpportunitiesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Opportunities"
        title="Opportunities"
        intro="A curated view of worldwide investment opportunities — reviewed with discretion, vetted with a practical lens, and connected to real execution pathways."
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

        <div className="border-y border-border/60 py-12">
          <div className="eyebrow">Countries</div>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-5">
              <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
              <span className="text-lg text-foreground">USA</span>
            </li>
            <li className="flex gap-5">
              <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
              <span className="text-lg text-foreground">Canada</span>
            </li>
            <li className="flex gap-5">
              <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
              <span className="text-lg text-foreground">Panama</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-6 py-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">By Country</div>
            <Select>
              <SelectTrigger className="mt-4 w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="panama">Panama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="eyebrow">By Sector</div>
            <Select>
              <SelectTrigger className="mt-4 w-full">
                <SelectValue placeholder="Select a sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="finance">Finance & Banking</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="energy">Energy & Infrastructure</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border-t border-border/60 py-16 text-center">
          <p className="font-serif text-2xl italic text-foreground">
            Opportunity access begins with a confidential conversation, not a catalog.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Start a private discussion →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
