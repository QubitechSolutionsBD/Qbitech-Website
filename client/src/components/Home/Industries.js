import React from "react";

// ASSETS
import svg1 from "../../assets/industries-we-serve/misc.svg";
import svg2 from "../../assets/industries-we-serve/healthcare.svg";
import svg3 from "../../assets/industries-we-serve/network.svg";
import svg4 from "../../assets/industries-we-serve/ecart.svg";
import svg5 from "../../assets/industries-we-serve/software.svg";
import svg6 from "../../assets/industries-we-serve/nonprofit.svg";
import svg7 from "../../assets/industries-we-serve/rocket.svg";
import svg8 from "../../assets/industries-we-serve/education.svg";
import svg9 from "../../assets/industries-we-serve/cart.svg";
import svg10 from "../../assets/industries-we-serve/fintech.svg";

// DATA
const serve = [
  { svg: svg1, text: "Fintech" },
  { svg: svg2, text: "Health Care" },
  { svg: svg3, text: "Telecom" },
  { svg: svg4, text: "E-Com" },
  { svg: svg5, text: "Software" },
  { svg: svg6, text: "Non-Profit" },
  { svg: svg7, text: "Startup" },
  { svg: svg8, text: "Education" },
  { svg: svg9, text: "Retail" },
  { svg: svg10, text: "Miscellaneous" },
];

function Industries() {
  return (
    <div className="home__industries">
      <div className="common-heading">
        <h2>Industries we serve</h2>
      </div>

      <div className="servefor">
        {serve.map((s) => (
          <div className="serve">
            <img src={s.svg} alt="logo" />
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
