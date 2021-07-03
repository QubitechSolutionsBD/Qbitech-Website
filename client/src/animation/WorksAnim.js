import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// INTRO - OVERLAY ANIMATION DESKTOP
export const worksAnumation = () => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 1, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#globalBannerCircle1", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#worksbannerheading", 1, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    })
    .from("#worksbannerheadingForMobile", 1, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
    }, "<")
    .from("#aboutscroll", 0.8, { y: 30, opacity: 0, ease: "power4.out" });
}

export const caseStudiesCardAnumation = (itemsRef, itemHeads) => {
  itemsRef.current.forEach(element => {
    gsap.from(element, {
      css: {width: "0%"},
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    });

    gsap.to(element, {
      css: {height: 0},
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: element,
        start: window.innerWidth > 480 ? "top 35%" : "top 50%",
      },
    });
  });

  itemHeads.current.forEach(element => {
    gsap.from(element, 1, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
      },
    })
  });
}