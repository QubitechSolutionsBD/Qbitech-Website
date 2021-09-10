import React from "react";

function ObservanceDetail({ head, text }) {
  return (
    <div className="observe">
      <div className="container">
        <h3 id="observanceDetailHead">{head}</h3>
        <p id="observanceDetailText">{text}</p>
      </div>
    </div>
  );
}

export default ObservanceDetail;
