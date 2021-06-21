import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ASSETS
import apple from "../../assets/client/partners/apple-logo.png";
import github from "../../assets/client/partners/github.png";
import google from "../../assets/client/partners/google.png";
import microsoft from "../../assets/client/partners/windows-logo.png";
import adobe from "../../assets/client/partners/adobe.png";

// REGISTER SCROLL-TRIGGER
gsap.registerPlugin(ScrollTrigger);

function Clients() {
  // ANIMATION
  useEffect(() => {
    gsap.from("#homeclientprofile", 1, {
      scale: 0,
      ease: "expo.inOut",
      stagger: {amount: 0.5},
      scrollTrigger: {
        trigger: "#homeclientprofile",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="home__clients">
      <img src={apple} alt="apple" id="homeclientprofile" />
      <img src={github} alt="github" id="homeclientprofile" />
      <img src={google} alt="google" id="homeclientprofile" />
      <img src={microsoft} alt="microsoft" id="homeclientprofile" />
      <img src={adobe} alt="adobe" id="homeclientprofile" />
    </div>
  )
}

export default Clients
