import React, { useEffect, useState } from "react";
import { works } from "../Works/Data";
import Slider from "react-slick";
import WebSlide from "./WebSlide";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "400px",
  dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        }
      }
    ]
};

function WebTemp({ id }) {
  const [data, setData] = useState(null);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    setData(works[id - 1]);
    // webTemplateAnimation();
  }, [id]);

  return (
    <>
      <div className="webtemp">
        {/* Banner */}
        <div className="webtemp__banner">
          <div className="image">
            <div className="bigCircle"></div>
            <img src={data && data.bannerImage} alt="obosor" />
          </div>
          <div className="name">
            <div className="wrapper">
              <h1>{data && data.name}</h1>
              <h2>{data && data.subName}</h2>
              <p>{data && data.ShortDescription}</p>
            </div>
          </div>
        </div>

        
        {/* Short Description */}
        <div className="firstHead">
          <h1>
            <div><span id="aboutprocesshead">Case</span></div>
            <div><span id="aboutprocesshead">Studies</span></div>
          </h1>
        </div>
        <div className="webtemp__description">
          {/* infor */}
          <div className="webInf">
            <div className="info">
              <h3>Client</h3>
              <p>Obosor</p>
            </div>
            <div className="info">
              <h3>Timeline</h3>
              <p>3 months</p>
            </div>
            <div className="info">
              <h3>Deliverables</h3>
              <p>Web E-commerce management</p>
            </div>
            <div className="info">
              <h3>Tools</h3>
              <div className="tools">
                {data &&
                  data.tools.map((tool) => (
                    <img key={tool.id} src={tool.name} alt="" />
                  ))}
              </div>
            </div>
          </div>

          {/* features */}
          <div className="webFeature">
            <h3>Features</h3>
            {/* feature */}
            {data &&
              data.features.map((feature) => (
                <div className="feature" key={feature.id}>
                  <div className="cir" id="projectculturecircle">
                    <div
                      className="cir-small"
                      id="aboutculturesmallcircle"
                    ></div>
                  </div>
                  <div>{feature.feature}</div>
                </div>
              ))}
          </div>
        </div>

        <h1>
          <div><span id="aboutprocesshead">Solutions</span></div>
          <div><span id="aboutprocesshead">& Impacts</span></div>
        </h1>
        <div className="webtemp__solution">
          <div className="solution">
            <h3>Solutions</h3>
            {data &&
              data.solutions.map((solution) => (
                <div className="feature" key={solution.id}>
                  <div className="cir" id="projectculturecircle">
                    <div
                      className="cir-small"
                      id="aboutculturesmallcircle"
                    ></div>
                  </div>
                  <div>{solution.solution}</div>
                </div>
              ))}
          </div>
          <div className="impacts">
            <h3>Impacts</h3>
            {data &&
              data.impacts.map((impact) => (
                <div className="feature" key={impact.id}>
                  <div className="cir" id="projectculturecircle">
                    <div
                      className="cir-small"
                      id="aboutculturesmallcircle"
                    ></div>
                  </div>
                  <div>{impact.impact}</div>
                </div>
              ))}
          </div>
        </div>

        
        {/* Slider */}
        <h1>
          <div><span id="aboutprocesshead">Project</span></div>
          <div><span id="aboutprocesshead">Highlights</span></div>
        </h1>
        <div className="webtemp__slides">
          <Slider {...settings} className="slider">
            {
              data && data.slides.map(slide => (
                <WebSlide id={slide.id} image={slide.slide} />
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
}

export default WebTemp;
