import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { CAPABILITIES, STATS } from "@/data/site";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yuva Group | Two Decades of Building Trust" },
      {
        name: "description",
        content:
          "Meet Yuva Group: an integrated design-and-build developer delivering residential and commercial projects across South India for over 20 years.",
      },
      { property: "og:title", content: "About Yuva Group" },
      {
        property: "og:description",
        content: "An integrated design-and-build developer delivering across South India since 2004.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2004", text: "Founded in Bengaluru with a single residential block in Attibele." },
  { year: "2011", text: "First gated community handed over — 240 homes, delivered ahead of schedule." },
  { year: "2018", text: "Commercial arm launched; Grade-A office delivery begins on Hosur Road." },
  { year: "2026", text: "2.5 million sq.ft. delivered, with five communities under construction." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="Building trust. Creating tomorrow."
        intro="We are architects, engineers and builders under one roof — which means fewer handoffs, tighter quality control and buildings that hold their value."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={interior}
              alt="Interior of a completed Yuva Group residence"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-[30rem] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-5 text-4xl leading-tight">
              A builder is only as good as its <span className="italic text-gold">tenth year</span>
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Anyone can make a handover look good. We plan for how a building performs a decade
              later — waterproofing details, structural cover, serviceable MEP routes, materials
              chosen for maintenance rather than the brochure.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every project runs on a published programme with weekly client reporting, and every
              cost movement is documented before it happens.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ink-panel py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 text-4xl text-background md:text-5xl">Capabilities</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-background/12 md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full bg-[oklch(0.23_0.05_262)] p-10 transition-colors duration-500 hover:bg-[oklch(0.27_0.055_262)]">
                  <span className="font-display text-sm text-gold">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl text-background transition-transform duration-500 group-hover:translate-x-1.5">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-background/65">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">Milestones</p>
          <h2 className="mt-5 text-4xl md:text-5xl">Two decades, one standard</h2>
        </Reveal>
        <div className="mt-14 border-t border-border">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.07}>
              <div className="group grid gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-sand md:grid-cols-[10rem_1fr] md:px-4">
                <span className="font-display text-3xl text-gold">{t.year}</span>
                <p className="leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:translate-x-2">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-4xl text-ink">{s.value}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
