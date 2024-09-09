$(window).on("resize", function () {
  let breakpoint = 768;
  let screenWidth = $(window).width();

  // new products
  let newProducts = $(".carousel__new-products");
  let newProductsWrapper = $(".carousel__new-products .cards__wrapper");
  let newProductsCard = $(".carousel__new-products .card");

  // Agar ekran kengligi belgilangan kenglikdan kichik bo'lsa
  if (screenWidth < breakpoint) {
    // new products
    newProducts.addClass("swiper");
    newProductsWrapper.addClass("swiper-wrapper");
    newProductsCard.addClass("swiper-slide");
  } else {
    // new products
    newProducts.removeClass("swiper");
    newProductsWrapper.removeClass("swiper-wrapper");
    newProductsCard.removeClass("swiper-slide");
  }
});

// Funksiyani dastlabki yuklanishda ham chaqirish
$(window).trigger("resize");
