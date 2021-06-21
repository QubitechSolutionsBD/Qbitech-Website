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
