import { ArrowRight } from "lucide-react";
import { WORKS } from "../data/works";
import Link from "./Link";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// Two groups on the homepage. A group with no projects is hidden automatically.
const GROUPS = [
  { kind: "client", title: "Client Projects", text: "Work delivered for clients." },
  { kind: "personal", title: "Personal Projects", text: "Showcase projects built to demonstrate our craft." },
];

export default function Work() {
  if (WORKS.length === 0) return null;
  return (
    <section className="sec alt" id="work">
      <div className="wrap">
        <SectionHead eyebrow="Selected Work" title="Portfolio" />
        {GROUPS.map((g) => {
          const items = WORKS.filter((w) => w.kind === g.kind);
          if (!items.length) return null;
          return (
            <div className="wk" key={g.kind}>
              <Reveal as="header" className="head wk__head">
                <h3>{g.title}</h3>
                <p className="sub2">{g.text}</p>
              </Reveal>
              <div className="works">
                {items.map((w) => {
                  const href = `/work/${w.slug}`;
                  return (
                    <Reveal as="article" className="proj" key={w.id}>
                      <Link
                        href={href}
                        className="proj__img"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        {w.image ? (
                          <img src={w.image} alt="" loading="lazy" decoding="async" />
                        ) : (
                          <span className="proj__ph">{w.status || "Coming soon"}</span>
                        )}
                      </Link>
                      <div className="proj__b">
                        <div className="proj__meta">
                          <span className="proj__cat">{w.category}</span>
                          <span className="tag">{w.type}</span>
                          {w.status && <span className="tag">{w.status}</span>}
                        </div>
                        <h3>{w.title}</h3>
                        <p>{w.shortDescription}</p>
                        <Link href={href} className="proj__link">
                          View Project <ArrowRight aria-hidden="true" />
                        </Link>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
