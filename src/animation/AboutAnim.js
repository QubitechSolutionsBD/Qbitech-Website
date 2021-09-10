import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// INTRO - OVERLAY ANIMATION DESKTOP
export const aboutAnumation = () => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 0.7, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#globalBannerCircle1", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#aboutbannerheading", 0.8, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    }, "<")
    .from("#aboutbannerheadingForMobile", 0.8, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
    }, "<")
    .from("#aboutscroll", 0.5, { y: 30, opacity: 0, ease: "power4.out" });

  // ---------------> who we are
  gsap.from("#aboutwhocircle", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#aboutWhoHeading",
      start: "top 80%",
    },
  });
  gsap.from("#aboutWhoHeading", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutWhoHeading",
      start: "top 80%",
    },
  });
  gsap.from("#abouttext", 0.8, {
    y: 300,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#abouttext",
      start: "top 80%",
    },
  });

  // ---------------> why we do
  gsap.from("#aboutwhyHeadingcircle", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#aboutwhyHeading",
      start: "top 80%",
    },
  });
  gsap.from("#aboutwhyHeading", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutwhyHeading",
      start: "top 90%",
    },
  });
  gsap.from("#aboutwhydesigncircles", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#aboutwhyHeading",
      start: "top 85%",
    },
  });
  gsap.from("#aboutwhyText", 0.8, {
    y: 200,
    ease: "power4.out",
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#aboutwhyHeading",
      start: "top 85%",
    },
  });

  // ---------------> How we do
  gsap.from("#aboutprocesshead", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutprocesshead",
      start: "top 80%",
    },
  });
  gsap.from("#aboutprocessplain", 0.8, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    scrollTrigger: {
      trigger: "#aboutprocesshead",
      start: "top 80%",
    },
  });
  gsap.from("#aboutprocesslogo", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.4 },
    scrollTrigger: {
      trigger: "#aboutprocesshead",
      start: "top 65%",
    },
  });
  gsap.from("#aboutprocesslnumber", 0.8, {
    x: 30,
    opacity: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.4 },
    scrollTrigger: {
      trigger: "#aboutprocesshead",
      start: "top 65%",
    },
  });
  gsap.from("#aboutprocesscontents", 0.8, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.4 },
    scrollTrigger: {
      trigger: "#aboutprocesshead",
      start: "top 60%",
    },
  });

  // ---------------> what we do
  gsap.from("#aboutwhattext", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 7,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutwhattext",
      start: "top 80%",
    },
  })
  gsap.from("#aboutwhatheadmobile", 0.8, {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#aboutwhatheadmobile",
      start: "top 80%",
    },
  })
  gsap.from("#aboutwhathead", 0.8, {
    y: 100,
    opacity: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutwhathead",
      start: "top 80%",
    },
  })
  gsap.from("#globalMoreCircle1", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#globalMoreButton1",
      start: "top 80%",
    },
  });
  gsap.from("#globalMoreText1", 0.8, {
    x: 50,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#globalMoreButton1",
      start: "top 70%",
    },
  });
  
  // ---------------> culture, values & belief
  gsap.from("#aboutpageculturecircle", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#aboutculturehead",
      start: "top 70%",
    },
  });
  gsap.from("#aboutculturehead", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutculturehead",
      start: "top 70%",
    },
  });
  gsap.from("#aboutculturecontenthead", 0.8, {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#aboutculturecontenthead",
      start: "top 75%",
    },
  });
  gsap.from("#aboutculturecontenttext", 0.8, {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#aboutculturecontenttext",
      start: "top 70%",
    },
  });

  // ---------------> trifecta
  gsap.from("#abouttrifectacircle", 0.8, {
    scale: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#abouttrifectahead",
      start: "top 80%",
    },
  });
  gsap.from("#abouttrifectahead", 0.8, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#abouttrifectahead",
      start: "top 80%",
    },
  });
  gsap.from("#abouttrifectatext", 0.8, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    scrollTrigger: {
      trigger: "#abouttrifectahead",
      start: "top 80%",
    },
  });
  gsap.from("#abouttrifectaoption", 0.8, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    stagger: { amount: 0.5 },
    scrollTrigger: {
      trigger: "#abouttrifectahead",
      start: "top 70%",
    },
  });
  gsap.from("#abouttrifectaimage", 0.8, {
    rotate: -30,
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.6 },
    scrollTrigger: {
      trigger: "#abouttrifectahead",
      start: "top 70%",
    },
  });
};
