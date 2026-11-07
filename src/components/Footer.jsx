import { NAV, SITE } from "../config/site";
import Link from "./Link";

export default function Footer() {
  const links = [...NAV, { id: "contact", label: "Contact" }];
  return (
    <footer className="foot">
      <div className="wrap">
        <img src="/logo-mark.webp" alt="" width="48" height="48" />
        <nav className="foot__links" aria-label="Footer">
          {links.map((n) => (
            <Link key={n.id} href={`/#${n.id}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        {SITE.social.length > 0 && (
          <nav className="foot__links" aria-label="Social">
            {SITE.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
        )}
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.location}
        </p>
        <p>
          © {new Date().getFullYear()} {SITE.name} · {SITE.tagline}
        </p>
      </div>
    </footer>
  );
}
