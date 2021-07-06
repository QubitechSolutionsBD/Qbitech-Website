import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { setupDataForWeb } from "../Works/Data";

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
  const [moreworks, setMoreWorks] = useState([]);
  const [usedColors, setUsedColors] = useState([]);

  const overlayRef = useRef([]);
  const overlayBoxRef = useRef([]);
  const itemHead = useRef([]);

  // SETUP NECSESSARY DATA
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
      setUsedColors
    );
  }, [id]);

  console.log(moreworks);

  return (
    <>
      {/* =========================== BANNER =========================== */}
      <div className="webBanner">
        <div className="webBanner__contentblock">
          <div className="circle" style={{background: `${usedColors[1]}`}}></div>
          <div className="content">
            <h1>{name}</h1>
            <div className="service">
              <h3>SERVICE</h3>
              <p>{service}</p>
            </div>
            <div className="roles">
              <h3>ROLES</h3>
              {roles.map((role) => (
                <p>{role}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="webBanner__imageblock">
          <div className="image">
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

        <div className="content">
          <h3>ABOUT CLIENT</h3>
          <h1>{comapnyDescHead}</h1>
          <p>{comapnyDescText}</p>
        </div>
      </div>

      {/* =========================== A PAGE =========================== */}
      <div className="apage">
        <div className="image">
          <img src={imageOfapage} alt="" />
        </div>
      </div>

      {/* =========================== SOLUTION =========================== */}
      <div className="solution">
        <div className="textblock">
          <div className="text">
            <h3>Solutions</h3>
            <h1>{solutiondescHead}</h1>
            <p>{solutiondescText}</p>
          </div>
        </div>

        <div className="imageblock">
          <div className="image">
            <img src={tabletImage} alt="" />
          </div>
        </div>
      </div>

      {/* =========================== MOBILE VIEWS =========================== */}
      <div className="mobileview">
        <div className="image">
          <img src={mobileImage1} alt="" />
        </div>
        <div className="image">
          <img src={mobileImage2} alt="" />
        </div>
        <div className="image">
          <img src={mobileImage3} alt="" />
        </div>
      </div>

      {/* =========================== ALL VIEWS =========================== */}
      <div
        className="allviews"
        style={{
          background: `url(${collapsedImage}) no-repeat center center / cover`,
        }}
      ></div>

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
          {moreworks.map((work) => (
            <Link
              to={`/case-studies/${work.id}`}
              className="case-study"
              key={work.id}
            >
              <div
                className="cardoverlay"
                ref={(el) => (overlayRef.current[work.id] = el)}
              >
                <div
                  className="box"
                  ref={(el) => (overlayBoxRef.current[work.id] = el)}
                ></div>
              </div>
              <div
                className="info"
                ref={(el) => (itemHead.current[work.id] = el)}
              >
                <h2>{work.name}</h2>
                <p>{work.service}</p>
              </div>
              <div to={`/case-studies/${work.id}`} className="button">
                <div>VIEW</div>
                <div>PROJECT</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default WebTemp;
