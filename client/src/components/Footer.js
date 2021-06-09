import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import logo from "../assets/qbitech.png";
import facebook from "../assets/social-links/facebook.png";
import twitter from "../assets/social-links/twitter.png";
import linkedin from "../assets/social-links/LinkedIn.png";
import instagram from "../assets/social-links/instagram.png";
import youtube from "../assets/social-links/youtube.png";

function Footer() {
  return (
    <>
      {/* ----------------- FOOTER MAIN PART ----------------- */}
      <div className="footer">
        <div className="footer__company">
          <img src={logo} className="logo" alt="Qbitech" />
          <p>
            House My Brand designs clothing for the young, the old & everyone in
            between – but most importantly, for the fashionable
          </p>
          <div className="social-links">
            <Link to="/">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="/">
              <img src={youtube} alt="youtube" />
            </Link>
          </div>
        </div>
        <div className="footer__shopping">
          <h3>Shopping online</h3>
          <Link to="/">Order Status</Link>
          <Link to="/">Shipping and Delivery</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Payment Options</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="footer__information">
          <h3>Information</h3>
          <Link to="/">Git Card</Link>
          <Link to="/">Find a store</Link>
          <Link to="/">Newsletter</Link>
          <Link to="/">Become a member</Link>
          <Link to="/">Site feedback</Link>
        </div>
        <div className="footer__contact">
          <h3>Contact</h3>
          <p>suppotr@gmail.com</p>
          <p>Hotline: +880 1317889812</p>
        </div>
      </div>

      {/* ----------------- BORDER PART ----------------- */}
      <div className="footer-last">
        <div className="border"></div>
        <div className="image">
          <img src={logo} alt="Qbitech" />
        </div>
      </div>

      {/* ----------------- COPYRIGHT PART ----------------- */}
      <div className="copyright">
        © 2020 Landify UI Kit. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
