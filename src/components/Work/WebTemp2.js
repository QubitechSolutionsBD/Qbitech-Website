import React, { useEffect, useState } from "react";
import { works } from "../Works/Data";
import img1 from "../../assets/pageCaseStudy/oboshor/p2.png";
import img2 from "../../assets/pageCaseStudy/oboshor/p1.png";
import img3 from "../../assets/pageCaseStudy/oboshor/p4.png";
import mob1 from "../../assets/pageCaseStudy/oboshor/mob1.png";
import mob2 from "../../assets/pageCaseStudy/oboshor/mob2.png";
import mob3 from "../../assets/pageCaseStudy/oboshor/mob3.png";
import mob4 from "../../assets/pageCaseStudy/oboshor/mob4.png";
import mob5 from "../../assets/pageCaseStudy/oboshor/mob5.png";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
};

function WebTemp2({ id }) {
  const [data, setData] = useState(null);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    setData(works[id - 1]);
    // webTemplateAnimation();
  }, [id]);

  return (
    <>
      <div className="webtemp">
        {/* Banner */}
        <div className="webtemp__banner">
          <div className="image">
            <div className="bigCircle"></div>
            <img src={data && data.bannerImage} alt="obosor" />
          </div>
          <div className="name">
            <div className="wrapper">
              <h1>{data && data.name}</h1>
              <p>{data && data.ShortDescription}</p>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="webtemp__description">
          <div className="items">
            <div className="item">
              <h5>TIMELINE</h5>
              <p>may 2021</p>
            </div>
            <div className="item">
              <h5>CLIENTS</h5>
              <p>obosor</p>
            </div>
            <div className="item">
              <h5>DELIVERABLES</h5>
              <p>
                {data &&
                  data.deliverables.map((d) => (
                    <span key={Math.random()}>{d}</span>
                  ))}
              </p>
            </div>
            <div className="item">
              <h5>BUILDS</h5>
              <p>obosor.shop</p>
            </div>
            <div className="item">
              <h5>TOOLS</h5>
              <div className="tools">
                {data &&
                  data.tools.map((tool) => (
                    <div className="tool" key={Math.random()}>
                      <img src={tool} alt="tool" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Images */}
        <div className="webtemp__images">
          <div className="image1">
            <img src={img1} alt="" />
          </div>
          <div className="image2">
            <img className="img1" src={img2} alt="" />
            <img className="img2" src={img3} alt="" />
          </div>
        </div>

        {/* Solutions */}
        <div className="webtemp__solutions">
          <div className="heading">
            <div className="circle" id="studysolutioncircle"></div>
            <h1>
              <div><span id="studysolutionehead">OUR</span></div>
              <div><span id="studysolutionehead">SOLUTIONS</span></div>
            </h1>
          </div>
          <div className="content">
            <p>
              In the experience, we imagine a future where entire cities will be
              powered by sustainable energy sources — sound being one of them.
              Accordingly, visitors to our site are asked to generate
              electricity with their voices — and having made some noise, they
              are informed of how many lights they’d managed to power. Finally,
              they are invited to use their digital voice to raise awareness via
              social media.
            </p>
            <p>
              In the experience, we imagine a future where entire cities will be
              powered by sustainable energy sources — sound being one of them.
              Accordingly, visitors to our site are asked to generate
              electricity with their voices.
            </p>
          </div>
        </div>

        {/* 3 Images */}
        <div className="webtemp__images">
          <div className="image3">
            <img src={img1} alt="" />
          </div>
          <div className="image4">
            <img className="img1" src={img2} alt="" />
            <img className="img2" src={img3} alt="" />
          </div>
        </div>

        {/* Imapcts */}
        <div className="webtemp__solutions">
          <div className="heading">
            <div className="circle" id="studysolutioncircle"></div>
            <h1>
              <div>
                <span id="studysolutionehead">IMPACTS</span>
              </div>
            </h1>
          </div>
          <div className="content">
            <p>
              In the experience, we imagine a future where entire cities will be
              powered by sustainable energy sources — sound being one of them.
              Accordingly, visitors to our site are asked to generate
              electricity with their voices — and having made some noise, they
              are informed of how many lights they’d managed to power. Finally,
              they are invited to use their digital voice to raise awareness via
              social media.
            </p>
            <p>
              In the experience, we imagine a future where entire cities will be
              powered by sustainable energy sources — sound being one of them.
              Accordingly, visitors to our site are asked to generate
              electricity with their voices.
            </p>
          </div>
        </div>

        {/* Mobile view */}
        <div className="webtemp__mobiles">
          <div className="layer"></div>
          <div className="slider">
            <Slider {...settings}>
              <div className="mobile">
                <div className="device">
                  <img src={mob1} alt="" />
                </div>
              </div>
              <div className="mobile">
                <div className="device">
                    <img src={mob2} alt="" />
                </div>
              </div>
              <div className="mobile">
                <div className="device">
                    <img src={mob3} alt="" />
                </div>
              </div>
              <div className="mobile">
                <div className="device">
                    <img src={mob4} alt="" />
                </div>
              </div>
              <div className="mobile">
                <div className="device">
                    <img src={mob5} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebTemp2;
