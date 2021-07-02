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
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    })
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
  gsap.from("#serviceswebdevelopmentnumber", 1.3, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmentnumber",
      start: "top 80%",
    },
  });
  gsap.from("#serviceswebdevelopmenthead", 1.4, {
    y: 200,
    ease: "power4.out",
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmentnumber",
      start: "top 80%",
    },
  });
  gsap.from("#webitemanim", 1.3, {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 8,
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: "#serviceswebdevelopmentnumber",
      start: "top 80%",
    },
  });

  /////////////////////////////////////////////////////
  //////////////////////////Software Development///////////
};
