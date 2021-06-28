import React from "react";
import trifecta from "../../assets/pageAbout/trfecta.png";

function Trifecta() {
  return (
    <div className="about__trifecta">
      <img src={trifecta} alt="" id="abouttrifectaimage" />
      <div className="circle"></div>
      <div className="head">
        <h1>
          <div>
            <span id="abouttrifectahead">Our</span>
          </div>
          <div>
            <span id="abouttrifectahead">TRIFECTA</span>
          </div>
        </h1>
        <p id="abouttrifectatext">
          Qubitech intends to foster your passionate ideas & beliefs into
          reality. Our efficient development process ensures to empower your
          brand for the challenges of today & tomorrow.
        </p>
        {/* <div className="options">
            <p id="abouttrifectaoption">Strategy</p>
            <p id="abouttrifectaoption">Design</p>
            <p id="abouttrifectaoption">Experience</p>
        </div> */}
      </div>
    </div>
  );
}

export default Trifecta;
