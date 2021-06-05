import React from "react";

// ASSTES
import cocacola from "../../assets/key-client-portfolio/cocacola.png";
import github from "../../assets/key-client-portfolio/github.png";
import apple from "../../assets/key-client-portfolio/apple.png";
import lg from "../../assets/key-client-portfolio/lg.png";

function Clients() {
  return (
    <div className="home__clients">
      <div className="common-heading">
        <h2>Key Client Portfolio</h2>
      </div>

      <div className="clients">
        <div><img src={cocacola} alt="cocacola" /></div>
        <div><img src={apple} alt="apple" /></div>
        <div><img src={lg} alt="LG" /></div>
        <div><img src={github} alt="github" /></div>
        <div><img src={lg} alt="LG" /></div>
        <div><img src={github} alt="github" /></div>
        <div><img src={cocacola} alt="cocacola" /></div>
        <div><img src={apple} alt="apple" /></div>
        <div><img src={cocacola} alt="cocacola" /></div>
        <div><img src={apple} alt="apple" /></div>
        <div><img src={lg} alt="LG" /></div>
        <div><img src={github} alt="github" /></div>
      </div>
    </div>
  );
}

export default Clients;
