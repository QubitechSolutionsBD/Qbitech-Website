import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CaseStudy({id, name, type, reference}) {
  useEffect(() => {
    console.log(reference);
  }, []);

  return (
    <>
      <Link to={`/case-studies/${id}`} className="case-study" ref={reference}>
        <div className="info">
          <h2>{name}</h2>
          <p>{type}</p>
        </div>

        <Link to={`/case-studies/${id}`} className="button">
          <div>VIEW</div>
          <div>PROJECT</div>
        </Link>
      </Link>
    </>
  );
}

export default CaseStudy;
