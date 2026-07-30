import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { NAV_LINKS, PROJECTS } from "@/data/site";

export function Footer() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            Building better lives across South India — residential and commercial developments
            delivered with trust, quality and a long view.
          </p>
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
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Projects</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link to="/projects" className="nav-link">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <address className="mt-8 space-y-1 text-sm not-italic text-background/60">
            <p>+91 82 82 82 33 95</p>
            <p>info@yuvagroup.in</p>
            <p>Attibele, Bengaluru 562107</p>
          </address>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-background/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Yuva Group. All rights reserved.</p>
          <p>Privacy Policy · Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
