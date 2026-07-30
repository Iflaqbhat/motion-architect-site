import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Yuva Group | Book a Site Visit in Bangalore" },
      {
        name: "description",
        content:
          "Talk to the Yuva Group team about apartments and commercial spaces in Bangalore. Book a site visit or send an enquiry.",
      },
      { property: "og:title", content: "Contact Yuva Group" },
      {
        property: "og:description",
        content: "Book a site visit or send an enquiry to the Yuva Group sales team in Bengaluru.",
      },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  { label: "Phone", lines: ["+91 82 82 82 33 95", "+91 82 82 82 33 96"] },
  { label: "Email", lines: ["info@yuvagroup.in", "sales@yuvagroup.in"] },
  {
    label: "Office",
    lines: ["Manchenahalli Village, Attibele", "Hosur Main Road, Bengaluru 562107"],
  },
  { label: "Hours", lines: ["Mon – Sat, 9:30am – 6:30pm", "Sunday site visits by appointment"] },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in touch"
        title="We're here to help you find your address"
        intro="Tell us what you're looking for and our team will come back within one working day — with real availability, not a brochure."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="space-y-10">
              {DETAILS.map((d) => (
                <div key={d.label} className="group border-l border-border pl-6 transition-colors duration-500 hover:border-gold">
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
    </SiteLayout>
  );
}
