console.log('slider3');
const checkReviewSwiper = new Swiper('.swiper-check-rev', {
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
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
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 3,
      loop: true,
    },
  },
});
