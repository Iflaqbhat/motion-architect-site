import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { ProjectCard } from "../projects/ProjectCard";
import { PROJECTS } from "@/data/site";

const offsets = [
  "md:col-span-7",
  "md:col-span-5 md:mt-24",
  "md:col-span-6 md:col-start-4 md:-mt-16",
];


export function FeaturedProjects() {
  return (
    <section className="bg-card py-28">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 border-b-2 border-ink pb-8">
            <h2 className="gold-sheen-text text-7xl md:text-9xl">Projects</h2>
            <div className="text-right">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em]">
                Current availability
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Ongoing collection</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={offsets[i % offsets.length]}>
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
