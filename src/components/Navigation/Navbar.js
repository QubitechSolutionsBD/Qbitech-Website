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
    } else if (openNav === false) {
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
          <Link to="/about" id="navigationmainlinks">
              ABOUT
            </Link>
            <Link to="/services" id="navigationmainlinks">
              SERVICES
            </Link>
            <Link to="/case-studies" id="navigationmainlinks">
              WORKS
            </Link>
            <Link to="/contact" id="navigationmainlinks">
              CONTACT
            </Link>
          </div>
          {/* contact links */}
          <div className="menu__contact">
            <div className="content">
              <div className="contacts">
                <p id="navigationaddress">qubitechsolutions@gmail.com</p>
                <p id="navigationaddress">(+880) 1774254696</p>
              </div>
              <div className="addresses">
                <p id="navigationaddress">Talaimari, Boalia</p>
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