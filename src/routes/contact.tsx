import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ForteBethel" },
      {
        name: "description",
        content:
          "Get in touch with ForteBethel. Private, relationship-led advisory for capital relocation and international structuring.",
      },
      { property: "og:title", content: "Contact — ForteBethel" },
      {
        property: "og:description",
        content:
          "Private, relationship-led advisory for capital relocation and international structuring.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="We work with a small number of families and founders at a time. If you would like to explore how ForteBethel can support your objectives, reach out directly."
      />
      <section className="mx-auto max-w-2xl space-y-16 px-6 pb-24 md:px-10">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="eyebrow">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-b border-border/60 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="eyebrow">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-b border-border/60 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="eyebrow">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full resize-none border-b border-border/60 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-accent"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="bg-foreground px-8 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Send message →
          </button>
        </form>

        <div className="border-t border-border/60 pt-12">
          <div className="eyebrow">Office</div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Panama City, Republic of Panama
            <br />
            By private appointment only
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
