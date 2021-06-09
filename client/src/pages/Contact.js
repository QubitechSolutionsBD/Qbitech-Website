import React from "react";
import Navbar from "../components/Navbar/Navbar";
import line from "../assets/blog-svg/Line 15.svg";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import ContactLeft from "../components/Contact/ContactLeft";
import ContactRight from "../components/Contact/ContactRight";
import LocationMap from "../components/Contact/LocationMap";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div style={{ textAlign: "center" }} className="headLines">
          <h3 className="blog__topLine">WE’D LOVE TO HEAR FROM YOU</h3>
          <h1 className="blog__topLine2">Contact Us</h1>
          <img className="blog__line" src={line} alt="" />
        </div>

        <Grid container className="contact__body">
          <Grid className="contact-left" item sm={12} lg={5}>
            <ContactLeft />
          </Grid>
          <Grid item sm={12} lg={7}>
            <Grid className="contact-right" item xs={12} sm={5}>
              <ContactRight />
            </Grid>
          </Grid>
        </Grid>
        <LocationMap />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
