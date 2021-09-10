import React from "react";
import logo from "../../assets/logo.png";

function Overlay() {
  return (
    <div className="overlay">
      <div className="block">
        <img src={logo} alt="Q" />
      </div>
    </div>
  );
}

export default Overlay;
