import React from "react";

import rocket from "../../assets/industries-we-serve/rocket.png";
import cart from "../../assets/industries-we-serve/cart.png";
import education from "../../assets/industries-we-serve/education.png";

function Helps() {
  return (
    <div className="industries__helps">
      <div className="common-heading">
        <h2>How We Can Help</h2>
      </div>

      {/* helps */}
      <div className="helps">
        {/* help */}
        <div className="help">
          <div className="heading">
            <img src={rocket} atl="" />
            <h3>Startup</h3>
          </div>
          <p>
            Developing innovative and native mobile Apps for Android, iOS,
            BlackBerry and Windows platforms.
          </p>
        </div>

        {/* help */}
        <div className="help">
          <div className="heading">
            <img src={education} atl="" />
            <h3>Education</h3>
          </div>
          <p>
            Developing innovative and native mobile Apps for Android, iOS,
            BlackBerry and Windows platforms.
          </p>
        </div>

        {/* help */}
        <div className="help">
          <div className="heading">
            <img src={cart} atl="" />
            <h3>Retail</h3>
          </div>
          <p>
            Developing innovative and native mobile Apps for Android, iOS,
            BlackBerry and Windows platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Helps;
