import React from "react";
import Navbar from "../Navbar/Navbar";
const CaseStudy = ({ cd }) => {
  const cDetails = cd.details;
  console.log(cd.details);
  return (
    <>
      <Navbar />
      <div
        style={{ marginTop: "90px", display: "none" }}
        id="caseStudy"
        className="case-study"
      >
        <img src={cd.logo} alt="" />
        <p className="top-text">{cd.text}</p>
        {cDetails.map((ds) => (
          <div className="detailC">
            <h3>{ds.title}</h3>
            <p>{ds.dtext}</p>
          </div>
        ))}
        <h3
          style={{ fontSize: "26px", color: "#26BAF6", marginBottom: "80px" }}
        >
          Snaps
        </h3>
        <div className="snaps-container">
          <div className="desktopView">
            <img className="cover" src={cd.snaps.sn1} alt="" />
            <img className="body" src={cd.body} alt="" />
          </div>
          <div className="desktopView">
            <img className="cover" src={cd.snaps.sn1} alt="" />
            <img className="body" src={cd.body} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
