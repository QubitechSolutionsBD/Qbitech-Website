import React from "react";
import { Link } from "react-router-dom";

function ShortDesc() {
  return (
    <div className="service__shortdesc">
      <h1>
        <div>
          <span>Our development team brings engaging </span>
        </div>
        <div>
          <span>visuals to life through custom development.</span>
        </div>
      </h1>

      <p>
        From custom front-end to sophisticated back-end, our in-house
        development team handles the heavy lifting to create an engaging
        experience online.
      </p>

      <div className="relatedtopics">
        <div className="design">
          <div className="circlegroups">
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
        <div className="topics">
          <h3>RELATED SERVICES</h3>
          <Link to="/">SOFTWARE DEVELOPMENT</Link>
          <Link to="/">HARDWARE DEVELOPMENT</Link>
          <Link to="/">BRANDING & MARKETING</Link>
        </div>
      </div>
    </div>
  );
}

export default ShortDesc;
