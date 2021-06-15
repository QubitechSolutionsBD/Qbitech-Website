import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/qbitech.png";
import { down } from "../../assets/SVG";

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
      <li><Link to="/about">About</Link></li>
        <li>
          <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={down}
          >
            <Typography className="accordion-heading">Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/services/web">Web Solutions</Link>
            <Link to="/services/software">Software Solutions</Link>
            <Link to="/services/hardware">Hardware Solutions</Link>
            <Link to="/services/marketing">Branding & Marketing</Link>
          </AccordionDetails>
        </Accordion>
        </li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/caseStudies">Case Studies</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
