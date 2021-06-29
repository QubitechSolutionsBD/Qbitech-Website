import React, { useState } from "react";
import Slider from "react-slick";
import ObservanceDetail from "./ObservanceDetail";

// OBSERVANNCE CONTENT
const dataset = [
  {
    id: 1,
    head: "Understand the needs and discover the potential of technologies",
    text: "We believe no matter what, you can't create an amazing software product without close cooperation between the Product Owner and the development team. Therefore, we see you as a crucial member of our Agile Team. That means you can expect full transparency in the project.",
  },
  {
    id: 2,
    head: "Understand the needs and discover the potential of technologies",
    text: "We believe no matter what, you can't create an amazing software product without close cooperation between the Product Owner and the development team. Therefore, we see you as a crucial member of our Agile Team. That means you can expect full transparency in the project.",
  },
  {
    id: 3,
    head: "Understand the needs and discover the potential of technologies",
    text: "We believe no matter what, you can't create an amazing software product without close cooperation between the Product Owner and the development team. Therefore, we see you as a crucial member of our Agile Team. That means you can expect full transparency in the project.",
  },
];

// OBSERVANCE FUNC
function Observance() {
  const [slideNumber, setSlideNumber] = useState(2);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1,
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
          <div><span id="observanceHeading">QBITECH?!</span></div>
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
