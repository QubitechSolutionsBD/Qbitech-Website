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
          <div className="logo">
            <img src={web} alt="" />
          </div>
          <div className="text">
            <h3>Web Solutions</h3>
            <p>
              With elegant performance across every platform, our modern web
              frameworks to give your business a one-stop web solution service.
            </p>
          </div>
        </div>
        <div className="blank"></div>
      </div>

      {/* container */}
      <div className="container">
        <div className="blank"></div>
        <div className="content right">
          <div className="logo">
            <img src={app} alt="" />
          </div>
          <div className="text">
            <h3>Software Solutions</h3>
            <p>
              Streamline your business needs through our comprehensive mobile
              software solutions service to meet the needs of modern day
              industry.
            </p>
          </div>
        </div>
      </div>

      {/* container - hardware */}
      <div className="container">
        <div className="content left">
          <div className="logo">
            <img src={hardware} alt="" />
          </div>
          <div className="text">
            <h3>Hardware Solutions</h3>
            <p>
              Seamlessly integrate your ideas into IoT prototypes to simulate
              the idea before going into the market among the consumers.
            </p>
          </div>
        </div>
        <div className="blank"></div>
      </div>

      {/* container - branding */}
      <div className="container">
        <div className="blank"></div>
        <div className="content right">
          <div className="logo">
            <img src={marketing} alt="" />
          </div>
          <div className="text">
            <h3>Branding & Marketing Solutions</h3>
            <p>
              Incorporate modern branding & marketing strategies to channel your
              brand in front of the right consumers through our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
