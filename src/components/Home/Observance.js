import React, { useState } from "react";
import Slider from "react-slick";
import ObservanceDetail from "./ObservanceDetail";

// OBSERVANNCE CONTENT
const dataset = [
  {
    id: 1,
    head: "Empowering your Brand",
    text: "We believe that modern enterprises require more than just goals & objectives. They need the proper planning to empower their brand into the market. Our team of experts ensure that your brand doesn’t miss the tiniest of details in going forward. We believe in a collaborative work environment with you.",
  },
  {
    id: 2,
    head: "Modernizing the Outdated System",
    text: "Although the world is moving on from one technology to another, we have observed that some still remain in the same old  outdated system. We believe that to keep pace with the world you need to renovate your systems accordingly. Our agile practices ensure best service & support with this intention in mind.",
  },
  {
    id: 3,
    head: "Focusing on SMEs",
    text: "Small & Mid-size Enterprises are the heart & soul of global economic development. But unfortunately they find it hard to grow due to multiple challenges. We want to help tailor these up & coming enterprises to meet the pressing needs of the modern day market.",
  },
];

// OBSERVANCE FUNC
function Observance() {
  const [slideNumber, setSlideNumber] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    speed: 700,
    autoplaySpeed: 2500,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
    afterChange: (current) => setSlideNumber(current + 1),
  };

  return (
    <div className="home__observance" id="homeobservance">
      <div className="design"></div>

      <div className="content">
        <h1>
          <div><span id="observanceHeading">WHY</span></div>
          <div><span id="observanceHeading">QUBITECH?!</span></div>
        </h1>

        <Slider {...settings} className="slider">
          {dataset.map((data) => (
            <ObservanceDetail key={data.id} head={data.head} text={data.text} />
          ))}
        </Slider>
        <div className="slide-number">
          <h2>0{slideNumber} / 03</h2>
        </div>
      </div>
    </div>
  );
}

export default Observance;
