import { Metadata } from "next";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — ForteBethel",
  description:
    "ForteBethel SA respects your privacy and is committed to keeping your personal information safe, limited, and protected.",
};

const SECTIONS = [
  {
    title: "1. Information We Keep on Our Servers",
    body: "We keep the personal information stored on our own servers to the minimum necessary. In most cases, we only keep:",
    items: [
      "Your name",
      "Your file number",
      "Your contact information",
      "The method we use to communicate with you online",
      "Basic status updates related to your file",
    ],
    after:
      "For example, our online records may include:\n\nFile Number: 001\nClient Name: John Doe\nAddress: Client address\nPhone Number: Client phone number\n\nFile Number: 001\nInstitution: Banco de España\nDate: 2026-04-02\nStatus: Open\n\nWe do not aim to keep extensive personal documents or unnecessary private information online unless it is required for communication, processing, or legal purposes.",
  },
  {
    title: "2. Information Used for Documentation Processing",
    body: "To assist you with your file, we may need to collect additional information from you. This may include documents, identification details, addresses, contact details, banking-related information, or other information required by third-party institutions.",
    items: null,
    after:
      "We may use your information with banks, government offices, legal advisors, consultants, investment institutions, or other relevant organizations in order to process your documentation or support your requested service.\n\nBefore we share your information with another institution, we will inform you and request the required information from you. We will then record the necessary details online in a limited and organized way for file tracking and communication purposes.",
  },
  {
    title: "3. Minimum Online Storage Policy",
    body: "ForteBethel SA keeps online information about you as limited as possible.",
    items: null,
    after:
      "This means we may not store every document, note, or detail online. We do this to reduce unnecessary digital exposure and protect your privacy.\n\nBecause of this privacy-first approach, communication with you may sometimes take a few extra days. Additional time may be needed to retrieve, confirm, or request information directly from you instead of keeping large amounts of personal data permanently available online.",
  },
  {
    title: "4. How We Use Your Information",
    body: "We may use your information to:",
    items: [
      "Identify you as a client",
      "Communicate with you online",
      "Create and manage your client file",
      "Track the status of your documentation",
      "Submit or process documentation with relevant institutions",
      "Respond to your questions or service requests",
      "Meet legal, regulatory, compliance, or administrative requirements",
    ],
    after: "We do not sell your personal information.",
  },
  {
    title: "5. Sharing Information with Third Parties",
    body: "We may share your information only when necessary to provide the services you requested or when required by law.",
    items: null,
    after:
      "This may include sharing information with:\n\nBanks and financial institutions\nGovernment agencies\nLegal representatives\nConsultants or advisors\nCompliance officers\nImmigration, relocation, investment, or documentation-related institutions\n\nBefore sharing your information for documentation processing, we will inform you where reasonably possible and request the required information from you.",
  },
  {
    title: "6. Communication Records",
    body: "We may keep records of how we communicate with you online. This may include your preferred communication method, contact details, file updates, and basic messages related to your service.",
    items: null,
    after:
      "These records help us manage your file, confirm instructions, and maintain clear communication.",
  },
  {
    title: "7. Data Security",
    body: "We take reasonable steps to protect your information from unauthorized access, misuse, loss, or disclosure.",
    items: null,
    after:
      "However, no online system, email platform, messaging application, or digital server can be guaranteed to be completely secure. For this reason, we limit the amount of personal information stored online whenever possible.",
  },
  {
    title: "8. Your Responsibility",
    body: "You are responsible for providing accurate and updated information when requested.",
    items: null,
    after:
      "You should also avoid sending unnecessary personal documents or sensitive information unless we specifically request them for your file.",
  },
  {
    title: "9. Access, Correction, and Updates",
    body: "You may contact us to request access to your basic file information, correct inaccurate information, or update your contact details.",
    items: null,
    after:
      "We may ask you to verify your identity before making changes to your file.",
  },
  {
    title: "10. Retention and Secure Storage of Information",
    body: "We keep your information only for as long as reasonably necessary to manage your file, complete the service, maintain business records, or meet legal and regulatory requirements.",
    items: null,
    after:
      "When your file is completed, we move your information from our online systems to a secure electronic format. This secure electronic record is then saved in a bank box for safekeeping.\n\nAfter this process, we aim to keep little or no unnecessary personal information online, unless continued online storage is required for legal, regulatory, compliance, administrative, or communication purposes.\n\nWhen information is no longer needed, we may delete, archive, or securely limit access to it.",
  },
  {
    title: "11. Changes to This Privacy Policy",
    body: "ForteBethel SA may update this Privacy Policy from time to time. Any updated version will replace the previous version once published or provided to clients.",
    items: null,
    after: null,
  },
  {
    title: "12. Contact",
    body: "For questions about this Privacy Policy or how your information is handled, please contact ForteBethel SA through our official communication channels.",
    items: null,
    after: null,
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="ForteBethel SA respects your privacy and is committed to keeping your personal information safe, limited, and protected."
      />
      <section className="mx-auto max-w-3xl space-y-8 px-6 pb-16 md:space-y-12 md:pb-20 md:px-10">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          This Privacy Policy explains what information we collect, how we use
          it, how we store it, and how we may share it when assisting you with
          documentation, relocation, investment, or related services.
        </p>

        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-serif text-xl text-foreground md:text-2xl">
              {s.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:mt-4 md:text-lg">
              {s.body}
            </p>
            {s.items && (
              <ul className="mt-3 space-y-2 md:mt-4">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base text-muted-foreground md:text-lg"
                  >
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.after && (
              <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
                {s.after.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground md:text-lg"
                  >
                    {para.split("\n").map((line, j) => (
                      <span key={j}>
                        {j > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        <p className="pt-4 text-sm text-muted-foreground md:pt-6">
          Last updated: 2026-03-13
        </p>
      </section>
    </SiteLayout>
  );
}
