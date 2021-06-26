import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ///////////////////////////////////////////////////////////
// OVERLAY ANIMATION FOR DESKTOP
export const overlayAnimation = (completeAnimation) => {
  let tl = gsap.timeline();
  tl.to(".overlay .block", 1, { scale: 13, ease: "expo.inOut" })
    .to(
      ".overlay .block img",
      0.7,
      {
        scale: window.innerWidth > 1366 ? 0.778 : 0.624,
        ease: "expo.inOut",
      },
      "<"
    )
    .to(" .overlay .block img", 1, {
      x: window.innerWidth > 1366 ? 37.6 : 28.8,
      ease: "expo.inOut",
    })
    .to(".overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

// ///////////////////////////////////////////////////////////
// OVERLAY ANIMATION FOR MOBILE DEVICES
export const overlayAnimationMobile = (completeAnimation) => {
  let tl = gsap.timeline();
  tl.to(".overlay .block img", 0.6, { opacity: 0, delay: 1.2 })
    .to(".overlay .block", 1.2, {
      css: { borderRadius: 0, width: "100vw", height: "100vh" },
      ease: "expo.inOut",
    })
    .to(".overlay", 0, { css: { display: "block" } })
    .to(".overlay", 0.3, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

// ///////////////////////////////////////////////////////////
// HOME ANIMATION
export const homeAnimation = () => {
  let tl = gsap.timeline();

  tl.from(".line span", 1.3, {
    y: 100,
    ease: "power4.out",
    delay: 1.7,
    skewY: 7,
    stagger: { amount: 0.3 },
  });

  // ----------- services anim
  gsap.from("#serviceLearnButton", 1, {
    scale: 0,
    ease: "expo.inOut",
    delay: 0.7,
    scrollTrigger: {
      trigger: "#serviceLearnButton",
      start: "top 70%",
    },
  });
  gsap.from("#homepageservicetext", 1, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homepageservicetext",
      start: "top 80%",
    },
  });
  gsap.from("#homeServiceNumber", 1, {
    x: -100,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeServiceHeading",
      start: "top 80%",
    },
  });
  gsap.from("#homeServiceHeading", 1.4, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeServiceHeading",
      start: "top 80%",
    },
  });
  gsap.from("#homeservicetexttextt", 1, {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeServiceHeading",
      start: "top 70%",
    },
  });
  gsap.from("#homeservicesmallheading", 1.4, {
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#homeServiceHeading",
      start: "top 60%",
    },
  });
  gsap.from("#homeservicetextformobile", 1.4, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeservicetextformobile",
      start: "top 80%",
    },
  });
  gsap.from("#homeservicelinkformobile", 1.4, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeservicetextformobile",
      start: "top 80%",
    },
  });

  // ----------- contributions anim
  gsap.from("#homecontributionhead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 20,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homecontributionhead",
      start: "top 80%",
    },
  });
  gsap.from("#homecontributionlogo", 0.8, {
    scale: 0,
    stagger: { amount: 0.5 },
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homecontributions",
      start: "top 60%",
    },
  });
  gsap.from("#homecontributionname", 0.8, {
    opacity: 0,
    y: 15,
    stagger: { amount: 0.5 },
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homecontributions",
      start: "top 55%",
    },
  });
  gsap.from("#homecontributiontext", 0.8, {
    opacity: 0,
    y: 15,
    stagger: { amount: 0.5 },
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homecontributions",
      start: "top 50%",
    },
  });

  // ----------- why anim
  gsap.from("#observanceHeading", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#homeobservance",
      start: "top 65%",
    },
  });

  // ----------- testomonial anim
  gsap.from("#hometestomonialheading", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#hometestomonialheading",
      start: "top 80%",
    },
  });
  gsap.from("#hometesmonialcard", 1.3, {
    y: "-50vh",
    ease: "power4.out",
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: "#hometestomonialheading",
      start: "top 50%",
    },
  });

  // ----------- client anim
  gsap.from("#homeclientprofile", 1, {
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#homeclientprofile",
      start: "top 80%",
    },
  });

  // ----------- project anim
  gsap.from("#homeprojectsheading", 1, {
    x: -30,
    opacity: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homeprojectsheading",
      start: "top 80%",
    },
  });
  gsap.from("#homeprojectcard", 1, {
    y: "-70vh",
    ease: "expo.inOut",
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: "#homeprojectsheading",
      start: "top 80%",
    },
  });
  gsap.from("#homeprojectbutton", 1, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#homeprojectsheading",
      start: "top 40%",
    },
  });


  // ----------- about part (not used yet) ⚠️
  gsap.from("#homeaboutcircle", 1, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#aboutHeading",
      start: "top 80%",
    },
  });
  gsap.from("#aboutHeading", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutHeading",
      start: "top 80%",
    },
  });
  gsap.from("#abouttext", 1.3, {
    y: 200,
    ease: "power4.out",
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#abouttext",
      start: "top 80%",
    },
  });
};

// ///////////////////////////////////////////////////////////
// SERVICE ANIMATION
export const detailChangeAnim = (textRef, contentRef) => {
  let tl = gsap.timeline();

  tl.to(contentRef.current, 0.5, {
    opacity: 0,
    ease: "power4.out",
  })
    .to(textRef.current, 0, {
      css: { padding: 0 },
      ease: "expo.inOut",
    })
    .to(textRef.current, 1, {
      width: 0,
      ease: "expo.inOut",
    })
    .to(textRef.current, 1, {
      width: "24%",
      ease: "expo.inOut",
    })
    .to(textRef.current, 0, {
      css: { padding: "20px" },
      ease: "expo.inOut",
    })
    .to(contentRef.current, 0.5, {
      opacity: 1,
      ease: "power4.out",
    });
};
