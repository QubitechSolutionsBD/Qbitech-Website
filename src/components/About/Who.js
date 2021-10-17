import React from "react";

function Who({whoweareRef}) {
  return (
    <div className="about__about" ref={whoweareRef}>
      <div className="heading">
      <div className="circle" id="aboutwhocircle"></div>
        {/* <h3>
          <div><span id="aboutWhoHeading">We are building</span></div>
          <div><span id="aboutWhoHeading">the tech solutions from</span></div>
        </h3>
        <h1 className="primary-heading">
          <div><span id="aboutWhoHeading">2020</span></div>
          <div><span id="aboutWhoHeading">to</span></div>
          <div><span id="aboutWhoHeading">2XXX</span></div>
        </h1> */}
        <h1>
          <div><span id="aboutWhoHeading">WHO</span></div>
          <div><span id="aboutWhoHeading">WE ARE</span></div>
        </h1>
      </div>
      <div className="text">
        <div className="text-content">
          <p id="abouttext">
            Qubitech is formed around a young group of entrepreneurs with the
            desire to streamline modern day developing practices in the
            industry. Our interest in the software development sector is not
            new.
          </p>
        </div>
        <div className="text-content">
          <p id="abouttext">
            We have been involved in multitude of projects since the start of
            our university days. We all have felt that our country is still
            running on the obsolete software systems that has been rendered
            useless in the ever-changing digital world. We want to introduce an
            agile process to the industry ensuring the best quality service in
            the quickest of time.
          </p>
        </div>
        <div className="text-content">
          <p id="abouttext">
            True transformation is rooted in our structured and proven strategy.
            We know how it works, and we’ll get you there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Who;
