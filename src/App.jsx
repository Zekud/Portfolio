import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallex from "./components/parallex/Parallex";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
