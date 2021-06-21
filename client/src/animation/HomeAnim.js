import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// OVERLAY ANIMATION FOR DESKTOP
export const overlayAnimation = (completeAnimation) => {
  let tl = gsap.timeline();
  tl.to(".overlay .block", 1, { scale: 13, ease: "expo.inOut" })
    .to(".overlay .block img", 0.7, {
      scale: window.innerWidth > 1366 ? 0.778 : 0.624,
      ease: "expo.inOut" 
    }, "<")
    .to(" .overlay .block img", 1, { 
      x: window.innerWidth > 1366 ? 37.6 : 28.8,
      ease: "expo.inOut" 
    },)
    .to(".overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

// OVERLAY ANIMATION FOR MOBILE DEVICES
export const overlayAnimationMobile = (completeAnimation) => {
  let tl = gsap.timeline();
  tl.to(".overlay .block img", 0.6, { opacity: 0, delay: 1.2 })
    .to(".overlay .block", 1.2, {
      css: { borderRadius: 0, width: "110vw", height: "110vh" },
      ease: "expo.inOut",
    })
    .to(".overlay", 0, { css: { display: "block" } })
    .to(".overlay .block", 1, { css: { height: "50vh" }, ease: "expo.inOut" })
    .to(".overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

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
};

// SERVICE ANIMATION
export const detailChangeAnim = (setSelected, value, textRef, contentRef) => {
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
      onComplete: () => {
        setSelected(value);
      },
    });
};
