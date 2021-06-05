import React from "react";
import { NavLink } from "react-router-dom";

// components & assets
import DrawerTogglerButton from "./DrawerTogglerButton";
import logo from "../../assets/qbitech.png";

function NavForViewer(props) {
  return (
    <div className="navforviwer">
      <div className="container">
        <DrawerTogglerButton click={props.drawerToggleClickHnadler} />

        <div className="nav-items">
          <NavLink to="/" className="brand" exact={true}>
            <img src={logo} alt="Qbitech" />
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/none">Service</NavLink>
          <NavLink to="/none">Inductries</NavLink>
          <NavLink to="/none">Case Studies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>

      {/* Donation Button */}
    </div>
  );
}

export default NavForViewer;
