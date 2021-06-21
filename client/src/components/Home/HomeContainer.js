import React, { useEffect } from "react";

// COMPONENTS
import Navbar from "../Navigation/Navbar";
import Banner from "./Banner";
import About from "./About";
import Observance from "./Observance";
import Services from "./Services";
import Contributions from "./Contributions";
import Why from "./Why";
import Projects from "./Projects";
import Testomonials from "./Testomonials";
import Clients from "./Clients";
import Footer from "../Footer";

// ANIMATION
import { homeAnimation } from "../../animation/HomeAnim";

function HomeContainer() {
  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") == null) {
      homeAnimation();
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <Banner />
        <About />
        <Observance />
        <Services />
        <Contributions />
        <Why />
        <Projects />
        <Testomonials />
        <Clients />
      </div>
      <Footer />
    </>
  );
}

export default HomeContainer;
