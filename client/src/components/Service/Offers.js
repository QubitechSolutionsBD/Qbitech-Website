import React from "react";
import { Link } from "react-router-dom";

function Offers({ nextslideRef }) {
  return (
    <div className="service__offers" ref={nextslideRef}>
      <div className="content-heading">
        <div className="heading">
          <div className="circle"></div>
          <h1>
            <div>
              <span id="aboutwhoweareHeading">WHAT</span>
            </div>
            <div>
              <span id="aboutwhoweareHeading">WE OFFER</span>
            </div>
          </h1>
        </div>
      </div>

      <div className="content-content">
        <p>
          Here at Qubitech we excel at giving you a one-stop web solution
          service to elevate your brand.{" "}
        </p>
        <p>
          Our development experts emphasize on charismatic look, intuitive
          layout, UI/UX design and a responsive environment for clear cut
          communication. Our primary focus is to elevate your brand through a
          strong online presence. We begin our service through extensive brand
          research so that we can find the perfect user experience that delivers
          your brands persona.
        </p>
        <p>
          Taking time in understanding your business needs & goals is the key to
          ensure you get the best possible user interface. Our UI/UX team makes
          sure we go forward with your users in mind. Our development process
          ensures your website is perfectly visible & user-friendly on all
          screen sizes across all platforms & devices. So that, a busy customer
          never lose to view your website on a computer with a fully responsive
          experience across all devices.
        </p>
        <p>
          Even if you have an outdated website, we can create a professional
          looking website that can redefine your online presence. You can see
          from our portfolio what our dedicated team is capable of across all
          industries.
        </p>
        <p>
          We also offer a very trusted and sophisticated, secured backend for
          you. Where you can store your data and business logic for your own
          business purpose and interact your customers.
        </p>

        <Link className="/">
          LETS TALK <span>+</span>
        </Link>
      </div>

      <div className="content-offers">
        <p>FRONTEND DEVELOPMNETT</p>
        <p>BACKEND DEVELOPMENT</p>
        <p>RESPONSIVE DEVELOPMENT</p>
        <p>WEBSITE RE-DESIGN</p>
        <p>E-COMMERCE SITE DEVELOPMENT</p>
      </div>
    </div>
  );
}

export default Offers;
