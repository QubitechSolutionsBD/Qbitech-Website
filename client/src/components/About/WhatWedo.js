import React from "react";
import { Link } from "react-router-dom";

function WhatWedo() {
  return (
    <div className="about__whatwedo">
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
          <div><span id="aboutwhatwedoHeading">What</span></div>
          <div><span id="aboutwhatwedoHeading">WE DO</span></div>
        </h1>

        <div className="text-container">
          <p id="aboutwhatwedoText">
            We design and build award-winning products, brands and websites for
            tech companies. It usually begins with a single project and leads to
            us playing an ongoing role in our partners’ product and marketing
            teams.
          </p>
        </div>
        <div className="text-container">
          <Link to="/" id="aboutwhatwedoText">View Our Services +</Link>
        </div>
      </div>
    </div>
  );
}

export default WhatWedo;
