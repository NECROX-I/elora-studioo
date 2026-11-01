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
export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><About /><Services /><Why /><Work /><Process /><Feedback /><Contact /></main>
      <Footer />
      <BackToTop />
    </>
  );
}
