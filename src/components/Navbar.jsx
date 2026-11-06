import { useEffect, useState } from "react";
import { NAV, SECTION_IDS, SITE } from "../config/site";
import useActiveSection from "../hooks/useActiveSection";
import Link from "./Link";
export default function Navbar({ home = true }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  // On the homepage the links are plain #anchors. On a project page they go to "/#section".
  const A = home ? "a" : Link;
  const to = (id) => (home ? `#${id}` : `/#${id}`);
  const current = home ? active : "work";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return (
    <header className={`nav${scrolled ? " s" : ""}`}>
      <div className="wrap nav__in">
        <A href={home ? "#home" : "/"} className="brand">
          <img src="/logo-mark.webp" alt="" width="40" height="40" />
          <span>
            ELORA <small>Studio</small>
          </span>
        </A>
        <nav id="menu" className={open ? "open" : ""} aria-label="Primary">
          {NAV.map((n) => (
            <A
              key={n.id}
              href={to(n.id)}
              className={current === n.id ? "on" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </A>
          ))}
          <A
            href={to("contact")}
            className="btn sm"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </A>
        </nav>
        <button
          id="burger"
          aria-label={`${SITE.name} menu`}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
