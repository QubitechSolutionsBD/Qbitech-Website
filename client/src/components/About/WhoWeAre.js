import React from "react";

function WhoWeAre({whoweareRef}) {
  return (
    <div className="about__whoweare" ref={whoweareRef}>
        {/* heading */}
      <div className="heading">
        <h1>
          <div>
            <span id="aboutwhoweareHeading">WHO</span>
          </div>
          <div>
            <span id="aboutwhoweareHeading">WE ARE</span>
          </div>
        </h1>
      </div>
      
      {/* text */}
      <div className="text">
        <div className="text__container">
          <p id="aboutwhowearetext">
            Qubitech is formed around a young group of entrepreneurs with the
            desire to streamline modern day developing practices in the
            industry. Our interest in the software development sector is not
            new.
          </p>
        </div>
        <div className="text__container">
          <p id="aboutwhowearetext">
            We have been involved in multitude of projects since the start of
            our university days. We all have felt that our country is still
            running on the obsolete software systems that has been rendered
            useless in the ever-changing digital world. We want to introduce an
            agile process to the industry ensuring the best quality service in
            the quickest of time.
          </p>
        </div>
      </div>

      <div className="circle" id="globalBannerCircle2"></div>
    </div>
  );
}

export default WhoWeAre;
