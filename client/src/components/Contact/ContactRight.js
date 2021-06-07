import { Button } from "@material-ui/core";
import React from "react";

const ContactRight = () => {
  return (
    <>
      <h3>Or Make an Appointment</h3>
      <div className="contact-form">
        <form action="" className="form-layout">
          <label for="name">Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Enter your name."
          ></input>
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email."
          ></input>
          <label for="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your Phone."
          ></input>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button>SUBMIT</button>
        </form>
        
      </div>
    </>
  );
};

export default ContactRight;
