import React from "react";

// ASSETS
import google from "../../assets/tech-parteners/google.svg";
import adobe from "../../assets/tech-parteners/adobe.svg";
import oddo from "../../assets/tech-parteners/oddo.svg";
import oracle from "../../assets/tech-parteners/oracle.svg";
import microsoft from "../../assets/tech-parteners/microsoft.svg";

function Partners() {
  return (
    <div className="home__partners">
      <div className="common-heading">
        <h2>Technology Partners</h2>
      </div>

      <div className="partners">
          <img src={google} alt="google" />
          <img src={oddo} alt="oddo" />
          <img src={adobe} alt="Adobe" />
          <img src={oracle} alt="oracle" />
          <img src={microsoft} alt="microsoft" />
      </div>
    </div>
  );
}

export default Partners;
