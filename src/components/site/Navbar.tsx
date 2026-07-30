import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 py-3 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo tone={scrolled || open ? "dark" : "light"} />
        </Link>

        <ul className={"hidden items-center gap-10 text-[0.78rem] font-medium uppercase tracking-[0.18em] md:flex " + (scrolled ? "text-ink-soft" : "text-background/85")}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="nav-link" data-active={pathname === link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`group relative hidden overflow-hidden border px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500 md:inline-flex ${
              scrolled
                ? "border-ink/20 text-ink hover:text-background"
                : "border-background/40 text-background hover:text-ink"
            }`}
          >
            <span
              className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 ${
                scrolled ? "bg-ink" : "bg-gold"
              }`}
            />
            <span className="relative z-10">Enquire Now</span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 transition-transform duration-300 ${scrolled || open ? "bg-ink" : "bg-background"} ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 transition-transform duration-300 ${scrolled || open ? "bg-ink" : "bg-background"} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="border-b border-border/60 last:border-0">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl text-ink"
                  >
                    {link.label}
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
