import React from "react";
import Testomonial from "./Testomonial";

// ASSETS
import client1 from "../../assets/client/client1.png";
import client2 from "../../assets/client/client2.png";
import client3 from "../../assets/client/client3.png";

// DATA
const allTestomonials = [
  {
    image: client1,
    heading: "Efficient Collaborating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Jane Cooper",
    designation: "CEO at ABC Corporation",
    colorChange: ""
  },
  {
    image: client2,
    heading: "Intuitive Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Eva Alexis",
    designation: "CEO at CFG Limited",
    colorChange: "colorChange"
  },
  {
    image: client3,
    heading: "Mindblowing Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    clientName: "Stive Smith",
    designation: "CEO at BCD Production",
    colorChange: ""
  },
];

function Testomonials() {
  return (
    <div className="home__testomonials">
      <div className="common-heading">
        <h2>Testimonials</h2>
        <p>We have been working with clients around the world</p>
      </div>

      <div className="testomonials">
        {allTestomonials.map((testomonial) => (
          <Testomonial testomonil={testomonial} />
        ))}
      </div>
    </div>
  );
}

export default Testomonials;
