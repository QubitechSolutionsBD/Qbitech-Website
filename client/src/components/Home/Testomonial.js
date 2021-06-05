import React from "react";

function Testomonial({ testomonil }) {
  return (
    <div className="testomonial">
      <div className={`text ${testomonil.colorChange}`}>
        <div className="content">
          <h4>{testomonil.heading}</h4>
          <p>{testomonil.desc}</p>
        </div>
      </div>
      <div className="client">
        <img src={testomonil.image} alt="client" />
        <p className="name">{testomonil.clientName}</p>
        <p>{testomonil.designation}</p>
      </div>
    </div>
  );
}

export default Testomonial;
