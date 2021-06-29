import React from "react";
import { Link } from "react-router-dom";

function MoreButton({ text, direction, link }) {
  return (
    <>
      {direction === "left" ? (
        <div className="globalMoreButton left" id="globalMoreButton">
          <div className="circle" id="globalMoreCircle"></div>
          <Link to={link} id="globalMoreText">{text} <span>+</span></Link>
        </div>
      ) : (
        <div className="globalMoreButton right" id="globalMoreButton">
          <Link to={link} id="globalMoreText"><span>+</span> {text}</Link>
          <div className="circle" id="globalMoreCircle"></div>
        </div>
      )}
    </>
  );
}

export default MoreButton;
