import React from "react";
import laptop from "../../assets/others/laptop.jpg";

function SuccessStories() {
  return (
    <div className="home__stories">
      <div className="common-heading">
        <h2>Client Success Story</h2>
      </div>

      <div className="stories">
        <div className="image">
            <img src={laptop} alt="" />
        </div>
        <div className="content">
          <h3>Quickassist</h3>
          <p>
            QuickAssist is an online mobile marketplace that meets freelance
            toil with regional demand, allowing customers to find help with
            daily tasks, including cleaning, moving, delivery and handyman work.
            Our Team at Bae Innovations has worked out their amazing experience
            platform to cater to the needs of the customers for a meaningful
            experience.
          </p>
        <button>View Project</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
