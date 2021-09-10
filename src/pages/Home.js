import React, { useState, useEffect } from "react";

// Components
import Overlay from "../components/Home/Overlay";
import HomeContainer from "../components/Home/HomeContainer";

// Animations
import { overlayAnimation, overlayAnimationMobile } from "../animation/HomeAnim";

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
    window.sessionStorage.setItem("firstLoadDone", 1);
  };

  useEffect(() => {
    if (window.innerWidth <= 480) {
      if (window.sessionStorage.getItem("firstLoadDone") == null) {
        overlayAnimationMobile(completeAnimation);
      } else {
        setAnimationComplete(true);
      }
    } else {
      if (window.sessionStorage.getItem("firstLoadDone") == null) {
        overlayAnimation(completeAnimation);
      } else {
        setAnimationComplete(true);
      }
    }
  }, []);

  return (
    <>
      {animationComplete === false ? <Overlay /> : null}
      <HomeContainer />
    </>
  );
}

export default Home;
