import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
// ANIMATIONS
import { contactAnim } from "../animation/ContactAnim";
// IMAGES
// import web from "../assets/pageContact/web.png";
// import app from "../assets/pageContact/apps.png";
// import chip from "../assets/pageContact/chip.png";
// import marketing from "../assets/pageContact/marketing.png";
import arrowImg from "../assets/up-arrow.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [budget, setBudget] = useState("");
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    contactAnim();
  }, []);

  const validationCheck = () => {
    if (name && email && mobile) {
      if (mobile.length > 0 && mobile[0] === "0" && mobile[1] === "1") {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
          return true;
        } else{
          setError("Invalid Email.");
          return false;
        }
      } else {
        setError("Invalid Phone number.");
        return false;
      }
    } else {
      setError("Required all fields.");
      return false;
    }
  };

  // /////////////////////////////////////////////////////////////////////
  // HANDLE CHECK BOX
  const handleCheckBox = (field) => {
    let found = 0;
    let selectedServices = services;

    if (selectedServices.length > 0) {
      selectedServices.forEach((service) => {
        if (service === field) {
          found = 1;
        }
      });
      if (found === 0) {
        selectedServices.push(field);
      } else {
        selectedServices = selectedServices.filter((s) => s !== field);
      }
    } else {
      selectedServices.push(field);
    }
    setServices(selectedServices);
  };

  // /////////////////////////////////////////////////////////////////////
  // CLEAR ALL FIELDS
  const clearAllFields = () => {
    setError("");
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setUrl("");
    setServices([]);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      setLoading(true);
      // emailjs
      //   .sendForm(
      //     "service_iax6jgh",
      //     "template_iim055q",
      //     e.target,
      //     "user_XQffkUYrfTtC2jfhBA1Ee"
      //   )
      //   .then(
      //     () => {
      //       clearAllFields();
      //       setSuccessMessage(true);
      //       setLoading(false);
      //     },
      //     () => {
      //       setLoading(false);
      //     }
      //   );
      console.log(name);
      console.log(email);
      console.log(mobile);
      console.log(url);
      console.log(budget);
      console.log(services);
      clearAllFields();
      setSuccessMessage(true);
    }
  };

  const openMail = () => {
    window.open("mailto:qubitechsolutions@gmail.com");
  };

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
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                id="contactinputfields"
                className="input_50"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="contactinputfields"
                className="input_50"
                type="text"
                placeholder="Phone Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                id="contactinputfields"
                className="input_50"
                type="text"
                placeholder="Company URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <select
                id="contactinputfields"
                className="input_50"
                placeholder="Phone Number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="" disabled selected>
                  Budget (USD)
                </option>
                <option value="300-750">$300 - $750 </option>
                <option value="750-1500">$750 - $1,500 </option>
                <option value="1500-3500">$1,500 - $3,500 </option>
                <option value="3500-10000">$3,500 - $10,000 </option>
                <option value=">= 10,000">$10,000+ </option>
                <option value="NaN">Not Sure</option>
              </select>
            </div>
            {/* Check box */}
            <div className="container_wrapper">
              <p id="contactSecondaryText">Services you are interested in</p>
              <div className="input-container">
                <div className="input_50 checkbox" id="contactinputfields">
                  {/* <div className="logo">
                    <div><img src={web} alt="web" /></div>
                  </div> */}
                  <div className="checkBoxCont">
                    <input
                      type="checkbox"
                      value="Web Development"
                      id="web"
                      onChange={() => {
                        handleCheckBox("Web Developing");
                      }}
                    />
                    <label htmlFor="web">Web Development</label>
                  </div>
                </div>
                <div className="input_50 checkbox" id="contactinputfields">
                  {/* <div className="logo">
                    <div><img src={app} alt="app" /></div>
                  </div> */}
                  <div className="checkBoxCont">
                    <input
                      type="checkbox"
                      value="App Development"
                      id="app"
                      onChange={() => {
                        handleCheckBox("App Developing");
                      }}
                    />
                    <label htmlFor="app">App Development</label>
                  </div>
                </div>
                <div className="input_50 checkbox" id="contactinputfields">
                  {/* <div className="logo">
                    <div><img src={chip} alt="chip" /></div>
                  </div> */}
                  <div className="checkBoxCont">
                    <input
                      type="checkbox"
                      value="Hardware Development"
                      id="hardware"
                    />
                    <label htmlFor="hardware">Hardware Development</label>
                  </div>
                </div>
                <div className="input_50 checkbox" id="contactinputfields">
                  {/* <div className="logo">
                    <div><img src={marketing} alt="marketing" /></div>
                  </div> */}
                  <div className="checkBoxCont">
                    <input
                      type="checkbox"
                      value="Branding & Marketing"
                      id="branding"
                    />
                    <label htmlFor="branding">Branding & Marketing</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-container">
              <textarea
                id="contactinputfields"
                placeholder="What can we help you with?"
                rows="5"
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
                  <div id="contactbuttontext" style={{ fontWeight: "bold" }}>
                    Submit
                  </div>
                  <div className="contactbuttonicon">
                    <img src={arrowImg} alt="" />
                  </div>
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
              <p>Talaimari, Boalia, Kazla 6204</p>
              <p>Rajshahi, Bangladesh</p>
            </div>

            <div className="block" id="contactmoreinfo">
              <h2>Get in touch</h2>
              <p>+8801701027534</p>
              <p onClick={openMail} style={{ cursor: "pointer" }}>
                info@qubitechbd.com
              </p>
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
