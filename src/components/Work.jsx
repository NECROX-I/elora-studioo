import { WORKS } from "../data/works";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
export default function Work() {
  return (
    <section className="sec alt" id="work">
      <div className="wrap">
        <SectionHead eyebrow="Selected Work" title="Portfolio & experience" text="Case studies are being added as projects are delivered. Each tile below becomes a real project." />
        <SectionHead title="Coming Soon" />
        <div className="grid g3">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} as={w.href ? "a" : "div"} className="work" {...(w.href ? { href: w.href, target: "_blank", rel: "noopener" } : {})}>
              <div className="work__img">{String(i + 1).padStart(2, "0")}</div>
              <div className="work__b"><span>{w.cat}{w.placeholder ? " · Coming soon" : ""}</span><h4>{w.title}</h4><p>{w.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
