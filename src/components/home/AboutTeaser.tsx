import clubhouse from "@/assets/clubhouse.jpg";
import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">About us</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
            Spaces that inspire.
            <br />
            <span className="italic text-gold">Quality that lasts.</span>
          </h2>
          <div className="gold-rule mt-7" />
          <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
            For over two decades Yuva Group has been building homes and workplaces across South
            India. We control design, procurement and construction in-house — which is why our
            handovers land on time and our buildings age well.
          </p>
          <div className="mt-9">
            <GoldButton to="/about" variant="outline">
              Know more about us
            </GoldButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative overflow-hidden">
            <img
              src={clubhouse}
              alt="Clubhouse and infinity pool at a Yuva Group community"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-[30rem] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="ink-panel absolute bottom-0 right-0 max-w-xs p-7">
              <p className="eyebrow">Our vision</p>
              <p className="mt-3 text-sm leading-relaxed text-background/80">
                To be the most trusted developer in the region — known for quality, transparency
                and customer delight.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
