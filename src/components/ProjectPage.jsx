import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { SITE } from "../config/site";
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
            <p className="sub2">
              This project doesn't exist. Head back to the portfolio to see
              what's available.
            </p>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section className="sec pj">
      <div className="wrap">
        {back}

        <Reveal as="header" className="pj__head">
          <p className="eyebrow">{work.category}</p>
          <h1>{work.title}</h1>
          <div className="pj__meta">
            <span className="tag">{work.type}</span>
            {work.placeholder && (
              <span className="tag">Placeholder — replace</span>
            )}
          </div>
        </Reveal>

        <Reveal className="pj__body">
          <div>
            <h2 className="pj__h">Overview</h2>
            <p>{work.overview}</p>
            <h2 className="pj__h pj__h--gap">Features</h2>
            <ul className="pj__list">
              {work.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <aside className="pj__side">
            <h2 className="pj__h">Technologies</h2>
            <div className="pts">
              {work.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </aside>
        </Reveal>

        {work.screenshots.length > 0 && (
          <Reveal as="section" className="pj__shots" aria-label="Screenshots">
            <h2 className="pj__h">Screenshots</h2>
            <div className="shots">
              {work.screenshots.map((src, i) => (
                <figure key={`${src}-${i}`}>
                  <img
                    src={src}
                    alt={`${work.title} screenshot ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </Reveal>
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
