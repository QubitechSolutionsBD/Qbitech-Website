// import { Hidden } from "@material-ui/core";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const servicesAnimation = () => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 1, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#globalBannerCircle1", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#globalBannerCircle2", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#servicesbannerheading", 1, {
      y: 120,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    })
    .from(
      "#servicesbannerheadingForMobile",
      1,
      {
        y: 100,
        opacity: 0,
        ease: "power4.out",
      },
      "<"
    )
    .from("#aboutscroll", 0.8, { y: 30, opacity: 0, ease: "power4.out" });
  /////////////////////////////
  ///////////////////Our services///
  gsap.from("#servicesourserviceshead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicesourserviceshead",
      start: "top 80%",
    },
  });
  gsap.from("#servicesourservicestext", 1.4, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    scrollTrigger: {
      trigger: "#servicesourserviceshead",
      start: "top 80%",
    },
  });
  gsap.from("#servicesourservicesimage", 1.4, {
    rotate: -30,
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.6 },
    scrollTrigger: {
      trigger: "#servicesourserviceshead",
      start: "top 70%",
    },
  });
  /////////////////////////////////////////////////////
  //////////////////////////Web Development///////////
  gsap.from("#serviceswebdevelopmenthead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmenthead",
      start: "top 80%",
    },
  });
  gsap.from("#webitemcircle", 1.4, {
    delay: 0.7,
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmenthead",
      start: "top 85%",
    },
  });
  gsap.from("#webitem", 1.4, {
    delay: 0.7,
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmenthead",
      start: "top 85%",
    },
  });

  gsap.from("#webankor", 1.4, {
    delay: 1.2,
    overflow: "hidden",
    opacity: 0,
    display: "none",
    x: 130,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#serviceswebdevelopmenthead",
      start: "top 85%",
    },
  });

  /////////////////////////////////////////////////////
  //////////////////////////Software Development///////////
  gsap.from("#servicessoftwaredevelopmenthead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicessoftwaredevelopmenthead",
      start: "top 80%",
    },
  });
  gsap.from("#softcircle", 1.4, {
    delay: 0.7,

    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicessoftwaredevelopmenthead",
      start: "top 85%",
    },
  });
  gsap.from("#softitem", 1.4, {
    delay: 0.7,
    y: 120,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicessoftwaredevelopmenthead",
      start: "top 85%",
    },
  });

  gsap.from("#softankor", 1.4, {
    delay: 1.2,
    overflow: "hidden",
    opacity: 0,
    display: "none",
    x: 130,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#servicessoftwaredevelopmenthead",
      start: "top 85%",
    },
  });
  /////////////////////////////////////////////////////
  //////////////////We Dev/////////////////////////////
  gsap.from("#serviceswedevhead", 1.3, {
    y: 120,
    ease: "power4.out",

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedevhead",
      start: "top 85%",
    },
  });
  gsap.from("#wedevmobilehead", 1.3, {
    y: 120,
    ease: "power4.out",
    opacity: 0,

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#wedevmobilehead",
      start: "top 85%",
    },
  });
  gsap.from("#wedevmobiletext", 1.3, {
    delay: 0.3,
    y: 120,
    ease: "power4.out",
    opacity: 0,

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#wedevmobilehead",
      start: "top 85%",
    },
  });
  gsap.from("#wedevtext", 1.3, {
    delay: 0.7,
    y: 120,
    opacity: 0,
    ease: "power4.out",

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedevhead",
      start: "top 85%",
    },
  });

  /////////////////////////////////////////////////////
  ////////////////////Hardware Development////////////
  gsap.from("#serviceshardwaredevelopmenthead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceshardwaredevelopmenthead",
      start: "top 80%",
    },
  });
  gsap.from("#hardcircle", 1.4, {
    delay: 0.7,
    y: 120,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceshardwaredevelopmenthead",
      start: "top 85%",
    },
  });
  gsap.from("#harditem", 1.4, {
    delay: 0.7,
    y: 120,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceshardwaredevelopmenthead",
      start: "top 85%",
    },
  });

  gsap.from("#hardankor", 1.3, {
    delay: 1.2,
    overflow: "hidden",
    opacity: 0,
    display: "none",
    x: -130,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#servicessoftwaredevelopmenthead",
      start: "top 85%",
    },
  });
  /////////////////////////////////////////////////////////////
  /////////////////////Branding Solutions/////////////////////
  gsap.from("#servicesbrandingmarketinghead", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicesbrandingmarketinghead",
      start: "top 80%",
    },
  });
  gsap.from("#brandcircle", 1.4, {
    delay: 0.7,
    y: 120,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicesbrandingmarketinghead",
      start: "top 85%",
    },
  });
  gsap.from("#branditem", 1.4, {
    delay: 0.7,
    y: 120,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#servicesbrandingmarketinghead",
      start: "top 85%",
    },
  });

  gsap.from("#brandankor", 1.4, {
    delay: 1.2,
    overflow: "hidden",
    opacity: 0,
    display: "none",
    x: -130,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#servicesbrandingmarketinghead",
      start: "top 85%",
    },
  });
  /////////////////////////////////////////////////////////////////////
  ////////////////////////////We Dev2/////////////////////////////////serviceswedev2head
  gsap.from("#serviceswedev2head", 1.3, {
    y: 100,
    ease: "power4.out",
    opacity: 0,

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedev2head",
      start: "top 85%",
    },
  });
  gsap.from("#wedev2mobilehead", 1.3, {
    y: 120,
    ease: "power4.out",
    opacity: 0,

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedev2head",
      start: "top 85%",
    },
  });
  gsap.from("#wedev2mobiletext", 1.3, {
    delay: 0.3,
    y: 120,
    ease: "power4.out",
    opacity: 0,

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedev2head",
      start: "top 85%",
    },
  });
  gsap.from("#wedev2text", 1.3, {
    delay: 0.7,
    y: 100,
    opacity: 0,
    ease: "power4.out",

    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswedev2head",
      start: "top 85%",
    },
  });
};
