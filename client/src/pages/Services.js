import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";

// COMPONENTS
import Navbar from "../components/Navbar/Navbar";
import Technologies from "../components/Services/Technologies";
import Industries from "../components/Home/Industries";
import Footer from "../components/Footer";

// ASSETS
import web from "../assets/services/banner/web.jpg";
import software from "../assets/services/banner/software.jpg";
import hardware from "../assets/services/banner/hardware.jpg";
import branding from "../assets/services/banner/branding.jpg";
import java from "../assets/services/tools/java.svg";
import react from "../assets/services/tools/react.svg";
import swift from "../assets/services/tools/swift.svg";
import objectivec from "../assets/services/tools/objectivec.svg";
import google from "../assets/tech-parteners/google.svg";
import adobe from "../assets/tech-parteners/adobe.svg";
import oddo from "../assets/tech-parteners/oddo.svg";
import oracle from "../assets/tech-parteners/oracle.svg";
import { down } from "../assets/SVG";

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
  };

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    if (path === "web") {
      setHeading("Website Solutions");
      setBannerText(
        "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms."
      );
      setDesc(
        "With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games."
      );
      setBannerImage(
        `linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${web}) no-repeat center center / cover`
      );
      setServices([
        "Website Development",
        "Web Application Development",
        "Website Design & Redisgn",
        "E-commerce site development",
      ]);
      setTools([
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
      ]);
    } else if (path === "software") {
      setHeading("Software Solutions");
      setBannerText(
        "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms."
      );
      setDesc(
        "With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games."
      );
      setBannerImage(
        `linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${software}) no-repeat center center / cover`
      );
      setServices([
        "iOS App Development",
        "Android App Development",
        "Digital Service UX Research",
        "Digital Service UI Design",
        "Native and Cross Platform Service Design",
        "Product Prototyping",
        "Unitiy Game Development",
        "Product Gamification",
      ]);
      setTools([
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
      ]);
    } else if (path === "hardware") {
      setHeading("Hardware Solutions");
      setBannerText(
        "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms."
      );
      setDesc(
        "With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games."
      );
      setBannerImage(
        `linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${hardware}) no-repeat center center / cover`
      );
      setServices([
        "Product/Idea Prototyping",
        "IoT Based Monitoring System",
        "IoT Based automation System",
      ]);
      setTools([
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
      ]);
    } else {
      setHeading("Branding and Marketing Solutions");
      setBannerText(
        "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms."
      );
      setDesc(
        "With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games."
      );
      setBannerImage(
        `linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${branding}) no-repeat center center / cover`
      );
      setServices([
        "Building a Brand Identity From the Ground Up",
        "Rebranding Established Business",
        "Establishing Brand Positioning and Messaging",
        "Creating a Brand Identity,Strategy and Guidelines",
        "Mapping Out a Social Media Strategy",
        "Writing Copy for Websites and Other Digital Assets",
      ]);
      setTools([
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
        java,
        react,
        swift,
        objectivec,
      ]);
    }
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
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
            <div className="works"><img src={oddo} alt="oddo" /></div>
            <div className="works"><img src={adobe} alt="Adobe" /></div>
            <div className="works"><img src={oracle} alt="oracle" /></div>
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
