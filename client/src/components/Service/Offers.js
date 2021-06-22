import React from "react";
import { Link } from "react-router-dom";

function Offers({ nextslideRef, offerHeading, offerText, offers }) {
  return (
    <div className="service__offers" ref={nextslideRef}>
      <div className="content-heading">
        <div className="heading">
          <div className="circle"></div>
          <h1>
            <div><span id="aboutwhoweareHeading">WHAT</span></div>
            <div><span id="aboutwhoweareHeading">WE OFFER</span></div>
          </h1>
        </div>
      </div>

      <div className="content-content">
        <p className="big">{offerHeading}</p>
        {offerText.map(text => <p>{text}</p>)}
        <Link to="/">LETS TALK <span>+</span></Link>
      </div>

      <div className="content-offers">
        {offers.map(offer => <p>{offer}</p>)}
      </div>
    </div>
  );
}

export default Offers;
