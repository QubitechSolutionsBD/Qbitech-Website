import React, { useEffect, useRef } from "react";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/About/Banner";
import Who from "../components/About/Who";
import Why from "../components/About/Why";
import Culture from "../components/About/Culture";
import Trifecta from "../components/About/Trifecta";
import How from "../components/About/How";
import Team from "../components/About/Team";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/GlobalPageTransition";
import { aboutAnumation } from "../animation/AboutAnim";

function About() {
  const whoweareRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    aboutAnumation();
  }, []);

  return (
    <>
      <GlobalPageTransition />
      <Navbar />
      <div className="about">
        <Banner whoweareRef={whoweareRef} />
        {/* <WhoWeAre whoweareRef={whoweareRef} /> */}
        <Who />
        <Why />
        <How />
        <Culture />
        <Trifecta />
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default About;

