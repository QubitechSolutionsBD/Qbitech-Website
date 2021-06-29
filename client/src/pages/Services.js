import React, { useEffect, useRef } from "react";

// Components
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Services/Banner";
import OurServices from "../components/Services/OurServices";

// Animation
import { servicesAnimation } from "../animation/ServicesAnim";

const Services = () => {
  const ourserviceRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    servicesAnimation();
  }, []);

  return (
    <>
      <GlobalPageTransition />
      <Navbar />
      <div className="services">
        <Banner ourserviceRef={ourserviceRef} />
        <OurServices ourserviceRef={ourserviceRef} />
      </div>
    </>
  );
};

export default Services;
