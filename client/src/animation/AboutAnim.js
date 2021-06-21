import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// INTRO - OVERLAY ANIMATION DESKTOP
export const aboutAnumation = () => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 1, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#aboutcircle1", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#aboutcircle2", 0.8, { scale: 0, ease: "expo.inOut" })
    .from("#aboutbannerheading", 1, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: { amount: 0.3 },
    })
    .from("#aboutscroll", 0.8, { y: 30, opacity: 0, ease: "power4.out" })

    // ---------------> who we are
    gsap.from("#aboutwhoweareHeading", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutwhoweareHeading",
        start: "top 90%",
      },
    });
    gsap.from("#aboutwhowearetext", 1.4, {
      y: 200,
      ease: "power4.out",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#aboutwhowearetext",
        start: "top 75%",
      },
    });

    // ---------------> what we do
    gsap.from("#aboutwhatwedoHeading", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutwhatwedoHeading",
        start: "top 90%",
      },
    });
    gsap.from("#aboutwhatwedocircles", 1.3, {
      scale: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#aboutwhatwedoHeading",
        start: "top 85%",
      },
    });
    gsap.from("#aboutwhatwedoText", 1.3, {
      y: 200,
      ease: "power4.out",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#aboutwhatwedoText",
        start: "top 85%",
      },
    });

    // ---------------> culture, values & belief
    gsap.from("#aboutculturehead", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutculturehead",
        start: "top 80%",
      },
    });
    gsap.from("#aboutculturecontenthead", 1.3, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#aboutculturecontenthead",
        start: "top 75%",
      },
    });
    gsap.from("#aboutculturecontenttext", 1.3, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: {amount: 0.3},
      scrollTrigger: {
        trigger: "#aboutculturecontenttext",
        start: "top 70%",
      },
    });

    // ---------------> trifecta
    gsap.from("#abouttrifectahead", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#abouttrifectahead",
        start: "top 80%",
      },
    });
    gsap.from("#abouttrifectatext", 1.4, {
      y: 100,
      ease: "power4.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#abouttrifectahead",
        start: "top 80%",
      },
    });
    gsap.from("#abouttrifectaoption", 1.3, {
      y: 100,
      ease: "power4.out",
      opacity: 0,
      stagger: {amount: 0.6},
      scrollTrigger: {
        trigger: "#abouttrifectahead",
        start: "top 70%",
      },
    });
    gsap.from("#abouttrifectaimage", 1.4, {
      rotate: -30,
      scale: 0,
      ease: "expo.inOut",
      stagger: {amount: 0.6},
      scrollTrigger: {
        trigger: "#abouttrifectahead",
        start: "top 70%",
      },
    });

    // ---------------> working process
    gsap.from("#aboutprocesshead", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutprocesshead",
        start: "top 80%",
      },
    });
    gsap.from("#aboutprocessplain", 1.4, {
      y: 100,
      ease: "power4.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#aboutprocesshead",
        start: "top 80%",
      },
    });
    gsap.from("#aboutprocesslogo", 1.2, {
      scale: 0,
      ease: "expo.inOut",
      stagger: {amount: 0.4},
      scrollTrigger: {
        trigger: "#aboutprocesshead",
        start: "top 65%",
      },
    });
    gsap.from("#aboutprocesslnumber", 1.3, {
      x: 30,
      opacity: 0,
      ease: "expo.inOut",
      stagger: {amount: 0.4},
      scrollTrigger: {
        trigger: "#aboutprocesshead",
        start: "top 65%",
      },
    });
    gsap.from("#aboutprocesscontents", 1.4, {
      y: 50,
      opacity: 0,
      ease: "power4.out",
      stagger: {amount: 0.4},
      scrollTrigger: {
        trigger: "#aboutprocesshead",
        start: "top 60%",
      },
    });

    // ---------------> working process
    gsap.from("#aboutteamhead", 1.3, {
      y: 200,
      ease: "power4.out",
      skewY: 8,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: "#aboutteamhead",
        start: "top 80%",
      },
    });
    gsap.from("#aboutteamtext", 1.4, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#aboutteamtext",
        start: "top 80%",
      },
    });
    gsap.from("#aboutteamlink", 1.3, {
      scale: 0,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#aboutteamlink",
        start: "top 80%",
      },
    });
};