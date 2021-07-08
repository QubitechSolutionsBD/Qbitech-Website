import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";

// ANIMATIONS
import { contactAnim } from "../animation/ContactAnim";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    contactAnim();
  }, []);

  const validationCheck = () => {
    if (name && email && mobile && message) {
      if (mobile.length > 0 && mobile[0] === "0" && mobile[1] === "1") {
        return true;
      } else {
        setError("Invalid Phone number.");
        return false;
      }
    } else {
      setError("Required all fields.");
      return false;
    }
  };

  const clearAllFields = () => {
    setError("");
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_iax6jgh",
          "template_iim055q",
          e.target,
          "user_XQffkUYrfTtC2jfhBA1Ee"
        )
        .then(
          (result) => {
            console.log(result.text);
            clearAllFields();
            setSuccessMessage(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  const openMail = () => {
    window.open('mailto:qubitechsolutions@gmail.com')
  }

  return (
    <>
      <GlobalPageTransition />
      <Navbar />
      <div className="contact">
        <div className="contact__form">
          <div className="circle" id="contactcircle"></div>
          <h1>
            <div>
              <span id="contactHeading">TELL US ABOUT</span>
            </div>
            <div>
              <span id="contactHeading">YOUR PROJECT</span>
            </div>
          </h1>

          <form onSubmit={sendMail}>
            <div className="input-container">
              <input
                id="contactinputfields"
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                id="contactinputfields"
                type="email"
                name="from_email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                id="contactinputfields"
                type="text"
                name="from_number"
                placeholder="Phone Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="input-container">
              <textarea
                id="contactinputfields"
                placeholder="Tell us about your project (scope, timeline, budget, etc)"
                rows="10"
                cols="50"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <small style={{ color: "red", marginBottom: "15px" }}>
              {error}
            </small>

            <button id="contactbutton">
              {!loading ? (
                <div className="textcontainer">
                  <div id="contactbuttontext">Submit</div>
                  <div id="contactbuttontext">+</div>
                </div>
              ) : (
                <div className="textcontainer">
                  <div id="contactbuttontext">Loading</div>
                  <div id="contactbuttontext">...</div>
                </div>
              )}
            </button>
          </form>
        </div>

        <div className="contact__design">
          <div className="more-ways">
            <h1>
              <div>
                <span id="contactHeading">More Ways</span>
              </div>
              <div>
                <span id="contactHeading">to connect</span>
              </div>
            </h1>

            <div className="block" id="contactmoreinfo">
              <h2>Come say Hey</h2>
              <p>Talaimari, Boalia</p>
              <p>Rajshahi, Bangladesh</p>
            </div>

            <div className="block" id="contactmoreinfo">
              <h2>Get in touch</h2>
              <p>PHONE: (+880) 1774254696</p>
              <p onClick={openMail} style={{cursor: "pointer"}}>EMAIL: qubitechsolutions@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div
        className={
          successMessage ? "successMessage" : "successMessage disabled"
        }
      >
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="text">Message Sent</div>
      </div>
    </>
  );
}

export default Contact;
