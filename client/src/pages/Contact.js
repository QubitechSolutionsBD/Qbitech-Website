import React, { useEffect } from "react";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/Global/GlobalPageTransition";

// ANIMATIONS
import { contactAnim } from "../animation/ContactAnim";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    contactAnim();
  }, []);

  return (
    <>
      <GlobalPageTransition />
      <Navbar />
      <div className="contact">
        <div className="contact__form">
          <div className="circle"></div>
          <h1>
            <div><span>TELL US ABOUT</span></div>
            <div><span>YOUR PROJECT</span></div>
          </h1>

          <form>
            <div className="input-container">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-container">
              <textarea
                placeholder="Tell us about your project (scope, timeline, budget, etc)"
                rows="10"
                cols="50"
              ></textarea>
            </div>

            <button>
              Submit <span>+</span>
            </button>
          </form>
        </div>

        <div className="contact__design">
          <div className="more-ways">
            <h1>
              <div>
                <span>More Ways</span>
              </div>
              <div>
                <span>to connect</span>
              </div>
            </h1>

            <div className="block">
              <h2>Come say Hey</h2>
              <p>701 Talaimari, Boalia</p>
              <p>Rajshahi, Bangladesh</p>
            </div>

            <div className="block">
              <h2>Get in touch</h2>
              <p>PHONE: (+880) 1531709712</p>
              <p>EMAIL: qubitechbd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
