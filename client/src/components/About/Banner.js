import React from "react";
import GlobalBanner from "../Global/GlobalBanner";

function Banner({ whoweareRef }) {
  return (
    <GlobalBanner nextSlideRef={whoweareRef} scrollBtnText="Get to know us">
      <h1 className="desktop-view-heading">
        <div><span id="aboutbannerheading">A Creative team working with ambitious tech{" "}</span></div>
        <div><span id="aboutbannerheading">companies around the world. Every day, we are{" "}</span></div>
        <div><span id="aboutbannerheading">developing tech solutions that help our partners{" "}</span></div>
        <div><span id="aboutbannerheading">stand out, connect with customers and grow faster.{" "}</span></div>
      </h1>

      <h1 className="mobile-view-heading" id="aboutbannerheadingForMobile">
        A Creative team working with ambitious tech companies
        around the world. Every day, we are developing tech solutions that help
        our partners stand out, connect with customers and grow faster.
      </h1>
    </GlobalBanner>
  );
}

export default Banner;
