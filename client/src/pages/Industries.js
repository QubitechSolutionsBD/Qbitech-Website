import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { down } from "../assets/SVG";
import Helps from "../components/Industries/Helps";
import Experience from "../components/Industries/Experience";

function Industries() {
  return (
    <>
      <Navbar />
      <div className="industries">
        {/* BANNER */}
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

        {/* HOW WE CAN HELP */}
        <Helps />

        {/* Experience */}
        <Experience />
        
      </div>
      <Footer />
    </>
  );
}

export default Industries;
