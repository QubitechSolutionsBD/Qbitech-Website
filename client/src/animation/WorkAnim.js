import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const webTemplateAnimation = () => {
  let tl = gsap.timeline();
  tl.to("#globalpagetransition", 1, { scale: 3000, ease: "expo.inOut" })
    .to("#globalpagetransition", 0.7, { scale: 0, ease: "expo.inOut" })
    .from("#webtemplatebannerimageblock", 0.8, { height: 0, ease: "expo.inOut", })
    .from("#webtempbannerimage", 1, { x: "110%", ease: "expo.inOut" })
    .from("#webTemplatebannercircle", 1, { scale: 0, ease: "expo.inOut" })
    .from("#webtemplateprojectname", 0.5,{y: 50, opacity: 0, ease: "power4.out",},"<")
    .from("#webtemplateotherblock", 0.5, {y: 60, opacity: 0, ease: "power4.out", stagger: {amount: 0.4},});

  // ---------> company desc
  gsap.from("#aboutwhydesigncircles", 1, {
    scale: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.4 },
    scrollTrigger: {
      trigger: "#webtempcomapnycontent",
      start: "top 90%",
    },
  });
  gsap.from("#webtempcomapny", 1, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.7 },
    scrollTrigger: {
      trigger: "#webtempcomapnycontent",
      start: "top 70%",
    },
  });

  // ---------> a page
  //   gsap.from("#webtempapageoverlay", 1.4, {
  //     height: 0,
  //     ease: "expo.inOut",
  //     scrollTrigger: {
  //       trigger: "#webtempapage",
  //       start: "top 80%",
  //     },
  //   });
  gsap.to("#webtempapageoverlay", 1.4, {
    y: "100%",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#webtempapage",
      start: "top 20%",
    },
  });
  gsap.from("#webtempapage", 0, {
    css: { background: "#f2f2f2" },
    scrollTrigger: {
      trigger: "#webtempapage",
      start: "top 20%",
    },
  });
  gsap.to("#webtempapageimage", 0, {
    display: "block",
    scrollTrigger: {
      trigger: "#webtempapage",
      start: "top 20%",
    },
  });

  // --------------> soltution
  gsap.from("#webtempsolution", 1, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: { amount: 0.7 },
    scrollTrigger: {
      trigger: "#webtempsolutioncontent",
      start: "top 70%",
    },
  });
  gsap.from("#webtempsolutionimageoverlay", 1, {
    height: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#webtempsolutionimage",
      start: "top 70%",
    },
  });
  gsap.from("#webtempsolutionimageimage", 0, {
    opacity: 0,
    scrollTrigger: {
      trigger: "#webtempsolutionimage",
      start: "top 40%",
    },
  });
  gsap.to("#webtempsolutionimageoverlay", 1, {
    x: "100%",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#webtempsolutionimage",
      start: "top 30%",
    },
  });

  //  --------------> mobile view
  gsap.from("#webtempmobiles", 1.4, {
    y: 150,
    opacity: 0,
    ease: "expo.inOut",
    stagger: { amount: 0.7 },
    scrollTrigger: {
      trigger: "#wetempmobileview",
      start: window.innerWidth > 480 ? "top 80%" : "top 70%" ,
    },
  });

  //   -----------------> Overview
  gsap.to("#webtempallviewsoverlay", 1.4, {
    height: 0,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#webtempallviews",
      start: "top 60%",
    },
  });

// -----------------> more projects
    gsap.from("#moreworksoverlay", {
      css: {width: "0%"},
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: "#moreworksoverlay",
        start: "top 90%",
      },
    });
    gsap.to("#moreworksoverlay", {
      css: {height: 0},
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: "#moreworksoverlay",
        start: window.innerWidth > 480 ? "top 35%" : "top 50%",
      },
    });
    gsap.from("#moreworksworkname", 1, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#moreworksworkname",
        start: "top 70%",
      },
    });
};
