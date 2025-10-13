window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 100);
});

document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (window.innerWidth > 992) {
      item.querySelector(".dropdown-menu")?.classList.add("show");
    }
  });

  item.addEventListener("mouseleave", () => {
    if (window.innerWidth > 992) {
      item.querySelector(".dropdown-menu")?.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const typedElement = document.querySelector(".typed");

  if (typedElement) {
    const items = typedElement
      .getAttribute("data-typed-items")
      .split(",")
      .map((i) => i.trim());

    new Typed(".typed", {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }
});
