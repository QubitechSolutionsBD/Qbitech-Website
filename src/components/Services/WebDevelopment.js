import React from "react";
import MoreButton from "../Global/MoreButton";

const WebDevelopment = () => {
  return (
    <div className="services__webdevelopment">
      <h2 id="serviceswebdevelopmenthead">01</h2>

      <h1>
        <div id="serviceswebdevelopmenthead"><span>Web</span></div>
        <div id="serviceswebdevelopmenthead"><span>Development</span></div>
      </h1>

      <div>
        <div className="row">
          <div id="webitemanim" className="item">
            <div className="circle" id="webitemcircle"></div>
            <div>
              <p id="webitem">FRONTEND DEVELOPMENT</p>
            </div>
          </div>
          <div id="webitemanim" className="item">
            <div className="circle" id="webitemcircle"></div>
            <div>
              <p id="webitem">BACKEND DEVELOPMENT</p>
            </div>
          </div>
          <div id="webitemanim" className="item">
            <div className="circle" id="webitemcircle"></div>
            <div>
              <p id="webitem">RESPONSIVE WEB DESIGN</p>
            </div>
          </div>
          <div id="webitemanim" className="item">
            <div className="circle" id="webitemcircle"></div>
            <div>
              <p id="webitem">WEBSITE RE-DESIGN</p>
            </div>
          </div>
          <div id="webitemanim" className="item">
            <div className="circle" id="webitemcircle"></div>
            <div>
              <p id="webitem">E-COMMERCE SITE DEVELOPMENT</p>
            </div>
          </div>
        </div>
      </div>
      <MoreButton text="Learn More" direction="left" link="/service/web-development" back="light" />
    </div>
  );
};

export default WebDevelopment;
