import React from "react";
import MoreButton from "../Global/MoreButton";

function Offers({ nextslideRef, offerHeading, offerText, offers }) {
  return (
    <div className="service__offers" ref={nextslideRef}>
      <div className="offers">
        {offers.map((offer, i) => (
          <div className="offer" key={i}>
            <div className="circle" id="serviceoffercircle">
              <div className="circle-small" id="serviceoffersmallcircle"></div>
            </div>
            <div className="offer__name" id="serviceofferoffer">{offer}</div>
          </div>
        ))}
      </div>
      <div className="texts">
        <h2 id="serviceofferHeading">{offerHeading}</h2>
        <p id="serviceofferText">{offerText}</p>
        <MoreButton text="lets talk" direction="left" link="/contact" num="1" />
      </div>
    </div>
  );
}

export default Offers;
