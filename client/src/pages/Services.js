import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";

// COMPONENTS
import Navbar from "../components/Navbar/Navbar";
import Technologies from "../components/Services/Technologies";
import Industries from "../components/Home/Industries";
import Footer from "../components/Footer";

// ASSETS
import google from "../assets/tech-parteners/google.svg";
import adobe from "../assets/tech-parteners/adobe.svg";
import oddo from "../assets/tech-parteners/oddo.svg";
import oracle from "../assets/tech-parteners/oracle.svg";
import { down } from "../assets/SVG";
import { setAssetsForServices } from "../assets/Func";

function Services() {
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [heading, setHeading] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [desc, setDesc] = useState("");
  const [tools, setTools] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          rows: 3
        }
      }
    ]
  };

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setAssetsForServices(path, setServices, setHeading, setBannerImage, setBannerText, setDesc, setTools);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="services">
        {/* BANNER */}
        <div className="services__banner" style={{ background: bannerImage }}>
          <div className="content">
            <h1>{heading}</h1>
            <p>{bannerText}</p>
            <button>Explore {down}</button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="services__description">
          <p>{desc}</p>
        </div>

        {/* SERVICE */}
        <div className="services__offeredservices">
          <div className="heading">
            <h3>What we can do</h3>
            <h2>Offered Services</h2>
          </div>
          <div className="offers">
            {services.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>

        {/* USED TECHNOLOGIES */}
        <div className="services__technologies">
          <div className="common-heading">
            <h2>Techologies We Use</h2>
          </div>
          <Slider {...settings} className="slider">
            {tools.map((tool) => (
              <Technologies tech={tool} />
            ))}
          </Slider>
        </div>

        {/* INDUSTRIES */}
        <div className="services__industries">
          <Industries />
        </div>
      </div>

      {/* WORKED WITH */}
      <div className="services__wrokwith">
        <div className="common-heading">
          <h2>Who We’ve Worked WIth</h2>
        </div>
          <Slider {...settings} className="slider">
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
          </Slider>
      </div>
      <Footer />
    </>
  );
}

export default Services;
