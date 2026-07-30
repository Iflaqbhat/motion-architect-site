import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { ProjectCard } from "../projects/ProjectCard";
import { PROJECTS } from "@/data/site";

export function FeaturedProjects() {
  return (
    <section className="bg-sand py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Our projects</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
                Homes designed
                <br />
                for your lifestyle
              </h2>
            </div>
            <GoldButton to="/projects" variant="outline">
              View all projects
            </GoldButton>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
