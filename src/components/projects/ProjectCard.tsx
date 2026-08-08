import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block h-full hover-lift"
    >
      <div className="relative overflow-hidden bg-card shine-sweep">
        <img
          src={project.image}
          alt={`${project.name} — ${project.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-80 w-full object-cover saturate-105 transition-all duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--ink)_55%,transparent),transparent_55%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-0 top-0 bg-ink px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-background transition-colors duration-500 group-hover:bg-[image:var(--gradient-gold)] group-hover:text-ink">
          {project.status}
        </span>
        <span className="pointer-events-none absolute bottom-5 left-5 translate-y-4 text-[0.6rem] font-bold uppercase tracking-[0.28em] text-background opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          View project &#8594;
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6 border-t border-ink/15 pt-5">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg text-ink/25 transition-colors duration-500 group-hover:text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-4xl transition-colors duration-500 group-hover:text-gold">
              {project.name}
            </h3>
          </div>
          <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            {project.location} — {project.type}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{project.units}</p>
        </div>
        <span className="mt-4 h-0.5 w-10 shrink-0 bg-ink transition-all duration-500 group-hover:w-16 group-hover:bg-[image:var(--gradient-gold)]" />
      </div>
    </Link>
  );
}
