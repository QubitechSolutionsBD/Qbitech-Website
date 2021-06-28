import React from "react";
import MoreButton from "../Global/MoreButton";

function What() {
  return (
    <div className="about__what">
      <div className="content">
        <h3>WHAT WE DO</h3>
        <p>
          We ensure the best practices in web applications, mobile applications,
          hardware prototyping and branding services to empower your brand for
          the challenges of today and tomorrow.
        </p>
        <MoreButton text="view our services" direction="left" link="/services" />
      </div>
    </div>
  );
}

export default What;
