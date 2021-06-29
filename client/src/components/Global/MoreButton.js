import React from "react";
import { Link } from "react-router-dom";

function MoreButton({ text, direction, link, back }) {
  return (
    <>
      {direction === "left" ? (
        <div className={`globalMoreButton left ${back}`} id="globalMoreButton">
          <div className="circle" id="globalMoreCircle"></div>
          <Link to={link} id="globalMoreText">{text} <span>+</span></Link>
        </div>
      ) : (
        <div className={`globalMoreButton right ${back}`} id="globalMoreButton">
          <Link to={link} id="globalMoreText"><span>+</span> {text}</Link>
          <div className="circle" id="globalMoreCircle"></div>
        </div>
      )}
    </>
  );
}

export default MoreButton;
