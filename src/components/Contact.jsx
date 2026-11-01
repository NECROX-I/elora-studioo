import { useState } from "react";
import { FORM_ENDPOINT, SITE } from "../config/site";
import Reveal from "./Reveal";
const SERVICE_OPTIONS = ["Creative Design", "Video Editing", "PowerPoint Presentation", "Excel Solutions", "Website Development", "Other"];
export default function Contact() {
  const [state, setState] = useState({ type: "", msg: "" });
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget, d = new FormData(form);
    if (!d.get("name").trim() || !/^\S+@\S+\.\S+$/.test(d.get("email")) || !d.get("message").trim())
      return setState({ type: "err", msg: "Please fill in your name, a valid email and your message." });
    setBusy(true); setState({ type: "", msg: "Sending…" });
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: d });
      if (!r.ok) throw new Error("send failed");
      form.reset(); setState({ type: "ok", msg: "Thank you — we'll reply by email shortly." });
    } catch {
      setState({ type: "err", msg: `Couldn't send. Please email ${SITE.email}.` });
    }
    setBusy(false);
  }
  return (
    <section className="sec contact" id="contact">
      <div className="wrap two">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something lasting</h2>
          <p>Share a few details and we'll reply by email.</p>
          <ul className="info">
            <li><span>Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><span>Location</span>{SITE.location}</li>
            <li><span>Availability</span>{SITE.availability}</li>
          </ul>
          <div className="map"><iframe title={`Studio location, ${SITE.location}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} /></div>
        </Reveal>
        <Reveal as="form" className="form" noValidate onSubmit={submit}>
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hp" />
          <input type="hidden" name="_subject" value="New ELORA Studio enquiry" />
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Service<select name="service">{SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}</select></label>
          <label>Project details<textarea name="message" rows="5" required /></label>
          <button className="btn full" type="submit" disabled={busy}>Send Message</button>
          <p id="status" role="status" className={state.type}>{state.msg}</p>
        </Reveal>
      </div>
    </section>
  );
}
