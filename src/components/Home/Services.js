import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { detailChangeAnim } from "../../animation/HomeAnim";

function Services() {
  const [selected, setSelected] = useState(0);
  const [classSelect, setClassSelected] = useState(0);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  // update content with clicking the service button
  const updateContent = (value) => {
    setClassSelected(value);
    setTimeout(() => {
      setSelected(value);
    }, 500);
    detailChangeAnim(textRef, contentRef);
  };

  return (
    <div className="home__services">
      <h3 id="homeservicesmallheading">OUR SERVICES</h3>
      <div className="links">
        {/* -------------------- web development heading ------------------- */}
        <h1
          className={classSelect === 0 ? "active" : ""}
          onClick={() => updateContent(0)}
        >
          <div className="headingnumber"><span id="homeServiceNumber">01</span></div>
          <div className="headingtext"><span id="homeServiceHeading">WEB DEVELOPMENT</span></div>
        </h1>
        <p id="homeservicetextformobile">
          With elegant performance across every platform, our modern web
          frameworks to give your business a one-stop web solution service.
        </p>
        <Link to="/service/web-development" id="homeservicelinkformobile">Learn More <span>+</span></Link>

      {/* -------------------- software development heading ------------------- */}
        <h1
          className={classSelect === 1 ? "active" : ""}
          onClick={() => updateContent(1)}
        >
          <div className="headingnumber"><span id="homeServiceNumber">02</span></div>
          <div className="headingtext"><span id="homeServiceHeading">SOFTWARE DEVELOPMENT</span></div>
        </h1>
        <p id="homeservicetextformobile">
          Streamline your business needs through our comprehensive mobile
          software solutions service to meet the needs of modern day industry.
        </p>
        <Link to="/service/software-development" id="homeservicelinkformobile">Learn More <span>+</span></Link>

        {/* ------------------- branding & marketing heading --------------- */}
        <h1
          className={classSelect === 2 ? "active" : ""}
          onClick={() => updateContent(2)}
        >
          <div className="headingnumber"><span id="homeServiceNumber">03</span></div>
          <div className="headingtext"><span id="homeServiceHeading">BRANDING & MARKETING</span></div>
        </h1>
        <p id="homeservicetextformobile">
          Incorporate modern branding & marketing strategies to channel your
          brand in front of the right consumers through our services.
        </p>
        <Link to="/service/branding-and-marketing" id="homeservicelinkformobile">Learn More <span>+</span></Link>
      </div>

      {/* ============================================ text card ============================================ */}
      <div className="text" ref={textRef}>
        {selected === 0 ? (
          <p ref={contentRef} id="homeservicetexttextt">
            With elegant performance across every platform, our modern web
            frameworks to give your business a one-stop web solution service.
          </p>
        ) : selected === 1 ? (
          <p ref={contentRef} id="homeservicetexttextt">
            Streamline your business needs through our comprehensive mobile
            software solutions service to meet the needs of modern day industry.
          </p>
        ) : (
          <p ref={contentRef} id="homeservicetexttextt">
            Incorporate modern branding & marketing strategies to channel your
            brand in front of the right consumers through our services.
          </p>
        )}
      </div>

      {/* ============================================ round button ============================================ */}
      {classSelect === 0 ? (
        <Link
          className="global"
          to="/service/web-development"
          id="serviceLearnButton"
        >
          Learn More
        </Link>
      ) : classSelect === 1 ? (
        <Link
          className="global"
          to="/service/software-development"
          id="serviceLearnButton"
        >
          Learn More
        </Link>
      ) : classSelect === 2 ? (
        <Link
          className="global"
          to="/service/hardware-development"
          id="serviceLearnButton"
        >
          Learn More
        </Link>
      ) : (
        <Link
          className="global"
          to="/service/branding-and-marketing"
          id="serviceLearnButton"
        >
          Learn More
        </Link>
      )}
    </div>
  );
}

export default Services;
