import { motion, useScroll, useTransform } from "motion/react";
import { lazy, Suspense, useRef } from "react";
import { ClientOnly } from "@tanstack/react-router";
import hero from "@/assets/yuva-tower.jpg";
import { GoldButton } from "../site/GoldButton";

const Scene3D = lazy(() => import("../site/Scene3D"));

const lines = ["Building", "Better", "Lives"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background px-6 pb-20 pt-36 md:px-12 md:pt-44"
    >
      {/* Subtle 3D skyline — confined to the right edge, well behind content */}
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[42%] lg:block"
      >
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <Scene3D className="absolute right-[-6%] top-[6%] h-[70%] w-full opacity-[0.18]" />
          </Suspense>
        </ClientOnly>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(to_right,var(--background),transparent)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[110rem]">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          {/* Headline column */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="eyebrow"
            >
              Yuva Structures Pvt Ltd — Bengaluru — Est. 2010
            </motion.p>

            <h1 className="mt-8 text-[clamp(3.2rem,7.2vw,6.5rem)] leading-[0.94] tracking-tight">
              {lines.map((w, i) => (
                <span key={w} className="block overflow-hidden">
                  <motion.span
                    className={`block ${i === 1 ? "text-gold" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Premium and affordable 1, 2 and 3 BHK homes along Bengaluru&rsquo;s Hosur Road
              corridor — engineered with precision and delivered on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <GoldButton to="/projects">Explore Projects</GoldButton>
              <GoldButton to="/about" variant="outline">
                Our Story
              </GoldButton>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="group aspect-[16/11] overflow-hidden bg-card">
              <motion.img
                style={{ y }}
                src={hero}
                alt="Yuva Group residential tower elevation, Bengaluru"
                width={1920}
                height={1320}
                className="h-[110%] w-full object-cover smooth-media group-hover:scale-105"
              />
            </div>

            <div className="mt-6 flex items-end justify-between gap-8 border-t border-ink/15 pt-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-gold">
                Strategic Development
              </p>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Hosur Road · Electronic City
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
