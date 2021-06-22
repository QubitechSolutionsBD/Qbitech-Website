import React from "react";
import { Link } from "react-router-dom";

function Offers({ nextslideRef, offerHeading, offerText, offers }) {
  return (
    <div className="service__offers" ref={nextslideRef}>
      <div className="content-heading">
        <div className="heading">
          <div className="circle" id="globalBannerCircle2"></div>
          <h1>
            <div><span id="serviceofferHeading">WHAT</span></div>
            <div><span id="serviceofferHeading">WE OFFER</span></div>
          </h1>
        </div>
      </div>

      <div className="content-content">
        <p className="big" id="serviceofferText">{offerHeading}</p>
        <p id="serviceofferText">{offerText}</p>
        <Link to="/">LETS TALK <span>+</span></Link>
      </div>

      <div className="content-offers">
        {offers.map((offer, i) => <p key={i}>{offer}</p>)}
      </div>
    </div>
  );
}

export default Offers;
