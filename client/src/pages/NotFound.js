import React from "react";
import { Link } from "react-router-dom";
import lost from "../assets/pagenotfound/lost.svg";
import MoreButton from "../components/Global/MoreButton";

function NotFound() {
  return (
    <div className="notfound">
      {/* image */}
      <div className="image">
        <img src={lost} alt="404" />
      </div>

      {/* text */}
      <div className="text">
        <div className="circleheading"></div>
    
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>
          We can't find the page you're looking for. Go to Home Page by clickng
          the link below.
        </p>
        <MoreButton text="Back to Home page" direction="left" link="/" back="light" num="1"  />
      </div>

      {/* circle - dotted */}
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default NotFound;
