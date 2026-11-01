import { LifeBuoy } from "lucide-react";
import { PROCESS } from "../data/process";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
export default function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Process"
          title="From first message to final file"
          text="Delivery isn't the end — ongoing support continues after your project is complete."
        />
        <ol className="steps">
          {PROCESS.map((p, i) =>
            p.ongoing ? (
              <Reveal as="li" className="ongoing" key={p.title}>
                <span className="oi"><LifeBuoy aria-hidden="true" /></span>
                <div>
                  <span className="eyebrow">After completion</span>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                  <div className="pts">{p.points.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </Reveal>
            ) : (
              <Reveal as="li" key={p.title}>
                <b>{String(i + 1).padStart(2, "0")}</b><h4>{p.title}</h4><p>{p.text}</p>
              </Reveal>
            )
          )}
        </ol>
      </div>
    </section>
  );
}
