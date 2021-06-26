import React, { useEffect } from "react";

// COMPONENTS
import Navbar from "../Navigation/Navbar";
import Banner from "./Banner";
import Observance from "./Observance";
import Services from "./Services";
import Contributions from "./Contributions";
import Projects from "./Projects";
import Testomonials from "./Testomonials";
import Clients from "./Clients";
import Footer from "../Footer";

// ANIMATION
import { homeAnimation } from "../../animation/HomeAnim";

function HomeContainer() {
  // APPLY ANIMATION
  useEffect(() => {
      homeAnimation();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <Banner />
        <Services />
        <Contributions />
        <Observance />
        <Testomonials />
        <Clients />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default HomeContainer;
