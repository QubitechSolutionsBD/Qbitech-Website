import React, { useRef } from "react";
import GlobalPageTransition from "../components/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Service/Banner";
import Footer from "../components/Footer";
import Offers from "../components/Service/Offers";
import Technologies from "../components/Service/Technologies";
import Works from "../components/Service/Works";

function Service() {
  const nextslideRef = useRef(null);

  return (
    <>
      {/* <GlobalPageTransition /> */}
      <Navbar />

      <div className="service">
        <Banner nextslideRef={nextslideRef} />
        <Offers nextslideRef={nextslideRef} />
        <Technologies />
        <Works />
      </div>

      <Footer />
    </>
  );
}

export default Service;
