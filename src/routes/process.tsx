import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Engagement Path | ForteBethel" },
      {
        name: "description",
        content:
          "From first conversation to structured direction — a discreet, disciplined engagement path under Route183.",
      },
      { property: "og:title", content: "Process — Engagement Path | ForteBethel" },
      {
        property: "og:description",
        content:
          "Discovery, mapping, selection, execution — coordinated with discretion and clarity.",
      },
    ],
  }),
  component: ProcessPage,
});

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

function ProcessPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Process"
        title="Process — Engagement Path"
        intro="From first conversation to structured direction. Our process is built around discretion, clarity, and disciplined decision-making at every stage."
      />
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <ol className="relative border-l border-border/60 pl-10">
          {STEPS.map((s) => (
            <li key={s.n} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent" />
              <div className="eyebrow">{s.n}</div>
              <h2 className="mt-3 font-serif text-3xl text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="border-t border-border/60 py-16 text-center">
          <p className="font-serif text-2xl italic text-foreground">
            Each step is private, relationship-led, and tailored — no two engagements follow an
            identical path.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}