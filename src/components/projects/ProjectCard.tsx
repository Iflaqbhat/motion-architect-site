import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block h-full overflow-hidden bg-card hover-tilt"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} — ${project.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-64 w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-ink">
          {project.status}
        </span>
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
      </div>

      <div className="p-7">
        <h3 className="text-2xl transition-colors duration-400 group-hover:text-gold">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
        <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <span className="font-display text-xl text-ink">{project.units}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-transform duration-500 group-hover:translate-x-1">
            Explore &#8594;
          </span>
        </div>
      </div>
    </Link>
  );
}
