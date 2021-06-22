import React, { useRef } from 'react';
import Slider from "react-slick";
import Work from "./Work";
import right from "../../assets/pageservice/down-arrow.png"
import left from "../../assets/pageservice/up-arrow.png"

function Works() {
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
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                    <Work />
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
