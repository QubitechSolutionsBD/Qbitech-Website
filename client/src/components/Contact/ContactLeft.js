import React from "react";
import { Grid } from "@material-ui/core";

//icons
import location from "../../assets/contact/location.png";
import mail from "../../assets/contact/mail.png";
import phone from "../../assets/contact/phone.png";
import facebook from "../../assets/social-links/facebook.png";
import instagram from "../../assets/social-links/instagram.png";
import linkedin from "../../assets/social-links/LinkedIn.png";
const ContactLeft = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} lg={12}>
          <h3>Get In Touch</h3>
          <ul>
            <li>
              {" "}
              <img src={location} alt="" /> &nbsp;&nbsp;31 Talaimari,Kazla
              ,Rajshahi
            </li>
            <li>
              <img src={phone} alt="" />
              &nbsp;&nbsp;+8801912117126
            </li>
            <li>
              <img src={mail} alt="" />
              &nbsp;&nbsp;qubitechsoltions@gmail.com
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <h3>Get In Touch</h3>
          <ul>
            <li>
              {" "}
              <img src={facebook} alt="" /> &nbsp;&nbsp;Qubitech Solutions
            </li>
            <li>
              <img src={instagram} alt="" />
              &nbsp;&nbsp;QubitechSlt
            </li>
            <li>
              <img src={linkedin} alt="" />
              &nbsp;&nbsp;Qubitech Solutions
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactLeft;
