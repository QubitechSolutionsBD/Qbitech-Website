import React, { useEffect, useRef } from "react";

// COMPONENTS
import GlobalPageTransition from "../components/Global/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";

// ANIMATIONS
import { worksAnumation } from "../animation/WorksAnim";
import { Link } from "react-router-dom";

// ASSET
import logo from "../assets/fitnation/logo.png";
import Privacy from "../components/Fitnation/Privacy/Privacy";

function FitnationPrivacy() {
  const nextSlideRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // worksAnumation();
  }, []);

  return (
    <>
      {/* <GlobalPageTransition /> */}
      <Navbar />
      <div className="fitnation__wrapper">
        <img src={logo} alt="" />
        <h1>Privacy Policy</h1>
        <div className="fitnation__links ">
          <Link to="/fitnation">Home</Link>
          <Link to="/fitnation/privacy-policy" className="active">
            Privacy Policy
          </Link>
          <Link to="/fitnation/terms">Terms of Service</Link>
        </div>
        <div className="container">
          {" "}
          <Privacy />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FitnationPrivacy;
