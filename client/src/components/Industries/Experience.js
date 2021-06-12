import React from "react";
import laptop from "../../assets/others/laptop2.png";

const cases = [
  {
    sl: 1,
    image: laptop,
    tags: ["TAG1", "TAG4"],
    title: "Virtual Fire Safety Training",
    serviceName: "Software Solutions",
  },
  {
    sl: 1,
    image: laptop,
    tags: ["TAG1", "TAG4"],
    title: "Virtual Fire Safety Training",
    serviceName: "Software Solutions",
  },
  {
    sl: 1,
    image: laptop,
    tags: ["TAG1", "TAG4"],
    title: "Virtual Fire Safety Training",
    serviceName: "Software Solutions",
  },
];

function Experience() {
  return (
    <div className="industries__experience">
      <div className="common-heading">
        <h2>Our Key Experiences</h2>
      </div>

      <div className="experiences">
        {cases.map((cs) => (
          <div className="experience">
            <img src={cs.image} alt="" />
            <div className="content">
              <h4>01</h4>
              <div className="tags">
                {cs.tags.map(tg => <div className="tag">{tg}</div>)}
              </div>
              <h3>{cs.title}</h3>
              <p>{cs.serviceName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
