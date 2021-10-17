import React from "react";
import { NavLink } from "react-router-dom";
// ASSETS
import arrow from "../assets/pageAbout/up-arrow.png";
import qbitech from "../assets/qubitechBd.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import linkedin from "../assets/footer/linkedin.png";
import telegram from "../assets/footer/telegram.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const openMail = () => {
    window.open("mailto:qubitechsolutions@gmail.com");
  };

  return (
    <div className="footer">
      <div className="footer__main">
        <div className="sitemap">
          <NavLink to="/" exact={true}>
            HOME
          </NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/case-studies">WORKS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <div className="infos">
          <div className="info">
            <h3>PHONE</h3>
            <p><a href="tel:+8801701027534">+8801701027534</a></p>
          </div>
          <div className="info">
            <h3>ENQURIES</h3>
            <p onClick={openMail} style={{ cursor: "pointer" }}>
              info@qubitechbd.com
            </p>
          </div>
          <div className="info">
            <h3>ADDRESS</h3>
            <p>Talaimari, Boalia, Kazla 6204</p>
            <p>Rajshahi, Bangladesh</p>
          </div>
        </div>
        <div className="social-links">
          <h3>FOLLOW</h3>
          <a href="https://www.facebook.com/qubitechbd/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="http://www.instagram.com/qubitechbd/">
            <img src={instagram} alt="Instgram" />
          </a>
          <a href="https://www.linkedin.com/company/qubitechbd">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://t.me/Qubitech_solutions">
            <img src={telegram} alt="Telegram" />
          </a>

          <div className="gotoup" onClick={scrollToTop}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="logo">
          <img src={qbitech} alt="Qbitech" />
        </div>
        <div className="copyright">
          Copyright &copy; 2021 Qubitech Solutions. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
