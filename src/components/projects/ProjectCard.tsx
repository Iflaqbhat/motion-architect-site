import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block h-full"
    >
      <div className="relative overflow-hidden bg-card">
        <img
          src={project.image}
          alt={`${project.name} — ${project.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-80 w-full object-cover saturate-105 transition-all duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 "
        />
        <span className="absolute left-0 top-0 bg-ink px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-background">
          {project.status}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6 border-t-2 border-ink pt-5">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg text-ink/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-4xl">{project.name}</h3>
          </div>
          <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            {project.location} — {project.type}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{project.units}</p>
        </div>
        <span className="mt-4 h-0.5 w-10 shrink-0 bg-ink transition-all duration-500 group-hover:w-16" />
      </div>
    </Link>
  );
}
