import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arrow from "../assets/pageAbout/up-arrow.png"
import qbitech from "../assets/qbitech.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__main">
        <div className="sitemap">
          <NavLink to="/" exact={true}>HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/none">WORK</NavLink>
          <NavLink to="/none">SERVICES</NavLink>
          <NavLink to="/none">TEAM</NavLink>
          <NavLink to="/none">CONTACT</NavLink>
        </div>
        <div className="infos">
          <div className="info">
            <h3>PHONE</h3>
            <p>+880 1531 709712</p>
          </div>
          <div className="info">
            <h3>ENQURIES</h3>
            <p>qbitech@gmail.com</p>
          </div>
          <div className="info">
            <h3>ADDRESS</h3>
            <p>8890 Talaimari.</p>
            <p>Rajshahi Bangladesh</p>
          </div>
        </div>
        <div className="social-links">
          <h3>FOLLOW</h3>
          <Link to="/">LINKED IN</Link>
          <Link to="/">TWITTER</Link>
          <Link to="/">FACEBOOK</Link>
          <Link to="/">INSTAGRAM</Link>

          <div className="gotoup" onClick={scrollToTop}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="logo"><img src={qbitech} alt="Qbitech" /></div>
        <div className="copyright">
          ©️️ 2021 All right reserve to Qbitech
        </div>
      </div>

      <img src={logo} alt="" className="q" />
    </div>
  );
}

export default Footer;
