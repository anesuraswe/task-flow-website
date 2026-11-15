import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
     <>
      <NavBar />

      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
   </>
  );
}

export default App;
