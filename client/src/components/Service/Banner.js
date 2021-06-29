import React from "react";
import GlobalBanner from "../Global/GlobalBanner";

function Banner({ nextslideRef, bannerHeading, bannerText }) {
  return (
    <GlobalBanner nextSlideRef={nextslideRef} scrollBtnText="Explore More">
      <h1>
        <div><span id="servicebannerheading">{bannerHeading[0]}</span></div>
        <div><span id="servicebannerheading">{bannerHeading[1]}</span></div>
      </h1>
      <p id="servicebannertext">{bannerText}</p>
    </GlobalBanner>
  );
}

export default Banner;
