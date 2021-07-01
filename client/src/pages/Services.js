import React, { useEffect, useRef } from "react";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Services/Banner";
import { servicesAnimation } from "../animation/ServicesAnim";
import OurServices from "../components/Services/OurServices";
import Footer from "../components/Footer";
import WebDevelopment from "../components/Services/WebDevelopment";
import SoftwareDevelopment from "../components/Services/SoftwareDevelopment";
import WeDev from "../components/Services/WeDev";
import HardwareDevelopment from "../components/Services/HardwareDevelopment";
import BrandingMarketing from "../components/Services/BrandingMarketing";
import WeDev2 from "../components/Services/WeDev2";
import OurHappyCustomer from "../components/Services/OurHappyCustomer";
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
        <SoftwareDevelopment />
        <WeDev />
        <HardwareDevelopment />
        <BrandingMarketing />
        <WeDev2 />
        <OurHappyCustomer />
        <Footer />
      </div>
    </>
  );
};

export default Services;
