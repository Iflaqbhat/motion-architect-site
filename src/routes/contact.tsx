import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Yuva Group | Book a Site Visit in Bangalore" },
      {
        name: "description",
        content:
          "Talk to the Yuva Group team about apartments in Chandapura, Attibele and Electronic City. Call +91 82 82 82 3395 or schedule a site visit.",
      },
      { property: "og:title", content: "Contact Yuva Group" },
      {
        property: "og:description",
        content: "Book a site visit or send an enquiry to the Yuva Group sales team in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const DETAILS = [
    { label: "Phone", lines: CONTACT.phones },
    { label: "Email", lines: CONTACT.emails },
    { label: "Official address", lines: [CONTACT.address] },
    { label: "Hours", lines: CONTACT.hours },
  ];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in touch"
        title="Stay connected with us"
        intro="Request additional information or schedule a site visit today — our team responds within one working day with real availability, not a brochure."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="space-y-10">
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="group border-l border-border pl-6 transition-colors duration-500 hover:border-gold"
                >
                  <p className="eyebrow">{d.label}</p>
                  {d.lines.map((l) => (
                    <p
                      key={l}
                      className="mt-2 leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:translate-x-1"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Visit our experience centre</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
              Chandapura, <span className="text-gold">Hosur Road</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden border border-border">
              <iframe
                title="Yuva Group office location map"
                src={`https://maps.google.com/maps?q=${CONTACT.mapQuery}&output=embed`}
                loading="lazy"
                className="h-[26rem] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
