import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { setupDataForWeb } from "../Works/Data";
import GlobalPageTransition from "../Global/GlobalPageTransition";
import bannerImage from "../../assets/pageCaseStudy/oboshor/bannerImage.png";
import reactLogo from "../../assets/pageservice/react.png";
import nodeLogo from "../../assets/pageservice/node.png";
import reduxtLogo from "../../assets/pageservice/redux.png";
import firebaseLogo from "../../assets/pageservice/firebase.png";
import mongoLogo from "../../assets/pageservice/mongo.png";
import vscodeLogo from "../../assets/pageservice/vscode.png";

// ANIMATIONS
// import { webTemplateAnimation } from "../../animation/WorkAnim";

function WebTemp({ id }) {
  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    // webTemplateAnimation();
  }, [id]);

  return (
    <>
      <GlobalPageTransition />
      <div className="webBanner">
        <div className="webBanner__banner">
          <div className="image">
            <div className="bigCircle"></div>
            <img src={bannerImage} alt="obosor" />
          </div>
          <div className="name">
            <div className="wrapper">
              <h1>Obosor</h1>
              <p>
                an on-demand streaming service for rather unconventional movies,
                created under the umbrella of a major german television network.
                while working.
              </p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="webBanner__content">
          <div className="items">
            <div className="item">
              <h3>Timeline</h3>
              <p>July 2021</p>
            </div>
            <div className="item">
              <h3>Clients</h3>
              <p>Obosor</p>
            </div>
            <div className="item">
              <h3>Deliverables</h3>
              <p>Identity, Web, E-commerce, System, Interaction</p>
            </div>
            <div className="item">
              <h3>Industry</h3>
              <p>Mediengrupper rtl</p>
            </div>
          </div>

          <div className="toolList">
            <h3>Tools</h3>
            <div className="tools">
              <div className="tool">
                <img src={reactLogo} alt="" />
              </div>
              <div className="tool">
                <img src={reduxtLogo} alt="" />
              </div>
              <div className="tool">
                <img src={nodeLogo} alt="" />
              </div>
              <div className="tool">
                <img src={firebaseLogo} alt="" />
              </div>
              <div className="tool">
                <img src={mongoLogo} alt="" />
              </div>
              <div className="tool">
                <img src={vscodeLogo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="webBanner__solutions">
          <div className="solutions">
            Solutions
          </div>
          <div className="impacts">
            Impacts
          </div>
        </div>
      </div>
    </>
  );
}

export default WebTemp;
