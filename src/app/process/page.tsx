import { Metadata } from "next";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Process — Engagement Path | ForteBethel",
  description:
    "From first conversation to structured direction — a discreet, disciplined engagement path under Route183.",
  openGraph: {
    title: "Process — Engagement Path | ForteBethel",
    description:
      "Discovery, mapping, selection, execution — coordinated with discretion and clarity.",
  },
};

const STEPS = [
  {
    n: "Step 01",
    title: "Discovery",
    body: "Understand objectives, constraints, family needs, business exposure, and investment priorities.",
  },
  {
    n: "Step 02",
    title: "Mapping",
    body: "Compare jurisdictional paths, relocation options, and opportunity themes under Route183.",
  },
  {
    n: "Step 03",
    title: "Selection",
    body: "Prioritize the most suitable routes and introduce relevant specialists where appropriate.",
  },
  {
    n: "Step 04",
    title: "Execution",
    body: "Coordinate next steps with discretion, documentation discipline, and ongoing review.",
  },
] as const;

export default function ProcessPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Process"
        title="Process — Engagement Path"
        intro="From first conversation to structured direction. Our process is built around discretion, clarity, and disciplined decision-making at every stage."
      />
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <ol className="relative">
          {STEPS.map((s, i) => (
            <li key={s.n} className="grid grid-cols-[1px_1fr] gap-0 pb-10 last:pb-0 md:pb-14">
              <div className="relative flex justify-center">
                <div className="h-full w-px bg-border/60" />
                <span className="absolute top-0 z-10 h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="pl-5 md:pl-6">
                <span className="eyebrow">{s.n}</span>
                <h2 className="mt-1 font-serif text-2xl text-foreground md:text-3xl">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
