//Carousel
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    height: "75vh",
    focus: "center",
    autoWidth: true,
    autoScroll: {
      speed: 0.5,
    },
  });
  splide.mount(window.splide.Extensions);
});
