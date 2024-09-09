$(window).on("load", () => {
  // ______________________________header__scroll_________________________________
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2
    ? $(".header").addClass("header__scrolled")
    : $(".header").removeClass("header__scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2
      ? $(".header").addClass("header__scrolled")
      : $(".header").removeClass("header__scrolled");
  });

  // ______________________________.mobile__toggler________________________________

  $(".mobile-nav__open").on("click", function () {
    $(".mobile-nav").slideDown(400);
  });
  $(".mobile-nav__close").on("click", function () {
    $(".mobile-nav").slideUp(400);
  });
  $(".mobile-nav__list__link").on("click", function () {
    $(".mobile-nav").slideUp(400);
  });

  // ___________________faq_____________________

  $(".faq-item").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find(".faq-item__answer").slideUp(400);
    } else {
      $(".faq-item").removeClass("active");
      $(".faq-item__answer").slideUp(400);
      $(this).addClass("active");
      $(this).find(".faq-item__answer").slideDown(400);
    }
  });

  // ______________________________popup_________________________________
  $(".call-form__open").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut(300);
  });

  $(".popup__form").on("submit", function (e) {
    e.preventDefault();
    $(".popup-call-form").fadeOut(300);
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".popup__form input").val("");
    }, 700);
  });
  $(".feedback__form").on("submit", function (e) {
    e.preventDefault();

    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".feedback__form input").val("");
    }, 700);
  });

  $(".popup").click((e) => {
    let div = $(".popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut(400);

      setTimeout(() => {
        $(".popup__form input").val("");
      }, 700);
    }
  });

  // ______________________________product-more________________________________

  $(".product-more__open").on("click", function (e) {
    const imgSrc = $(this)
      .closest(".product-card")
      .find(".product-card__img")
      .attr("src");

    $(".product-more__img").attr("src", imgSrc);

    console.log(imgSrc);

    $(".product-more").fadeIn(300);
  });
  // ______________________________news-more________________________________

  $(".news-more__open").on("click", function (e) {
    const imgSrc = $(this)
      .closest(".news-item")
      .find(".news-item__image")
      .attr("src");
    console.log(imgSrc);

    $(".news-more__img").attr("src", imgSrc);

    $(".news-more").fadeIn(300);
  });

  // ______________________________more-close________________________________

  $(".more__close").on("click", function () {
    $(".product-more").fadeOut(300);
    $(".news-more").fadeOut(300);
  });

  $(".more").click((e) => {
    let div = $(".more__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".more").fadeOut(400);
    }
  });

  // ______________________________order-form_________________________________
  $(".order-form__open").on("click", function () {
    $(".order-form").fadeIn(300);
  });

  $(".order-form__close").on("click", function () {
    $(".order-form").fadeIn(300);
  });

  $(".modal").click((e) => {
    let div = $(".modal__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".modal").fadeOut(400);

      setTimeout(() => {
        $(".modal__form-item").val("");
      }, 700);
    }
  });

  // ______________________________installments_________________________________
  $(".installments__open").on("click", function () {
    $(".installments").fadeIn(300);
  });

  $(".installments__close").on("click", function () {
    $(".installments").fadeOut(300);
  });

  $(".installments").click((e) => {
    let div = $(".modal__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".installments").fadeOut(400);

      setTimeout(() => {
        $(".installments__form-item").val("");
      }, 700);
    }
  });

  // ______________________________installments__card_________________________________
  $(".installments__card").on("click", function () {
    $(".installments__card").removeClass("active");
    $(this).addClass("active");
  });

  // ______________________________cart__btn_________________________________
  $(".card__cart-btn").on("click", function () {
    $(this).toggleClass("active");
  });

  // ______________________________cards-show__more-btn_________________________________

  $(".cards-show__more-btn").on("click", function () {
    $(this).parent().hide();
    $(this).parent().parent().find(".for__more").show();
  });

  // ______________________________phone-format_________________________________
  $(".phone-format").inputmask({
    mask: "+998 (99) 999-99-99",
  });

  new WOW({
    offset: 50,
    mobile: false,
  }).init();

  let rellax = new Rellax(".rellax");
});
