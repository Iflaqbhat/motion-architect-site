import clubhouse from "@/assets/site-2.jpg";
import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";
import { SplitText, ScrollFadeText } from "../site/ScrollText";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">About us</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
            <SplitText text="Spaces that inspire." />
            <br />
            <span className="text-gold">
              <SplitText text="Quality that lasts." delay={0.15} />
            </span>
          </h2>
          <div className="gold-rule mt-7" />
          <ScrollFadeText
            className="mt-7 max-w-lg leading-relaxed text-muted-foreground"
            text="Led by Mr. Mahendra Reddy, Yuva Structures Pvt Ltd has spent 15 years building quality, value-driven apartments for modern homebuyers across Bengaluru — around ten projects completed, and more rising along the Hosur Road corridor."
          />


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
              className="h-[30rem] w-full object-cover smooth-media group-hover:scale-110"
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
