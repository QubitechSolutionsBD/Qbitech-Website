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
            className="textInput"
            type="text"
            id="fname"
            name="name"
            placeholder="Enter your name."
          ></input>
          <label for="email">Email</label>
          <input
            className="textInput"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email."
          ></input>
          <label for="phone">Phone</label>
          <input
            className="textInput"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your Phone."
          ></input>
          <h4>Which Services are you Interested In?</h4>
          <div className="interestIn">
            <div className="ig">
              <input
                type="checkbox"
                id="solution1"
                name="solution1"
                value="Web"
              />
              <label for="solution1">Web Solution</label>
            </div>
            <div className="ig">
              <input
                type="checkbox"
                id="solution2"
                name="solution2"
                value="software"
              />
              <label for="solution2">Software Solution</label>
            </div>
            <div className="ig">
              <input
                type="checkbox"
                id="solution3"
                name="solution3"
                value="Web"
              />
              <label for="solution3">Hardware Solution</label>
            </div>
            <div className="ig2">
              <input
                type="checkbox"
                id="solution4"
                name="solution4"
                value="Web"
              />
              <label for="solution4">Branding and Marketing Solutions</label>
            </div>
          </div>
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
