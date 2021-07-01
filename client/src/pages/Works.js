import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Works/Banner";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";

// Animations
import { worksAnumation } from "../animation/WorksAnim";
import CaseStudies from "../components/Works/CaseStudies";

function Works() {
    const nextSlideRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        worksAnumation();
    }, []);

  return (
    <>
      <GlobalPageTransition />
      <Navbar />
      <div className="works">
          <Banner nextSlideRef={nextSlideRef} />
          <CaseStudies nextSlideRef={nextSlideRef} />
      </div>
      <Footer />
    </>
  );
}

export default Works;
