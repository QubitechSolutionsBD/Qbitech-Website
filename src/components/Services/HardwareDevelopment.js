import React from "react";
import MoreButton from "../Global/MoreButton";

const HardwareDevelopment = () => {
  return (
    <div className="services__hardwaredevelopment">
      <h2 id="serviceshardwaredevelopmenthead">03</h2>
      <h1>
        <div id="serviceshardwaredevelopmenthead">
          <span>Hardwareware</span>
        </div>
        <div id="serviceshardwaredevelopmenthead">
          <span>Development</span>
        </div>
      </h1>
      <div>
        <div className="row">
          <div id="hardwareitemanim" className="item">
            <p id="harditem">PRODUCTS & IDEA PROTOTYPING</p>
            <div className="circle" id="hardcircle"></div>
          </div>
          <div id="hardwareitemanim" className="item">
            <p id="harditem">IOT BASED MONITORING SYSTEM</p>
            <div className="circle" id="hardcircle"></div>
          </div>
          <div id="hardwareitemanim" className="item">
          <p id="harditem">IOT BASED AUTOMOTION SYSTEM</p>
            <div className="circle" id="hardcircle"></div>
          </div>
        </div>
      </div>
      <div className="hdhiplink">
        <MoreButton text="Learn More" direction="right" link="/service/hardware-development" back="light" />
      </div>
    </div>
  );
};

export default HardwareDevelopment;
