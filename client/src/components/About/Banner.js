import React from "react";
import GlobalBanner from "../Global/GlobalBanner";

function Banner({ whoweareRef }) {
  return (
    <GlobalBanner nextSlideRef={whoweareRef} scrollBtnText="Get to know us">
      <h1 className="desktop-view-heading">
        <div><span id="aboutbannerheading">A Rajshahi-based creative team working with{" "}</span></div>
        <div><span id="aboutbannerheading">ambitious tech companies around the world. Every{" "}</span></div>
        <div><span id="aboutbannerheading">day, we are developing tech solutions that help our{" "}</span></div>
        <div><span id="aboutbannerheading">partners stand out, connect with customers and{" "}</span></div>
        <div><span id="aboutbannerheading">grow faster.</span></div>
      </h1>

      <h1 className="mobile-view-heading">
        A Rajshahi-based creative team working with ambitious tech companies
        around the world. Every day, we are developing tech solutions that help
        our partners stand out, connect with customers and grow faster.
      </h1>
    </GlobalBanner>
  );
}

export default Banner;
