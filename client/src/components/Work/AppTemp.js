import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setupDataForApp } from "../Works/Data";
import GlobalPageTransition from "../Global/GlobalPageTransition";

// ANIMATIONS
import { appTemplateAnimation } from "../../animation/WorkAnim";

function AppTemp({ id }) {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const [service, setService] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [comapnyDescHead, setCompanyDescHead] = useState("");
  const [comapnyDescText, setCompanyDescText] = useState("");
  const [solutiondescHead, setSolutionDescHead] = useState("");
  const [solutiondescText, setSolutionDescText] = useState("");
  const [features, setFeatures] = useState([]);
  const [achievementHead, setAchievementHead] = useState("");
  const [achievementText, setAchievementText] = useState("");
  const [moreworks, setMoreWorks] = useState([{}, {}]);
  const [usedColors, setUsedColors] = useState([]);

  const [imageSetOne, setImageSetOne] = useState(null);
  const [imageSetTwo, setImageSetTwo] = useState(null);
  const [imageSetThree, setImageSetThree] = useState(null);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    appTemplateAnimation();

    setupDataForApp(
      id,
      setName,
      setService,
      setRoles,
      setBannerImage,
      setCompanyDescHead,
      setCompanyDescText,
      setSolutionDescHead,
      setSolutionDescText,
      setFeatures,
      setAchievementHead,
      setAchievementText,
      setImageSetOne,
      setImageSetTwo,
      setImageSetThree,
      setMoreWorks,
      setUsedColors
    );
  }, [id]);

  return (
    <>
      <GlobalPageTransition />
      {/* =========================== BANNER =========================== */}
      <div className="appBanner">
        <div className="appBanner__contentblock">
          {/* circle - for design purpose */}
          <div
            className="circle"
            style={{ background: `${usedColors[2]}` }}
            id="appTemplatebannercircle"
          ></div>
          <div className="content">
            {/* project name */}
            <h1 id="apptemplateprojectname">{name}</h1>
            {/* project service */}
            <div className="service" id="apptemplateotherblock">
              <h3>SERVICE</h3>
              <p>{service}</p>
            </div>
            {/* project - roles */}
            <div className="roles" id="apptemplateotherblock">
              <h3>ROLES</h3>
              {roles.map((role) => (
                <p>{role}</p>
              ))}
            </div>
          </div>
        </div>
        {/* image - block */}
        <div
          className="appBanner__imageblock"
          id="apptemplatebannerimageblock"
          style={{ background: `${usedColors[1]}` }}
        >
          <div
            className="circle1"
            style={{ background: `${usedColors[0]}` }}
          ></div>
          <div className="image" id="apptempbannerimage">
            <img src={bannerImage} alt="" />
          </div>
          <div
            className="circle2"
            style={{ background: `${usedColors[0]}` }}
          ></div>
          <div
            className="circle3"
            style={{ background: `${usedColors[0]}` }}
          ></div>
        </div>
      </div>

      {/* =========================== COMAPNY DESC =========================== */}
      <div className="company">
        <div className="design__container">
          <div className="row top">
            <div
              className="smallcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="bigcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="smallcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
          </div>
          <div className="row">
            <div
              className="bigcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="bigcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="bigcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
          </div>
          <div className="row below">
            <div
              className="smallcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="bigcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
            <div
              className="smallcircle"
              id="aboutwhydesigncircles"
              style={{ border: `2px solid ${usedColors[0]}` }}
            ></div>
          </div>
        </div>

        <div className="content" id="webtempcomapnycontent">
          <h3 id="webtempcomapny">ABOUT THE APP</h3>
          <h1 id="webtempcomapny">{comapnyDescHead}</h1>
          <p id="webtempcomapny">{comapnyDescText}</p>
        </div>
      </div>

      {/* =========================== APP VIEW - 1 =========================== */}
      <div
        className="appview1"
        id="webtempapage"
        style={{ background: `${usedColors[1]}` }}
      >
        {/* <div className="appview1__overlay" id="webtempapageoverlay"></div> */}
        <div
          className="circle1"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div
          className="circle2"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div
          className="circle3"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div className="appview1__image">
          <img src={imageSetOne} alt="" id="webtempapageimage" />
        </div>
      </div>

      {/* =========================== SOLUTION =========================== */}
      <div className="appsolution">
        <div className="solutions">
          <div className="text" id="webtempsolutioncontent">
            <h3 id="webtempsolution">Solutions & FEATURES</h3>
            <h1 id="webtempsolution">{solutiondescHead}</h1>
            <p id="webtempsolution">{solutiondescText}</p>
          </div>
        </div>

        <div className="features">
          {features.map((feature) => (
            <div className="feature">
              <div
                className="circle1"
                style={{ background: `${usedColors[2]}` }}
              >
                <div
                  className="circle2"
                  style={{ background: `${usedColors[0]}` }}
                ></div>
              </div>
              <div className="text">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================== ACHIEVEMENTS =========================== */}
      <div className="appachievement">
        <div className="imageblock">
          <div className="image" id="webtempsolutionimage">
            {/* <div className="image__overlay" id="webtempsolutionimageoverlay"></div> */}
            <img src={imageSetTwo} alt="" />
          </div>
        </div>

        <div className="textblock">
          <div className="text" id="webtempsolutioncontent">
            <h3 id="webtempsolution">ACHIEVEMENT</h3>
            <h1 id="webtempsolution">{achievementHead}</h1>
            <p id="webtempsolution">{achievementText}</p>
          </div>
        </div>
      </div>

      {/* =========================== APP VIEW - 2 =========================== */}
      <div
        className="appview1"
        id="webtempapage"
        style={{ background: `${usedColors[1]}` }}
      >
        {/* <div className="appview1__overlay" id="webtempapageoverlay"></div> */}
        <div
          className="circle1"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div
          className="circle2"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div
          className="circle3"
          style={{ background: `${usedColors[0]}` }}
        ></div>
        <div className="appview2__image">
          <img src={imageSetThree} alt="" id="webtempapageimage" />
        </div>
      </div>

      {/* =========================== MORE PROJECTS =========================== */}
      <div className="more">
        <h1>MORE WORKS</h1>

        <div className="works">
          <Link to={`/case-studies/${moreworks[0].id}`} className="case-study">
            {/* overlay */}
            <div className="cardoverlay" id="moreworksoverlay">
              <div className="box"></div>
            </div>
            {/* name */}
            <div className="info" id="moreworksworkname">
              <h2>{moreworks[0].name}</h2>
              <p>{moreworks[0].service}</p>
            </div>
            {/* button */}
            <div to={`/case-studies/${moreworks[0].id}`} className="button">
              <div>VIEW</div>
              <div>PROJECT</div>
            </div>
          </Link>

          <Link to={`/case-studies/${moreworks[1].id}`} className="case-study">
            {/* overlay */}
            <div className="cardoverlay" id="moreworksoverlay">
              <div className="box"></div>
            </div>
            {/* name */}
            <div className="info" id="moreworksworkname">
              <h2>{moreworks[1].name}</h2>
              <p>{moreworks[1].service}</p>
            </div>
            {/* button */}
            <div to={`/case-studies/${moreworks[1].id}`} className="button">
              <div>VIEW</div>
              <div>PROJECT</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AppTemp;
