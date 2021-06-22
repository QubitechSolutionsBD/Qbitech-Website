import React from "react";
import GlobalBanner from "../GlobalBanner";

function Banner({ nextslideRef }) {
  return (
    <GlobalBanner nextSlideRef={nextslideRef} scrollBtnText="Explore More">
      <h1>
        <div><span id="servicebannerheading">WEB DEVELOPMENT</span></div>
      </h1>
      <p>
          With elegant performance across every platform, our modern web
          frameworks to give your business a one-stop web solution service.
        </p>
    </GlobalBanner>
  );
}

export default Banner;
