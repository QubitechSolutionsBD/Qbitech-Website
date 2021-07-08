import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setupDataForWeb } from "../Works/Data";
import GlobalPageTransition from "../Global/GlobalPageTransition";

// ANIMATIONS
import { webTemplateAnimation } from "../../animation/WorkAnim";

function WebTemp({ id }) {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const [service, setService] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [comapnyDescHead, setCompanyDescHead] = useState("");
  const [comapnyDescText, setCompanyDescText] = useState("");
  const [imageOfapage, setImageOfapage] = useState(null);
  const [solutiondescHead, setSolutionDescHead] = useState("");
  const [solutiondescText, setSolutionDescText] = useState("");
  const [tabletImage, setTabletImage] = useState(null);
  const [mobileImage1, setMobileImage1] = useState(null);
  const [mobileImage2, setMobileImage2] = useState(null);
  const [mobileImage3, setMobileImage3] = useState(null);
  const [collapsedImage, setCollapsedImage] = useState(null);
  const [fonts, setFonts] = useState(null);
  const [colors, setColors] = useState(null);
  const [moreworks, setMoreWorks] = useState([{}, {}]);
  const [usedColors, setUsedColors] = useState([]);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    webTemplateAnimation();

    setupDataForWeb(
      id,
      setName,
      setService,
      setRoles,
      setBannerImage,
      setCompanyDescHead,
      setCompanyDescText,
      setImageOfapage,
      setSolutionDescHead,
      setSolutionDescText,
      setTabletImage,
      setMobileImage1,
      setMobileImage2,
      setMobileImage3,
      setCollapsedImage,
      setFonts,
      setColors,
      setMoreWorks,
      setUsedColors,
    );
  }, [id]);

  return (
    <>
      <GlobalPageTransition />
      {/* =========================== BANNER =========================== */}
      <div className="webBanner">
        <div className="webBanner__contentblock">
          {/* circle - for design purpose */}
          <div
            className="circle"
            style={{ background: `${usedColors[1]}` }}
            id="webTemplatebannercircle"
          ></div>
          <div className="content">
            {/* project name */}
            <h1 id="webtemplateprojectname">{name}</h1>
            {/* project service */}
            <div className="service" id="webtemplateotherblock">
              <h3>SERVICE</h3>
              <p>{service}</p>
            </div>
            {/* project - roles */}
            <div className="roles" id="webtemplateotherblock">
              <h3>ROLES</h3>
              {roles.map((role) => (
                <p>{role}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="webBanner__imageblock" id="webtemplatebannerimageblock">
          <div className="image" id="webtempbannerimage">
            <img src={bannerImage} alt="" />
          </div>
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
          <h3 id="webtempcomapny">ABOUT CLIENT</h3>
          <h1 id="webtempcomapny">{comapnyDescHead}</h1>
          <p id="webtempcomapny">{comapnyDescText}</p>
        </div>
      </div>

      {/* =========================== A PAGE =========================== */}
      <div className="apage" id="webtempapage">
        <div className="apage__overlay" id="webtempapageoverlay"></div>
        <div className="apage__image">
          <img src={imageOfapage} alt="" id="webtempapageimage" />
        </div>
      </div>

      {/* =========================== SOLUTION =========================== */}
      <div className="solution">
        <div className="textblock">
          <div className="text" id="webtempsolutioncontent">
            <h3 id="webtempsolution">Solutions</h3>
            <h1 id="webtempsolution">{solutiondescHead}</h1>
            <p id="webtempsolution">{solutiondescText}</p>
          </div>
        </div>

        <div className="imageblock">
          <div className="image" id="webtempsolutionimage">
            <div
              className="image__overlay"
              id="webtempsolutionimageoverlay"
            ></div>
            <img src={tabletImage} alt="" />
          </div>
        </div>
      </div>

      {/* =========================== MOBILE VIEWS =========================== */}
      <div className="mobileview" id="wetempmobileview">
        <div className="image" id="webtempmobiles">
          <img src={mobileImage1} alt="" />
        </div>
        <div className="image" id="webtempmobiles">
          <img src={mobileImage2} alt="" />
        </div>
        <div className="image" id="webtempmobiles">
          <img src={mobileImage3} alt="" />
        </div>
      </div>

      {/* =========================== ALL VIEWS =========================== */}
      <div
        className="allviews"
        style={{
          background: `url(${collapsedImage}) no-repeat center center / cover`,
        }}
        id="webtempallviews"
      >
        <div className="allviews__overlay" id="webtempallviewsoverlay"></div>
      </div>

      {/* =========================== FONT & COLORS =========================== */}
      <div className="fontandcolor">
        <div className="fonts">
          <img src={fonts} alt="" />
        </div>
        <div className="colors">
          <img src={colors} alt="" />
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

export default WebTemp;
