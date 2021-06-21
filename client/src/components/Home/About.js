import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Circle from "../Circle";

// REGISTER SCROLL-TRIGGER
gsap.registerPlugin(ScrollTrigger);

function About() {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.from(circleRef.current, 1, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#aboutHeading",
        start: "top 80%",
      },
    });

    gsap.from("#aboutHeading", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutHeading",
        start: "top 80%",
      },
    });

    gsap.from("#abouttext", 1.3, {
      y: 200,
      ease: "power4.out",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#abouttext",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="home__about">
      <div className="heading">
        <Circle circleRef={circleRef} />
        <h3>
          <div><span id="aboutHeading">We are building</span></div>
          <div><span id="aboutHeading">the tech solutions from</span></div>
        </h3>
        <h1 className="primary-heading">
          <div><span id="aboutHeading">2020</span></div>
          <div><span id="aboutHeading">to</span></div>
          <div><span id="aboutHeading">2XXX</span></div>
        </h1>
      </div>
      <div className="text">
        <div className="text-content">
          <p id="abouttext">
            The journey to Quebitec Solutions BD started in 2021 with a bunch of
            young creative, exploratory, strategic people. We are constantly
            working to provide digital solutions to various problems in your
            life. We are developing softwares, websites and hardare as well as
            we provide reliable branding and marketing solutions for your
            company.
          </p>
        </div>
        <div className="text-content">
          <p id="abouttext">
            We believe no matter what, you can't create an amazing software
            product without close cooperation between the Product Owner and the
            development team. Therefore, we see you as a crucial member of our
            Agile Team. That means you can expect full transparency in the
            project. As a Product Owner, you are always updated about the status
            of the development and have full control over the product.
          </p>
        </div>
        <div className="text-content">
          <p id="abouttext">
            True transformation is rooted in our structured and proven strategy.
            We know how it works, and we’ll get you there. So, come to us and
            lets make a new era.
          </p>
        </div>
        <div className="text-content">
          <Link to="/about" id="abouttext">LEARN MORE +</Link>
        </div>
      </div>
    </div>
  );
}

export default About;