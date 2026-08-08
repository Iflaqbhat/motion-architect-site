import { Reveal } from "../site/Reveal";
import type { Project } from "@/data/site";

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-5 text-3xl leading-[1.05] md:text-4xl">A closer look</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {project.gallery.map((src, i) => (
            <Reveal key={src + i} delay={i * 0.08}>
              <div className="group overflow-hidden">
                <img
                  src={src}
                  alt={`${project.name} view ${i + 1}`}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-72 w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
