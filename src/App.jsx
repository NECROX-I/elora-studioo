import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import Work from "./components/Work";
import Process from "./components/Process";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectPage from "./components/ProjectPage";
import usePath from "./hooks/usePath";
import { getWork } from "./data/works";
import { SHOW_FEEDBACK } from "./config/site";

export default function App() {
  const path = usePath();
  const slug = path.startsWith("/work/") ? path.slice("/work/".length) : null;

  // Runs on first load and on every route change (link click, Back, Forward).
  // Back/Forward/refresh -> saved scroll position. "/#section" -> that section. Otherwise -> top.
  useEffect(() => {
    const y = window.history.state?.y;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (typeof y === "number") window.scrollTo({ top: y, behavior: "instant" });
    else if (el) el.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  return (
    <>
      <Navbar key={slug ? "project" : "home"} home={!slug} />
      <main>
        {slug ? (
          <ProjectPage work={getWork(slug)} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Why />
            <Work />
            <Process />
            {SHOW_FEEDBACK && <Feedback />}
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
