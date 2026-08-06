import pool from "@/assets/site-5.jpg";
import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { AMENITIES } from "@/data/site";

export function AmenitiesStrip() {
  return (
    <section className="ink-panel py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Amenities crafted for your lifestyle</p>
          <h2 className="mt-5 text-4xl leading-tight text-background md:text-5xl">
            Lifestyle, <span className="text-gold">elevated</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-background/65">
            Every Yuva community is planned around shared life — spaces to swim, train, gather and
            let children roam safely.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-px bg-background/12">
            {AMENITIES.slice(0, 8).map((a) => (
              <li
                key={a.name}
                className="group relative overflow-hidden bg-[oklch(0.23_0.05_262)] px-5 py-5 text-sm text-background/80"
              >
                <span className="absolute inset-y-0 left-0 w-0.5 bg-gold opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:text-gold">
                  {a.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <GoldButton to="/amenities" variant="ghostLight">
              All amenities
            </GoldButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <img
            src={pool}
            alt="Swimming pool at a Yuva Group residential community"
            loading="lazy"
            width={1400}
            height={1000}
            className="h-[34rem] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
