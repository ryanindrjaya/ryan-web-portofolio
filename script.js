var typed = new Typed(".auto-type", {
  strings: ["developer.", "front-end engineer.", "techgeek.", "design enthusiast."],
  typeSpeed: 130,
  backDelay: 2000,
  backSpeed: 100,
  loop: true
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 4,
  speed: 100,
  glare: true,
  'max-glare': 0.1,
});

function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.about-title',
    triggerHook: 0
  })
  .setPin('.about-title')
  .addTo(controller)
}

splitScroll();
