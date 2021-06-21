import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// REGISTER SCROLL-TRIGGER
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
  };

  // ANIMATION
  useEffect(() => {
    gsap.from("#homeprojectsheading", 1, {
      x: -30,
      opacity: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#homeprojectsheading",
        start: "top 80%",
      },
    });

    gsap.from("#homeprojectcard", 1, {
      y: "-70vh",
      ease: "expo.inOut",
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: "#homeprojectsheading",
        start: "top 80%",
      },
    });

    gsap.from("#homeprojectbutton", 1, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#homeprojectsheading",
        start: "top 40%",
      },
    });

  }, []);

  return (
    <div className="home__projects">
      <div className="projects">
        <div className="heading">
          <h2 id="homeprojectsheading">Case Studies</h2>
        </div>
        <Link to="/" className="button" id="homeprojectbutton">
          <div>JOURNEY</div> <div>THROUGH OUR</div> <div>CLIENT STORIES</div>
        </Link>
        <Slider {...settings} className="slider">
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
          <div className="project">
            <div className="container" id="homeprojectcard"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
