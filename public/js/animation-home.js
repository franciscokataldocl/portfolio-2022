
ScrollTrigger.matchMedia({

  "(min-width: 700px)": () => {

const imageHero = gsap.timeline();
imageHero.to(".image-hero", {
  y: "100%",
  scale: 2,
  ease: Power4.easeInOut,
  duration: 10,
});
ScrollTrigger.create({
  animation: imageHero,
  trigger: ".image-hero",
  start: "-=200 top",
  end: "bottom top",
  scrub: true,
  toggleActions: "restart complete reverse reset",
});

const imageIntro = gsap.timeline();
imageIntro.to(".image-intro", {
  y: "100%",
  scale: 2,
  ease: Power4.easeInOut,
  duration: 10,
});
ScrollTrigger.create({
  animation: imageIntro,
  trigger: ".image-intro",

  start: "-1500 top",
  end: "bottom -150%",
  scrub: true,
  toggleActions: "restart complete reverse reset",
});

  },
});
