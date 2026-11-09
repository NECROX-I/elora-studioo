import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE } from "../config/site";
import { navigate } from "../hooks/usePath";
import Link from "./Link";

// Route: /work/<project>/<n>  (n starts at 1). Shows one image large, with Previous / Next.
export default function ImageViewer({ work, index }) {
  const shots = work?.screenshots ?? [];
  const total = shots.length;
  const ok = !!work && Number.isInteger(index) && index >= 1 && index <= total;
  const base = work ? `/work/${work.slug}` : "/#work";
  const prev = ok && total > 1 ? `${base}/${index === 1 ? total : index - 1}` : null;
  const next = ok && total > 1 ? `${base}/${index === total ? 1 : index + 1}` : null;
  const x0 = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = ok ? `${work.title} — image ${index} of ${total} — ${SITE.name}` : `Image not found — ${SITE.name}`;
    return () => {
      document.title = prevTitle;
    };
  }, [ok, work, index, total]);

  // Keyboard: ← → to browse, Esc to go back to the project.
  useEffect(() => {
    if (!ok) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft" && prev) navigate(prev);
      else if (e.key === "ArrowRight" && next) navigate(next);
      else if (e.key === "Escape") navigate(base);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ok, prev, next, base]);

  // Touch: swipe left/right to browse.
  const onTouchEnd = (e) => {
    if (x0.current === null) return;
    const dx = e.changedTouches[0].clientX - x0.current;
    x0.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0 && next) navigate(next);
    if (dx > 0 && prev) navigate(prev);
  };

  if (!ok) {
    return (
      <section className="sec pj">
        <div className="wrap">
          <Link href={work ? base : "/#work"} className="pj__back">
            <ArrowLeft aria-hidden="true" /> {work ? `Back to ${work.title}` : "Back to Work"}
          </Link>
          <header className="pj__head">
            <p className="eyebrow">404</p>
            <h1>Image not found</h1>
            <p className="sub2">This image doesn't exist. Go back to the project to see what's available.</p>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section className="sec pj vw">
      <div className="wrap">
        <div className="vw__top">
          <Link href={base} className="pj__back">
            <ArrowLeft aria-hidden="true" /> Back to {work.title}
          </Link>
          <p className="vw__cnt">
            {work.title} · {index} / {total}
          </p>
        </div>

        <div className="vw__stage" onTouchStart={(e) => (x0.current = e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
          <img key={shots[index - 1]} src={shots[index - 1]} alt={`${work.title} — image ${index} of ${total}`} decoding="async" />
        </div>

        {total > 1 && (
          <div className="vw__nav">
            <Link href={prev} className="btn ghost sm">
              <ArrowLeft aria-hidden="true" /> Previous
            </Link>
            <Link href={next} className="btn ghost sm">
              Next <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}

        {total > 1 && (
          <nav className="vw__thumbs" aria-label="All images">
            {shots.map((src, i) => (
              <Link
                key={`${src}-${i}`}
                href={`${base}/${i + 1}`}
                className={i + 1 === index ? "on" : ""}
                aria-label={`Image ${i + 1} of ${total}`}
                aria-current={i + 1 === index ? "true" : undefined}
              >
                <img src={src} alt="" loading="lazy" decoding="async" />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
