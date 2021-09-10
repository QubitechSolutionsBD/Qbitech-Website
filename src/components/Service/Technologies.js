import React from "react";

function Technologies({ technologies, techRef }) {
  return (
    <div className="service__technologies">
      <h1>
        <div><span id="servicetechheading">USED</span></div>
        <div><span id="servicetechheading">TECHNOLOGIES</span></div>
      </h1>

      <div className="technologies">
        {technologies.map((tech, i) => (
          <div className="tech" key={i}>
            <img src={tech} alt="" ref={element => {techRef.current[i] = element;}} />
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
