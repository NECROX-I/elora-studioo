import { useEffect, useState } from "react";
import { NAV, SECTION_IDS, SITE } from "../config/site";
import useActiveSection from "../hooks/useActiveSection";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <header className={`nav${scrolled ? " s" : ""}`}>
      <div className="wrap nav__in">
        <a href="#home" className="brand"><img src="/logo-mark.webp" alt="" width="40" height="40" /><span>ELORA <small>Studio</small></span></a>
        <nav id="menu" className={open ? "open" : ""} aria-label="Primary">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href="#contact" className="btn sm" onClick={() => setOpen(false)}>Start a Project</a>
        </nav>
        <button id="burger" aria-label={`${SITE.name} menu`} aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      </div>
    </header>
  );
}
