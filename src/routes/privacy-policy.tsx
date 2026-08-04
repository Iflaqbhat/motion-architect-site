import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Yuva Group Bangalore" },
      {
        name: "description",
        content:
          "How Yuva Structures Pvt Ltd collects, uses and protects the personal information you share through enquiry forms, calls and site visits.",
      },
      { property: "og:title", content: "Privacy Policy | Yuva Group" },
      {
        property: "og:description",
        content: "How Yuva Group handles and protects your personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

const SECTIONS = [
  {
    title: "Information we collect",
    body: "When you submit an enquiry, request a callback or schedule a site visit, we collect the name, phone number, email address, project of interest and any message you choose to share with us.",
  },
  {
    title: "How we use it",
    body: "Your details are used only to respond to your enquiry, share project information, arrange site visits and assist with booking, payment plans and home loan support.",
  },
  {
    title: "Communication consent",
    body: "By submitting a form you consent to receive communications from Yuva Group through WhatsApp, SMS, email, phone calls and other channels, even if your number is registered under DND/NDNC. You may ask us to stop at any time.",
  },
  {
    title: "Sharing",
    body: "We do not sell your personal information. Details are shared only with our own sales, CRM and project teams, and with banking partners when you specifically ask for home loan assistance.",
  },
  {
    title: "Data retention and security",
    body: "Enquiry records are retained for as long as needed to serve you and to meet legal obligations, and are held with access limited to authorised team members.",
  },
  {
    title: "Your choices",
    body: "You can request access to, correction of, or deletion of your details at any time by writing to us at the email address below.",
  },
];

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Privacy policy"
        title="How we handle your information"
        intro="This policy explains what Yuva Structures Pvt Ltd collects when you contact us, how it is used, and the choices available to you."
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-px bg-border">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="bg-background p-8">
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 border-l border-gold pl-6">
            <p className="eyebrow">Contact</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {CONTACT.emails[0]} · {CONTACT.phones[0]}
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">{CONTACT.address}</p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
