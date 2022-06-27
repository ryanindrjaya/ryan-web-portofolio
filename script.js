var typed = new Typed(".auto-type", {
  strings: ["Developer.", "Techgeek.", "Musician."],
  typeSpeed: 130,
  backDelay: 2000,
  backSpeed: 100,
  loop: true
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
