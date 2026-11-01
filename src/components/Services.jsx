import { Palette, Clapperboard, Presentation, Table2, Globe, Sparkles } from "lucide-react";
import { SERVICES } from "../data/services";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
const ICONS = { Palette, Clapperboard, Presentation, Table2, Globe };
export default function Services() {
  return (
    <section className="sec alt" id="services">
      <div className="wrap">
        <SectionHead eyebrow="What We Do" title="Five services, one standard of quality" />
        <div className="grid g3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <Reveal as="article" className="card" key={s.title}>
                <b className="ico"><Icon aria-hidden="true" /></b>
                <h3>{s.title}</h3><p>{s.text}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </Reveal>
            );
          })}
          <Reveal as="article" className="card cta">
            <h3>Not sure what you need?</h3><p>Tell us the goal. We'll suggest the simplest route to it.</p>
            <a href="#contact" className="btn sm">Talk to Us</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
