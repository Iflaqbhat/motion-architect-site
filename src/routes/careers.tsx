import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { CAREERS, CONSENT_NOTE } from "@/data/site";
import { GoldButton } from "@/components/site/GoldButton";
import clubhouse from "@/assets/clubhouse.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Yuva Group | Build Your Career in Bangalore Real Estate" },
      {
        name: "description",
        content:
          "Open roles at Yuva Group in Bengaluru — sales, civil engineering, CRM and accounts. Join a team building quality homes across Electronic City and Hosur Road.",
      },
      { property: "og:title", content: "Careers at Yuva Group" },
      {
        property: "og:description",
        content: "Shape the future with Yuva Group — current openings in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Careers"
        title="Build your career with us"
        intro="Start your application, request additional information, or schedule a conversation with our team today."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Shape the future <span className="text-gold">with us</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{CAREERS.intro}</p>
            <div className="mt-10 overflow-hidden">
              <img
                src={clubhouse}
                alt="Yuva Group team workspace in Bengaluru"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-80 w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-px bg-border">
              {CAREERS.openings.map((o) => (
                <article
                  key={o.title}
                  className="group bg-background p-8 transition-colors duration-500 hover:bg-sand"
                >
                  <h3 className="text-2xl transition-colors duration-400 group-hover:text-gold">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                    {o.qualification}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Desired — {o.desired}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 font-display text-xl text-ink">
                    Experience · {o.experience}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <GoldButton to="/contact">Enquire now</GoldButton>
              <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground">
                {CONSENT_NOTE}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
