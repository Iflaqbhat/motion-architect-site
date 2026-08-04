import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { TESTIMONIALS, STATS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | What Yuva Group Homebuyers Say" },
      {
        name: "description",
        content:
          "Read what homebuyers and partners say about Yuva Group — quality of construction, communication and on-time delivery across Bengaluru projects.",
      },
      { property: "og:title", content: "Yuva Group Testimonials" },
      {
        property: "og:description",
        content: "Client feedback on Yuva Group's construction quality and delivery record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Testimonials"
        title="Check what our clients say"
        intro="Homebuyers, partners and project teams on what it is like to build and buy with Yuva Group."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="hover-tilt flex h-full flex-col bg-card p-9">
                <span className="font-display text-5xl leading-none text-gold">&ldquo;</span>
                <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-xl text-ink">{t.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ink-panel py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">We are happy for our achievement</p>
            <h2 className="mt-5 text-4xl leading-tight text-background md:text-5xl">
              Numbers behind the <span className="italic text-gold">trust</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-background/12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="h-full bg-[oklch(0.23_0.05_262)] p-9">
                  <p className="font-display text-5xl text-gold">{s.value}</p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-background/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
