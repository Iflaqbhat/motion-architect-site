import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { ProjectCard } from "../projects/ProjectCard";
import { PROJECTS } from "@/data/site";

export function FeaturedProjects() {
  return (
    <section className="bg-card py-28">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-ink/15 pb-8">
            <h2 className="text-5xl md:text-7xl">Projects</h2>
            <div className="text-right">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-gold">
                Current availability
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Ongoing collection</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>


        <div className="mt-20">
          <GoldButton to="/projects" variant="outline">
            View all projects
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
