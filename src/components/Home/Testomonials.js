import React from "react";
import Slider from "react-slick";

// ASSETS
import client1 from "../../assets/pagehome/client/client1.jpg";
import client2 from "../../assets/pagehome/client/client2.jpg";
import client3 from "../../assets/pagehome/client/client3.jpg";
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
    heading: "Delivered with Perfection",
    desc: "Qubitech Solutions have successfully visualized & delivered exactly what we were looking for on our website.  It had to be easy enough to reach out to remote startups while still being appealing enough to display to stakeholders. That's exactly what they provided us.",
    clientName: "Tasnim Binte Shawkat",
    designation: "President, Startup Rajshahi",
  },
  {
    id: 3,
    image: client3,
    heading: "Impressive",
    desc: "Qubitech impressed me by developing an Android app to our exact specifications on a tight deadline. The experience and outcomes were great from concept to creation and the full evolution phase in between. They were the ideal combination of professionalism and thoroughness. ",
    clientName: "Sabuz Monwar",
    designation: "Co-founder, Musafirkhana",
  },
  {
    id: 4,
    image: client2,
    heading: "Delivered with Perfection",
    desc: "Qubitech Solutions have successfully visualized & delivered exactly what we were looking for on our website.  It had to be easy enough to reach out to remote startups while still being appealing enough to display to stakeholders. That's exactly what they provided us.",
    clientName: "Tasnim Binte Shawkat",
    designation: "President, Startup Rajshahi",
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
