import React from "react";
import MoreButton from "../Global/MoreButton";

const SoftwareDevelopment = () => {
  return (
    <div className="services__softdevelopment">
      <h2 id="servicessoftwaredevelopmenthead">02</h2>
      <h1>
        <div id="servicessoftwaredevelopmenthead">
          <span>Software</span>
        </div>
        <div id="servicessoftwaredevelopmenthead">
          <span>Development</span>
        </div>
      </h1>
      <div>
        <div className="row">
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">IOS APP DEVELOPMENT</p>
            </div>
          </div>
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">ANDROID APP DEVELOPMENT</p>
            </div>
          </div>
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">DIGITAL SERVICE UI DESIGN</p>
            </div>
          </div>
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">DIGITAL SERVICE UX RESEARCH</p>
            </div>
          </div>
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">NATIVE & CROSS PLATFORM DESIGN</p>
            </div>
          </div>
          <div id="softitemanim" className="item">
            <div className="circle" id="softcircle"></div>
            <div>
              <p id="softitem">UNITY GAME DEVELOPMENT</p>
            </div>
          </div>
        </div>
      </div>
      <MoreButton text="Learn More" direction="left" link="/service/software-development" back="light" />
    </div>
  );
};

export default SoftwareDevelopment;
