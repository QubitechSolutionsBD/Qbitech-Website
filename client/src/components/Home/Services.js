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
    detailChangeAnim(setSelected, value, textRef, contentRef);
  };

  return (
    <div className="home__services">
      <h3 id="homeservicesmallheading">OUR SERVICES</h3>
      <div className="links">
        <h1
          className={classSelect === 0 ? "active" : ""}
          onClick={() => updateContent(0)}
        >
          <div className="headingnumber">
            <span>01</span>
          </div>
          <div className="headingtext">
            <span id="homeServiceHeading">WEB DEVELOPMENT</span>
          </div>
        </h1>
        <p id="homeservicetextformobile">
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/" id="homeservicelinkformobile">
          Learn More <span>+</span>
        </Link>

        <h1
          className={classSelect === 1 ? "active" : ""}
          onClick={() => updateContent(1)}
        >
          <div className="headingnumber">
            <span>02</span>
          </div>
          <div className="headingtext">
            <span id="homeServiceHeading">SOFTWARE DEVELOPMENT</span>
          </div>
        </h1>
        <p id="homeservicetextformobile">
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/" id="homeservicelinkformobile">
          Learn More <span>+</span>
        </Link>

        <h1
          className={classSelect === 2 ? "active" : ""}
          onClick={() => updateContent(2)}
        >
          <div className="headingnumber">
            <span>03</span>
          </div>
          <div className="headingtext">
            <span id="homeServiceHeading">HARDWARE DEVELOPMENT</span>
          </div>
        </h1>
        <p id="homeservicetextformobile">
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/" id="homeservicelinkformobile">
          Learn More <span>+</span>
        </Link>

        <h1
          className={classSelect === 3 ? "active" : ""}
          onClick={() => updateContent(3)}
        >
          <div className="headingnumber">
            <span>04</span>
          </div>
          <div className="headingtext">
            <span id="homeServiceHeading">BRANDING & MARKETING</span>
          </div>
        </h1>
        <p id="homeservicetextformobile">
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/" id="homeservicelinkformobile">
          Learn More <span>+</span>
        </Link>
      </div>

      {/* ============================================ text card ============================================ */}
      <div className="text" ref={textRef}>
        {selected === 0 ? (
          <p ref={contentRef}>
            We are constantly working to provide web solutions to various
            problems in your life. We are developing softwares, websites.
          </p>
        ) : selected === 1 ? (
          <p ref={contentRef}>
            We are constantly working to provide software solutions to various
            problems in your life. We are developing softwares, websites.
          </p>
        ) : selected === 2 ? (
          <p ref={contentRef}>
            We are constantly working to provide hardare solutions to various
            problems in your life. We are developing softwares, websites.
          </p>
        ) : (
          <p ref={contentRef}>
            We are constantly working to provide branding & marketing solutions
            to various problems in your life. We are developing softwares,
            websites.
          </p>
        )}
      </div>

      {/* ============================================ round button ============================================ */}
      {selected === 0 ? (
        <Link className="global" to="/service/web-development" id="serviceLearnButton">
          Learn More
        </Link>
      ) : selected === 1 ? (
        <Link className="global" to="/service/software-development" id="serviceLearnButton">
          Learn More
        </Link>
      ) : selected === 2 ? (
        <Link className="global" to="/service/hardware-development" id="serviceLearnButton">
          Learn More
        </Link>
      ) : (
        <Link className="global" to="/service/branding-and-marketing" id="serviceLearnButton">
          Learn More
        </Link>
      )}
    </div>
  );
}

export default Services;
