import React from "react";
import { NavLink, Link } from "react-router-dom";
// ASSETS
import arrow from "../assets/pageAbout/up-arrow.png"
import qbitech from "../assets/qbitech.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import linkedin from "../assets/footer/linkedin.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const openMail = () => {
    window.open('mailto:qubitechsolutions@gmail.com')
  }

  return (
    <div className="footer">
      <div className="footer__main">
        <div className="sitemap">
          <NavLink to="/" exact={true}>HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/case-studies">WORKS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <div className="infos">
          <div className="info">
            <h3>PHONE</h3>
            <p>(+880) 1774254696</p>
          </div>
          <div className="info">
            <h3>ENQURIES</h3>
            <p onClick={openMail} style={{cursor: "pointer"}}>qubitechsolutions @gmail.com</p>
          </div>
          <div className="info">
            <h3>ADDRESS</h3>
            <p>Talaimari, Boalia</p>
            <p>Rajshahi Bangladesh</p>
          </div>
        </div>
        <div className="social-links">
          <h3>FOLLOW</h3>
          <Link to="/"><img src={facebook} alt="Facebook" /></Link>
          <Link to="/"><img src={instagram} alt="Instgram" /></Link>
          <Link to="/"><img src={linkedin} alt="Linkedin" /></Link>

          <div className="gotoup" onClick={scrollToTop}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="logo"><img src={qbitech} alt="Qbitech" /></div>
        <div className="copyright">
          ©️️ All right reserved to Qubitech | 2021
        </div>
      </div>
    </div>
  );
}

export default Footer;
