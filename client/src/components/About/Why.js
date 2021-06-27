import React from "react";

function Why() {
  return (
    <div className="about__why">
      {/* design */}
      <div className="design">
        <div className="design__container">
          <div className="row top">
            <div className="smallcircle" id="aboutwhatwedocircles"></div>
            <div className="bigcircle" id="aboutwhatwedocircles"></div>
            <div className="smallcircle" id="aboutwhatwedocircles"></div>
          </div>
          <div className="row">
            <div className="bigcircle" id="aboutwhatwedocircles"></div>
            <div className="bigcircle" id="aboutwhatwedocircles"></div>
            <div className="bigcircle" id="aboutwhatwedocircles"></div>
          </div>
          <div className="row below">
            <div className="smallcircle" id="aboutwhatwedocircles"></div>
            <div className="bigcircle" id="aboutwhatwedocircles"></div>
            <div className="smallcircle" id="aboutwhatwedocircles"></div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="content">
        <h1>
          <div>
            <span id="aboutwhatwedoHeading">Why</span>
          </div>
          <div>
            <span id="aboutwhatwedoHeading">WE DO</span>
          </div>
        </h1>

        <div className="text-container">
          <p id="aboutwhatwedoText">
            Qubitech introduces agile practices to renovate the outdated
            development process existing around. We focus on providing solutions
            to new, up & coming enterprises to help them grow in the process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
