import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { ELECTRONIC_CITY, LEADING_BUILDERS } from "@/data/site";
import interior from "@/assets/site-3.jpg";

export function ElectronicCity() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">{LEADING_BUILDERS.title}</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {LEADING_BUILDERS.copy.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mt-20 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <div className="group overflow-hidden">
            <img
              src={interior}
              alt="Premium apartment interior in a Yuva Group project near Electronic City"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-[30rem] w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="eyebrow">{ELECTRONIC_CITY.eyebrow}</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">{ELECTRONIC_CITY.title}</h2>
          {ELECTRONIC_CITY.copy.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <div className="mt-10">
            <GoldButton to="/projects" variant="outline">
              Explore projects
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
