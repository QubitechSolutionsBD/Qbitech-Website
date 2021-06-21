import React from "react";

function Banner({ whoweareRef }) {
  const scrollToBottom = () => {
    whoweareRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="about__banner">
      <div className="circle" id="aboutcircle1"></div>
      <div className="text">
        <h1 className="desktop-view-heading">
          <div>
            <span id="aboutbannerheading">A Rajshahi-based creative team working with </span>
          </div>
          <div>
            <span id="aboutbannerheading">ambitious tech companies around the world. Every </span>
          </div>
          <div>
            <span id="aboutbannerheading">day, we are developing tech solutions that help our </span>
          </div>
          <div>
            <span id="aboutbannerheading">partners stand out, connect with customers and </span>
          </div>
          <div>
            <span id="aboutbannerheading">grow faster.</span>
          </div>
        </h1>
        <h1 className="mobile-view-heading">
          A Rajshahi-based creative team working with ambitious tech companies
          around the world. Every day, we are developing tech solutions that
          help our partners stand out, connect with customers and grow faster.
        </h1>

        <div className="scrollbtn" onClick={scrollToBottom} id="aboutscroll">
          <div className="view">
            <div>|</div>
          </div>
          <div className="txt">Get to know us</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
