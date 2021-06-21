import gsap from "gsap";

let tl = gsap.timeline();
export const openNavigation = () => {
    tl.to("#navigationoverlay2", 0.6, { scale: 70, ease: "expo.inOut" })
       .to("#navigationoverlay1", 0.4, { scale: 70, ease: "expo.inOut" })
       .to("#navigationContainer", 0, { css: {display: "block"}})
       .to("#navigationContainer", 0.4, { width: "90%", height: "80vh", ease: "expo.inOut" }, "<")
       .to("#brand", 0.3, { opacity: 1, ease: "power4.out" })
       .to("#navigationmenu", 0, { display: "flex", ease: "power4.out" }, "<")
       .to("#navigationmainlinks", 1.2, { y: -50, opacity: 1, stagger:{ amount: 0.4 }, ease: "power4.out" })
       .to("#navigationaddress", 1.2, { 
         y: -30, opacity: 1, stagger:{ amount: 0.4 }, ease: "power4.out"}, "<");
}

export const closeNavigation = () => {
    tl.to("#brand", 0.3, { opacity: 0, ease: "power4.out" })
      .to("#navigationaddress", 1, { y: 30, opacity: 0, stagger:{ amount: 0.4, from: "end" }, ease: "power4.out" }, "<")
      .to("#navigationmainlinks", 1, { y: 50, opacity: 0, stagger:{ amount: 0.4, from: "end" }, ease: "power4.out" }, "<")
      .to("#navigationContainer", 0.2, { width: "20px", height: "20px", ease: "expo.inOut", delay: -0.4,})
      .to("#navigationContainer", 0, { css: {display: "none"},})
      .to("#navigationoverlay1", 0.4, { scale: 1, ease: "expo.inOut", })
      .to("#navigationoverlay2", 0.6, { scale: 1, ease: "expo.inOut", })
}