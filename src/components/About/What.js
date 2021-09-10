import React from "react";
import MoreButton from "../Global/MoreButton";

function What() {
  return (
    <div className="about__what">
      <div className="content">
        <h3 id="aboutwhathead">WHAT WE DO</h3>
        {/* showed in desktop version */}
        <p>
          <div><span id="aboutwhattext">We ensure the best practices in web applications, mobile</span></div>
          <div><span id="aboutwhattext">applications, hardware prototyping and branding services</span></div>
          <div><span id="aboutwhattext">to empower your brand for the challenges of today </span></div>
          <div><span id="aboutwhattext">and tomorrow.</span></div>
        </p>

        {/* showed in mobile version */}
        <p className="mobile" id="aboutwhatheadmobile">
          We ensure the best practices in web applications, mobile applications,
          hardware prototyping and branding services to empower your brand for
          the challenges of today and tomorrow.
        </p>
        <MoreButton text="view our services" direction="left" link="/services" num="1" />
      </div>
    </div>
  );
}

export default What;
