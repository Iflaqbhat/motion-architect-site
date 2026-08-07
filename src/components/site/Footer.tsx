import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, PROJECTS, CONTACT, WHATSAPP, SOCIALS } from "@/data/site";

const SOCIAL_ICONS = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube } as const;

export function Footer() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            Experience modern living with premium amenities, vibrant spaces and seamless
            connectivity — apartments across Bengaluru's southern corridor by Yuva Structures Pvt
            Ltd.
          </p>
          <address className="mt-8 space-y-1 text-sm not-italic text-background/60">
            {CONTACT.phones.map((p) => (
              <p key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="nav-link">
                  {p}
                </a>
              </p>
            ))}
            {CONTACT.emails.map((e) => (
              <p key={e}>
                <a href={`mailto:${e}`} className="nav-link">
                  {e}
                </a>
              </p>
            ))}
          </address>

          <div className="mt-8">
            <h3 className="eyebrow">WhatsApp us</h3>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-background/70">
              {WHATSAPP.map((w) => (
                <a
                  key={w.href}
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  {w.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="eyebrow">Follow us</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-background/70">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="icon-orb"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>
          </div>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="nav-link">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="nav-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Projects</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="nav-link">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/projects" hash="completed" className="nav-link">
                Completed Projects
              </Link>
            </li>
          </ul>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-background/60">
            {CONTACT.address}
          </p>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-background/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Yuva Structures Pvt Ltd. All rights reserved.</p>
          <Link to="/privacy-policy" className="nav-link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
