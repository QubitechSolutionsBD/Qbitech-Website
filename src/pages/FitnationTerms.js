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
import Terms from "../components/Fitnation/Terms/Terms";

function FitnationTerms() {
  const nextSlideRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    worksAnumation();
  }, []);

  return (
    <>
      {/* <GlobalPageTransition /> */}
      <Navbar />
      <div className="fitnation__wrapper">
        <img src={logo} alt="" />
        <h1>Terms of Service</h1>
        <div className="fitnation__links ">
          <Link to="/fitnation">Home</Link>
          <Link to="/fitnation/privacy-policy">Privacy Policy</Link>
          <Link to="/fitnation/terms" className="active">
            Terms of Service
          </Link>
        </div>
        <div className="container">
          {" "}
          <Terms />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FitnationTerms;
