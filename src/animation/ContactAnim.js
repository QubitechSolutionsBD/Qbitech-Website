import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const contactAnim = () => {
    let tl = gsap.timeline();
  tl.to("#globalpagetransition", 0.7, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#contactcircle", 0.8, {
      scale: 0,
      ease: "expo.inOut",
    }).from("#contactHeading", 0.8, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
    })
    .from("#contactinputfields", 0.8, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: { amount: 0.3 },
    })
    .from("#contactbutton", 0.6, {
      css: { padding: 0, width: 0 },
      ease: "expo.inOut",
    })
    .from("#contactbuttontext", 0.6, {
      y: 70,
      ease: "power4.out",
    })
    .from("#contactmoreinfo", 0.9, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: { amount: 0.3 },
    });
}