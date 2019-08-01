var upcomingProgram = new Swiper('.upcoming-program .swiper-container', {
  slidesPerGroup: 2,
  slidesPerView: 2,
  navigation: {
    nextEl: '.upcoming-program .swiper-button-next',
    prevEl: '.upcoming-program .swiper-button-prev',
  },
});

var activity = new Swiper('.activity .swiper-container', {
  slidesPerGroup: 3,
  slidesPerView: 3,
  navigation: {
    nextEl: '.activity .swiper-button-next',
    prevEl: '.activity .swiper-button-prev',
  },
});