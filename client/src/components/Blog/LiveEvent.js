import React from "react";
import line71 from "../../assets/blog-svg/Line 71.svg";
const LiveEvent = ({ data }) => {
  const techLength = data.techs.length;
  return (
    <div className="liveEvent">
      <img src={data.cover} alt="" />
      <h1>{data.title}</h1>
      <div className="techs my-3">
        {data.techs.map((tech) => (
          <div className="techs__item">
            <h3
              style={{
                backgroundColor: "#4E4B66",
                textAlign: "center",
                height: "24px",
                alignContent: "center",
                paddingTop: "3px",
              }}
            >
              {tech}
            </h3>
          </div>
        ))}
      </div>

      <p>{data.details}</p>
      <div style={{ textAlign: "center" }} className="more">
        <h5>Read More</h5>
        <img className="bottomLine" src={line71} alt="" />
      </div>
    </div>
  );
};

export default LiveEvent;
