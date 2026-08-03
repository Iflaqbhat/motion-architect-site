import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTABand } from "@/components/home/CTABand";
import { PROJECTS } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Yuva Group Apartments in Bangalore" },
      {
        name: "description",
        content:
          "Explore Yuva Group projects in Bangalore — Yuva Sunrise, Yuva Utsav and Yuva Sunshine: 1, 2 and 3 BHK apartments near Electronic City and Chandapura.",
      },
      { property: "og:title", content: "Yuva Group Projects" },
      {
        property: "og:description",
        content:
          "Ongoing and new-launch apartment projects across Attibele, Electronic City Phase 2 and Chandapura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const FILTERS = ["All", "New Launch", "Ongoing", "Completed"] as const;

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our portfolio"
        title="Developments with a long shelf life"
        intro="Residential communities across Bangalore's southern corridor — Hosur Road, Electronic City and Chandapura — each built in-house to a published specification."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative overflow-hidden border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-400 ${
                  filter === f
                    ? "border-gold bg-gold text-ink"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          {list.length === 0 && (
            <p className="text-muted-foreground">No projects in this stage right now.</p>
          )}
        </div>

        <div className="mt-24 space-y-px bg-border">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="group grid gap-6 bg-background p-8 transition-colors duration-500 hover:bg-sand md:grid-cols-[1fr_2fr] md:items-center">
                <div>
                  <p className="eyebrow">{p.status}</p>
                  <h2 className="mt-3 text-3xl transition-colors duration-400 group-hover:text-gold">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
                </div>
                <div>
                  <p className="leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <p className="mt-4 font-display text-xl text-ink">
                    {p.type} · {p.units}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
