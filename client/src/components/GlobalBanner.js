import React from "react";

function GlobalBanner({ children, nextSlideRef, scrollBtnText }) {
  const scrollToBottom = () => {
    nextSlideRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="globalbanner">
      <div className="circle" id="globalBannerCircle1"></div>

      <div className="text">
        {/* heading */}
        {children}
        {/* scroll to bottom button */}
        <div className="scrollbtn" onClick={scrollToBottom} id="aboutscroll">
          <div className="view">
            <div>|</div>
          </div>
          <div className="txt">{scrollBtnText}</div>
        </div>
      </div>
    </div>
  );
}

export default GlobalBanner;
