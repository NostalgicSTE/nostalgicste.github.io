/* Creating a new instance of the Swiper class. */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // effect: "fade",
  // direction: "vertical",
  effect: "cards",
  grabCursor: true,
  // loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
