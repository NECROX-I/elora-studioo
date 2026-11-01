import { WHY } from "../data/why";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Comparison from "./Comparison";
export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <SectionHead eyebrow="Why Choose Us" title="What working with ELORA looks like" />
        <div className="grid g4">{WHY.map((w) => <Reveal className="pt" key={w.title}><h4>{w.title}</h4><p>{w.text}</p></Reveal>)}</div>
        <Comparison />
      </div>
    </section>
  );
}
