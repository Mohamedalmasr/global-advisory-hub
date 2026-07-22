"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import ReactCountryFlag from "react-country-flag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { Country, Opportunity } from "@/types/opportunities";
import countriesData from "@/data/opportunities.json";
import listingsData from "@/data/opportunity-listings.json";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";

const countries = countriesData as Country[];
const listings = listingsData as Opportunity[];

const countryNameMap: Record<string, string> = Object.fromEntries(
  countries.map((c) => [c.code, c.name]),
);

function formatPrice(price: number) {
  if (price >= 1_000_000) {
    return `$${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 1)}M`;
  }
  return `$${(price / 1_000).toFixed(0)}K`;
}

function getAvailableSectors(countryCode: string | null) {
  if (!countryCode) {
    const all = new Set<string>();
    countries.forEach((c) => c.sectors.forEach((s) => all.add(s)));
    return [...all];
  }
  const country = countries.find((c) => c.code === countryCode);
  return country ? country.sectors : [];
}

export default function OpportunitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollToCards = useCallback(() => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const availableSectors = getAvailableSectors(selectedCountry);

  const countryObj = countries.find((c) => c.code === selectedCountry);
  const states = countryObj ? countryObj.states : [];

  const filtered = useMemo(() => {
    return listings.filter((item) => {
      if (selectedCountry && item.country !== selectedCountry) return false;
      if (selectedSector && item.sector !== selectedSector) return false;
      if (selectedState && item.state !== selectedState) return false;
      return true;
    });
  }, [selectedCountry, selectedSector, selectedState]);

  function resetFilters() {
    setSelectedCountry(null);
    setSelectedSector(null);
    setSelectedState(null);
  }

  const hasFilters = selectedCountry || selectedSector || selectedState;

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Opportunities"
        title="Opportunities"
        intro="A curated view of worldwide investment opportunities — reviewed with discretion, vetted with a practical lens, and connected to real execution pathways."
      />
      <section className="mx-auto max-w-5xl px-4 md:px-6 lg:px-10">
        <div className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SlideUp>
            <div className="grid gap-4 py-4 md:grid-cols-3 md:gap-6 md:py-8">
              <div>
                <div className="eyebrow">By Country</div>
                <div className="mt-3 flex items-center gap-2 md:mt-4">
                  <Select
                    value={selectedCountry ?? "all"}
                    onValueChange={(v) => {
                      setSelectedCountry(v === "all" ? null : v);
                      setSelectedState(null);
                      scrollToCards();
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All countries</SelectItem>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <span className="flex items-center gap-2">
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              style={{ width: 18, height: 13 }}
                            />
                            {country.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedCountry && states.length > 0 && (
                <div>
                  <div className="eyebrow">By State</div>
                  <div className="mt-3 flex items-center gap-2 md:mt-4">
                    <Select
                      value={selectedState ?? "all"}
                      onValueChange={(v) => {
                        setSelectedState(v === "all" ? null : v);
                        scrollToCards();
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All states" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All states</SelectItem>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div>
                <div className="eyebrow">By Sector</div>
                <div className="mt-3 flex items-center gap-2 md:mt-4">
                  <Select
                    value={selectedSector ?? "all"}
                    onValueChange={(v) => {
                      setSelectedSector(v === "all" ? null : v);
                      scrollToCards();
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All sectors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All sectors</SelectItem>
                      {availableSectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        {hasFilters && (
          <div className="flex items-center justify-between py-4 md:pb-8">
            <p className="text-sm text-muted-foreground">
              {filtered.length}{" "}
              {filtered.length === 1 ? "opportunity" : "opportunities"} found
            </p>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
        <div
          ref={cardsRef}
          className="space-y-3 pt-4 pb-8 md:space-y-4 md:pt-8 md:pb-12"
        >
          <StaggerContainer stagger={0.06}>
            {filtered.map((item) => (
              <StaggerItem key={item.ref}>
                <Link
                  href={`/opportunities/${item.ref}`}
                  className="flex flex-col border border-border/60 px-4 py-4 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:justify-between md:px-6 md:py-5"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono tracking-wider text-muted-foreground">
                      {item.ref}
                    </span>
                    <h3 className="text-base font-medium text-foreground md:text-lg">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground md:gap-4 md:text-sm">
                      <span className="flex items-center gap-1.5">
                        <ReactCountryFlag
                          countryCode={item.country}
                          svg
                          style={{ width: 14, height: 10 }}
                        />
                        {countryNameMap[item.country] ?? item.country}
                      </span>
                      <span className="hidden md:inline">·</span>
                      <span>{item.state}</span>
                      <span className="hidden md:inline">·</span>
                      <span>{item.sector}</span>
                    </div>
                  </div>
                  <div className="mt-3 shrink-0 text-left md:mt-0 md:pl-6 md:text-right">
                    <span className="text-lg font-medium text-foreground">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <SlideUp>
          <div className="border-t border-border/60 py-10 text-center md:py-16">
            <p className="font-serif text-xl italic text-foreground md:text-2xl">
              Opportunity access begins with a confidential conversation, not a
              catalog.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90 md:mt-8"
            >
              Start a private discussion →
            </Link>
          </div>
        </SlideUp>
      </section>
    </SiteLayout>
  );
}
