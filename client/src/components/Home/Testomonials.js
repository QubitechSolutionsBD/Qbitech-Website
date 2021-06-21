import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Slider from "react-slick";

// ASSETS
import client1 from "../../assets/client/client1.png";
import client2 from "../../assets/client/client2.png";
import client3 from "../../assets/client/client3.png";
import quoto from "../../assets/client/quoto.png";

// REGISTER SCROLL-TRIGGER
gsap.registerPlugin(ScrollTrigger);

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
];

function Testomonials() {
  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
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
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  // ANIMATIONS
  useEffect(() => {
    gsap.from("#hometestomonialheading", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#hometestomonialheading",
        start: "top 80%",
      },
    });

    gsap.from("#hometesmonialcard", 1.3, {
      y: "-50vh",
      ease: "power4.out",
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: "#hometestomonialheading",
        start: "top 50%",
      },
    });
  }, []);

  return (
    <div className="home__testomonials">
      <h1>
        <div><span id="hometestomonialheading">CLIENTS</span></div>
        <div><span id="hometestomonialheading">TESTOMONIALS</span></div>
      </h1>
      <img className="quoto" src={quoto} alt="" />

      <Slider {...settings} className="slider">
        {allTestomonials.map((testomonil) => (
          // <Testomonial testomonil={t} key={t.id} />
          <div className="testomonial">
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
