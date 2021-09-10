import React from "react";
import { Link } from "react-router-dom";

function MoreButton({ text, direction, link, back, num }) {
  return (
    <>
      {direction === "left" ? (
        <div className={`globalMoreButton left ${back}`} id={`globalMoreButton${num}`}>
          <div className="circle" id={`globalMoreCircle${num}`}></div>
          <Link to={link} id={`globalMoreText${num}`}>{text} <span>+</span></Link>
        </div>
      ) : (
        <div className={`globalMoreButton right ${back}`} id={`globalMoreButton${num}`}>
          <Link to={link} id={`globalMoreText${num}`}><span>+</span> {text}</Link>
          <div className="circle" id={`globalMoreCircle${num}`}></div>
        </div>
      )}
    </>
  );
}

export default MoreButton;
