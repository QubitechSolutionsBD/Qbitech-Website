import React from "react";
import Navbar from "../components/Navbar/Navbar";
import line from "../assets/blog-svg/Line 15.svg";
import cover from "../assets/case-studies/Cover.png";
import body from "../assets/case-studies/Body.svg";
const CaseStudies = () => {
  const cases = [
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="caseStudies">
        <div style={{ textAlign: "center" }} className="blog">
          <h3 className="blog__topLine">
            Originality with versatile ideas for every sphere of the digital
            world!
          </h3>
          <h1 className="blog__topLine2">Case Studies</h1>
          <img className="blog__line" src={line} alt="" />
        </div>
        <div className="caseStudies__cases">
          {cases.map((cs) => (
            <div className="case">
              <img className="cover" src={cover} alt="" />
              <img className="body" src={body} alt="" />
              <h1>01</h1>
              <hr />
              <h2>TAG1,TAG4</h2>

              <h3>{cs.title}</h3>
              <h4>{cs.serviceName}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
