import React from "react";

// ASSETS
import rocket from "../../assets/pagehome/contributions/rocket.png";
import health from "../../assets/pagehome/contributions/healthcare.png";
import cart from "../../assets/pagehome/contributions/e-commerce.png";
import coin from "../../assets/pagehome/contributions/coin.png";
import communication from "../../assets/pagehome/contributions/communication.png";
import fintech from "../../assets/pagehome/contributions/fintech.png";
import education from "../../assets/pagehome/contributions/graduation-cap.png";
import software from "../../assets/pagehome/contributions/software.png";
import star from "../../assets/pagehome/contributions/star.png";

// DATA
const assets = [
  {
    id: 1,
    image: education,
    head: "EduTech",
    text: "Qubitech assists in interactive programs that yield higher levels of engagement to serve eLearning needs of students & institutes.",
  },
  {
    id: 2,
    image: rocket,
    head: "Startup",
    text: "Qubitech intends to foster the new, up and coming startups and businesses with digital solutions to help them achieve their goals. ",
  },
  {
    id: 3,
    image: health,
    head: "Healthcare",
    text: "We perceive modern challenges in the healthcare system & provide innovative solutions that help them set new standards in efficiency. ",
  },
  {
    id: 4,
    image: cart,
    head: "E-Commerce",
    text: "Qubitech provides compliant solutions that address the unique needs & objectives of your business.",
  },
  {
    id: 5,
    image: software,
    head: "Software",
    text: "We have a pool of experts having experience in design & drafting solutions on complex problems for ICT and software companies.",
  },
  {
    id: 6,
    image: communication,
    head: "Telecom",
    text: "Qubitech leverages its expert individuals to provide sophisticated technical solutions to the Telco industry.",
  },
  {
    id: 7,
    image: coin,
    head: "Non-Profit",
    text: "We help non profit enterprises make their approach work smarter, harder and more effectively through our services.",
  },
  {
    id: 8,
    image: star,
    head: "Miscellaneous",
    text: "We provide optimal solutions to anyone in need of our expert consultation & services for their venture.",
  },
  {
    id: 9,
    image: fintech,
    head: "Fintech",
    text: "We develop regulatory compliant fintech solutions to enterprises through scalable system integration & services.",
  },
];

function Contributions() {
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
