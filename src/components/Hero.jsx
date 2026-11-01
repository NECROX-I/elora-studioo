export default function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero__bg" src="/banner.webp" alt="ELORA Studio — Design. Create. Build." fetchPriority="high" />
      <div className="hero__fade" />
      <div className="wrap hero__c">
        <p className="eyebrow">Creative &amp; Digital Studio</p>
        <h1>Heritage-inspired craft,<br /><em>built for the modern web.</em></h1>
        <p className="lead">Graphic design, video editing, presentations, Excel solutions and websites — handled by one studio, with one point of contact.</p>
        <div className="row"><a href="#contact" className="btn">Start a Project</a><a href="#services" className="btn ghost">Explore Services</a></div>
      </div>
    </section>
  );
}
