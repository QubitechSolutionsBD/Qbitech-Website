import React from "react";
import Slider from "react-slick";

// ASSETS
import client1 from "../../assets/pagehome/client/happyClients/1.png";
import client2 from "../../assets/pagehome/client/client2.png";
import client3 from "../../assets/pagehome/client/client3.png";
import quoto from "../../assets/pagehome/client/quoto.png";

// DATA
const allTestomonials = [
  {
    id: 1,
    image: client1,
    heading: "They are sincere in keeping their commitments.",
    desc: "It has been a great experience to work with Qubitech. The best thing about them is they care about the client needs the most. They are very passionate about their work and very sincere in keeping their commitments.",
    clientName: "ABM Iftekhar Ahmed",
    designation: "Co-founder, Obosor",
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
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
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
