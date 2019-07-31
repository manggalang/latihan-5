var upcoming = new Swiper('.upcoming-program .swiper-container', {
	slidesPerView: 2,
	freeMode: true,
});

var upcomingNavigation = new Swiper('.upcoming-program', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var activity = new Swiper('.activity .swiper-container', {
	slidesPerView: 3,
	freeMode: true,
});

var activityNavigation = new Swiper('.activity', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });