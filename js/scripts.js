$(function() {

// paralax
  $('header').parallax({imageSrc: '../images/bg1.jpg', speed: 0.5});
  $('.subscribe').parallax({imageSrc: '../images/bg2.jpg', speed: 0.5});

// animations ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.slide-left', {
    origin: 'left',
    distance: '100%',
    reset: true
  });
  sr.reveal('.slide-right', {
    origin: 'right',
    distance: '100%',
    reset: true
  });

});
