import React from "react";
import { Link } from "react-router-dom";

function CaseStudy({id, name, type}) {
  return (
    <>
      <Link to="/case-studies/2" className="case-study">
        <div className="info">
          <h2>{name}</h2>
          <p>{type}</p>
        </div>

        <Link to="/case-studies/2" className="button">
          <div>VIEW</div>
          <div>PROJECT</div>
        </Link>
      </Link>
    </>
  );
}

export default CaseStudy;
