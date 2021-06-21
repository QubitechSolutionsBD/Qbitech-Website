import React from "react";
import trifecta from "../../assets/pageAbout/trfecta.png";

function Trifecta() {
  return (
    <div className="about__trifecta">
      <div className="head">
        <h1>
          <div><span id="abouttrifectahead">Our</span></div>
          <div><span id="abouttrifectahead">TRIFECTA</span></div>
        </h1>
        <p id="abouttrifectatext">
          Sometimes the late nights, early mornings, and long design sprints
          call for strong drinks with good company. We value hard work and
          celebrate accordingly
        </p>
        <div className="options">
            <p id="abouttrifectaoption">Strategy</p>
            <p id="abouttrifectaoption">Design</p>
            <p id="abouttrifectaoption">Experience</p>
        </div>
      </div>

      <img src={trifecta} alt="" id="abouttrifectaimage" />
    </div>
  );
}

export default Trifecta;
