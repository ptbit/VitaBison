console.log('slider');
const swiper = new Swiper('.swiper', {
  speed: 400,
  // slidesPerView: 1.1,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  initialSlide: 0,

  // slideActiveClass: 'swiper-main-slide',
  // slideNextClass: 'swiper-next-slide',
  // slidePrevClass: 'swiper-prev-slide',

  grabCursor: true,
  centeredSlides: false,
  breakpoints: {
    900: {
      // autoHeight: true,
      // loop: true,
      slidesPerView: 5,
      // centeredSlides: false,
    },
  },
});
