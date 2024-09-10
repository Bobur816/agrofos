$(window).on("load", () => {
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();

  if (!($(window).width() < 768 || "ontouchstart" in window)) {
    parallaxIndex = 8;
  } else {
    parallaxIndex = 12;
  }

  $(window).scroll(() => {
    scroll = $(window).scrollTop();

    scroll > 2 * rootFont
      ? $(".main__bg").addClass("active")
      : $(".main__bg").removeClass("active");

    //__________LAZY_____________

    $(".lazy").each(function () {
      if (scroll >= $(this).offset().top - $(window).height() * 2) {
        $(this).attr("src", $(this).data("src"));
        $(this).removeClass("lazy");
      }
    });

    //_______ZOOM-IMG_______

    $(".zoom-img").each(function () {
      let cardOffset = $(this).offset().top;

      if (scroll + windowHeight > cardOffset) {
        let parallaxValue =
          (scroll + windowHeight - cardOffset) / parallaxIndex;
        $(this)
          .find("img")
          .css("transform", `scale(${1 - parallaxValue / 1000})`);
      }
    });

    $(".zoom-in-img").each(function () {
      let cardOffset = $(this).offset().top;

      if (scroll + windowHeight > cardOffset) {
        let parallaxValue =
          (scroll + windowHeight - cardOffset) / parallaxIndex;
        $(this)
          .find("img")
          .css("transform", `scale(${1 + parallaxValue / 1000})`);
      }
    });

    //_______PARALLAX_______

    $(".parallax").each(function () {
      let cardOffset = $(this).offset().top;

      if (scroll + windowHeight > cardOffset) {
        let parallaxValue =
          (scroll + windowHeight - cardOffset) / parallaxIndex;
        $(this).css("transform", "translateY(-" + parallaxValue + "px)");
      }
    });
  });
});
