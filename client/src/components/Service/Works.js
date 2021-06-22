import React, { useRef } from 'react';
import Slider from "react-slick";
import Work from "./Work";
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
                <h1>
                    <div><span>OUR</span></div>
                    <div><span>RECENT</span></div>
                    <div><span>WORKS</span></div>
                </h1>
                <p>View some of our selected recent works. View some of our selected recent works.</p>
            </div>

            <div className="content">
                <Slider {...settings} className="slider" ref={(slider) => (customSlider.current = slider)}>
                    {works.map(work => <Work work={work} />)}
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
