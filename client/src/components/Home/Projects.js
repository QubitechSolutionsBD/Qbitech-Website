import React, { useRef } from "react";
import Slider from "react-slick";

// ASSETS
import right from "../../assets/pageservice/down-arrow.png";
import left from "../../assets/pageservice/up-arrow.png";
import MoreButton from "../Global/MoreButton";

function Projects() {
  const customSlider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 700,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home__projects">
      <div className="head">
        <h1>
          <div><span id="homeprojectsheading">Case</span></div>
          <div><span id="homeprojectsheading">Studies</span></div>
        </h1>
        <p id="homeprojectstext">
          Explore our recent selected projects and witness our full 360
          transformations come to life.
        </p>
        <MoreButton text="Explore More" direction="left" link="/case-studies" back="light" />
      </div>

      <div className="content">
        <Slider
          {...settings}
          className="slider"
          ref={(slider) => (customSlider.current = slider)}
        >
          <div className="work">
            <div className="container" id="homeprojectcard">1</div>
          </div>
          <div className="work">
            <div className="container" id="homeprojectcard">2</div>
          </div>
          <div className="work">
            <div className="container" id="homeprojectcard">3</div>
          </div>
          <div className="work">
            <div className="container" id="homeprojectcard">4</div>
          </div>
          <div className="work">
            <div className="container" id="homeprojectcard">5</div>
          </div>
        </Slider>
        <div className="slider-btn-box">
          <button onClick={() => customSlider.current.slickPrev()}>
            <img src={right} alt="" />
          </button>
          <button onClick={() => customSlider.current.slickNext()}>
            <img src={left} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
