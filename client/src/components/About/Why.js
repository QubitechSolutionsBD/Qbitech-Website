import React from "react";

function Why() {
  return (
    <div className="about__why">
      {/* design */}
      <div className="design">
        <div className="design__container">
          <div className="row top">
            <div className="smallcircle" id="aboutwhydesigncircles"></div>
            <div className="bigcircle" id="aboutwhydesigncircles"></div>
            <div className="smallcircle" id="aboutwhydesigncircles"></div>
          </div>
          <div className="row">
            <div className="bigcircle" id="aboutwhydesigncircles"></div>
            <div className="bigcircle" id="aboutwhydesigncircles"></div>
            <div className="bigcircle" id="aboutwhydesigncircles"></div>
          </div>
          <div className="row below">
            <div className="smallcircle" id="aboutwhydesigncircles"></div>
            <div className="bigcircle" id="aboutwhydesigncircles"></div>
            <div className="smallcircle" id="aboutwhydesigncircles"></div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="content">
        <div className="heading-container">
          <div className="circle" id="aboutwhyHeadingcircle"></div>
          <h1>
            <div>
              <span id="aboutwhyHeading">Why</span>
            </div>
            <div>
              <span id="aboutwhyHeading">WE DO</span>
            </div>
          </h1>
        </div>

        <div className="text-container">
          <p id="aboutwhyText">
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
