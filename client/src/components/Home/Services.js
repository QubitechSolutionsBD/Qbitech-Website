import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { detailChangeAnim } from "../../animation/HomeAnim";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [selected, setSelected] = useState(0);
  const [classSelect, setClassSelected] = useState(0);
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(btnRef.current, 1, {
      scale: 0,
      ease: "expo.inOut",
      delay: 10,
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 70%",
      },
    });

    gsap.from(textRef.current, 1, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    gsap.from("#homeServiceHeading", 1.4, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#homeServiceHeading",
        start: "top 80%",
      },
    });

    gsap.from("#homeservicesmallheading", 1.4, {
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#homeServiceHeading",
        start: "top 60%",
      },
    });
  }, []);

  const updateContent = (value) => {
    setClassSelected(value);
    detailChangeAnim(setSelected, value, textRef, contentRef);
  }

  return (
    <div className="home__services">
      <h3 id="homeservicesmallheading">OUR SERVICES</h3>
      <div className="links">
        <h1 className={classSelect === 0 ? "active" : ""} onClick={() => updateContent(0)} >
          <div><span id="homeServiceHeading">WEB DEVELOPMENT</span></div>
        </h1>
        <p>
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/">Learn More</Link>
        
        <h1 className={classSelect === 1 ? "active" : ""} onClick={() => updateContent(1)} >
          <div>
            <span id="homeServiceHeading">SOFTWARE DEVELOPMENT</span>
          </div>
        </h1>
        <p>
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/">Learn More</Link>

        <h1 className={classSelect === 2 ? "active" : ""} onClick={() => updateContent(2)} >
          <div>
            <span id="homeServiceHeading">HARDWARE DEVELOPMENT</span>
          </div>
        </h1>
        <p>
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/">Learn More</Link>
        
        <h1 className={classSelect === 3 ? "active" : ""} onClick={() => updateContent(3)} >
          <div>
            <span id="homeServiceHeading">BRANDING & MARKETING</span>
          </div>
        </h1>
        <p>
          We are constantly working to provide digital solutions to various
          problems in your life. We are developing softwares, websites.
        </p>
        <Link to="/">Learn More</Link>
      </div>

      {/* ============================================ text card ============================================ */}
      <div className="text" ref={textRef}>
        {
          selected === 0
          ? <p ref={contentRef}>
              We are constantly working to provide web solutions to various
              problems in your life. We are developing softwares, websites.
            </p>
            : selected === 1
            ? <p ref={contentRef}>
                We are constantly working to provide software solutions to various
                problems in your life. We are developing softwares, websites.
              </p>
            : selected === 2
              ? <p ref={contentRef}>
                  We are constantly working to provide hardare solutions to various
                  problems in your life. We are developing softwares, websites.
                </p>
              : <p ref={contentRef}>
                  We are constantly working to provide branding & marketing solutions to various
                  problems in your life. We are developing softwares, websites.
                </p>
        }
      </div>

      {/* ============================================ round button ============================================ */}
      <Link className="global" to="/" id="serviceLearnButton" ref={btnRef}>
        Learn More
      </Link>
    </div>
  );
}

export default Services;
