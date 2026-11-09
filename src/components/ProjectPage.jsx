import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE } from "../config/site";
import { WORKS } from "../data/works";
import Link from "./Link";
import Reveal from "./Reveal";

export default function ProjectPage({ work }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${work ? work.title : "Project not found"} — ${SITE.name}`;
    return () => {
      document.title = prev;
    };
  }, [work]);

  const back = (
    <Link href="/#work" className="pj__back">
      <ArrowLeft aria-hidden="true" /> Back to Work
    </Link>
  );

  if (!work) {
    return (
      <section className="sec pj">
        <div className="wrap">
          {back}
          <header className="pj__head">
            <p className="eyebrow">404</p>
            <h1>Project not found</h1>
            <p className="sub2">This project doesn't exist. Head back to the portfolio to see what's available.</p>
          </header>
        </div>
      </section>
    );
  }

  const shots = work.screenshots ?? [];
  const features = work.features ?? [];
  const tech = work.technologies ?? [];
  const at = WORKS.findIndex((w) => w.id === work.id);
  const next = WORKS.length > 1 ? WORKS[(at + 1) % WORKS.length] : null;
  const prev = WORKS.length > 2 ? WORKS[(at - 1 + WORKS.length) % WORKS.length] : null;

  return (
    <section className="sec pj">
      <div className="wrap">
        {back}

        <Reveal as="header" className="pj__head">
          <p className="eyebrow">{work.category}</p>
          <h1>{work.title}</h1>
          <div className="pj__meta">
            <span className="tag">{work.type}</span>
            {work.status && <span className="tag">{work.status}</span>}
            {work.placeholder && <span className="tag">Placeholder — replace</span>}
          </div>
        </Reveal>

        <Reveal className={`pj__body${tech.length ? "" : " pj__body--solo"}`}>
          <div>
            <h2 className="pj__h">Overview</h2>
            <p>{work.overview}</p>
            {features.length > 0 && (
              <>
                <h2 className="pj__h pj__h--gap">What's included</h2>
                <ul className="pj__list">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {tech.length > 0 && (
            <aside className="pj__side">
              <h2 className="pj__h">Technologies</h2>
              <div className="pts">
                {tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </aside>
          )}
        </Reveal>

        <Reveal as="section" className="pj__shots" aria-label="Gallery">
          <h2 className="pj__h">Gallery</h2>
          {shots.length > 0 ? (
            <>
              <p className="pj__hint">Click any image to view it larger.</p>
              <div className="shots">
                {shots.map((src, i) => (
                  <figure key={`${src}-${i}`}>
                    <Link href={`/work/${work.slug}/${i + 1}`} aria-label={`View ${work.title} image ${i + 1} of ${shots.length}`}>
                      <img src={src} alt={`${work.title} — image ${i + 1}`} loading="lazy" decoding="async" />
                    </Link>
                  </figure>
                ))}
              </div>
            </>
          ) : (
            <p className="pj__hint">Designs for this project will be added here soon.</p>
          )}
        </Reveal>

        {next && (
          <nav className="pj__pn" aria-label="More projects">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="pj__pna">
                <small>
                  <ArrowLeft aria-hidden="true" /> Previous project
                </small>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            <Link href={`/work/${next.slug}`} className="pj__pna pj__pna--next">
              <small>
                Next project <ArrowRight aria-hidden="true" />
              </small>
              <strong>{next.title}</strong>
            </Link>
          </nav>
        )}

        <div className="pj__cta">
          <Link href="/#work" className="btn ghost">
            Back to Work
          </Link>
          <Link href="/#contact" className="btn">
            Contact ELORA
          </Link>
        </div>
      </div>
    </section>
  );
}
