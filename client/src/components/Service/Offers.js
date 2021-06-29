import React from "react";
import MoreButton from "../Global/MoreButton";

function Offers({ nextslideRef, offerHeading, offerText, offers }) {
  return (
    <div className="service__offers" ref={nextslideRef}>
      <div className="offers">
        {offers.map((offer) => (
          <div className="offer">
            <div className="circle">
              <div className="circle-small"></div>
            </div>
            <div className="offer__name">{offer}</div>
          </div>
        ))}
      </div>
      <div className="texts">
        <h2>{offerHeading}</h2>
        <p>{offerText}</p>
        <MoreButton text="lets talk" direction="left" link="/contact" />
      </div>
    </div>
  );
}

export default Offers;
