import React from "react";
import GlobalBanner from "../Global/GlobalBanner";

const Banner = ({ ourserviceRef }) => {
  return (
    <GlobalBanner nextSlideRef={ourserviceRef} scrollBtnText="Explore More">
      <h1 className="desktop-view-heading">
        <div><span id="servicesbannerheading">Developing modern-day solutions to your business</span></div>
        <div><span id="servicesbannerheading">needs. and explore every possible path, to achieve</span></div>
        <div><span id="servicesbannerheading">efficiency. We are here to empower your venture to</span></div>
        <div><span id="servicesbannerheading">help you to grow.</span></div>
      </h1>

      <h1 className="mobile-view-heading">
        A Rajshahi-based creative team working with ambitious tech companies
        around the world. Every day, we are developing tech solutions that help
        our partners stand out, connect with customers and grow faster.
      </h1>
    </GlobalBanner>
  );
};

export default Banner;
