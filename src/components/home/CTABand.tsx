import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";

export function CTABand() {
  return (
    <section className="ink-panel overflow-hidden">
      <div className="mx-auto grid max-w-[110rem] gap-10 px-6 py-24 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-8">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.26em] text-background/50">
            Let&rsquo;s build together
          </p>
          <h2 className="mt-6 text-6xl text-background md:text-8xl">
            Make a Yuva address
            <br />
            <span className="text-outline-light">your own</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="self-end md:col-span-4">
          <p className="text-sm leading-relaxed text-background/70">
            Book a site visit and walk the project with our team — no pressure, just honest
            answers.
          </p>
          <div className="mt-8">
            <GoldButton to="/contact" variant="ghostLight">
              Book a site visit
            </GoldButton>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-background/15 py-8">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="px-8 font-display text-[9vw] leading-none text-background/90">
              BUILDING BETTER LIVES &bull; SINCE 2010 &bull; BENGALURU &bull;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
