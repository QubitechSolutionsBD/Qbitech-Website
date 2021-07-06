import React from "react";
import Slider from "react-slick";

// ASSETS
import client1 from "../../assets/pagehome/client/client1.png";
import client2 from "../../assets/pagehome/client/client2.png";
import client3 from "../../assets/pagehome/client/client3.png";
import quoto from "../../assets/pagehome/client/quoto.png";

// DATA
const allTestomonials = [
  {
    id: 1,
    image: client1,
    heading: "Efficient Collaborating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Jane Cooper",
    designation: "CEO at ABC Corporation",
  },
  {
    id: 2,
    image: client2,
    heading: "Intuitive Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Eva Alexis",
    designation: "CEO at CFG Limited",
  },
  {
    id: 3,
    image: client3,
    heading: "Mindblowing Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Stive Smith",
    designation: "CEO at BCD Production",
  },
  {
    id: 4,
    image: client2,
    heading: "Intuitive Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Eva Alexis",
    designation: "CEO at CFG Limited",
  },
];

function Testomonials() {
  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home__testomonials">
      <h1>
        <div><span id="hometestomonialheading">CLIENTS</span></div>
        <div><span id="hometestomonialheading">TESTOMONIALS</span></div>
      </h1>
      <img className="quoto" src={quoto} alt="" />

      <Slider {...settings} className="slider">
        {allTestomonials.map((testomonil) => (
          <div className="testomonial" key={testomonil.id}>
            <div className="block" id="hometesmonialcard">
              {/* client */}
              <div className="client">
                <div className="image">
                  <img src={testomonil.image} alt="" />
                </div>
                <div className="info">
                  <h3>{testomonil.clientName}</h3>
                  <p>{testomonil.designation}</p>
                </div>
              </div>

              {/* text */}
              <div className="text">
                <h2>{testomonil.heading}</h2>
                <p>{testomonil.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testomonials;
