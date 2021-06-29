import React from "react";
import servicesImg from "../../assets/pageServices/service (1).png";
const OurServices = ({ ourserviceRef }) => {
  return (
    <div ref={ourserviceRef} className="services__ourservices">
      <div className="head">
        <h1>
          <div>
            <span id="servicesourserviceshead">Our</span>
          </div>
          <div>
            <span id="servicesourserviceshead">Services</span>
          </div>
        </h1>
        <p id="servicesourservicestext">
          Basically we develop website software and implement hardware and
          marketing solutions for our customers.
        </p>
      </div>
      <img src={servicesImg} alt="" />
      <div className="circle" id="globalBannerCircle2"></div>
    </div>
  );
};

export default OurServices;
