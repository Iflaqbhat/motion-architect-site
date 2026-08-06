import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { AMENITIES } from "@/data/site";
import pool from "@/assets/site-5.jpg";
import clubhouse from "@/assets/site-2.jpg";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities | Clubhouse, Pool & Sports at Yuva Group" },
      {
        name: "description",
        content:
          "Grand clubhouses, swimming pools, gymnasium, sports courts, kids' play areas, rainwater harvesting and 100% power backup across every Yuva Group community.",
      },
      { property: "og:title", content: "Amenities at Yuva Group" },
      {
        property: "og:description",
        content: "Amenities crafted for your comfort and lifestyle across every Yuva community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Amenities,
});

function Amenities() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Amenities"
        title="Crafted for your comfort and lifestyle"
        intro="Every Yuva community is planned around shared life — places to swim, train, play, celebrate and let children roam safely."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.04}>
              <div className="group h-full bg-background p-9 transition-colors duration-500 hover:bg-sand">
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl transition-transform duration-500 group-hover:translate-x-1.5">
                  {a.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {[
            { src: pool, alt: "Swimming pool at a Yuva Group community" },
            { src: clubhouse, alt: "Clubhouse interior at a Yuva Group community" },
          ].map((img) => (
            <Reveal key={img.alt}>
              <div className="group overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-[26rem] w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
