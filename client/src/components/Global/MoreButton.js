import React from "react";
import { Link } from "react-router-dom";

function MoreButton({ text, direction, link }) {
  return (
    <>
      {direction === "left" ? (
        <div className="globalMoreButton left">
          <div className="circle"></div>
          <Link to={link}>{text} <span>+</span></Link>
        </div>
      ) : (
        <div className="globalMoreButton right">
          <Link to={link}><span>+</span> {text}</Link>
          <div className="circle"></div>
        </div>
      )}
    </>
  );
}

export default MoreButton;
