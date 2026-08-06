import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { Testimonials } from "@/components/home/Testimonials";
import { CAPABILITIES, STATS, LEADERSHIP, TEAM } from "@/data/site";
import interior from "@/assets/site-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yuva Group | Builders in Bangalore Since 2010" },
      {
        name: "description",
        content:
          "Yuva Structures Pvt Ltd, led by Mr. Mahendra Reddy, has delivered around ten residential projects across Bengaluru with quality construction and transparent practice.",
      },
      { property: "og:title", content: "About Yuva Group" },
      {
        property: "og:description",
        content:
          "Meet the team behind Yuva Group — 15 years of building quality, value-driven homes in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2010", text: "Yuva Structures Pvt Ltd founded in Bengaluru under Mr. Mahendra Reddy." },
  { year: "2016", text: "Yuva Lakeview delivered at AECS Layout 'B' Block, Singasandra." },
  { year: "2021", text: "Expansion into villa projects and high-potential land development." },
  { year: "2026", text: "Around ten projects completed; three communities under construction." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="Building your vision into reality"
        intro="Yuva Group is a Bengaluru developer of quality, value-driven apartments — and of the land parcels that become tomorrow's neighbourhoods."
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
            <p className="eyebrow">Welcome to Yuva Structures Pvt Ltd</p>
            <h2 className="mt-5 text-4xl leading-tight">
              Luxury and affordable flats <span className="text-gold">in Bangalore</span>
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Yuva Group began by developing quality, value-driven apartments designed for modern
              homebuyers across Bengaluru, and is actively involved in identifying and developing
              high-potential land parcels in key locations.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Over the years the Group has grown consistently and completed around ten projects,
              earning the trust of homebuyers and investors alike — expanding into villa projects
              and land developments that combine location advantage, quality construction and
              long-term value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="bg-card p-10">
              <p className="eyebrow">Leadership</p>
              <h2 className="mt-5 text-3xl">{LEADERSHIP.name}</h2>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                {LEADERSHIP.role}
              </p>
              <div className="gold-rule mt-7" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {LEADERSHIP.copy.map((c) => (
              <p key={c.slice(0, 24)} className="mb-6 leading-relaxed text-muted-foreground">
                {c}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">Our dedicated team</p>
          <h2 className="mt-5 text-4xl md:text-5xl">Meet the team behind our success</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Dedicated professionals driving innovation, growth and excellence.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-sand">
                <span className="font-display text-4xl text-gold/40 transition-colors duration-500 group-hover:text-gold">
                  {m.name.replace(/^(Mr\.|Mrs\.)\s*/, "").charAt(0)}
                </span>
                <h3 className="mt-4 text-xl">{m.name}</h3>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
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
          <h2 className="mt-5 text-4xl md:text-5xl">Fifteen years, one standard</h2>
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

      <Testimonials />

      <CTABand />
    </SiteLayout>
  );
}
