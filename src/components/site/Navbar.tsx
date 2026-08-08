import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PROJECTS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const links = NAV_LINKS.filter((l) => l.to !== "/contact");

  return (
    <header
      onMouseLeave={() => setMega(false)}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || mega
          ? "border-ink/10 bg-background/90 py-3 shadow-[0_10px_40px_-30px_var(--ink)] backdrop-blur-xl"
          : "border-transparent bg-background/50 py-6 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-[110rem] items-end justify-between px-6 md:px-12">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-end gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink md:flex">
          {links.map((link, i) => {
            const isProjects = link.to === "/projects";
            return (
              <li
                key={link.to}
                className="flex items-baseline gap-1.5"
                onMouseEnter={() => setMega(isProjects)}
              >
                <span className="font-display text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link to={link.to} className="nav-link" data-active={pathname.startsWith(link.to) && link.to !== "/"}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative hidden overflow-hidden bg-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-background md:inline-flex"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-[image:var(--gradient-gold)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">
              Enquire
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Projects mega-menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden border-t border-ink/10 bg-background/95 backdrop-blur-xl md:block"
          >
            <div className="mx-auto grid max-w-[110rem] gap-8 px-6 py-10 md:grid-cols-4 md:px-12">
              <div>
                <p className="eyebrow">Our portfolio</p>
                <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
                  Premium and affordable residences along Bengaluru&rsquo;s Hosur Road corridor.
                </p>
                <Link
                  to="/projects"
                  className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-ink gold-underline"
                >
                  View all projects &#8594;
                </Link>
              </div>

              {PROJECTS.slice(0, 3).map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => setMega(false)}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-card">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover smooth-media group-hover:scale-110"
                      />
                      <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                      <span className="absolute left-0 top-0 bg-[image:var(--gradient-gold)] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink">
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl transition-colors duration-300 group-hover:text-gold">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {p.type}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-background md:hidden"
          >
            <ul className="flex flex-col px-6 py-2">
              {NAV_LINKS.map((link, i) => (
                <li key={link.to} className="border-b border-ink/10 last:border-0">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-display text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl text-ink">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
