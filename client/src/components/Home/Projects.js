import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
  };

  return (
    <div className="home__projects">
      <div className="projects">
        <div className="heading">
          <h2 id="homeprojectsheading">Case Studies</h2>
        </div>
        <Slider {...settings} className="slider">
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
