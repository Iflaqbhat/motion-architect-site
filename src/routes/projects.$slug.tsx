import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { GoldButton } from "@/components/site/GoldButton";
import { CTABand } from "@/components/home/CTABand";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSpecs } from "@/components/projects/ProjectSpecs";
import { FloorPlanTable } from "@/components/projects/FloorPlanTable";
import { PROJECTS, AMENITIES } from "@/data/site";
import type { Project } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | Yuva Group" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} | ${project.type} in Bangalore`;
    const description = `${project.blurb} ${project.location}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-5xl">We couldn't find that project</h1>
        <p className="mt-6 text-muted-foreground">
          It may have been renamed or completed. Browse the full portfolio instead.
        </p>
        <div className="mt-10 flex justify-center">
          <GoldButton to="/projects">All projects</GoldButton>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <SiteLayout>
      <ProjectHero project={project} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow">About {project.name}</p>
            <h2 className="mt-5 text-3xl leading-[1.05] md:text-4xl">{project.tagline}</h2>
            <div className="gold-rule mt-7" />
            {project.about.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-sand p-9">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-6 space-y-5 text-base">
                {[
                  ["Status", project.status],
                  ["Configuration", project.type],
                  ["Scale", project.units],
                  ["Location", project.location],
                  ["Pricing", project.price],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-border pb-4 last:border-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <GoldButton to="/contact">Book a site visit</GoldButton>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {project.highlights.map((h) => (
            <div key={h} className="bg-background p-7 text-base font-medium leading-relaxed text-muted-foreground">
              <span className="gold-rule mb-4 block" />
              {h}
            </div>
          ))}
        </div>
      </section>

      <ProjectGallery project={project} />

      <FloorPlanTable rows={project.floorPlan} />

      <ProjectSpecs specs={project.specs} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Connectivity</p>
            <h2 className="mt-5 text-3xl leading-[1.05] md:text-4xl">Everything within reach</h2>
            <ul className="mt-8 space-y-px bg-border">
              {project.connectivity.map((c) => (
                <li
                  key={c}
                  className="group bg-background px-6 py-5 text-base font-medium text-muted-foreground transition-colors duration-500 hover:bg-sand"
                >
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Nearby landmarks</p>
            <h2 className="mt-5 text-3xl leading-[1.05] md:text-4xl">Schools, care and campuses</h2>
            <ul className="mt-8 space-y-px bg-border">
              {project.landmarks.map((c) => (
                <li
                  key={c}
                  className="group bg-background px-6 py-5 text-base font-medium text-muted-foreground transition-colors duration-500 hover:bg-sand"
                >
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="ink-panel py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Amenities</p>
            <h2 className="mt-5 text-3xl leading-[1.05] text-background md:text-4xl">
              Crafted for your <span className="text-gold">comfort</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-background/12 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.03}>
                <div className="group h-full bg-[oklch(0.23_0.05_262)] p-7 transition-colors duration-500 hover:bg-[oklch(0.27_0.055_262)]">
                  <h3 className="text-lg text-background transition-colors duration-400 group-hover:text-gold">
                    {a.name}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-background/60">{a.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">Also explore</p>
          <h2 className="mt-5 text-3xl leading-[1.05] md:text-4xl">Other Yuva addresses</h2>
        </Reveal>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/projects/$slug"
              params={{ slug: o.slug }}
              className="group bg-background p-9 transition-colors duration-500 hover:bg-sand"
            >
              <p className="eyebrow">{o.status}</p>
              <h3 className="mt-3 text-2xl transition-colors duration-400 group-hover:text-gold">
                {o.name}
              </h3>
              <p className="mt-2 text-base font-medium text-muted-foreground">{o.location}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
