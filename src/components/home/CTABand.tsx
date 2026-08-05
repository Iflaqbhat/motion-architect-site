import { Reveal } from "../site/Reveal";
import { GoldButton } from "../site/GoldButton";

export function CTABand() {
  return (
    <section className="bg-sand py-24">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Let's build together</p>
        <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
          Ready to make a Yuva address <span className="text-gold">your own?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Book a site visit and walk the project with our team — no pressure, just honest answers.
        </p>
        <div className="mt-10 flex justify-center">
          <GoldButton to="/contact">Book a site visit</GoldButton>
        </div>
      </Reveal>
    </section>
  );
}
