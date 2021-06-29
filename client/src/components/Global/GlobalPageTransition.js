import React from "react";

function GlobalPageTransition() {
  return (
    <div
      id="globalpagetransition"
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        background: "#0E0428",
      }}
    ></div>
  );
}

export default GlobalPageTransition;
