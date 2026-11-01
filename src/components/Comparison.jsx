import { COMPARISON } from "../data/comparison";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
export default function Comparison() {
  return (
    <>
      <SectionHead className="sub" eyebrow="The Difference" title="Typical vendor vs. ELORA" />
      <Reveal className="cmp" role="table" aria-label="Comparison">
        <div className="r h" role="row"><span /><span>Typical approach</span><span>The ELORA approach</span></div>
        {COMPARISON.map(([a, b, c]) => <div className="r" role="row" key={a}><span>{a}</span><span>{b}</span><span>{c}</span></div>)}
      </Reveal>
    </>
  );
}
