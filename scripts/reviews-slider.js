console.log('slider2');
const reviewSwiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  initialSlide: 0,
  grabCursor: true,
  centeredSlides: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-review-next',
    prevEl: '.swiper-review-prev',
  },

  breakpoints: {
    900: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      spaceBetween: 20,
      slidesPerView: 2,
      loop: true,
    },
  },
});
