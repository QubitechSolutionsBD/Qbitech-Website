import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// SERVICE PAGE ANIMATIONS
export const serviceAnimation = (techRef) => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 1, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#globalBannerCircle1", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#servicebannerheading", 1, {
      y: 200,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    })
    .from("#servicebannertext", 0.8, { y: 100, opacity: 0, ease: "power4.out",})
    .from("#aboutscroll", 0.6, { y: 30, opacity: 0, ease: "power4.out" });

    // ---------------- offers anim
      gsap.from("#serviceoffercircle", 1, {
        scale: 0,
        ease: "expo.inOut",
        stagger: {amount: 0.4},
        scrollTrigger: {
          trigger: "#serviceofferHeading",
          start: "top 80%",
        },
      }); 
    gsap.to("#serviceoffersmallcircle", 1, {
      scale: 1,
      ease: "expo.inOut",
      stagger: {amount: 0.4},
      delay: 0.4,
      scrollTrigger: {
        trigger: "#serviceofferHeading",
        start: "top 80%",
      },
    });
    gsap.from("#serviceofferoffer", 1, {
      x: 100,
      opacity: 0,
      ease: "expo.inOut",
      stagger: {amount: 0.4},
      delay: 0.4,
      scrollTrigger: {
        trigger: "#serviceofferHeading",
        start: "top 80%",
      },
    });
    gsap.from("#serviceofferHeading", 1.3, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#serviceofferHeading",
        start: "top 80%",
      },
    });
    gsap.from("#serviceofferText", 1.4, {
      opacity: 0,
      y: window.innerWidth >= 480 ? 200 : 300,
      ease: "power4.out",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#serviceofferHeading",
        start: window.innerWidth >= 480 ? "top 75%" : "top 80%",
      },
    });
    gsap.from("#globalMoreCircle1", 1, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#globalMoreButton1",
        start: "top 80%",
      },
    });
    gsap.from("#globalMoreText1", 1, {
      x: 50,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#globalMoreButton1",
        start: "top 70%",
      },
    });
    // ---------------- tech anim
    gsap.from("#servicetechheading", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#servicetechheading",
        start: "top 90%",
      },
    });
    gsap.from(techRef.current, 1.3, {
      scale: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#servicetechheading",
        start: "top 90%",
      },
    });

    // ---------------- recent works
    gsap.from("#serviceprojectheadd", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#serviceprojectblock",
        start: "top 80%",
      },
    });
    gsap.from("#serviceprojecttext", 1.3, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: {amount: 0.4},
      scrollTrigger: {
        trigger: "#serviceprojecttext",
        start: "top 80%",
      },
    });
    gsap.from("#serviceprojectcard", 1.3, {
      x: "118%",
      ease: "expo.inOut",
      stagger: { amount: 1.4 },
      scrollTrigger: {
        trigger: "#serviceprojectcard",
        start: "top 70%",
      },
    });
    gsap.from("#globalMoreCircle2", 1, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#globalMoreButton2",
        start: "top 80%",
      },
    });
    gsap.from("#globalMoreText2", 1, {
      x: 50,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#globalMoreButton2",
        start: "top 70%",
      },
    });  
};