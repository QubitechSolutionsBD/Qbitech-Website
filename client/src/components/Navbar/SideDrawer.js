import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/qbitech.png";

const SideDrawer = (props) => {
  // handle drawer class
  let drawerClass = "side__drawer";
  if (props.show) { drawerClass = "side__drawer open"; }

  return (
    <nav className={drawerClass}>
      <Link className="navbar-brand big-navbar-brand" to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Service</Link></li>
        <li><Link to="/">Inductries</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
