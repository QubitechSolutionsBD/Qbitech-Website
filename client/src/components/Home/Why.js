import React from "react";
import { Link } from "@material-ui/core";

function Why() {
  return (
    <div className="home__why">
      {/* text */}
      <div className="text">
        <div className="whytext-container">
          <p id="homewhytext">
            Our methodology has been perfected for an area that is often
            overlooked when it comes to developing, marketing and branding.
          </p>
        </div>
        <div className="whytext-container">
          <p id="homewhytext">
            We are driven by the incredible potential of new technologies and
            the humans behind their development.
          </p>
        </div>
        <div className="whytext-container">
          <p id="homewhytext">
            Our purpose is to incite full transformation. In order to create a
            true understanding of your authentic brand, we must touch all of the
            aspects that contribute to who you are as a company, and what you
            do.
          </p>
        </div>

        <Link to="/" id="homewhybtn">Learn More</Link>
      </div>

      {/* head */}
      <div className="head">
        <h1>
          <div><span id="homewhyheading">Why</span></div>
          <div><span id="homewhyheading">Qbitech!?</span></div>
        </h1>
      </div>
    </div>
  );
}

export default Why;
