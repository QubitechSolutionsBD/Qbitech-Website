import React, { useEffect } from "react";

// ASSETS & COMPONENTS
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Helps from "../components/Industries/Helps";
import Experience from "../components/Industries/Experience";
import { down } from "../assets/SVG";

function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="industries">
        {/* ============================== Banner ============================== */}
        <div className="industries__banner">
          <div className="content">
            <h1>Startups</h1>
            <p>
              Developing innovative and native mobile Apps for Android, iOS,
              BlackBerry and Windows platforms.
            </p>
            <button>Explore {down}</button>
          </div>
        </div>
        {/* ============================== How we can help ============================== */}
        <Helps />
        {/* ============================== Experience ============================== */}
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default Industries;
