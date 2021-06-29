import React, { useRef } from "react";
import Slider from "react-slick";

// COMPONETS
import MoreButton from "../Global/MoreButton";

// ASSETS
import right from "../../assets/pageservice/down-arrow.png";
import left from "../../assets/pageservice/up-arrow.png";

function Works({ works, workCardRef }) {
  const customSlider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
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
    <div className="service__works">
      <div className="head" id="serviceprojectblock">
        <h1 className="headingForDesktop">
          <div><span id="serviceprojectheadd">OUR</span></div>
          <div><span id="serviceprojectheadd">RECENT</span></div>
          <div><span id="serviceprojectheadd">WORKS</span></div>
        </h1>
        
        <h1 className="headingForMobile">
          <div><span id="serviceprojectheadd">OUR</span></div>
          <div><span id="serviceprojectheadd">RECENT WORKS</span></div>
        </h1>

        <p id="serviceprojecttext">
          Explore our recent selected projects and witness our full 360
          transformations come to life.
        </p>
        <MoreButton text="Explore More" direction="left" link="/case-studies" back="light" num="2" />
      </div>

      <div className="content">
        <Slider {...settings} className="slider" ref={(slider) => (customSlider.current = slider)}>
            <div className="work">
              <div className="container" id="serviceprojectcard"></div>
            </div>
            <div className="work">
              <div className="container" id="serviceprojectcard"></div>
            </div>
            <div className="work">
              <div className="container" id="serviceprojectcard"></div>
            </div>
            <div className="work">
              <div className="container" id="serviceprojectcard"></div>
            </div>
            <div className="work">
              <div className="container" id="serviceprojectcard"></div>
            </div>
        </Slider>
        <div className="slider-btn-box">
          <button onClick={() => customSlider.current.slickPrev()}><img src={right} alt="" /></button>
          <button onClick={() => customSlider.current.slickNext()}><img src={left} alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Works;
