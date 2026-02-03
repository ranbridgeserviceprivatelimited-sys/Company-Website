import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Domains from "./components/Domains";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import ThreeBackground from "./components/ThreeBackground";

function App() {
  useEffect(() => {
    // Redirect to home on refresh/initial load if not already there
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }

    // Global parallax support
    gsap.utils.toArray("[data-speed]").forEach((element: any) => {
      const speed = parseFloat(element.getAttribute("data-speed"));
      gsap.to(element, {
        y: () => -(window.innerHeight * speed),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <ThreeBackground />
      {/* Global UI */}
      <Cursor />
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Global Components */}
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;
