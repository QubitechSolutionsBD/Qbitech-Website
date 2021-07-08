import React, { useEffect, useRef } from "react";

// COMPONENTS
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Works/Banner";
import CaseStudies from "../components/Works/CaseStudies";
import Footer from "../components/Footer";

// ANIMATIONS
import { worksAnumation } from "../animation/WorksAnim";

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
