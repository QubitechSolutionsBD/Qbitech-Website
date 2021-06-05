import React from "react";

// ASSTES
import banner from "../../assets/banner-image-2.jpg";

// DATA
const insights = [
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  {banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
  { banner: banner, text: "How we Helped a Spaning Fashion Brand With EPR Implementation"},
];

function Insights() {
  return (
    <div className="home__insights">
      <div className="common-heading">
        <h2>Get Industry Insights</h2>
      </div>

      <div className="insights">
        {insights.map((insight) => (
          <div className="insight">
            <div className="image"><img src={insight.banner} alt="" /></div>
            <div className="text"><p>{insight.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
