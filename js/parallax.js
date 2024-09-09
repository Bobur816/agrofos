function applyParallaxEffect(scrollPosition) {
  var parallax = document.querySelector("products-effect");
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
}

// Intersection Observer setup
var observerOptions = {
  root: null, // Viewport
  threshold: 0, // Elementning 0% ko'rinishi bilan kuzatishni boshlaydi
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element viewportga kirgandan keyin parallaxni boshlaymiz
      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY - entry.target.offsetTop;
        if (scrollPosition >= 0) {
          applyParallaxEffect(scrollPosition);
        }
      });
    }
  });
}, observerOptions);

// Kuzatiladigan elementni tanlab olish
var target = document.querySelector(".products");
observer.observe(target);
