let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("onview");
      } else {
        entry.target.classList.remove("onview");
      }
    });
  },
  {
    root: null,
    rootMargin: "-50% 0px",
  }
);

let target = document.querySelector(".green-rounded");
observer.observe(target);
