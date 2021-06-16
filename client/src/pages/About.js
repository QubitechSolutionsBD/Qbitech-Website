import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// COMPONENTS
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Barchart from "../components/About/Barchart";
import Accrodion from "../components/Accrodion";

// ASSETS
import prothomalo from "../assets/media/prothomalo.png";
import dailystar from "../assets/media/star.png";
import telegraph from "../assets/media/telegraph.png";

// DATA FOR ABOUT PAGE
import { settings, rewards } from "../components/About/Data";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="about">
        {/* ============================== Heading ============================== */}
        <div className="about__heading">
          <p>
            Originality with versatile ideas for every sphere of the digital
            world!
          </p>
          <h1>About US</h1>
        </div>

        {/* ============================== Story ============================== */}
        <div className="about__story">
          <div className="common-heading">
            <h2>Our Story</h2>
          </div>
          <p>
            Qubitech is formed around a young group of entrepreneurs with the
            desire to streamline modern day developing practices in the
            industry. Our interest in the software development sector is not
            new. We have been involved in multitude of projects since the start
            of our university days. We all have felt that our country is still
            running on the obsolete software systems that has been rendered
            useless in the ever-changing digital world. We want to introduce an
            agile process to the industry ensuring the best quality service in
            the quickest of time.
          </p>
          <Link to="/">Read More</Link>
        </div>

        {/* ============================== Mission ============================== */}
        <div className="about__mission">
          <div className="content">
            <div className="common-heading">
              <h2>Our Mission</h2>
            </div>
            <p>
              Developing modern-day solutions to your business needs. and
              explore every possible path, to achieve ffficiency. We are here to
              Empower your venture to help you grow.
            </p>
          </div>
        </div>

        {/* ============================== Services ============================== */}
        <div className="about__offeredservices">
          <div className="heading">
            <h3>Awards And</h3>
            <h2>Recognition</h2>
          </div>
          <div className="offers">
            <Accrodion DATA={rewards} />
          </div>
        </div>
      </div>

      {/* ============================== Media ============================== */}
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

      {/* ============================== Growth ============================== */}
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
          <div className="chart">
            <Barchart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
