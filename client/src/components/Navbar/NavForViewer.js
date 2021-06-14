import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { down } from "../../assets/SVG";

// components & assets
import DrawerTogglerButton from "./DrawerTogglerButton";
import logo from "../../assets/qbitech.png";
import app from "../../assets/services/options/app.svg";
import web from "../../assets/services/options/web.svg";
import hardware from "../../assets/services/options/hardware.svg";
import marketing from "../../assets/services/options/marketing.svg";

function NavForViewer(props) {
  const [openServices, setOpenService] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);

  return (
    <div className="navforviwer">
      <div className="container">
        <DrawerTogglerButton click={props.drawerToggleClickHnadler} />

        <div className="banner">
          <NavLink to="/" className="brand" exact={true}>
            <img src={logo} alt="Qbitech" />
          </NavLink>
        </div>

        <ul className="nav-items">
          <li><NavLink to="/about">About</NavLink></li>
          
          {/* ------------------------ dropdown --------------- */}
          <li className="dropdown">
            <p>Services{down}</p>
            <div className="dropdown-menu">
              <NavLink to="/services/web"><h3><img src={web} alt="" /> Web Solutions</h3></NavLink>
              <NavLink to="/services/software"><h3><img src={app} alt="" /> Software Solutions</h3></NavLink>
              <NavLink to="/services/hardware"><h3><img src={hardware} alt="" />Hardware Solutions</h3></NavLink>
              <NavLink to="/services/marketing"><h3><img src={marketing} alt="" />Branding & Marketing Solutions</h3></NavLink>
            </div>
          </li>

          <li><NavLink to="/industries">Industries {down}</NavLink></li>
          <li><NavLink to="/caseStudies">Case Studies</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact" className="contact">Contact Us {"  "} &#8594; </NavLink></li>
        </ul>
      </div>

      {/* Donation Button */}
    </div>
  );
}

export default NavForViewer;
