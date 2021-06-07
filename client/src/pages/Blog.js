import React from "react";
import Navbar from "../components/Navbar/Navbar";
import line from "../assets/blog-svg/Line 15.svg";
import Departments from "../components/Blog/Departments";
import LiveEvents from "../components/Blog/LiveEvents";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center" }} className="blog">
        <h3 className="blog__topLine">
          Explore The Life Events of Our Journies
        </h3>
        <h1 className="blog__topLine2">Blog</h1>
        <img className="blog__line" src={line} alt="" />
      </div>

      <Departments />
      <LiveEvents />
      <Footer />
    </>
  );
}

export default Blog;
