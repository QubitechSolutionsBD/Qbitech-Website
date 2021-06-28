import React, { useEffect, useRef } from "react";
import GlobalPageTransition from "../components/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Services/Banner";

import { servicesAnimation } from "../animation/ServicesAnim";
import OurServices from "../components/Services/OurServices";
import Footer from "../components/Footer";
import WebDevelopment from "../components/Services/WebDevelopment";
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
        <WebDevelopment />
      </div>
    </>
  );
};

export default Services;
