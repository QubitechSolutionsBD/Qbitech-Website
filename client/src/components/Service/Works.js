import React, { useRef } from 'react';
import Slider from "react-slick";

// COMPONETS
import Work from "./Work";
import MoreButton from "../Global/MoreButton";

// ASSETS
import right from "../../assets/pageservice/down-arrow.png"
import left from "../../assets/pageservice/up-arrow.png"

function Works({works}) {
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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className="service__works">
            <div className="head">
                <h1 className="headingForDesktop">
                    <div><span>OUR</span></div>
                    <div><span>RECENT</span></div>
                    <div><span>WORKS</span></div>
                </h1>
                <h1 className="headingForMobile">
                    <div><span>OUR</span></div>
                    <div><span>RECENT WORKS</span></div>
                </h1>
                <p>
                  Explore our recent selected projects and witness our full 360
                  transformations come to life.
                </p>
                <MoreButton text="Explore More" direction="left" link="/case-studies" back="light" />
            </div>

            <div className="content">
                <Slider {...settings} className="slider" ref={(slider) => (customSlider.current = slider)}>
                    {works.map((work, i) => <Work key={i} work={work} />)}
                </Slider>
                <div className="slider-btn-box">
                    <button onClick={() => customSlider.current.slickPrev()}> <img src={right} alt="" /> </button>
                    <button onClick={() => customSlider.current.slickNext()}> <img src={left} alt="" /> </button>
                </div>
            </div>
        </div>
    )
}

export default Works
