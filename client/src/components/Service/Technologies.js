import React from "react";

function Technologies({ technologies }) {
  return (
    <div className="service__technologies">
      <h1>
        <div><span id="aboutwhatwedoHeading">USED</span></div>
        <div><span id="aboutwhatwedoHeading">TECHNOLOGIES</span></div>
      </h1>

      <div className="technologies">
        {technologies.map((tech) => (
          <div className="tech">
            <img src={tech} alt="" />
          </div>
        ))}
        <div className="tech">
          <div>& more</div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
