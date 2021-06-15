import React from "react";
import Slider from "react-slick";
import bannerImage1 from "../../assets/home-banner/banner1.jpg";

// Global Styles
const globalStyle = {
  background: `url(${bannerImage1}) no-repeat center center / cover`,
};

function Banner() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    initialSlide: 1,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
  };

  // rendering jsx
  return (
    <div className="home__banner">
      <Slider {...settings} className="slider">
        <div className="content banner1">
          <h1>
            <div>We Work With Latest</div>
            <div>Technologies To Accelerate Your </div>
            <div className="bold">Digital Transformation</div>
          </h1>
        </div>

        <div className="content banner2">
          <h1>
            <div>We Work With Latest</div>
            <div>Technologies To Accelerate Your </div>
            <div className="bold">Digital Transformation</div>
          </h1>
        </div>

        <div className="content banner3">
          <h1>
            <div>We Work With Latest</div>
            <div>Technologies To Accelerate Your </div>
            <div className="bold">Digital Transformation</div>
          </h1>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
