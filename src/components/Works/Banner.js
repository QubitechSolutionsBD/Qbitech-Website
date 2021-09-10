import React from "react";
import GlobalBanner from "../Global/GlobalBanner";

function Banner({ nextSlideRef }) {
  return (
    <GlobalBanner nextSlideRef={nextSlideRef} scrollBtnText="View Our Works">
      <h1 className="desktop-view-heading">
        <div><span id="worksbannerheading">We are Solving diverse business needs through</span></div>
        <div><span id="worksbannerheading">great design, maintainable environment and</span></div>
        <div><span id="worksbannerheading">overall a better solutions</span></div>
      </h1>

      <h1 className="mobile-view-heading" id="worksbannerheadingForMobile">
      We are Solving diverse business needs through great design and UX
      </h1>
    </GlobalBanner>
  );
}

export default Banner;
