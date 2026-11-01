import { SITE } from "../config/site";
export default function Footer() {
  return (
    <footer className="foot"><div className="wrap">
      <img src="/logo-mark.webp" alt="" width="48" height="48" />
      <p>© {new Date().getFullYear()} {SITE.name} · {SITE.tagline}</p>
    </div></footer>
  );
}
