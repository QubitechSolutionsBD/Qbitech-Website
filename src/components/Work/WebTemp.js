import React, { useEffect, useState } from "react";
import { works } from "../Works/Data";
import GlobalPageTransition from "../Global/GlobalPageTransition";

// ANIMATIONS
// import { webTemplateAnimation } from "../../animation/WorkAnim";

function WebTemp({ id }) {
  const [data, setData] = useState(null);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    setData(works[id - 1]);
    // webTemplateAnimation();
  }, [id]);

  return (
    <>
      <GlobalPageTransition />
      <div className="webBanner">
        <div className="webBanner__banner">
          <div className="image">
            <div className="bigCircle"></div>
            <img src={data && data.bannerImage} alt="obosor" />
          </div>
          <div className="name">
            <div className="wrapper">
              <h1>{data && data.name}</h1>
              <p>{data && data.ShortDescription}</p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="webBanner__content">
          <div className="items">
            <div className="item">
              <h3>Timeline</h3>
              <p>{data && data.timeline}</p>
            </div>
            <div className="item">
              <h3>Clients</h3>
              <p>{data && data.client}</p>
            </div>
            <div className="item">
              <h3>Deliverables</h3>
              <p>
                {data &&
                  data.deliverables.map((d) => (
                    <span key={Math.random()}>{d}</span>
                  ))}
              </p>
            </div>
            <div className="item">
              <h3>Industry</h3>
              <p>{data && data.industry}</p>
            </div>
          </div>

          <div className="toolList">
            <h3>Tools</h3>
            <div className="tools">
              {data &&
                data.tools.map((tool) => (
                  <div className="tool" key={Math.random()}>
                    <img src={tool} alt="tool" />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="webBanner__images">
          <div className="heading">
            <h1>Solutions</h1>
            <p>{data && data.solutions}</p>
          </div>
          <div className="line line-1">
            {data &&
              data.desktopImages1.map((di) => (
                <img key={Math.random()} src={di} alt="" />
              ))}
          </div>
          <div className="line line-2">
            {data &&
              data.desktopImages2.map((di) => (
                <img key={Math.random()} src={di} alt="" />
              ))}
          </div>
        </div>

        <div className="webBanner__images">
          <div className="heading">
            <h1>Impacts</h1>
            <p>{data && data.solutions}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebTemp;
