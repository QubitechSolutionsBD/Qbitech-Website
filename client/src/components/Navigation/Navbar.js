import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  openNavigation,
  closeNavigation,
} from "../../animation/NavigationAnim";
import logo from "../../assets/qbitech.png";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  // NAVIGATION CONTROLLER
  const navigationController = () => {
    setOpenNav(!openNav);
  };

  // NAVIGATION ANIMATION
  useEffect(() => {
    if (openNav === true) {
      // Run open menu animation
      openNavigation();
    } else if(openNav === false){
      // Close Open menu animation
      closeNavigation();
    }
  }, [openNav]);

  return (
    <>
    {/* ============================================= global button ===================================== */}
      <div className="navigationbtn" onClick={navigationController}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </div>

      {/* ============================================= overlay blocks ===================================== */}
      <div className="navigationoverlay1" id="navigationoverlay1"></div>
      <div className="navigationoverlay2" id="navigationoverlay2"></div>

      {/* ============================================= navigation container ===================================== */}
      <div className="navigation" id="navigationContainer">
        {/* brand */}
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="Qbitech" id="brand" />
          </Link>
        </div>
        {/* links */}
        <div className="menu" id="navigationmenu">
          {/* links */}
          <div className="menu__links">
            <Link to="/" id="navigationmainlinks">WORK</Link>
            <Link to="/" id="navigationmainlinks">SERVICE</Link>
            <Link to="/about" id="navigationmainlinks">ABOUT</Link>
            <Link to="/" id="navigationmainlinks">WHY</Link>
            <Link to="/" id="navigationmainlinks">CONTACT</Link>
          </div>
          {/* contact links */}
          <div className="menu__contact">
            <div className="content">
              <div className="contact">
                <p id="navigationaddress">qubitechbd@gmail.com</p>
                <p id="navigationaddress">+880 1531709712</p>
              </div>
              <div className="address">
                <p id="navigationaddress">8890 Talaimari</p>
                <p id="navigationaddress">Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
