import React from "react";

function GlobalBanner({ children, nextSlideRef }) {
  const scrollToBottom = () => {
    nextSlideRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="about__banner">
      <div className="circle" id="aboutcircle1"></div>

      <div className="text">
        {/* heading */}
        {children}
        {/* scroll to bottom button */}
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

export default GlobalBanner;
