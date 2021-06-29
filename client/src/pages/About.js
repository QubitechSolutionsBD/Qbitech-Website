import React, { useEffect, useRef } from "react";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/About/Banner";
import Who from "../components/About/Who";
import Why from "../components/About/Why";
import How from "../components/About/How";
import What from "../components/About/What";
import Culture from "../components/About/Culture";
import Trifecta from "../components/About/Trifecta";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
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
        <Who whoweareRef={whoweareRef} />
        <Why />
        <How />
        <What />
        <Culture />
        <Trifecta />
      </div>
      <Footer />
    </>
  );
}

export default About;

