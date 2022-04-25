import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { works } from "./Data";

// Animation
import { caseStudiesCardAnumation } from "../../animation/WorksAnim";

function CaseStudies({ nextSlideRef }) {
  const overlayRef = useRef([]);
  const overlayBoxRef = useRef([]);
  const itemHead = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      caseStudiesCardAnumation(overlayRef, itemHead);
    }, 1000);
  }, []);

  return (
    <div className="works__caseStudies" ref={nextSlideRef}>
      {works.map((work) => (
        <Link
          to={`/case-studies/${work.id}`}
          className="case-study"
          key={work.id}
        >
          <div className="cardoverlay" ref={(el) => (overlayRef.current[work.id] = el)}>
              <div className="box" ref={(el) => (overlayBoxRef.current[work.id] = el)}></div>
          </div>
          <img src={work.thumbnail} alt=""/>
          
          <div className="info" ref={(el) => (itemHead.current[work.id] = el)}>
            <h2>{work.name}</h2>
            <p>{work.type}</p>
          </div>

          <div to={`/case-studies/${work.id}`} className="button">
            <div>VIEW</div>
            <div>PROJECT</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CaseStudies;
