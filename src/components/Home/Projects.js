import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// ASSETS
import right from "../../assets/pageservice/down-arrow.png";
import left from "../../assets/pageservice/up-arrow.png";
import MoreButton from "../Global/MoreButton";
// PROJECT THUMBNAIL IMAGES
import obothumbnail from "../../assets/pageCaseStudy/oboshor/thumbnail.webp"
import musathumbnail from "../../assets/pageCaseStudy/musafirkhana/thumbnail.webp"

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
            <Link to="/case-studies/1" className="container" id="homeprojectcard">
              <img src={obothumbnail} alt="p1"/>
              <h1>Obosor</h1>
              <div className="circle"></div>
            </Link>
          </div>
          <div className="work">
            <Link to="/case-studies/2" className="container" id="homeprojectcard">
              <img src={musathumbnail} alt="" />
              <h1>Musafirkhana</h1>
              <div className="circle"></div>
            </Link>
          </div>
          <div className="work">
            <Link to="/case-studies/1" className="container" id="homeprojectcard">
              <img src={obothumbnail} alt="p1"/>
              <h1>Obosor</h1>
              <div className="circle"></div>
            </Link>
          </div>
          <div className="work">
            <Link to="/case-studies/2" className="container" id="homeprojectcard">
              <img src={musathumbnail} alt="p1"/>
              <h1>Musafirkhana</h1>
              <div className="circle"></div>
            </Link>
          </div>
          <div className="work">
            <Link to="/case-studies/1" className="container" id="homeprojectcard">
              <img src={obothumbnail} alt="p1"/>
              <h1>Obosor</h1>
              <div className="circle"></div>
            </Link>
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
