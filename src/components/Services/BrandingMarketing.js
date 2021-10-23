import React from "react";
import MoreButton from "../Global/MoreButton";

const BrandingMarketing = () => {
  return (
    <div className="services__brandingmarketing">
      <h2 id="servicesbrandingmarketinghead">04</h2>
      <h1>
        <div id="servicesbrandingmarketinghead">
          <span>Branding</span>
        </div>
        <div id="servicesbrandingmarketinghead">
          <span>& Marketing</span>
        </div>
      </h1>
      <div>
        <div className="row">
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">BUILD A BRAND IDENTITY</p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">DEVELOP BRAND STRATEGIES & GUIDLINE</p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">REBRANDING ESTABLISHED BUSINESS</p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">ESTABLISHING BRAND POSITION</p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">MAPPING OUT A SOCIAL MEDIA STRATEGY</p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">
              WRITING COPY FOR WEBSITES
            </p>
            <div className="circle" id="brandcircle"></div>
          </div>
          <div id="brandingmarketingitemanim" className="item">
            <p id="branditem">
               OTHER DIGITAL ASSETS
            </p>
            <div className="circle" id="brandcircle"></div>
          </div>
        </div>
      </div>
      <div className="hdhiplink">
        <MoreButton
          text="Learn More"
          direction="right"
          link="/service/branding-and-marketing"
          back="light"
        />
      </div>
    </div>
  );
};

export default BrandingMarketing;
