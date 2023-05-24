$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
