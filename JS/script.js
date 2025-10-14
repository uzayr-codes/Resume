window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 100);
});

// document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     if (window.innerWidth > 992) {
//       item.querySelector(".dropdown-menu")?.classList.add("show");
//     }
//   });

//   item.addEventListener("mouseleave", () => {
//     if (window.innerWidth > 992) {
//       item.querySelector(".dropdown-menu")?.classList.remove("show");
//     }
//   });
// });

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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
   const skillsSection = document.querySelector(".skills-section");
      const progressBars = document.querySelectorAll(".progress-bar");
      let animated = false;

      function showProgress() {
        progressBars.forEach(bar => {
          const value = bar.getAttribute("data-percentage");
          bar.style.width = value + "%";
        });
      }

      window.addEventListener("scroll", () => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos && !animated) {
          showProgress();
          animated = true;
        }
      });