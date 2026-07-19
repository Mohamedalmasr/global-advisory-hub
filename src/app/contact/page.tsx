"use client";

import { PageHeader, SiteLayout } from "@/components/site-layout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="We work with a small number of families and founders at a time. If you would like to explore how ForteBethel can support your objectives, reach out directly."
      />
      <section className="mx-auto max-w-2xl space-y-10 px-6 pb-16 md:space-y-16 md:pb-24 md:px-10">
        <form
          className="space-y-6 md:space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
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
            className="w-full bg-foreground px-8 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-90 md:w-auto"
          >
            Send message →
          </button>
        </form>

        <div className="border-t border-border/60 pt-10 md:pt-12">
          <div className="eyebrow">Office</div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            Panama City, Republic of Panama
            <br />
            By private appointment only
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
