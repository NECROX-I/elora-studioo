import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { FEEDBACK } from "../data/feedback";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const initials = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
const pad = (n) => String(n).padStart(2, "0");

export default function Feedback() {
  const n = FEEDBACK.length;
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const x0 = useRef(null);
  const go = (i) => setCur((i + n) % n);

  const onKey = (e) => {
    if (e.key === "ArrowRight") go(cur + 1);
    if (e.key === "ArrowLeft") go(cur - 1);
  };
  const onTouchEnd = (e) => {
    if (x0.current !== null) {
      const d = e.changedTouches[0].clientX - x0.current;
      if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1));
      x0.current = null;
    }
    setPaused(false);
  };

  return (
    <section className="sec alt" id="feedback">
      <div className="wrap">
        <SectionHead eyebrow="Client Feedback" title="In their words" text="One story at a time — hover or touch to pause." />
        <Reveal
          className="car"
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Client feedback"
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { x0.current = e.touches[0].clientX; setPaused(true); }}
          onTouchEnd={onTouchEnd}
        >
          {n === 0 && <SectionHead title="Coming Soon" />}
          <div className="car__vp">
            <div className="car__tr" style={{ transform: `translateX(-${cur * 100}%)` }}>
              {FEEDBACK.map((f, i) => (
                <div className={`sl${i === cur ? " on" : ""}`} key={i} aria-hidden={i !== cur}>
                  <blockquote>
                    <Quote className="qi" aria-hidden="true" />
                    {f.sample && <span className="tag">Sample — replace</span>}
                    <q>{f.quote}</q>
                    <footer className="who">
                      <span className="av" aria-hidden="true">{initials(f.name)}</span>
                      <cite>{f.name}<small>{f.role}</small></cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {n > 1 && (
            <div className="car__bar" aria-hidden="true">
              <i key={cur} style={{ animationPlayState: paused ? "paused" : "running" }} onAnimationEnd={() => go(cur + 1)} />
            </div>
          )}

          <div className="car__ctl">
            <button aria-label="Previous feedback" onClick={() => go(cur - 1)}><ArrowLeft /></button>
            <span id="dots">{FEEDBACK.map((_, i) => <i key={i} className={i === cur ? "on" : ""} onClick={() => go(i)} />)}</span>
            <button aria-label="Next feedback" onClick={() => go(cur + 1)}><ArrowRight /></button>
          </div>
          <p className="cnt">{pad(cur + 1)} / {pad(n)}</p>
        </Reveal>
      </div>
    </section>
  );
}
