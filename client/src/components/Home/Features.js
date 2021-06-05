import React from "react";
import Feature from "./Feature";

// ASSETS
import svg1 from "../../assets/short-info/user.svg"
import svg2 from "../../assets/short-info/time-circle.svg"
import svg3 from "../../assets/short-info/location.svg"
import svg4 from "../../assets/short-info/intelligent.svg"
import svg5 from "../../assets/short-info/shield.svg"

// DATA
const dataset = [
  { svg: svg1, numb: "10", desc: "Tech Parterns" },
  { svg: svg2, numb: "15", desc: "Years of Experience" },
  { svg: svg3, numb: "20", desc: "Countries Served" },
  { svg: svg4, numb: "450", desc: "IT Professionals" },
  { svg: svg5, numb: "1200", desc: "Projects Completed" },
];

function Features() {
  return (
    <div className="home__features">
      {dataset.map((data) => (
        <Feature data={data} />
      ))}
    </div>
  );
}

export default Features;
