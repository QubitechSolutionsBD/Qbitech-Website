import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ASSETS
import rocket from "../../assets/contributions/rocket.png";
import health from "../../assets/contributions/healthcare.png";
import cart from "../../assets/contributions/e-commerce.png";
import coin from "../../assets/contributions/coin.png";
import communication from "../../assets/contributions/communication.png";
import fintech from "../../assets/contributions/fintech.png";
import education from "../../assets/contributions/graduation-cap.png";
import software from "../../assets/contributions/software.png";
import star from "../../assets/contributions/star.png";

// REGISTER GSAP SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);

// DATA
const assets = [
  {
    id: 1,
    image: education,
    head: "Education",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 2,
    image: rocket,
    head: "Startup",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 3,
    image: health,
    head: "Healthcare",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 4,
    image: cart,
    head: "E-Commerce",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 5,
    image: software,
    head: "Software",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 6,
    image: communication,
    head: "Telecom",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 7,
    image: coin,
    head: "Non-Profit",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 8,
    image: star,
    head: "Miscellaneous",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
  {
    id: 9,
    image: fintech,
    head: "Fintech",
    text: "weMauris elit magna, rhoncus nec scelerisque id, dapibus nec elit. Aenean ornare blandit consectetur. dapibus nec elit.",
  },
];

function Contributions() {
  // ANIMATION
  useEffect(() => {
    gsap.from("#homecontributionhead", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 20,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#homecontributionhead",
        start: "top 80%",
      },
    });

    gsap.from("#homecontributionlogo", 0.8, {
      scale: 0,
      stagger: { amount: 0.5 },
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#homecontributions",
        start: "top 60%",
      },
    });

    gsap.from("#homecontributionname", 0.8, {
      opacity: 0,
      y: 15,
      stagger: { amount: 0.5 },
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#homecontributions",
        start: "top 50%",
      },
    });

    gsap.from("#homecontributiontext", 0.8, {
      opacity: 0,
      y: 15,
      stagger: { amount: 0.5 },
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#homecontributions",
        start: "top 45%",
      },
    });
  }, []);

  // JSX
  return (
    <div className="home__contribution">
      <h1>
        <div><span id="homecontributionhead">Our</span></div>
        <div><span id="homecontributionhead">Contributions</span></div>
      </h1>

      <div className="contributions" id="homecontributions">
        {assets.map((data) => (
          <div className="contribution" key={data.id}>
            <div className="head">
              <img src={data.image} alt="" id="homecontributionlogo"/>
              <h3 id="homecontributionname">{data.head}</h3>
            </div>
            <p id="homecontributiontext">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributions;
