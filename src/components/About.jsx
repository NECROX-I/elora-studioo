import Reveal from "./Reveal";
export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap two">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h2>Ideas turned into meaningful results</h2>
          <p>ELORA is a creative and digital solutions studio. Our name and look draw from the Ajanta and Ellora heritage — patient, detailed craftsmanship that was made to last.</p>
          <p>We bring creative thinking and technical skill together, so your visuals, documents and website feel like one considered brand rather than separate jobs.</p>
          <div className="trio">
            <div><h4>Design</h4><p>Considered and on-brand.</p></div>
            <div><h4>Create</h4><p>Original, never templated.</p></div>
            <div><h4>Build</h4><p>Clean, fast and reliable.</p></div>
          </div>
        </Reveal>
        <Reveal className="emblem"><img src="/logo.webp" alt="ELORA Studio logo" loading="lazy" width="560" height="545" /></Reveal>
      </div>
    </section>
  );
}
