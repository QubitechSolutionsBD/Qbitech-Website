import React from "react";
import q from "../../assets/logo.png";

function Banner() {
  return (
    <div className="home__banner">
      <h1>
        <div className="line"><span>We Work With Latest</span></div>
        <div className="line"><span>Technologies To Accelerate Your</span></div>
        <div className="line bold"><span>Digital Transformation</span></div>
      </h1>
      
      <h1 className="formobile">
        We Work With Latest Technologies To Accelerate Your <span>Digital
        Transformation</span>
      </h1>

      <img src={q} alt="Q" />
    </div>
  );
}

export default Banner;
