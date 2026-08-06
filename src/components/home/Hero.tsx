import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import hero from "@/assets/hero-tower.jpg";
import { GoldButton } from "../site/GoldButton";

const lines = ["Building", "Better", "Lives"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background px-6 pt-36 md:px-12">
      <div className="mx-auto grid max-w-[110rem] grid-cols-12">
        <div className="col-span-12 z-20 lg:col-span-10">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            Yuva Structures Pvt Ltd — Bengaluru — Est. 2010
          </motion.p>

          <h1 className="text-[16vw] leading-[0.8] tracking-tight md:text-[13vw]">
            {lines.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "text-gold-outline ml-[10vw]" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 col-span-12 -mt-[6vw] lg:col-span-7 lg:col-start-6"
        >
          <div className="aspect-[16/10] overflow-hidden bg-card">
            <motion.img
              style={{ y }}
              src={hero}
              alt="Illuminated Yuva Group residential towers at dusk"
              width={1920}
              height={1088}
              className="h-[112%] w-full object-cover saturate-105 transition-[filter] duration-[1.2s] "
            />
          </div>

          <div className="mt-6 flex items-end justify-between gap-8 border-b-2 border-ink pb-8">
            <div className="max-w-sm">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em]">
                Strategic Development
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Premium and affordable 1, 2 and 3 BHK homes along Bengaluru&rsquo;s Hosur Road
                corridor — built with precision, delivered on time.
              </p>
            </div>
            <span className="index-num shrink-0">01</span>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[110rem] flex-wrap gap-4 pb-24">
        <GoldButton to="/projects">Explore Projects</GoldButton>
        <GoldButton to="/about" variant="outline">
          Our Story
        </GoldButton>
      </div>
    </section>
  );
}
