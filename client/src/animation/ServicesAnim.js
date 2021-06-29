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
};
