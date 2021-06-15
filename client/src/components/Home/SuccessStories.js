import React, { useState, useEffect, useRef } from "react";
import laptop from "../../assets/others/laptop.jpg";
import Slider from "react-slick";

function SuccessStories() {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    initialSlide: 1,
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    fade: true
  };

  return (
    <div className="home__stories">
      <div className="common-heading">
        <h2>Client Success Story</h2>
      </div>

      <div className="stories">
        <div className="image">
          <Slider
            {...settings1}
            className="slider"
            asNavFor={state.nav2}
            ref={(slider) => (slider1.current = slider)}
          >
            <img src={laptop} alt="" />
            <img src={laptop} alt="" />
            <img src={laptop} alt="" />
          </Slider>
        </div>

        {/* content */}
        <div className="content">
          <Slider
            className="slider"
            asNavFor={state.nav1}
            ref={(slider) => (slider2.current = slider)}
            {...settings2}
          >
            {/* container - 1 */}
            <div className="container">
              <h3>Quickassist</h3>
              <p>
                QuickAssist is an online mobile marketplace that meets freelance
                toil with regional demand, allowing customers to find help with
                daily tasks, including cleaning, moving, delivery and handyman
                work. Our Team at Bae Innovations has worked out their amazing
                experience platform to cater to the needs of the customers for a
                meaningful experience.
              </p>
              <button>View Project</button>
            </div>

            {/* container - 2 */}
            <div className="container">
              <h3>Oboshor</h3>
              <p>
                Oboshor is an online marketplace that meets freelance toil with
                regional demand, allowing customers to find help with daily
                tasks, including cleaning, moving, delivery and handyman work.
                Our Team at Bae Innovations has worked out their amazing
                experience platform to cater to the needs of the customers for a
                meaningful experience.
              </p>
              <button>View Project</button>
            </div>

            {/* container - 3 */}
            <div className="container">
              <h3>Bugify</h3>
              <p>
                Bugify is an online mobile marketplace that meets freelance toil
                with regional demand, allowing customers to find help with daily
                tasks, including cleaning, moving, delivery and handyman work.
                Our Team at Bae Innovations has worked out their amazing
                experience platform to cater to the needs of the customers for a
                meaningful experience.
              </p>
              <button>View Project</button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
