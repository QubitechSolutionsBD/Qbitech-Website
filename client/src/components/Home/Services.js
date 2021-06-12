import React from "react";

import app from "../../assets/services/options/app.svg";
import web from "../../assets/services/options/web.svg";
import hardware from "../../assets/services/options/hardware.svg";
import marketing from "../../assets/services/options/marketing.svg";

function Services() {
  return (
    <div className="home__services">
      {/* container - web */}
      <div className="container">
        <div className="content left">
          <div className="logo"><img src={web} alt="" /></div>
          <div className="text">
            <h3>Web Solutions</h3>
            <p>
              We Design incredible platforms with custom made, user-friendly
              design solutions that gives the users a truly meaningful
              experience.
            </p>
          </div>
        </div>
        <div className="blank"></div>
      </div>

      {/* container */}
      <div className="container">
        <div className="blank"></div>
        <div className="content right">
        <div className="logo"><img src={app} alt="" /></div>
          <div className="text">
            <h3>Software Solutions</h3>
            <p>
              We Design incredible platforms with custom made, user-friendly
              design solutions that gives the users a truly meaningful
              experience.
            </p>
          </div>
        </div>
      </div>

    {/* container - hardware */}
      <div className="container">
        <div className="content left">
          <div className="logo"><img src={hardware} alt="" /></div>
          <div className="text">
            <h3>Hardware Solutions</h3>
            <p>
              We Design incredible platforms with custom made, user-friendly
              design solutions that gives the users a truly meaningful
              experience.
            </p>
          </div>
        </div>
        <div className="blank"></div>
      </div>

      {/* container - branding */}
      <div className="container">
        <div className="blank"></div>
        <div className="content right">
        <div className="logo"><img src={marketing} alt="" /></div>
          <div className="text">
            <h3>Branding & Marketing Solutions</h3>
            <p>
              We Design incredible platforms with custom made, user-friendly
              design solutions that gives the users a truly meaningful
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
