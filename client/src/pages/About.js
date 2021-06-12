import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

import prothomalo from "../assets/media/prothomalo.png";
import dailystar from "../assets/media/star.png";
import telegraph from "../assets/media/telegraph.png";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2500,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="about">
        {/* Heading */}
        <div className="about__heading">
          <p>
            Originality with versatile ideas for every sphere of the digital
            world!
          </p>
          <h1>About US</h1>
        </div>

        {/* Story */}
        <div className="about__story">
          <div className="common-heading">
            <h2>Our Key Experiences</h2>
          </div>
          <p>
            Pioneer Alpha is a software platform for smart cameras that are
            aware of and react to their surroundings. The AnyConnect platform
            enables the design, development, and deployment of smart cameras at
            scale. AnyConnect customers such as AT&T, AVer, Philips, and Vidyo
            have deployed millions of smart cameras and video devices based on
            the PA platform. Pioneer Alpha was founded in 2016 by a team of
            designers and developers who share a passion for connected devices,
            smart things, and computer vision. AnyConnect is based in Singapore
            with offices in Dhaka, San Francisco, Las Vegas, Macedonia, and
            Tokyo.
          </p>
          <Link to="/">Read More</Link>
        </div>

        {/* Mission */}
        <div className="about__mission">
          <div className="content">
            <div className="common-heading">
              <h2>Our Key Experiences</h2>
            </div>
            <p>
              Pioneer Alpha is a software platform for smart cameras that are
              aware of and react to their surroundings. The AnyConnect platform
              enables the design, development, and deployment of smart cameras
              at scale. AnyConnect customers such as AT&T, AVer, Philips, and
              Vidyo have deployed millions of smart camera
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="about__offeredservices">
          <div className="heading">
            <h3>What we can do</h3>
            <h2>Offered Services</h2>
          </div>
          <div className="offers">
            <p>BASIS Best Outsourcing Organization</p>
            <p>Daily Star ICT Awards</p>
            <p>BASIS Award Winner 2014</p>
            <p>Code Warrior Challange 2014</p>
            <p>HSBC Exporter of the Year 2019</p>
            <p>Kaggle-Bronze Winner 2019</p>
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="about__media">
        <div className="common-heading">
          <h2>Media</h2>
        </div>
        <div className="media">
          <Slider {...settings} className="slider">
            {Array(9)
              .fill()
              .map((_, i) => (
                <>
                  <div className="image">
                    {i % 3 === 0 ? (
                      <img src={telegraph} alt="" />
                    ) : i % 2 === 0 ? (
                      <img src={dailystar} alt="" />
                    ) : (
                      <img src={prothomalo} alt="" />
                    )}
                  </div>
                </>
              ))}
          </Slider>
        </div>
      </div>

      {/* Growth */}
      <div className="about__growth">
        <div className="common-heading">
          <h2>Company Growth</h2>
        </div>
        <div className="growth">
          <div className="text">
            <p>
              From 2006 to 2019, the company has not only grown significantly
              but also has evolved to become the leading Software Development &
              IT Service Provider company in Bangladesh. We have made it to next
              in terms of global reach and we have gained reputation in the
              course.
            </p>
          </div>
          <div className="chart"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
