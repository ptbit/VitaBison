console.log('ingredientsSwiper');
const ingredientsSwiper = new Swiper('.swiper-ing', {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  initialSlide: 0,
  grabCursor: true,
  centeredSlides: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  breakpoints: {
    900: {
      slidesPerView: 5,
    },
  },
});
