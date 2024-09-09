$(window).on("load", () => {
  function updatePagination(swiper, numDiv) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length / swiper.params.slidesPerView;
    document.querySelector(
      `.${numDiv}`
    ).innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }

  const head = new Swiper(".carousel__head", {
    loop: true,

    on: {
      init: function () {
        updatePagination(this, "head__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "head__carousel-num");
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".head__carousel-next",
      prevEl: ".head__carousel-prev",
    },

    // And if we need scrollbar
  });

  const services = new Swiper(".carousel__services", {
    // loop: true,
    simulateTouch: false,

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    on: {
      init: function () {
        updatePagination(this, "services__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "services__carousel-num");
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".services__carousel-next",
      prevEl: ".services__carousel-prev",
    },

    // And if we need scrollbar
  });
  const news = new Swiper(".carousel__news", {
    loop: true,
    // simulateTouch: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".news__carousel-next",
      prevEl: ".news__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
